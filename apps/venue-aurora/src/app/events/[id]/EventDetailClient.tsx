'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { Availability } from '@/components/ui/EventCard';

interface EventDetailClientProps {
  eventId: string;
  eventName: string;
  price: string;
  availability: Availability;
}

export function EventDetailClient({
  eventId,
  eventName,
  price,
  availability,
}: EventDetailClientProps) {
  const router = useRouter();
  const [checkoutMode, setCheckoutMode] = useState<'button' | 'inline'>('button');
  const [isLoading, setIsLoading] = useState(true);
  const [isHttps, setIsHttps] = useState(true);
  const checkoutContainerId = `eb-checkout-${eventId}`;
  const widgetInitialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsHttps(window.location.protocol === 'https:');
    }

    // Load Eventbrite widget script
    const existingScript = document.querySelector('script[src*="eb_widgets.js"]');

    const initWidget = () => {
      setIsLoading(false);
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    } else {
      setTimeout(initWidget, 100);
    }
  }, []);

  // Initialize inline checkout when mode changes
  useEffect(() => {
    if (checkoutMode === 'inline' && !widgetInitialized.current && typeof window !== 'undefined' && window.EBWidgets) {
      widgetInitialized.current = true;

      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: eventId,
        iframeContainerId: checkoutContainerId,
        iframeContainerHeight: 500,
        onOrderComplete: () => {
          // Redirect to thank you page or show success message
          router.push(`/events/${eventId}/thank-you`);
        },
      });
    }
  }, [checkoutMode, eventId, checkoutContainerId, router]);

  const handleBuyTickets = () => {
    if (!isHttps) {
      // On HTTP, open Eventbrite in new tab
      window.open(`https://www.eventbrite.com/e/${eventId}`, '_blank');
      return;
    }

    // On HTTPS, show inline checkout
    setCheckoutMode('inline');
  };

  const handleModalCheckout = () => {
    if (typeof window === 'undefined' || !window.EBWidgets) {
      window.open(`https://www.eventbrite.com/e/${eventId}`, '_blank');
      return;
    }

    // Create modal widget
    const triggerId = `modal-trigger-${eventId}`;

    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: eventId,
      modal: true,
      modalTriggerElementId: triggerId,
      onOrderComplete: () => {
        router.push(`/events/${eventId}/thank-you`);
      },
    });

    // Trigger the modal
    document.getElementById(triggerId)?.click();
  };

  if (availability === 'soldout') {
    return (
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-500/10 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Sold Out</h3>
          <p className="text-neutral-400 mb-4">
            This event is currently sold out. Check back later for possible releases.
          </p>
          <button
            onClick={() => router.push('/')}
            className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl transition-colors"
          >
            Browse Other Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
      {/* Price Header */}
      <div className="p-6 border-b border-neutral-800">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-sm text-neutral-500">Starting from</span>
            <div className="text-3xl font-bold text-white">{price}</div>
          </div>
          {availability === 'limited' && (
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full">
              Limited
            </span>
          )}
        </div>
      </div>

      {/* Checkout Area */}
      <div className="p-6">
        {checkoutMode === 'button' ? (
          <div className="space-y-4">
            {/* Primary CTA */}
            <button
              id={`modal-trigger-${eventId}`}
              onClick={handleBuyTickets}
              disabled={isLoading}
              className="w-full py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary-500/25 transition-all hover:shadow-primary-500/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : 'Buy Tickets'}
            </button>

            {/* Alternative: Modal checkout */}
            {isHttps && (
              <button
                onClick={handleModalCheckout}
                className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Quick Checkout (Popup)
              </button>
            )}

            {/* Info text */}
            <p className="text-xs text-neutral-500 text-center">
              {isHttps
                ? 'Secure checkout powered by Eventbrite'
                : 'You will be redirected to Eventbrite to complete your purchase'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Back button */}
            <button
              onClick={() => {
                setCheckoutMode('button');
                widgetInitialized.current = false;
              }}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            {/* Inline Checkout Container */}
            <div
              id={checkoutContainerId}
              className="min-h-[500px] bg-white rounded-lg overflow-hidden"
            >
              <div className="flex items-center justify-center h-[500px]">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Trust badges */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-center gap-4 text-neutral-500 text-xs">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Guaranteed
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            All Cards
          </div>
        </div>
      </div>
    </div>
  );
}

// EBWidgets type is declared globally in @/components/EventbriteCheckout.tsx
