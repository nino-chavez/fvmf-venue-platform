/**
 * Design Tokens for Venue Aurora
 * Phase 2 (Manager) deliverable - DO NOT modify without Manager approval
 */

export const timing = {
  instant: 0.15,
  quarter: 0.25,
  half: 0.5,
  full: 1.0,
  slow: 1.5,
} as const;

export const easing = {
  crescendo: 'power2.out',   // Accelerate into position
  legato: 'power1.out',      // Smooth and gentle
  staccato: 'power3.inOut',  // Sharp and precise
  elastic: 'elastic.out',    // Bouncy (use sparingly)
} as const;

export const scrollConfig = {
  start: 'top 90%',
  end: 'bottom 10%',
  toggleActions: 'play none none reverse',
} as const;

/**
 * Genre color mapping for badges and accents
 */
export const genreColors = {
  jazz: {
    bg: 'bg-genre-jazz/20',
    text: 'text-genre-jazz',
    glow: 'shadow-glow-jazz',
  },
  blues: {
    bg: 'bg-genre-blues/20',
    text: 'text-genre-blues',
    glow: 'shadow-glow-blues',
  },
  rock: {
    bg: 'bg-genre-rock/20',
    text: 'text-genre-rock',
    glow: 'shadow-glow-rock',
  },
  tribute: {
    bg: 'bg-genre-tribute/20',
    text: 'text-genre-tribute',
    glow: 'shadow-glow-tribute',
  },
  bigband: {
    bg: 'bg-genre-bigband/20',
    text: 'text-genre-bigband',
    glow: 'shadow-glow-bigband',
  },
  other: {
    bg: 'bg-genre-other/20',
    text: 'text-genre-other',
    glow: '',
  },
} as const;

export type Genre = keyof typeof genreColors;
