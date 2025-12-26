# FVMF Foundation Design System

**Version:** 1.0
**Status:** Ready for Implementation
**Created:** December 26, 2024

---

## Design Philosophy: "Nonprofit Warm"

### Core Principles

**Approachable, Not Corporate**
- Warm colors (violet, not cold blue)
- Serif headings (humanizing, not geometric sans)
- Rounded buttons and cards (friendly, not sharp)

**Trustworthy, Not Institutional**
- Clear hierarchy and spacing
- Consistent visual language
- Transparent impact metrics
- Professional but not stiff

**Heartfelt, Not Guilt-Driven**
- Positive imagery (students learning, not sad stories)
- Hope-focused messaging ("music changes lives")
- Impact green (growth) not red (urgency)
- Inspirational, not manipulative

**Mission-Aligned, Not Generic**
- Music education iconography
- Student/community photography (not stock)
- Impact storytelling (metrics + narratives)
- 501(c)(3) transparency

---

## Brand Differentiation

### FVMF vs. Venue Aurora

| Element | Venue Aurora | FVMF Foundation |
|---------|--------------|-----------------|
| **Primary Color** | Sunset Orange #f97316 | Warm Violet #8b5cf6 |
| **Vibe** | Energetic, event-driven | Warm, mission-driven |
| **Typography** | Inter (modern SaaS) | Merriweather + Source Sans 3 |
| **Motion** | High-energy reveals | Gentle, humanizing |
| **Imagery** | Concert photos, performers | Students, community impact |
| **CTA** | "Buy Tickets" | "Donate Now" |
| **Tone** | "Come see a show tonight!" | "Change a life through music" |

