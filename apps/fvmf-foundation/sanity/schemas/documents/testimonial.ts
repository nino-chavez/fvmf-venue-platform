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
