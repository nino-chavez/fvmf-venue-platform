/**
 * Organization Schema for Fox Valley Music Foundation
 *
 * This schema establishes The Venue Aurora's parent organization
 * for E-E-A-T signals and brand authority in AI search results.
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://foxvalleymusicfoundation.org/#organization',
    name: 'Fox Valley Music Foundation',
    alternateName: 'FVMF',
    url: 'https://foxvalleymusicfoundation.org',
    logo: 'https://foxvalleymusicfoundation.org/logo.png',

    // Nonprofit designation - Critical for E-E-A-T
    nonprofitStatus: 'Nonprofit501c3',
    taxID: '501(c)(3)',

    // Mission & Description
    description: 'Fox Valley Music Foundation is a 501(c)(3) nonprofit organization dedicated to music education and preservation in the Fox River Valley of Illinois.',

    slogan: 'We love music. We love the Fox River Valley of Illinois.',

    // What the organization does
    knowsAbout: [
      'Music Education',
      'Music Preservation',
      'Live Music',
      'Community Arts',
      'Cultural Programming',
      'Music History',
      'Artist Development',
    ],

    // Areas of focus
    areaServed: {
      '@type': 'State',
      name: 'Illinois',
      '@id': 'https://www.wikidata.org/wiki/Q1204',
    },

    // Sub-organizations (The Venue Aurora)
    subOrganization: {
      '@type': 'MusicVenue',
      name: 'The Venue Aurora',
      url: 'https://venueaurora.com',
      '@id': 'https://venueaurora.com/#organization',
    },

    // Contact information
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-331-212-8490',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        email: 'info@themusicvenue.org',
        contactType: 'General Inquiries',
      },
    ],

    // Social media presence
    sameAs: [
      'https://www.facebook.com/foxvalleymusicfoundation',
      'https://www.instagram.com/foxvalleymusicfoundation',
    ],

    // Founding information
    foundingDate: '2019',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Aurora',
        addressRegion: 'IL',
        addressCountry: 'US',
      },
    },

    // Key people (if known - update with real names)
    // founder: [
    //   {
    //     '@type': 'Person',
    //     name: '[Founder Name]',
    //   },
    // ],

    // What the organization offers
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Programs & Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Live Music Events',
            description: 'Presentation of nationally-recognized musical talent',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Music Education',
            description: 'Educational programs and workshops',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Music Preservation',
            description: 'Preservation of musical heritage and history',
          },
        },
      ],
    },

    // Verification markers
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/LikeAction',
      userInteractionCount: 0, // Update with real social media follower count
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
