import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="space-y-6" aria-label="Sidebar information">
      {/* Donate CTA */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 text-white">
        <h3 className="font-bold text-lg mb-2">Support Live Music</h3>
        <p className="text-primary-100 text-sm mb-4">
          Help us preserve and promote music in our community!
        </p>
        <Link
          href="/donate"
          className="block w-full text-center bg-white text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-primary-50 transition-colors"
        >
          Donate Today
        </Link>
      </div>

      {/* Venue Policies */}
      <div className="bg-neutral-900 rounded-xl p-6">
        <h3 className="font-semibold text-white mb-4">Venue Policies</h3>
        <ul className="text-neutral-400 text-sm space-y-3">
          <li className="flex gap-2">
            <span className="text-primary-500">•</span>
            All bags subject to search
          </li>
          <li className="flex gap-2">
            <span className="text-primary-500">•</span>
            No outside beverages permitted
          </li>
          <li className="flex gap-2">
            <span className="text-primary-500">•</span>
            Outside food encouraged from local restaurants
          </li>
          <li className="flex gap-2">
            <span className="text-primary-500">•</span>
            No weapons, firearms, or vape devices
          </li>
        </ul>
      </div>

      {/* ADA Info */}
      <div className="bg-neutral-900 rounded-xl p-6">
        <h3 className="font-semibold text-white mb-4">Accessibility</h3>
        <ul className="text-neutral-400 text-sm space-y-3">
          <li>Tables 1-30 and GA section are fully ADA compliant</li>
          <li>ADA entrance via Mundy Park (south side)</li>
          <li>Wheelchair accessible stage</li>
        </ul>
        <p className="text-neutral-500 text-xs mt-4">
          Contact us at 331-212-8490 for accommodation requests.
        </p>
      </div>

      {/* NIVA Badge */}
      <div className="bg-neutral-900 rounded-xl p-6 text-center">
        <div className="inline-block bg-white rounded-lg p-3 mb-3">
          <div className="text-black font-bold text-xs">LIVE</div>
          <div className="text-black font-bold text-sm">INDEPENDENT</div>
          <div className="text-neutral-600 text-xs">CERTIFIED</div>
        </div>
        <p className="text-neutral-400 text-xs">
          National Independent Venue Association
        </p>
      </div>
    </aside>
  );
}
