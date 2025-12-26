'use client';

import { useState, useMemo, useEffect } from 'react';
import { EventbriteEvent, getPriceInfo } from '@/lib/eventbrite';

export interface FilterState {
  searchQuery: string;
  startDate: string;
  endDate: string;
  minPrice: number;
  maxPrice: number;
  genre: string | null;
}

interface EventFiltersProps {
  events: EventbriteEvent[];
  onFilterChange: (filteredEvents: EventbriteEvent[]) => void;
  selectedGenre: string | null;
  onGenreChange: (genre: string | null) => void;
  genres: string[];
}

export function EventFilters({
  events,
  onFilterChange,
  selectedGenre,
  onGenreChange,
  genres,
}: EventFiltersProps) {
  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Calculate price range from all events
  const globalPriceRange = useMemo(() => {
    if (events.length === 0) return { min: 0, max: 100 };

    const prices = events
      .map(e => getPriceInfo(e.ticket_classes))
      .filter(p => !p.isFree)
      .flatMap(p => [p.min, p.max]);

    if (prices.length === 0) return { min: 0, max: 100 };

    return {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices)),
    };
  }, [events]);

  // Initialize price range when events load
  useEffect(() => {
    setPriceRange([globalPriceRange.min, globalPriceRange.max]);
  }, [globalPriceRange]);

  // Debounced search query
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter events based on all criteria
  const filteredEvents = useMemo(() => {
    let filtered = [...events];

    // Genre filter
    if (selectedGenre) {
      const mapToGenre = (e: EventbriteEvent) => {
        // Import mapToGenre logic inline to avoid import issues
        if (e.subcategory?.name) {
          const subcatLower = e.subcategory.name.toLowerCase();
          if (subcatLower.includes('jazz')) return 'jazz';
          if (subcatLower.includes('blues')) return 'blues';
          if (subcatLower.includes('rock') || subcatLower.includes('indie') || subcatLower.includes('punk') || subcatLower.includes('metal')) return 'rock';
          if (subcatLower.includes('folk') || subcatLower.includes('acoustic') || subcatLower.includes('americana') || subcatLower.includes('country')) return 'folk';
          if (subcatLower.includes('big band') || subcatLower.includes('swing')) return 'bigband';
        }

        const nameLower = e.name.text.toLowerCase();
        if (nameLower.includes('tribute') || nameLower.includes('~')) return 'tribute';
        if (nameLower.includes('big band') || nameLower.includes('swing')) return 'bigband';
        if (nameLower.includes('jazz')) return 'jazz';
        if (nameLower.includes('blues')) return 'blues';
        if (nameLower.includes('rock') || nameLower.includes('metal') || nameLower.includes('punk')) return 'rock';
        if (nameLower.includes('folk') || nameLower.includes('acoustic') || nameLower.includes('americana')) return 'folk';

        return 'other';
      };

      filtered = filtered.filter(e => mapToGenre(e) === selectedGenre);
    }

    // Search query filter
    if (debouncedQuery.trim()) {
      const query = debouncedQuery.toLowerCase();
      filtered = filtered.filter(e =>
        e.name.text.toLowerCase().includes(query) ||
        e.description?.text.toLowerCase().includes(query) ||
        e.organizer?.name.toLowerCase().includes(query)
      );
    }

    // Date range filter
    if (startDate) {
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      filtered = filtered.filter(e => new Date(e.start.local) >= start);
    }

    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      filtered = filtered.filter(e => new Date(e.start.local) <= end);
    }

    // Price range filter
    filtered = filtered.filter(e => {
      const priceInfo = getPriceInfo(e.ticket_classes);

      // Free events always pass if min price is 0
      if (priceInfo.isFree && priceRange[0] === 0) return true;

      // Skip free events if min price > 0
      if (priceInfo.isFree && priceRange[0] > 0) return false;

      // Check if event price range overlaps with filter range
      return priceInfo.min <= priceRange[1] && priceInfo.max >= priceRange[0];
    });

    return filtered;
  }, [events, selectedGenre, debouncedQuery, startDate, endDate, priceRange]);

  // Notify parent of filtered events
  useEffect(() => {
    onFilterChange(filteredEvents);
  }, [filteredEvents, onFilterChange]);

  // Check if any filters are active
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    startDate !== '' ||
    endDate !== '' ||
    priceRange[0] !== globalPriceRange.min ||
    priceRange[1] !== globalPriceRange.max ||
    selectedGenre !== null;

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setStartDate('');
    setEndDate('');
    setPriceRange([globalPriceRange.min, globalPriceRange.max]);
    onGenreChange(null);
  };

  return (
    <div className="space-y-4">
      {/* Main filter bar */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search input */}
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">
            Search events
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by artist, band, or keyword..."
              className="block w-full pl-10 pr-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-white"
                aria-label="Clear search"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Advanced filters toggle */}
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className={`px-4 py-2.5 rounded-xl border transition-all ${
            showAdvancedFilters
              ? 'bg-primary-500 border-primary-500 text-white'
              : 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:border-neutral-600'
          }`}
        >
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Filters
            {(startDate || endDate || priceRange[0] !== globalPriceRange.min || priceRange[1] !== globalPriceRange.max) && (
              <span className="ml-1 px-2 py-0.5 bg-primary-600 text-white text-xs rounded-full">
                {[startDate, endDate, priceRange[0] !== globalPriceRange.min || priceRange[1] !== globalPriceRange.max ? 1 : 0].filter(Boolean).length}
              </span>
            )}
          </span>
        </button>
      </div>

      {/* Genre filter pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onGenreChange(null)}
          className={`px-3 py-1.5 text-sm rounded-full transition-all ${
            !selectedGenre
              ? 'bg-primary-500 text-white'
              : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
          }`}
        >
          All Genres
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`px-3 py-1.5 text-sm rounded-full transition-all ${
              selectedGenre === genre
                ? 'bg-primary-500 text-white'
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
            }`}
          >
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </button>
        ))}
      </div>

      {/* Advanced filters panel */}
      {showAdvancedFilters && (
        <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl space-y-6">
          {/* Date range */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-neutral-300 mb-2">
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="block w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-neutral-300 mb-2">
                End Date
              </label>
              <input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate || undefined}
                className="block w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
          </div>

          {/* Price range */}
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-3">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
              {priceRange[1] >= globalPriceRange.max && '+'}
            </label>
            <div className="space-y-2">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="minPrice" className="text-xs text-neutral-400 mb-1 block">
                    Min Price
                  </label>
                  <input
                    id="minPrice"
                    type="range"
                    min={globalPriceRange.min}
                    max={globalPriceRange.max}
                    step="5"
                    value={priceRange[0]}
                    onChange={(e) => {
                      const newMin = Number(e.target.value);
                      setPriceRange([newMin, Math.max(newMin, priceRange[1])]);
                    }}
                    className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="maxPrice" className="text-xs text-neutral-400 mb-1 block">
                    Max Price
                  </label>
                  <input
                    id="maxPrice"
                    type="range"
                    min={globalPriceRange.min}
                    max={globalPriceRange.max}
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => {
                      const newMax = Number(e.target.value);
                      setPriceRange([Math.min(priceRange[0], newMax), newMax]);
                    }}
                    className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results count and clear filters */}
      <div className="flex items-center justify-between text-sm">
        <p className="text-neutral-400" role="status" aria-live="polite">
          {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
}
