import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function MembershipPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Membership
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-4 leading-relaxed">
              Membership in the Fox Valley Music Foundation is designed to provide you with exclusive benefits and extraordinary experiences as you support our mission.
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              As a member, you will have access to perks and privileges not available to non-members. Enjoy advance notice of Foundation-sponsored events and shows at The Venue, special discounts, and invitations to exclusive events.
            </p>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
              Choose Your Membership Level
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Join our membership program today and elevate your experience with the Fox Valley Music Foundation and The Venue to a whole new level!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Beat Member */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Beat Member</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  $25<span className="text-lg text-gray-600 font-normal">/year</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">FVMF/The Venue window cling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Advance notice of foundation-sponsored events and shows</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">10% discount on all merchandise in our retail store</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="https://app.donorview.com/eRKQb" target="_blank">Sign Up Now</Link>
                </Button>
              </div>

              {/* Rhythm Member */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-purple-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Rhythm Member</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">
                  $75<span className="text-lg text-gray-600 font-normal">/year</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-semibold">All of the benefits of Beat Member</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mr-2 mt-1 flex-shrink-0 flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-lg">+</span>
                    </div>
                    <span className="text-gray-700">Custom designed FVMF T-shirt ($30 retail value)</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600" asChild>
                  <Link href="https://app.donorview.com/eRKQb" target="_blank">Sign Up Now</Link>
                </Button>
              </div>

              {/* Groove Member */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-orange-500 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Groove Member</h3>
                <div className="text-4xl font-bold text-orange-600 mb-6">
                  $125<span className="text-lg text-gray-600 font-normal">/year</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-semibold">All of the benefits of Rhythm Member</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mr-2 mt-1 flex-shrink-0 flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-lg">+</span>
                    </div>
                    <span className="text-gray-700">Two (2) custom designed FVMF T-shirts ($60 retail value)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mr-2 mt-1 flex-shrink-0 flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-lg">+</span>
                    </div>
                    <span className="text-gray-700">$2 discount on each show ticket purchased</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mr-2 mt-1 flex-shrink-0 flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-lg">+</span>
                    </div>
                    <span className="text-gray-700">10% discount on gift card purchases</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                  <Link href="https://app.donorview.com/eRKQb" target="_blank">Sign Up Now</Link>
                </Button>
              </div>

              {/* Music Ally */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-yellow-500 text-white">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  VIP
                </div>
                <h3 className="text-2xl font-bold mb-2">Music Ally</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-6">
                  $250<span className="text-lg text-gray-400 font-normal">/year</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">All of the benefits of Groove Member</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mr-2 mt-1 flex-shrink-0 flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-lg">+</span>
                    </div>
                    <span>Two (2) The Venue T-shirts ($60 retail value)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mr-2 mt-1 flex-shrink-0 flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-lg">+</span>
                    </div>
                    <span>$3 discount on each show ticket purchased</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mr-2 mt-1 flex-shrink-0 flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-lg">+</span>
                    </div>
                    <span>10% discount on gift card purchases</span>
                  </li>
                </ul>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold" asChild>
                  <Link href="https://app.donorview.com/eRKQb" target="_blank">Sign Up Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Join?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Become a member today and start enjoying exclusive benefits while supporting live music in the Fox Valley.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg" asChild>
              <Link href="https://app.donorview.com/eRKQb" target="_blank">Sign Up for Membership</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
