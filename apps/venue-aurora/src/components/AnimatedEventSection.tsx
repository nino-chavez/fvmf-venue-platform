'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { gsap, ScrollTrigger, timing, easing } from '@/lib/gsap';
import { EventbriteEvent, formatEventDate, getLowestPrice, mapToGenre, calculateAvailability } from '@/lib/eventbrite';
import { getEventImageUrl, getGradientFallback, hashEventId } from '@/lib/images';
import { GenreBadge, AvailabilityBadge, PriceBadge, DateBadge } from '@/components/ui/Badge';
import { EventbriteCheckoutButton } from '@/components/EventbriteCheckout';
import { EventFilters } from '@/components/EventFilters';

interface AnimatedEventSectionProps {
  events: EventbriteEvent[];
  title?: string;
}

export function AnimatedEventSection({
  events,
  title = 'Upcoming Shows',
}: AnimatedEventSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [filteredEvents, setFilteredEvents] = useState<EventbriteEvent[]>(events);

  // Get unique genres from events
  const genres = [...new Set(events.map((e) => mapToGenre(e)))];

  // Handle filter changes
  const handleFilterChange = useCallback((filtered: EventbriteEvent[]) => {
    setFilteredEvents(filtered);
  }, []);

  const [featuredEvent, ...restEvents] = filteredEvents;

  useEffect(() => {
    if (!sectionRef.current) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        // Header animation
        gsap.from(headerRef.current, {
          y: 30,
          opacity: 0,
          duration: timing.quarter,
          ease: easing.crescendo,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        });

        // Staggered card animations
        gsap.from('.event-card-animated', {
          y: 50,
          opacity: 0,
          duration: timing.half,
          ease: easing.crescendo,
          stagger: {
            each: 0.1,
            from: 'start',
          },
          scrollTrigger: {
            trigger: '.events-grid',
            start: 'top 85%',
          },
        });

        // Featured card special animation
        gsap.from('.featured-card', {
          scale: 0.95,
          opacity: 0,
          duration: timing.half,
          ease: easing.crescendo,
          scrollTrigger: {
            trigger: '.featured-card',
            start: 'top 85%',
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [filteredEvents]);

  if (events.length === 0) {
    return (
      <section className="py-16 text-center">
        <p className="text-neutral-400">No upcoming events at this time.</p>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="events" className="py-16 md:py-24" aria-labelledby="events-heading">
      {/* Section Header */}
      <div ref={headerRef} className="mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 id="events-heading" className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
            <p className="text-neutral-400">
              Discover upcoming concerts and events
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex bg-neutral-800 rounded-lg p-1" role="group" aria-label="View mode">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors min-h-[44px] min-w-[44px] ${
                viewMode === 'grid' ? 'bg-neutral-700 text-white' : 'text-neutral-400'
              }`}
              aria-label="Grid view"
              aria-pressed={viewMode === 'grid'}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors min-h-[44px] min-w-[44px] ${
                viewMode === 'list' ? 'bg-neutral-700 text-white' : 'text-neutral-400'
              }`}
              aria-label="List view"
              aria-pressed={viewMode === 'list'}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Filters */}
        <EventFilters
          events={events}
          onFilterChange={handleFilterChange}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          genres={genres}
        />
      </div>

      {/* Featured Event */}
      {featuredEvent && (
        <div className="featured-card mb-8">
          <FeaturedEventCard event={featuredEvent} />
        </div>
      )}

      {/* Events Grid/List */}
      <div
        className={`events-grid ${
          viewMode === 'grid'
            ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'
            : 'space-y-4'
        }`}
      >
        {restEvents.map((event, index) => (
          <div key={event.id} className="event-card-animated">
            {viewMode === 'grid' ? (
              <GridEventCard event={event} />
            ) : (
              <ListEventCard event={event} />
            )}
          </div>
        ))}
      </div>

      {/* View All Link */}
      {events.length > 0 && (
        <div className="mt-12 text-center">
          <a
            href="https://www.eventbrite.com/o/the-venue-aurora-19126475647"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl transition-all hover:-translate-y-0.5 min-h-[44px]"
          >
            View All on Eventbrite
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </section>
  );
}

// Featured Event Card with enhanced visuals
function FeaturedEventCard({ event }: { event: EventbriteEvent }) {
  const cardRef = useRef<HTMLElement>(null);
  const date = formatEventDate(event.start.local);
  const price = getLowestPrice(event.ticket_classes);
  const genre = mapToGenre(event);
  const availability = calculateAvailability(event.ticket_classes);
  const imageUrl = getEventImageUrl(event.logo, genre, hashEventId(event.id), 'hero');
  const gradientFallback = getGradientFallback(genre);

  return (
    <article ref={cardRef} className="group relative">
      <Link
        href={`/events/${event.id}`}
        className="block"
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-primary-500/40 hover:shadow-[0_0_60px_-15px_hsl(25_95%_53%/0.4)]">
          {/* Image Section */}
          <div className="relative aspect-[21/9] overflow-hidden">
            <img
              src={imageUrl}
              alt={event.name.text}
              className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105"
              onError={(e) => {
                // Ultimate fallback to gradient if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement?.classList.add('bg-gradient-to-br', ...gradientFallback.split(' '));
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

            {/* Floating Date Badge */}
            <div className="absolute top-4 left-4">
              <DateBadge date={new Date(event.start.local)} variant="prominent" />
            </div>

            {/* Floating badges */}
            <div className="absolute top-4 right-4 flex gap-2">
              <GenreBadge genre={genre} />
              <AvailabilityBadge status={availability} />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* Event Name */}
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2 group-hover:text-primary-400 transition-colors">
                  {event.name.text}
                </h3>

                {/* Date & Time */}
                <p className="text-neutral-400 mb-4">
                  {date.full} at {date.time}
                </p>

                {/* Description preview */}
                {event.description?.text && (
                  <p className="text-neutral-500 text-sm line-clamp-2 max-w-2xl">
                    {event.description.text}
                  </p>
                )}
              </div>

              {/* Price & CTA */}
              <div className="flex flex-row md:flex-col items-center md:items-end gap-4">
                <div className="text-right">
                  <div className="text-sm text-neutral-500 mb-1">From</div>
                  <PriceBadge
                    price={parseFloat(price.replace(/[^0-9.]/g, '')) || 0}
                    size="lg"
                  />
                </div>
                <EventbriteCheckoutButton
                  eventId={event.id}
                  className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl shadow-[0_0_20px_-5px_hsl(25_95%_53%/0.4)] transition-all duration-200 hover:bg-primary-400 hover:shadow-[0_0_30px_-5px_hsl(25_95%_53%/0.5)] active:scale-95"
                  onOrderComplete={() => console.log('Purchase completed for:', event.name.text)}
                >
                  Get Tickets
                </EventbriteCheckoutButton>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

// Grid Event Card
function GridEventCard({ event }: { event: EventbriteEvent }) {
  const date = formatEventDate(event.start.local);
  const price = getLowestPrice(event.ticket_classes);
  const genre = mapToGenre(event);
  const availability = calculateAvailability(event.ticket_classes);

  return (
    <article className="group">
      <Link
        href={`/events/${event.id}`}
        className="block h-full"
      >
        <div className="h-full relative flex flex-col p-5 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-primary-500/30 hover:bg-neutral-900/80 hover:shadow-[0_0_30px_-10px_hsl(25_95%_53%/0.3)] hover:-translate-y-1">
          {/* Date + Genre row */}
          <div className="flex items-center justify-between mb-4">
            <DateBadge date={new Date(event.start.local)} variant="compact" />
            <GenreBadge genre={genre} />
          </div>

          {/* Event Name */}
          <h3 className="text-lg font-semibold text-white leading-snug line-clamp-2 mb-3 min-h-[3.5rem] group-hover:text-primary-400 transition-colors">
            {event.name.text}
          </h3>

          {/* Time */}
          <p className="text-sm text-neutral-500 mb-4">{date.time}</p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Price + Availability + CTA row */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
            <div className="flex items-center gap-2">
              <PriceBadge
                price={parseFloat(price.replace(/[^0-9.]/g, '')) || 0}
                size="sm"
              />
              <AvailabilityBadge status={availability} />
            </div>
            <div className="text-primary-500 group-hover:translate-x-1 transition-transform">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

// List Event Card
function ListEventCard({ event }: { event: EventbriteEvent }) {
  const date = formatEventDate(event.start.local);
  const price = getLowestPrice(event.ticket_classes);
  const genre = mapToGenre(event);
  const availability = calculateAvailability(event.ticket_classes);

  return (
    <article className="group">
      <Link
        href={`/events/${event.id}`}
        className="block"
      >
        <div className="flex items-center gap-4 p-4 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-[200ms] hover:border-primary-500/30 hover:bg-neutral-800/50">
          {/* Date */}
          <DateBadge date={new Date(event.start.local)} variant="default" className="flex-shrink-0" />

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <GenreBadge genre={genre} />
              <AvailabilityBadge status={availability} />
            </div>
            <h3 className="font-semibold text-white truncate group-hover:text-primary-400 transition-colors">
              {event.name.text}
            </h3>
            <p className="text-sm text-neutral-500">{date.time}</p>
          </div>

          {/* Price */}
          <PriceBadge
            price={parseFloat(price.replace(/[^0-9.]/g, '')) || 0}
            size="md"
            className="flex-shrink-0"
          />

          {/* Arrow */}
          <svg
            className="w-5 h-5 text-neutral-600 group-hover:text-primary-500 group-hover:translate-x-1 transition-all flex-shrink-0"
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
