import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support live music in Aurora, IL. Donate to the Fox Valley Music Foundation, a 501(c)(3) nonprofit.',
};

export default function DonatePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-4">Donate</h1>
      <p className="text-xl text-orange-500 font-medium mb-8">Give the Gift of Music</p>

      <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 mb-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Support Live Music</h2>
        <p className="text-orange-100 mb-6">
          The Fox Valley Music Foundation accepts donations and is an Illinois designated Not For Profit
          organization and a 501(c)(3) as approved by the Federal government.
        </p>
        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A4MVRXDCLAAFU&source=url"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
        >
          Donate with PayPal
        </a>
      </div>

      <div className="prose prose-invert prose-orange max-w-none mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
        <p className="text-zinc-400">
          Your donations help us to accomplish our mission in the <strong className="text-white">Preservation,
          Promotion, Protection and Education</strong> of the Music indigenous to the Fox Valley area of northern Illinois.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-4">How Your Donation Helps</h3>
        <p className="text-zinc-400 mb-4">
          Monies are spent on programs that include music education and performance opportunities for folks of all
          ages and from all walks of life:
        </p>
        <ul className="text-zinc-400 space-y-2 mb-6">
          <li>Live concerts featuring national and local artists</li>
          <li>Musician workshops and educational programs</li>
          <li>Music symposiums and community events</li>
          <li>In-school lectures and performances</li>
          <li>Venue maintenance and equipment</li>
        </ul>
        <p className="text-zinc-400">
          It's all about keeping the music alive in our community, and these are just a few of the many projects
          the Foundation creates, funds and promotes.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Prefer to Mail a Check?</h2>
        <p className="text-zinc-400 mb-4">Please mail your donation to:</p>
        <address className="text-zinc-300 not-italic">
          <p className="font-medium">The Fox Valley Music Foundation</p>
          <p>21 S Broadway Ave</p>
          <p>Aurora, Illinois 60505</p>
        </address>
      </div>

      <div className="bg-zinc-900 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Other Ways to Support</h2>
        <ul className="text-zinc-400 space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">•</span>
            <span><strong className="text-zinc-300">Attend shows</strong> - Every ticket purchase supports our mission</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">•</span>
            <span><strong className="text-zinc-300">Volunteer</strong> - We're primarily staffed by amazing volunteers</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">•</span>
            <span><strong className="text-zinc-300">Tip at the bar</strong> - Tips are considered donations to FVMF</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">•</span>
            <span><strong className="text-zinc-300">Spread the word</strong> - Follow us on social media and share our events</span>
          </li>
        </ul>
      </div>

      <p className="text-center text-zinc-500 mt-8">
        Your support is extremely important and our appreciation thereof cannot be overstated.<br />
        <span className="text-zinc-300">Thank you for helping to make our community more musically sound!</span>
      </p>
    </div>
  );
}
