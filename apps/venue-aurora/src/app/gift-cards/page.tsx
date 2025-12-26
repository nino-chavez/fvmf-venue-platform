import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gift Cards',
  description: 'Purchase gift cards for The Venue Aurora - redeemable at the bar, gift shop, and box office.',
};

export default function GiftCardsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-4">Gift Cards</h1>
      <p className="text-xl text-orange-500 font-medium mb-8">Give the Gift of Music!</p>

      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 mb-8 border border-zinc-700">
        <p className="text-lg text-zinc-300 mb-6">
          Tell someone you really care by sending them the gift of music preservation!
          We sell <strong className="text-white">reloadable physical cards</strong> that you can send to all your friends!
        </p>

        <h2 className="text-lg font-semibold text-white mb-4">Gift Cards Can Be Used For:</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-zinc-300 mb-6">
          <li className="flex items-center gap-2">
            <span className="text-orange-500">✓</span>
            Drinks at the bar
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500">✓</span>
            Membership purchases or renewals
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500">✓</span>
            Gift shop merchandise
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500">✓</span>
            Box office ticket purchases
          </li>
        </ul>

        <div className="bg-zinc-800 rounded-lg p-4">
          <p className="text-zinc-400 text-sm">
            <strong className="text-zinc-300">Note:</strong> Gift cards cannot be used through Eventbrite —
            they're only valid at the physical box office and in-venue purchases.
          </p>
        </div>
      </div>

      <div className="bg-orange-600 rounded-xl p-6 text-white text-center">
        <h2 className="text-xl font-bold mb-3">How to Purchase</h2>
        <p className="text-orange-100 mb-4">
          Pick one up next time you're at a show!<br />
          Just ask at the <strong>box office</strong> or <strong>bar</strong>.
        </p>
        <p className="text-orange-200 text-sm">
          Reloadable • Handy • Attractive
        </p>
      </div>

      <div className="mt-8 text-center text-zinc-500">
        <p>
          Questions about gift cards?{' '}
          <a href="mailto:info@themusicvenue.org" className="text-orange-500 hover:text-orange-400">
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}
