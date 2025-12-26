/**
 * Fallback Image Utilities
 *
 * Provides placeholder images from Lorem Picsum and Unsplash
 * when Eventbrite events don't have images.
 */

import type { Genre } from '@/components/ui/EventCard';

// Hero image - a great concert stage shot
export const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&h=1080&fit=crop&auto=format&q=90';

// Alternative hero images for variety
export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&h=1080&fit=crop&auto=format&q=90', // Concert stage with lights
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop&auto=format&q=90', // Live performance
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&h=1080&fit=crop&auto=format&q=90', // Concert crowd
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&h=1080&fit=crop&auto=format&q=90', // Music venue
];

// Unsplash collection IDs and search terms for each genre
const GENRE_UNSPLASH_QUERIES: Record<Genre, string> = {
  jazz: 'jazz-music,saxophone,piano',
  blues: 'blues-music,guitar,concert',
  rock: 'rock-concert,electric-guitar,band',
  tribute: 'concert-stage,live-music,performance',
  bigband: 'orchestra,big-band,brass',
  acoustic: 'acoustic-guitar,singer-songwriter,unplugged',
  folk: 'folk-music,acoustic,indie',
  other: 'live-music,concert,stage',
};

// Curated Unsplash photo IDs for each genre (full photo IDs for images.unsplash.com)
// Format: These are the IDs after "photo-" in Unsplash URLs
const GENRE_UNSPLASH_IDS: Record<Genre, string[]> = {
  jazz: [
    '1511192336575-5a79af67a629', // Jazz club with warm lighting
    '1493225457124-a3eb161ffa5f', // Live jazz performance
    '1415201364774-f6f0bb35f28f', // Piano keys
    '1514320291840-2e0a9bf2a9ae', // Saxophone player
    '1516450360452-9312f5e86fc7', // Concert venue
  ],
  blues: [
    '1510915361894-db8b60106cb1', // Guitar player
    '1493225457124-a3eb161ffa5f', // Live performance
    '1470225620780-dba8ba36b745', // Concert lights
    '1459749411175-04bf5292ceea', // Stage lighting
    '1501612780327-45045538702b', // Electric guitar
  ],
  rock: [
    '1470225620780-dba8ba36b745', // Concert stage lights
    '1459749411175-04bf5292ceea', // Rock concert crowd
    '1493225457124-a3eb161ffa5f', // Live rock show
    '1516450360452-9312f5e86fc7', // Stage performance
    '1501612780327-45045538702b', // Rock guitar
  ],
  tribute: [
    '1470225620780-dba8ba36b745', // Concert stage
    '1459749411175-04bf5292ceea', // Live show crowd
    '1516450360452-9312f5e86fc7', // Performance venue
    '1493225457124-a3eb161ffa5f', // Band performance
    '1514320291840-2e0a9bf2a9ae', // Stage lights
  ],
  bigband: [
    '1511192336575-5a79af67a629', // Big band atmosphere
    '1514320291840-2e0a9bf2a9ae', // Brass section
    '1493225457124-a3eb161ffa5f', // Orchestra performance
    '1415201364774-f6f0bb35f28f', // Piano
    '1516450360452-9312f5e86fc7', // Concert hall
  ],
  acoustic: [
    '1510915361894-db8b60106cb1', // Acoustic guitar
    '1511192336575-5a79af67a629', // Intimate venue
    '1493225457124-a3eb161ffa5f', // Singer-songwriter
    '1415201364774-f6f0bb35f28f', // Piano performance
    '1514320291840-2e0a9bf2a9ae', // Unplugged show
  ],
  folk: [
    '1510915361894-db8b60106cb1', // Acoustic performance
    '1511192336575-5a79af67a629', // Folk venue
    '1493225457124-a3eb161ffa5f', // Live folk music
    '1415201364774-f6f0bb35f28f', // Intimate setting
    '1514320291840-2e0a9bf2a9ae', // Folk concert
  ],
  other: [
    '1470225620780-dba8ba36b745', // Concert stage
    '1459749411175-04bf5292ceea', // Live music
    '1493225457124-a3eb161ffa5f', // Performance
    '1516450360452-9312f5e86fc7', // Music venue
    '1511192336575-5a79af67a629', // Stage show
  ],
};

