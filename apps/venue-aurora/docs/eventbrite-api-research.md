# Eventbrite API Research & Integration Guide

> Research conducted: December 2024
> Purpose: Maximize data utilization for seamless event discovery UX

## Overview

This document captures the complete Eventbrite API analysis for The Venue Aurora website, identifying all available data fields and their UX value for creating a frictionless event discovery experience.

---

## API Endpoints

### Primary Endpoints Used

| Endpoint | Purpose |
|----------|---------|
| `GET /v3/organizations/{org_id}/events/` | List all org events |
| `GET /v3/events/{event_id}/` | Single event details |
| `GET /v3/categories/` | All event categories |
| `GET /v3/subcategories/` | All subcategories (genres) |
| `GET /v3/formats/` | Event formats (Concert, etc.) |
| `GET /v3/venues/{venue_id}/` | Venue details |

### Expansion Parameters

The `expand` parameter enriches responses with related objects:

```
?expand=venue,ticket_classes,logo,category,subcategory,format,organizer
```

---

## Complete Data Model

### Event Object

```typescript
interface EventbriteEvent {
  // Core Identity
  id: string;
  name: { text: string; html: string };
  description: { text: string; html: string };
  url: string;                    // Direct Eventbrite ticket page

  // Timing
  start: { timezone: string; local: string; utc: string };
  end: { timezone: string; local: string; utc: string };

  // Status & Visibility
  status: 'draft' | 'live' | 'started' | 'ended' | 'completed' | 'canceled';
  listed: boolean;                // Public visibility
  shareable: boolean;
  is_free: boolean;

  // Capacity
  capacity: number;               // Total venue capacity
  capacity_is_custom: boolean;

  // Media
  logo?: {
    url: string;                  // Standard size
    original: { url: string };    // High-res for featured cards
  };

  // Classification (REQUIRES expand parameter)
  category?: Category;            // e.g., "Music" (ID: 103)
  subcategory?: Subcategory;      // e.g., "Jazz", "Blues", "Rock"
  format?: Format;                // e.g., "Concert", "Performance"

  // Related Objects (REQUIRES expand parameter)
  venue?: Venue;
  organizer?: Organizer;
  ticket_classes?: TicketClass[];

  // Metadata
  created: string;
  changed: string;
  currency: string;
}
```

### Category Object

```typescript
interface Category {
  id: string;
  resource_uri: string;
  name: string;                   // "Music"
  name_localized: string;
  short_name: string;             // "Music"
  short_name_localized: string;
}
```

**Music Venue Relevant Categories:**

| ID | Name | Use Case |
|----|------|----------|
| 103 | Music | Primary category for all shows |
| 105 | Performing & Visual Arts | Theater, dance performances |
| 104 | Film, Media & Entertainment | Special screenings |
| 113 | Community & Culture | Community events |

### Subcategory Object (Genre)

```typescript
interface Subcategory {
  id: string;
  resource_uri: string;
  name: string;                   // "Jazz", "Blues", etc.
  name_localized: string;
  parent_category: Category;
}
```

**Music Subcategories (Genre Classification):**

| Subcategory | Maps To | Badge Color |
|-------------|---------|-------------|
| Jazz | `jazz` | Amber/Gold |
| Blues | `blues` | Indigo/Deep Blue |
| Rock | `rock` | Red |
| Indie | `rock` | Red |
| Classical | `acoustic` | Warm Gray |
| Folk | `folk` | Forest Green |
| Acoustic | `acoustic` | Warm Gray |
| Country | `folk` | Forest Green |
| R&B | `other` | Purple |
| Electronic/EDM | `other` | Cyan |
| Metal | `rock` | Red |
| Reggae | `other` | Green/Yellow |
| World | `other` | Teal |
| Pop | `other` | Pink |

### Format Object (Event Type)

```typescript
interface Format {
  id: string;
  resource_uri: string;
  name: string;                   // "Concert", "Festival", etc.
  name_localized: string;
  short_name: string;
  short_name_localized: string;
}
```

**Relevant Formats:**

| Format | Description |
|--------|-------------|
| Concert | Standard music performance |
| Performance | General live performance |
| Festival | Multi-act events |
| Party | Social gatherings with music |
| Class | Music education events |

### Ticket Class Object

```typescript
interface TicketClass {
  id: string;
  name: string;                   // "General Admission", "VIP", etc.
  description?: string;

  // Pricing
  cost?: {
    display: string;              // "$25.00"
    currency: string;             // "USD"
    value: number;                // 2500 (cents)
    major_value: string;          // "25.00"
  };
  fee?: { display: string; value: number };
  tax?: { display: string; value: number };
  free: boolean;

  // Inventory
  quantity_total: number;         // Total available
  quantity_sold: number;          // Already sold
  minimum_quantity: number;       // Min per order
  maximum_quantity: number;       // Max per order

  // Sales Window
  sales_start: string;            // ISO datetime
  sales_end: string;              // ISO datetime
  sales_start_after?: string;     // Relative to another ticket

  // Visibility
  hidden: boolean;
  include_fee: boolean;

  // Access
  event_id: string;
}
```

### Venue Object

```typescript
interface Venue {
  id: string;
  name: string;
  address: {
    address_1: string;
    address_2?: string;
    city: string;
    region: string;               // State/Province
    postal_code: string;
    country: string;
    localized_address_display: string;
    localized_area_display: string;
    localized_multi_line_address_display: string[];
  };
  latitude: string;
  longitude: string;
  capacity?: number;
}
```

