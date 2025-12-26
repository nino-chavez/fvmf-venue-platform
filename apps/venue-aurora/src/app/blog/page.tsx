import type { Metadata } from 'next';
import Link from 'next/link';
import { client, isSanityConfigured } from '../../../sanity/lib/client';
import { postsQuery, featuredPostsQuery } from '../../../sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stories, insights, and updates from The Venue Aurora. Discover artist spotlights, event previews, venue news, and tips for enjoying live music in Downtown Aurora.',
  keywords: [
    'venue aurora blog',
    'live music news',
    'aurora il events',
    'artist spotlights',
    'concert tips',
    'fox valley music',
  ],
  openGraph: {
    title: 'Blog | The Venue Aurora',
    description: 'Stories, insights, and updates from The Venue Aurora.',
  },
};

interface Post {
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
    slug?: { current: string };
    role?: string;
    image?: {
      asset: { url: string };
    };
  };
  categories?: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    color?: string;
  }>;
}

async function getPosts(): Promise<Post[]> {
  if (!isSanityConfigured) {
    return [];
  }
  try {
    return await client.fetch(postsQuery);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

async function getFeaturedPosts(): Promise<Post[]> {
  if (!isSanityConfigured) {
    return [];
  }
  try {
    return await client.fetch(featuredPostsQuery);
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const [posts, featuredPosts] = await Promise.all([
    getPosts(),
    getFeaturedPosts(),
  ]);

  const hasPosts = posts.length > 0;
  const hasFeatured = featuredPosts.length > 0;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Blog
        </h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          Stories, insights, and updates from The Venue Aurora. Discover artist spotlights,
          event previews, and tips for enjoying live music in Downtown Aurora.
        </p>
      </div>

      {!hasPosts ? (
        /* Empty State */
        <div className="text-center py-20">
          <div className="mb-6">
            <svg className="w-16 h-16 text-neutral-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">No Posts Yet</h2>
          <p className="text-neutral-400 mb-8">
            Our blog is coming soon! Check back for stories about artists, events, and the Aurora music scene.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-xl transition-colors"
          >
            Browse Events
          </Link>
        </div>
      ) : (
        <>
          {/* Featured Posts */}
          {hasFeatured && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">Featured</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <FeaturedPostCard key={post._id} post={post} />
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              {hasFeatured ? 'All Posts' : 'Latest Posts'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}

function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug.current}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-300 hover:border-primary-500/30 hover:shadow-[0_0_30px_-10px_hsl(25_95%_53%/0.3)]">
          {/* Image */}
          {post.mainImage && (
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors">
              {post.title}
            </h3>

            {post.excerpt && (
              <p className="text-neutral-400 text-sm line-clamp-2 mb-4">
                {post.excerpt}
              </p>
            )}

            {/* Author */}
            <div className="flex items-center gap-3 text-sm text-neutral-500">
              {post.author.image && (
                <img
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div>
                <p className="text-neutral-400">{post.author.name}</p>
                <p className="text-neutral-600">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug.current}`} className="block">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-500/30 hover:shadow-[0_0_20px_-10px_hsl(25_95%_53%/0.2)]">
          {/* Image */}
          {post.mainImage && (
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.slice(0, 2).map((category) => (
                  <span
                    key={category._id}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-300"
                    style={{
                      backgroundColor: category.color ? `${category.color}20` : undefined,
                      color: category.color || undefined,
                    }}
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-neutral-400 text-sm line-clamp-3 mb-4">
                {post.excerpt}
              </p>
            )}

            {/* Meta */}
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <span>{post.author.name}</span>
              <span>•</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
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
  );
}
