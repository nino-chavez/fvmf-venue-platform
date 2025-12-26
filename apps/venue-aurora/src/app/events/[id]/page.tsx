import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getEventById, formatEventDate, getLowestPrice, mapToGenre, calculateAvailability, getEventMedia } from '@/lib/eventbrite';
import { getEventImageUrl, getGradientFallback, hashEventId } from '@/lib/images';
import { EventDetailClient } from './EventDetailClient';
import { HeroImage } from './HeroImage';
import { MediaGallery } from '@/components/MediaGallery';
import { VideoEmbed } from '@/components/VideoEmbed';
import { EventStructuredData } from '@/components/EventStructuredData';

interface EventPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    return {
      title: 'Event Not Found | The Venue Aurora',
    };
  }

  return {
    title: `${event.name.text} | The Venue Aurora`,
    description: event.description?.text?.slice(0, 160) || `Get tickets for ${event.name.text} at The Venue Aurora`,
    openGraph: {
      title: event.name.text,
      description: event.description?.text?.slice(0, 160),
      images: event.logo?.url ? [event.logo.url] : [],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;
  const [event, media] = await Promise.all([
    getEventById(id),
    getEventMedia(id),
  ]);

  if (!event) {
    notFound();
  }

  const date = formatEventDate(event.start.local);
  const endDate = event.end?.local ? formatEventDate(event.end.local) : null;
  const price = getLowestPrice(event.ticket_classes);
  const genre = mapToGenre(event);
  const availability = calculateAvailability(event.ticket_classes);
  const imageUrl = getEventImageUrl(event.logo, genre, hashEventId(event.id), 'hero');
  const gradientFallback = getGradientFallback(genre);
  const hasMedia = media.images.length > 0 || media.videos.length > 0;

  // Format ticket classes for display
  const now = new Date();
  const ticketInfo = event.ticket_classes?.map((ticket) => {
    const salesStarted = !ticket.sales_start || new Date(ticket.sales_start) <= now;
    const salesEnded = ticket.sales_end && new Date(ticket.sales_end) < now;
    const remaining = (ticket.quantity_total || 0) - (ticket.quantity_sold || 0);
    const isAvailable = salesStarted && !salesEnded && remaining > 0 && !ticket.hidden;

    return {
      name: ticket.name,
      price: ticket.free
        ? 'Free'
        : ticket.cost?.display || `$${(ticket.cost?.value || 0) / 100}`,
      description: ticket.description,
      available: isAvailable,
      quantityRemaining: remaining,
    };
  }) || [];

  return (
    <>
      {/* Structured Data for SEO */}
      <EventStructuredData event={event} />

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <HeroImage
            src={imageUrl}
            alt={event.name.text}
            fallbackGradient={gradientFallback}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40`} />
        </div>

        {/* Back Button */}
        <div className="absolute top-24 left-4 sm:left-8 z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </Link>
        </div>

        {/* Event Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                genre === 'jazz' ? 'bg-amber-500/20 text-amber-400' :
                genre === 'blues' ? 'bg-indigo-500/20 text-indigo-400' :
                genre === 'rock' ? 'bg-red-500/20 text-red-400' :
                genre === 'tribute' ? 'bg-purple-500/20 text-purple-400' :
                genre === 'bigband' ? 'bg-emerald-500/20 text-emerald-400' :
                'bg-neutral-500/20 text-neutral-400'
              }`}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </span>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                availability === 'available' ? 'bg-green-500/20 text-green-400' :
                availability === 'limited' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {availability === 'available' ? 'On Sale' :
                 availability === 'limited' ? 'Limited Tickets' : 'Sold Out'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {event.name.text}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Event Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Date & Time Card */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Date & Time
              </h2>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">{date.full}</p>
                <p className="text-lg text-neutral-400">
                  Doors: {date.time}
                  {endDate && ` - ${endDate.time}`}
                </p>
              </div>
            </div>

            {/* Description */}
            {event.description?.text && (
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About This Event
                </h2>
                <div className="prose prose-invert prose-neutral max-w-none">
                  <p className="text-neutral-300 whitespace-pre-wrap leading-relaxed">
                    {event.description.text}
                  </p>
                </div>
              </div>
            )}

            {/* Videos */}
            {media.videos.length > 0 && (
              <VideoEmbed videos={media.videos} />
            )}

            {/* Photo Gallery */}
            {media.images.length > 0 && (
              <MediaGallery images={media.images} />
            )}

            {/* Venue Information */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Venue
              </h2>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-white">The Venue Aurora</p>
                <p className="text-neutral-400">
                  21 S. Broadway Ave. (IL Rt 25)<br />
                  Aurora, IL 60505
                </p>
                <a
                  href="https://maps.google.com/?q=21+S+Broadway+Ave,+Aurora,+IL+60505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 mt-2"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Ticket Information */}
            {ticketInfo.length > 0 && (
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                  Ticket Options
                </h2>
                <div className="space-y-4">
                  {ticketInfo.map((ticket, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border ${
                        ticket.available
                          ? 'border-neutral-700 bg-neutral-800/50'
                          : 'border-neutral-800 bg-neutral-900 opacity-60'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-white">{ticket.name}</h3>
                          {ticket.description && (
                            <p className="text-sm text-neutral-400 mt-1">{ticket.description}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary-500">{ticket.price}</p>
                          {ticket.available ? (
                            <p className="text-xs text-neutral-500">
                              {ticket.quantityRemaining > 0
                                ? `${ticket.quantityRemaining} left`
                                : 'Available'}
                            </p>
                          ) : (
                            <p className="text-xs text-red-400">Sold Out</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Checkout Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <EventDetailClient
                eventId={event.id}
                eventName={event.name.text}
                price={price}
                availability={availability}
              />
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}
