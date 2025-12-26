# FVMF Design System: "Vinyl Revival Meets Modern Activism"

**Aesthetic Direction:** Golden age of vinyl records (1960s-70s) meets contemporary social impact design
**Unforgettable Element:** Spinning vinyl records as interactive data visualizations
**Tone:** Bold, soulful, transformative (not soft nonprofit vibes)

---

## Design Philosophy

**Core Concept:** Music education isn't just warm and friendly—it's **transformative, electric, and life-changing**. The design should feel like the moment a student first plays an instrument: surprising, emotional, **alive**.

**Visual References:**
- Blue Note Records album covers (Reid Miles, Francis Wolff)
- Saul Bass title sequences (bold geometry, kinetic typography)
- WPA Federal Art Project posters (social mission, bold colors)
- Herb Lubalin typography (tight letterspacing, expressive type)

**Unforgettable Interaction:**
Spinning vinyl records as data visualizations. Hover over "500+ students served" and a vinyl record spins to reveal actual student photos and stories on the record surface.

---

## Color System: "Vinyl Label Primaries"

Inspired by iconic record labels (Blue Note blue, Capitol orange, Motown yellow):

### CSS Variables

```css
:root {
  /* Primary: Blue Note Blue (trust + heritage) */
  --vinyl-blue-deep: #003366;
  --vinyl-blue-bright: #0066cc;
  --vinyl-blue-electric: #00a8ff;

  /* Secondary: Motown Gold (impact + warmth) */
  --vinyl-gold-warm: #f59e0b;
  --vinyl-gold-bright: #fbbf24;

  /* Accent: Capitol Orange (energy + venue link) */
  --vinyl-orange: #f97316;
  --vinyl-orange-bright: #fb923c;

  /* Neutrals: Vinyl Black + Cream */
  --vinyl-black: #0a0a0a;
  --vinyl-charcoal: #1a1a1a;
  --vinyl-gray: #737373;
  --vinyl-cream: #fef3c7;
  --vinyl-white: #fafaf9;

  /* Semantic */
  --vinyl-red: #dc2626;
  --vinyl-green: #16a34a;
}
```

### Tailwind Config Extension

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        vinyl: {
          blue: {
            deep: '#003366',
            bright: '#0066cc',
            electric: '#00a8ff',
          },
          gold: {
            warm: '#f59e0b',
            bright: '#fbbf24',
          },
          orange: {
            DEFAULT: '#f97316',
            bright: '#fb923c',
          },
          black: '#0a0a0a',
          charcoal: '#1a1a1a',
          gray: '#737373',
          cream: '#fef3c7',
          white: '#fafaf9',
        },
      },
    },
  },
};
```

### Usage Strategy

- **Blue** dominates (70%) - trust, heritage, education
- **Gold** accents impact moments (20%) - metrics, success stories
- **Orange** links to venue (10%) - cross-promotion CTAs only
- **Black & white photography** with color overlays (duotone effect)

---

## Typography System: "Kinetic Elegance"

### Font Stack

```css
/* Display: Bebas Neue - Geometric condensed poster font */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

/* Body: IBM Plex Sans - Modern grotesque with personality */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');

/* Accent: IBM Plex Mono - For metrics and data */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;700&display=swap');

:root {
  --font-display: 'Bebas Neue', Impact, sans-serif;
  --font-body: 'IBM Plex Sans', 'Helvetica Neue', sans-serif;
  --font-mono: 'IBM Plex Mono', 'Courier New', monospace;
}
```

### Type Scale

```css
:root {
  /* Fluid scaling */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1.125rem, 1vw + 1rem, 1.25rem);
  --text-lg: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --text-2xl: clamp(2rem, 1.7rem + 1.5vw, 3rem);
  --text-3xl: clamp(3rem, 2.5rem + 2.5vw, 5rem);
  --text-4xl: clamp(4rem, 3rem + 5vw, 10rem);
}
```

### Typography Components

```css
h1 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  line-height: 0.9;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--vinyl-blue-deep);
  transform: skewY(-2deg); /* Kinetic effect */
}

