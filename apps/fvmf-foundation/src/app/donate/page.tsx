import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function DonatePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-500 to-red-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Your donation helps us Preserve, Promote, Protect, and Present music in the Fox Valley area. Every contribution directly supports music education, live performances, and cultural preservation.
            </p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
              Your Impact
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              See how your donation makes a difference in our community
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Music Education */}
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Music Education</h3>
                <p className="text-gray-700 leading-relaxed">
                  Support educational programs, masterclasses, and workshops that foster the next generation of musicians and music lovers.
                </p>
              </div>

              {/* Live Music */}
              <div className="bg-purple-50 rounded-lg p-8">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Performances</h3>
                <p className="text-gray-700 leading-relaxed">
                  Help bring 700+ shows annually to The Venue, providing an affordable, accessible space for the community to experience live music.
                </p>
              </div>

              {/* Heritage Preservation */}
              <div className="bg-orange-50 rounded-lg p-8">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Heritage Preservation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Preserve the Bluebird Records legacy and Fox Valley's rich musical history for future generations through archival and educational efforts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Make Your Donation Today
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Fox Valley Music Foundation is a 501(c)(3) registered non-profit organization. Your donation is tax-deductible to the fullest extent allowed by law.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-12 py-6 text-lg" asChild>
                <Link href="https://app.dvforms.net/api/dv/k5zEl" target="_blank">
                  Donate Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-lg" asChild>
                <Link href="/membership">
                  Become a Member
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-400">
              EIN: 47-1159879
            </p>
          </div>
        </section>

        {/* Ways to Give */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
              Other Ways to Give
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Monthly Giving */}
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Monthly Giving</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Join our sustaining donors circle by setting up a recurring monthly donation. Consistent support helps us plan long-term programs and maintain The Venue year-round.
                </p>
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="https://app.dvforms.net/api/dv/k5zEl" target="_blank">
                    Set Up Monthly Gift
                  </Link>
                </Button>
              </div>

              {/* Corporate Sponsorship */}
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Sponsorship</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Partner with FVMF through corporate sponsorships. Support specific programs, events, or shows while gaining visibility in the community.
                </p>
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="mailto:Info@FoxValleyMusicFoundation.com">
                    Contact Us About Sponsorship
                  </Link>
                </Button>
              </div>

              {/* Planned Giving */}
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Planned Giving</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Leave a lasting legacy by including FVMF in your estate planning. Bequests and planned gifts ensure music thrives in the Fox Valley for generations to come.
                </p>
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="mailto:Info@FoxValleyMusicFoundation.com">
                    Learn More
                  </Link>
                </Button>
              </div>

              {/* In-Kind Donations */}
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">In-Kind Donations</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Support our mission with goods or services. From sound equipment to professional services, in-kind donations help us operate efficiently.
                </p>
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="mailto:Info@FoxValleyMusicFoundation.com">
                    Discuss In-Kind Giving
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="text-white text-5xl mb-6">"</div>
            <blockquote className="text-white">
              <p className="text-xl sm:text-2xl mb-6 leading-relaxed italic">
                Music IS Community
              </p>
              <footer className="text-white/90">
                <cite className="not-italic font-semibold">
                  Fox Valley Music Foundation
                </cite>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions About Giving?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We're here to help! Contact us to discuss how your contribution can make the biggest impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:Info@FoxValleyMusicFoundation.com"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </Link>
              <Link
                href="tel:3312128490"
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us: 331-212-8490
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
