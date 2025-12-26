interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  imageUrl?: string;
  url: string;
}

/**
 * Article Schema for blog posts and news articles
 *
 * Critical for:
 * - Google News eligibility
 * - Featured article snippets
 * - AEO (Answer Engine Optimization)
 * - GEO (Generative Engine Optimization) - AI chatbots prefer citing articles
 *
 * Usage:
 * <ArticleSchema
 *   headline="How to Get the Best Seats at The Venue Aurora"
 *   description="Expert tips for choosing the perfect seats..."
 *   datePublished="2025-01-15"
 *   authorName="The Venue Aurora"
 *   url="/blog/best-seats-guide"
 * />
 */
export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName = 'The Venue Aurora',
  authorUrl = 'https://venueaurora.com/about',
  imageUrl,
  url,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: imageUrl ? [imageUrl] : [],
    datePublished,
    dateModified: dateModified || datePublished,

    // Author - Important for E-E-A-T
    author: {
      '@type': 'Organization',
      name: authorName,
      url: authorUrl,
    },

    // Publisher - The Venue Aurora
    publisher: {
      '@type': 'Organization',
      name: 'The Venue Aurora',
      logo: {
        '@type': 'ImageObject',
        url: 'https://venueaurora.com/logo.png',
      },
      url: 'https://venueaurora.com',
    },

    // Main entity of the page
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://venueaurora.com${url}`,
    },

    // Article metadata
    inLanguage: 'en-US',

    // Publisher organization details
    publisherOrganization: {
      '@type': 'Organization',
      name: 'Fox Valley Music Foundation',
      url: 'https://foxvalleymusicfoundation.org',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BlogPosting Schema - More specific than Article
 * Use for blog posts specifically
 */
interface BlogPostingSchemaProps extends ArticleSchemaProps {
  wordCount?: number;
  keywords?: string[];
}

export function BlogPostingSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName = 'The Venue Aurora',
  authorUrl = 'https://venueaurora.com/about',
  imageUrl,
  url,
  wordCount,
  keywords = [],
}: BlogPostingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image: imageUrl ? [imageUrl] : [],
    datePublished,
    dateModified: dateModified || datePublished,

    author: {
      '@type': 'Organization',
      name: authorName,
      url: authorUrl,
    },

    publisher: {
      '@type': 'Organization',
      name: 'The Venue Aurora',
      logo: {
        '@type': 'ImageObject',
        url: 'https://venueaurora.com/logo.png',
      },
    },

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://venueaurora.com${url}`,
    },

    // Blog-specific fields
    ...(wordCount && { wordCount }),
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),

    // Engagement hints for AI
    about: keywords.map((keyword) => ({
      '@type': 'Thing',
      name: keyword,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Default export for convenience
export default ArticleSchema;