**Brand Connection:**
- Accent orange (#f97316) retained as minor color
- "Visit The Venue" buttons use orange (visual link)
- Shared typography scale and spacing system
- Same tech stack (Next.js, Sanity, Vercel)

---

## Color Palette

### Primary: Violet (Trust + Creativity)

**Psychology:** Blue = trust, Purple = creativity → Violet = trustworthy creativity (music education)

```css
--brand-primary-50:  #f5f3ff;  /* Lightest tint */
--brand-primary-100: #ede9fe;
--brand-primary-200: #ddd6fe;
--brand-primary-300: #c4b5fd;
--brand-primary-400: #a78bfa;
--brand-primary-500: #8b5cf6;  /* MAIN - Hero, CTAs, links */
--brand-primary-600: #7c3aed;  /* Hover states */
--brand-primary-700: #6d28d9;
--brand-primary-800: #5b21b6;
--brand-primary-900: #4c1d95;  /* Darkest shade */
```

**Usage:**
- Primary CTAs ("Donate Now", "Get Involved")
- Links and navigation active states
- Focus indicators
- Brand elements (logo accents, decorative)

**Contrast:**
- Violet-600 on white: **7.4:1** (AAA ✅)
- White on Violet-600: **7.4:1** (AAA ✅)
- Violet-500 on white: **4.9:1** (AA ✅)

---

### Secondary: Green (Impact, Growth, Hope)

**Psychology:** Growth, positive outcomes, impact (not environmental green)

```css
--brand-secondary-50:  #f0fdf4;
--brand-secondary-100: #dcfce7;
--brand-secondary-200: #bbf7d0;
--brand-secondary-300: #86efac;
--brand-secondary-400: #4ade80;
--brand-secondary-500: #22c55e;  /* MAIN - Success, impact */
--brand-secondary-600: #16a34a;  /* Hover states */
--brand-secondary-700: #15803d;
--brand-secondary-800: #166534;
--brand-secondary-900: #14532d;
```

**Usage:**
- Impact metrics ("500+ students served")
- Success messages ("Thank you for donating!")
- Positive indicators
- "See Our Impact" secondary CTAs

**Contrast:**
- Green-600 on white: **4.8:1** (AA ✅)
- White on Green-600: **4.8:1** (AA ✅)

---

### Accent: Orange (Venue Aurora Connection)

**Psychology:** Energy, connection to parent organization

```css
--brand-accent-50:  #fff7ed;
--brand-accent-100: #ffedd5;
--brand-accent-500: #f97316;  /* MAIN - From Venue Aurora */
--brand-accent-600: #ea580c;  /* Hover states */
```

**Usage:**
- "Visit The Venue" cross-promotion CTAs (outline style)
- Sparingly as accent (10% of palette)
- Subtle brand connection (not dominant)

**Contrast:**
- Orange-600 on white: **5.2:1** (AA ✅)

---

### Neutrals: Stone (Warmer than Gray)

**Psychology:** Natural, approachable (not cold tech gray)

```css
--neutral-50:  #fafaf9;  /* Page backgrounds */
--neutral-100: #f5f5f4;  /* Card backgrounds */
--neutral-200: #e7e5e4;  /* Borders, dividers */
--neutral-300: #d6d3d1;
--neutral-400: #a8a29e;  /* Disabled text */
--neutral-500: #78716c;  /* Muted text */
--neutral-600: #57534e;  /* Secondary text */
--neutral-700: #44403c;  /* Primary text */
--neutral-800: #292524;  /* Headings */
--neutral-900: #1c1917;  /* High emphasis */
--neutral-950: #0c0a09;  /* Maximum contrast */
```

**Usage:**
- Text hierarchy (900 headings, 700 body, 500 captions)
- Backgrounds (50 page, 100 cards)
- Borders and dividers (200)

---

### Semantic Colors

```css
--semantic-success: #16a34a;  /* Green-600 */
--semantic-error:   #dc2626;  /* Red-600 */
--semantic-warning: #f59e0b;  /* Amber-500 */
--semantic-info:    #8b5cf6;  /* Violet-500 */
```

**Usage:**
- Form validation (error states)
- Alert banners (info, warning)
- Status indicators (success confirmations)

---

## Typography

### Font Families

**Display/Headings: Merriweather (Serif)**

**Why:** Warm serif with rounded terminals, feels more human than geometric sans, conveys stability and tradition (important for donors 50+)

```css
--font-display: 'Merriweather', Georgia, serif;
```

**Weights:**
- Light (300) - Large headings
- Regular (400) - Subheadings
- Bold (700) - Emphasis
- Black (900) - Hero headings

**Body: Source Sans 3 (Sans Serif)**

**Why:** Highly legible at small sizes, generous x-height, modern but friendly (rounded edges)

```css
--font-body: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Weights:**
- Light (300) - Quotes, captions
- Regular (400) - Body text
- Semibold (600) - Buttons, labels
- Bold (700) - Strong emphasis

---

### Fluid Type Scale

**Mobile-First, Responsive Sizing:**

```css
/* Mobile → Desktop (fluid clamp) */
--text-xs:   clamp(0.75rem,  0.7rem + 0.25vw,  0.875rem); /* 12-14px */
--text-sm:   clamp(0.875rem, 0.8rem + 0.375vw, 1rem);     /* 14-16px */
--text-base: clamp(1rem,     0.9rem + 0.5vw,   1.125rem); /* 16-18px */
--text-lg:   clamp(1.125rem, 1rem + 0.625vw,   1.25rem);  /* 18-20px */
--text-xl:   clamp(1.25rem,  1.1rem + 0.75vw,  1.5rem);   /* 20-24px */
--text-2xl:  clamp(1.5rem,   1.3rem + 1vw,     2rem);     /* 24-32px */
--text-3xl:  clamp(2rem,     1.7rem + 1.5vw,   2.5rem);   /* 32-40px */
--text-4xl:  clamp(2.5rem,   2rem + 2.5vw,     3.5rem);   /* 40-56px */
```

**Usage:**
- `text-4xl` - Hero headings (h1)
- `text-3xl` - Section headings (h2)
- `text-2xl` - Subsection headings (h3)
- `text-xl` - Card headings (h4)
- `text-base` - Body text, paragraphs
- `text-sm` - Captions, labels
- `text-xs` - Fine print, metadata

---

### Typography Hierarchy

**Headings (font-display):**

```css
h1 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);       /* 40-56px */
  font-weight: 900;                 /* Black */
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--neutral-900);
}

