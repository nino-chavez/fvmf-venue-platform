import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

export default function TheVenuePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-gray-900">
          {/* Real Venue Photo Background */}
          <div className="absolute inset-0">
            <Image
              src="https://static.wixstatic.com/media/05fab7_b3cc438490214835904cd186b4842b7c~mv2.jpg/v1/fill/w_2048,h_1187,al_c,q_90,enc_avif,quality_auto/05fab7_b3cc438490214835904cd186b4842b7c~mv2.jpg"
              alt="Live music performance at The Venue"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-900/60 to-gray-900/90" />
          </div>

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

        {/* Programs & Community */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                More Than Just a Venue
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every show supports music education, preservation, and community programs across the Fox Valley
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* She Said Series */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80">
                  <Image
                    src="https://static.wixstatic.com/media/05fab7_4c1ccfc78bc64426a0d6d63f0f4eb2db~mv2.png/v1/crop/x_12,y_4,w_305,h_320/fill/w_427,h_447,al_c,lg_1,q_85,enc_avif,quality_auto/She%20Said%20show%20cards%20image.png"
                    alt="She Said: Celebrating Women in Music series"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-purple-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">"She Said..." Series</h3>
                  <p className="text-gray-600 text-sm">Celebrating women in music with performances and conversations</p>
                </div>
              </div>

              {/* Delmark Day */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80">
                  <Image
                    src="https://static.wixstatic.com/media/05fab7_6c7ece975d1a45dd99765eebe5fc5be3~mv2.png/v1/fill/w_848,h_610,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/FVMF_VENUE_DELMARK_LMS_final.png"
                    alt="Delmark Day & Masterclass Series honoring the Blues"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Delmark Day</h3>
                  <p className="text-gray-600 text-sm">Honoring the blues tradition with masterclasses and performances</p>
                </div>
              </div>

              {/* Pete Ellman Big Band */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80">
                  <Image
                    src="https://static.wixstatic.com/media/05fab7_4f1dd1cdf485436386b140e2bdfa5e30~mv2.jpg/v1/crop/x_267,y_0,w_1511,h_1152/fill/w_850,h_648,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pete%20ellman%202.jpg"
                    alt="Pete Ellman Big Band Residency with student musicians"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-orange-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Weekly Residency</h3>
                  <p className="text-gray-600 text-sm">Pete Ellman Big Band mentoring the next generation of jazz musicians</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg group"
              >
                Explore All Programs
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Venue Info Grid - Enhanced */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
                Plan Your Visit
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know for an unforgettable experience at Downtown Aurora's premier listening room
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {/* Location - Enhanced with more details */}
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-blue-600" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Location</h3>
                  <div className="space-y-3 text-gray-600 mb-6">
                    <p className="font-semibold text-gray-900">21 S. Broadway<br />Aurora, IL 60505</p>
                    <p className="text-sm">Historic Woolworth Building<br />Heart of Downtown Aurora</p>
                    <p className="text-sm font-medium text-blue-600">Entrance on Water Street Mall (rear of building)</p>
                  </div>
                  <Link
                    href="https://www.google.com/maps/place/21+S+Broadway,+Aurora,+IL+60505"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group/link"
                  >
                    <span>Get Directions</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Capacity - Enhanced with seating details */}
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-purple-600" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Capacity</h3>
                  <div className="space-y-3 text-gray-600 mb-6">
                    <p className="font-semibold text-gray-900 text-lg">200 Seats</p>
                    <p className="text-sm">Intimate listening room atmosphere</p>
                    <p className="text-sm">General admission seating</p>
                    <p className="text-sm">First-come, first-served basis</p>
                  </div>
                  <p className="text-sm text-purple-600 font-medium">Arrive early for best seats!</p>
                </div>
              </div>

              {/* Parking - Enhanced with specific locations */}
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Parking</h3>
                  <div className="space-y-3 text-gray-600 mb-6">
                    <p className="text-sm font-semibold text-gray-900">Free street parking on:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Broadway (IL Route 25)</li>
                      <li>Water Street</li>
                      <li>Downer Place</li>
                    </ul>
                    <p className="text-sm">Public lots within 2 blocks</p>
                    <p className="text-sm">Adjacent to Mundy Park</p>
                  </div>
                </div>
              </div>

              {/* Accessibility - Enhanced with contact info */}
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-500 to-green-600" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibility</h3>
                  <div className="space-y-3 text-gray-600 mb-6">
                    <p className="text-sm font-semibold text-gray-900">Fully ADA Compliant</p>
                    <p className="text-sm">Wheelchair accessible entrance</p>
                    <p className="text-sm">Accessible seating available</p>
                    <p className="text-sm">Accessible restrooms</p>
                  </div>
                  <Link href="/accessibility" className="text-green-600 hover:text-green-700 text-sm font-semibold inline-flex items-center gap-1">
                    Full accessibility info
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Amenities - NEW */}
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 to-pink-600" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h3>
                  <div className="space-y-3 text-gray-600 mb-6">
                    <p className="text-sm">State-of-the-art sound system</p>
                    <p className="text-sm">Professional lighting</p>
                    <p className="text-sm">Full bar service</p>
                    <p className="text-sm">Merchandise area</p>
                    <p className="text-sm">Climate controlled</p>
                  </div>
                </div>
              </div>

              {/* What to Expect - NEW */}
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h3>
                  <div className="space-y-3 text-gray-600 mb-6">
                    <p className="text-sm">Doors typically open 30 minutes before showtime</p>
                    <p className="text-sm">Cash and card accepted</p>
                    <p className="text-sm">Age restrictions vary by show</p>
                    <p className="text-sm">Photography policies vary</p>
                  </div>
                  <Link href="/faqs" className="text-indigo-600 hover:text-indigo-700 text-sm font-semibold inline-flex items-center gap-1">
                    View FAQs
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Tips Banner */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Insider Tips for Your Visit</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Arrive Early</h4>
                      <p className="text-sm text-gray-600">Best seats fill up fast! Come 30-45 minutes early for optimal viewing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Support Artists</h4>
                      <p className="text-sm text-gray-600">Browse artist merchandise and CDs available at most shows.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Cash & Card Welcome</h4>
                      <p className="text-sm text-gray-600">We accept both payment methods for tickets, drinks, and merchandise.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Explore Downtown</h4>
                      <p className="text-sm text-gray-600">Discover restaurants, bars, and shops within walking distance.</p>
                    </div>
                  </div>
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
