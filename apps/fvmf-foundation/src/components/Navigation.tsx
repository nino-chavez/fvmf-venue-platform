'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-gray-200 bg-white transition-all duration-300",
      scrolled ? "shadow-lg py-2" : "shadow-sm py-0"
    )}>
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col items-start transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/fvmf-logo.png"
            alt="Fox Valley Music Foundation"
            width={139}
            height={44}
            priority
            className="h-11 w-auto"
          />
          <span className="text-xs text-gray-600 mt-1">Preserve • Promote • Protect • Present</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/programs"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Programs
          </Link>
          <Link
            href="/news-updates"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            News & Updates
          </Link>
          <Link
            href="/the-venue"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            The Venue
          </Link>
          <Link
            href="/membership"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Membership
          </Link>
          <Button variant="gold" size="sm" className="bg-orange-500 hover:bg-orange-600" asChild>
            <Link href="/donate">Donate</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 min-h-[44px] min-w-[44px]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <span className="sr-only">
            {mobileMenuOpen ? 'Close menu' : 'Open menu'}
          </span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white',
          mobileMenuOpen
            ? 'max-h-96 border-t border-gray-200'
            : 'max-h-0'
        )}
      >
        <div className="container mx-auto space-y-1 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/programs"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Programs
          </Link>
          <Link
            href="/news-updates"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            News & Updates
          </Link>
          <Link
            href="/the-venue"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            The Venue
          </Link>
          <Link
            href="/membership"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Membership
          </Link>
          <div className="pt-2">
            <Button variant="gold" size="md" className="w-full bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                Donate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
