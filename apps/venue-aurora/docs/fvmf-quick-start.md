# FVMF Quick Start Guide

**Last Updated:** 2025-12-26
**Status:** ✅ Ready for Week 1 Implementation

**Goal:** Get FVMF Foundation site running with "Vinyl Revival Meets Modern Activism" aesthetic

**Timeline:** 13 weeks to production launch
**Budget:** $0/month base cost + Stripe transaction fees (2.2%)

---

---

## 🎯 What You're Building

**Fox Valley Music Foundation Website**
A bold, distinctive nonprofit site with "Vinyl Revival Meets Modern Activism" aesthetic featuring:
- 🎵 Spinning vinyl records as interactive data visualizations
- 💿 Album cover program cards
- 📀 Gatefold LP testimonial sections
- 🎸 Zero monthly hosting costs ($0/month)

**Unforgettable Element:** Hover over impact metrics (e.g., "500+ students served") and vinyl records spin to reveal actual student photos on the record surface.

---

## 📚 Complete Documentation

Before starting, familiarize yourself with these files:

1. **`/docs/fvmf-vinyl-aesthetic-system.md`** - Design philosophy, colors, typography, motion
2. **`/docs/fvmf-component-library.md`** - Production components (Button, VinylMetric, Navigation, etc.)
3. **`/docs/fvmf-sanity-schemas.md`** - CMS schema definitions (program, testimonial, teamMember, etc.)
4. **`/docs/fvmf-implementation-guide.md`** - Full 13-week implementation roadmap

---

## Prerequisites

- Node.js 20+ installed (`node -v`)
- npm 10+ installed (`npm -v`)
- Existing `venue-aurora` project
- Sanity account (or will create during setup)

---

## Step 1: Create Turborepo Monorepo (30 minutes)

### 1.1 Initialize Turborepo

```bash
# Navigate to workspace root (NOT inside venue-aurora)
cd ~/Workspace/dev/wip

# Create new Turborepo monorepo
npx create-turbo@latest fvmf-venue-platform
# Choose: pnpm
# Choose: No remote caching

cd fvmf-venue-platform
```

### 1.2 Clean Up Template

```bash
# Remove template apps (we'll add our own)
rm -rf apps/web apps/docs
```

---

## Step 2: Migrate Venue Aurora (20 minutes)

### 2.1 Copy Existing Project

```bash
# Copy venue-aurora into apps/
cp -r ../venue-aurora ./apps/venue-aurora

# Verify structure
ls apps/venue-aurora
# Should see: src/, public/, package.json, next.config.js, etc.
```

### 2.2 Update Venue Aurora package.json

```bash
cd apps/venue-aurora
```

**Edit `apps/venue-aurora/package.json`:**

```json
{
  "name": "venue-aurora",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    // ... existing dependencies
  }
}
```

### 2.3 Test Venue Aurora

```bash
# From monorepo root
pnpm install

# Run venue-aurora
pnpm --filter venue-aurora dev

# Should open at http://localhost:3000
```

---

## Step 3: Create FVMF Foundation App (30 minutes)

### 3.1 Initialize Next.js App

```bash
# From monorepo root
cd apps

npx create-next-app@latest fvmf-foundation \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git
```

**Prompts:**
- TypeScript? Yes
- ESLint? Yes
- Tailwind CSS? Yes
- `src/` directory? Yes
- App Router? Yes
- Import alias? `@/*`

### 3.2 Install Dependencies

```bash
cd fvmf-foundation

pnpm add @sanity/client next-sanity framer-motion gsap
pnpm add -D @types/node
```

---

## Step 4: Configure Vinyl Aesthetic Design Tokens (45 minutes)

### 4.1 Create Tailwind Config with Vinyl Tokens

**Edit `apps/fvmf-foundation/tailwind.config.ts`:**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
          cream: '#fef3c7',
        },
        semantic: {
          success: '#059669',
          error: '#dc2626',
          warning: '#d97706',
          info: '#2563eb',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas-neue)', 'Impact', 'sans-serif'],
        body: ['var(--font-ibm-plex-sans)', 'Helvetica Neue', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'Courier New', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
}

export default config
```

### 4.2 Load Vinyl Fonts (Bebas Neue, IBM Plex Sans, IBM Plex Mono)

**Create `apps/fvmf-foundation/src/app/fonts.ts`:**

```typescript
import { Bebas_Neue, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

export const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})
```

**Update `apps/fvmf-foundation/src/app/layout.tsx`:**

```typescript
import type { Metadata } from 'next'
import { bebasNeue, ibmPlexSans, ibmPlexMono } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fox Valley Music Foundation | Empowering Students Through Music Education',
  description: 'Supporting music education in the Fox Valley. Instruments, instruction, and inspiration for students who need it most.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
