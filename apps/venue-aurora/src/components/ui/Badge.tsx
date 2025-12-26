import { type HTMLAttributes } from 'react';

// ==========================================
// GENRE BADGE
// Color-coded music genre indicators
// ==========================================

type Genre = 'jazz' | 'blues' | 'rock' | 'tribute' | 'bigband' | 'acoustic' | 'folk' | 'other';

interface GenreBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  genre: Genre;
}

const genreConfig: Record<Genre, { bg: string; text: string; border: string; label: string }> = {
  jazz: {
    bg: 'bg-[hsl(45_93%_47%/0.15)]',
    text: 'text-[hsl(45_93%_60%)]',
    border: 'border-[hsl(45_93%_47%/0.3)]',
    label: 'Jazz',
  },
  blues: {
    bg: 'bg-[hsl(217_91%_60%/0.15)]',
    text: 'text-[hsl(217_91%_70%)]',
    border: 'border-[hsl(217_91%_60%/0.3)]',
    label: 'Blues',
  },
  rock: {
    bg: 'bg-[hsl(0_84%_60%/0.15)]',
    text: 'text-[hsl(0_84%_70%)]',
    border: 'border-[hsl(0_84%_60%/0.3)]',
    label: 'Rock',
  },
  tribute: {
    bg: 'bg-[hsl(280_87%_65%/0.15)]',
    text: 'text-[hsl(280_87%_75%)]',
    border: 'border-[hsl(280_87%_65%/0.3)]',
    label: 'Tribute',
  },
  bigband: {
    bg: 'bg-[hsl(38_92%_50%/0.15)]',
    text: 'text-[hsl(38_92%_65%)]',
    border: 'border-[hsl(38_92%_50%/0.3)]',
    label: 'Big Band',
  },
  acoustic: {
    bg: 'bg-[hsl(142_76%_36%/0.15)]',
    text: 'text-[hsl(142_76%_50%)]',
    border: 'border-[hsl(142_76%_36%/0.3)]',
    label: 'Acoustic',
  },
  folk: {
    bg: 'bg-[hsl(25_95%_53%/0.15)]',
    text: 'text-[hsl(25_95%_65%)]',
    border: 'border-[hsl(25_95%_53%/0.3)]',
    label: 'Folk',
  },
  other: {
    bg: 'bg-neutral-800/50',
    text: 'text-neutral-400',
    border: 'border-neutral-700',
    label: 'Live Music',
  },
};

export function GenreBadge({ genre, className = '', ...props }: GenreBadgeProps) {
  const config = genreConfig[genre] || genreConfig.other;

  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-1
        rounded-full
        text-[11px] font-semibold uppercase tracking-wider
        border
        ${config.bg}
        ${config.text}
        ${config.border}
        ${className}
      `}
      {...props}
    >
      {config.label}
    </span>
  );
}

// ==========================================
// AVAILABILITY BADGE
// Status indicators for ticket availability
// ==========================================

type Availability = 'available' | 'limited' | 'soldout' | 'upcoming';

interface AvailabilityBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status: Availability;
  showDot?: boolean;
}

const availabilityConfig: Record<Availability, { bg: string; text: string; dot: string; label: string }> = {
  available: {
    bg: 'bg-[hsl(142_76%_36%/0.15)]',
    text: 'text-[hsl(142_76%_50%)]',
    dot: 'bg-[hsl(142_76%_50%)]',
    label: 'On Sale',
  },
  limited: {
    bg: 'bg-[hsl(38_92%_50%/0.15)]',
    text: 'text-[hsl(38_92%_65%)]',
    dot: 'bg-[hsl(38_92%_65%)]',
    label: 'Few Left',
  },
  soldout: {
    bg: 'bg-[hsl(0_84%_60%/0.15)]',
    text: 'text-[hsl(0_84%_70%)]',
    dot: 'bg-[hsl(0_84%_70%)]',
    label: 'Sold Out',
  },
  upcoming: {
    bg: 'bg-[hsl(199_89%_48%/0.15)]',
    text: 'text-[hsl(199_89%_60%)]',
    dot: 'bg-[hsl(199_89%_60%)]',
    label: 'Coming Soon',
  },
};

export function AvailabilityBadge({ status, showDot = true, className = '', ...props }: AvailabilityBadgeProps) {
  const config = availabilityConfig[status];

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        px-2 py-0.5
        rounded-full
        text-[11px] font-semibold uppercase tracking-wider
        ${config.bg}
        ${config.text}
        ${className}
      `}
      {...props}
    >
      {showDot && status !== 'soldout' && (
        <span
          className={`
            w-1.5 h-1.5 rounded-full
            ${config.dot}
            ${status === 'available' ? 'animate-pulse' : ''}
          `}
        />
      )}
      {config.label}
    </span>
  );
}

