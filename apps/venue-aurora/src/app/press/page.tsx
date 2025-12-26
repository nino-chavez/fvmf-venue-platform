import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Kit',
  description: 'Download The Venue Aurora press kit, including venue facts, high-resolution photos, logos, and media contact information for press and media inquiries.',
  openGraph: {
    title: 'Press Kit - The Venue Aurora',
    description: 'Media resources and press information for The Venue Aurora, a 190-seat listening room in Downtown Aurora, Illinois.',
  },
};

export default function PressPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Press Kit
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Media resources and information about The Venue Aurora
        </p>
      </div>

      {/* About Section */}
      <section className="mb-16">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-6">About The Venue Aurora</h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              The Venue Aurora is a 190-seat listening room in Downtown Aurora, Illinois, presenting nationally-recognized artists in blues, jazz, rock, big band, and more. Owned and operated by the Fox Valley Music Foundation, a 501(c)(3) nonprofit organization, we are dedicated to preserving and promoting live music in the Fox Valley area.
            </p>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 mt-6">
              <p className="text-sm text-neutral-400 mb-2 font-medium uppercase tracking-wide">
                Boilerplate Text (Copy for Press Releases)
              </p>
              <p className="text-neutral-300 italic">
                "The Venue Aurora is a 190-seat listening room in Downtown Aurora, Illinois, presenting nationally-recognized talent in blues, jazz, rock, big band, and more. Owned and operated by the Fox Valley Music Foundation, a 501(c)(3) nonprofit organization, The Venue is dedicated to preserving and promoting live music in the Fox Valley area."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Quick Facts</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <dt className="text-sm font-medium text-neutral-400 mb-2">Capacity</dt>
            <dd className="text-2xl font-bold text-white">190 seats</dd>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <dt className="text-sm font-medium text-neutral-400 mb-2">Location</dt>
            <dd className="text-2xl font-bold text-white">Downtown Aurora, IL</dd>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <dt className="text-sm font-medium text-neutral-400 mb-2">Address</dt>
            <dd className="text-lg font-semibold text-white">21 S. Broadway Ave., Aurora, IL 60505</dd>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <dt className="text-sm font-medium text-neutral-400 mb-2">Established</dt>
            <dd className="text-2xl font-bold text-white">2019</dd>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <dt className="text-sm font-medium text-neutral-400 mb-2">Organization Type</dt>
            <dd className="text-lg font-semibold text-white">501(c)(3) Nonprofit</dd>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <dt className="text-sm font-medium text-neutral-400 mb-2">Music Genres</dt>
            <dd className="text-lg font-semibold text-white">Blues, Jazz, Rock, Big Band</dd>
          </div>
        </div>
      </section>

      {/* Downloadable Assets Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Downloadable Assets</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-primary-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Logo (PNG)</h3>
                <p className="text-sm text-neutral-400 mb-4">High-resolution logo in PNG format</p>
                <button className="text-sm text-neutral-500 hover:text-primary-500 transition-colors">
                  Download • 2 MB (Coming Soon)
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-primary-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Logo (SVG)</h3>
                <p className="text-sm text-neutral-400 mb-4">Scalable vector logo for print and web</p>
                <button className="text-sm text-neutral-500 hover:text-primary-500 transition-colors">
                  Download • 15 KB (Coming Soon)
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-primary-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Venue Photos (High-Res)</h3>
                <p className="text-sm text-neutral-400 mb-4">Collection of professional venue photography</p>
                <button className="text-sm text-neutral-500 hover:text-primary-500 transition-colors">
                  Download • 45 MB (Coming Soon)
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-primary-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Complete Press Kit (PDF)</h3>
                <p className="text-sm text-neutral-400 mb-4">Comprehensive media kit with all materials</p>
                <button className="text-sm text-neutral-500 hover:text-primary-500 transition-colors">
                  Download • 8 MB (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Media Contact</h2>
        <div className="bg-gradient-to-br from-primary-900/30 to-neutral-900 border border-primary-500/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-neutral-800 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Press Inquiries</h3>
              <p className="text-neutral-400 mb-4">
                For media inquiries, interview requests, or additional information about The Venue Aurora:
              </p>
              <div className="space-y-2">
                <p className="text-white">
                  <span className="text-neutral-500">Email:</span>{' '}
                  <a href="mailto:press@venueaurora.com" className="text-primary-500 hover:text-primary-400 transition-colors">
                    press@venueaurora.com
                  </a>
                </p>
                <p className="text-white">
                  <span className="text-neutral-500">Phone:</span>{' '}
                  <a href="tel:+16305551234" className="text-primary-500 hover:text-primary-400 transition-colors">
                    (630) 555-1234
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Press Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8">Recent Press Mentions</h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
          <p className="text-neutral-400 text-center py-8">
            Press mentions will appear here. Stay tuned for updates!
          </p>
        </div>
      </section>
    </main>
  );
}