```

### 4.3 Set Up Vinyl-Themed Global Styles

**Edit `apps/fvmf-foundation/src/app/globals.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Vinyl Color System */
  --vinyl-blue-deep: #003366;
  --vinyl-blue-bright: #0066cc;
  --vinyl-blue-electric: #00a8ff;
  --vinyl-gold-warm: #f59e0b;
  --vinyl-gold-bright: #fbbf24;
  --vinyl-orange: #f97316;
  --vinyl-orange-bright: #fb923c;
  --vinyl-black: #0a0a0a;
  --vinyl-cream: #fef3c7;

  /* Semantic Colors */
  --semantic-success: #059669;
  --semantic-error: #dc2626;
  --semantic-warning: #d97706;
  --semantic-info: #2563eb;

  /* Motion Tokens */
  --motion-spin: 2s linear infinite;
  --motion-reveal: 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  --motion-slide: 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  /* Accessibility */
  --touch-target-min: 48px;
  --focus-ring-width: 3px;
  --focus-ring-offset: 2px;
  --focus-ring-color: var(--vinyl-gold-bright);
}

@layer base {
  body {
    @apply bg-vinyl-black text-vinyl-cream;
    @apply selection:bg-vinyl-gold-bright selection:text-vinyl-blue-deep;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display tracking-wide;
  }

  /* Focus visible styles (keyboard navigation) */
  *:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}

@layer utilities {
  /* Vinyl-specific utilities */
  .vinyl-groove {
    background: radial-gradient(
      circle,
      transparent 30%,
      rgba(255, 255, 255, 0.05) 31%,
      transparent 32%,
      rgba(255, 255, 255, 0.05) 33%,
      transparent 34%
    );
    background-size: 8px 8px;
  }

  .vinyl-spin {
    animation: spin var(--motion-spin);
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Screen reader only */
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
}
```

---

## Step 5: Create First Vinyl Component (30 minutes)

### 5.1 Create Vinyl Button Component

```bash
mkdir -p apps/fvmf-foundation/src/components/ui
```

**Create `apps/fvmf-foundation/src/lib/utils.ts` (utility first):**

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Install dependencies:**

```bash
cd apps/fvmf-foundation
npm add clsx tailwind-merge
```

**Create `apps/fvmf-foundation/src/components/ui/Button.tsx`:**

```tsx
import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'blue' | 'orange' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'gold',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center',
        'font-body font-semibold uppercase tracking-wider',
        'rounded-lg transition-all duration-300',
        'focus-visible:outline focus-visible:outline-3 focus-visible:outline-vinyl-gold-bright',
        'disabled:opacity-50 disabled:cursor-not-allowed',

        // Size variants
        size === 'sm' && 'px-4 py-2 text-sm min-h-[44px]',
        size === 'md' && 'px-6 py-3 text-base min-h-[48px]',
        size === 'lg' && 'px-8 py-4 text-lg min-h-[56px]',

        // Vinyl color variants
        variant === 'gold' && [
          'bg-vinyl-gold-bright text-vinyl-blue-deep',
          'hover:bg-vinyl-gold-warm hover:shadow-lg hover:shadow-vinyl-gold-bright/30',
          'active:scale-95',
        ],
        variant === 'blue' && [
          'bg-vinyl-blue-bright text-vinyl-cream',
          'hover:bg-vinyl-blue-electric hover:shadow-lg hover:shadow-vinyl-blue-bright/30',
          'active:scale-95',
        ],
        variant === 'orange' && [
          'bg-vinyl-orange text-vinyl-cream',
          'hover:bg-vinyl-orange-bright hover:shadow-lg hover:shadow-vinyl-orange/30',
          'active:scale-95',
        ],
        variant === 'outline' && [
          'border-2 border-vinyl-gold-bright text-vinyl-gold-bright',
          'hover:bg-vinyl-gold-bright hover:text-vinyl-blue-deep',
          'active:scale-95',
        ],

        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
```

### 5.2 Test Vinyl Homepage

**Edit `apps/fvmf-foundation/src/app/page.tsx`:**

```tsx
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-vinyl-black">
      <h1 className="text-6xl font-display mb-4 text-vinyl-gold-bright text-center">
        Fox Valley Music Foundation
      </h1>
      <p className="text-xl text-center max-w-2xl text-vinyl-cream/90 font-body">
        Where music transforms lives. Supporting music education in the Fox Valley
        through instruments, instruction, and inspiration.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <Button variant="gold" size="lg">
          Support Music Education
        </Button>
        <Button variant="blue" size="lg">
          See Our Impact
        </Button>
        <Button variant="outline" size="lg">
          Visit Venue Aurora
        </Button>
      </div>
    </main>
  )
}
```

### 5.3 Run Development Server

```bash
# From project root (if in monorepo)
npm --filter fvmf-foundation dev

