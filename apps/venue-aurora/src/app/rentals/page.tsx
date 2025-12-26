import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rentals',
  description: 'Rent The Venue Aurora for your next private event, corporate party, seminar, or fundraiser.',
};

export default function RentalsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-4">Rentals</h1>
      <p className="text-xl text-zinc-400 mb-8">
        Our performance room is the perfect space to host your next event!
      </p>

      <div className="bg-zinc-900 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Available For</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-zinc-300">
          <li className="flex items-center gap-3">
            <span className="text-orange-500">✓</span>
            Private parties
          </li>
          <li className="flex items-center gap-3">
            <span className="text-orange-500">✓</span>
            Corporate events
          </li>
          <li className="flex items-center gap-3">
            <span className="text-orange-500">✓</span>
            Seminars & workshops
          </li>
          <li className="flex items-center gap-3">
            <span className="text-orange-500">✓</span>
            Fundraisers
          </li>
          <li className="flex items-center gap-3">
            <span className="text-orange-500">✓</span>
            Memorial services
          </li>
          <li className="flex items-center gap-3">
            <span className="text-orange-500">✓</span>
            Mission-centric events
          </li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-zinc-900 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Indoor Capacity</h3>
          <p className="text-3xl font-bold text-orange-500 mb-2">190 guests</p>
          <p className="text-zinc-400">Comfortable seating with no obstructed views</p>
        </div>
        <div className="bg-zinc-900 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Outdoor Events</h3>
          <p className="text-zinc-300 mb-2">Mundy Park & Water Street Mall</p>
          <p className="text-zinc-400 text-sm">Weather and city permits permitting</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 border border-orange-600/30 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Interested in Renting?</h2>
        <p className="text-zinc-300 mb-6">
          Contact us with your event details and we'll help you plan the perfect experience.
        </p>

        <div className="space-y-4 mb-6">
          <p className="text-zinc-400">Please include:</p>
          <ul className="text-zinc-300 space-y-2">
            <li>• Date(s) you are interested in</li>
            <li>• Type of event you're hosting</li>
            <li>• Estimate of attendees</li>
            <li>• Whether you plan on utilizing our sound system</li>
            <li>• Any special details you'd like us to know</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:rentals@themusicvenue.org"
            className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-lg transition-colors"
          >
            Email: rentals@themusicvenue.org
          </a>
          <a
            href="tel:331-212-8490"
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors"
          >
            Call: 331-212-8490
          </a>
        </div>
      </div>
    </div>
  );
}
