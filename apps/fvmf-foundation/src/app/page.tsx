import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-vinyl-black">
      <h1 className="text-6xl font-display mb-4 text-vinyl-gold-bright text-center">
        Fox Valley Music Foundation
      </h1>
      <p className="text-xl text-center max-w-2xl text-vinyl-cream/90 font-body">
        Where music transforms lives. Supporting music education in the Fox Valley
        through instruments, instruction, and inspiration.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <Button variant="gold" size="lg">
          Support Music Education
        </Button>
        <Button variant="blue" size="lg">
          See Our Impact
        </Button>
        <Button variant="outline" size="lg">
          Visit Venue Aurora
        </Button>
      </div>
      <div className="mt-12 text-center text-vinyl-cream/70 text-sm">
        <p>Vinyl Revival Meets Modern Activism</p>
        <p className="mt-2 font-mono">Week 1 Implementation Complete ✓</p>
      </div>
    </main>
  )
}
