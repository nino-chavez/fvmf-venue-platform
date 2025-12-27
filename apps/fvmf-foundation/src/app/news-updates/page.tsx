import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity/client'
import { urlFor } from '@/lib/sanity/image'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  cardImage?: {
    asset: any
    alt: string
  }
  category: string
  publishedAt: string
  featured: boolean
}

interface PageProps {
  searchParams: Promise<{
    page?: string
  }>
}

const POSTS_PER_PAGE = 9

async function getPosts(page: number = 1) {
  const start = (page - 1) * POSTS_PER_PAGE
  const end = start + POSTS_PER_PAGE

  const query = `*[_type == "post" && contentType == "foundation"] | order(publishedAt desc) [${start}...${end}] {
    _id,
    title,
    slug,
    excerpt,
    cardImage,
    category,
    publishedAt,
    featured
  }`

  return await client.fetch<Post[]>(query)
}

async function getTotalPosts() {
  const query = `count(*[_type == "post" && contentType == "foundation"])`
  return await client.fetch<number>(query)
}

async function getFeaturedPosts() {
  const query = `*[_type == "post" && contentType == "foundation" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    cardImage,
    category,
    publishedAt,
    featured
  }`

  return await client.fetch<Post[]>(query)
}

const categoryColors: Record<string, string> = {
  event: 'bg-blue-100 text-blue-800',
  program: 'bg-purple-100 text-purple-800',
  community: 'bg-green-100 text-green-800',
  press: 'bg-orange-100 text-orange-800',
  'behind-the-scenes': 'bg-pink-100 text-pink-800',
}

const categoryLabels: Record<string, string> = {
  event: 'Event',
  program: 'Program Update',
  community: 'Community',
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

export default async function NewsUpdatesPage({ searchParams }: PageProps) {
  const { page } = await searchParams
  const currentPage = parseInt(page || '1')

  const [featuredPosts, allPosts, totalPosts] = await Promise.all([
    getFeaturedPosts(),
    getPosts(currentPage),
    getTotalPosts(),
  ])

  const regularPosts = allPosts.filter(post => !post.featured)
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-blue-900 to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay connected with the latest news, events, and stories from the Fox Valley Music Foundation.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/news-updates/${post.slug.current}`}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {post.cardImage && (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={urlFor(post.cardImage).width(600).height(400).url()}
                          alt={post.cardImage.alt || post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
                            {categoryLabels[post.category] || post.category}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{formatDate(post.publishedAt)}</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All News & Updates</h2>

            {regularPosts.length === 0 && featuredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-4">No news articles yet.</p>
                <p className="text-gray-500">Check back soon for updates!</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post) => (
                    <Link
                      key={post._id}
                      href={`/news-updates/${post.slug.current}`}
                      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    >
                      {post.cardImage && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={urlFor(post.cardImage).width(600).height(400).url()}
                            alt={post.cardImage.alt || post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
                              {categoryLabels[post.category] || post.category}
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">{formatDate(post.publishedAt)}</p>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center items-center gap-2">
                    {/* Previous Button */}
                    {currentPage > 1 ? (
                      <Link
                        href={`/news-updates?page=${currentPage - 1}`}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        Previous
                      </Link>
                    ) : (
                      <span className="px-4 py-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
                        Previous
                      </span>
                    )}

                    {/* Page Numbers */}
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <Link
                          key={pageNum}
                          href={`/news-updates?page=${pageNum}`}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            pageNum === currentPage
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {pageNum}
                        </Link>
                      ))}
                    </div>

                    {/* Next Button */}
                    {currentPage < totalPages ? (
                      <Link
                        href={`/news-updates?page=${currentPage + 1}`}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        Next
                      </Link>
                    ) : (
                      <span className="px-4 py-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
                        Next
                      </span>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export const revalidate = 60 // Revalidate every 60 seconds
