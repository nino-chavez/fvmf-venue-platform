# FVMF Sanity CMS Schemas

Complete Sanity schema definitions for the Fox Valley Music Foundation content management system.

---

## Schema Structure

```
sanity/
├── schemas/
│   ├── index.ts                 # Schema registry
│   ├── documents/
│   │   ├── program.ts           # Music programs
│   │   ├── testimonial.ts       # Student stories
│   │   ├── teamMember.ts        # Board/staff
│   │   ├── annualReport.ts      # Annual reports
│   │   ├── post.ts              # Blog posts (shared)
│   │   └── donationTier.ts      # Membership tiers
│   └── objects/
│       ├── impactMetric.ts      # Metric object type
│       └── seo.ts               # SEO metadata
└── sanity.config.ts             # Sanity configuration
```

---

## Document Schemas

### Program Schema

**File: `sanity/schemas/documents/program.ts`**

```typescript
import { defineType, defineField } from 'sanity';

export const program = defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  icon: () => '🎵',
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle (Album-style)',
      type: 'string',
      description: 'e.g., "Side A: Lessons for Life"',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Emoji',
      type: 'string',
      description: 'Single emoji to represent the program',
      validation: (Rule) => Rule.required().max(2),
    }),
    defineField({
      name: 'color',
      title: 'Album Color Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Blue Note Blue', value: 'blue' },
          { title: 'Motown Gold', value: 'gold' },
          { title: 'Capitol Orange', value: 'orange' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image (Album Cover)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'impactMetrics',
      title: 'Impact Metrics',
      type: 'array',
      of: [{ type: 'impactMetric' }],
      description: 'Key statistics for this program',
    }),
    defineField({
      name: 'relatedStories',
      title: 'Related Student Stories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Program',
      type: 'boolean',
      description: 'Display prominently on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'coverImage',
      icon: 'icon',
    },
    prepare({ title, subtitle, media, icon }) {
      return {
        title: `${icon} ${title}`,
        subtitle: subtitle,
        media: media,
      };
    },
  },
});
```

---

### Testimonial Schema

**File: `sanity/schemas/documents/testimonial.ts`**

```typescript
import { defineType, defineField } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Student Testimonial',
  type: 'document',
  icon: () => '💬',
  fields: [
    defineField({
      name: 'name',
      title: 'Student Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'number',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'instrument',
      title: 'Primary Instrument',
      type: 'string',
      options: {
        list: [
          'Piano',
          'Guitar',
          'Bass',
          'Drums',
          'Saxophone',
          'Trumpet',
          'Trombone',
          'Violin',
          'Cello',
          'Voice',
          'Other',
        ],
      },
    }),
    defineField({
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 4,
      description: 'Keep it concise and impactful (150-300 characters)',
      validation: (Rule) => Rule.required().min(50).max(300),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullStory',
      title: 'Full Story (Optional)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Extended narrative for dedicated story page',
    }),
    defineField({
      name: 'program',
      title: 'Associated Program',
      type: 'reference',
      to: [{ type: 'program' }],
    }),
    defineField({
      name: 'yearsInProgram',
      title: 'Years in Program',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(20),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Story',
      type: 'boolean',
      description: 'Show in homepage gatefold',
      initialValue: false,
    }),
    defineField({
      name: 'consentGiven',
      title: 'Photo/Story Consent Given',
      type: 'boolean',
      description: 'Parental consent for minors, self-consent for adults',
      validation: (Rule) => Rule.required(),
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'quote',
      media: 'photo',
      instrument: 'instrument',
    },
    prepare({ title, subtitle, media, instrument }) {
      return {
        title: `${title} (${instrument})`,
        subtitle: subtitle?.substring(0, 60) + '...',
        media: media,
      };
    },
  },
});
```

---

### Team Member Schema

**File: `sanity/schemas/documents/teamMember.ts`**

