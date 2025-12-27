import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function TheVenuePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-gray-900">
          {/* Photo Background - TODO: Replace with real venue photo */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-900/60 to-gray-900/90" />

          <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
            <div className="inline-block bg-orange-500 text-white text-sm font-bold px-4 py-2 mb-6">
              21 S. BROADWAY, AURORA
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              THE VENUE
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mb-12 leading-relaxed">
              Downtown Aurora's premier intimate live music space.<br />
              Where 700+ shows a year support music education and preservation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg" asChild>
                <Link href="https://www.themusicvenue.org" target="_blank">View Show Calendar</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
                <Link href="https://www.themusicvenue.org" target="_blank">Buy Tickets</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Fox Valley Music Foundation AND The Venue */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Fox Valley Music Foundation
              <span className="block text-2xl font-normal text-gray-600 mt-2">AND</span>
              <span className="block text-blue-600 mt-2">The Venue</span>
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                After an extensive search for a permanent home for the Fox Valley Music Foundation, the perfect location was presented to us by the City of Aurora. 21 South Broadway was once the Woolworth Building. Although the building was destined for demolition as part of the City's formal and long term Master Plan, the Foundation's leaders convinced the City to give them a crack at turning the building into a live music performance and special event space. The City Council voted to approve the proposal and we entered into a Redevelopment Agreement in November 2017.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The location in the heart of downtown Aurora only seemed appropriate, given that the impetus for the formation of the Foundation came out of the knowledge and love of the Bluebird recordings that took place in downtown Aurora during 1937 and 1938. The rediscovery of those recordings by a group of local blues enthusiasts in the mid 1990's led to the formation of the Fox Valley Blues Society, who originated the Blues on the Fox festival that first took place in 1997.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The growth and significance of the Blues on the Fox festival was a huge factor in the development of the area's premier outdoor music venue named RiverEdge Park, located just north of downtown Aurora.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Today, the Foundation is located at 21 South Broadway in Aurora, also the home of our performance space called <Link href="https://www.themusicvenue.org" target="_blank" className="text-blue-600 hover:text-blue-700 font-semibold">The Venue</Link>. The building is located on the west side of Broadway (IL Rt. 25), south of Galena Blvd., north of Downer Pl., directly adjacent to Mundy Park. Our building entrance can be found on the Water Street Mall at the rear of the building.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Needless to say, we are excited about the future and what opportunities we'll find to continue our mission to preserve, promote, protect and present music in the Fox River Valley. We hope you will join us on that journey!
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                For more information on upcoming shows and events scheduled for our 200-seat live music space with the best sound around, click the button below. (Don't forget, our space is available to rent for your private event too - contact us today!)
              </p>

              <div className="text-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="https://www.themusicvenue.org" target="_blank">
                    See More About The Venue
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Info Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
              Venue Information
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Everything you need to know about visiting The Venue
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Location */}
              <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Location</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    21 S. Broadway<br />
                    Aurora, IL 60505
                  </p>
                  <Link
                    href="https://www.google.com/maps/place/21+S+Broadway,+Aurora,+IL+60505"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold group/link"
                  >
                    <span>Get Directions</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Capacity */}
              <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600" />
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Capacity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Intimate listening room<br />
                    General admission seating
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/30">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Parking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Convenient street parking<br />
                    & nearby parking lots
                  </p>
                </div>
              </div>

              {/* Accessibility */}
              <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600" />
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    ADA accessible<br />
                    Welcoming to all
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Show Stats */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              By The Numbers
            </h2>
            <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
              Every ticket sold supports music education and preservation in the Fox Valley
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-6xl sm:text-7xl font-bold text-blue-400 mb-3">
                  700+
                </div>
                <div className="text-lg text-gray-300">
                  Shows Annually
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl sm:text-7xl font-bold text-purple-400 mb-3">
                  50K
                </div>
                <div className="text-lg text-gray-300">
                  Attendees Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl sm:text-7xl font-bold text-orange-400 mb-3">
                  107
                </div>
                <div className="text-lg text-gray-300">
                  Educational Programs
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit The Venue Website CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ready to Experience Live Music?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Visit The Venue's website to see our full show calendar, buy tickets, and learn about upcoming events.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg" asChild>
              <Link href="https://www.themusicvenue.org" target="_blank">
                Visit TheMusicVenue.org →
              </Link>
            </Button>
          </div>
        </section>

        {/* Accessibility Statement */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Fox Valley Music Foundation and The Venue are committed to inclusion and accessibility for all participants and are pleased to provide reasonable accommodations for all events. Please contact our office at{' '}
              <Link href="mailto:admin@themusicvenue.org" className="text-blue-600 hover:text-blue-700 font-semibold">
                admin@themusicvenue.org
              </Link>{' '}
              or{' '}
              <Link href="tel:3312128490" className="text-blue-600 hover:text-blue-700 font-semibold">
                331-212-8490
              </Link>{' '}
              to make a reasonable accommodation request.
            </p>
          </div>
        </section>

        {/* Private Events */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Host Your Event at The Venue
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Venue is available for private rentals including corporate events, birthday parties, receptions, and more. Our intimate space provides a unique backdrop for your special occasion.
            </p>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
              <Link href="https://www.themusicvenue.org" target="_blank">
                Inquire About Rentals
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
