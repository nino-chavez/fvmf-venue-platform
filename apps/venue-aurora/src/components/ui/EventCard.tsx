'use client';

import Link from 'next/link';
import { DateBadge, GenreBadge, AvailabilityBadge, PriceBadge } from './Badge';

/**
 * EventCard - Information Architecture
 *
 * Priority 1 (Immediate): Date, Price, CTA Button
 * Priority 2 (Decision): Event Name, Genre, Availability
 * Priority 3 (Context): Time, Venue
 * Priority 4 (On Demand): Full description, Artist bio
 *
 * Design Principles:
 * - Date is always visible and prominent (left side)
 * - Price and CTA are action-oriented (right side)
 * - Event name is the hero text (center)
 * - Genre badges provide quick categorization
 * - Hover reveals more info without navigation
 */

export type Genre = 'jazz' | 'blues' | 'rock' | 'tribute' | 'bigband' | 'acoustic' | 'folk' | 'other';
export type Availability = 'available' | 'limited' | 'soldout' | 'upcoming';

export interface EventData {
  id: string;
  name: string;
  description?: string;
  date: Date;
  endDate?: Date;
  price: number;
  priceMax?: number;
  currency?: string;
  genre?: Genre;
  availability?: Availability;
  imageUrl?: string;
  ticketUrl?: string;
  venue?: string;
}

interface EventCardProps {
  event: EventData;
  variant?: 'default' | 'featured' | 'compact' | 'list';
}

// Detect genre from event name
function detectGenre(name: string): Genre {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('jazz') || lowerName.includes('quartet') || lowerName.includes('trio')) return 'jazz';
  if (lowerName.includes('blues')) return 'blues';
  if (lowerName.includes('tribute') || lowerName.includes('~')) return 'tribute';
  if (lowerName.includes('big band') || lowerName.includes('swing') || lowerName.includes('sinatra')) return 'bigband';
  if (lowerName.includes('acoustic') || lowerName.includes('unplugged')) return 'acoustic';
  if (lowerName.includes('rock') || lowerName.includes('metal')) return 'rock';
  if (lowerName.includes('folk') || lowerName.includes('americana')) return 'folk';
  return 'other';
}

// Format time
function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
}

// ==========================================
// DEFAULT CARD - Standard event listing
// ==========================================