### Organizer Object

```typescript
interface Organizer {
  id: string;
  name: string;
  description?: { text: string; html: string };
  logo?: { url: string };
  url: string;                    // Organizer profile URL

  // Trust Signals
  num_past_events: number;        // "200+ events hosted"
  num_future_events: number;
}
```

---

## Information Architecture

### Priority Levels for Event Display

| Priority | Data | Source Field | UX Purpose |
|----------|------|--------------|------------|
| **1 - Instant Decision** | Date | `start.local` | When is it? |
| | Price | `ticket_classes[0].cost.display` | Can I afford it? |
| | CTA | `url` | Take action |
| **2 - Quick Filter** | Event Name | `name.text` | What is it? |
| | Genre Badge | `subcategory.name` | My taste? |
| | Availability | Calculated from `ticket_classes` | Can I still go? |
| **3 - Context** | Time | `start.local` (time portion) | Schedule fit |
| | Venue | `venue.name` | Location |
| | Format | `format.name` | Event type |
| **4 - Deep Dive** | Description | `description.text` | Full details |
| | Organizer | `organizer.name` | Trust signal |
| | All Ticket Tiers | `ticket_classes[]` | Options |
| | High-res Image | `logo.original.url` | Visual appeal |

### Availability Calculation

```typescript
function calculateAvailability(ticketClasses: TicketClass[]): Availability {
  if (!ticketClasses?.length) return 'upcoming';

  const now = new Date();
  const publicTickets = ticketClasses.filter(tc => !tc.hidden);

  // Check if sales haven't started
  const allFutureSales = publicTickets.every(tc =>
    new Date(tc.sales_start) > now
  );
  if (allFutureSales) return 'upcoming';

  // Calculate inventory
  const total = publicTickets.reduce((sum, tc) => sum + tc.quantity_total, 0);
  const sold = publicTickets.reduce((sum, tc) => sum + tc.quantity_sold, 0);
  const remaining = total - sold;
  const percentSold = total > 0 ? sold / total : 0;

  if (remaining === 0) return 'soldout';
  if (percentSold >= 0.85) return 'limited';  // 85%+ sold = "Few Left"
  return 'available';
}
```

### Genre Mapping

```typescript
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
  'metal': 'rock',

  // Folk/Acoustic family
  'folk': 'folk',
  'acoustic': 'acoustic',
  'singer/songwriter': 'acoustic',
  'americana': 'folk',
  'country': 'folk',
  'classical': 'acoustic',

  // Big Band / Swing
  'big band': 'bigband',
  'swing': 'bigband',

  // Tribute (detected from name, not subcategory)
  // Use keyword detection as fallback
};

function mapToGenre(event: EventbriteEvent): Genre {
  // 1. Try subcategory first (most accurate)
  if (event.subcategory?.name) {
    const subcatLower = event.subcategory.name.toLowerCase();
    for (const [key, genre] of Object.entries(SUBCATEGORY_TO_GENRE)) {
      if (subcatLower.includes(key)) return genre;
    }
  }

  // 2. Fall back to keyword detection in name
  const nameLower = event.name.text.toLowerCase();
  if (nameLower.includes('tribute') || nameLower.includes('~')) return 'tribute';
  if (nameLower.includes('big band') || nameLower.includes('swing')) return 'bigband';
  if (nameLower.includes('jazz') || nameLower.includes('quartet')) return 'jazz';
  if (nameLower.includes('blues')) return 'blues';

  // 3. Default
  return 'other';
}
```

---

## Optimal API Request

### Recommended Query

```typescript
const EXPAND_FIELDS = [
  'venue',
  'ticket_classes',
  'logo',
  'category',
  'subcategory',
  'format',
  'organizer'
].join(',');

const endpoint = `/organizations/${ORG_ID}/events/` +
  `?status=live` +
  `&expand=${EXPAND_FIELDS}` +
  `&order_by=start_asc`;
```

### Response Size Consideration

Full expansion increases response size. For list views, consider:
- Use full expansion for featured/hero events
- Use minimal expansion (`venue,ticket_classes,logo,subcategory`) for list items
- Fetch full details on demand for event detail pages

---

## UX Enhancements Enabled

### With Expanded Data

| Feature | Data Source | User Benefit |
|---------|-------------|--------------|
| Genre Badges | `subcategory.name` | Filter by music taste |
| Real-time Availability | `ticket_classes[].quantity_*` | Know if tickets remain |
| "Few Left" Urgency | Calculated percentage | Decision urgency |
| Price Range | `ticket_classes[].cost` | Budget filtering |
| Trust Signals | `organizer.num_past_events` | Confidence in organizer |
| High-res Images | `logo.original.url` | Visual impact |
| Map Integration | `venue.latitude/longitude` | Navigation |
| Sales Countdown | `ticket_classes[].sales_end` | "Sales end in 2 days" |

---

## References

- [Eventbrite Platform API Reference](https://www.eventbrite.com/platform/api)
- [Eventbrite Categories by ID](https://fullworksplugins.com/docs/display-eventbrite-events-in-wordpress/developer/eventbrite-categories-by-id/)
- [Eventbrite PHP SDK](https://github.com/eventbrite/eventbrite-sdk-php)
- [API Tutorial - I'd Rather Be Writing](https://idratherbewriting.com/learnapidoc/docapis_eventbrite_example.html)
