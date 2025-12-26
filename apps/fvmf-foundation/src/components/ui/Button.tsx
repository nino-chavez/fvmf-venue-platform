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
