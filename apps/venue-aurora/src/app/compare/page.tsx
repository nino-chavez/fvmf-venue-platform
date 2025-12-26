import type { Metadata } from 'next';
import { getEvents } from '@/lib/eventbrite';
import { getEventSeriesWithPricing, type NormalizedEvent } from '@/lib/tickettailor';

export const metadata: Metadata = {
  title: 'Platform Comparison - Eventbrite vs Ticket Tailor',
  description: 'Compare ticketing platforms for The Venue Aurora',
};

export const revalidate = 3600;

// Normalize Eventbrite events to match the comparison format
function normalizeEventbriteEvent(event: any): NormalizedEvent {
  // Extract prices from ticket classes, filtering out free tickets
  const prices = (event.ticket_classes || [])
    .filter((tc: any) => tc.cost?.major_value)
    .map((tc: any) => parseFloat(tc.cost.major_value));

  const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

  return {
    id: event.id,
    name: event.name.text,
    description: event.description?.text || '',
    startDate: new Date(event.start.utc),
    endDate: new Date(event.end.utc),
    url: event.url,
    imageUrl: event.logo?.url || '/placeholder-event.jpg',
    price: {
      min: minPrice,
      max: maxPrice,
      currency: 'USD',
      display: event.ticket_classes?.[0]?.cost?.display || 'Free',
    },
    venue: {
      name: event.venue?.name || 'The Venue Aurora',
      address: event.venue?.address?.localized_address_display || '21 S Broadway Ave, Aurora, IL 60505',
    },
    status: event.status,
    source: 'eventbrite',
  };
}

