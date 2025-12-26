// GSAP Configuration for The Venue Aurora
// Registers plugins and provides animation utilities

'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins (only once)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Musical timing durations (in seconds for GSAP)
export const timing = {
  sixteenth: 0.075,  // 75ms - Micro interactions
  eighth: 0.15,      // 150ms - Button feedback
  quarter: 0.25,     // 250ms - Standard transitions
  half: 0.4,         // 400ms - Modal/drawer open
  whole: 0.6,        // 600ms - Page transitions
  measure: 1.0,      // 1000ms - Complex sequences
};

// Musical easings
export const easing = {
  staccato: 'power2.in',           // Quick, sharp
  legato: 'power2.out',            // Smooth deceleration
  crescendo: 'expo.out',           // Dramatic reveal
  sforzando: 'back.out(1.7)',      // Bouncy emphasis
  sustain: 'power1.inOut',         // Even flow
};

// Common animation presets
export const presets = {
  fadeUp: {
    y: 30,
    opacity: 0,
    duration: timing.quarter,
    ease: easing.crescendo,
  },
  fadeIn: {
    opacity: 0,
    duration: timing.quarter,
    ease: easing.legato,
  },
  scaleIn: {
    scale: 0.9,
    opacity: 0,
    duration: timing.quarter,
    ease: easing.sforzando,
  },
  slideLeft: {
    x: 50,
    opacity: 0,
    duration: timing.quarter,
    ease: easing.crescendo,
  },
  slideRight: {
    x: -50,
    opacity: 0,
    duration: timing.quarter,
    ease: easing.crescendo,
  },
};

// Stagger configurations
export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
  cascade: {
    each: 0.08,
    from: 'start',
  },
  center: {
    each: 0.1,
    from: 'center',
  },
  edges: {
    each: 0.1,
    from: 'edges',
  },
};

// ScrollTrigger defaults
export const scrollDefaults = {
  start: 'top 85%',
  end: 'bottom 15%',
  toggleActions: 'play none none reverse',
};

export { gsap, ScrollTrigger };