# OR if standalone
cd apps/fvmf-foundation
npm run dev

# Opens at http://localhost:3000
```

**Expected Result:**
- ✅ Black background (`bg-vinyl-black`)
- ✅ Gold heading with **Bebas Neue** font (bold, impact style)
- ✅ Cream body text with **IBM Plex Sans** font
- ✅ Gold "Support Music Education" button with hover glow
- ✅ Blue "See Our Impact" button
- ✅ Gold outline "Visit Venue Aurora" button
- ✅ All buttons have 48px minimum touch targets
- ✅ Keyboard navigation with gold focus rings
- ✅ No console errors

---

## Step 6: Set Up Sanity (45 minutes)

### 6.1 Create Sanity Dataset

```bash
# From monorepo root
cd apps/fvmf-foundation

# Login to Sanity (if not already)
npx sanity login

# Create new dataset
npx sanity dataset create fvmf-foundation

# Choose: Public (for now, can change later)
```

### 6.2 Configure Sanity Client

**Create `apps/fvmf-foundation/src/lib/sanity.ts`:**

```typescript
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});
```

### 6.3 Add Environment Variables

**Create `apps/fvmf-foundation/.env.local`:**

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=fvmf-foundation

# Analytics (later)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Stripe (later)
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
# STRIPE_SECRET_KEY=sk_test_xxx
```

**Get your project ID:**

```bash
npx sanity debug --secrets
# Copy the "Project ID" value
```

---

## Step 7: Configure Turborepo (15 minutes)

### 7.1 Update Root package.json

**Edit `package.json` at monorepo root:**

```json
{
  "name": "fvmf-venue-platform",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "dev:venue": "turbo run dev --filter=venue-aurora",
    "dev:foundation": "turbo run dev --filter=fvmf-foundation"
  },
  "devDependencies": {
    "turbo": "latest"
  },
  "packageManager": "pnpm@8.0.0"
}
```

### 7.2 Update turbo.json

**Edit `turbo.json`:**

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {}
  }
}
```

### 7.3 Test Both Sites

```bash
# Run both sites simultaneously
pnpm dev