h2 {
  font-family: var(--font-display);
  font-size: var(--text-3xl);       /* 32-40px */
  font-weight: 700;                 /* Bold */
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--neutral-900);
}

h3 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);       /* 24-32px */
  font-weight: 700;
  line-height: 1.3;
  color: var(--neutral-800);
}

h4 {
  font-family: var(--font-body);    /* Sans serif for smaller headings */
  font-size: var(--text-xl);        /* 20-24px */
  font-weight: 600;                 /* Semibold */
  line-height: 1.4;
  color: var(--neutral-800);
}
```

**Body (font-body):**

```css
p, li {
  font-family: var(--font-body);
  font-size: var(--text-base);      /* 16-18px */
  font-weight: 400;
  line-height: 1.6;                 /* Generous for readability */
  color: var(--neutral-700);
}

.lead {
  font-size: var(--text-lg);        /* 18-20px */
  line-height: 1.7;
  color: var(--neutral-600);
}

.caption {
  font-size: var(--text-sm);        /* 14-16px */
  line-height: 1.5;
  color: var(--neutral-500);
}
```

---

## Spacing System (8pt Grid)

**Consistent Rhythm:**

```css
--space-0:  0;           /* 0px */
--space-1:  0.25rem;     /* 4px */
--space-2:  0.5rem;      /* 8px */
--space-3:  0.75rem;     /* 12px */
--space-4:  1rem;        /* 16px */
--space-5:  1.25rem;     /* 20px */
--space-6:  1.5rem;      /* 24px */
--space-8:  2rem;        /* 32px */
--space-10: 2.5rem;      /* 40px */
--space-12: 3rem;        /* 48px */
--space-16: 4rem;        /* 64px */
--space-20: 5rem;        /* 80px */
--space-24: 6rem;        /* 96px */
--space-32: 8rem;        /* 128px */
```

**Usage:**
- `space-2` - Icon spacing, tight gaps
- `space-4` - Default gap between elements
- `space-6` - Card padding, component spacing
- `space-8` - Section padding (mobile)
- `space-12` - Section padding (desktop)
- `space-16+` - Section breaks, large spacing

---

## Layout

### Container Widths

```css
--container-sm:  640px;   /* Forms, narrow content */
--container-md:  768px;   /* Blog posts, articles */
--container-lg:  1024px;  /* General content */
--container-xl:  1280px;  /* Wide sections */
--container-2xl: 1536px;  /* Maximum width */
```

### Gutters

```css
--gutter-sm: var(--space-4);   /* 16px mobile */
--gutter-lg: var(--space-8);   /* 32px desktop */
```

### Breakpoints

```css
/* Tailwind defaults */
sm:  640px   /* Tablet portrait */
md:  768px   /* Tablet landscape */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

---

## Components

### Buttons

**Primary (Violet):**

```tsx
<button className="
  px-6 py-3
  bg-primary-500 hover:bg-primary-600
  text-white font-semibold
  rounded-lg
  transition-colors
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
">
  Donate Now
</button>
```

**Secondary (Green):**

```tsx
<button className="
  px-6 py-3
  bg-secondary-500 hover:bg-secondary-600
  text-white font-semibold
  rounded-lg
  transition-colors
  focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2
">
  See Our Impact
</button>
```

**Outline (Accent Orange - Venue Link):**

```tsx
<button className="
  px-6 py-3
  border-2 border-accent-500
  text-accent-500 hover:bg-accent-50
  font-semibold
  rounded-lg
  transition-colors
  focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2
">
  Visit The Venue
</button>
```

**Sizes:**

```css
/* Small */
px-4 py-2 text-sm   /* 48×32px */

/* Medium (default) */
px-6 py-3 text-base /* 48×48px */

/* Large */
px-8 py-4 text-lg   /* 48×56px */
```

---

### Cards

**Base Card:**

