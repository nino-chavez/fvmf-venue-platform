export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['MusicVenue', 'EventVenue', 'Organization'],
    '@id': 'https://venueaurora.com/#organization',
    name: 'The Venue Aurora',
    alternateName: 'The Venue',
    legalName: 'Fox Valley Music Foundation',
    url: 'https://venueaurora.com',
    logo: 'https://venueaurora.com/logo.png',
    image: [
      'https://venueaurora.com/venue-exterior.jpg',
      'https://venueaurora.com/venue-interior.jpg',
      'https://venueaurora.com/venue-stage.jpg',
    ],
    description: 'A 190-seat listening room in Downtown Aurora, Illinois, presenting nationally-recognized talent in blues, jazz, rock, big band, and more. Operated by Fox Valley Music Foundation, a 501(c)(3) nonprofit.',

    // Contact Information
    telephone: '+1-331-212-8490',
    email: 'info@themusicvenue.org',

    // Address - Critical for Local SEO and GEO
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21 S. Broadway Ave.',
      addressLocality: 'Aurora',
      addressRegion: 'IL',
      postalCode: '60505',
      addressCountry: 'US',
    },

    // Geographic coordinates for precise location
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.7606,
      longitude: -88.3201,
    },

    // Area Served - helps with local and regional SEO
    areaServed: [
      {
        '@type': 'City',
        name: 'Aurora',
        '@id': 'https://www.wikidata.org/wiki/Q584451',
      },
      {
        '@type': 'State',
        name: 'Illinois',
      },
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 41.7606,
          longitude: -88.3201,
        },
        geoRadius: '50000', // 50km radius
      },
    ],

    // Hours of Operation
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '19:00',
        closes: '00:00',
        description: 'Event hours - doors open one hour before show time',
      },
    ],

    // Social Media - Important for E-E-A-T and brand verification
    sameAs: [
      'https://www.facebook.com/venueaurora',
      'https://www.instagram.com/venueaurora',
      'https://twitter.com/venueaurora',
      'https://www.youtube.com/@venueaurora',
      'https://www.eventbrite.com/o/the-venue-aurora-19126475647',
    ],

    // Parent Organization
    parentOrganization: {
      '@type': 'Organization',
      name: 'Fox Valley Music Foundation',
      url: 'https://foxvalleymusicfoundation.org',
      nonprofitStatus: 'Nonprofit501c3',
      taxID: '501(c)(3)',
    },

    // Features and Amenities
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Wheelchair Accessible',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Bar Service',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Seating Capacity',
        value: 190,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Sound System',
        value: 'Professional',
      },
    ],

    // Price Range - helps set expectations
    priceRange: '$$',

    // Accepts Reservations
    acceptsReservations: 'https://schema.org/True',

    // Payment Methods
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],

    // Audience Type
    audience: {
      '@type': 'Audience',
      audienceType: 'Music Lovers, All Ages',
    },

    // What we offer
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Music Events',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Live Music Concerts',
            description: 'Blues, jazz, rock, big band, and tribute performances',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Venue Rental',
            description: 'Private event space rental',
          },
        },
      ],
    },

    // Awards and Recognition (if applicable)
    // award: ['Best Music Venue 2024'],

    // Founded
    foundingDate: '2019',

    // Slogan/Motto
    slogan: 'Live Music in Downtown Aurora',

    // Knowledge Graph
    knowsAbout: [
      'Live Music',
      'Blues Music',
      'Jazz Music',
      'Rock Music',
      'Big Band Music',
      'Concert Production',
      'Music Education',
      'Music Preservation',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