function EventCard({ event }: { event: NormalizedEvent }) {
  const dateStr = event.startDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
  const timeStr = event.startDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
      <div className="aspect-[16/9] bg-zinc-800 relative">
        {event.imageUrl && event.imageUrl !== '/placeholder-event.jpg' && (
          <img
            src={event.imageUrl}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        )}
        <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded ${
          event.source === 'eventbrite' ? 'bg-orange-600' : 'bg-blue-600'
        }`}>
          {event.source === 'eventbrite' ? 'Eventbrite' : 'Ticket Tailor'}
        </span>
      </div>
      <div className="p-4">
        <p className="text-zinc-400 text-sm mb-1">{dateStr} at {timeStr}</p>
        <h3 className="text-white font-semibold mb-2 line-clamp-2">{event.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-medium">{event.price.display}</span>
          <span className={`text-xs px-2 py-0.5 rounded ${
            event.status === 'live' || event.status === 'published'
              ? 'bg-green-600/20 text-green-400'
              : 'bg-yellow-600/20 text-yellow-400'
          }`}>
            {event.status}
          </span>
        </div>
      </div>
    </div>
  );
}

function PlatformStats({
  platform,
  events,
  color,
}: {
  platform: string;
  events: NormalizedEvent[];
  color: string;
}) {
  const avgPrice = events.length > 0
    ? events.reduce((sum, e) => sum + e.price.min, 0) / events.length
    : 0;

  return (
    <div className={`bg-zinc-900 rounded-xl p-6 border-l-4 ${color}`}>
      <h3 className="text-xl font-bold text-white mb-4">{platform}</h3>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-3xl font-bold text-orange-500">{events.length}</p>
          <p className="text-zinc-400 text-sm">Total Events</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-orange-500">${avgPrice.toFixed(0)}</p>
          <p className="text-zinc-400 text-sm">Avg. Price</p>
        </div>
      </div>
    </div>
  );
}

export default async function ComparePage() {
  // Fetch events from both platforms in parallel, with error handling
  let eventbriteEvents: NormalizedEvent[] = [];
  let ticketTailorEvents: NormalizedEvent[] = [];

  try {
    const [ebEvents, ttEvents] = await Promise.all([
      getEvents('draft').then(events => events.map(normalizeEventbriteEvent)).catch(() => []),
      getEventSeriesWithPricing().catch(() => []),
    ]);
    eventbriteEvents = ebEvents;
    ticketTailorEvents = ttEvents;
  } catch (error) {
    console.error('Error fetching events for comparison:', error);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Platform Comparison</h1>
        <p className="text-xl text-zinc-400">
          Comparing Eventbrite and Ticket Tailor for The Venue Aurora
        </p>
      </div>

      {/* Platform Stats */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <PlatformStats
          platform="Eventbrite"
          events={eventbriteEvents}
          color="border-orange-500"
        />
        <PlatformStats
          platform="Ticket Tailor"
          events={ticketTailorEvents}
          color="border-blue-500"
        />
      </div>

      {/* Feature Comparison */}
      <div className="bg-zinc-900 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="py-3 px-4 text-zinc-400">Feature</th>
                <th className="py-3 px-4 text-orange-500">Eventbrite</th>
                <th className="py-3 px-4 text-blue-500">Ticket Tailor</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300">
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">API Access</td>
                <td className="py-3 px-4">Yes (OAuth 2.0)</td>
                <td className="py-3 px-4">Yes (API Key)</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">Platform Fee (Free Events)</td>
                <td className="py-3 px-4">Free</td>
                <td className="py-3 px-4">Free (up to 5 events)</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">Platform Fee (Paid Events)</td>
                <td className="py-3 px-4">3.7% + $1.79/ticket</td>
                <td className="py-3 px-4">$0.26 + 3%/ticket</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">Payment Processing</td>
                <td className="py-3 px-4">Eventbrite or PayPal</td>
                <td className="py-3 px-4">Stripe</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">Embed Widget</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Yes</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">Box Office / Door Sales</td>
                <td className="py-3 px-4">Yes (Organizer App)</td>
                <td className="py-3 px-4">Yes (Box Office App)</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">Recurring Events</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Yes (Event Series)</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4">White-Label Options</td>
                <td className="py-3 px-4">Limited</td>
                <td className="py-3 px-4">Yes (Pro plan)</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Discovery/Marketing</td>
                <td className="py-3 px-4">Strong (large user base)</td>
                <td className="py-3 px-4">Limited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Side by Side Events */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Eventbrite Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            <h2 className="text-2xl font-bold text-white">Eventbrite Events</h2>
          </div>
          <div className="space-y-4">
            {eventbriteEvents.slice(0, 10).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
            {eventbriteEvents.length === 0 && (
              <p className="text-zinc-500 text-center py-8">No events found</p>
            )}
          </div>
        </div>

        {/* Ticket Tailor Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <h2 className="text-2xl font-bold text-white">Ticket Tailor Events</h2>
          </div>
          <div className="space-y-4">
            {ticketTailorEvents.slice(0, 10).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
            {ticketTailorEvents.length === 0 && (
              <p className="text-zinc-500 text-center py-8">No events found</p>
            )}
          </div>
        </div>
      </div>

      {/* Cost Analysis */}
      <div className="mt-12 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-8 border border-zinc-700">
        <h2 className="text-2xl font-bold text-white mb-6">Cost Analysis (Est. Annual)</h2>
        <p className="text-zinc-400 mb-6">
          Based on ~200 events/year with average ticket price of $25 and 150 tickets sold per event:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/50 rounded-lg p-6">
            <h3 className="text-orange-500 font-bold text-lg mb-4">Eventbrite</h3>
            <ul className="text-zinc-300 space-y-2">
              <li>Platform Fee: $1.79 x 150 x 200 = <strong>$53,700</strong></li>
              <li>Percentage Fee: 3.7% x $25 x 150 x 200 = <strong>$27,750</strong></li>
              <li className="text-xl pt-2 border-t border-zinc-700 text-orange-500">
                Total: <strong>~$81,450/year</strong>
              </li>
            </ul>
          </div>
          <div className="bg-zinc-900/50 rounded-lg p-6">
            <h3 className="text-blue-500 font-bold text-lg mb-4">Ticket Tailor</h3>
            <ul className="text-zinc-300 space-y-2">
              <li>Platform Fee: $0.26 x 150 x 200 = <strong>$7,800</strong></li>
              <li>Percentage Fee: 3% x $25 x 150 x 200 = <strong>$22,500</strong></li>
              <li className="text-xl pt-2 border-t border-zinc-700 text-blue-500">
                Total: <strong>~$30,300/year</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
          <p className="text-green-400 font-semibold">
            Potential Annual Savings with Ticket Tailor: ~$51,150
          </p>
        </div>
      </div>

      {/* Recommendation */}
      <div className="mt-8 text-center">
        <p className="text-zinc-500">
          This is a test comparison using development data. For production decisions,{' '}
          <br className="hidden sm:inline" />
          please verify current pricing and features on each platform&apos;s website.
        </p>
      </div>
    </div>
  );
}
