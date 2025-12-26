import Link from 'next/link';
import { EventbriteEvent, formatEventDate, formatTicketPrices } from '@/lib/eventbrite';

interface EventCardProps {
  event: EventbriteEvent;
  variant?: 'default' | 'featured' | 'compact';
}

export function EventCard({ event, variant = 'default' }: EventCardProps) {
  const date = formatEventDate(event.start.local);
  const prices = formatTicketPrices(event.ticket_classes);

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors">
        <div className="flex-shrink-0 text-center w-16">
          <div className="text-xs text-orange-500 uppercase">{date.dayOfWeek}</div>
          <div className="text-2xl font-bold text-white">{date.day}</div>
          <div className="text-xs text-zinc-400 uppercase">{date.month}</div>
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="font-semibold text-white truncate">{event.name.text}</h3>
          <p className="text-sm text-zinc-400">{date.time}</p>
        </div>
        <Link
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium rounded transition-colors"
        >
          Tickets
        </Link>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700">
        {event.logo?.url && (
          <div className="absolute inset-0 opacity-30">
            <img
              src={event.logo.url}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
          </div>
        )}
        <div className="relative p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 text-center bg-zinc-800/80 rounded-lg p-3 backdrop-blur">
              <div className="text-xs text-orange-500 uppercase font-medium">{date.dayOfWeek}</div>
              <div className="text-3xl font-bold text-white">{date.day}</div>
              <div className="text-sm text-zinc-400 uppercase">{date.month}</div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{event.name.text}</h3>
              <p className="text-zinc-400 mb-3">{date.time} • {event.venue?.name || 'The Venue Aurora'}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {prices.slice(0, 2).map((price, i) => (
                  <span key={i} className="text-sm text-zinc-300 bg-zinc-700/50 px-2 py-1 rounded">
                    {price}
                  </span>
                ))}
              </div>
              <Link
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-lg transition-colors"
              >
                Buy Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden hover:ring-1 hover:ring-orange-500/50 transition-all">
      <div className="p-5">
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-center">
            <div className="text-xs text-orange-500 uppercase font-medium">{date.dayOfWeek}</div>
            <div className="text-2xl font-bold text-white">{date.day}</div>
            <div className="text-xs text-zinc-400 uppercase">{date.month}</div>
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="font-semibold text-white mb-1 line-clamp-2">{event.name.text}</h3>
            <p className="text-sm text-zinc-400 mb-2">{date.time}</p>
            <div className="text-sm text-zinc-300">
              {prices.map((price, i) => (
                <span key={i}>
                  {i > 0 && ' • '}
                  {price}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-zinc-800">
          <Link
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded transition-colors"
          >
            Buy Tickets
          </Link>
        </div>
      </div>
    </div>
  );
}
