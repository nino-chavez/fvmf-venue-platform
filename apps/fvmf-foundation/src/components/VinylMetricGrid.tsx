import { VinylMetric } from './VinylMetric'
import type { ImpactMetric } from '@/lib/sanity'

interface VinylMetricGridProps {
  metrics: ImpactMetric[]
  title?: string
  className?: string
}

export function VinylMetricGrid({ metrics, title, className }: VinylMetricGridProps) {
  if (!metrics || metrics.length === 0) {
    return null
  }

  return (
    <section className={className}>
      {title && (
        <h2 className="text-4xl font-display text-vinyl-gold-bright text-center mb-12">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <VinylMetric
            key={index}
            value={metric.value}
            label={metric.label}
            category={metric.category}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="mt-12 flex justify-center gap-2" aria-hidden="true">
        <div className="h-1 w-12 rounded-full bg-vinyl-gold-bright/30" />
        <div className="h-1 w-1 rounded-full bg-vinyl-gold-bright/50" />
        <div className="h-1 w-12 rounded-full bg-vinyl-gold-bright/30" />
      </div>
    </section>
  )
}