function DefaultEventCard({ event }: { event: EventData }) {
  const genre = event.genre || detectGenre(event.name);
  const availability = event.availability || 'available';
  const time = formatTime(event.date);

  return (
    <article className="group relative">
      <Link
        href={event.ticketUrl || '#'}
        className="block"
        target={event.ticketUrl?.startsWith('http') ? '_blank' : undefined}
        rel={event.ticketUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        <div className="
          relative
          flex gap-4
          p-4
          bg-neutral-900
          border border-neutral-800
          rounded-xl
          transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:border-primary-500/30
          hover:bg-neutral-900/80
          hover:shadow-[0_0_30px_-10px_hsl(25_95%_53%/0.3)]
          hover:-translate-y-1
        ">
          {/* Date Badge - Priority 1 */}
          <DateBadge date={event.date} variant="default" className="flex-shrink-0" />

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Row 1: Genre + Availability */}
            <div className="flex items-center gap-2 mb-2">
              <GenreBadge genre={genre} />
              <AvailabilityBadge status={availability} />
            </div>

            {/* Row 2: Event Name - Priority 2 */}
            <h3 className="text-lg font-semibold text-white leading-tight line-clamp-2 group-hover:text-primary-400 transition-colors">
              {event.name}
            </h3>

            {/* Row 3: Time + Venue - Priority 3 */}
            <div className="flex items-center gap-3 mt-2 text-sm text-neutral-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {time}
              </span>
              <span className="text-neutral-600">|</span>
              <span className="truncate">{event.venue || 'The Venue Aurora'}</span>
            </div>
          </div>

          {/* Price & CTA - Priority 1 */}
          <div className="flex flex-col items-end justify-between flex-shrink-0">
            <PriceBadge
              price={event.price}
              currency={event.currency || '$'}
              size="lg"
            />
            <div className="
              mt-2 px-4 py-2
              bg-primary-500 text-white text-sm font-semibold
              rounded-lg
              opacity-0 translate-y-1
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-200
            ">
              Get Tickets
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

// ==========================================
// FEATURED CARD - Hero event with image
// ==========================================

function FeaturedEventCard({ event }: { event: EventData }) {
  const genre = event.genre || detectGenre(event.name);
  const availability = event.availability || 'available';
  const time = formatTime(event.date);
  const dateStr = event.date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group relative">
      <Link
        href={event.ticketUrl || '#'}
        className="block"
        target={event.ticketUrl?.startsWith('http') ? '_blank' : undefined}
        rel={event.ticketUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        <div className="
          relative
          overflow-hidden
          rounded-2xl
          bg-gradient-to-br from-neutral-900 to-neutral-950
          border border-neutral-800
          transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:border-primary-500/40
          hover:shadow-[0_0_60px_-15px_hsl(25_95%_53%/0.4)]
        ">
          {/* Image Section */}
          <div className="relative aspect-[21/9] overflow-hidden">
            {event.imageUrl ? (
              <img
                src={event.imageUrl}
                alt={event.name}
                className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-900/50 to-neutral-900" />
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

            {/* Floating Date Badge */}
            <DateBadge
              date={event.date}
              variant="prominent"
              className="absolute top-4 left-4"
            />

            {/* Floating badges */}
            <div className="absolute top-4 right-4 flex gap-2">
              <GenreBadge genre={genre} />
              <AvailabilityBadge status={availability} />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* Event Name */}
                <h3 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:text-primary-400 transition-colors">
                  {event.name}
                </h3>

                {/* Date & Time */}
                <p className="text-neutral-400 mb-4">
                  {dateStr} at {time}
                </p>

                {/* Description preview */}
                {event.description && (
                  <p className="text-neutral-500 text-sm line-clamp-2">
                    {event.description}
                  </p>
                )}
              </div>

              {/* Price & CTA */}
              <div className="flex flex-col items-end gap-3 flex-shrink-0">
                <div className="text-right">
                  <div className="text-sm text-neutral-500 mb-1">From</div>
                  <PriceBadge price={event.price} size="lg" />
                </div>
                <button className="
                  px-6 py-3
                  bg-primary-500 text-white font-semibold
                  rounded-xl
                  shadow-[0_0_20px_-5px_hsl(25_95%_53%/0.4)]
                  transition-all duration-200
                  hover:bg-primary-400
                  hover:shadow-[0_0_30px_-5px_hsl(25_95%_53%/0.5)]
                  active:scale-95
                ">
                  Get Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

// ==========================================
// COMPACT CARD - Grid/minimal view
// ==========================================

function CompactEventCard({ event }: { event: EventData }) {
  const genre = event.genre || detectGenre(event.name);
  const time = formatTime(event.date);
  const dateStr = event.date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="group">
      <Link
        href={event.ticketUrl || '#'}
        className="block"
        target={event.ticketUrl?.startsWith('http') ? '_blank' : undefined}
        rel={event.ticketUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        <div className="
          relative
          p-4
          bg-neutral-900
          border border-neutral-800
          rounded-xl
          transition-all duration-200
          hover:border-primary-500/30
          hover:bg-neutral-800/50
        ">
          {/* Date + Genre row */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-primary-500 font-medium">{dateStr}</span>
            <GenreBadge genre={genre} />
          </div>

          {/* Event Name */}
          <h3 className="text-base font-semibold text-white leading-snug line-clamp-2 mb-3 min-h-[2.75rem] group-hover:text-primary-400 transition-colors">
            {event.name}
          </h3>

          {/* Time + Price row */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-500">{time}</span>
            <PriceBadge price={event.price} size="sm" />
          </div>
        </div>
      </Link>
    </article>
  );
}

// ==========================================
// LIST CARD - Horizontal minimal
// ==========================================

function ListEventCard({ event }: { event: EventData }) {
  const genre = event.genre || detectGenre(event.name);
  const time = formatTime(event.date);
  const dateStr = event.date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="group">
      <Link
        href={event.ticketUrl || '#'}
        className="block"
        target={event.ticketUrl?.startsWith('http') ? '_blank' : undefined}
        rel={event.ticketUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        <div className="
          flex items-center gap-4
          py-3 px-4
          border-b border-neutral-800
          transition-colors duration-150
          hover:bg-neutral-900/50
        ">
          {/* Date */}
          <div className="w-20 flex-shrink-0 text-sm">
            <div className="text-primary-500 font-medium">{dateStr}</div>
            <div className="text-neutral-500">{time}</div>
          </div>

          {/* Name + Genre */}
          <div className="flex-1 min-w-0 flex items-center gap-3">
            <GenreBadge genre={genre} />
            <span className="text-white font-medium truncate group-hover:text-primary-400 transition-colors">
              {event.name}
            </span>
          </div>

          {/* Price */}
          <PriceBadge price={event.price} size="sm" className="flex-shrink-0" />

          {/* Arrow */}
          <svg
            className="w-5 h-5 text-neutral-600 group-hover:text-primary-500 group-hover:translate-x-1 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </article>
  );
}

// ==========================================
// MAIN EXPORT
// ==========================================

export function EventCard({ event, variant = 'default' }: EventCardProps) {
  switch (variant) {
    case 'featured':
      return <FeaturedEventCard event={event} />;
    case 'compact':
      return <CompactEventCard event={event} />;
    case 'list':
      return <ListEventCard event={event} />;
    default:
      return <DefaultEventCard event={event} />;
  }
}
