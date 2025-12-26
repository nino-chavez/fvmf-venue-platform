import { EventbriteEvent } from '@/lib/eventbrite';
import { EventCard } from './EventCard';

interface EventCalendarProps {
  events: EventbriteEvent[];
  title?: string;
  showFeatured?: boolean;
}

export function EventCalendar({ events, title = "Upcoming Shows", showFeatured = true }: EventCalendarProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-zinc-400">No upcoming events at this time. Check back soon!</p>
      </div>
    );
  }

  const [featuredEvent, ...restEvents] = events;

  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>

      {showFeatured && featuredEvent && (
        <div className="mb-8">
          <EventCard event={featuredEvent} variant="featured" />
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(showFeatured ? restEvents : events).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export function CompactEventList({ events, limit = 5 }: { events: EventbriteEvent[]; limit?: number }) {
  const displayEvents = events.slice(0, limit);

  return (
    <div className="space-y-3">
      {displayEvents.map((event) => (
        <EventCard key={event.id} event={event} variant="compact" />
      ))}
      {events.length > limit && (
        <p className="text-center text-zinc-400 text-sm pt-2">
          + {events.length - limit} more shows
        </p>
      )}
    </div>
  );
}
