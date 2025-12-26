import type { Metadata } from 'next';
import {
  Button,
  IconButton,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  GenreBadge,
  AvailabilityBadge,
  PriceBadge,
  StatusBadge,
  DateBadge,
  Input,
  SearchInput,
  Textarea,
  Select,
  EventCard,
  type EventData,
} from '@/components/ui';

export const metadata: Metadata = {
  title: 'Style Guide | The Venue Aurora Design System',
  description: 'Component library and design tokens for The Venue Aurora',
};

// Sample event data for demos
const sampleEvent: EventData = {
  id: '1',
  name: 'Jazz Night with Marcus Williams Quartet',
  description: 'An evening of world-class jazz featuring talented musicians. Experience the magic of live jazz in our intimate 190-seat venue.',
  date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  price: 25,
  genre: 'jazz',
  availability: 'available',
  imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200&h=400&fit=crop',
  ticketUrl: '#',
  venue: 'The Venue Aurora',
};

const featuredEvent: EventData = {
  ...sampleEvent,
  name: 'Gary Hoey\'s "HO HO HOEY Rockin\' Holiday Tour"',
  description: 'Guitar virtuoso Gary Hoey brings his legendary holiday tour to Aurora! Experience face-melting guitar work combined with festive holiday favorites.',
  price: 35,
  genre: 'rock',
  availability: 'limited',
};

// Section component
function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        {description && <p className="text-neutral-400">{description}</p>}
      </div>
      {children}
    </section>
  );
}

// Subsection component
function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-neutral-300 mb-4">{title}</h3>
      {children}
    </div>
  );
}

