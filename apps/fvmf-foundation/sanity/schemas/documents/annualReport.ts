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