// ==========================================
// PRICE BADGE
// Prominent price display
// ==========================================

interface PriceBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  price: number | string;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function PriceBadge({ price, currency = '$', size = 'md', className = '', ...props }: PriceBadgeProps) {
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const displayPrice = typeof price === 'number' ? price.toFixed(2) : price;

  return (
    <span
      className={`
        inline-flex items-baseline
        font-bold text-primary-500
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      <span className="text-[0.7em] mr-0.5">{currency}</span>
      {displayPrice}
    </span>
  );
}

// ==========================================
// STATUS BADGE
// General purpose status indicator
// ==========================================

type StatusType = 'success' | 'warning' | 'error' | 'info' | 'neutral';

interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status: StatusType;
  children: React.ReactNode;
}

const statusConfig: Record<StatusType, { bg: string; text: string }> = {
  success: {
    bg: 'bg-success/15',
    text: 'text-success',
  },
  warning: {
    bg: 'bg-warning/15',
    text: 'text-warning',
  },
  error: {
    bg: 'bg-error/15',
    text: 'text-error',
  },
  info: {
    bg: 'bg-info/15',
    text: 'text-info',
  },
  neutral: {
    bg: 'bg-neutral-700/50',
    text: 'text-neutral-300',
  },
};

export function StatusBadge({ status, children, className = '', ...props }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-1
        rounded-md
        text-xs font-medium
        ${config.bg}
        ${config.text}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}

// ==========================================
// DATE BADGE
// Compact date display for event cards
// ==========================================

interface DateBadgeProps extends HTMLAttributes<HTMLDivElement> {
  date: Date;
  variant?: 'default' | 'compact' | 'prominent';
}

export function DateBadge({ date, variant = 'default', className = '', ...props }: DateBadgeProps) {
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const day = date.getDate();
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });

  if (variant === 'compact') {
    return (
      <div
        className={`text-center ${className}`}
        {...props}
      >
        <div className="text-[10px] font-bold text-primary-500 uppercase tracking-wider">{month}</div>
        <div className="text-xl font-bold text-white leading-none">{day}</div>
      </div>
    );
  }

  if (variant === 'prominent') {
    return (
      <div
        className={`
          flex flex-col items-center justify-center
          w-16 h-16
          rounded-xl
          bg-gradient-to-br from-primary-500 to-primary-600
          text-white
          shadow-[var(--shadow-glow-sm)]
          ${className}
        `}
        {...props}
      >
        <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">{month}</div>
        <div className="text-2xl font-bold leading-none">{day}</div>
      </div>
    );
  }

  return (
    <div
      className={`
        flex flex-col items-center justify-center
        w-14 h-14
        rounded-lg
        bg-neutral-800
        border border-neutral-700
        ${className}
      `}
      {...props}
    >
      <div className="text-[10px] font-bold text-primary-500 uppercase tracking-wider">{month}</div>
      <div className="text-lg font-bold text-white leading-none">{day}</div>
      <div className="text-[9px] text-neutral-500 uppercase">{weekday}</div>
    </div>
  );
}
