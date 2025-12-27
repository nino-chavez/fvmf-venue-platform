import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'fvmf-foundation',
  title: 'FVMF Foundation',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Content Management Section
            S.listItem()
              .title('News & Updates')
              .icon(() => '📰')
              .child(
                S.documentList()
                  .title('News & Updates')
                  .filter('_type == "post" && contentType == "foundation"')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),

            S.listItem()
              .title('Pages')
              .icon(() => '📄')
              .child(
                S.documentList()
                  .title('Pages')
                  .filter('_type == "page" && contentType == "foundation"')
              ),

            S.divider(),

            // Programs Section
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

            // Organization Section
            S.listItem()
              .title('Team')
              .icon(() => '👥')
              .child(
                S.documentList()
                  .title('Team Members')
                  .filter('_type == "teamMember"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),

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
