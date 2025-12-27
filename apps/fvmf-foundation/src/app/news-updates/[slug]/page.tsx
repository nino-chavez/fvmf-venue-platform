import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity/image'

interface PostProps {
  params: {
    slug: string
  }
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && contentType == "foundation" && slug.current == $slug][0]{
    _id,
    title,
    excerpt,
    featuredImage,
    category,
    tags,
    content,
    author,
    publishedAt,
    seo
  }`

  return await client.fetch(query, { slug })
}

const categoryColors: Record<string, string> = {
  event: 'bg-blue-100 text-blue-800',
  program: 'bg-purple-100 text-purple-800',
  community: 'bg-green-100 text-green-800',
  press: 'bg-orange-100 text-orange-800',
  'behind-the-scenes': 'bg-pink-100 text-pink-800',
}

const categoryLabels: Record<string, string> = {
  event: 'Event Announcement',
  program: 'Program Update',
  community: 'Community News',
  press: 'Press Release',
  'behind-the-scenes': 'Behind the Scenes',
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section with Featured Image */}
        {post.featuredImage && (
          <section className="relative h-[500px] bg-gray-900">
            <div className="absolute inset-0">
              <Image
                src={urlFor(post.featuredImage).width(1920).height(500).url()}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80" />
            </div>

            <div className="relative h-full flex items-end pb-16 px-4">
              <div className="container mx-auto max-w-4xl">
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
                    {categoryLabels[post.category] || post.category}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-white/90">
                  <span>{post.author || 'FVMF Team'}</span>
                  <span>•</span>
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {!post.featuredImage && (
              <header className="mb-12">
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
                    {categoryLabels[post.category] || post.category}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <span>{post.author || 'FVMF Team'}</span>
                  <span>•</span>
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </div>
              </header>
            )}

            {post.excerpt && (
              <div className="mb-8">
                <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-blue-600 pl-6 py-2">
                  {post.excerpt}
                </p>
              </div>
            )}

            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900">
              <PortableText
                value={post.content}
                components={{
                  types: {
                    image: ({ value }) => (
                      <figure className="my-8">
                        <Image
                          src={urlFor(value).width(800).url()}
                          alt={value.alt || ''}
                          width={800}
                          height={600}
                          className="rounded-lg"
                        />
                        {value.caption && (
                          <figcaption className="text-center text-sm text-gray-600 mt-2">
                            {value.caption}
                          </figcaption>
                        )}
                      </figure>
                    ),
                  },
                  marks: {
                    link: ({ value, children }) => {
                      const target = value?.openInNewTab ? '_blank' : undefined
                      const rel = value?.openInNewTab ? 'noopener noreferrer' : undefined
                      return (
                        <a href={value?.href} target={target} rel={rel} className="text-blue-600 hover:text-blue-700 underline">
                          {children}
                        </a>
                      )
                    },
                  },
                }}
              />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to News */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/news-updates"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to News & Updates
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  const query = `*[_type == "post" && contentType == "foundation"]{ "slug": slug.current }`
  const posts = await client.fetch(query)
  return posts.map((post: { slug: string }) => ({ slug: post.slug }))
}

export const revalidate = 60 // Revalidate every 60 seconds