h2 {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  line-height: 0.95;
  text-transform: uppercase;
  color: var(--vinyl-blue-deep);
}

h3 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  line-height: 1;
  text-transform: uppercase;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--vinyl-charcoal);
}

.metric-value {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: clamp(5rem, 12vw, 12rem);
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--vinyl-gold-bright);
  text-shadow: 4px 4px 0 var(--vinyl-blue-deep);
}
```

---

## Motion System: "Record Spin Interactions"

### Animation Tokens

```css
:root {
  /* Timing */
  --duration-instant: 150ms;
  --duration-fast: 300ms;
  --duration-base: 500ms;
  --duration-slow: 800ms;
  --duration-slower: 1200ms;
  --duration-vinyl-spin: 2000ms;

  /* Easing */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-vinyl: cubic-bezier(0.43, 0.13, 0.23, 0.96);
}
```

### Core Animations

```css
@keyframes vinylSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes grooveShimmer {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

@keyframes toneArmSwing {
  from {
    transform: rotate(-60deg);
  }
  to {
    transform: rotate(-30deg);
  }
}

@keyframes gatefoldOpen {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
```

---

## Layout System: "Album Grid"

### Grid Templates

```css
/* Standard album grid (12-inch records) */
.album-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Bento grid (varied sizes) */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
}

.bento-large {
  grid-column: span 4;
  grid-row: span 2;
}

.bento-medium {
  grid-column: span 2;
}

.bento-wide {
  grid-column: span 6;
}
```

### Section Structure

```html
<!-- Scroll-snap for smooth transitions -->
<main class="scroll-snap-y">
  <section class="min-h-screen snap-start">
    <!-- Vinyl Hero -->
  </section>

  <section class="min-h-screen snap-start">
    <!-- Impact Metrics (spinning vinyls) -->
  </section>

  <section class="min-h-screen snap-start">
    <!-- Programs (album covers) -->
  </section>

  <section class="min-h-screen snap-start">
    <!-- Stories (gatefold LP) -->
  </section>

  <section class="min-h-screen snap-start">
    <!-- Donate (ticket stub) -->
  </section>
</main>
```

```css
.scroll-snap-y {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.snap-start {
  scroll-snap-align: start;
}
```

---

## Component Specifications

### 1. Vinyl Record SVG

```tsx
// components/VinylRecord.tsx
interface VinylRecordProps {
  size?: string;
  grooves?: number;
  labelColor?: string;
  spinning?: boolean;
}

export function VinylRecord({
  size = '100%',
  grooves = 12,
  labelColor = '#fbbf24',
  spinning = false,
}: VinylRecordProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      className={spinning ? 'animate-[vinylSpin_2s_linear_infinite]' : ''}
    >
      {/* Outer vinyl (black) */}
      <circle
        cx="250"
        cy="250"
        r="240"
        fill="var(--vinyl-black)"
      />

      {/* Grooves */}
      {[...Array(grooves)].map((_, i) => (
        <circle
          key={i}
          cx="250"
          cy="250"
          r={240 - (i * 15)}
          fill="none"
          stroke="var(--vinyl-charcoal)"
          strokeWidth="1"
          opacity="0.3"
        />
      ))}

      {/* Center label */}
      <circle
        cx="250"
        cy="250"
        r="80"
        fill={labelColor}
      />

      {/* Center hole */}
      <circle
        cx="250"
        cy="250"
        r="20"
        fill="var(--vinyl-black)"
      />
    </svg>
  );
}
```

### 2. Album Cover Card

```tsx
// components/AlbumCover.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AlbumCoverProps {
  title: string;
  subtitle: string;
  icon: string;
  color: 'blue' | 'gold' | 'orange';
  image: string;
  href?: string;
}

