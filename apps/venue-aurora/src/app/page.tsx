import { getEvents, mapToGenre } from '@/lib/eventbrite';
import { getEventImageUrl, hashEventId } from '@/lib/images';
import { Hero, HeroStats } from '@/components/Hero';
import { AnimatedEventSection } from '@/components/AnimatedEventSection';
import { EventCalendarView } from '@/components/EventCalendarView';
import { Sidebar } from '@/components/Sidebar';
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema';
import Link from 'next/link';

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const events = await getEvents('draft'); // Use 'live' for production

  // Get hero image from first event with fallbacks
  const firstEvent = events[0];
  const heroImageSrc = firstEvent
    ? getEventImageUrl(firstEvent.logo, mapToGenre(firstEvent), hashEventId(firstEvent.id), 'hero')
    : '/images/venue-hero.jpg';

  return (
    <>
      {/* LocalBusiness Schema for GEO and Local SEO */}
      <LocalBusinessSchema />

      <div className="min-h-screen">
        {/* Immersive Hero */}
        <Hero
        title="Live Music"
        subtitle="Nationally-recognized talent in blues, jazz, rock, big band, and more. An intimate 190-seat listening room in Downtown Aurora."
        imageSrc={heroImageSrc}
      />

      {/* Stats Bar */}
      <HeroStats />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Event Section */}
        <AnimatedEventSection events={events} title="Upcoming Shows" />

        {/* Calendar View Section */}
        <section className="py-16 md:py-24 border-t border-neutral-800">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Event Calendar</h2>
            <p className="text-neutral-400">Browse shows by date</p>
          </div>
          <EventCalendarView events={events} />
        </section>

        {/* About & Info Section */}
        <section className="py-16 md:py-24 border-t border-neutral-800">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Card */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">About The Venue</h2>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  The Venue Aurora is a 190-seat listening room dedicated to preserving and promoting live music
                  in the Fox Valley area. Owned and operated by the Fox Valley Music Foundation, a 501(c)(3)
                  nonprofit, we bring nationally-recognized talent in blues, jazz, rock, big band, and more
                  to Downtown Aurora.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white font-medium rounded-xl transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/rentals"
                    className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl transition-colors"
                  >
                    Rent The Venue
                  </Link>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Location</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-neutral-400 mb-4">
                      21 S. Broadway Ave. (IL Rt 25)<br />
                      Aurora, IL 60505
                    </p>
                    <p className="text-neutral-500 text-sm mb-4">
                      Located in the heart of Downtown Aurora, just steps from local restaurants and parking.
                    </p>
                    <a
                      href="https://maps.google.com/?q=21+S+Broadway+Ave,+Aurora,+IL+60505"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-medium"
                    >
                      Get Directions
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="bg-neutral-800 rounded-xl aspect-video flex items-center justify-center">
                    <span className="text-neutral-600 text-sm">Map</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Sticky on desktop */}
            <div className="lg:sticky lg:top-24">
              <Sidebar />
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24 border-t border-neutral-800">
          <div className="bg-gradient-to-br from-primary-900/50 to-neutral-900 border border-primary-500/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Never Miss a Show
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for exclusive pre-sale access, artist announcements, and venue updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-xl transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      </div>
    </>
  );
}
