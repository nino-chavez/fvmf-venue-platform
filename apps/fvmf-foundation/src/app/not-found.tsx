import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl md:text-8xl font-bold text-neutral-900 mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl text-neutral-700 mb-8">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
