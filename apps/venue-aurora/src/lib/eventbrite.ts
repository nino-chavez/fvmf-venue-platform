// Eventbrite API Integration
// Enhanced with full data expansion for optimal UX
// See: /docs/eventbrite-api-research.md

import type { Genre, Availability } from '@/components/ui/EventCard';

const ORG_ID = process.env.EVENTBRITE_ORG_ID;
const TOKEN = process.env.EVENTBRITE_PRIVATE_TOKEN;
const BASE_URL = 'https://www.eventbriteapi.com/v3';

// Expansion fields for rich event data
const EXPAND_FIELDS = [
  'venue',
  'ticket_classes',
  'logo',
  'category',
  'subcategory',
  'format',
  'organizer'
].join(',');

// ==========================================
// TYPE DEFINITIONS
// ==========================================

// Structured Content Types (for additional media)
export interface StructuredContentImage {
  type: 'image';
  data: {
    image: {
      url: string;
      original?: {
        url: string;
        width?: number;
        height?: number;
      };
    };
    display_restrictions?: unknown[];
  };
}

export interface StructuredContentVideo {
  type: 'video';
  data: {
    video: {
      url: string;
      embed_url?: string;
      thumbnail_url?: string;
    };
    display_restrictions?: unknown[];
  };
}

export interface StructuredContentText {
  type: 'text';
  data: {
    body: {
      text: string;
      alignment?: string;
    };
    display_restrictions?: unknown[];
  };
}

export type StructuredContentModule =
  | StructuredContentImage
  | StructuredContentVideo
  | StructuredContentText
  | { type: string; data: unknown }; // fallback for other types

export interface HeroCarouselSlide {
  image: {
    url: string;
    id?: string;
  };
}

export interface StructuredContent {
  modules: StructuredContentModule[];
  widgets?: Array<{
    type: string;
    data?: {
      slides?: HeroCarouselSlide[];
    };
  }>;
  purpose?: string;
}

export interface EventMedia {
  images: Array<{
    url: string;
    originalUrl?: string;
    altText?: string;
  }>;
  videos: Array<{
    url: string;
    embedUrl?: string;
    thumbnailUrl?: string;
  }>;
}

export interface Category {
  id: string;
  resource_uri: string;
  name: string;
  name_localized: string;
  short_name: string;
  short_name_localized: string;
}

export interface Subcategory {
  id: string;
  resource_uri: string;
  name: string;
  name_localized: string;
  parent_category?: Category;
}

export interface Format {
  id: string;
  resource_uri: string;
  name: string;
  name_localized: string;
  short_name: string;
  short_name_localized: string;
}

export interface Organizer {
  id: string;
  name: string;
  description?: {
    text: string;
    html: string;
  };
  logo?: {
    url: string;
  };
  url: string;
  num_past_events: number;
  num_future_events: number;
}

export interface TicketClass {
  id: string;
  name: string;
  description?: string;
  cost?: {
    display: string;
    currency: string;
    value: number;
    major_value: string;
  };
  fee?: {
    display: string;
    value: number;
  };
  free: boolean;
  quantity_total: number;
  quantity_sold: number;
  minimum_quantity: number;
  maximum_quantity: number;
  sales_start: string;
  sales_end: string;
  hidden: boolean;
}

export interface Venue {
  id: string;
  name: string;
  address: {
    address_1: string;
    address_2?: string;
    city: string;
    region: string;
    postal_code: string;
    country: string;
    localized_address_display: string;
    localized_multi_line_address_display?: string[];
  };
  latitude: string;
  longitude: string;
  capacity?: number;
}

export interface EventbriteEvent {
  id: string;
  name: {
    text: string;
    html: string;
  };
  description: {
    text: string;
    html: string;
  };
  url: string;
  start: {
    timezone: string;
    local: string;
    utc: string;
  };
  end: {
    timezone: string;
    local: string;
    utc: string;
  };
  status: 'draft' | 'live' | 'started' | 'ended' | 'completed' | 'canceled';
  currency: string;
  listed?: boolean;
  is_free: boolean;
  capacity: number;

  // Expanded fields
  venue?: Venue;
  ticket_classes?: TicketClass[];
  logo?: {
    url: string;
    original: {
      url: string;
    };
  };
  category?: Category;
  subcategory?: Subcategory;
  format?: Format;
  organizer?: Organizer;
}