export function AlbumCover({
  title,
  subtitle,
  icon,
  color,
  image,
  href = '#',
}: AlbumCoverProps) {
  const colorMap = {
    blue: 'vinyl-blue-bright',
    gold: 'vinyl-gold-bright',
    orange: 'vinyl-orange',
  };

  return (
    <motion.a
      href={href}
      className="relative block group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Album Cover Container */}
      <div className="aspect-square rounded-lg overflow-hidden shadow-2xl relative">
        {/* Background Image (duotone) */}
        <div className="absolute inset-0 bg-vinyl-black">
          <Image
            src={image}
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            alt=""
          />
        </div>

        {/* Color Overlay */}
        <div
          className={`absolute inset-0 bg-${colorMap[color]} mix-blend-multiply opacity-70`}
        />

        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
          {/* Top: Icon + Title */}
          <div>
            <div className="text-6xl mb-4" aria-hidden="true">{icon}</div>
            <h3 className="font-display text-4xl mb-2 uppercase leading-none">
              {title}
            </h3>
            <p className="font-body text-sm uppercase tracking-widest opacity-80">
              {subtitle}
            </p>
          </div>

          {/* Bottom: Catalog Info */}
          <div className="flex justify-between items-end text-xs font-mono opacity-60">
            <span>FVMF-{Math.floor(Math.random() * 9000) + 1000}</span>
            <span>33⅓ RPM • STEREO</span>
          </div>
        </div>

        {/* Vinyl Peek on Hover */}
        <motion.div
          className="absolute inset-0 bg-vinyl-black rounded-full"
          initial={{ scale: 0, x: '100%' }}
          whileHover={{ scale: 1.1, x: '20%' }}
          transition={{ duration: 0.5 }}
        >
          {/* Grooves */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-vinyl-gray/20"
              style={{
                width: `${30 + i * 10}%`,
                height: `${30 + i * 10}%`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Drop Shadow */}
      <div className="absolute inset-0 bg-vinyl-black opacity-20 blur-xl -z-10 translate-y-2" />
    </motion.a>
  );
}
```

### 3. Spinning Vinyl Metric

```tsx
// components/VinylMetric.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Story {
  name: string;
  photo: string;
  quote: string;
}

interface VinylMetricProps {
  value: string;
  label: string;
  stories: Story[];
}

export function VinylMetric({ value, label, stories }: VinylMetricProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-80 h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="figure"
      aria-label={`${value} ${label}`}
    >
      {/* Vinyl Record */}
      <motion.div
        className="absolute inset-0 rounded-full bg-vinyl-black border-8 border-vinyl-gray shadow-2xl"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{
          duration: 2,
          ease: 'linear',
          repeat: isHovered ? Infinity : 0
        }}
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--vinyl-charcoal) 30%, var(--vinyl-black) 30%)`,
        }}
      >
        {/* Grooves */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-vinyl-gray/20 animate-[grooveShimmer_3s_ease-in-out_infinite]"
            style={{
              width: `${35 + i * 5}%`,
              height: `${35 + i * 5}%`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}

        {/* Center Label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-vinyl-gold-bright shadow-inner flex flex-col items-center justify-center">
            <div className="metric-value text-vinyl-black text-6xl font-mono font-bold">
              {value}
            </div>
            <div className="text-vinyl-black font-body font-bold text-sm uppercase tracking-wider">
              {label}
            </div>
          </div>
        </div>

        {/* Student Photos on Grooves (revealed on hover) */}
        {isHovered && stories.map((story, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 rounded-full overflow-hidden border-4 border-vinyl-cream shadow-lg"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * (360 / stories.length)}deg) translateY(-120px)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <Image
              src={story.photo}
              alt={story.name}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Tone Arm (decorative) */}
      <motion.div
        className="absolute top-0 right-0 w-2 h-40 bg-vinyl-cream shadow-lg origin-bottom-right"
        style={{
          transformOrigin: '100% 100%',
          borderRadius: '2px 2px 0 0',
        }}
        animate={{
          rotate: isHovered ? -30 : -60,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Stylus */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-vinyl-orange shadow-md" />
      </motion.div>

      {/* Story Tooltip (on hover) */}
      {isHovered && (
        <motion.div
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 bg-vinyl-blue-deep text-vinyl-cream p-4 rounded-lg shadow-xl max-w-xs text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm font-body italic">
            "{stories[0]?.quote}"
          </p>
          <p className="text-xs font-body mt-2 opacity-80">
            — {stories[0]?.name}
          </p>
        </motion.div>
      )}
    </div>
  );
}
```

