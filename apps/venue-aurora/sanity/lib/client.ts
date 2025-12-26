import { createClient } from 'next-sanity';

// Sanity credentials - hardcoded for production builds
// Environment variables will override these at runtime
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8hfq0d88';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

if (!projectId || typeof projectId !== 'string' || projectId.trim() === '') {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID must be set');
}

export const client = createClient({
  projectId: projectId.trim(),
  dataset: dataset.trim(),
  apiVersion: '2024-01-01',
  useCdn: true,
});

// Helper to check if Sanity is properly configured with actual project ID (not fallback)
export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.trim() !== ''
);
