import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Join our team of passionate music lovers and help make The Venue Aurora a special place. Learn about volunteer opportunities at our intimate 190-seat listening room.',
  openGraph: {
    title: 'Volunteer at The Venue Aurora',
    description: 'Join our team of passionate music lovers and help make The Venue Aurora a special place.',
  },
};

export default function VolunteerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Volunteer at The Venue
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Join our team of passionate music lovers! We're always looking for volunteers to help make The Venue a special place for our community.
        </p>
      </div>

      {/* Why Volunteer Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-primary-900/30 to-neutral-900 border border-primary-500/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Volunteer with Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Free Concert Access</h3>
                <p className="text-neutral-400 text-sm">Enjoy shows while you volunteer and get to know amazing artists</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Build Community</h3>
                <p className="text-neutral-400 text-sm">Connect with fellow music enthusiasts and become part of our family</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Gain Experience</h3>
                <p className="text-neutral-400 text-sm">Learn about live music production, hospitality, and event management</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Support the Arts</h3>
                <p className="text-neutral-400 text-sm">Help preserve and promote live music in the Fox Valley area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Volunteer Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-primary-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Event Staff</h3>
                <p className="text-neutral-400 mb-4">
                  Greet guests, scan tickets, assist with seating, and ensure everyone has a great experience.
                </p>
                <p className="text-sm text-neutral-500">
                  <span className="font-medium text-neutral-400">Commitment:</span> 2-3 hours per event
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-primary-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Bar Support</h3>
                <p className="text-neutral-400 mb-4">
                  Help serve drinks, manage inventory, and keep the bar running smoothly during events.
                </p>
                <p className="text-sm text-neutral-500">
                  <span className="font-medium text-neutral-400">Commitment:</span> 3-4 hours per event
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-primary-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Box Office</h3>
                <p className="text-neutral-400 mb-4">
                  Answer questions, sell tickets, manage will-call, and provide excellent customer service.
                </p>
                <p className="text-sm text-neutral-500">
                  <span className="font-medium text-neutral-400">Commitment:</span> Flexible shifts
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-primary-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Marketing & Social Media</h3>
                <p className="text-neutral-400 mb-4">
                  Create content, engage community, design graphics, and help spread the word about upcoming shows.
                </p>
                <p className="text-sm text-neutral-500">
                  <span className="font-medium text-neutral-400">Commitment:</span> Remote, flexible hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-primary-900/40 to-neutral-900/80 border border-primary-500/30 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Volunteer?</h2>
        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
          We'd love to hear from you! Contact us to learn more about volunteer opportunities and get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:volunteer@venueaurora.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-xl transition-all hover:shadow-[0_0_30px_-5px_hsl(25_95%_53%/0.5)]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Us
          </a>
          <a
            href="tel:+16305551234"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call: (630) 555-1234
          </a>
        </div>
        <p className="text-sm text-neutral-500 mt-6">
          Operated by Fox Valley Music Foundation, a 501(c)(3) nonprofit organization
        </p>
      </section>

      {/* Additional Info */}
      <div className="mt-12 text-center">
        <p className="text-neutral-400 mb-4">
          Have questions about our events or want to learn more about The Venue?
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/about"
            className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
          >
            About The Venue →
          </Link>
          <Link
            href="/faqs"
            className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
          >
            Frequently Asked Questions →
          </Link>
          <Link
            href="/contact"
            className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </main>
  );
}