// Color swatch component
function ColorSwatch({ name, value, textClass = 'text-white' }: { name: string; value: string; textClass?: string }) {
  return (
    <div className="flex flex-col">
      <div className={`h-16 rounded-lg ${value} flex items-end p-2`}>
        <span className={`text-xs font-mono ${textClass}`}>{name}</span>
      </div>
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-16 pb-8 border-b border-neutral-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shadow-[var(--shadow-glow-sm)]">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">Style Guide</h1>
            <p className="text-neutral-400">The Venue Aurora Design System v1.0</p>
          </div>
        </div>
        <p className="text-lg text-neutral-300 max-w-3xl">
          A music-forward design system that captures the energy of live performance while maintaining
          excellent information hierarchy and reducing friction. Built with accessibility and
          performance in mind.
        </p>
      </div>

      {/* ==========================================
       * COLORS
       * ========================================== */}
      <Section
        title="Colors"
        description="Stage-inspired color palette with warm spotlights, cool ambience, and neon accents"
      >
        <Subsection title="Primary - Stage Orange">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            <ColorSwatch name="50" value="bg-primary-50" textClass="text-neutral-900" />
            <ColorSwatch name="100" value="bg-primary-100" textClass="text-neutral-900" />
            <ColorSwatch name="200" value="bg-primary-200" textClass="text-neutral-900" />
            <ColorSwatch name="300" value="bg-primary-300" textClass="text-neutral-900" />
            <ColorSwatch name="400" value="bg-primary-400" />
            <ColorSwatch name="500" value="bg-primary-500" />
            <ColorSwatch name="600" value="bg-primary-600" />
            <ColorSwatch name="700" value="bg-primary-700" />
            <ColorSwatch name="800" value="bg-primary-800" />
            <ColorSwatch name="900" value="bg-primary-900" />
          </div>
        </Subsection>

        <Subsection title="Secondary - Electric Blue">
          <div className="grid grid-cols-5 md:grid-cols-7 gap-2">
            <ColorSwatch name="50" value="bg-secondary-50" textClass="text-neutral-900" />
            <ColorSwatch name="100" value="bg-secondary-100" textClass="text-neutral-900" />
            <ColorSwatch name="200" value="bg-secondary-200" textClass="text-neutral-900" />
            <ColorSwatch name="300" value="bg-secondary-300" textClass="text-neutral-900" />
            <ColorSwatch name="400" value="bg-secondary-400" />
            <ColorSwatch name="500" value="bg-secondary-500" />
            <ColorSwatch name="600" value="bg-secondary-600" />
          </div>
        </Subsection>

        <Subsection title="Neutrals">
          <div className="grid grid-cols-6 md:grid-cols-11 gap-2">
            <ColorSwatch name="50" value="bg-neutral-50" textClass="text-neutral-900" />
            <ColorSwatch name="100" value="bg-neutral-100" textClass="text-neutral-900" />
            <ColorSwatch name="200" value="bg-neutral-200" textClass="text-neutral-900" />
            <ColorSwatch name="300" value="bg-neutral-300" textClass="text-neutral-900" />
            <ColorSwatch name="400" value="bg-neutral-400" textClass="text-neutral-900" />
            <ColorSwatch name="500" value="bg-neutral-500" />
            <ColorSwatch name="600" value="bg-neutral-600" />
            <ColorSwatch name="700" value="bg-neutral-700" />
            <ColorSwatch name="800" value="bg-neutral-800" />
            <ColorSwatch name="900" value="bg-neutral-900" />
            <ColorSwatch name="950" value="bg-neutral-950" />
          </div>
        </Subsection>

        <Subsection title="Semantic">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-success/20 border border-success/30">
              <span className="text-success font-semibold">Success</span>
            </div>
            <div className="p-4 rounded-lg bg-warning/20 border border-warning/30">
              <span className="text-warning font-semibold">Warning</span>
            </div>
            <div className="p-4 rounded-lg bg-error/20 border border-error/30">
              <span className="text-error font-semibold">Error</span>
            </div>
            <div className="p-4 rounded-lg bg-info/20 border border-info/30">
              <span className="text-info font-semibold">Info</span>
            </div>
          </div>
        </Subsection>
      </Section>

      {/* ==========================================
       * TYPOGRAPHY
       * ========================================== */}
      <Section
        title="Typography"
        description="Musical scale based on golden ratio (1.618) for harmonious visual rhythm"
      >
        <div className="space-y-6">
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">Display / 72px</span>
            <p className="text-7xl font-bold text-white leading-tight">Live Music</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">Hero / 48px</span>
            <p className="text-5xl font-bold text-white leading-tight">Upcoming Shows</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">Page Title / 36px</span>
            <p className="text-4xl font-bold text-white leading-tight">Event Calendar</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">Section / 24px</span>
            <p className="text-2xl font-semibold text-white">This Week at The Venue</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">Body / 16px</span>
            <p className="text-base text-neutral-300 leading-relaxed max-w-prose">
              The Venue Aurora is a 190-seat listening room dedicated to preserving and promoting live music
              in the Fox Valley area. Every show features excellent acoustics and an intimate atmosphere
              where you can truly connect with the performers.
            </p>
          </div>
        </div>
      </Section>

      {/* ==========================================
       * BUTTONS
       * ========================================== */}
      <Section
        title="Buttons"
        description="Interactive elements with stage-light glow effects and musical timing"
      >
        <Subsection title="Variants">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </Subsection>

        <Subsection title="Sizes">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </Subsection>

        <Subsection title="States">
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
          </div>
        </Subsection>

        <Subsection title="With Icons">
          <div className="flex flex-wrap gap-4">
            <Button
              leftIcon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              }
            >
              Get Tickets
            </Button>
            <Button
              variant="secondary"
              rightIcon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              }
            >
              View Calendar
            </Button>
          </div>
        </Subsection>

        <Subsection title="Full Width">
          <div className="max-w-md">
            <Button fullWidth size="lg">
              Purchase Tickets - $25.00
            </Button>
          </div>
        </Subsection>
      </Section>

      {/* ==========================================
       * BADGES
       * ========================================== */}
      <Section
        title="Badges"
        description="Quick visual indicators for genres, availability, and status"
      >
        <Subsection title="Genre Badges">
          <div className="flex flex-wrap gap-3">
            <GenreBadge genre="jazz" />
            <GenreBadge genre="blues" />
            <GenreBadge genre="rock" />
            <GenreBadge genre="tribute" />
            <GenreBadge genre="bigband" />
            <GenreBadge genre="acoustic" />
            <GenreBadge genre="folk" />
            <GenreBadge genre="other" />
          </div>
        </Subsection>

        <Subsection title="Availability Badges">
          <div className="flex flex-wrap gap-3">
            <AvailabilityBadge status="available" />
            <AvailabilityBadge status="limited" />
            <AvailabilityBadge status="soldout" />
            <AvailabilityBadge status="upcoming" />
          </div>
        </Subsection>

        <Subsection title="Price Badges">
          <div className="flex flex-wrap items-end gap-6">
            <PriceBadge price={15} size="sm" />
            <PriceBadge price={25} size="md" />
            <PriceBadge price={45} size="lg" />
          </div>
        </Subsection>

        <Subsection title="Status Badges">
          <div className="flex flex-wrap gap-3">
            <StatusBadge status="success">Confirmed</StatusBadge>
            <StatusBadge status="warning">Pending</StatusBadge>
            <StatusBadge status="error">Cancelled</StatusBadge>
            <StatusBadge status="info">Processing</StatusBadge>
            <StatusBadge status="neutral">Draft</StatusBadge>
          </div>
        </Subsection>

        <Subsection title="Date Badges">
          <div className="flex flex-wrap items-end gap-6">
            <DateBadge date={new Date()} variant="default" />
            <DateBadge date={new Date()} variant="compact" />
            <DateBadge date={new Date()} variant="prominent" />
          </div>
        </Subsection>
      </Section>

      {/* ==========================================
       * CARDS
       * ========================================== */}
      <Section
        title="Cards"
        description="Container components with multiple variants for different contexts"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Standard card with subtle border</CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              <p className="text-neutral-400">Card content goes here. This is the default variant suitable for most use cases.</p>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>Card with shadow depth</CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              <p className="text-neutral-400">Use elevated cards to create visual hierarchy and draw attention.</p>
            </CardContent>
          </Card>

          <Card variant="interactive">
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>Hover for lift effect</CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              <p className="text-neutral-400">Interactive cards respond to hover with a lift animation and glow.</p>
            </CardContent>
          </Card>

          <Card variant="spotlight">
            <CardHeader>
              <CardTitle>Spotlight Card</CardTitle>
              <CardDescription>Featured content with glow</CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              <p className="text-neutral-400">Use spotlight cards for featured or promoted content.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ==========================================
       * INPUTS
       * ========================================== */}
      <Section
        title="Form Inputs"
        description="Accessible form controls with consistent styling"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              hint="We'll never share your email"
            />

            <Input
              label="With Error"
              type="text"
              placeholder="Enter value"
              error="This field is required"
            />

            <Input
              label="With Icon"
              type="text"
              placeholder="Search events..."
              leftIcon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
          </div>

          <div className="space-y-6">
            <Select
              label="Select Genre"
              options={[
                { value: '', label: 'All Genres' },
                { value: 'jazz', label: 'Jazz' },
                { value: 'blues', label: 'Blues' },
                { value: 'rock', label: 'Rock' },
                { value: 'tribute', label: 'Tribute' },
              ]}
            />

            <Textarea
              label="Message"
              placeholder="Tell us about your event..."
              rows={4}
            />

            <SearchInput
              placeholder="Search events, artists, genres..."
              value=""
            />
          </div>
        </div>
      </Section>

      {/* ==========================================
       * EVENT CARDS
       * ========================================== */}
      <Section
        title="Event Cards"
        description="Information architecture optimized for quick decision-making"
      >
        <Subsection title="Featured Variant">
          <EventCard event={featuredEvent} variant="featured" />
        </Subsection>

        <Subsection title="Default Variant">
          <div className="max-w-2xl">
            <EventCard event={sampleEvent} variant="default" />
          </div>
        </Subsection>

        <Subsection title="Compact Variant (Grid)">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <EventCard event={sampleEvent} variant="compact" />
            <EventCard event={{ ...sampleEvent, genre: 'blues', name: 'Chicago Blues Night' }} variant="compact" />
            <EventCard event={{ ...sampleEvent, genre: 'tribute', name: 'Eagles Tribute Band' }} variant="compact" />
            <EventCard event={{ ...sampleEvent, genre: 'bigband', name: 'Big Band Swing Night' }} variant="compact" />
          </div>
        </Subsection>

        <Subsection title="List Variant">
          <Card padding="none">
            <EventCard event={sampleEvent} variant="list" />
            <EventCard event={{ ...sampleEvent, genre: 'blues', name: 'Delta Blues Showcase' }} variant="list" />
            <EventCard event={{ ...sampleEvent, genre: 'tribute', name: 'Fleetwood Mac Tribute' }} variant="list" />
            <EventCard event={{ ...sampleEvent, genre: 'rock', name: 'Classic Rock Night' }} variant="list" />
          </Card>
        </Subsection>
      </Section>

      {/* ==========================================
       * EFFECTS
       * ========================================== */}
      <Section
        title="Effects & Utilities"
        description="Visual effects for creating depth and focus"
      >
        <Subsection title="Glow Effects">
          <div className="flex flex-wrap gap-6">
            <div className="w-24 h-24 rounded-xl bg-primary-500 glow flex items-center justify-center">
              <span className="text-white text-xs">Small</span>
            </div>
            <div className="w-24 h-24 rounded-xl bg-primary-500 glow-md flex items-center justify-center">
              <span className="text-white text-xs">Medium</span>
            </div>
            <div className="w-24 h-24 rounded-xl bg-primary-500 glow-lg flex items-center justify-center">
              <span className="text-white text-xs">Large</span>
            </div>
          </div>
        </Subsection>

        <Subsection title="Glass Morphism">
          <div className="relative h-48 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500" />
            <div className="absolute inset-4 glass rounded-xl p-6 flex items-center justify-center">
              <span className="text-white font-semibold">Glass Effect</span>
            </div>
          </div>
        </Subsection>

        <Subsection title="Hover Lift">
          <div className="flex gap-6">
            <div className="w-32 h-32 rounded-xl bg-neutral-800 border border-neutral-700 hover-lift flex items-center justify-center cursor-pointer">
              <span className="text-neutral-400 text-sm">Hover me</span>
            </div>
          </div>
        </Subsection>

        <Subsection title="Text Gradient">
          <p className="text-4xl font-bold text-gradient">
            Live Music Never Sounded Better
          </p>
        </Subsection>
      </Section>

      {/* ==========================================
       * MOTION
       * ========================================== */}
      <Section
        title="Motion System"
        description="Musical timing for animations and transitions"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Duration Tokens</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Sixteenth</span>
                  <code className="text-primary-400">75ms</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Eighth</span>
                  <code className="text-primary-400">150ms</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Quarter</span>
                  <code className="text-primary-400">250ms</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Half</span>
                  <code className="text-primary-400">400ms</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Whole</span>
                  <code className="text-primary-400">600ms</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Easing Functions</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Staccato</span>
                  <code className="text-primary-400 text-xs">cubic-bezier(0.4, 0, 1, 1)</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Legato</span>
                  <code className="text-primary-400 text-xs">cubic-bezier(0.4, 0, 0.2, 1)</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Crescendo</span>
                  <code className="text-primary-400 text-xs">cubic-bezier(0.16, 1, 0.3, 1)</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Sforzando</span>
                  <code className="text-primary-400 text-xs">cubic-bezier(0.68, -0.6, 0.32, 1.6)</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
        <p className="text-neutral-500 text-sm">
          The Venue Aurora Design System v1.0
          <br />
          Built with Tailwind CSS v4 + React + TypeScript
        </p>
      </div>
    </div>
  );
}
