import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'The Venue Aurora is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility features and commitment to WCAG 2.1 Level AA standards.',
};

export default function AccessibilityPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Accessibility Statement
      </h1>

      <div className="prose prose-invert max-w-none space-y-8">
        {/* Commitment */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
          <p className="text-neutral-300 leading-relaxed">
            The Venue Aurora is committed to ensuring digital accessibility for people with disabilities.
            We are continually improving the user experience for everyone and applying relevant accessibility standards.
          </p>
        </section>

        {/* Conformance Status */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Conformance Status</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-primary-500 hover:text-primary-400 underline" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            <strong className="text-white">This website aims to conform to WCAG 2.1 Level AA standards.</strong>
          </p>
        </section>

        {/* Accessibility Features */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Accessibility Features</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            We have implemented the following features to ensure our website is accessible:
          </p>
          <ul className="space-y-3 text-neutral-300">
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-white">Keyboard Navigation:</strong> All interactive elements can be accessed and operated using a keyboard</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-white">Skip Navigation:</strong> Skip to main content link for screen reader users</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-white">ARIA Labels:</strong> Proper ARIA labels for screen readers and assistive technologies</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-white">Color Contrast:</strong> Sufficient color contrast ratios for text readability</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-white">Semantic HTML:</strong> Proper use of HTML5 semantic elements</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-white">Alternative Text:</strong> Descriptive alt text for images</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-white">Focus Indicators:</strong> Clear visual focus indicators for keyboard users</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-white">Responsive Design:</strong> Mobile-friendly layout that works across all devices</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-white">Reduced Motion:</strong> Respects prefers-reduced-motion settings</span>
            </li>
          </ul>
        </section>

        {/* Technical Specifications */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Technical Specifications</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            This website is built using the following technologies:
          </p>
          <ul className="space-y-2 text-neutral-300">
            <li><strong className="text-white">HTML5:</strong> Semantic markup</li>
            <li><strong className="text-white">WAI-ARIA:</strong> Accessible Rich Internet Applications</li>
            <li><strong className="text-white">CSS:</strong> Responsive design with Tailwind CSS</li>
            <li><strong className="text-white">JavaScript:</strong> Progressive enhancement with React/Next.js</li>
          </ul>
        </section>

        {/* Compatibility */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Compatibility</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            This website is designed to be compatible with the following assistive technologies:
          </p>
          <ul className="space-y-2 text-neutral-300">
            <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
            <li>Screen magnification software</li>
            <li>Voice recognition software</li>
            <li>Keyboard-only navigation</li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mt-4">
            The website is tested on recent versions of major browsers including Chrome, Firefox, Safari, and Edge.
          </p>
        </section>

        {/* Limitations */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Known Limitations</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Despite our best efforts to ensure accessibility, there may be some limitations. We are actively working to address the following:
          </p>
          <ul className="space-y-2 text-neutral-300">
            <li>Third-party content (such as embedded EventBrite widgets) may not be fully accessible</li>
            <li>Some older browsers may not fully support all features</li>
            <li>PDF documents are being reviewed for accessibility compliance</li>
          </ul>
        </section>

        {/* Feedback */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Feedback and Contact</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            We welcome your feedback on the accessibility of The Venue Aurora website. Please let us know if you encounter accessibility barriers:
          </p>
          <div className="bg-gradient-to-br from-primary-900/30 to-neutral-900 border border-primary-500/20 rounded-xl p-6">
            <ul className="space-y-3 text-neutral-300">
              <li>
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:accessibility@venueaurora.com" className="text-primary-500 hover:text-primary-400">
                  accessibility@venueaurora.com
                </a>
              </li>
              <li>
                <strong className="text-white">Phone:</strong>{' '}
                <a href="tel:+16305551234" className="text-primary-500 hover:text-primary-400">
                  (630) 555-1234
                </a>
              </li>
              <li>
                <strong className="text-white">Mail:</strong>{' '}
                <span className="text-neutral-400">
                  The Venue Aurora<br />
                  21 S. Broadway Ave.<br />
                  Aurora, IL 60505
                </span>
              </li>
            </ul>
          </div>
          <p className="text-neutral-300 leading-relaxed mt-4">
            We aim to respond to accessibility feedback within 3-5 business days.
          </p>
        </section>

        {/* Assessment */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Assessment and Testing</h2>
          <p className="text-neutral-300 leading-relaxed">
            This website has been evaluated for accessibility using:
          </p>
          <ul className="space-y-2 text-neutral-300 mt-4">
            <li>Manual testing with keyboard navigation</li>
            <li>Screen reader testing (VoiceOver, NVDA)</li>
            <li>Automated accessibility testing tools</li>
            <li>Color contrast analysis</li>
          </ul>
        </section>

        {/* Last Updated */}
        <section className="border-t border-neutral-800 pt-6">
          <p className="text-sm text-neutral-500">
            <strong className="text-neutral-400">Last Updated:</strong> December 25, 2025
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            This accessibility statement will be reviewed and updated regularly as we continue to improve our website.
          </p>
        </section>

        {/* Return Link */}
        <div className="text-center pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