```typescript
import { defineType, defineField } from 'sanity';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon: () => '👤',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Board President', value: 'board-president' },
          { title: 'Board Vice President', value: 'board-vp' },
          { title: 'Board Treasurer', value: 'board-treasurer' },
          { title: 'Board Secretary', value: 'board-secretary' },
          { title: 'Board Member', value: 'board-member' },
          { title: 'Executive Director', value: 'executive-director' },
          { title: 'Program Director', value: 'program-director' },
          { title: 'Volunteer Coordinator', value: 'volunteer-coordinator' },
          { title: 'Music Instructor', value: 'instructor' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email (Optional)',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL (Optional)',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (Rule) => Rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
});
```

---

### Annual Report Schema

**File: `sanity/schemas/documents/annualReport.ts`**

```typescript
import { defineType, defineField } from 'sanity';

export const annualReport = defineType({
  name: 'annualReport',
  title: 'Annual Report',
  type: 'document',
  icon: () => '📊',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .integer()
          .min(2009)
          .max(new Date().getFullYear()),
    }),
    defineField({
      name: 'title',
      title: 'Report Title',
      type: 'string',
      description: 'e.g., "2023 Annual Report: A Year of Transformation"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF Report File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points of major achievements',
      validation: (Rule) => Rule.required().min(3).max(8),
    }),
    defineField({
      name: 'impactMetrics',
      title: 'Impact Metrics',
      type: 'array',
      of: [{ type: 'impactMetric' }],
      description: 'Key statistics for the year',
    }),
    defineField({
      name: 'summary',
      title: 'Executive Summary',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Year (Newest First)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      year: 'year',
      title: 'title',
      media: 'coverImage',
    },
    prepare({ year, title, media }) {
      return {
        title: `${year} Annual Report`,
        subtitle: title,
        media: media,
      };
    },
  },
});
```

---

### Donation Tier Schema

**File: `sanity/schemas/documents/donationTier.ts`**

```typescript
import { defineType, defineField } from 'sanity';

export const donationTier = defineType({
  name: 'donationTier',
  title: 'Donation Tier',
  type: 'document',
  icon: () => '💝',
  fields: [
    defineField({
      name: 'name',
      title: 'Tier Name',
      type: 'string',
      description: 'e.g., "Music Lover", "Backstage Supporter"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Emoji',
      type: 'string',
      description: 'Single emoji to represent the tier',
      validation: (Rule) => Rule.required().max(2),
    }),
    defineField({
      name: 'monthlyAmount',
      title: 'Monthly Amount ($)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'annualAmount',
      title: 'Annual Amount ($)',
      type: 'number',
      description: 'Pre-calculated for display',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'benefits',
      title: 'Membership Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of perks for this tier',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'stripePriceId',
      title: 'Stripe Price ID',
      type: 'string',
      description: 'Stripe recurring price ID for this tier',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(0),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Tier',
      type: 'boolean',
      description: 'Highlight this tier (e.g., "Most Popular")',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      icon: 'icon',
      amount: 'monthlyAmount',
    },
    prepare({ name, icon, amount }) {
      return {
        title: `${icon} ${name}`,
        subtitle: `$${amount}/month`,
      };
    },
  },
});
```

---

## Object Schemas

### Impact Metric Object

**File: `sanity/schemas/objects/impactMetric.ts`**

```typescript
import { defineType, defineField } from 'sanity';

export const impactMetric = defineType({
  name: 'impactMetric',
  title: 'Impact Metric',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Metric Value',
      type: 'string',
      description: 'e.g., "500+", "$50K", "15"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Metric Label',
      type: 'string',
      description: 'e.g., "Students Served", "Aid Granted"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Students', value: 'students' },
          { title: 'Financial', value: 'financial' },
          { title: 'Programs', value: 'programs' },
          { title: 'Impact', value: 'impact' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      value: 'value',
      label: 'label',
    },
    prepare({ value, label }) {
      return {
        title: `${value} ${label}`,
      };
    },
  },
});
```

---

### SEO Object

