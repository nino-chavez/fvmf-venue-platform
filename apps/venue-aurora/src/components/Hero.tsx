'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap, ScrollTrigger, timing, easing } from '@/lib/gsap';
import { HERO_IMAGE_URL, HERO_IMAGES, getPicsumFallback } from '@/lib/images';

interface HeroProps {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
  imageSrc?: string;
  showScrollIndicator?: boolean;
}

// Default fallback images for the hero - curated concert/venue images
const HERO_FALLBACK_IMAGES = [
  ...HERO_IMAGES,
  getPicsumFallback('other', 1920, 1080, 0),
];

export function Hero({
  title = 'Live Music',
  subtitle = 'Nationally-recognized talent in blues, jazz, rock, big band, and more. An intimate 190-seat listening room in Downtown Aurora.',
  videoSrc,
  imageSrc = HERO_IMAGE_URL,
  showScrollIndicator = true,
}: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  // Handle image loading errors with fallback chain
  const handleImageError = () => {
    if (fallbackIndex < HERO_FALLBACK_IMAGES.length) {
      setCurrentImageSrc(HERO_FALLBACK_IMAGES[fallbackIndex]);
      setFallbackIndex(fallbackIndex + 1);
    }
  };

  // Update image when prop changes
  useEffect(() => {
    setCurrentImageSrc(imageSrc);
    setFallbackIndex(0);
  }, [imageSrc]);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        // Initial content animation
        const tl = gsap.timeline({ delay: 0.2 });

        tl.from('.hero-badge', {
          y: 20,
          opacity: 0,
          duration: timing.quarter,
          ease: easing.crescendo,
        })
          .from('.hero-title-line', {
            y: 60,
            opacity: 0,
            duration: timing.half,
            ease: easing.crescendo,
            stagger: 0.1,
          }, '-=0.1')
          .from('.hero-subtitle', {
            y: 30,
            opacity: 0,
            duration: timing.quarter,
            ease: easing.legato,
          }, '-=0.2')
          .from('.hero-cta', {
            y: 20,
            opacity: 0,
            duration: timing.quarter,
            ease: easing.legato,
            stagger: 0.1,
          }, '-=0.1')
          .from('.hero-scroll-indicator', {
            y: -20,
            opacity: 0,
            duration: timing.quarter,
            ease: easing.legato,
          }, '-=0.1');

        // Parallax effect on scroll
        gsap.to('.hero-media', {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        // Content fade out on scroll
        gsap.to(contentRef.current, {
          opacity: 0,
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '50% top',
            scrub: true,
          },
        });

        // Overlay darkens on scroll
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            opacity: 0.9,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Media */}
      <div className="hero-media absolute inset-0 scale-110">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={currentImageSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <>
            <img
              src={currentImageSrc}
              alt="Live music performance at The Venue Aurora"
              className="absolute inset-0 w-full h-full object-cover"
              onError={handleImageError}
            />
            {/* Fallback gradient if all images fail */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-neutral-900 to-black -z-10" />
          </>
        )}

        {/* Gradient Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black opacity-70"
        />

        {/* Atmospheric Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative h-full flex flex-col justify-center items-center text-center px-4"
      >
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-slow" />
            <span className="text-sm text-white/90 font-medium">Fox Valley Music Foundation</span>
          </div>

          {/* Title */}
          <h1 className="overflow-hidden mb-6">
            {title.split(' ').map((word, i) => (
              <span
                key={i}
                className="hero-title-line inline-block text-display-lg font-black text-white mr-4"
                style={{
                  textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                  letterSpacing: '-0.02em',
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#events"
              className="hero-cta group relative px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-[250ms] hover:shadow-glow-primary hover:-translate-y-0.5 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Upcoming Shows
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/about"
              className="hero-cta px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-[250ms] hover:bg-white/20 hover:-translate-y-0.5 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              About The Venue
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div
          className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-white/60 text-sm uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      )}

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

// Stats bar that appears below hero
export function HeroStats() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        gsap.from('.stat-item', {
          y: 30,
          opacity: 0,
          duration: timing.quarter,
          ease: easing.crescendo,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 90%',
          },
        });
      }, statsRef);

      return () => ctx.revert();
    }
  }, []);

  const stats = [
    { value: '190', label: 'Seats', ariaLabel: '190 seats' },
    { value: '100+', label: 'Shows/Year', ariaLabel: 'Over 100 shows per year' },
    { value: '501(c)(3)', label: 'Nonprofit', ariaLabel: '501(c)(3) nonprofit organization' },
    { value: '2019', label: 'Est.', ariaLabel: 'Established in 2019' },
  ];

  return (
    <aside
      ref={statsRef}
      className="relative -mt-16 z-10 max-w-4xl mx-auto px-4"
      aria-label="Venue statistics"
    >
      <div className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-1" aria-label={stat.ariaLabel}>
                {stat.value}
              </div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider" aria-hidden="true">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
