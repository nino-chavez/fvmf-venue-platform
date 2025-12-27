import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity/image'

interface PageProps {
  params: {
    slug: string
  }
}

async function getPage(slug: string) {
  const query = `*[_type == "page" && contentType == "foundation" && slug.current == $slug][0]{
    _id,
    title,
    excerpt,
    heroImage,
    content,
    callToAction,
    publishedAt,
    seo
  }`

  return await client.fetch(query, { slug })
}

export default async function PageRoute({ params }: PageProps) {
  const page = await getPage(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        {page.heroImage && (
          <section className="relative h-[400px] bg-gray-900">
            <div className="absolute inset-0">
              <Image
                src={urlFor(page.heroImage).width(1920).height(400).url()}
                alt={page.heroImage.alt || page.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80" />
            </div>

            <div className="relative h-full flex items-center justify-center px-4 text-center">
              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {page.title}
                </h1>
                {page.excerpt && (
                  <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    {page.excerpt}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {!page.heroImage && (
              <>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  {page.title}
                </h1>
                {page.excerpt && (
                  <p className="text-xl text-gray-600 mb-8">
                    {page.excerpt}
                  </p>
                )}
              </>
            )}

            <div className="prose prose-lg max-w-none">
              <PortableText
                value={page.content}
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

            {/* Call to Action */}
            {page.callToAction?.text && page.callToAction?.url && (
              <div className="mt-12 text-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href={page.callToAction.url} target="_blank">
                    {page.callToAction.text}
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  const query = `*[_type == "page" && contentType == "foundation"]{ "slug": slug.current }`
  const pages = await client.fetch(query)
  return pages.map((page: { slug: string }) => ({ slug: page.slug }))
}
