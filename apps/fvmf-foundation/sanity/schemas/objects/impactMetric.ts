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