### 4. Gatefold LP Stories

```tsx
// components/GatefoldStories.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  name: string;
  age: string;
  photo: string;
  instrument?: string;
}

interface GatefoldStoriesProps {
  testimonials: Testimonial[];
}

export function GatefoldStories({ testimonials }: GatefoldStoriesProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftTestimonial = testimonials[currentIndex];
  const rightTestimonial = testimonials[currentIndex + 1] || testimonials[0];

  return (
    <section className="min-h-screen bg-vinyl-cream py-24 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-center mb-12 font-display text-vinyl-blue-deep text-6xl uppercase">
          Lives Changed
        </h2>

        {/* Gatefold Container */}
        <div className="relative max-w-6xl mx-auto" style={{ perspective: '2000px' }}>
          {/* Closed State: Album Cover */}
          <AnimatePresence mode="wait">
            {!isOpen && (
              <motion.div
                key="closed"
                className="relative aspect-square bg-gradient-to-br from-vinyl-gold-bright to-vinyl-gold-warm rounded-lg shadow-2xl cursor-pointer overflow-hidden"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                  <h3 className="font-display text-8xl text-vinyl-blue-deep mb-6 text-center uppercase">
                    Student Stories
                  </h3>
                  <p className="font-body text-xl text-vinyl-blue-deep/80 uppercase tracking-wider">
                    Click to Open Gatefold
                  </p>
                  <div className="mt-8 text-6xl">🎵</div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-8 left-8 font-mono text-xs text-vinyl-blue-deep/60">
                  FVMF-STORIES-2024
                </div>
                <div className="absolute bottom-8 right-8 font-mono text-xs text-vinyl-blue-deep/60">
                  33⅓ RPM • STEREO
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Open State: Gatefold Interior */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex gap-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                style={{ transformOrigin: 'center' }}
              >
                {/* Left Panel */}
                <motion.div
                  className="flex-1 bg-vinyl-blue-deep p-12 rounded-l-lg shadow-2xl"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <TestimonialCard {...leftTestimonial} side="left" />
                </motion.div>

                {/* Right Panel */}
                <motion.div
                  className="flex-1 bg-vinyl-gold-warm p-12 rounded-r-lg shadow-2xl"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <TestimonialCard {...rightTestimonial} side="right" />
                </motion.div>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-vinyl-cream text-vinyl-black flex items-center justify-center font-display text-2xl hover:scale-110 transition-transform shadow-xl z-10"
                  aria-label="Close gatefold"
                >
                  ✕
                </button>

                {/* Navigation Arrows */}
                {testimonials.length > 2 && (
                  <>
                    <button
                      onClick={() => setCurrentIndex(Math.max(0, currentIndex - 2))}
                      disabled={currentIndex === 0}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-vinyl-cream text-vinyl-black flex items-center justify-center disabled:opacity-30 hover:scale-110 transition-transform"
                      aria-label="Previous stories"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setCurrentIndex(Math.min(testimonials.length - 2, currentIndex + 2))}
                      disabled={currentIndex >= testimonials.length - 2}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-vinyl-cream text-vinyl-black flex items-center justify-center disabled:opacity-30 hover:scale-110 transition-transform"
                      aria-label="Next stories"
                    >
                      ›
                    </button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  age,
  photo,
  instrument,
  side
}: Testimonial & { side: 'left' | 'right' }) {
  const textColor = side === 'left' ? 'text-vinyl-cream' : 'text-vinyl-blue-deep';

  return (
    <div className="h-full flex flex-col justify-between">
      {/* Photo */}
      <div className="relative aspect-square rounded-lg overflow-hidden mb-8 shadow-xl">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Quote */}
      <blockquote className={`font-body text-2xl italic mb-6 ${textColor}`}>
        "{quote}"
      </blockquote>

      {/* Attribution */}
      <div className={`font-body ${textColor}`}>
        <p className="font-bold text-xl">— {name}</p>
        <p className="text-sm opacity-80">
          Age {age}{instrument && ` • ${instrument}`}
        </p>
      </div>
    </div>
  );
}
```

