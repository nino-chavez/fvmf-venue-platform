# Phase 2: Manager Deliverable - Venue Aurora Redesign

**Project:** Venue Aurora Frontend Redesign
**Skill:** signal-frontend-designer v2.0 (Triad Workflow)
**Phase:** 2 - Manager (Prompt Engineering Mode)
**Date:** 2025-12-26
**Status:** ✅ COMPLETE

---

## Creative Brief

**Project:** Venue Aurora - Live Music Venue Website
**Aesthetic:** Creative Bold (Professional Variant)
**Target Audience:** Music lovers (30-65), blues/jazz enthusiasts, local community
**Conversion Goal:** Ticket sales + newsletter signups
**Technical Stack:** Next.js 16, React 19, GSAP, Tailwind CSS 4

---

## Design Token System

### Color Palette

#### Primary: Sunset Orange (Live Music Energy)
```css
--primary-50: #fff7ed;
--primary-100: #ffedd5;
--primary-200: #fed7aa;
--primary-300: #fdba74;
--primary-400: #fb923c;
--primary-500: #f97316;  /* Main brand */
--primary-600: #ea580c;
--primary-700: #c2410c;
--primary-800: #9a3412;
--primary-900: #7c2d12;
```

**Rationale:** Sunset orange evokes warmth, live performance energy, and stage lighting. Distinctive from generic purple AI aesthetics. High contrast against dark backgrounds.

#### Neutrals: Deep Slate (Sophisticated Dark)
```css
--neutral-50: #f8fafc;
--neutral-100: #f1f5f9;
--neutral-200: #e2e8f0;
--neutral-300: #cbd5e1;
--neutral-400: #94a3b8;
--neutral-500: #64748b;
--neutral-600: #475569;
--neutral-700: #334155;
--neutral-800: #1e293b;
--neutral-900: #0f172a;
--neutral-950: #020617;
```

#### Semantic Colors
```css
--semantic-success: #10b981;  /* Green-500 */
--semantic-error: #ef4444;    /* Red-500 */
--semantic-warning: #f59e0b;  /* Amber-500 */
--semantic-info: #3b82f6;     /* Blue-500 */
```

#### Genre Badge Colors (Accessibility Validated)
```css
--genre-jazz: #f59e0b;      /* Amber-500 */
--genre-blues: #6366f1;     /* Indigo-500 */
--genre-rock: #ef4444;      /* Red-500 */
--genre-tribute: #a855f7;   /* Purple-500 */
--genre-bigband: #10b981;   /* Emerald-500 */
--genre-other: #64748b;     /* Neutral-500 */
```

---

### Typography System

#### Font Families
```css
--font-display: 'Inter', system-ui, -apple-system, sans-serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

**Why Inter:**
- Excellent readability across all sizes
- Wide range of weights (100-900)
- Open-source, Google Fonts available
- Professional but not corporate
- Better than default system fonts

#### Type Scale (Fluid Responsive)
```css
/* Display (Hero Headlines) */
--text-display-sm: clamp(2.5rem, 5vw, 3rem);    /* 40px - 48px */
--text-display-md: clamp(3rem, 6vw, 4rem);      /* 48px - 64px */
--text-display-lg: clamp(4rem, 8vw, 6rem);      /* 64px - 96px */

/* Headings */
--text-h1: clamp(2rem, 4vw, 2.5rem);            /* 32px - 40px */
--text-h2: clamp(1.5rem, 3vw, 2rem);            /* 24px - 32px */
--text-h3: clamp(1.25rem, 2.5vw, 1.5rem);       /* 20px - 24px */
--text-h4: 1.125rem;                             /* 18px */

/* Body */
--text-body-lg: 1.125rem;                        /* 18px */
--text-body: 1rem;                               /* 16px */
--text-body-sm: 0.875rem;                        /* 14px */

/* UI */
--text-ui: 0.875rem;                             /* 14px */
--text-ui-sm: 0.75rem;                           /* 12px */

/* Font Weights */
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 900;
```

---

### Spacing System (8pt Grid)

```css
/* Base: 8px */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

#### Layout Spacing
```css
--section-spacing-mobile: var(--space-16);   /* 64px */
--section-spacing-tablet: var(--space-20);   /* 80px */
--section-spacing-desktop: var(--space-24);  /* 96px */
```

---

### Border Radius Scale

```css
--radius-none: 0;
--radius-sm: 0.25rem;     /* 4px */
--radius-md: 0.5rem;      /* 8px */
--radius-lg: 0.75rem;     /* 12px */
--radius-xl: 1rem;        /* 16px */
--radius-2xl: 1.5rem;     /* 24px */
--radius-full: 9999px;
```

**Component Mapping:**
- Buttons: `--radius-xl` (16px)
- Cards: `--radius-2xl` (24px)
- Badges: `--radius-full`
- Inputs: `--radius-xl` (16px)

---

### Shadow System

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

