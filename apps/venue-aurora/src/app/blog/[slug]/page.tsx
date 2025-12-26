import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { client, isSanityConfigured } from '../../../../sanity/lib/client';
import { postQuery, relatedPostsQuery, postSlugsQuery } from '../../../../sanity/lib/queries';
import ArticleSchema from '../../../components/ArticleSchema';
import { CopyLinkButton } from '../../../components/CopyLinkButton';

export async function generateStaticParams() {
  if (!isSanityConfigured) {
    return [];
  }
  try {
    const slugs: string[] = await client.fetch(postSlugsQuery);
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const publishedTime = new Date(post.publishedAt).toISOString();
  const modifiedTime = post._updatedAt ? new Date(post._updatedAt).toISOString() : publishedTime;

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords || post.categories?.map((cat: { title: string }) => cat.title),
    authors: post.author ? [{ name: post.author.name }] : undefined,
    openGraph: {
      title: post.seo?.ogTitle || post.title,
      description: post.seo?.ogDescription || post.excerpt,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: post.author ? [post.author.name] : undefined,
      images: post.mainImage
        ? [
            {
              url: post.mainImage.asset.url,
              alt: post.mainImage.alt || post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.ogTitle || post.title,
      description: post.seo?.ogDescription || post.excerpt,
      images: post.mainImage ? [post.mainImage.asset.url] : undefined,
    },
  };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  _updatedAt?: string;
  excerpt?: string;
  mainImage?: {
    asset: { url: string };
    alt?: string;
    caption?: string;
  };
  author: {
    name: string;
    slug?: { current: string };
    role?: string;
    image?: {
      asset: { url: string };
    };
    bio?: string;
  };
  categories?: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    color?: string;
    description?: string;
  }>;
  body: any[];
  relatedEvent?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
  };
  featured?: boolean;
}

interface RelatedPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: {
    asset: { url: string };
    alt?: string;
  };
  author: {
    name: string;
  };
}

async function getPost(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) {
    return null;
  }
  try {
    return await client.fetch(postQuery, { slug });
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

async function getRelatedPosts(postId: string, categories: string[]): Promise<RelatedPost[]> {
  if (!isSanityConfigured) {
    return [];
  }
  try {
    return await client.fetch(relatedPostsQuery, { postId, categories });
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { url: string }; alt?: string; caption?: string } }) => (
      <figure className="my-8">
        <img
          src={value.asset.url}
          alt={value.alt || ''}
          className="w-full rounded-xl"
        />
        {value.caption && (
          <figcaption className="text-sm text-neutral-400 mt-2 text-center">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    youtube: ({ value }: { value: { url: string } }) => {
      const videoId = value.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1];
      if (!videoId) return null;
      return (
        <div className="my-8 aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-bold text-white mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl font-bold text-white mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-xl font-bold text-white mt-6 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 italic text-neutral-300">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-neutral-300 leading-relaxed mb-6">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => {
      const href = value?.href || '#';
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 hover:text-primary-300 underline transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-neutral-300">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-neutral-300">{children}</ol>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const categoryIds = post.categories?.map((cat) => cat.slug.current) || [];
  const relatedPosts = categoryIds.length > 0 ? await getRelatedPosts(post._id, categoryIds) : [];

  const canonicalUrl = `https://venueaurora.com/blog/${post.slug.current}`;

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.excerpt || ''}
        datePublished={post.publishedAt}
        dateModified={post._updatedAt}
        authorName={post.author.name}
        imageUrl={post.mainImage?.asset.url}
        url={canonicalUrl}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-neutral-400">
          <Link href="/" className="hover:text-primary-400 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary-400 transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-500">{post.title}</span>
        </nav>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category) => (
              <Link
                key={category._id}
                href={`/blog/category/${category.slug.current}`}
                className="px-3 py-1 text-sm font-medium rounded-full bg-neutral-800 text-neutral-300 hover:bg-neutral-700 transition-colors"
                style={{
                  backgroundColor: category.color ? `${category.color}20` : undefined,
                  color: category.color || undefined,
                }}
              >
                {category.title}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            {post.author.image && (
              <img
                src={post.author.image.asset.url}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
            )}
            <div>
              <p className="text-white font-medium">{post.author.name}</p>
              {post.author.role && (
                <p className="text-sm text-neutral-400">{post.author.role}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            {post._updatedAt && post._updatedAt !== post.publishedAt && (
              <>
                <span>•</span>
                <span>
                  Updated{' '}
                  {new Date(post._updatedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Main Image */}
        {post.mainImage && (
          <figure className="mb-12">
            <img
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              className="w-full rounded-2xl"
            />
            {post.mainImage.caption && (
              <figcaption className="text-sm text-neutral-400 mt-3 text-center">
                {post.mainImage.caption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Body Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {/* Author Bio */}
        {post.author.bio && (
          <div className="mt-16 p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-3">About the Author</h3>
            <div className="flex gap-4">
              {post.author.image && (
                <img
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full flex-shrink-0"
                />
              )}
              <div>
                <p className="text-white font-semibold mb-1">{post.author.name}</p>
                {post.author.role && (
                  <p className="text-sm text-neutral-400 mb-2">{post.author.role}</p>
                )}
                <p className="text-neutral-300 text-sm leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </div>
        )}

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <h3 className="text-lg font-bold text-white mb-4">Share this post</h3>
          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonicalUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors"
            >
              Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors"
            >
              Facebook
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors"
            >
              LinkedIn
            </a>
            <CopyLinkButton url={canonicalUrl} />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-neutral-800">
          <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost._id} className="group">
                <Link href={`/blog/${relatedPost.slug.current}`} className="block">
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-500/30 hover:shadow-[0_0_20px_-10px_hsl(25_95%_53%/0.2)]">
                    {relatedPost.mainImage && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={relatedPost.mainImage.asset.url}
                          alt={relatedPost.mainImage.alt || relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      {relatedPost.excerpt && (
                        <p className="text-neutral-400 text-sm line-clamp-3 mb-4">
                          {relatedPost.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span>{relatedPost.author.name}</span>
                        <span>•</span>
                        <time dateTime={relatedPost.publishedAt}>
                          {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