// Lorem Picsum specific image IDs that work for music/events
const PICSUM_IDS: Record<Genre, number[]> = {
  jazz: [1025, 1043, 1044, 1062, 1074],     // Dark, moody images
  blues: [1024, 1039, 1069, 1080, 1084],    // Atmospheric
  rock: [1020, 1037, 1059, 1067, 1073],     // Energetic, bold
  tribute: [1003, 1016, 1035, 1057, 1076],  // Stage-like
  bigband: [1001, 1011, 1033, 1052, 1078],  // Classic, elegant
  acoustic: [1015, 1018, 1036, 1047, 1083], // Natural, warm
  folk: [1004, 1012, 1019, 1050, 1082],     // Earthy tones
  other: [1005, 1010, 1021, 1041, 1066],    // General
};

/**
 * Get a fallback image URL from Unsplash for a given genre
 * Uses direct images.unsplash.com URLs for reliable delivery
 */
export function getUnsplashFallback(
  genre: Genre,
  width: number = 1200,
  height: number = 630,
  index: number = 0
): string {
  const ids = GENRE_UNSPLASH_IDS[genre] || GENRE_UNSPLASH_IDS.other;
  const photoId = ids[index % ids.length];
  // Use direct Unsplash image URL format
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=crop&auto=format&q=80`;
}

/**
 * Get a fallback image URL from Lorem Picsum for a given genre
 */
export function getPicsumFallback(
  genre: Genre,
  width: number = 1200,
  height: number = 630,
  index: number = 0
): string {
  const ids = PICSUM_IDS[genre] || PICSUM_IDS.other;
  const imageId = ids[index % ids.length];
  return `https://picsum.photos/id/${imageId}/${width}/${height}`;
}

/**
 * Get the best available image URL for an event
 * Priority: Eventbrite original > Eventbrite standard > Unsplash > Lorem Picsum
 */
export function getEventImageUrl(
  eventLogo: { original?: { url: string }; url?: string } | null | undefined,
  genre: Genre,
  index: number = 0,
  size: 'hero' | 'card' | 'thumbnail' = 'card'
): string {
  // If Eventbrite has an image, use it
  if (eventLogo?.original?.url) {
    return eventLogo.original.url;
  }
  if (eventLogo?.url) {
    return eventLogo.url;
  }

  // Determine dimensions based on size
  const dimensions = {
    hero: { width: 1920, height: 1080 },
    card: { width: 800, height: 450 },
    thumbnail: { width: 400, height: 225 },
  };

  const { width, height } = dimensions[size];

  // Try Unsplash first (better quality images)
  // Use a deterministic selection based on index for consistency
  try {
    return getUnsplashFallback(genre, width, height, index);
  } catch {
    // Fall back to Lorem Picsum if Unsplash fails
    return getPicsumFallback(genre, width, height, index);
  }
}

/**
 * Get a random gradient background as ultimate fallback
 */
export function getGradientFallback(genre: Genre): string {
  const gradients: Record<Genre, string> = {
    jazz: 'from-amber-900/80 via-orange-900/60 to-neutral-950',
    blues: 'from-indigo-900/80 via-blue-900/60 to-neutral-950',
    rock: 'from-red-900/80 via-rose-900/60 to-neutral-950',
    tribute: 'from-purple-900/80 via-violet-900/60 to-neutral-950',
    bigband: 'from-emerald-900/80 via-teal-900/60 to-neutral-950',
    acoustic: 'from-orange-900/80 via-amber-900/60 to-neutral-950',
    folk: 'from-green-900/80 via-lime-900/60 to-neutral-950',
    other: 'from-primary-900/80 via-primary-800/60 to-neutral-950',
  };
  return gradients[genre] || gradients.other;
}

/**
 * Simple hash function for deterministic image selection
 */
export function hashEventId(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    const char = id.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}
