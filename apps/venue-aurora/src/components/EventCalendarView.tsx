'use client';

import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { gsap, timing, easing } from '@/lib/gsap';
import { EventbriteEvent, formatEventDate, getLowestPrice, mapToGenre, calculateAvailability } from '@/lib/eventbrite';
import { getEventImageUrl, getGradientFallback, hashEventId } from '@/lib/images';
import { GenreBadge, AvailabilityBadge, PriceBadge } from '@/components/ui/Badge';

interface EventCalendarViewProps {
  events: EventbriteEvent[];
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: EventbriteEvent[];
}

export function EventCalendarView({ events }: EventCalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventbriteEvent | null>(null);
  const [focusedDayIndex, setFocusedDayIndex] = useState<number | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Group events by date
  const eventsByDate = useMemo(() => {
    const map = new Map<string, EventbriteEvent[]>();
    events.forEach((event) => {
      const dateKey = new Date(event.start.local).toDateString();
      if (!map.has(dateKey)) {
        map.set(dateKey, []);
      }
      map.get(dateKey)!.push(event);
    });
    return map;
  }, [events]);

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPadding = firstDay.getDay();
    const days: CalendarDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Previous month padding
    for (let i = startPadding - 1; i >= 0; i--) {
      const date = new Date(year, month, -i);
      days.push({
        date,
        isCurrentMonth: false,
        isToday: false,
        events: eventsByDate.get(date.toDateString()) || [],
      });
    }

    // Current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      date.setHours(0, 0, 0, 0);
      days.push({
        date,
        isCurrentMonth: true,
        isToday: date.getTime() === today.getTime(),
        events: eventsByDate.get(date.toDateString()) || [],
      });
    }

    // Next month padding
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      const date = new Date(year, month + 1, i);
      days.push({
        date,
        isCurrentMonth: false,
        isToday: false,
        events: eventsByDate.get(date.toDateString()) || [],
      });
    }

    return days;
  }, [currentDate, eventsByDate]);

  // Get events for selected date
  const selectedDateEvents = useMemo(() => {
    if (!selectedDate) return [];
    return eventsByDate.get(selectedDate.toDateString()) || [];
  }, [selectedDate, eventsByDate]);

  // Animate detail panel with reduced motion support
  useEffect(() => {
    if (!detailRef.current || !selectedDate) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: timing.quarter, ease: easing.crescendo }
      );
    }
  }, [selectedDate]);

  // Keyboard navigation for calendar grid
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLElement>, dayIndex: number) => {
    const cols = 7;
    let newIndex = dayIndex;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = Math.max(0, dayIndex - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        newIndex = Math.min(calendarDays.length - 1, dayIndex + 1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        newIndex = Math.max(0, dayIndex - cols);
        break;
      case 'ArrowDown':
        e.preventDefault();
        newIndex = Math.min(calendarDays.length - 1, dayIndex + cols);
        break;
      case 'Home':
        e.preventDefault();
        newIndex = Math.floor(dayIndex / cols) * cols; // Start of week
        break;
      case 'End':
        e.preventDefault();
        newIndex = Math.min(calendarDays.length - 1, Math.floor(dayIndex / cols) * cols + cols - 1); // End of week
        break;
      case 'PageUp':
        e.preventDefault();
        goToPrevMonth();
        return;
      case 'PageDown':
        e.preventDefault();
        goToNextMonth();
        return;
      case 'Enter':
      case ' ':
        e.preventDefault();
        const day = calendarDays[dayIndex];
        if (day.isCurrentMonth) {
          setSelectedDate(day.date);
          setSelectedEvent(day.events[0] || null);
        }
        return;
      default:
        return;
    }

    setFocusedDayIndex(newIndex);
    // Focus the new day button
    const buttons = gridRef.current?.querySelectorAll('button');
    if (buttons && buttons[newIndex]) {
      (buttons[newIndex] as HTMLButtonElement).focus();
    }
  }, [calendarDays]);

  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
    setSelectedEvent(null);
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Calendar */}
      <div ref={calendarRef} className="lg:col-span-2">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
          {/* Calendar Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-800">
            <h2 id="calendar-heading" className="text-xl font-bold text-white">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={goToToday}
                className="px-3 py-1.5 text-sm text-primary-500 hover:bg-primary-500/10 rounded-lg transition-colors min-h-[44px]"
              >
                Today
              </button>
              <button
                onClick={goToPrevMonth}
                className="p-2 hover:bg-neutral-800 rounded-lg transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Previous month"
              >
                <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNextMonth}
                className="p-2 hover:bg-neutral-800 rounded-lg transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Next month"
              >
                <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Week Headers */}
          <div className="grid grid-cols-7 border-b border-neutral-800" role="row">
            {weekDays.map((day) => (
              <div key={day} className="p-3 text-center text-xs font-medium text-neutral-500 uppercase" role="columnheader">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-7"
            role="grid"
            aria-labelledby="calendar-heading"
            aria-describedby="calendar-instructions"
          >
            {calendarDays.map((day, index) => {
              const hasEvents = day.events.length > 0;
              const isSelected = selectedDate?.toDateString() === day.date.toDateString();
              const isPast = day.date < new Date(new Date().setHours(0, 0, 0, 0));

              return (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedDate(day.date);
                    setSelectedEvent(day.events[0] || null);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  disabled={!day.isCurrentMonth || isPast}
                  role="gridcell"
                  aria-label={`${day.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}${hasEvents ? `, ${day.events.length} event${day.events.length > 1 ? 's' : ''}` : ''}`}
                  aria-selected={isSelected}
                  aria-current={day.isToday ? 'date' : undefined}
                  tabIndex={index === 0 ? 0 : -1}
                  className={`
                    relative aspect-square p-2 border-b border-r border-neutral-800
                    transition-all duration-150
                    ${day.isCurrentMonth ? 'hover:bg-neutral-800/50 focus:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset' : 'opacity-30'}
                    ${isSelected ? 'bg-primary-500/20 ring-1 ring-primary-500' : ''}
                    ${day.isToday ? 'bg-neutral-800/50' : ''}
                    ${isPast && day.isCurrentMonth ? 'opacity-50' : ''}
                    disabled:cursor-default
                  `}
                >
                  <span
                    className={`
                      text-sm font-medium
                      ${day.isToday ? 'text-primary-500' : day.isCurrentMonth ? 'text-white' : 'text-neutral-600'}
                    `}
                  >
                    {day.date.getDate()}
                  </span>

                  {/* Event Indicators */}
                  {hasEvents && day.isCurrentMonth && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5" aria-hidden="true">
                      {day.events.slice(0, 3).map((event, i) => {
                        const genre = mapToGenre(event);
                        const colors: Record<string, string> = {
                          jazz: 'bg-genre-jazz',
                          blues: 'bg-genre-blues',
                          rock: 'bg-genre-rock',
                          tribute: 'bg-genre-tribute',
                          bigband: 'bg-genre-bigband',
                          acoustic: 'bg-primary-400',
                          folk: 'bg-semantic-success',
                          other: 'bg-neutral-400',
                        };
                        return (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${colors[genre] || colors.other}`}
                          />
                        );
                      })}
                      {day.events.length > 3 && (
                        <span className="text-[10px] text-neutral-500 ml-0.5">+{day.events.length - 3}</span>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Calendar Instructions (for screen readers) */}
          <div id="calendar-instructions" className="sr-only">
            Use arrow keys to navigate between dates. Press Enter or Space to select a date. Use PageUp and PageDown to change months.
          </div>

          {/* Genre Legend */}
          <div className="p-4 border-t border-neutral-800 flex flex-wrap gap-4 text-xs text-neutral-500" role="legend">
            {[
              { genre: 'jazz', color: 'bg-genre-jazz', label: 'Jazz' },
              { genre: 'blues', color: 'bg-genre-blues', label: 'Blues' },
              { genre: 'rock', color: 'bg-genre-rock', label: 'Rock' },
              { genre: 'tribute', color: 'bg-genre-tribute', label: 'Tribute' },
              { genre: 'bigband', color: 'bg-genre-bigband', label: 'Big Band' },
            ].map((item) => (
              <div key={item.genre} className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${item.color}`} aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Detail Panel */}
      <div ref={detailRef} className="lg:col-span-1">
        {selectedDate ? (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden sticky top-24">
            {/* Date Header */}
            <div className="p-4 border-b border-neutral-800">
              <h3 className="text-lg font-semibold text-white">
                {selectedDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </h3>
              <p className="text-sm text-neutral-500">
                {selectedDateEvents.length} {selectedDateEvents.length === 1 ? 'event' : 'events'}
              </p>
            </div>

            {/* Events List */}
            {selectedDateEvents.length > 0 ? (
              <div className="divide-y divide-neutral-800">
                {selectedDateEvents.map((event) => (
                  <EventDetailCard
                    key={event.id}
                    event={event}
                    isSelected={selectedEvent?.id === event.id}
                    onClick={() => setSelectedEvent(event)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-neutral-800 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-neutral-500">No events on this date</p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Select a date</h3>
            <p className="text-neutral-500 text-sm">
              Click on a date with events to see details
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Event Detail Card for sidebar
function EventDetailCard({
  event,
  isSelected,
  onClick,
}: {
  event: EventbriteEvent;
  isSelected: boolean;
  onClick: () => void;
}) {
  const date = formatEventDate(event.start.local);
  const price = getLowestPrice(event.ticket_classes);
  const genre = mapToGenre(event);
  const availability = calculateAvailability(event.ticket_classes);
  const imageUrl = getEventImageUrl(event.logo, genre, hashEventId(event.id), 'card');
  const gradientFallback = getGradientFallback(genre);

  return (
    <article
      onClick={onClick}
      className={`p-4 cursor-pointer transition-colors ${
        isSelected ? 'bg-neutral-800' : 'hover:bg-neutral-800/50'
      }`}
      aria-label={`${event.name.text} on ${date.full}`}
    >
      {/* Event Image */}
      <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
        <img
          src={imageUrl}
          alt={`${event.name.text} event promotional image`}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement?.classList.add('bg-gradient-to-br', ...gradientFallback.split(' '));
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
          <GenreBadge genre={genre} />
          <AvailabilityBadge status={availability} />
        </div>
      </div>

      {/* Event Info */}
      <Link href={`/events/${event.id}`} className="block group/link">
        <h4 className="font-semibold text-white mb-1 line-clamp-2 group-hover/link:text-primary-400 transition-colors">
          {event.name.text}
        </h4>
      </Link>
      <p className="text-sm text-neutral-500 mb-3">
        <time dateTime={event.start.local}>{date.time}</time>
      </p>

      {/* Price & CTA */}
      <div className="flex items-center justify-between">
        <PriceBadge
          price={parseFloat(price.replace(/[^0-9.]/g, '')) || 0}
          size="sm"
        />
        <Link
          href={`/events/${event.id}`}
          className="px-4 py-2 bg-primary-500 hover:bg-primary-400 text-white text-sm font-medium rounded-lg transition-colors min-h-[44px] flex items-center"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
