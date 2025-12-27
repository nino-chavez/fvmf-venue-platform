import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { Timeline } from '@/components/Timeline'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Preserving the musical heritage of the Fox Valley since 2014
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                The Fox Valley Music Foundation's mission is to <strong>Preserve, Promote, Protect and Present</strong> the wonderful music of the Fox River Valley in Illinois to the entire area.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We are a 501(c)(3)-recognized non-profit organization dedicated to preserving the rich musical heritage of the Fox Valley area through education, live events, and music history programs.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                We believe music plays a vital role in our community - <strong>"Music IS Community"</strong> and it should be accessible to all.
              </p>
            </div>
          </div>
        </section>

        {/* The 4 P's */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
              Our Goals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Preserve */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 flex items-center justify-center mb-6 mx-auto">
                  <Image
                    src="/images/icon-preserve.png"
                    alt="Preserve"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Preserve</h3>
                <p className="text-gray-700 leading-relaxed">
                  Preserve the musical heritage of the Fox Valley area through archival work, historical research, and documentation of our rich blues and music history.
                </p>
              </div>

              {/* Promote */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 flex items-center justify-center mb-6 mx-auto">
                  <Image
                    src="/images/icon-promote.png"
                    alt="Promote"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Promote</h3>
                <p className="text-gray-700 leading-relaxed">
                  Promote local musicians and their talent by providing performance opportunities, exposure, and a platform to share their art with the community.
                </p>
              </div>

              {/* Protect */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 flex items-center justify-center mb-6 mx-auto">
                  <Image
                    src="/images/icon-protect.png"
                    alt="Protect"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Protect</h3>
                <p className="text-gray-700 leading-relaxed">
                  Protect our music culture and ensure that future generations have access to quality live music experiences and educational opportunities.
                </p>
              </div>

              {/* Present */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-3 max-w-md mx-auto lg:max-w-none">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">Present</h3>
                <p className="text-gray-700 leading-relaxed text-center lg:text-left">
                  Present live music through The Venue at 21 S. Broadway, providing an intimate, accessible space for the community to experience over 700 shows annually—bringing people together through the power of music.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our History - Comprehensive */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
              The History of Fox Valley Music Foundation
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The Fox River Valley area of Illinois is rich in music of all kinds, from the earliest orchestra and bands in the mid-19th century, to the legendary blues recordings made at the Sky Club of the Leland Hotel in the late 1930s, to the current day Jazz Fest and Singer-Songwriter Series at The Venue and Blues On The Fox at RiverEdge Park.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Blues, Rock & Roll, Gospel, Metal, Classical…it's all here in some form, shape or fashion. Artists, venues, organizations, retailers and enthusiasts of all kind are scattered throughout the Fox Valley area. It's our mission and sincere desire to ensure this rich musical history and the artists responsible for it are seen and heard, both now and in the future.
              </p>

              {/* Visual Timeline */}
              <div className="my-16">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
                <Timeline
                  events={[
                    {
                      year: '1937',
                      title: 'Leland Hotel Bluebird Sessions',
                      description: 'Over 320 recordings made at the Sky Club of the Leland Hotel, featuring top Chicago and St. Louis Blues artists.',
                      highlight: true
                    },
                    {
                      year: '2004',
                      title: 'Blues On The Fox Festival Begins',
                      description: 'The festival launches in downtown Aurora, celebrating the rediscovery of the Bluebird Sessions legacy.'
                    },
                    {
                      year: '2010',
                      title: 'Festival Transitions to Paramount',
                      description: 'Aurora Civic Center Authority and Paramount Theatre take leadership while volunteers remain deeply involved.'
                    },
                    {
                      year: '2013',
                      title: 'RiverEdge Park Opens',
                      description: 'BOTF festival moves to the new RiverEdge Park, with Dr. John and Buddy Guy headlining the inaugural event.'
                    },
                    {
                      year: '2014',
                      title: 'FVMF Becomes 501(c)(3)',
                      description: 'The volunteer group officially becomes Fox Valley Music Foundation, dedicated to preserving and promoting music.',
                      highlight: true
                    },
                    {
                      year: '2019',
                      title: 'The Venue Opens',
                      description: 'The 200-seat listening room opens in the historic Woolworth Building at 21 S. Broadway in downtown Aurora.',
                      highlight: true
                    },
                    {
                      year: 'Today',
                      title: '700+ Shows Annually',
                      description: 'FVMF and The Venue continue to serve the community with hundreds of performances and educational programs each year.'
                    }
                  ]}
                />
              </div>

              {/* The Bluebird Legacy */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Leland Hotel Bluebird Sessions</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  In 1937 and 1938, more than 320 recordings were made in the Sky Club of the Leland Hotel in downtown Aurora for Victor's Bluebird record label. The sessions were "produced" by Lester Melrose. The cream of the crop in terms of Chicago and St. Louis Blues artists took part in the sessions that occurred over a period of 20 months.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The (re)discovery of those recordings by a group of Aurora-based blues music lovers led to the creation of the Fox Valley Blues Society and the Blues On The Fox festival. That festival brought together a group of music lovers who, for many years, worked together organizing and running the festival itself with the support of the City of Aurora's Special Events Division.
                </p>
              </div>

              {/* Blues on the Fox to RiverEdge Park */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">From Blues on the Fox to RiverEdge Park</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From 2004 until 2009, the Blues On The Fox Festival was managed by The City of Aurora and a group of volunteers, steeped in their love of the Blues. In 2010, the reins for that festival were handed over to the Aurora Civic Center Authority with the Paramount Theatre leading the charge. The volunteer group remained involved with artist selection and the festival in general. Meanwhile, a new performance venue was on the drawing board.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                RiverEdge Park, once a seemingly distant dream, became a reality while the BOTF festival was fast becoming the premier Blues festival in the Midwest. After BOTF outgrew the confines of Galena Boulevard in downtown Aurora, they kicked off the inaugural year for RiverEdge Park in June 2013 with Dr. John and Buddy Guy headlining the weekend event.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                As all of this was taking place, the original volunteer group who nurtured the festival during its formative years reinvented their organization and in 2014, became a 501(c)(3) foundation: the Fox Valley Music Foundation (FVMF). The Foundation's purpose is to Preserve, Protect, Promote, Present, and Educate on music of all genres and its importance in our community.
              </p>

              {/* Fox Valley Music Foundation */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fox Valley Music Foundation Today</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Since its establishment in 2014, the Fox Valley Music Foundation (FVMF) has served as a champion for music and musicians across the Fox Valley region in Illinois. As a nonprofit organization, its mission has been to celebrate and preserve the rich musical heritage of the area while providing support and opportunities for emerging and established artists.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The foundation has tirelessly worked to organize and host diverse musical events, including concerts, workshops, and educational programs, aiming to engage and inspire audiences of all ages and backgrounds. Through its efforts, the Fox Valley Music Foundation has become a vital resource for musicians, offering guidance, networking opportunities, and a platform for local talent to showcase their artistry.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Additionally, the foundation has been dedicated to music education, collaborating with schools and community partners to foster a greater appreciation for music and its cultural significance. Through its initiatives, the Fox Valley Music Foundation has bridged generations through the universal language of music, leaving an indelible mark on the cultural landscape of the Fox Valley.
              </p>

              {/* The Venue */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Venue: Our Home Since 2019</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Fox Valley Music Foundation is the home of The Venue, the 200-seat listening room housed in the old Woolworth Building in the heart of downtown Aurora. Since its opening in June 2019, The Venue has emerged as a premier destination for live entertainment and artistic expression, and has encapsulated the spirit of creativity and innovation, providing a stage for a diverse range of performances and musical experiences.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With support from the City of Aurora and an intrepid and dedicated group of volunteers, the historic Woolworth building has been meticulously transformed into a state-of-the-art facility, equipped with modern sound and lighting systems to elevate the audience's immersive experience. Its intimate yet dynamic setting has set the stage for countless memorable performances, attracting top-tier musicians, bands, and artists from various genres.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Venue has been an ardent supporter of local talent, nurturing emerging musicians and providing them with a platform to share their craft with the community. In doing so, it has become a cherished hub for creative expression and artistic collaboration, fostering a rich tapestry of musical diversity reflective of the Aurora community's vibrant multicultural heritage.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Moreover, The Venue has served as a beacon of cultural enrichment, hosting music festivals, workshops, and special events that have resonated with audiences and further enriched the city's cultural fabric.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed italic">
                As the Fox Valley Music Foundation and The Venue continue to evolve, their commitment to celebrating music and the arts remains unwavering, solidifying their indomitable presence as pillars of artistic expression and community engagement in Aurora, IL, and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Your support helps us continue our mission to preserve, promote, protect, and present the wonderful music of the Fox Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/donate">Support Our Mission</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/membership">Become a Member</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/programs">View Our Programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
