import { EventbriteEvent, getPriceInfo } from '@/lib/eventbrite';

interface EventStructuredDataProps {
  event: EventbriteEvent;
}

export function EventStructuredData({ event }: EventStructuredDataProps) {
  const priceInfo = getPriceInfo(event.ticket_classes);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: event.name.text,
    description: event.description?.text || '',
    startDate: event.start.utc,
    endDate: event.end.utc,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.venue?.name || 'The Venue Aurora',
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.venue?.address.address_1 || '21 S. Broadway Ave.',
        addressLocality: event.venue?.address.city || 'Aurora',
        addressRegion: event.venue?.address.region || 'IL',
        postalCode: event.venue?.address.postal_code || '60505',
        addressCountry: 'US',
      },
    },
    image: event.logo?.url ? [event.logo.url] : [],
    offers: priceInfo.tiers.map((tier) => ({
      '@type': 'Offer',
      url: event.url,
      price: tier.price,
      priceCurrency: event.currency || 'USD',
      availability:
        tier.available > 0
          ? 'https://schema.org/InStock'
          : 'https://schema.org/SoldOut',
      validFrom: event.start.utc,
      name: tier.name,
    })),
    performer: event.organizer
      ? {
          '@type': 'MusicGroup',
          name: event.organizer.name,
          url: event.organizer.url,
        }
      : {
          '@type': 'MusicGroup',
          name: event.name.text,
        },
    organizer: {
      '@type': 'Organization',
      name: 'The Venue Aurora',
      url: 'https://venueaurora.com',
      sameAs: [
        'https://www.facebook.com/venueaurora',
        'https://www.instagram.com/venueaurora',
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
