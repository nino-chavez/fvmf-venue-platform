import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'The Venue Aurora',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .icon(() => '📝')
              .child(
                S.documentList()
                  .title('Blog Posts')
                  .filter('_type == "post" && contentType == "venue"')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),

            S.divider(),

            S.listItem()
              .title('Authors')
              .icon(() => '👤')
              .child(
                S.documentList()
                  .title('Authors')
                  .filter('_type == "author" && contentType == "venue"')
              ),

            S.listItem()
              .title('Categories')
              .icon(() => '🏷️')
              .child(
                S.documentList()
                  .title('Categories')
                  .filter('_type == "category" && contentType == "venue"')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