export interface EventsResponse {
  events: EventbriteEvent[];
  pagination: {
    object_count: number;
    page_count: number;
    page_size: number;
    page_number: number;
    has_more_items: boolean;
  };
}

// ==========================================
// GENRE MAPPING
// ==========================================

const SUBCATEGORY_TO_GENRE: Record<string, Genre> = {
  // Jazz family
  'jazz': 'jazz',
  'blues & jazz': 'jazz',

  // Blues family
  'blues': 'blues',

  // Rock family
  'rock': 'rock',
  'indie': 'rock',
  'alternative': 'rock',
  'punk/hardcore': 'rock',
  'punk': 'rock',
  'hardcore': 'rock',
  'metal': 'rock',

  // Folk/Acoustic family
  'folk': 'folk',
  'acoustic': 'acoustic',
  'singer/songwriter': 'acoustic',
  'singer-songwriter': 'acoustic',
  'americana': 'folk',
  'country': 'folk',
  'classical': 'acoustic',
  'bluegrass': 'folk',

  // Big Band / Swing
  'big band': 'bigband',
  'swing': 'bigband',
  'latin': 'bigband',
};

/**
 * Maps Eventbrite event to our Genre type
 * Priority: subcategory > name keywords > default
 */
export function mapToGenre(event: EventbriteEvent): Genre {
  // 1. Try subcategory first (most accurate from API)
  if (event.subcategory?.name) {
    const subcatLower = event.subcategory.name.toLowerCase();
    for (const [key, genre] of Object.entries(SUBCATEGORY_TO_GENRE)) {
      if (subcatLower.includes(key)) return genre;
    }
  }

  // 2. Fall back to keyword detection in name
  const nameLower = event.name.text.toLowerCase();

  // Tribute detection (not a subcategory, detected by naming convention)
  if (nameLower.includes('tribute') || nameLower.includes('~') || nameLower.includes('experience')) {
    return 'tribute';
  }

  // Big band / swing detection
  if (nameLower.includes('big band') || nameLower.includes('swing') || nameLower.includes('sinatra')) {
    return 'bigband';
  }

  // Jazz detection
  if (nameLower.includes('jazz') || nameLower.includes('quartet') || nameLower.includes('trio') || nameLower.includes('bebop')) {
    return 'jazz';
  }

  // Blues detection
  if (nameLower.includes('blues') || nameLower.includes('delta') || nameLower.includes('chicago blues')) {
    return 'blues';
  }

  // Rock detection
  if (nameLower.includes('rock') || nameLower.includes('metal') || nameLower.includes('punk')) {
    return 'rock';
  }

  // Folk/Acoustic detection
  if (nameLower.includes('folk') || nameLower.includes('acoustic') || nameLower.includes('unplugged') || nameLower.includes('americana')) {
    return 'folk';
  }

  // 3. Default
  return 'other';
}

// ==========================================
// AVAILABILITY CALCULATION
// ==========================================

/**
 * Calculates real-time availability from ticket class inventory
 */
export function calculateAvailability(ticketClasses?: TicketClass[]): Availability {
  if (!ticketClasses?.length) return 'upcoming';

  const now = new Date();
  const publicTickets = ticketClasses.filter(tc => !tc.hidden);

  if (publicTickets.length === 0) return 'upcoming';

  // Check if all sales haven't started yet
  const allFutureSales = publicTickets.every(tc =>
    tc.sales_start && new Date(tc.sales_start) > now
  );
  if (allFutureSales) return 'upcoming';

  // Calculate inventory
  const total = publicTickets.reduce((sum, tc) => sum + (tc.quantity_total || 0), 0);
  const sold = publicTickets.reduce((sum, tc) => sum + (tc.quantity_sold || 0), 0);

  if (total === 0) return 'available'; // No inventory tracking

  const remaining = total - sold;
  const percentSold = sold / total;

  if (remaining <= 0) return 'soldout';
  if (percentSold >= 0.85) return 'limited'; // 85%+ sold = "Few Left"
  return 'available';
}

// ==========================================
// PRICE UTILITIES
// ==========================================

