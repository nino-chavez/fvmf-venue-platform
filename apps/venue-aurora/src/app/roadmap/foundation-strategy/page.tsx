import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Foundation Website Strategy | The Venue Aurora',
  description: 'Strategy for maintaining Fox Valley Music Foundation website alongside The Venue Aurora with visual continuity and brand alignment.',
};

export default function FoundationStrategyPage() {
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
          <h1 className="text-4xl font-bold text-white">Foundation Website Strategy</h1>
          <p className="mt-2 text-lg text-neutral-400">
            Maintaining FoxValleyMusicFoundation.com alongside The Venue Aurora
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
              The Fox Valley Music Foundation operates two web properties with distinct but complementary purposes:
              <strong className="text-white"> foxvalleymusicfoundation.com</strong> (501c3 nonprofit) and
              <strong className="text-white"> The Venue Aurora</strong> (performance venue). This strategy ensures
              visual continuity, clear messaging hierarchy, and optimal user experience across both properties.
            </p>

            <div className="rounded-lg border border-primary-800/30 bg-neutral-900/50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">Recommended Approach</h3>
              <p className="mb-2">
                <strong className="text-primary-400">Unified Brand, Distinct Purposes</strong>
              </p>
              <ul className="ml-6 list-disc space-y-1 text-sm">
                <li>Shared color palette and typography for brand consistency</li>
                <li>Foundation site focuses on mission, education, and donations</li>
                <li>Venue site focuses on events, tickets, and entertainment</li>
                <li>Cross-linking strategy to guide users between properties</li>
                <li>Gradual migration from Wix to Next.js for cost and performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current State Analysis */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Current State Analysis</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Foundation Site */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">foxvalleymusicfoundation.com</h3>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-neutral-300">Platform</div>
                  <div className="text-neutral-400">Wix (Thunderbolt v1.16647.0)</div>
                </div>
                <div>
                  <div className="font-semibold text-neutral-300">Primary Colors</div>
                  <div className="text-neutral-400">Blues (#116dff), neutral grays</div>
                </div>
                <div>
                  <div className="font-semibold text-neutral-300">Typography</div>
                  <div className="text-neutral-400">Space Grotesk (geometric, modern)</div>
                </div>
                <div>
                  <div className="font-semibold text-neutral-300">Purpose</div>
                  <div className="text-neutral-400">Nonprofit organization site (501c3)</div>
                </div>
                <div>
                  <div className="font-semibold text-neutral-300">Monthly Cost</div>
                  <div className="text-neutral-400">~$27-45/month (Wix Business plan)</div>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-blue-900/30 bg-blue-950/20 p-3">
                <h4 className="mb-2 text-sm font-semibold text-blue-400">Issues</h4>
                <ul className="ml-4 list-disc space-y-1 text-xs text-neutral-300">
                  <li>Higher monthly cost than needed</li>
                  <li>Limited customization vs Next.js</li>
                  <li>No shared codebase with venue site</li>
                  <li>Different brand colors than venue</li>
                </ul>
              </div>
            </div>

            {/* Venue Site */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">The Venue Aurora (New)</h3>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-neutral-300">Platform</div>
                  <div className="text-neutral-400">Next.js 16 + React 19 + TypeScript</div>
                </div>
                <div>
                  <div className="font-semibold text-neutral-300">Primary Colors</div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-primary-500"></div>
                    <span className="text-neutral-400">Sunset Orange (#f97316)</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-neutral-300">Typography</div>
                  <div className="text-neutral-400">Inter (clean, professional)</div>
                </div>
                <div>
                  <div className="font-semibold text-neutral-300">Purpose</div>
                  <div className="text-neutral-400">Event ticketing & venue information</div>
                </div>
                <div>
                  <div className="font-semibold text-neutral-300">Monthly Cost</div>
                  <div className="text-neutral-400">$0 (Vercel free tier)</div>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-green-900/30 bg-green-950/20 p-3">
                <h4 className="mb-2 text-sm font-semibold text-green-400">Advantages</h4>
                <ul className="ml-4 list-disc space-y-1 text-xs text-neutral-300">
                  <li>Modern tech stack with full control</li>
                  <li>$0 hosting cost (Vercel free tier)</li>
                  <li>Design system with tokens</li>
                  <li>Fast performance, excellent SEO</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Continuity Strategy */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Visual Continuity Strategy</h2>

          <div className="space-y-6">
            {/* Unified Design System */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">1. Unified Design System</h3>

              <div className="space-y-4 text-neutral-300">
                <p className="text-sm">
                  Create a shared design language that works across both properties while respecting their
                  distinct purposes.
                </p>

                <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                  <h4 className="mb-3 font-semibold text-white">Shared Brand Colors</h4>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <div className="mb-2 text-sm font-medium text-neutral-400">Primary Palette</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded bg-primary-500"></div>
                          <div className="text-sm">
                            <div className="font-medium text-white">Sunset Orange</div>
                            <div className="text-neutral-500">#f97316 - Energy, warmth, music</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded bg-neutral-950"></div>
                          <div className="text-sm">
                            <div className="font-medium text-white">Deep Slate</div>
                            <div className="text-neutral-500">#020617 - Sophistication, focus</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 text-sm font-medium text-neutral-400">Accent Colors</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded bg-blue-500"></div>
                          <div className="text-sm">
                            <div className="font-medium text-white">Foundation Blue</div>
                            <div className="text-neutral-500">#3b82f6 - Trust, nonprofit</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded bg-amber-500"></div>
                          <div className="text-sm">
                            <div className="font-medium text-white">Jazz Amber</div>
                            <div className="text-neutral-500">#f59e0b - Genre accent</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                  <h4 className="mb-3 font-semibold text-white">Typography</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                      <span className="text-neutral-400">Primary Font</span>
                      <span className="font-sans font-semibold text-white">Inter</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                      <span className="text-neutral-400">Alternative (Foundation)</span>
                      <span className="font-sans text-white">Space Grotesk (keep if preferred)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Monospace (code/data)</span>
                      <span className="font-mono text-sm text-white">JetBrains Mono</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-neutral-500">
                    Recommendation: Adopt Inter for both sites for consistency, or keep Space Grotesk as Foundation's
                    identity while using Inter for venue.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Strategy */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">2. Content Strategy & Site Separation</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-900">
                    <tr>
                      <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Content Type</th>
                      <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Foundation Site</th>
                      <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Venue Site</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 bg-neutral-900/30">
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">Events/Tickets</td>
                      <td className="px-4 py-3 text-neutral-400">Link to venue site</td>
                      <td className="px-4 py-3 text-green-400">✓ Primary home</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">Mission/About</td>
                      <td className="px-4 py-3 text-green-400">✓ Primary home</td>
                      <td className="px-4 py-3 text-neutral-400">Brief mention + link</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">Donations</td>
                      <td className="px-4 py-3 text-green-400">✓ Primary home</td>
                      <td className="px-4 py-3 text-neutral-400">CTA button → foundation</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">Programs/Education</td>
                      <td className="px-4 py-3 text-green-400">✓ Primary home</td>
                      <td className="px-4 py-3 text-neutral-400">Link to foundation</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">Memberships</td>
                      <td className="px-4 py-3 text-neutral-400">Link to venue</td>
                      <td className="px-4 py-3 text-green-400">✓ Primary home</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">Venue Info</td>
                      <td className="px-4 py-3 text-neutral-400">Link to venue</td>
                      <td className="px-4 py-3 text-green-400">✓ Primary home</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">Blog/News</td>
                      <td className="px-4 py-3 text-neutral-400">Impact stories</td>
                      <td className="px-4 py-3 text-green-400">✓ Event features</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Navigation & Cross-Linking */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">3. Navigation & Cross-Linking Strategy</h3>

              <div className="space-y-4">
                <div className="rounded-lg border border-blue-900/30 bg-blue-950/20 p-4">
                  <h4 className="mb-2 font-semibold text-blue-400">Foundation Site Navigation</h4>
                  <ul className="ml-4 list-disc space-y-1 text-sm text-neutral-300">
                    <li><strong className="text-white">About</strong> - Mission, history, board, impact</li>
                    <li><strong className="text-white">Programs</strong> - Music education, scholarships, workshops</li>
                    <li><strong className="text-white">Donate</strong> - One-time & recurring donations</li>
                    <li><strong className="text-white">The Venue</strong> → Link to thevenueaurora.com (primary CTA)</li>
                    <li><strong className="text-white">Contact</strong> - Foundation-specific contact</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-primary-900/30 bg-primary-950/20 p-4">
                  <h4 className="mb-2 font-semibold text-primary-400">Venue Site Navigation (Current)</h4>
                  <ul className="ml-4 list-disc space-y-1 text-sm text-neutral-300">
                    <li><strong className="text-white">Events</strong> - Browse, filter, buy tickets</li>
                    <li><strong className="text-white">About</strong> - Brief venue info + "Learn about FVMF" link</li>
                    <li><strong className="text-white">Membership</strong> - Patron tiers (NEW)</li>
                    <li><strong className="text-white">Blog</strong> - Event features, artist spotlights</li>
                    <li><strong className="text-white">Support</strong> → Link to foundation donate page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Options */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Implementation Options</h2>

          <div className="space-y-6">
            {/* Option 1: Keep Wix */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20 font-bold text-yellow-500">1</div>
                <h3 className="text-xl font-semibold text-white">Keep Wix, Update Branding</h3>
                <span className="rounded bg-yellow-500/20 px-2 py-1 text-xs text-yellow-400">Quick Win</span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-green-400">✓ Advantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>No migration effort required</li>
                    <li>Foundation team already familiar with Wix</li>
                    <li>Can update colors/fonts via Wix editor</li>
                    <li>Immediate implementation (1-2 days)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-red-400">✗ Disadvantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>Continues $27-45/month Wix cost</li>
                    <li>Limited customization vs Next.js</li>
                    <li>Separate codebase to maintain</li>
                    <li>No shared components with venue site</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-neutral-800 bg-neutral-900/50 p-3">
                <h4 className="mb-2 text-sm font-semibold text-white">Action Items</h4>
                <ul className="ml-4 list-disc space-y-1 text-xs text-neutral-300">
                  <li>Update Wix theme to use Sunset Orange (#f97316) as primary color</li>
                  <li>Change font to Inter (or keep Space Grotesk if preferred)</li>
                  <li>Add prominent "Visit The Venue Aurora" CTA in header</li>
                  <li>Update footer to cross-link both properties</li>
                </ul>
              </div>
            </div>

            {/* Option 2: Migrate to Next.js */}
            <div className="rounded-lg border border-green-900/30 bg-green-950/10 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 font-bold text-green-500">2</div>
                <h3 className="text-xl font-semibold text-white">Migrate to Next.js + Sanity</h3>
                <span className="rounded bg-green-500/20 px-2 py-1 text-xs text-green-400">Recommended</span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-green-400">✓ Advantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>$0 hosting cost (Vercel free tier)</li>
                    <li>Shared codebase with venue site</li>
                    <li>Reuse components (nav, footer, forms)</li>
                    <li>Perfect brand consistency</li>
                    <li>Better performance and SEO</li>
                    <li>Single design system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-red-400">✗ Disadvantages</h4>
                  <ul className="ml-6 list-disc space-y-1 text-sm">
                    <li>Migration effort: 20-30 hours</li>
                    <li>Content migration from Wix to Sanity</li>
                    <li>Foundation team learns new CMS</li>
                    <li>4-6 week timeline</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-neutral-800 bg-neutral-900/50 p-3">
                <h4 className="mb-2 text-sm font-semibold text-white">Implementation Plan</h4>
                <ol className="ml-4 list-decimal space-y-2 text-xs text-neutral-300">
                  <li><strong>Week 1:</strong> Set up foundation site in Next.js with Sanity CMS</li>
                  <li><strong>Week 2-3:</strong> Build foundation-specific pages (programs, donate, impact)</li>
                  <li><strong>Week 3-4:</strong> Migrate content from Wix, configure donation forms</li>
                  <li><strong>Week 4-5:</strong> Testing, DNS migration, launch</li>
                  <li><strong>Week 6:</strong> Cancel Wix subscription</li>
                </ol>
              </div>

              <div className="mt-4 rounded-lg border border-green-900/30 bg-green-950/20 p-3">
                <h4 className="mb-2 text-sm font-semibold text-green-400">Cost Savings</h4>
                <p className="text-xs text-neutral-300">
                  Wix: $27-45/month → Next.js: $0/month = <strong className="text-white">$324-540/year savings</strong>
                </p>
              </div>
            </div>

            {/* Option 3: Hybrid */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 font-bold text-blue-500">3</div>
                <h3 className="text-xl font-semibold text-white">Hybrid: Gradual Migration</h3>
                <span className="rounded bg-blue-500/20 px-2 py-1 text-xs text-blue-400">Balanced</span>
              </div>

              <div className="space-y-3 text-sm text-neutral-300">
                <p>
                  Keep Wix short-term with brand updates, then migrate to Next.js when resources allow.
                </p>

                <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                  <h4 className="mb-2 font-semibold text-white">Phase 1 (Now): Quick Brand Alignment</h4>
                  <ul className="ml-4 list-disc space-y-1 text-xs">
                    <li>Update Wix theme to match venue branding</li>
                    <li>Add cross-linking between sites</li>
                    <li>Cost: $0, Time: 1-2 days</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                  <h4 className="mb-2 font-semibold text-white">Phase 2 (Q1 2025): Migrate to Next.js</h4>
                  <ul className="ml-4 list-disc space-y-1 text-xs">
                    <li>Build foundation site in Next.js</li>
                    <li>Migrate content, test, launch</li>
                    <li>Cancel Wix subscription</li>
                    <li>Cost: 20-30 hours dev time, Time: 4-6 weeks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Approach */}
        <section className="mb-12 rounded-lg border border-primary-900/30 bg-primary-950/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Recommended Approach</h2>

          <div className="space-y-4 text-neutral-300">
            <p className="text-lg font-semibold text-white">
              Option 3: Hybrid - Gradual Migration
            </p>

            <p>
              This approach balances immediate needs with long-term strategy:
            </p>

            <ol className="ml-6 list-decimal space-y-3">
              <li>
                <strong className="text-white">Immediate (1-2 days):</strong> Update Wix site branding
                <ul className="ml-6 mt-1 list-disc space-y-1 text-sm">
                  <li>Change primary color to Sunset Orange (#f97316)</li>
                  <li>Add "Visit The Venue Aurora" CTA in header</li>
                  <li>Update footer with cross-links</li>
                  <li>Ensure consistent messaging about 501(c)(3) status</li>
                </ul>
              </li>

              <li>
                <strong className="text-white">Q1 2025 (4-6 weeks):</strong> Migrate to Next.js
                <ul className="ml-6 mt-1 list-disc space-y-1 text-sm">
                  <li>Build foundation site using venue codebase as foundation</li>
                  <li>Reuse navigation, footer, design tokens</li>
                  <li>Add Stripe donation integration (with nonprofit 2.2% rate)</li>
                  <li>Migrate content to Sanity CMS</li>
                  <li>Launch and cancel Wix ($324-540/year savings)</li>
                </ul>
              </li>

              <li>
                <strong className="text-white">Ongoing:</strong> Maintain unified brand
                <ul className="ml-6 mt-1 list-disc space-y-1 text-sm">
                  <li>Share components between foundation and venue sites</li>
                  <li>Coordinate content updates across properties</li>
                  <li>Track analytics for both sites in unified dashboard</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Technical Specifications for Next.js Migration</h2>

          <div className="space-y-6">
            {/* Shared Components */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Shared Components</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-900">
                    <tr>
                      <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Component</th>
                      <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Foundation Version</th>
                      <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Venue Version</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 bg-neutral-900/30">
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">Navigation</td>
                      <td className="px-4 py-3 text-neutral-300">About, Programs, Donate, The Venue →</td>
                      <td className="px-4 py-3 text-neutral-300">Events, About, Membership, Support →</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">Footer</td>
                      <td className="px-4 py-3 text-green-400" colSpan={2}>✓ Shared (with site-specific links)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">Hero Section</td>
                      <td className="px-4 py-3 text-neutral-300">Impact-focused messaging</td>
                      <td className="px-4 py-3 text-neutral-300">Event-focused messaging</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">CTA Buttons</td>
                      <td className="px-4 py-3 text-green-400" colSpan={2}>✓ Shared (same styling)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">Forms</td>
                      <td className="px-4 py-3 text-neutral-300">Donation, contact, volunteer</td>
                      <td className="px-4 py-3 text-neutral-300">Newsletter, contact, membership</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Monorepo Structure */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Monorepo Structure (Optional)</h3>

              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <pre className="text-xs text-neutral-300">
{`fox-valley-music/
├── apps/
│   ├── venue/          # The Venue Aurora
│   └── foundation/     # FVMF site
├── packages/
│   ├── ui/            # Shared components
│   ├── design-tokens/ # Colors, fonts, spacing
│   └── utils/         # Shared utilities
└── package.json`}
                </pre>
              </div>

              <p className="mt-3 text-sm text-neutral-400">
                This structure allows both sites to share components, design tokens, and utilities while
                maintaining independent deployment pipelines.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12 rounded-lg border border-green-900/30 bg-green-950/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Next Steps</h2>
          <ol className="space-y-3 text-neutral-300">
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-500">1.</span>
              <span><strong>Immediate:</strong> Update Wix site branding (Sunset Orange, cross-links)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-500">2.</span>
              <span><strong>Review:</strong> Board approval for Next.js migration timeline</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-500">3.</span>
              <span><strong>Plan:</strong> Content inventory and migration strategy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-500">4.</span>
              <span><strong>Execute:</strong> Build foundation site in Next.js (Q1 2025)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-500">5.</span>
              <span><strong>Launch:</strong> Migrate DNS, cancel Wix, save $324-540/year</span>
            </li>
          </ol>
        </section>

        {/* Contact */}
        <div className="text-center">
          <p className="text-neutral-500">
            Questions about this strategy? <Link href="/contact" className="text-primary-500 hover:text-primary-400">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
