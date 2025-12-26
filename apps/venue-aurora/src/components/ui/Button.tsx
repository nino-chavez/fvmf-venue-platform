import { forwardRef, type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-primary-500 text-white
    hover:bg-primary-400 active:bg-primary-600
    shadow-[0_0_0_0_hsl(25_95%_53%/0)]
    hover:shadow-[0_0_20px_-5px_hsl(25_95%_53%/0.5)]
    disabled:bg-neutral-700 disabled:text-neutral-500
  `,
  secondary: `
    bg-neutral-800 text-neutral-100
    hover:bg-neutral-700 active:bg-neutral-800
    border border-neutral-700
    hover:border-neutral-600
    disabled:bg-neutral-900 disabled:text-neutral-600
  `,
  ghost: `
    bg-transparent text-neutral-300
    hover:bg-neutral-800 hover:text-neutral-100
    active:bg-neutral-700
    disabled:text-neutral-600
  `,
  outline: `
    bg-transparent text-primary-500
    border-2 border-primary-500
    hover:bg-primary-500/10
    active:bg-primary-500/20
    disabled:border-neutral-700 disabled:text-neutral-600
  `,
  danger: `
    bg-error text-white
    hover:bg-[hsl(0_84%_65%)] active:bg-[hsl(0_84%_55%)]
    disabled:bg-neutral-700 disabled:text-neutral-500
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5 rounded-md',
  md: 'h-10 px-4 text-sm gap-2 rounded-lg',
  lg: 'h-12 px-6 text-base gap-2 rounded-lg',
  xl: 'h-14 px-8 text-lg gap-3 rounded-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = '',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          inline-flex items-center justify-center
          font-semibold
          transition-all duration-[var(--transition-duration-eighth)]
          ease-[var(--transition-timing-function-legato)]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950
          disabled:cursor-not-allowed disabled:opacity-60
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Icon-only button variant
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'ghost', size = 'md', className = '', children, ...props }, ref) => {
    const sizeMap = {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
    };

    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center
          rounded-lg
          transition-all duration-[var(--transition-duration-eighth)]
          ease-[var(--transition-timing-function-legato)]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950
          ${variantStyles[variant]}
          ${sizeMap[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
