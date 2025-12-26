import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'blue' | 'orange' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'gold',
  size = 'md',
  asChild = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? 'span' : 'button'

  const buttonClasses = cn(
    // Base styles
    'inline-flex items-center justify-center',
    'font-body font-semibold uppercase tracking-wider',
    'rounded-lg transition-all duration-300',
    'focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',

    // Size variants
    size === 'sm' && 'px-4 py-2 text-sm min-h-[44px]',
    size === 'md' && 'px-6 py-3 text-base min-h-[48px]',
    size === 'lg' && 'px-8 py-4 text-lg min-h-[56px]',

    // Color variants
    variant === 'gold' && [
      'bg-orange-500 text-white',
      'hover:bg-orange-600 hover:shadow-lg',
      'active:scale-95',
    ],
    variant === 'blue' && [
      'bg-blue-600 text-white',
      'hover:bg-blue-700 hover:shadow-lg',
      'active:scale-95',
    ],
    variant === 'orange' && [
      'bg-orange-500 text-white',
      'hover:bg-orange-600 hover:shadow-lg',
      'active:scale-95',
    ],
    variant === 'outline' && [
      'border-2 border-current',
      'hover:bg-current/10',
      'active:scale-95',
    ],

    className
  )

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: buttonClasses,
    } as any)
  }

  return (
    <Comp className={buttonClasses} {...props}>
      {children}
    </Comp>
  )
}