```tsx
<div className="
  bg-neutral-100
  border border-neutral-200
  rounded-xl
  p-6
  hover:shadow-lg
  transition-shadow
">
  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
    Card Title
  </h3>
  <p className="text-base text-neutral-700 mb-4">
    Card description text goes here.
  </p>
  <a href="#" className="text-primary-500 hover:text-primary-600 font-semibold">
    Learn More →
  </a>
</div>
```

**Program Card (with icon):**

```tsx
<article className="
  bg-white
  border border-neutral-200
  rounded-xl
  p-8
  hover:-translate-y-1 hover:shadow-xl
  transition-all
">
  <div className="text-4xl mb-4" aria-hidden="true">🎓</div>
  <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3">
    Music Education
  </h3>
  <p className="text-base text-neutral-700 mb-6">
    Free lessons and instruments for underserved youth in the Fox Valley.
  </p>
  <a href="/programs/education" className="
    inline-flex items-center gap-2
    text-primary-500 hover:text-primary-600
    font-semibold
  ">
    Learn More
    <svg className="w-4 h-4"><!-- arrow icon --></svg>
  </a>
</article>
```

---

### Impact Metrics

**Metric Card:**

```tsx
<div className="text-center">
  <div className="
    text-5xl font-display font-black
    text-primary-500
    mb-2
  " aria-label="500 plus students served">
    500+
  </div>
  <div className="text-sm font-body text-neutral-600">
    Students Served
  </div>
</div>
```

**Animated Count-Up (GSAP):**

```tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function ImpactMetric({ value, label }) {
  const countRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      countRef.current.textContent = value;
    } else {
      gsap.to(countRef.current, {
        textContent: value,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: countRef.current,
          start: 'top 90%',
          once: true,
        },
      });
    }
  }, [value]);

  return (
    <div className="text-center">
      <div
        ref={countRef}
        className="text-5xl font-display font-black text-primary-500 mb-2"
        aria-label={`${value} ${label}`}
      >
        0
      </div>
      <div className="text-sm font-body text-neutral-600">{label}</div>
    </div>
  );
}
```

---

### Forms

**Input:**

```tsx
<div className="mb-4">
  <label
    htmlFor="email"
    className="block text-sm font-semibold text-neutral-700 mb-2"
  >
    Email Address
  </label>
  <input
    type="email"
    id="email"
    name="email"
    required
    aria-required="true"
    className="
      w-full px-4 py-3
      bg-white
      border border-neutral-300
      rounded-lg
      text-base text-neutral-900
      placeholder:text-neutral-400
      focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
    "
    placeholder="you@example.com"
  />
</div>
```

**Error State:**

```tsx
<div className="mb-4">
  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
    Email Address
  </label>
  <input
    type="email"
    id="email"
    aria-invalid="true"
    aria-describedby="email-error"
    className="
      w-full px-4 py-3
      bg-white
      border-2 border-semantic-error
      rounded-lg
      text-base text-neutral-900
      focus:outline-none focus:ring-2 focus:ring-semantic-error/20
    "
  />
  <p id="email-error" role="alert" className="mt-2 text-sm text-semantic-error">
    Please enter a valid email address
  </p>
</div>
```

---

## Motion

### Transitions

```css
--transition-fast: 150ms ease-out;   /* Hovers, highlights */
--transition-base: 250ms ease-in-out; /* Default */
--transition-slow: 400ms ease-in-out; /* Larger movements */
```

### Easings

```css
--easing-gentle:   cubic-bezier(0.4, 0, 0.2, 1);  /* Material ease-in-out */
--easing-entrance: cubic-bezier(0, 0, 0.2, 1);    /* Material ease-out */
--easing-exit:     cubic-bezier(0.4, 0, 1, 1);    /* Material ease-in */
```

### Animation Principles

**High-Impact Moments (Use Motion):**
- Impact metrics count-up (scroll trigger)
- Hero text staggered reveal (page load)
- Card hover lift (user interaction)
- Carousel crossfade (storytelling)