/* Glow Effects (Creative Bold) */
--glow-primary: 0 0 40px -10px hsl(25 95% 53% / 0.6);
--glow-genre-jazz: 0 0 30px -8px hsl(38 92% 50% / 0.5);
--glow-genre-blues: 0 0 30px -8px hsl(239 84% 67% / 0.5);
```

---

### Animation Tokens (GSAP Integration)

```javascript
// Duration (matching existing GSAP timing)
export const timing = {
  instant: 0.15,     // 150ms
  quarter: 0.25,     // 250ms (existing)
  half: 0.5,         // 500ms (existing)
  full: 1.0,         // 1000ms
  slow: 1.5,         // 1500ms
};

// Easing (matching existing GSAP easing)
export const easing = {
  crescendo: 'power2.out',   // Existing - accelerate into position
  legato: 'power1.out',      // Existing - smooth and gentle
  staccato: 'power3.inOut',  // Sharp and precise
  elastic: 'elastic.out',    // Bouncy (use sparingly)
};

// Scroll Trigger Defaults
export const scrollConfig = {
  start: 'top 90%',
  end: 'bottom 10%',
  toggleActions: 'play none none reverse',
};
```

---

## Component Design Specifications

### 1. Hero Component

**Visual Treatment:**
- **Height:** 90vh (min-600px, max-900px)
- **Parallax:** Image/video moves 30% on scroll
- **Overlay:** Gradient from black/40 → black/60 → black
- **Content Fade:** Opacity 1 → 0 as user scrolls 50vh
- **Scale Effect:** Media scaled 110% for parallax room

**Typography:**
```css
/* Title */
font-size: var(--text-display-lg);
font-weight: var(--font-black);
text-shadow: 0 4px 30px rgba(0,0,0,0.5);
letter-spacing: -0.02em;

/* Subtitle */
font-size: var(--text-body-lg);
font-weight: var(--font-regular);
color: white/80;
max-width: 2xl (42rem);
```

**CTAs:**
- Primary: `bg-primary-500` with hover glow effect
- Secondary: Glassmorphism (`bg-white/10 backdrop-blur-sm`)
- Both: 44px minimum height, hover lift (-2px translateY)

**Badge:**
- Glassmorphism with pulsing indicator
- `bg-white/10 backdrop-blur-sm border border-white/20`
- Animated pulse on status dot

---

### 2. Event Cards

**Layout:**
- Mobile: Full-width stacked
- Tablet: 2-column grid
- Desktop: 3-column grid (with asymmetric featured card)

**Card Structure:**
```
┌─────────────────────────┐
│ [Event Image]           │ <- aspect-ratio-16/9
│ [Genre Badge]           │ <- Absolute positioned
├─────────────────────────┤
│ Event Title (h3)        │
│ Date • Time             │
│ [Availability Badge]    │
│ [Get Tickets Button]    │
└─────────────────────────┘
```

**Interaction:**
- Card hover: Subtle lift + shadow increase
- Image: Parallax on scroll (stagger by index)
- Button: Glow on hover

**Colors:**
- Card bg: `neutral-900/90`
- Border: `neutral-800`
- Hover state: `neutral-800` background

---

### 3. Calendar Component

**Design:**
- Grid-based layout (`display: grid`)
- Current month highlighted
- Event dots on dates with shows
- Keyboard navigable (Arrow keys)

**Colors:**
- Selected date: `primary-500` background
- Event indicator: Small dot, `primary-500`
- Hover: `primary-500/20` background

**Accessibility:**
- `role="grid"`
- `aria-label="Event calendar for {month}"`
- Arrow key navigation
- Enter to select date

---

### 4. Forms (Newsletter, Ticket Purchase)

**Input Fields:**
```css
background: neutral-900;
border: 1px solid neutral-700;
border-radius: var(--radius-xl);
padding: 0.75rem 1rem;
min-height: 44px;

/* Focus State */
border-color: primary-500;
ring: 2px primary-500/20;
outline: none;
```

**Buttons:**
```css
/* Primary */
background: primary-500;
color: white;
font-weight: 600;
border-radius: var(--radius-xl);
padding: 0.75rem 1.5rem;
min-height: 44px;