**File: `sanity/schemas/objects/seo.ts`**

```typescript
import { defineType, defineField } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Override default title (50-60 characters)',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Search engine description (150-160 characters)',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Social media share image (1200x630px recommended)',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page',
      initialValue: false,
    }),
  ],
});
```

---

## Schema Registry

**File: `sanity/schemas/index.ts`**

```typescript
// Documents
import { program } from './documents/program';
import { testimonial } from './documents/testimonial';
import { teamMember } from './documents/teamMember';
import { annualReport } from './documents/annualReport';
import { donationTier } from './documents/donationTier';

// Objects
import { impactMetric } from './objects/impactMetric';
import { seo } from './objects/seo';

// Shared schemas (from venue-aurora)
// These would be imported from the shared packages/sanity-config
// For now, we'll define them here

export const schemaTypes = [
  // Documents
  program,
  testimonial,
  teamMember,
  annualReport,
  donationTier,

  // Objects
  impactMetric,
  seo,

  // Shared (blog, author, category)
  // import these from shared package in monorepo
];
```

---

## Sanity Configuration

**File: `sanity.config.ts`**

```typescript
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'fvmf-foundation',
  title: 'FVMF Foundation',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'fvmf-foundation',

  basePath: '/studio',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Programs')
              .icon(() => '🎵')
              .child(
                S.documentList()
                  .title('Programs')
                  .filter('_type == "program"')
              ),

            S.listItem()
              .title('Student Stories')
              .icon(() => '💬')
              .child(
                S.documentList()
                  .title('Testimonials')
                  .filter('_type == "testimonial"')
              ),

            S.divider(),

            S.listItem()
              .title('Team')
              .icon(() => '👥')
              .child(
                S.documentList()
                  .title('Team Members')
                  .filter('_type == "teamMember"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),

            S.divider(),

            S.listItem()
              .title('Annual Reports')
              .icon(() => '📊')
              .child(
                S.documentList()
                  .title('Annual Reports')
                  .filter('_type == "annualReport"')
                  .defaultOrdering([{ field: 'year', direction: 'desc' }])
              ),

            S.listItem()
              .title('Donation Tiers')
              .icon(() => '💝')
              .child(
                S.documentList()
                  .title('Donation Tiers')
                  .filter('_type == "donationTier"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),

            S.divider(),

            // Shared content (blog, etc.)
            S.listItem()
              .title('Blog')
              .icon(() => '📝')
              .child(
                S.documentList()
                  .title('Blog Posts')
                  .filter('_type == "post" && "foundation" in sites')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
```

---

## Sample GROQ Queries

### Fetch Programs for Homepage

```typescript
// lib/sanity/queries.ts
export const programsQuery = `
  *[_type == "program" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    subtitle,
    icon,
    color,
    description,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    impactMetrics,
    "relatedStories": relatedStories[]-> {
      name,
      quote,
      "photo": photo.asset->url
    }
  }
`;
```

### Fetch Featured Testimonials

```typescript
export const featuredTestimonialsQuery = `
  *[_type == "testimonial" && featured == true && consentGiven == true] | order(publishedAt desc) [0...4] {
    _id,
    name,
    age,
    instrument,
    quote,
    "photo": photo.asset->url,
    "program": program->title
  }
`;
```

### Fetch Impact Metrics

```typescript
export const impactMetricsQuery = `
  *[_type == "program"] {
    impactMetrics[] {
      value,
      label,
      category
    }
  }
`;
```

### Fetch Donation Tiers

```typescript
export const donationTiersQuery = `
  *[_type == "donationTier"] | order(order asc) {
    _id,
    name,
    icon,
    monthlyAmount,
    annualAmount,
    description,
    benefits,
    stripePriceId,
    featured
  }
`;
```

---

**Next Steps:**
1. Set up Sanity project
2. Deploy schemas
3. Populate sample content
4. Integrate with Next.js frontend
5. Test all queries and relationships
