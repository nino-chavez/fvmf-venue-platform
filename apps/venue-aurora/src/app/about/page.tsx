import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About The Venue Aurora',
  description: 'The Venue Aurora is a 190-seat listening room in Downtown Aurora, Illinois. Founded in 2019, we are a 501(c)(3) nonprofit dedicated to preserving and promoting live music. Learn about our mission, history, and commitment to the community.',
  keywords: [
    'venue aurora history',
    'fox valley music foundation',
    'nonprofit music venue',
    'aurora illinois music',
    'live independent certified',
    'music education preservation',
    'downtown aurora venue'
  ],
  openGraph: {
    title: 'About The Venue Aurora | Live Music Since 2019',
    description: 'A 501(c)(3) nonprofit music venue dedicated to preserving and promoting live music in the Fox Valley area.',
  },
  authors: [
    { name: 'Fox Valley Music Foundation', url: 'https://foxvalleymusicfoundation.org' }
  ],
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About The Venue</h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg md:text-xl text-neutral-300 mb-6 leading-relaxed">
          The Venue is a live music performance space in downtown Aurora, Illinois, owned and operated by the{' '}
          <a href="https://www.foxvalleymusicfoundation.org/" className="text-primary-500 hover:text-primary-400 transition-colors underline decoration-primary-500/30">
            Fox Valley Music Foundation
          </a>
          , a 501(c)(3) organization.
        </p>

        <p className="text-neutral-400 mb-6 leading-relaxed">
          The flex-space listening room can be configured for reserved seat tables, general admission or standing room only shows.
          There is also access to an outdoor patio area when weather permits. We are proud to book nationally-recognized talent
          in all genres of music from blues and big band, to rock and world music, and everything in between. Frequently, our
          opening acts feature regional and local musicians and songwriters.
        </p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 mb-8">
          <p className="text-neutral-300 leading-relaxed">
            The Venue is <strong className="text-white">"Live Independent" Certified</strong> by the National Independent Venue Association (NIVA),
            which demonstrates our commitment to delivering top-quality music experiences while supporting fair practices and
            maintaining independence from multinational organizations.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Volunteering</h2>
        <p className="text-zinc-400 mb-4">
          Volunteers make up the majority of our workforce - we've done everything from major construction to tech set up to
          slinging beer and wine! It's not just our mission, it's a testament to our integration with the community.
        </p>
        <p className="text-zinc-400 mb-6">
          If you would like to volunteer, please send an email to{' '}
          <a href="mailto:LeTisha@themusicvenue.org" className="text-orange-500 hover:text-orange-400">
            LeTisha@themusicvenue.org
          </a>
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Location & Accessibility</h2>
        <p className="text-zinc-400 mb-4">
          The Venue is conveniently located in downtown Aurora, approximately four blocks south of the Metra train station.
          Street parking is available as well as public lots and garages.
        </p>
        <p className="text-zinc-400 mb-4">
          Our building is handicap/wheelchair accessible via the Mundy Park ADA entrance. All other guests are asked to use
          the main box office entrance via Water Street Mall. Our stage is also wheelchair accessible.
        </p>
        <p className="text-zinc-400 mb-6">
          Our indoor event space can accommodate up to <strong className="text-white">190 seated guests</strong>. There is also
          access to an outdoor area in adjacent Mundy Park when the weather (and permitting restrictions from the city) permit.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Vision</h2>
        <p className="text-zinc-400 mb-4">
          Picture a summer day in downtown Aurora—lively streets buzzing with energy. Visitors explore the latest show at the
          Paramount Theatre, savor meals at local restaurants, and meander along the Riverwalk. In Mundy Park, music drifts
          through the air from The Venue, drawing curious passersby. Food vendors line the sidewalks, street artists bring
          color and creativity, and the Fox River sparkles in the sun, completing the perfect summer scene.
        </p>
        <p className="text-zinc-400 mb-6">
          After years of looking for a permanent home, the Fox Valley Music Foundation opened its doors and launched The Venue
          on June 1, 2019 in the building once known as the Woolworth building at 21 S. Broadway between Galena Boulevard and
          Downer Place.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">About Fox Valley Music Foundation</h2>
        <p className="text-zinc-400 mb-6">
          The Fox Valley Music Foundation is a 501(c)(3) not-for-profit, created in November 2014. Its mission is to preserve,
          promote and present the music of the Fox Valley region of Illinois, while providing music education to people of all
          ages, and from all walks of life. For more information please visit{' '}
          <a href="https://www.foxvalleymusicfoundation.org/" className="text-orange-500 hover:text-orange-400">
            FoxValleyMusicFoundation.org
          </a>
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Seating Layout</h2>
        <p className="text-zinc-400 mb-4">
          Inside, our facilities can support up to 190 guests with ample, comfortable seating.
        </p>
        <p className="text-zinc-400 mb-6">
          <strong className="text-white">Please note:</strong> There are no posts or obstructed views in our listening room.
        </p>

        <div className="bg-zinc-900 rounded-xl p-6 mt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Find Us</h3>
          <address className="text-zinc-400 not-italic">
            <p>21 S Broadway Ave</p>
            <p>Aurora, IL 60505</p>
            <p className="mt-4">
              <a
                href="https://maps.google.com/?q=21+S+Broadway+Ave,+Aurora,+IL+60505"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400"
              >
                View on Google Maps →
              </a>
            </p>
          </address>
        </div>
      </div>
    </div>
  );
}
