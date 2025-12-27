# Sanity CMS Setup - Consolidated Single Dataset Architecture

**Last Updated:** December 27, 2025
**Architecture:** Single Dataset with Content Type Isolation

---

## Overview

This monorepo uses **one Sanity dataset** (`production`) shared between both apps, with content isolated using a `contentType` discriminator field. This follows Sanity's recommended best practices for multi-tenant setups.

## Architecture

```
Project: Signal x Studio (8hfq0d88)
└── Dataset: production
    ├── Foundation Content (contentType = "foundation")
    │   ├── post (News & Updates)
    │   └── page (Standalone Pages)
    └── Venue Content (contentType = "venue")
        ├── post (Blog Posts)
        ├── author (Authors)
        └── category (Categories)
```

## Why This Approach?

Based on [Sanity's official documentation](https://www.sanity.io/docs/developer-guides/multi-tenancy-implementation):

> **Datasets are for environments** (dev/staging/prod), **not for separating content types**

**Benefits:**
- ✅ Single Sanity subscription (cost-effective)
- ✅ Proper dataset usage (environments, not content separation)
- ✅ Complete content isolation between Foundation and Venue
- ✅ Shared project with separate workspace views
- ✅ Future-proof for potential cross-references

**Alternative Rejected:**
- ❌ Separate datasets per app (misuse of datasets)
- ❌ Higher costs (multiple datasets count toward limits)
- ❌ Cannot cross-reference content between apps

---

## Content Type Discriminator

Every document has a `contentType` field:

```typescript
defineField({
  name: 'contentType',
  title: 'Content Type',
  type: 'string',
  readOnly: true,
  hidden: true,
  initialValue: 'foundation', // or 'venue'
  validation: (Rule) => Rule.required(),
})
```

**Behavior:**
- Automatically set when creating new documents
- Hidden from content editors (no confusion)
- Read-only (prevents accidental changes)
- Used for filtering in studio and frontend

---

## Studio Workspaces

Each app has its own Sanity Studio with workspace-specific filtering:

### FVMF Foundation Studio
- **URL:** `http://localhost:3001/studio` (local) or `/studio` (production)
- **Filters:** `contentType == "foundation"`
- **Document Types:**
  - News & Updates (`post`)
  - Standalone Pages (`page`)

### Venue Aurora Studio
- **URL:** `http://localhost:3000/studio` (local) or `/studio` (production)
- **Filters:** `contentType == "venue"`
- **Document Types:**
  - Blog Posts (`post`)
  - Authors (`author`)
  - Categories (`category`)

**Studio Configuration Example (fvmf-foundation):**

```typescript
structureTool({
  structure: (S) =>
    S.list()
      .items([
        S.listItem()
          .title('News & Updates')
          .child(
            S.documentList()
              .filter('_type == "post" && contentType == "foundation"')
          ),
      ]),
})
```

---

## Frontend Queries

All GROQ queries filter by `contentType`:

**Foundation News Query:**
```typescript
const query = `
  *[_type == "post" && contentType == "foundation"]
  | order(publishedAt desc) {
    _id, title, slug, excerpt, featuredImage, category, publishedAt
  }
`
```

**Venue Blog Query:**
```typescript
const query = `
  *[_type == "post" && contentType == "venue"]
  | order(publishedAt desc) {
    _id, title, slug, excerpt, mainImage, author, categories, publishedAt
  }
`
```

---

## Environment Variables

### FVMF Foundation (`.env.local`)
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=8hfq0d88
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-12-26
```

### Venue Aurora (`.env.local`)
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=8hfq0d88
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-12-26
SANITY_API_TOKEN=skIBfGWUTzyq6GaDnYRGF5LYD6KHjK4Sw6SyszibKrAGx5RpFkfVHMBFfFIO7vUGdItAJdfB9LCt5ENGDZ7hyKKz7rMTCe5rlla4XwIxmtfrkc4u8YZRILPhfGauNHWlBU8Y3nk6UmbfSiYILtyBiwGCcvyfyhUG4IeLvCVOgUjYeFd9jsB1
```

---

## Migration History

### December 27, 2025 - Separated Card and Hero Images

**Schema Update:**
- Split single `featuredImage` field into two separate fields:
  - `cardImage` (required) - Used in news listing cards (600×400px, 3:2 ratio)
  - `heroImage` (optional) - Used in post detail hero section (1920×1080px, 16:9 ratio)

**Benefits:**
- Content creators can optimize each image for its specific use case
- Card images can be cropped differently than hero images
- Better control over visual presentation in different contexts
- Clearer guidance in Sanity Studio about image purposes

**Frontend Updates:**
- Updated `src/app/news-updates/page.tsx` to use `cardImage`
- Updated `src/app/news-updates/[slug]/page.tsx` to use `heroImage`
- Updated IMAGE_GUIDELINES.md with separate sections for each image type

### December 27, 2025 - Consolidated to Single Dataset

**Before:**
- `fvmf-foundation` dataset (empty)
- `production` dataset (5 venue blog posts + supporting docs)

**Migration Steps:**
1. Added `contentType` field to all schemas
2. Tagged existing venue documents with `contentType = "venue"` (11 docs)
3. Updated studio desk structure to filter by `contentType`
4. Updated Foundation app to use `production` dataset
5. Updated all frontend queries to filter by `contentType`
6. Deployed schemas to production dataset

**Migration Script:** `apps/venue-aurora/scripts/migrate-content-types.js`

---

## Schema Deployment

Deploy schemas whenever you modify document types:

```bash
# From either app directory
cd apps/fvmf-foundation
npx sanity@latest schema deploy

# Or
cd apps/venue-aurora
npx sanity@latest schema deploy
```

**Important:** Both apps deploy to the same `production` dataset, so schemas must be compatible and non-conflicting.

---

## Adding New Content Types

When adding a new document type to either app:

1. **Add `contentType` discriminator field:**
   ```typescript
   defineField({
     name: 'contentType',
     type: 'string',
     readOnly: true,
     hidden: true,
     initialValue: 'foundation', // or 'venue'
     validation: (Rule) => Rule.required(),
   })
   ```

2. **Update studio desk structure filter:**
   ```typescript
   S.documentList()
     .filter('_type == "yourType" && contentType == "foundation"')
   ```

3. **Update frontend queries:**
   ```typescript
   const query = `*[_type == "yourType" && contentType == "foundation"]{ ... }`
   ```

4. **Deploy schema:**
   ```bash
   npx sanity@latest schema deploy
   ```

---

## Troubleshooting

### Studio shows content from both apps
- ✅ Check `sanity.config.ts` desk structure filters include `contentType` check
- ✅ Verify `contentType` field exists in schema
- ✅ Redeploy schemas: `npx sanity@latest schema deploy`

### Frontend showing wrong content
- ✅ Check GROQ queries include `&& contentType == "foundation"` (or `"venue"`)
- ✅ Verify `.env.local` has `NEXT_PUBLIC_SANITY_DATASET=production`
- ✅ Restart dev server after env changes

### New documents missing `contentType`
- ✅ Verify `initialValue: 'foundation'` (or `'venue'`) in schema
- ✅ Redeploy schema
- ✅ Manually patch existing docs using migration script pattern

---

## Future Enhancements

### Development Dataset (Optional)
To add a dev environment:

```bash
# Create dev dataset
cd apps/fvmf-foundation
npx sanity dataset create development --visibility private

# Update .env.local for local dev
NEXT_PUBLIC_SANITY_DATASET=development

# Deploy schemas to dev
npx sanity@latest schema deploy
```

### Cross-References (Future)
Since both apps share a dataset, you can create cross-dataset references:

```typescript
// Foundation page referencing a Venue author
defineField({
  name: 'venueAuthor',
  type: 'reference',
  to: [{ type: 'author' }],
  options: {
    filter: 'contentType == "venue"'
  }
})
```

---

## References

- [Sanity Multi-tenancy Guide](https://www.sanity.io/docs/developer-guides/multi-tenancy-implementation)
- [Platform Terminology](https://www.sanity.io/docs/platform-management/platform-terminology)
- [Datasets Documentation](https://www.sanity.io/docs/content-lake/datasets)