export interface PriceInfo {
  min: number;
  max: number;
  display: string;
  isFree: boolean;
  tiers: Array<{
    name: string;
    price: number;
    display: string;
    available: number;
  }>;
}

/**
 * Extracts comprehensive price information from ticket classes
 */
export function getPriceInfo(ticketClasses?: TicketClass[]): PriceInfo {
  if (!ticketClasses || ticketClasses.length === 0) {
    return { min: 0, max: 0, display: 'Free', isFree: true, tiers: [] };
  }

  const publicTickets = ticketClasses.filter(tc => !tc.hidden);
  const paidTickets = publicTickets.filter(tc => !tc.free && tc.cost?.value);

  if (paidTickets.length === 0) {
    return { min: 0, max: 0, display: 'Free', isFree: true, tiers: [] };
  }

  const prices = paidTickets.map(tc => tc.cost!.value / 100);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const tiers = publicTickets.map(tc => ({
    name: tc.name,
    price: tc.free ? 0 : (tc.cost?.value || 0) / 100,
    display: tc.free ? 'Free' : tc.cost?.display || 'Free',
    available: tc.quantity_total - tc.quantity_sold,
  }));

  return {
    min,
    max,
    display: min === max ? `$${min.toFixed(0)}` : `$${min.toFixed(0)} - $${max.toFixed(0)}`,
    isFree: false,
    tiers,
  };
}

export function getLowestPrice(ticketClasses?: TicketClass[]): string {
  const priceInfo = getPriceInfo(ticketClasses);
  return priceInfo.isFree ? 'Free' : `$${priceInfo.min.toFixed(0)}`;
}

export function formatTicketPrices(ticketClasses?: TicketClass[]): string[] {
  if (!ticketClasses || ticketClasses.length === 0) return ['Free'];

  return ticketClasses
    .filter(tc => !tc.hidden)
    .map(tc => {
      if (tc.free || !tc.cost) return `${tc.name}: Free`;
      return `${tc.cost.display} - ${tc.name}`;
    });
}

// ==========================================
// API FUNCTIONS
// ==========================================

