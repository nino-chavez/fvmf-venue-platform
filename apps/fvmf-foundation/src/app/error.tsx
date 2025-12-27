'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl md:text-8xl font-bold text-neutral-900 mb-4">
          Error
        </h1>
        <h2 className="font-display text-2xl md:text-3xl text-neutral-700 mb-8">
          Something went wrong
        </h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