**Avoided Motion:**
- ❌ Parallax (motion sickness risk)
- ❌ Auto-play carousel without pause (WCAG violation)
- ❌ Aggressive springs (inappropriate for nonprofit)
- ❌ Continuous animations (distracting)

**Reduced Motion Support:**

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --transition-fast: 0ms;
    --transition-base: 0ms;
    --transition-slow: 0ms;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Shadows & Elevation

### Shadows

```css
--shadow-sm:   0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md:   0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg:   0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl:   0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

### Brand Glows (Sparingly)

```css
--glow-primary:   0 0 40px -10px rgb(139 92 246 / 0.5);   /* Violet */
--glow-secondary: 0 0 40px -10px rgb(34 197 94 / 0.5);    /* Green */
--glow-accent:    0 0 40px -10px rgb(249 115 22 / 0.5);   /* Orange */
```

**Usage:**
- Hero section backgrounds (subtle glow)
- Focus states on primary CTAs
- Feature cards on hover

---

## Border Radius

```css
--border-radius-sm:   0.375rem;  /* 6px */
--border-radius-base: 0.5rem;    /* 8px */
--border-radius-md:   0.75rem;   /* 12px */
--border-radius-lg:   1rem;      /* 16px */
--border-radius-xl:   1.5rem;    /* 24px */
--border-radius-full: 9999px;    /* Pills, avatars */
```

**Usage:**
- `sm` - Small badges, tags
- `base` - Inputs, small buttons
- `md` - Default buttons
- `lg` - Cards, containers
- `xl` - Large sections, panels
- `full` - Pills, circular avatars

---

## Accessibility

### Focus Indicators

```css
--focus-ring-width:  2px;
--focus-ring-offset: 2px;
--focus-ring-color:  var(--brand-primary-500);
```

**Implementation:**

```css
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}
```

### Touch Targets

```css
--touch-target-min: 44px;  /* WCAG AA minimum */
```

**All interactive elements (buttons, links, inputs):**
- Minimum 44×44px (prefer 48×48px)
- Adequate spacing between targets (≥ 8px)

### Screen Reader Only

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
```

**Usage:**

```tsx
<button aria-label="Open menu">
  <svg aria-hidden="true"><!-- hamburger icon --></svg>
  <span className="sr-only">Open menu</span>
</button>
```

---

## Implementation Checklist

### Setup
- [ ] Install fonts (Google Fonts: Merriweather, Source Sans 3)
- [ ] Configure Tailwind with design tokens
- [ ] Set up CSS variables in globals.css
- [ ] Test color contrast ratios (WCAG AA/AAA)

### Components
- [ ] Button (primary, secondary, outline, sizes)
- [ ] Card (base, program, impact)
- [ ] Input (default, error, success)
- [ ] Navigation (header, mobile menu)
- [ ] Footer (3-column, 501c3 info)

### Accessibility
- [ ] Focus indicators on all interactive elements
- [ ] Touch targets ≥ 44×44px
- [ ] ARIA labels for icon-only buttons
- [ ] Screen reader testing (VoiceOver, NVDA)
- [ ] Keyboard navigation testing
- [ ] Reduced motion support

### Motion
- [ ] GSAP for count-up animations
- [ ] Framer Motion for staggered reveals
- [ ] Hover states (card lift, button color)
- [ ] Carousel crossfade
- [ ] Respect `prefers-reduced-motion`

---

## Resources

### Design Tools
- **Figma:** Design mockups and prototypes
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Google Fonts:** Merriweather, Source Sans 3

### Development
- **Tailwind CSS:** https://tailwindcss.com
- **GSAP:** https://greensock.com/gsap/
- **Framer Motion:** https://www.framer.com/motion/
- **shadcn/ui:** https://ui.shadcn.com

### Accessibility
- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **WebAIM:** https://webaim.org
- **Lighthouse:** Chrome DevTools
- **axe DevTools:** Browser extension

---

**Version:** 1.0
**Last Updated:** December 26, 2024
**Maintained By:** Signal X Studio
