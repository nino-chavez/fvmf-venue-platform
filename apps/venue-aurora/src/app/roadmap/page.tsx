import { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Strategic Roadmap | The Venue Aurora',
  description: 'Strategic roadmap and implementation plan for The Venue Aurora website redesign',
};

interface DocumentLink {
  title: string;
  href: string;
  description: string;
  date: string;
  status: 'current' | 'reference' | 'analysis';
}

export default async function RoadmapIndexPage() {
  // Get all documentation files
  const docsDir = path.join(process.cwd(), 'docs');
  const files = fs.existsSync(docsDir) ? fs.readdirSync(docsDir) : [];

  const documents: DocumentLink[] = [
    {
      title: 'Foundation Website Strategy',
      href: '/roadmap/foundation-strategy',
      description: 'Strategy for maintaining foxvalleymusicfoundation.com alongside The Venue Aurora with visual continuity, brand alignment, content separation, and migration path from Wix to Next.js.',
      date: 'December 26, 2024',
      status: 'current'
    },
    {
      title: 'Membership & Patron Integration Guide',
      href: '/roadmap/membership-integration',
      description: 'Platform comparison for nonprofit membership programs (Patreon, Stripe, Ko-fi, Little Green Light CRM), cost analysis, implementation roadmap, and recommendations for 501(c)(3) music venues.',
      date: 'December 26, 2024',
      status: 'current'
    },
    {
      title: 'Production Migration Guide',
      href: '/roadmap/production-migration',
      description: 'Complete guide for transitioning POC to production with infrastructure requirements, roles & RACI matrix, staffing needs, timeline, costs, and handoff procedures.',
      date: 'December 26, 2024',
      status: 'current'
    },
    {
      title: 'Strategic Roadmap',
      href: '/roadmap/strategic',
      description: 'Complete strategic roadmap with current status (38% complete), pending phases, cost projections, decision framework, and implementation evidence.',
      date: 'December 26, 2024',
      status: 'current'
    },
    {
      title: 'Requirements Gap Analysis',
      href: '/roadmap/gap-analysis',
      description: 'Detailed analysis comparing original functional requirements against current implementation, with completion scores and enhancement recommendations.',
      date: 'December 23, 2025',
      status: 'analysis'
    },
    {
      title: 'E-Commerce Platform Evaluation',
      href: '/roadmap/ecommerce-comparison',
      description: 'Honest comparison of e-commerce options (Shopify, BigCommerce, Custom) for merchandise, with recommendations based on venue-specific needs.',
      date: 'December 23, 2025',
      status: 'analysis'
    },
    {
      title: 'BigCommerce + Catalyst Evaluation',
      href: '/roadmap/bigcommerce-evaluation',
      description: 'Comprehensive evaluation of BigCommerce + Catalyst platform against venue requirements, including cost analysis and strategic recommendation.',
      date: 'December 23, 2025',
      status: 'reference'
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="mb-4 inline-flex items-center text-sm text-neutral-400 transition-colors hover:text-orange-500"
              >
                ← Back to Home
              </Link>
              <h1 className="text-4xl font-bold text-white">Strategic Roadmap</h1>
              <p className="mt-2 text-lg text-neutral-400">
                Implementation Planning & Decision Documentation
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-neutral-500">Version 1.0</div>
              <div className="text-sm text-neutral-500">December 23, 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Introduction */}
        <div className="mb-12 rounded-lg border border-neutral-800 bg-neutral-900/30 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">About This Documentation</h2>
          <p className="mb-4 text-neutral-300">
            This documentation suite provides comprehensive strategic planning materials for The Venue Aurora website redesign.
            These documents synthesize the original functional requirements, current implementation status, platform evaluations,
            and provide a phased roadmap with clear decision points.
          </p>
          <p className="text-neutral-300">
            These documents are intended for stakeholder review to make informed strategic and tactical decisions about
            the project's direction, priorities, and resource allocation.
          </p>
        </div>

        {/* Current Status */}
        <div className="mb-12 rounded-lg border border-orange-900/30 bg-orange-950/20 p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
            <h2 className="text-2xl font-bold text-white">Current Project Status</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-orange-500">38%</div>
              <div className="text-sm text-neutral-400">Overall Completion</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500">Phases 1-2</div>
              <div className="text-sm text-neutral-400">Complete (Deployed)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500">Phases 3-5</div>
              <div className="text-sm text-neutral-400">Pending (62% remaining)</div>
            </div>
          </div>
        </div>

        {/* Document List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Documentation</h2>

          {documents.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group block rounded-lg border border-neutral-800 bg-neutral-900/30 p-6 transition-all hover:border-orange-500/50 hover:bg-neutral-900/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-orange-500">
                      {doc.title}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        doc.status === 'current'
                          ? 'bg-orange-500/20 text-orange-400'
                          : doc.status === 'analysis'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-neutral-500/20 text-neutral-400'
                      }`}
                    >
                      {doc.status === 'current'
                        ? 'Primary Document'
                        : doc.status === 'analysis'
                        ? 'Analysis'
                        : 'Reference'}
                    </span>
                  </div>
                  <p className="mb-3 text-neutral-400">{doc.description}</p>
                  <div className="text-sm text-neutral-500">Updated: {doc.date}</div>
                </div>
                <div className="ml-4 text-neutral-600 transition-colors group-hover:text-orange-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Key Decision Points */}
        <div className="mt-12 rounded-lg border border-amber-900/30 bg-amber-950/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Key Decisions Required</h2>
          <p className="mb-6 text-neutral-300">
            Three critical decisions needed to proceed:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-6 w-6 shrink-0 rounded bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">1</div>
              <div>
                <div className="font-semibold text-white">Phase Priority</div>
                <div className="text-sm text-neutral-400">Phase 3 (E-commerce) or Phase 4 (Memberships) first?</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-6 w-6 shrink-0 rounded bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">2</div>
              <div>
                <div className="font-semibold text-white">Platform Selection</div>
                <div className="text-sm text-neutral-400">E-commerce platform (Printful/Shopify/Custom) and database (Supabase/Firebase)</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-6 w-6 shrink-0 rounded bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">3</div>
              <div>
                <div className="font-semibold text-white">Budget Approval</div>
                <div className="text-sm text-neutral-400">$25-68/month for monthly services</div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 rounded-lg border border-green-900/30 bg-green-950/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Recommended Next Steps</h2>
          <ol className="space-y-3 text-neutral-300">
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-500">1.</span>
              <span>Monitor production site analytics for 2-4 weeks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-500">2.</span>
              <span>Replace sample blog content with real venue stories</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-500">3.</span>
              <span>Review Strategic Roadmap and decide: Phase 3 or 4 first?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-500">4.</span>
              <span>Approve budget for monthly services ($25-68/month)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-500">5.</span>
              <span>Select platforms and begin implementation</span>
            </li>
          </ol>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500">
            Questions or feedback? <Link href="/contact" className="text-orange-500 hover:text-orange-400">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
