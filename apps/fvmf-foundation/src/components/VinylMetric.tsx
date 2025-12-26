'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface VinylMetricProps {
  value: string
  label: string
  category?: 'students' | 'financial' | 'programs' | 'impact'
  className?: string
}

export function VinylMetric({ value, label, category = 'impact', className }: VinylMetricProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Color mapping based on category
  const colorClasses = {
    students: 'from-vinyl-blue-deep to-vinyl-blue-bright',
    financial: 'from-vinyl-gold-warm to-vinyl-gold-bright',
    programs: 'from-vinyl-orange to-vinyl-orange-bright',
    impact: 'from-vinyl-blue-electric to-vinyl-gold-bright',
  }

  const accentColor = {
    students: 'text-vinyl-blue-bright',
    financial: 'text-vinyl-gold-bright',
    programs: 'text-vinyl-orange-bright',
    impact: 'text-vinyl-gold-bright',
  }

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      {/* Vinyl Record */}
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="img"
        aria-label={`${value} ${label}`}
      >
        {/* Outer vinyl ring */}
        <motion.div
          className="relative h-32 w-32 rounded-full sm:h-40 sm:w-40 lg:h-48 lg:w-48"
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            repeat: isHovered ? Infinity : 0,
          }}
        >
          {/* Vinyl gradient background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-vinyl-black to-zinc-800" />

          {/* Grooves (concentric circles) */}
          <div className="absolute inset-0 rounded-full vinyl-groove opacity-30" />

          {/* Inner label area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={cn(
              'h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full',
              'bg-gradient-to-br',
              colorClasses[category],
              'shadow-lg shadow-black/50',
              'flex items-center justify-center',
              'transition-transform duration-300',
              isHovered && 'scale-110'
            )}>
              {/* Metric value */}
              <span className={cn(
                'font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-vinyl-black',
                'transition-all duration-300',
                isHovered && 'scale-110'
              )}>
                {value}
              </span>
            </div>
          </div>

          {/* Center hole */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-vinyl-black ring-2 ring-zinc-600" />
          </div>

          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Turntable arm (decorative) */}
        <motion.div
          className="absolute -right-4 top-1/2 h-1 w-8 origin-left rounded-full bg-vinyl-cream/30"
          initial={{ rotate: -30 }}
          animate={{ rotate: isHovered ? -10 : -30 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Label */}
      <div className="text-center">
        <motion.p
          className={cn(
            'font-body text-sm font-medium sm:text-base',
            accentColor[category]
          )}
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.p>
      </div>

      {/* Accessibility hint */}
      <span className="sr-only">
        {value} {label}. Hover to see vinyl record spin.
      </span>
    </div>
  )
}

// Preset metrics for quick use
export function VinylMetricShowsHosted() {
  return (
    <VinylMetric
      value="700+"
      label="Shows Hosted"
      category="programs"
    />
  )
}

export function VinylMetricEducationalPrograms() {
  return (
    <VinylMetric
      value="107"
      label="Educational Programs"
      category="programs"
    />
  )
}

export function VinylMetricStudentsServed() {
  return (
    <VinylMetric
      value="500+"
      label="Students Served"
      category="students"
    />
  )
}

export function VinylMetricAttendees() {
  return (
    <VinylMetric
      value="50K"
      label="Show Attendees"
      category="impact"
    />
  )
}