# Or run individually
pnpm dev:venue       # Venue Aurora on :3000
pnpm dev:foundation  # FVMF on :3001
```

---

## ✅ Week 1 Completion Checklist

**Setup:**
- [ ] Turborepo monorepo structure created (or standalone Next.js app)
- [ ] `apps/fvmf-foundation/` initialized with Next.js 15
- [ ] Dependencies installed: `framer-motion`, `gsap`, `next-sanity`, `clsx`, `tailwind-merge`

**Design System:**
- [ ] Tailwind configured with vinyl color tokens (blue, gold, orange, black, cream)
- [ ] Google Fonts loaded: Bebas Neue (display), IBM Plex Sans (body), IBM Plex Mono (metrics)
- [ ] Global CSS with vinyl variables applied (`:root` with `--vinyl-*` tokens)
- [ ] Vinyl groove and spin utilities created

**Components:**
- [ ] Button component implemented with gold/blue/orange/outline variants
- [ ] Utils (`cn()` function) created
- [ ] Test homepage showing vinyl aesthetic

**Sanity:**
- [ ] Sanity dataset `fvmf-foundation` created
- [ ] Environment variables configured (`.env.local`)
- [ ] Sanity client configured in `src/lib/sanity.ts`

**Verification:**
- [ ] Dev server running without errors (`npm run dev`)
- [ ] Black background with cream text renders correctly
- [ ] Bebas Neue headings display (not system fonts)
- [ ] IBM Plex Sans body text displays
- [ ] Vinyl buttons render with hover effects
- [ ] Keyboard navigation works (Tab key shows gold focus rings)
- [ ] No TypeScript errors in terminal

---

## 🚨 Common Gotchas

### 1. Font Not Loading
**Problem:** Fonts show as system defaults (Impact, Arial, Courier)
**Fix:**
- Ensure `fonts.ts` exists and exports fonts correctly
- Verify `layout.tsx` has `className` with all three font variables on `<html>` tag
- Clear `.next` cache: `rm -rf .next && npm run dev`

### 2. Tailwind Colors Not Working
**Problem:** `text-vinyl-gold-bright` not applying (shows white text)
**Fix:**
- Verify `tailwind.config.ts` includes vinyl color extensions in `theme.extend.colors`
- Check `globals.css` has CSS variables defined in `:root`
- Restart dev server (Tailwind config changes require restart)

### 3. Sanity Connection Fails
**Problem:** "Invalid project ID" error
**Fix:**
- Check `.env.local` has correct `NEXT_PUBLIC_SANITY_PROJECT_ID` (no quotes, no spaces)
- Get project ID: `npx sanity debug --secrets`
- Verify dataset exists: `npx sanity dataset list`

### 4. Motion Not Animating
**Problem:** Framer Motion components not animating
**Fix:**
- Check browser has `prefers-reduced-motion` disabled (System Preferences)
- Ensure `framer-motion` is installed: `npm list framer-motion`
- Add `'use client'` directive to components using Framer Motion

### 5. TypeScript Errors on Button Props
**Problem:** `variant` prop shows "Type 'string' is not assignable to type..."
**Fix:**
- Ensure `cn()` utility exists at `/src/lib/utils.ts`
- Install missing dependencies: `npm add clsx tailwind-merge`
- Check Button interface matches component implementation

---

## 🎯 Next Steps (Week 2-3)

After completing Week 1, continue with:

### **Week 2: Build Navigation & VinylMetric Component**

1. **Navigation Component** (from `/docs/fvmf-component-library.md`)
   - Sticky header with logo
   - Desktop nav links
   - Mobile hamburger menu
   - Donate CTA button

2. **VinylMetric Component** (🎵 The Unforgettable Element)
   - Spinning vinyl record on hover
   - Student photos revealed on record surface
   - Animated metric counter
   - ARIA labels for screen readers

3. **Footer Component**
   - 501(c)(3) information
   - Social links
   - Quick links
   - Newsletter signup

### **Week 3-4: Deploy Sanity Schemas & Build Pages**

1. **Deploy Schemas** (from `/docs/fvmf-sanity-schemas.md`)
   ```bash
   # Copy schema files from docs
   # Then deploy
   npx sanity schema deploy
   ```

2. **Homepage**
   - Hero with mission statement
   - 3x VinylMetric components (students served, instruments donated, volunteer hours)
   - Album grid of programs
   - Gatefold testimonials

3. **Program Pages**
   - Dynamic routes: `/programs/[slug]`
   - Album cover hero
   - Program details
   - Enrollment CTA

### **Week 5+: Stripe Integration & Launch**

See `/docs/fvmf-implementation-guide.md` for complete 13-week roadmap.

---

## 🎵 What Makes This Unforgettable?

**Traditional nonprofit sites show:**
- Static numbers: "500+ students served"
- Generic photos in grids
- Predictable layouts

**FVMF shows:**
- **Interactive vinyl records** that spin on hover
- **Student photos revealed** on the spinning record surface (like liner notes)
- **Gatefold LP sections** that open to show testimonials
- **Album cover program cards** styled like Blue Note Records

**Why it works:**
- Connects to music heritage (vinyl = timeless quality)
- Makes data tangible (spin the record = see the impact)
- Creates delight (unexpected interaction)
- Tells stories (students are the music)

---

## Quick Commands Reference

```bash
# Install all dependencies
pnpm install

# Run both sites
pnpm dev

# Run venue-aurora only
pnpm dev:venue

# Run fvmf-foundation only
pnpm dev:foundation

# Build both sites
pnpm build

# Lint both sites
pnpm lint

# Add dependency to specific app
pnpm --filter fvmf-foundation add package-name
pnpm --filter venue-aurora add package-name

# Create Sanity dataset
npx sanity dataset create dataset-name

# Deploy to Vercel (from app directory)
cd apps/fvmf-foundation
vercel
```

---

## 📞 Resources

### **Documentation**
- **Vinyl Aesthetic System:** `/docs/fvmf-vinyl-aesthetic-system.md`
- **Component Library:** `/docs/fvmf-component-library.md`
- **Sanity Schemas:** `/docs/fvmf-sanity-schemas.md`
- **Full Implementation Guide:** `/docs/fvmf-implementation-guide.md`

### **External Resources**
- **Next.js 15 Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **Framer Motion Docs:** https://www.framer.com/motion
- **GSAP Docs:** https://gsap.com/docs

### **Design Inspiration**
- **Blue Note Records:** Classic jazz album covers (1950s-60s)
- **Motown Aesthetic:** Bold typography, gold accents
- **Capitol Records:** Orange and cream color combinations

---

**Estimated Setup Time:** 3-4 hours (first time)
**Next Milestone:** VinylMetric component (Week 2)
**Timeline:** 13 weeks to production launch
**Budget:** $0/month + Stripe transaction fees (2.2%)

🎵 **Let's build something unforgettable.**
