# FVMF Component Library - Production Implementation

Complete React/TypeScript components for the Vinyl Revival aesthetic.

---

## Core UI Components

### Button Component

**File: `src/components/ui/Button.tsx`**

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'blue' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
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
        'focus:outline-none focus:ring-4 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'transform hover:-translate-y-1 active:translate-y-0',

        // Size variants
        size === 'sm' && 'px-6 py-2 text-sm',
        size === 'md' && 'px-8 py-3 text-base',
        size === 'lg' && 'px-12 py-4 text-lg',

        // Variant styles
        variant === 'gold' && [
          'bg-vinyl-gold-bright text-vinyl-blue-deep',
          'hover:bg-vinyl-gold-warm hover:shadow-lg hover:shadow-vinyl-gold-bright/50',
          'focus:ring-vinyl-gold-bright',
        ],
        variant === 'blue' && [
          'bg-vinyl-blue-bright text-vinyl-cream',
          'hover:bg-vinyl-blue-electric hover:shadow-lg hover:shadow-vinyl-blue-bright/50',
          'focus:ring-vinyl-blue-bright',
        ],
        variant === 'outline' && [
          'border-3 border-vinyl-cream text-vinyl-cream bg-transparent',
          'hover:bg-vinyl-cream hover:text-vinyl-blue-deep',
          'focus:ring-vinyl-cream',
        ],
        variant === 'ghost' && [
          'text-vinyl-charcoal hover:text-vinyl-blue-deep',
          'hover:bg-vinyl-cream/50',
        ],

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

---

### Navigation Component

**File: `src/components/Navigation.tsx`**

```tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/impact', label: 'Impact' },
    { href: '/stories', label: 'Stories' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-vinyl-blue-deep/95 backdrop-blur-lg shadow-xl py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            {/* Vinyl icon */}
            <div className="w-12 h-12 rounded-full bg-vinyl-gold-bright flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
              <div className="w-3 h-3 rounded-full bg-vinyl-blue-deep" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl text-vinyl-cream uppercase leading-none">
                FVMF
              </span>
              <span className="font-body text-xs text-vinyl-cream/70 uppercase tracking-wider">
                Since 2009
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-vinyl-cream hover:text-vinyl-gold-bright transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vinyl-gold-bright group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gold" size="sm">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={cn(
                'w-6 h-0.5 bg-vinyl-cream transition-all duration-300',
                isMobileMenuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-vinyl-cream transition-all duration-300',
                isMobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-vinyl-cream transition-all duration-300',
                isMobileMenuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-20 bg-vinyl-blue-deep"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-4xl text-vinyl-cream hover:text-vinyl-gold-bright transition-colors block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8"
              >
                <Button variant="gold" size="lg" className="w-full">
                  Donate Now
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

---

### Footer Component

**File: `src/components/Footer.tsx`**

```tsx
import Link from 'next/link';
import { VinylRecord } from './VinylRecord';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { href: '/about/mission', label: 'Mission' },
      { href: '/about/board', label: 'Board of Directors' },
      { href: '/about/financials', label: 'Financials' },
      { href: '/about/annual-report', label: 'Annual Report' },
    ],
    programs: [
      { href: '/programs/education', label: 'Music Education' },
      { href: '/programs/venue', label: 'Venue Operations' },
      { href: '/programs/community', label: 'Community Outreach' },
    ],
    getInvolved: [
      { href: '/donate', label: 'Donate' },
      { href: '/volunteer', label: 'Volunteer' },
      { href: '/newsletter', label: 'Newsletter' },
      { href: '/contact', label: 'Contact Us' },
    ],
  };

  return (
    <footer className="relative bg-vinyl-blue-deep text-vinyl-cream overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <VinylRecord size="100%" grooves={20} />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Mission */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-vinyl-gold-bright flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-vinyl-blue-deep" />
              </div>
              <div>
                <div className="font-display text-3xl uppercase leading-none">FVMF</div>
                <div className="font-body text-xs opacity-70 uppercase tracking-wider">Since 2009</div>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed opacity-80">
              Fox Valley Music Foundation is a 501(c)(3) nonprofit bringing music education to underserved communities.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-display text-xl uppercase mb-4 text-vinyl-gold-bright">
              About
            </h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm hover:text-vinyl-gold-bright transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-display text-xl uppercase mb-4 text-vinyl-gold-bright">
              Programs
            </h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm hover:text-vinyl-gold-bright transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h4 className="font-display text-xl uppercase mb-4 text-vinyl-gold-bright">
              Get Involved
            </h4>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm hover:text-vinyl-gold-bright transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-vinyl-cream/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-body font-semibold text-sm uppercase tracking-wider mb-2">
                Address
              </h5>
              <address className="font-body text-sm not-italic opacity-80">
                21 S. Broadway Ave.<br />
                Aurora, IL 60505
              </address>
            </div>
            <div>
              <h5 className="font-body font-semibold text-sm uppercase tracking-wider mb-2">
                Contact
              </h5>
              <div className="font-body text-sm opacity-80">
                <a href="tel:+13312128490" className="hover:text-vinyl-gold-bright transition-colors">
                  (331) 212-8490
                </a>
                <br />
                <a href="mailto:info@fvmf.org" className="hover:text-vinyl-gold-bright transition-colors">
                  info@fvmf.org
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-body font-semibold text-sm uppercase tracking-wider mb-2">
                Follow Us
              </h5>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/fvmf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-vinyl-cream/10 hover:bg-vinyl-gold-bright flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/fvmf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-vinyl-cream/10 hover:bg-vinyl-gold-bright flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/fvmf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-vinyl-cream/10 hover:bg-vinyl-gold-bright flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-vinyl-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-body text-sm opacity-70">
            <p>
              © {currentYear} Fox Valley Music Foundation. All rights reserved.
            </p>
            <p className="text-xs mt-1">
              501(c)(3) Nonprofit Organization • EIN: XX-XXXXXXX
            </p>
          </div>

          <div className="flex gap-6 font-body text-sm">
            <Link href="/privacy" className="hover:text-vinyl-gold-bright transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-vinyl-gold-bright transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>

        {/* Venue Aurora Cross-Promotion */}
        <div className="mt-8 pt-8 border-t border-vinyl-cream/20">
          <p className="font-body text-sm opacity-70 text-center">
            FVMF supports live music at{' '}
            <a
              href="https://venueaurora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vinyl-orange hover:text-vinyl-orange-bright underline transition-colors"
            >
              The Venue Aurora
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

## Page Templates

### Homepage Template

**File: `src/app/page.tsx`**

```tsx
import { Metadata } from 'next';
import { VinylHero } from '@/components/VinylHero';
import { VinylMetric } from '@/components/VinylMetric';
import { AlbumCover } from '@/components/AlbumCover';
import { GatefoldStories } from '@/components/GatefoldStories';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Fox Valley Music Foundation | Transforming Lives Through Music',
  description: 'A 501(c)(3) nonprofit bringing music education to underserved communities in the Fox Valley since 2009.',
};

export default function HomePage() {
  // Mock data - replace with Sanity queries
  const impactMetrics = [
    {
      value: '500+',
      label: 'Students Served',
      stories: [
        { name: 'Maria R.', photo: '/students/maria.jpg', quote: 'Music gave me confidence' },
        { name: 'James C.', photo: '/students/james.jpg', quote: 'I found my voice' },
        { name: 'Sofia M.', photo: '/students/sofia.jpg', quote: 'Now I teach others' },
      ],
    },
    {
      value: '$50K',
      label: 'Aid Granted',
      stories: [
        { name: 'David L.', photo: '/students/david.jpg', quote: 'My first guitar' },
        { name: 'Emma T.', photo: '/students/emma.jpg', quote: 'Free lessons changed everything' },
        { name: 'Carlos G.', photo: '/students/carlos.jpg', quote: 'Music is my future' },
      ],
    },
    {
      value: '15',
      label: 'Years Strong',
      stories: [
        { name: 'Lisa P.', photo: '/students/lisa.jpg', quote: 'Been here since day one' },
        { name: 'Michael S.', photo: '/students/michael.jpg', quote: 'Alumni, now volunteer' },
        { name: 'Ana R.', photo: '/students/ana.jpg', quote: 'Three generations strong' },
      ],
    },
  ];

  const testimonials = [
    {
      quote: 'FVMF gave me my first guitar. Now I teach music to other kids in my neighborhood.',
      name: 'Maria Rodriguez',
      age: '17',
      photo: '/testimonials/maria-full.jpg',
      instrument: 'Guitar',
    },
    {
      quote: 'Music gave me confidence when I had none. I owe everything to this foundation.',
      name: 'James Chen',
      age: '15',
      photo: '/testimonials/james-full.jpg',
      instrument: 'Piano',
    },
    {
      quote: 'I never thought I could perform on stage. FVMF showed me I could do anything.',
      name: 'Sofia Martinez',
      age: '16',
      photo: '/testimonials/sofia-full.jpg',
      instrument: 'Drums',
    },
    {
      quote: 'From struggling student to music teacher. This foundation changed my life path.',
      name: 'David Lee',
      age: '19',
      photo: '/testimonials/david-full.jpg',
      instrument: 'Saxophone',
    },
  ];

  return (
    <main className="scroll-snap-y overflow-y-scroll h-screen">
      {/* Section 1: Vinyl Hero */}
      <VinylHero />

      {/* Section 2: Impact Metrics */}
      <section className="min-h-screen snap-start flex items-center justify-center bg-vinyl-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-8 font-display text-6xl md:text-8xl uppercase text-vinyl-blue-deep">
            Our Impact by the Numbers
          </h2>
          <p className="text-center font-body text-xl text-vinyl-charcoal/70 mb-20 max-w-2xl mx-auto">
            Hover over each record to see the students behind the statistics
          </p>

          <div className="flex flex-wrap justify-center gap-16">
            {impactMetrics.map((metric) => (
              <VinylMetric key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Programs as Album Covers */}
      <section className="min-h-screen snap-start bg-vinyl-blue-deep py-24 flex items-center">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-8 font-display text-6xl md:text-8xl uppercase text-vinyl-cream">
            Our Programs
          </h2>
          <p className="text-center font-body text-xl text-vinyl-cream/70 mb-20 max-w-2xl mx-auto">
            Three sides to our mission of transforming lives through music
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AlbumCover
              title="Music Education"
              subtitle="Side A: Lessons for Life"
              icon="🎓"
              color="gold"
              image="/programs/education.jpg"
              href="/programs/education"
            />
            <AlbumCover
              title="Venue Operations"
              subtitle="Side B: Live Music Support"
              icon="🎸"
              color="orange"
              image="/programs/venue.jpg"
              href="/programs/venue"
            />
            <AlbumCover
              title="Community Outreach"
              subtitle="Extended Play: Free Concerts"
              icon="🤝"
              color="blue"
              image="/programs/community.jpg"
              href="/programs/community"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Gatefold Stories */}
      <GatefoldStories testimonials={testimonials} />

      {/* Section 5: Donate CTA */}
      <section className="min-h-screen snap-start bg-vinyl-cream py-24 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-6xl md:text-8xl uppercase text-vinyl-blue-deep mb-8">
            Join Our Mission
          </h2>
          <p className="font-body text-2xl text-vinyl-charcoal mb-12 max-w-3xl mx-auto">
            Your support helps us bring music education to students who need it most. Every donation transforms lives.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Button variant="gold" size="lg">
              Donate Now
            </Button>
            <Button variant="blue" size="lg">
              Become a Volunteer
            </Button>
            <Button variant="outline" size="lg" className="border-vinyl-blue-deep text-vinyl-blue-deep hover:bg-vinyl-blue-deep hover:text-vinyl-cream">
              Learn More
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 border-4 border-vinyl-gold-bright">
            <h3 className="font-display text-3xl uppercase text-vinyl-blue-deep mb-4">
              Stay Connected
            </h3>
            <p className="font-body text-sm text-vinyl-charcoal mb-6">
              Get updates on our programs, student success stories, and upcoming events.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-vinyl-blue-deep rounded-lg font-body focus:outline-none focus:ring-4 focus:ring-vinyl-gold-bright"
                required
              />
              <Button variant="blue" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

## Utilities

### CSS Utilities

**File: `src/lib/utils.ts`**

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Animation Utilities

**File: `src/lib/animations.ts`**

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const vinylSpin = {
  initial: { rotate: -720, scale: 0.5, opacity: 0 },
  animate: { rotate: 0, scale: 1, opacity: 1 },
  transition: { duration: 2, ease: 'easeOut' },
};

export const gatefoldOpen = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  exit: { scaleX: 0 },
  transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
};
```

---

**Next:** Sanity schemas and migration scripts in next document.
