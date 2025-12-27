import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

export default function ProgramsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-32 bg-gray-900 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-music-background.png"
              alt="Music programs background"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-blue-900/70 to-gray-900/90" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Programs & Projects
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The Fox Valley Music Foundation leads and supports a wide range of music programs, projects, and events held at The Venue and throughout the Fox Valley River area.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              In addition to organizing, promoting, and sponsoring cornerstone events like Blues on Water Street and hosting Songwriter Workshops across the region, the Foundation proudly presents ongoing initiatives such as Rhythms For All, the empowering She Said series, the immersive Delmark Day & Master Class, monthly Jazz Sessions, and the weekly Pete Ellman Big Band Residency. Through these diverse offerings, the Foundation continues to deliver on its mission: to <strong>Preserve, Promote, Protect, and Present</strong>.
            </p>
          </div>
        </section>

        {/* She Said Series */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  "She Said...": Celebrating Women in Music
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The "She Said" series uplifts and amplifies the voices of women in music: the performers, the songwriters, and the creators shaping today's sound and stories. From blues to rock to jazz and beyond, "She Said..." showcases the power of the artistry, collaboration, and representation for women working in an industry that has been traditionally male-dominated and focused.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "She Said" is curated and hosted by blues/rock/roots fiddle player and singer-songwriter Anne Harris. In her role as host, Harris brings her unique understanding of music's transcendent power to bypass all superficial differences, universally uniting us in its mystery and joy to every conversation and performance with special artists like Susan Voelz (Poi Dog Pondering); Cathy Richardson (Jefferson Starship, Cathy Richardson Band); virtuoso blues guitarist Joanna Connor; and Lynne Jordan (Lynne Jordan & The Shivers).
                </p>
                <p className="text-base text-gray-600 mb-8 italic">
                  This series is funded in part by the Aurora Women's Empowerment Foundation.
                </p>
                <p className="text-xl font-semibold text-blue-600 mb-6">
                  Empowering women. Elevating artistry. Expanding the stage.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="https://www.foxvalleymusicfoundation.com/she-said-performance-series" target="_blank">
                    Learn More About She Said →
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg h-96 overflow-hidden group">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </section>

        {/* Delmark Day */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg h-96 overflow-hidden group">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Delmark Day & Masterclass Series: Honoring the Blues
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Through a Music In Action grant from Live Music Society, FVMF partnered with Delmark Records, one of the oldest and most well-respected independent blues/jazz recording labels in the country. Each Delmark Day and Masterclass event brings together world-class artists, rising stars, and devoted fans to celebrate the living tradition of blues music, which is at the core of Fox Valley Music Foundation's musical identity and origins.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Past events have included masterclass instruction from Sheryl Youngblood, Bob Stroger, and Billy Flynn, with performances by veteran artists Demetria Taylor, Bob Stroger & Friends, and up-and-coming groups Patch of Blues and Knott Us Band.
                </p>
                <p className="text-xl font-semibold text-blue-600 mb-6">
                  Delmark Day reminds us where the music came from - and why it still matters.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="https://www.foxvalleymusicfoundation.com/delmark-day-masterclass-series" target="_blank">
                    Learn More About Delmark Day →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rhythms For All */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Rhythms For All: Inclusive Music for Neurodivergent Communities
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Funded by a grant from the Dunham Foundation, <strong>Rhythms For All</strong> is an innovative and inclusive program designed to ensure that individuals with special needs have access to the joy and connection of live music. With accessibility and inclusivity at its core, the program provides a sensory-friendly environment tailored to meet the unique needs of attendees while fostering community, creativity, and connection.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  More than 300 patrons from a variety of organizations, including Fox Valley Special Recreation Association, Western DuPage Special Recreation Association, Blackhawk Academy, and Association for Individual Development have taken part in these events.
                </p>
                <p className="text-xl font-semibold text-blue-600 mb-6">
                  A space where accessibility, creativity, and community come together through the power of music.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="https://www.foxvalleymusicfoundation.com/rhythms-for-all-series" target="_blank">
                    Learn More About Rhythms For All →
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative bg-gradient-to-br from-orange-500 to-red-600 rounded-lg h-96 overflow-hidden group">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </section>

        {/* Pete Ellman Big Band */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative bg-gradient-to-br from-green-600 to-teal-700 rounded-lg h-96 overflow-hidden group">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Pete Ellman Big Band Residency: Inspiring the Next Generation
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Each week throughout the school year, The Venue hosts the Pete Ellman Big Band residency. Student jazz groups featuring musicians ranging from middle school to college-age gain real-world experience on stage, while audiences experience the joy of discovering the next wave of local jazz talent.
                </p>
                <p className="text-xl font-semibold text-blue-600 mb-6">
                  Where mentorship meets music - and the future takes the stage.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="https://www.foxvalleymusicfoundation.com/pebb-weekly-residency" target="_blank">
                    Learn More About PEBB Residency →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Programs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
              Additional Programs & Initiatives
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Songwriters Workshops */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Songwriters Workshops & Performance Series
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Fox Valley Music Foundation teamed up with two local libraries to offer insight into what makes a songwriter create a song. The 2016 Summer Songwriter Workshop and Performance Series featured six local professional songwriters who described their craft and performed before an audience at the local library.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Each show in this free series featured a one-hour songwriting workshop led by the artist and was directly followed by a sixty-minute live performance. The West Branch of the Aurora Public Library and The Batavia Public Library co-sponsored the events with the Fox Valley Music Foundation.
                </p>
                <Link
                  href="https://www.foxvalleymusicfoundation.com/workshops-performance-series"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Leland Bluebird Recording Sessions */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  The Leland Bluebird Recording Sessions
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Leland Bluebird Sessions is a recording project instigated and brought about by Waterloo Sunset Records and inspired by the work of the Fox Valley Blues Society, Blues on The Fox Festival Committee and the Fox Valley Music Foundation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This project was sponsored in part by a National Endowment of the Arts grant awarded to the FVMF, with assistance from the City of Aurora. It is a tribute to the records that were produced on the top floor of the Leland Hotel in Aurora, Illinois during a period in time beginning on May 4, 1937, and ending on December 19, 1938.
                </p>
                <Link
                  href="https://www.foxvalleymusicfoundation.com/bluebird-sessions"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Blues on the Fox */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Blues on the Fox Workshops & Performances
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A sincere and abiding love of blues music was the common denominator and impetus for the formation of what is now known as the Fox Valley Music Foundation and the Foundation's live performance room, The Venue. The Blues On The Fox Festival was truly the cornerstone of the Fox Valley's blues music scene.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The festival has grown from its origins as a downtown intimate closed street festival of years gone by, to becoming a premier national Blues festival rivaling larger city fests in existence before Blues on the Fox was even born.
                </p>
                <Link
                  href="https://www.foxvalleymusicfoundation.com/blues-on-the-fox"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get Involved
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience these incredible programs at The Venue or support our mission to bring music to the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/the-venue">See Upcoming Shows</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/donate">Support Our Programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
