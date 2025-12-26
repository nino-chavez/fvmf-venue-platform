import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Membership & Patron Integration Guide | The Venue Aurora',
  description: 'Comprehensive evaluation of membership platforms for nonprofit music venues, including Patreon, GitHub Sponsors, Ko-fi, and custom Stripe integration.',
};

export default function MembershipIntegrationPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/roadmap"
            className="mb-4 inline-flex items-center text-sm text-neutral-400 transition-colors hover:text-primary-500"
          >
            ← Back to Roadmap
          </Link>
          <h1 className="text-4xl font-bold text-white">Membership & Patron Integration Guide</h1>
          <p className="mt-2 text-lg text-neutral-400">
            Platform Comparison for 501(c)(3) Nonprofit Music Venues
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-neutral-500">
            <span>Updated: December 26, 2024</span>
            <span>•</span>
            <span>Version 1.0</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Executive Summary */}
        <section className="mb-12 rounded-lg border border-primary-900/30 bg-primary-950/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Executive Summary</h2>
          <div className="space-y-4 text-neutral-300">
            <p>
              The Venue Aurora, as a 501(c)(3) nonprofit music venue operated by the Fox Valley Music Foundation,
              can benefit significantly from a membership/patron support program. This document evaluates five
              platform options for implementing recurring donor memberships, plus Little Green Light CRM as a
              comprehensive donor management solution.
            </p>

            <div className="rounded-lg border border-primary-800/30 bg-neutral-900/50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">Recommended Approach</h3>
              <p className="mb-2">
                <strong className="text-primary-400">Option 1 (Best Value):</strong> Custom Stripe Integration with tiered membership levels
              </p>
              <p className="mb-2 text-sm">
                <strong className="text-blue-400">Option 2 (Full-Featured):</strong> Little Green Light CRM + Stripe for complete donor management ecosystem
              </p>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Best for nonprofit tax compliance (501(c)(3) discount available)</li>
                <li>Full control over branding and donor experience</li>
                <li>Seamless integration with existing Next.js site</li>
                <li>Lowest total cost: 2.2% + $0.30 per transaction (vs 2.9% standard)</li>
                <li>Professional donor management with email receipts</li>
              </ul>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-4">
                <div className="text-2xl font-bold text-green-500">2.2%</div>
                <div className="text-sm text-neutral-400">Stripe Nonprofit Fee</div>
                <div className="mt-1 text-xs text-neutral-500">(vs 2.9% standard rate)</div>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-4">
                <div className="text-2xl font-bold text-blue-500">$0</div>
                <div className="text-sm text-neutral-400">Platform Monthly Fee</div>
                <div className="mt-1 text-xs text-neutral-500">(pay only transaction fees)</div>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-4">
                <div className="text-2xl font-bold text-primary-500">100%</div>
                <div className="text-sm text-neutral-400">Control & Branding</div>
                <div className="mt-1 text-xs text-neutral-500">(no third-party redirects)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Comparison Table */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Platform Comparison</h2>

          <div className="overflow-x-auto rounded-lg border border-neutral-800">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900">
                <tr>
                  <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Platform</th>
                  <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Transaction Fee</th>
                  <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Platform Fee</th>
                  <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Monthly Cost</th>
                  <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Nonprofit Support</th>
                  <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">API/Integration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 bg-neutral-900/30">
                <tr className="hover:bg-neutral-900/50">
                  <td className="px-4 py-3 font-medium text-white">
                    Custom Stripe
                    <span className="ml-2 rounded bg-green-500/20 px-2 py-0.5 text-xs text-green-400">Recommended</span>
                  </td>
                  <td className="px-4 py-3 text-neutral-300">2.2% + $0.30</td>
                  <td className="px-4 py-3 text-neutral-300">0%</td>
                  <td className="px-4 py-3 text-neutral-300">$0</td>
                  <td className="px-4 py-3 text-green-400">✓ Yes (discount available)</td>
                  <td className="px-4 py-3 text-green-400">✓ Full REST API</td>
                </tr>
                <tr className="hover:bg-neutral-900/50">
                  <td className="px-4 py-3 font-medium text-white">Patreon</td>
                  <td className="px-4 py-3 text-neutral-300">Payment processor fees</td>
                  <td className="px-4 py-3 text-neutral-300">10%</td>
                  <td className="px-4 py-3 text-neutral-300">$0</td>
                  <td className="px-4 py-3 text-yellow-400">⚠ Tax forms only</td>
                  <td className="px-4 py-3 text-green-400">✓ API v2</td>
                </tr>
                <tr className="hover:bg-neutral-900/50">
                  <td className="px-4 py-3 font-medium text-white">Ko-fi</td>
                  <td className="px-4 py-3 text-neutral-300">Payment processor fees</td>
                  <td className="px-4 py-3 text-neutral-300">0% (donations)<br />5% (memberships)</td>
                  <td className="px-4 py-3 text-neutral-300">$6-8 (Gold tier)</td>
                  <td className="px-4 py-3 text-neutral-400">✗ No specific support</td>
                  <td className="px-4 py-3 text-yellow-400">⚠ Limited webhooks</td>
                </tr>
                <tr className="hover:bg-neutral-900/50">
                  <td className="px-4 py-3 font-medium text-white">Buy Me a Coffee</td>
                  <td className="px-4 py-3 text-neutral-300">Payment processor fees</td>
                  <td className="px-4 py-3 text-neutral-300">5%</td>
                  <td className="px-4 py-3 text-neutral-300">$0</td>
                  <td className="px-4 py-3 text-neutral-400">✗ No specific support</td>
                  <td className="px-4 py-3 text-yellow-400">⚠ Basic API</td>
                </tr>
                <tr className="hover:bg-neutral-900/50">
                  <td className="px-4 py-3 font-medium text-white">GitHub Sponsors</td>
                  <td className="px-4 py-3 text-neutral-300">0% (GitHub covers fees)</td>
                  <td className="px-4 py-3 text-neutral-300">0%</td>
                  <td className="px-4 py-3 text-neutral-300">$0</td>
                  <td className="px-4 py-3 text-green-400">✓ Yes (501c6 verified)</td>
                  <td className="px-4 py-3 text-yellow-400">⚠ GitHub-only</td>
                </tr>
                <tr className="bg-blue-950/20 hover:bg-blue-950/30">
                  <td className="px-4 py-3 font-medium text-white">
                    Little Green Light CRM
                    <span className="ml-2 rounded bg-blue-500/20 px-2 py-0.5 text-xs text-blue-400">Full CRM</span>
                  </td>
                  <td className="px-4 py-3 text-neutral-300">2.2% + $0.30 (via Stripe)</td>
                  <td className="px-4 py-3 text-neutral-300">0%</td>
                  <td className="px-4 py-3 text-neutral-300">$45-135</td>
                  <td className="px-4 py-3 text-green-400">✓ Yes (nonprofit-focused)</td>
                  <td className="px-4 py-3 text-green-400">✓ Full donor CRM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-amber-900/30 bg-amber-950/20 p-4">
              <p className="text-sm text-neutral-300">
                <strong className="text-amber-400">Note:</strong> All platforms charge payment processor fees (typically 2.9% + $0.30 for credit cards).
                Stripe for Nonprofits reduces this to 2.2% + $0.30, making it the most cost-effective option.
              </p>
            </div>

            <div className="rounded-lg border border-blue-900/30 bg-blue-950/20 p-4">
              <p className="text-sm text-neutral-300">
                <strong className="text-blue-400">Little Green Light Note:</strong> LGL is a complete donor management CRM, not just a payment platform.
                It partners with Stripe/PayPal for payment processing and provides comprehensive donor tracking, campaign management,
                volunteer management, event management, and advanced reporting. Monthly cost is based on constituent count (starting at $45/month).
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Platform Analysis */}
        <section className="mb-12 space-y-8">
          <h2 className="text-2xl font-bold text-white">Detailed Platform Analysis</h2>

          {/* Custom Stripe Integration */}
          <div className="rounded-lg border border-green-900/30 bg-green-950/10 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-green-500/20 p-2">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">1. Custom Stripe Integration (Recommended)</h3>
            </div>

            <div className="space-y-4 text-neutral-300">
              <p>
                Build a custom membership system using Stripe Billing and Subscriptions API, fully integrated into
                The Venue Aurora website with complete control over branding, donor experience, and tax compliance.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-green-400">✓ Advantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>Lowest fees: 2.2% + $0.30 per transaction (nonprofit rate)</li>
                    <li>100% control over branding and user experience</li>
                    <li>Tax-compliant donation receipts automatically generated</li>
                    <li>Seamless integration with existing Next.js/React site</li>
                    <li>Professional donor dashboard with subscription management</li>
                    <li>Full API access for custom features and reporting</li>
                    <li>PCI compliance handled by Stripe Elements</li>
                    <li>Support for one-time and recurring donations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-red-400">✗ Disadvantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>Requires development time (estimated 20-40 hours)</li>
                    <li>Need to build donor discovery features from scratch</li>
                    <li>No built-in social community features</li>
                    <li>Ongoing maintenance responsibility</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <h4 className="mb-2 font-semibold text-white">Implementation Estimate</h4>
                <div className="grid gap-3 text-sm md:grid-cols-3">
                  <div>
                    <div className="text-neutral-400">Development Time</div>
                    <div className="font-semibold text-white">20-40 hours</div>
                  </div>
                  <div>
                    <div className="text-neutral-400">Monthly Cost</div>
                    <div className="font-semibold text-white">$0 (transaction fees only)</div>
                  </div>
                  <div>
                    <div className="text-neutral-400">Effective Fee Rate</div>
                    <div className="font-semibold text-white">2.2% + $0.30</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-blue-900/30 bg-blue-950/20 p-4">
                <h4 className="mb-2 font-semibold text-blue-400">Recommended Membership Tiers</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">🎵 Music Lover</span>
                    <span className="text-neutral-400">$5/month - Newsletter + early event announcements</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">🎸 Backstage Supporter</span>
                    <span className="text-neutral-400">$15/month - Above + priority seating + discounts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">🎤 VIP Patron</span>
                    <span className="text-neutral-400">$50/month - Above + meet & greets + exclusive events</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">🏆 Founding Benefactor</span>
                    <span className="text-neutral-400">$100+/month - All benefits + name on donor wall</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Patreon */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">2. Patreon</h3>

            <div className="space-y-4 text-neutral-300">
              <p>
                Established creator membership platform with built-in community features and patron discovery.
                As of August 2025, Patreon now charges a flat 10% platform fee for all new creators.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-green-400">✓ Advantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>Built-in patron discovery and community features</li>
                    <li>No upfront development required</li>
                    <li>Established platform with creator credibility</li>
                    <li>API v2 for custom integrations</li>
                    <li>Automatic tax form handling for nonprofits</li>
                    <li>Mobile apps for patron engagement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-red-400">✗ Disadvantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>10% platform fee (high for nonprofit margins)</li>
                    <li>Limited branding control (Patreon-branded experience)</li>
                    <li>Patrons redirected off venue website</li>
                    <li>No specific nonprofit discount program</li>
                    <li>API v1 deprecated, v2 migration required</li>
                    <li>Users must create Patreon accounts</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <h4 className="mb-2 font-semibold text-white">Cost Example</h4>
                <p className="text-sm text-neutral-400">
                  On $100 in monthly memberships: <strong className="text-white">$10 platform fee</strong> + payment processing fees
                  (effectively ~13-14% total). Compare to Stripe nonprofit: ~$2.50 total.
                </p>
              </div>
            </div>
          </div>

          {/* Ko-fi */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">3. Ko-fi</h3>

            <div className="space-y-4 text-neutral-300">
              <p>
                Creator-friendly platform offering one link for donations, memberships, and shop sales.
                Ko-fi Gold ($6-8/month) removes membership fees but still charges 5% on shop/commission sales.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-green-400">✓ Advantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>0% fee on donations (payment processing only)</li>
                    <li>Ko-fi Gold removes 5% membership fees</li>
                    <li>Simple, fast setup with no technical knowledge required</li>
                    <li>Supporters can donate without creating accounts</li>
                    <li>Membership tiers, shop, and commissions in one platform</li>
                    <li>Lower fees than Patreon for small nonprofits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-red-400">✗ Disadvantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>$6-8/month for Ko-fi Gold to eliminate membership fees</li>
                    <li>Limited API and integration capabilities</li>
                    <li>Basic webhook support only</li>
                    <li>Less professional appearance than custom solution</li>
                    <li>No specific nonprofit programs or tax features</li>
                    <li>Limited customization of donor experience</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <h4 className="mb-2 font-semibold text-white">Best Use Case</h4>
                <p className="text-sm text-neutral-400">
                  Good for venues wanting quick setup with minimal technical work and willing to accept limited
                  integration. Better for one-time donations than recurring memberships.
                </p>
              </div>
            </div>
          </div>

          {/* Buy Me a Coffee */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">4. Buy Me a Coffee</h3>

            <div className="space-y-4 text-neutral-300">
              <p>
                Fast, clean tipping platform focused on simplicity. Charges 5% platform fee on all transactions
                including memberships, with supporters able to donate without creating accounts.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-green-400">✓ Advantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>Extremely fast and simple setup</li>
                    <li>No monthly fees (transaction fees only)</li>
                    <li>Supporters don't need to create accounts</li>
                    <li>Clean, friendly interface</li>
                    <li>Good for casual one-time donations</li>
                    <li>Mobile-optimized experience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-red-400">✗ Disadvantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>5% platform fee on ALL transactions (no opt-out)</li>
                    <li>Basic API with limited capabilities</li>
                    <li>Less professional for nonprofit use case</li>
                    <li>No nonprofit-specific features or tax support</li>
                    <li>Limited membership management features</li>
                    <li>No donor discovery features</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <h4 className="mb-2 font-semibold text-white">Cost Comparison</h4>
                <p className="text-sm text-neutral-400">
                  5% platform fee makes this more expensive than Stripe nonprofit (2.2%) but simpler to implement.
                  Best for venues prioritizing speed over cost optimization.
                </p>
              </div>
            </div>
          </div>

          {/* GitHub Sponsors */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">5. GitHub Sponsors</h3>

            <div className="space-y-4 text-neutral-300">
              <p>
                GitHub's sponsorship platform designed for open-source contributors. GitHub covers all payment
                processing fees, making it 0% cost for recipients. However, limited to GitHub user base.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-green-400">✓ Advantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>0% fees - GitHub covers all payment processing</li>
                    <li>Nonprofit verification available (501c6 confirmed)</li>
                    <li>Integrated with developer ecosystem</li>
                    <li>Professional credibility in tech community</li>
                    <li>No monthly platform fees</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-red-400">✗ Disadvantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>Limited to GitHub users only</li>
                    <li>Not suitable for general music venue audience</li>
                    <li>No custom integration capabilities</li>
                    <li>GitHub-only branding and experience</li>
                    <li>Separate from membership benefits (per nonprofit examples)</li>
                    <li>Not designed for venue/arts nonprofits</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-amber-950/20 p-4">
                <h4 className="mb-2 font-semibold text-amber-400">⚠ Not Recommended</h4>
                <p className="text-sm text-neutral-400">
                  While GitHub Sponsors has 0% fees, it's designed for open-source software developers, not music
                  venues. The audience mismatch makes this unsuitable for The Venue Aurora.
                </p>
              </div>
            </div>
          </div>

          {/* Little Green Light CRM */}
          <div className="rounded-lg border border-blue-900/30 bg-blue-950/10 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-blue-500/20 p-2">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">6. Little Green Light CRM (Comprehensive Solution)</h3>
            </div>

            <div className="space-y-4 text-neutral-300">
              <p>
                Complete all-in-one donor management software designed specifically for nonprofits. LGL partners with
                Stripe and PayPal for payment processing while providing a comprehensive CRM ecosystem for donor tracking,
                campaign management, volunteer coordination, event planning, and advanced reporting.
              </p>

              <div className="rounded-lg border border-blue-800/30 bg-blue-900/20 p-4">
                <h4 className="mb-2 font-semibold text-blue-400">Key Distinction</h4>
                <p className="text-sm text-neutral-300">
                  Little Green Light is <strong>not a payment platform competitor</strong> to Stripe/Patreon/Ko-fi.
                  Instead, it's a full donor management CRM that uses Stripe or PayPal for payment processing.
                  Think of it as: <strong>LGL (CRM) + Stripe (Payments) = Complete Nonprofit System</strong>
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-green-400">✓ Advantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>All-in-one nonprofit CRM (donor, volunteer, event, campaign management)</li>
                    <li>Designed specifically for nonprofits with 501(c)(3) focus</li>
                    <li>Unlimited users at all pricing tiers</li>
                    <li>No setup fees, no contracts, no cancellation fees</li>
                    <li>Free 30-day trial to test full features</li>
                    <li>10% discount for annual prepayment, 5% for semi-annual</li>
                    <li>Integrates with Stripe for nonprofit 2.2% payment rate</li>
                    <li>Automatic syncing of donations to CRM database</li>
                    <li>Advanced donor segmentation and reporting</li>
                    <li>Mail merge, email campaigns, gift acknowledgements</li>
                    <li>Integrates with Mailchimp for membership lists</li>
                    <li>Rated 4.9/5 for value for money by nonprofit users</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-red-400">✗ Disadvantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>Monthly cost: $45-135 based on constituent count</li>
                    <li>Requires separate Stripe/PayPal account setup</li>
                    <li>Learning curve for full CRM features</li>
                    <li>May be overkill if you only need membership payments</li>
                    <li>Additional complexity managing CRM + payment systems</li>
                    <li>Requires staff training on CRM workflows</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <h4 className="mb-2 font-semibold text-white">Pricing Structure</h4>
                <div className="grid gap-3 text-sm md:grid-cols-3">
                  <div>
                    <div className="text-neutral-400">Base Tier</div>
                    <div className="font-semibold text-white">$45/month</div>
                    <div className="text-xs text-neutral-500">Small nonprofit (fewer constituents)</div>
                  </div>
                  <div>
                    <div className="text-neutral-400">Mid Tier</div>
                    <div className="font-semibold text-white">$75-90/month</div>
                    <div className="text-xs text-neutral-500">Medium nonprofit</div>
                  </div>
                  <div>
                    <div className="text-neutral-400">High Tier</div>
                    <div className="font-semibold text-white">$135/month</div>
                    <div className="text-xs text-neutral-500">Large nonprofit (many constituents)</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-green-900/30 bg-green-950/20 p-4">
                <h4 className="mb-2 font-semibold text-green-400">Best Use Case</h4>
                <p className="text-sm text-neutral-300">
                  Ideal for venues that want <strong>more than just membership payments</strong> - those needing comprehensive
                  donor management, volunteer coordination, event planning, campaign tracking, and advanced nonprofit reporting.
                  If you're managing multiple fundraising initiatives, volunteers, events, and donor relationships, LGL provides
                  the complete ecosystem at a price point suitable for small nonprofits.
                </p>
              </div>

              <div className="rounded-lg border border-amber-900/30 bg-amber-950/20 p-4">
                <h4 className="mb-2 font-semibold text-amber-400">⚠ Important Consideration</h4>
                <p className="text-sm text-neutral-300">
                  LGL adds $45-135/month to operating costs on top of Stripe payment fees. For venues <strong>only</strong> wanting
                  membership subscriptions without full CRM features, custom Stripe integration is more cost-effective.
                  However, if you need donor management, volunteer tracking, event coordination, and campaign analytics anyway,
                  LGL's all-in-one approach may save money compared to piecing together multiple tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Implementation Roadmap: Custom Stripe Membership</h2>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/20 font-bold text-primary-500">1</div>
                <h3 className="text-xl font-semibold text-white">Phase 1: Stripe Account Setup (Week 1)</h3>
              </div>

              <ul className="ml-11 space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Create Stripe account for Fox Valley Music Foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Apply for Stripe for Nonprofits discount (2.2% rate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Complete nonprofit verification (501c3 documentation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Set up bank account for payouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Configure tax settings and automated receipts</span>
                </li>
              </ul>

              <div className="ml-11 mt-4 rounded-lg border border-blue-900/30 bg-blue-950/20 p-3 text-sm">
                <strong className="text-blue-400">Deliverable:</strong> Verified Stripe account with nonprofit discount approved
              </div>
            </div>

            {/* Phase 2 */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/20 font-bold text-primary-500">2</div>
                <h3 className="text-xl font-semibold text-white">Phase 2: Membership Tier Design (Week 1-2)</h3>
              </div>

              <ul className="ml-11 space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Define 4 membership tiers with pricing and benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Create Stripe Products and Prices for each tier</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Design membership benefit fulfillment process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Write membership terms and conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Plan donor recognition strategy (wall, website, emails)</span>
                </li>
              </ul>

              <div className="ml-11 mt-4 rounded-lg border border-blue-900/30 bg-blue-950/20 p-3 text-sm">
                <strong className="text-blue-400">Deliverable:</strong> Membership tier structure documented and configured in Stripe
              </div>
            </div>

            {/* Phase 3 */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/20 font-bold text-primary-500">3</div>
                <h3 className="text-xl font-semibold text-white">Phase 3: Frontend Development (Week 2-4)</h3>
              </div>

              <ul className="ml-11 space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Create `/membership` page with tier comparison cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Integrate Stripe Checkout for subscription creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Build donor dashboard at `/account/membership`</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Implement Stripe Customer Portal for self-service management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Add membership CTAs to homepage and navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Create thank you page with next steps for new members</span>
                </li>
              </ul>

              <div className="ml-11 mt-4 rounded-lg border border-blue-900/30 bg-blue-950/20 p-3 text-sm">
                <strong className="text-blue-400">Deliverable:</strong> Functional membership signup flow with Stripe integration
              </div>
            </div>

            {/* Phase 4 */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/20 font-bold text-primary-500">4</div>
                <h3 className="text-xl font-semibold text-white">Phase 4: Backend & Webhooks (Week 4-5)</h3>
              </div>

              <ul className="ml-11 space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Set up Stripe webhook endpoint (`/api/webhooks/stripe`)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Handle subscription lifecycle events (created, updated, canceled)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Implement database schema for member records (Supabase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Create automated email workflows (welcome, renewal, cancellation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Build admin dashboard for membership reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Set up failed payment recovery flows</span>
                </li>
              </ul>

              <div className="ml-11 mt-4 rounded-lg border border-blue-900/30 bg-blue-950/20 p-3 text-sm">
                <strong className="text-blue-400">Deliverable:</strong> Complete backend system with automated member management
              </div>
            </div>

            {/* Phase 5 */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/20 font-bold text-primary-500">5</div>
                <h3 className="text-xl font-semibold text-white">Phase 5: Testing & Launch (Week 5-6)</h3>
              </div>

              <ul className="ml-11 space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Test complete membership flow with Stripe test mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Verify tax receipt generation and compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Test payment failures, cancellations, and refund scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Conduct user acceptance testing with board members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Switch to Stripe live mode and launch to production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span>Announce membership program via email, social media, venue signage</span>
                </li>
              </ul>

              <div className="ml-11 mt-4 rounded-lg border border-blue-900/30 bg-blue-950/20 p-3 text-sm">
                <strong className="text-blue-400">Deliverable:</strong> Live membership program accepting real subscriptions
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-green-900/30 bg-green-950/20 p-4">
            <div className="font-semibold text-green-400">Total Timeline: 5-6 weeks</div>
            <div className="text-sm text-neutral-400">Development effort: 20-40 hours depending on complexity of admin features</div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Cost Analysis & Projections</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Monthly Costs */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Monthly Operating Costs</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <span className="text-neutral-400">Platform Fee</span>
                  <span className="font-semibold text-white">$0</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <span className="text-neutral-400">Transaction Fees</span>
                  <span className="font-semibold text-white">2.2% + $0.30/tx</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <span className="text-neutral-400">Email Service (Resend)</span>
                  <span className="font-semibold text-white">$0-20</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-semibold text-white">Total Fixed Cost</span>
                  <span className="font-bold text-green-500">$0-20/month</span>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 text-xs text-neutral-400">
                Plus variable transaction fees based on membership volume. Email service free up to 3,000 emails/month.
              </div>
            </div>

            {/* Revenue Projections */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Revenue Projection Example</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">10 × Music Lover ($5/mo)</span>
                  <span className="font-semibold text-white">$50</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">5 × Backstage Supporter ($15/mo)</span>
                  <span className="font-semibold text-white">$75</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">3 × VIP Patron ($50/mo)</span>
                  <span className="font-semibold text-white">$150</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <span className="text-neutral-400">1 × Founding Benefactor ($100/mo)</span>
                  <span className="font-semibold text-white">$100</span>
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-white">Gross Monthly Revenue</span>
                  <span className="text-white">$375</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Stripe Fees (2.2% + $0.30 × 19)</span>
                  <span>-$13.95</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                  <span className="font-bold text-white">Net Monthly Revenue</span>
                  <span className="font-bold text-green-500">$361.05</span>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-green-900/30 bg-green-950/20 p-3 text-xs text-neutral-300">
                <strong className="text-green-400">Annual Impact:</strong> $4,332 in recurring revenue to support
                venue operations, artist fees, and music education programs.
              </div>
            </div>
          </div>

          {/* Platform Cost Comparison */}
          <div className="mt-6 rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Platform Cost Comparison on $375/month Revenue</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-900">
                  <tr>
                    <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Platform</th>
                    <th className="border-b border-neutral-800 px-4 py-3 text-right text-white">Platform Fee</th>
                    <th className="border-b border-neutral-800 px-4 py-3 text-right text-white">Processing Fee</th>
                    <th className="border-b border-neutral-800 px-4 py-3 text-right text-white">Total Fees</th>
                    <th className="border-b border-neutral-800 px-4 py-3 text-right text-white">Net Revenue</th>
                    <th className="border-b border-neutral-800 px-4 py-3 text-right text-white">Fee %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  <tr className="bg-green-950/20">
                    <td className="px-4 py-3 font-medium text-white">Custom Stripe</td>
                    <td className="px-4 py-3 text-right text-neutral-300">$0</td>
                    <td className="px-4 py-3 text-right text-neutral-300">$13.95</td>
                    <td className="px-4 py-3 text-right text-white">$13.95</td>
                    <td className="px-4 py-3 text-right font-semibold text-green-400">$361.05</td>
                    <td className="px-4 py-3 text-right text-green-400">3.7%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-white">Patreon</td>
                    <td className="px-4 py-3 text-right text-neutral-300">$37.50</td>
                    <td className="px-4 py-3 text-right text-neutral-300">~$13</td>
                    <td className="px-4 py-3 text-right text-white">$50.50</td>
                    <td className="px-4 py-3 text-right text-neutral-300">$324.50</td>
                    <td className="px-4 py-3 text-right text-red-400">13.5%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-white">Ko-fi (Gold)</td>
                    <td className="px-4 py-3 text-right text-neutral-300">$8</td>
                    <td className="px-4 py-3 text-right text-neutral-300">~$13</td>
                    <td className="px-4 py-3 text-right text-white">$21</td>
                    <td className="px-4 py-3 text-right text-neutral-300">$354</td>
                    <td className="px-4 py-3 text-right text-yellow-400">5.6%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-white">Buy Me a Coffee</td>
                    <td className="px-4 py-3 text-right text-neutral-300">$18.75</td>
                    <td className="px-4 py-3 text-right text-neutral-300">~$13</td>
                    <td className="px-4 py-3 text-right text-white">$31.75</td>
                    <td className="px-4 py-3 text-right text-neutral-300">$343.25</td>
                    <td className="px-4 py-3 text-right text-yellow-400">8.5%</td>
                  </tr>
                  <tr className="bg-blue-950/20">
                    <td className="px-4 py-3 font-medium text-white">LGL CRM + Stripe</td>
                    <td className="px-4 py-3 text-right text-neutral-300">$45</td>
                    <td className="px-4 py-3 text-right text-neutral-300">$13.95</td>
                    <td className="px-4 py-3 text-right text-white">$58.95</td>
                    <td className="px-4 py-3 text-right text-neutral-300">$316.05</td>
                    <td className="px-4 py-3 text-right text-blue-400">15.7%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-green-900/30 bg-green-950/20 p-3 text-sm">
                <strong className="text-green-400">Savings with Stripe:</strong> $36.55/month compared to Patreon,
                $17.80/month compared to Buy Me a Coffee. Over 12 months: <strong>$439-214 saved</strong>.
              </div>

              <div className="rounded-lg border border-blue-900/30 bg-blue-950/20 p-3 text-sm">
                <strong className="text-blue-400">LGL CRM Context:</strong> While LGL + Stripe shows highest total fee %,
                this includes a <strong>full donor management CRM</strong> (volunteer tracking, event planning, campaign management,
                advanced reporting). If you need these features anyway, LGL may cost less than piecing together separate tools.
              </div>
            </div>
          </div>
        </section>

        {/* Decision Framework */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Decision Framework</h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-green-900/30 bg-green-950/20 p-6">
              <h3 className="mb-3 text-lg font-semibold text-green-400">✓ Choose Custom Stripe If:</h3>
              <ul className="ml-6 list-disc space-y-2 text-neutral-300">
                <li>You want the lowest fees and maximum revenue retention</li>
                <li>You have 20-40 hours for development (or budget to hire developer)</li>
                <li>You want full control over branding and donor experience</li>
                <li>You need proper nonprofit tax compliance and receipts</li>
                <li>You plan to integrate memberships deeply into the venue website</li>
                <li>You want professional, scalable infrastructure for growth</li>
              </ul>
            </div>

            <div className="rounded-lg border border-yellow-900/30 bg-yellow-950/20 p-6">
              <h3 className="mb-3 text-lg font-semibold text-yellow-400">⚠ Choose Ko-fi If:</h3>
              <ul className="ml-6 list-disc space-y-2 text-neutral-300">
                <li>You need a membership program running within 1-2 days</li>
                <li>You have no development resources available</li>
                <li>You're willing to accept $6-8/month cost for Gold tier</li>
                <li>You primarily expect one-time donations vs recurring memberships</li>
                <li>You're comfortable with supporters being redirected off-site</li>
              </ul>
            </div>

            <div className="rounded-lg border border-blue-900/30 bg-blue-950/20 p-6">
              <h3 className="mb-3 text-lg font-semibold text-blue-400">⚡ Choose Little Green Light CRM If:</h3>
              <ul className="ml-6 list-disc space-y-2 text-neutral-300">
                <li>You need comprehensive donor management beyond just payments</li>
                <li>You want to track volunteers, events, campaigns, and donor relationships</li>
                <li>You need advanced reporting and donor segmentation</li>
                <li>You want an all-in-one nonprofit CRM with unlimited users</li>
                <li>Your donor/constituent count justifies $45-135/month investment</li>
                <li>You prefer turnkey nonprofit-focused software over custom development</li>
              </ul>
            </div>

            <div className="rounded-lg border border-red-900/30 bg-red-950/20 p-6">
              <h3 className="mb-3 text-lg font-semibold text-red-400">✗ Avoid Patreon If:</h3>
              <ul className="ml-6 list-disc space-y-2 text-neutral-300">
                <li>You're cost-conscious (10% platform fee is high for nonprofits)</li>
                <li>You want to maintain venue branding throughout donor experience</li>
                <li>You need nonprofit-specific tax features beyond basic forms</li>
                <li>You prefer donors stay on your website vs Patreon redirect</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12 rounded-lg border border-primary-900/30 bg-primary-950/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Recommended Next Steps</h2>
          <ol className="space-y-3 text-neutral-300">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary-500">1.</span>
              <span><strong>Board Decision:</strong> Review this analysis and approve membership program initiative</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary-500">2.</span>
              <span><strong>Platform Selection:</strong> Choose Custom Stripe (best value), Little Green Light CRM (full-featured), or Ko-fi (quick start)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary-500">3.</span>
              <span><strong>Stripe Setup:</strong> Create Stripe account and apply for nonprofit discount</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary-500">4.</span>
              <span><strong>Tier Design:</strong> Finalize membership tiers, pricing, and benefits with stakeholders</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary-500">5.</span>
              <span><strong>Development:</strong> Allocate 20-40 hours for implementation or hire developer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary-500">6.</span>
              <span><strong>Launch:</strong> Test thoroughly and announce membership program to community</span>
            </li>
          </ol>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Additional Resources</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://stripe.com/docs/billing/subscriptions/build-subscriptions"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-neutral-800 bg-neutral-900/30 p-4 transition-all hover:border-primary-500/50 hover:bg-neutral-900/50"
            >
              <h3 className="mb-2 font-semibold text-white group-hover:text-primary-500">Stripe Subscriptions Documentation</h3>
              <p className="text-sm text-neutral-400">Official guide for building subscription integrations with Stripe Billing</p>
            </a>

            <a
              href="https://paymentcloudinc.com/blog/stripe-nonprofits/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-neutral-800 bg-neutral-900/30 p-4 transition-all hover:border-primary-500/50 hover:bg-neutral-900/50"
            >
              <h3 className="mb-2 font-semibold text-white group-hover:text-primary-500">Stripe for Nonprofits Guide</h3>
              <p className="text-sm text-neutral-400">Complete guide to using Stripe with nonprofit discounts and tax compliance</p>
            </a>

            <a
              href="https://docs.patreon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-neutral-800 bg-neutral-900/30 p-4 transition-all hover:border-primary-500/50 hover:bg-neutral-900/50"
            >
              <h3 className="mb-2 font-semibold text-white group-hover:text-primary-500">Patreon API Reference</h3>
              <p className="text-sm text-neutral-400">API v2 documentation for custom Patreon integrations</p>
            </a>

            <a
              href="https://support.patreon.com/hc/en-us/articles/360004304332-Can-nonprofit-organizations-use-Patreon"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-neutral-800 bg-neutral-900/30 p-4 transition-all hover:border-primary-500/50 hover:bg-neutral-900/50"
            >
              <h3 className="mb-2 font-semibold text-white group-hover:text-primary-500">Patreon Nonprofit Support</h3>
              <p className="text-sm text-neutral-400">Official Patreon guidance for nonprofit organizations and tax forms</p>
            </a>

            <a
              href="https://www.littlegreenlight.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-neutral-800 bg-neutral-900/30 p-4 transition-all hover:border-primary-500/50 hover:bg-neutral-900/50"
            >
              <h3 className="mb-2 font-semibold text-white group-hover:text-primary-500">Little Green Light CRM</h3>
              <p className="text-sm text-neutral-400">All-in-one donor management software for nonprofits with free 30-day trial</p>
            </a>

            <a
              href="https://www.littlegreenlight.com/pricing/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-neutral-800 bg-neutral-900/30 p-4 transition-all hover:border-primary-500/50 hover:bg-neutral-900/50"
            >
              <h3 className="mb-2 font-semibold text-white group-hover:text-primary-500">Little Green Light Pricing</h3>
              <p className="text-sm text-neutral-400">Transparent pricing ($45-135/month) based on constituent count with no contracts</p>
            </a>
          </div>
        </section>

        {/* Contact */}
        <div className="text-center">
          <p className="text-neutral-500">
            Questions about this analysis? <Link href="/contact" className="text-primary-500 hover:text-primary-400">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
