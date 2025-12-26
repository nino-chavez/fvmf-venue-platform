import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'fvmf-foundation',
  title: 'FVMF Foundation',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'fvmf-foundation',

  basePath: '/studio',

  plugins: [
    structureTool({
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
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
