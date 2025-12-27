'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface TimelineEvent {
  year: string
  title: string
  description: string
  highlight?: boolean
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-orange-500" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`relative pl-20 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Year badge */}
      <div
        className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm
          ${
            event.highlight
              ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
              : 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
          }
          transform ${isInView ? 'scale-100' : 'scale-0'} transition-transform duration-500`}
        style={{ transitionDelay: `${index * 100 + 200}ms` }}
      >
        {event.year}
      </div>

      {/* Content card */}
      <div
        className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow
          ${event.highlight ? 'border-l-4 border-orange-500' : ''}`}
      >
        <h3
          className={`text-xl font-bold mb-2 ${
            event.highlight ? 'text-orange-600' : 'text-blue-600'
          }`}
        >
          {event.title}
        </h3>
        <p className="text-gray-700 leading-relaxed">{event.description}</p>
      </div>
    </div>
  )
}
