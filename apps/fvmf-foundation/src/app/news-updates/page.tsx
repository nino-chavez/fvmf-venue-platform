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
  featuredImage?: {
    asset: any
    alt: string
  }
  category: string
  publishedAt: string
  featured: boolean
}

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    category,
    publishedAt,
    featured
  }`

  return await client.fetch<Post[]>(query)
}

async function getFeaturedPosts() {
  const query = `*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
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

export default async function NewsUpdatesPage() {
  const [featuredPosts, allPosts] = await Promise.all([
    getFeaturedPosts(),
    getPosts(),
  ])

  const regularPosts = allPosts.filter(post => !post.featured)

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
                    {post.featuredImage && (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={urlFor(post.featuredImage).width(600).height(400).url()}
                          alt={post.featuredImage.alt || post.title}
                          fill
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/news-updates/${post.slug.current}`}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  >
                    {post.featuredImage && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={urlFor(post.featuredImage).width(600).height(400).url()}
                          alt={post.featuredImage.alt || post.title}
                          fill
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
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export const revalidate = 60 // Revalidate every 60 seconds
