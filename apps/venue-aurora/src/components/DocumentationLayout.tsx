'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface DocumentationLayoutProps {
  title: string;
  date: string;
  version: string;
  children: React.ReactNode;
  toc: TOCItem[];
}

export default function DocumentationLayout({
  title,
  date,
  version,
  children,
  toc,
}: DocumentationLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    // Observe all headings
    const headings = document.querySelectorAll('h2[id], h3[id], h4[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-900/50 sticky top-0 z-40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/roadmap"
              className="inline-flex items-center text-sm text-neutral-400 transition-colors hover:text-orange-500"
            >
              ← Back to Roadmap
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-800 px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-neutral-700"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_250px]">
          {/* Document Content */}
          <div>
            {/* Document Header */}
            <div className="mb-8">
              <div className="mb-2 flex items-center gap-3 text-sm text-neutral-500">
                <span>Version {version}</span>
                <span>•</span>
                <span>{date}</span>
              </div>
              <h1 className="text-4xl font-bold text-white">{title}</h1>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-neutral max-w-none">
              {children}
            </div>
          </div>

          {/* Table of Contents - Sticky Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-4">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                  On This Page
                </h3>
                <nav className="space-y-1">
                  {toc.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left text-sm transition-colors ${
                        item.level === 2 ? 'font-medium' : 'ml-4 text-neutral-500'
                      } ${
                        activeSection === item.id
                          ? 'text-orange-500'
                          : 'text-neutral-400 hover:text-neutral-300'
                      }`}
                      style={{ paddingLeft: item.level === 2 ? '0' : `${(item.level - 2) * 12}px` }}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
