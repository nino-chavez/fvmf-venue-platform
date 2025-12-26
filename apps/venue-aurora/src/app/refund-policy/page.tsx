import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'The Venue Aurora refund policy for ticket purchases.',
};

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Refund Policy</h1>

      <div className="bg-zinc-900 rounded-xl p-8 mb-8">
        <p className="text-xl text-zinc-300 font-medium">
          As of January 1, 2023, The Venue has adopted a <strong className="text-white">No Refund policy</strong> and
          we will no longer be processing refund requests via Eventbrite for any reason.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">In the unlikely event that the artist cancels...</h2>
        <p className="text-zinc-400">
          The Venue will do our best to reschedule the artist at the earliest possible date. Patrons who are unable
          to attend the rescheduled date may reach out to the Box Office to transfer their tickets to another upcoming
          Venue performance.
        </p>
      </div>

      <div className="bg-zinc-800/50 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Why No Refunds?</h2>
        <p className="text-zinc-400 mb-4">
          This is a common policy among independent music venues. Like most venues, we operate on thin margins and
          plan our finances around ticket sales. Offering refunds would make it difficult to sustain operations and
          continue bringing great music to our community.
        </p>
        <p className="text-zinc-500 text-sm">
          For further insight on why we made this difficult decision, learn more about{' '}
          <a
            href="https://www.purplepass.com/blog/why-most-event-tickets-have-a-no-refund-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400"
          >
            why most event tickets have a no refund policy
          </a>
          .
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-zinc-500">
          Questions about a specific event?{' '}
          <a href="mailto:info@themusicvenue.org" className="text-orange-500 hover:text-orange-400">
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}