### 5. Vinyl Hero Section

```tsx
// components/VinylHero.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { VinylRecord } from './VinylRecord';
import { Button } from './ui/Button';

export function VinylHero() {
  const vinylRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline();

    tl
      // Vinyl spins in
      .from(vinylRef.current, {
        rotation: -720,
        scale: 0.5,
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
      })
      // Label content appears
      .from(labelRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      }, '-=0.5')
      // Heading words stagger
      .from('.hero-word', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      }, '-=0.3');
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vinyl-blue-deep">
      {/* Vinyl Record Background */}
      <div
        ref={vinylRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div className="w-[120vw] h-[120vw]">
          <VinylRecord size="100%" grooves={16} labelColor="transparent" />
        </div>
      </div>

      {/* Grooves (decorative concentric circles) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-vinyl-cream"
            style={{
              width: `${20 + i * 8}%`,
              height: `${20 + i * 8}%`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Content (Record Label Area) */}
      <div
        ref={labelRef}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <h1 className="text-vinyl-cream mb-8">
          <span className="block hero-word">Music</span>
          <span className="block hero-word">Transforms</span>
          <span className="block hero-word">Lives</span>
        </h1>

        <p className="text-2xl text-vinyl-cream/90 font-body mb-4 max-w-2xl mx-auto">
          A 501(c)(3) nonprofit bringing the power of music education to underserved communities in the Fox Valley.
        </p>

        <p className="text-sm text-vinyl-cream/70 font-mono uppercase tracking-widest mb-12">
          FVMF • Est. 2009 • Aurora, Illinois
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="gold" size="lg">
            Donate Now
          </Button>
          <Button variant="outline" size="lg">
            See Our Impact
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-vinyl-cream/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
```

---

## Accessibility Compliance

### WCAG 2.1 AA Requirements

```css
/* Focus indicators */
*:focus-visible {
  outline: 3px solid var(--vinyl-gold-bright);
  outline-offset: 3px;
}

/* Skip to main content */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--vinyl-blue-deep);
  color: var(--vinyl-cream);
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --vinyl-blue-deep: #000066;
    --vinyl-gold-bright: #ffcc00;
  }
}
```

### Screen Reader Utilities

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

## Performance Optimizations

### Image Optimization

```tsx
// All images use Next.js Image component
<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={600}
  height={600}
  quality={85}
  loading="lazy"
  placeholder="blur"
/>
```

### Font Loading Strategy

```tsx
// app/layout.tsx
import { Bebas_Neue, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
```

### Animation Performance

```css
/* Use will-change sparingly */
.vinyl-spinning {
  will-change: transform;
  transform: translateZ(0); /* GPU acceleration */
}

/* Remove will-change after animation */
.vinyl-spinning:not(:hover) {
  will-change: auto;
}
```

---

**Next Steps:**
1. Implement full component library
2. Create page templates
3. Set up Sanity schemas
4. Build migration scripts
5. Deploy to Vercel