/* Hover */
background: primary-400;
box-shadow: var(--glow-primary);
transform: translateY(-2px);
```

**Error States:**
```css
border-color: semantic-error;
color: semantic-error;
```

**Labels:**
```css
font-size: var(--text-ui);
font-weight: 500;
color: neutral-300;
margin-bottom: 0.5rem;
```

---

## Creative Freedom Guidelines for Artist (Phase 3)

### What You CAN Customize:

✅ **Visual Hierarchy:**
- Font weight variations within type scale
- Line-height adjustments for readability
- Letter-spacing for display text

✅ **Micro-Interactions:**
- Button hover states (within timing constraints)
- Card animations on scroll (GSAP stagger)
- Loading states and transitions

✅ **Layout Creativity:**
- Asymmetric grid layouts (featured events)
- Creative use of negative space
- Intentional grid-breaking (within responsive constraints)

✅ **GSAP Animations:**
- Custom scroll triggers
- Parallax effects intensity
- Stagger timing variations
- Entrance animations

✅ **Glassmorphism:**
- Backdrop blur intensity
- Overlay opacity variations
- Glow effects on interactive elements

---

### What You CANNOT Change:

❌ **Hard Constraints from Architect:**
- Semantic HTML structure
- WCAG 2.1 AA compliance
- Touch target minimums (44px)
- Keyboard navigation
- Mobile-first breakpoints (320px, 768px, 1024px)
- `prefers-reduced-motion` support

❌ **Color Palette:**
- Must use defined token system
- Cannot introduce new colors without Manager approval
- Genre badge colors fixed (accessibility validated)

❌ **Typography:**
- Cannot change Inter font family
- Must use defined type scale
- Cannot break 8pt spacing grid

---

## Constraint Contract

**Manager Commitments:**
1. ✅ Preserving all Architect structural decisions
2. ✅ Providing complete design token system
3. ✅ Enabling Artist's creativity within constraints
4. ✅ Validating accessibility compliance

**Artist Requirements (Phase 3):**
1. ✅ Implement using provided design tokens only
2. ✅ Respect semantic HTML structure from Architect
3. ✅ Meet all WCAG 2.1 AA requirements
4. ✅ Test at all specified breakpoints (320px, 768px, 1024px, 1440px)
5. ✅ Use GSAP for complex animations
6. ✅ Support `prefers-reduced-motion`
7. ✅ Maintain 8pt spacing grid
8. ✅ Touch targets ≥ 44px

---

## Master Prompt for Artist (Phase 3)

```
You are implementing the Venue Aurora redesign as the Artist in the Triad workflow.

HARD CONSTRAINTS (from Architect - CANNOT be changed):
- Use semantic HTML structure from phase1-architect-deliverable.md
- WCAG 2.1 AA compliance mandatory
- Touch targets ≥ 44px
- Keyboard navigation support
- Mobile-first: 320px, 768px, 1024px breakpoints
- Support prefers-reduced-motion

DESIGN SYSTEM (from Manager - USE THESE TOKENS):
- Colors: Primary (sunset orange), Neutrals (slate), Genre badges
- Typography: Inter font, fluid type scale
- Spacing: 8pt grid (space-0 through space-32)
- Borders: radius-xl for buttons, radius-2xl for cards
- Shadows: Use glow effects on interactive elements

CREATIVE FREEDOM (YOU decide):
- Visual hierarchy within type scale
- Micro-interactions and hover states
- GSAP animation intensity and timing
- Layout creativity (asymmetric grids)
- Glassmorphism intensity

TECH STACK:
- Next.js 16, React 19
- Tailwind CSS 4 (use design tokens)
- GSAP (existing animations)
- TypeScript strict mode

AESTHETIC:
- Creative Bold (Professional Variant)
- High-impact but accessible
- Live music energy
- NOT generic Ticketmaster aesthetics

DELIVERABLES:
- Updated Tailwind config with design tokens
- Refactored components using token system
- GSAP animations with prefers-reduced-motion
- Fully responsive (test at all breakpoints)
- Production-ready code

START with: Homepage Hero component redesign.
```

---

## Tailwind Configuration Template

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        semantic: {
          success: '#10b981',
          error: '#ef4444',
          warning: '#f59e0b',
          info: '#3b82f6',
        },
        genre: {
          jazz: '#f59e0b',
          blues: '#6366f1',
          rock: '#ef4444',
          tribute: '#a855f7',
          bigband: '#10b981',
          other: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-sm': 'clamp(2.5rem, 5vw, 3rem)',
        'display-md': 'clamp(3rem, 6vw, 4rem)',
        'display-lg': 'clamp(4rem, 8vw, 6rem)',
      },
      spacing: {
        /* 8pt grid already in Tailwind defaults */
      },
      borderRadius: {
        /* Already defined in Tailwind */
      },
      boxShadow: {
        'glow-primary': '0 0 40px -10px hsl(25 95% 53% / 0.6)',
        'glow-jazz': '0 0 30px -8px hsl(38 92% 50% / 0.5)',
        'glow-blues': '0 0 30px -8px hsl(239 84% 67% / 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Animation Configuration Template

```typescript
// src/lib/design-tokens.ts
export const timing = {
  instant: 0.15,
  quarter: 0.25,
  half: 0.5,
  full: 1.0,
  slow: 1.5,
} as const;

export const easing = {
  crescendo: 'power2.out',
  legato: 'power1.out',
  staccato: 'power3.inOut',
  elastic: 'elastic.out',
} as const;

export const scrollConfig = {
  start: 'top 90%',
  end: 'bottom 10%',
  toggleActions: 'play none none reverse',
} as const;
```

---

## Phase 2 Status: ✅ COMPLETE

**Deliverables:**
- ✅ Complete design token system
- ✅ Color palette (sunset orange primary)
- ✅ Typography system (Inter, fluid scale)
- ✅ Spacing system (8pt grid)
- ✅ Component specifications
- ✅ Animation tokens (GSAP)
- ✅ Creative freedom guidelines
- ✅ Constraint contract
- ✅ Master prompt for Artist
- ✅ Tailwind config template

**Next Phase:** Phase 3 (Artist mode) - Implementation with production-ready code.