async function fetchFromEventbrite<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
    },
    next: {
      revalidate: 3600, // Cache for 1 hour
    },
  });

  if (!response.ok) {
    throw new Error(`Eventbrite API error: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetches events with full expansion for rich UX
 */
export async function getEvents(status: 'live' | 'draft' | 'all' = 'live'): Promise<EventbriteEvent[]> {
  const data = await fetchFromEventbrite<EventsResponse>(
    `/organizations/${ORG_ID}/events/?status=${status}&expand=${EXPAND_FIELDS}&order_by=start_asc`
  );

  // Filter to only future events
  const now = new Date();
  return data.events.filter(event => new Date(event.start.utc) > now);
}

/**
 * Fetches a single event with full expansion
 */
export async function getEvent(eventId: string): Promise<EventbriteEvent> {
  return fetchFromEventbrite<EventbriteEvent>(
    `/events/${eventId}/?expand=${EXPAND_FIELDS}`
  );
}

/**
 * Fetches a single event by ID, returns null if not found
 */
export async function getEventById(eventId: string): Promise<EventbriteEvent | null> {
  try {
    return await fetchFromEventbrite<EventbriteEvent>(
      `/events/${eventId}/?expand=${EXPAND_FIELDS}`
    );
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
}

/**
 * Fetches all available categories
 */
export async function getCategories(): Promise<Category[]> {
  const data = await fetchFromEventbrite<{ categories: Category[] }>('/categories/');
  return data.categories;
}

/**
 * Fetches all available subcategories (genres)
 */
export async function getSubcategories(): Promise<Subcategory[]> {
  const data = await fetchFromEventbrite<{ subcategories: Subcategory[] }>('/subcategories/');
  return data.subcategories;
}

/**
 * Fetches all available formats
 */
export async function getFormats(): Promise<Format[]> {
  const data = await fetchFromEventbrite<{ formats: Format[] }>('/formats/');
  return data.formats;
}

/**
 * Fetches structured content (additional media) for an event
 */
export async function getEventStructuredContent(eventId: string): Promise<StructuredContent | null> {
  try {
    return await fetchFromEventbrite<StructuredContent>(
      `/events/${eventId}/structured_content/`
    );
  } catch (error) {
    console.error('Error fetching structured content:', error);
    return null;
  }
}

/**
 * Extracts media (images and videos) from structured content
 */
export function extractMediaFromStructuredContent(content: StructuredContent | null): EventMedia {
  const media: EventMedia = {
    images: [],
    videos: [],
  };

  if (!content) return media;

  // Extract from modules
  if (content.modules) {
    for (const module of content.modules) {
      if (module.type === 'image') {
        const imageModule = module as StructuredContentImage;
        if (imageModule.data?.image?.url) {
          media.images.push({
            url: imageModule.data.image.url,
            originalUrl: imageModule.data.image.original?.url,
          });
        }
      } else if (module.type === 'video') {
        const videoModule = module as StructuredContentVideo;
        if (videoModule.data?.video) {
          media.videos.push({
            url: videoModule.data.video.url,
            embedUrl: videoModule.data.video.embed_url,
            thumbnailUrl: videoModule.data.video.thumbnail_url,
          });
        }
      }
    }
  }

  // Also extract images from herocarousel widget if present
  if (content.widgets) {
    for (const widget of content.widgets) {
      if (widget.type === 'herocarousel' && widget.data?.slides) {
        for (const slide of widget.data.slides) {
          if (slide.image?.url) {
            // Avoid duplicates by checking URL
            const exists = media.images.some(img => img.url === slide.image.url);
            if (!exists) {
              media.images.push({
                url: slide.image.url,
              });
            }
          }
        }
      }
    }
  }

  return media;
}

/**
 * Fetches event media (additional images and videos)
 */
export async function getEventMedia(eventId: string): Promise<EventMedia> {
  const content = await getEventStructuredContent(eventId);
  return extractMediaFromStructuredContent(content);
}

// ==========================================
// DATE FORMATTING
// ==========================================

export function formatEventDate(dateString: string): {
  dayOfWeek: string;
  month: string;
  day: string;
  time: string;
  full: string;
  iso: string;
} {
  const date = new Date(dateString);

  return {
    dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }),
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    day: date.getDate().toString().padStart(2, '0'),
    time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
    full: date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    iso: date.toISOString(),
  };
}

// ==========================================
// NORMALIZED EVENT (for EventCard)
// ==========================================

export interface NormalizedEventbriteEvent {
  id: string;
  name: string;
  description: string;
  date: Date;
  endDate: Date;
  price: number;
  priceMax?: number;
  priceDisplay: string;
  currency: string;
  genre: Genre;
  availability: Availability;
  imageUrl?: string;
  imageUrlHiRes?: string;
  ticketUrl: string;
  venue: string;
  venueAddress?: string;
  format?: string;
  organizer?: {
    name: string;
    pastEvents: number;
  };
  ticketTiers: PriceInfo['tiers'];
  source: 'eventbrite';
}

/**
 * Normalizes Eventbrite event for use with EventCard component
 */
export function normalizeEvent(event: EventbriteEvent): NormalizedEventbriteEvent {
  const priceInfo = getPriceInfo(event.ticket_classes);

  return {
    id: event.id,
    name: event.name.text,
    description: event.description?.text || '',
    date: new Date(event.start.local),
    endDate: new Date(event.end.local),
    price: priceInfo.min,
    priceMax: priceInfo.max !== priceInfo.min ? priceInfo.max : undefined,
    priceDisplay: priceInfo.display,
    currency: event.currency || 'USD',
    genre: mapToGenre(event),
    availability: calculateAvailability(event.ticket_classes),
    imageUrl: event.logo?.url,
    imageUrlHiRes: event.logo?.original?.url,
    ticketUrl: event.url,
    venue: event.venue?.name || 'The Venue Aurora',
    venueAddress: event.venue?.address?.localized_address_display,
    format: event.format?.name,
    organizer: event.organizer ? {
      name: event.organizer.name,
      pastEvents: event.organizer.num_past_events || 0,
    } : undefined,
    ticketTiers: priceInfo.tiers,
    source: 'eventbrite',
  };
}

/**
 * Fetches and normalizes all events for display
 */
export async function getNormalizedEvents(status: 'live' | 'draft' | 'all' = 'live'): Promise<NormalizedEventbriteEvent[]> {
  const events = await getEvents(status);
  return events.map(normalizeEvent);
}
