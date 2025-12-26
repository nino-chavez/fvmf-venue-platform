'use client';

import { useEffect, useState, useCallback } from 'react';

interface EventbriteCheckoutProps {
  eventId: string;
  children?: React.ReactNode;
  className?: string;
  onOrderComplete?: () => void;
  promoCode?: string;
}

// Extract event ID from Eventbrite URL or use directly
function extractEventId(eventIdOrUrl: string): string {
  // If it's already just an ID (numeric string), return it
  if (/^\d+$/.test(eventIdOrUrl)) {
    return eventIdOrUrl;
  }

  // Extract from URL like: https://www.eventbrite.com/e/event-name-tickets-1234567890
  const match = eventIdOrUrl.match(/tickets-(\d+)/);
  if (match) {
    return match[1];
  }

  // Try to extract from URL path ending with ID
  const pathMatch = eventIdOrUrl.match(/(\d{10,})/);
  if (pathMatch) {
    return pathMatch[1];
  }

  return eventIdOrUrl;
}

/**
 * Eventbrite Embedded Checkout Button
 *
 * Uses Eventbrite's official widget library to enable in-page checkout.
 * HTTPS is required for the embedded modal to work; falls back to redirect otherwise.
 */
export function EventbriteCheckoutButton({
  eventId,
  children,
  className = '',
  onOrderComplete,
  promoCode,
}: EventbriteCheckoutProps) {
  const [widgetId, setWidgetId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isHttps, setIsHttps] = useState(true);

  const cleanEventId = extractEventId(eventId);

  useEffect(() => {
    // Check if we're on HTTPS (required for embedded checkout)
    if (typeof window !== 'undefined') {
      setIsHttps(window.location.protocol === 'https:');
    }

    // Load Eventbrite widget script
    const existingScript = document.querySelector('script[src*="eb_widgets.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
      script.async = true;
      script.onload = () => {
        initializeWidget();
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded, initialize widget
      initializeWidget();
    }

    function initializeWidget() {
      // Generate unique ID for this widget instance
      const uniqueId = `eb-checkout-${cleanEventId}-${Date.now()}`;
      setWidgetId(uniqueId);
      setIsLoading(false);
    }

    return () => {
      // Cleanup if needed
    };
  }, [cleanEventId]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    // Prevent event from bubbling to parent links
    e.preventDefault();
    e.stopPropagation();

    if (typeof window === 'undefined' || !window.EBWidgets) {
      // Fallback to direct link if widget not loaded
      window.open(`https://www.eventbrite.com/e/${cleanEventId}`, '_blank');
      return;
    }

    // Create the checkout widget
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: cleanEventId,
      modal: true,
      modalTriggerElementId: widgetId,
      onOrderComplete: () => {
        console.log('Order completed for event:', cleanEventId);
        onOrderComplete?.();
      },
      ...(promoCode && { promoCode }),
    });
  }, [cleanEventId, widgetId, onOrderComplete, promoCode]);

  // Always render as button to avoid nested <a> issues
  // On non-HTTPS, clicking will open Eventbrite in a new tab
  const handleNonHttpsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://www.eventbrite.com/e/${cleanEventId}`, '_blank');
  };

  return (
    <button
      id={widgetId || undefined}
      onClick={isHttps ? handleClick : handleNonHttpsClick}
      className={className}
      disabled={isLoading}
    >
      {children || 'Get Tickets'}
    </button>
  );
}

/**
 * Eventbrite Embedded Checkout (Inline iFrame)
 *
 * Renders the checkout form directly in the page as an embedded iFrame.
 */
export function EventbriteCheckoutEmbed({
  eventId,
  onOrderComplete,
  promoCode,
  className = '',
}: EventbriteCheckoutProps & { height?: number }) {
  const [containerId] = useState(`eb-embed-${extractEventId(eventId)}-${Date.now()}`);
  const [isLoaded, setIsLoaded] = useState(false);

  const cleanEventId = extractEventId(eventId);

  useEffect(() => {
    // Load Eventbrite widget script
    const existingScript = document.querySelector('script[src*="eb_widgets.js"]');

    const initWidget = () => {
      if (typeof window !== 'undefined' && window.EBWidgets) {
        window.EBWidgets.createWidget({
          widgetType: 'checkout',
          eventId: cleanEventId,
          iframeContainerId: containerId,
          iframeContainerHeight: 500,
          onOrderComplete: () => {
            console.log('Order completed for event:', cleanEventId);
            onOrderComplete?.();
          },
          ...(promoCode && { promoCode }),
        });
        setIsLoaded(true);
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    } else {
      // Give a small delay for script to be ready
      setTimeout(initWidget, 100);
    }
  }, [cleanEventId, containerId, onOrderComplete, promoCode]);

  return (
    <div className={className}>
      <div
        id={containerId}
        className="w-full min-h-[500px] bg-neutral-900 rounded-lg"
      >
        {!isLoaded && (
          <div className="flex items-center justify-center h-[500px]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500" />
          </div>
        )}
      </div>
    </div>
  );
}

// Type declaration for Eventbrite widgets
declare global {
  interface Window {
    EBWidgets: {
      createWidget: (config: {
        widgetType: 'checkout';
        eventId: string;
        modal?: boolean;
        modalTriggerElementId?: string | null;
        iframeContainerId?: string;
        iframeContainerHeight?: number;
        onOrderComplete?: () => void;
        promoCode?: string;
      }) => void;
    };
  }
}
