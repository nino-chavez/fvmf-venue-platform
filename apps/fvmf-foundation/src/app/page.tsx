import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import Link from 'next/link'
import Image from 'next/image'
import { client, featuredProgramsQuery, featuredTestimonialsQuery, allImpactMetricsQuery } from '@/lib/sanity'
import type { Program, Testimonial, ImpactMetric } from '@/lib/sanity'

export default async function HomePage() {
  const [programs, testimonials, impactData] = await Promise.all([
    client.fetch<Program[]>(featuredProgramsQuery),
    client.fetch<Testimonial[]>(featuredTestimonialsQuery),
    client.fetch<{ impactMetrics: ImpactMetric[] }[]>(allImpactMetricsQuery),
  ])

  // Flatten and deduplicate impact metrics
  const allMetrics = impactData.flatMap(p => p.impactMetrics || [])
  const uniqueMetrics = Array.from(
    new Map(allMetrics.map(m => [`${m.value}-${m.label}`, m])).values()
  )

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section - VENUE FIRST - Full bleed photo with energy */}
        <section className="relative h-screen min-h-[600px] bg-gray-900">
          {/* Photo Background */}
          <Image
            src="/images/hero-music-background.png"
            alt="Live music performance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-900/60 to-gray-900/90" />

          {/* Venue Badge - Top Left */}
          <div className="absolute top-8 left-8 z-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded">
              <p className="text-white/90 text-sm font-semibold tracking-wide">THE VENUE</p>
              <p className="text-white/70 text-xs">21 S. Broadway, Aurora</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
              THE FOX VALLEY<br />
              <span className="text-blue-400">MUSIC FOUNDATION</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mb-12 leading-relaxed">
              Preserve, Promote, Protect<br />
              and Present Music in Fox Valley
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg" asChild>
                <Link href="/the-venue">SEE UPCOMING SHOWS</Link>
              </Button>
              <Button variant="gold" size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 py-6 text-lg" asChild>
                <Link href="/donate">SUPPORT THE MISSION</Link>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="flex flex-col items-center gap-2 text-white/60">
                <span className="text-sm tracking-wider">SCROLL</span>
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bar - Sticky Actions */}
        <section className="sticky top-20 z-40 bg-gray-900 border-b border-gray-800 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4">
              <Button size="sm" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white" asChild>
                <Link href="/the-venue">Get Tickets</Link>
              </Button>
              <Button size="sm" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white" asChild>
                <Link href="/donate">Donate</Link>
              </Button>
              <Button size="sm" variant="outline" className="border-gray-500 text-gray-400 hover:bg-gray-700 hover:text-white" asChild>
                <Link href="/membership">Become a Member</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Shows - Horizontal Scroll */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Upcoming Shows
              </h2>
              <Link href="/the-venue" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                View All
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Horizontal scroll container */}
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-6" style={{ width: 'max-content' }}>
                {/* Event Card - Repeat 5 times with varied gradients */}
                {[
                  { gradient: 'from-blue-500 to-purple-600' },
                  { gradient: 'from-purple-500 to-pink-600' },
                  { gradient: 'from-orange-500 to-red-600' },
                  { gradient: 'from-green-600 to-teal-600' },
                  { gradient: 'from-blue-600 to-indigo-700' }
                ].map((item, i) => (
                  <div key={i} className="w-80 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex-shrink-0">
                    <div className={`h-48 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                      <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-semibold">UPCOMING</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-blue-600 font-semibold mb-2">SAT, JAN 15 • 8:00 PM</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Artist Name {i + 1}</h3>
                      <p className="text-gray-600 text-sm mb-4">Genre • $15-25</p>
                      <Button size="sm" className="w-full bg-blue-500 hover:bg-blue-600">
                        Get Tickets
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Mission - Photo + Text Overlay */}
        <section className="relative min-h-[600px] bg-gray-900">
          {/* Background photo - TODO: Bluebird Records or historical photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-2xl">
              <div className="inline-block bg-orange-500 text-white text-sm font-bold px-4 py-2 mb-6">
                OUR MISSION
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Preserve, Promote, Protect<br />and Present Music
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our mission is to Preserve, Promote, Protect and Present the wonderful music of the Fox Valley area of Illinois. We believe music plays a vital role in our community - "Music IS Community" and it should be accessible to all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                  <Link href="/about">Learn Our Story</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                  <Link href="/news-updates">Latest News</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Numbers - ENLARGED & ENHANCED */}
        {uniqueMetrics.length > 0 && (
          <section className="py-32 bg-gradient-to-b from-white via-blue-50/30 to-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-gray-900">
                Making an Impact
              </h2>
              <p className="text-center text-gray-600 text-xl mb-20 max-w-2xl mx-auto">
                Every show supports music education. Every donation preserves our heritage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
                <div className="text-center group">
                  <AnimatedCounter
                    value={700}
                    suffix="+"
                    duration={2500}
                    className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="text-xl text-gray-700 font-semibold uppercase tracking-wider">
                    Shows Annually
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Live performances at The Venue
                  </div>
                </div>
                <div className="text-center group">
                  <AnimatedCounter
                    value={107}
                    duration={2000}
                    className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="text-xl text-gray-700 font-semibold uppercase tracking-wider">
                    Educational Programs
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Music education initiatives
                  </div>
                </div>
                <div className="text-center group">
                  <AnimatedCounter
                    value={50000}
                    suffix="+"
                    duration={3000}
                    className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="text-xl text-gray-700 font-semibold uppercase tracking-wider">
                    Show Attendees
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Community members reached
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* The Venue - Photo Gallery */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Experience The Venue
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                An intimate 200-seat listening room in the heart of downtown Aurora.
                Historic Woolworth Building transformed into a state-of-the-art performance space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Venue Interior Photo */}
              <Link href="/the-venue" className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-900 group cursor-pointer block shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/images/venue-interior.jpg"
                  alt="The Venue interior - intimate 200-seat listening room"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                      <span className="text-blue-400 text-xs font-semibold uppercase tracking-wide">The Venue</span>
                    </div>
                    <h3 className="text-white text-lg font-bold mb-1">Intimate Listening Room</h3>
                    <p className="text-white/80 text-sm">200-seat capacity • Downtown Aurora</p>
                  </div>
                </div>
              </Link>

              {/* Stage Setup Photo */}
              <Link href="/the-venue" className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-900 group cursor-pointer block shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/images/venue-stage.jpg"
                  alt="The Venue stage with professional audio equipment"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-orange-400 text-xs font-semibold uppercase tracking-wide">Professional Audio</span>
                    </div>
                    <h3 className="text-white text-lg font-bold mb-1">State-of-the-Art Sound</h3>
                    <p className="text-white/80 text-sm">Best sound system in Aurora</p>
                  </div>
                </div>
              </Link>

              {/* Audience Experience Photo */}
              <Link href="/the-venue" className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-900 group cursor-pointer block shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/images/venue-audience.jpg"
                  alt="Engaged audience at intimate live performance"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="text-purple-400 text-xs font-semibold uppercase tracking-wide">Community</span>
                    </div>
                    <h3 className="text-white text-lg font-bold mb-1">Live Music Experience</h3>
                    <p className="text-white/80 text-sm">Where music brings us together</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/the-venue">Explore The Venue</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="text-blue-400 text-5xl mb-6">"</div>
            <blockquote className="text-white">
              <p className="text-2xl sm:text-3xl mb-8 leading-relaxed font-light">
                I love absolutely everything about The Venue: the staff, the atmosphere, the prices, the convenient parking, and most of all, the ever-surprising variety of entertainment. I tell people you could literally throw a dart at their calendar and feel confident you'll see a great show.
              </p>
              <footer className="text-white/80">
                <cite className="not-italic font-semibold text-lg">
                  John "Jack" Merkel, Aurora
                </cite>
                <p className="text-sm mt-2 text-white/60">FVMF Donor & Patron of The Venue</p>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Latest News - Card Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Latest News
                </h2>
                <p className="text-gray-600">Stay connected with what's happening</p>
              </div>
              <Link href="/news-updates" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                View All News
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* News Card 1 */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600" />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">Dec 4, 2025</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Fox Valley Music Foundation Hosts Inclusive Holiday Concert
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Special Holiday Performance for WDSRA, NEDSRA, and SEASPAR! Supported by Dunham Foundation Grant.
                  </p>
                  <Link href="/news-updates" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* News Card 2 */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600" />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">Oct 15, 2025</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Painter Lewis Achenbach Joins Delmark Day & Masterclass
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Get ready for a fusion of art and music that transforms sound into visual expression!
                  </p>
                  <Link href="/news-updates" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* News Card 3 */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600" />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">Aug 12, 2025</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Dunham Foundation Grant Advances FVMF's Mission
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Funding will support the new "Rhythms For All" series, creating inclusive concert experiences for special needs and neurodivergent audiences.
                  </p>
                  <Link href="/news-updates" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Membership CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Join the Community
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Become a member and get exclusive benefits including discounted tickets,
              member-only events, and the satisfaction of supporting live music in Fox Valley.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg" asChild>
              <Link href="/membership">Explore Membership Tiers</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
