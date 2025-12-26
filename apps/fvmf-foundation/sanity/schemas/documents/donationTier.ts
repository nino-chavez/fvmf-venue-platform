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
