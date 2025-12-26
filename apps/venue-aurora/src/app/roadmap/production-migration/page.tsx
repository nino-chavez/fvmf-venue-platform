import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Production Migration Guide | The Venue Aurora',
  description: 'Complete guide for migrating POC to production with infrastructure setup, roles, RACI matrix, and handoff procedures',
};

export default function ProductionMigrationPage() {
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
          <h1 className="text-4xl font-bold text-white">Production Migration Guide</h1>
          <p className="mt-2 text-lg text-neutral-400">
            POC to Production Transition Plan with Infrastructure, Roles & RACI
          </p>
          <div className="mt-4 flex gap-4 text-sm text-neutral-500">
            <div>Version 1.0</div>
            <div>•</div>
            <div>December 26, 2024</div>
            <div>•</div>
            <div>Status: <span className="text-amber-500">Planning</span></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Executive Summary */}
        <section className="mb-12 rounded-lg border border-primary-800/30 bg-primary-950/20 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Executive Summary</h2>
          <p className="mb-4 text-neutral-300">
            This document outlines the complete process for transitioning The Venue Aurora website from a
            proof-of-concept (POC) to a production site owned and operated by the Fox Valley Music Foundation
            board and staff. This assumes a <strong>volunteer-only model with AI assistance</strong>, resulting
            in zero ongoing costs and accelerated timeline.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-neutral-900 p-4">
              <div className="text-2xl font-bold text-primary-500">1-2 weeks</div>
              <div className="text-sm text-neutral-400">Migration Timeline (AI-assisted)</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-4">
              <div className="text-2xl font-bold text-green-500">$0/mo</div>
              <div className="text-sm text-neutral-400">Ongoing Costs (Free Tiers)</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-4">
              <div className="text-2xl font-bold text-primary-500">2 volunteers</div>
              <div className="text-sm text-neutral-400">Minimum Staffing</div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="mb-12 rounded-lg border border-neutral-800 bg-neutral-900/30 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Table of Contents</h2>
          <ol className="space-y-2 text-neutral-300">
            <li><a href="#infrastructure" className="text-primary-500 hover:text-primary-400">1. Infrastructure Requirements</a></li>
            <li><a href="#roles" className="text-primary-500 hover:text-primary-400">2. Roles & Responsibilities</a></li>
            <li><a href="#raci" className="text-primary-500 hover:text-primary-400">3. RACI Matrix</a></li>
            <li><a href="#timeline" className="text-primary-500 hover:text-primary-400">4. Migration Timeline</a></li>
            <li><a href="#costs" className="text-primary-500 hover:text-primary-400">5. Cost Analysis</a></li>
            <li><a href="#handoff" className="text-primary-500 hover:text-primary-400">6. Handoff Procedures</a></li>
            <li><a href="#training" className="text-primary-500 hover:text-primary-400">7. Training Requirements</a></li>
            <li><a href="#ongoing" className="text-primary-500 hover:text-primary-400">8. Ongoing Maintenance</a></li>
            <li><a href="#risks" className="text-primary-500 hover:text-primary-400">9. Risk Mitigation</a></li>
          </ol>
        </section>

        {/* 1. Infrastructure Requirements */}
        <section id="infrastructure" className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-white">1. Infrastructure Requirements</h2>

          {/* GitHub Organization */}
          <div className="mb-8 rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">1.1 GitHub Organization Setup</h3>
            <p className="mb-4 text-neutral-300">
              <strong className="text-green-500">FREE</strong> - GitHub Free for nonprofits ($0/month)
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Organization Name:</strong> <code className="text-primary-400">foxvalleymusicfoundation</code> or <code className="text-primary-400">venueaurora</code>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Repository:</strong> <code className="text-primary-400">venue-aurora-web</code> (public or private)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Features:</strong> Unlimited repositories, unlimited collaborators, GitHub Actions, basic branch protection
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Initial Members:</strong> 2 volunteers (Technical Lead, Web Manager)
                </div>
              </div>
            </div>
            <div className="mt-4 rounded bg-green-950/20 border border-green-900/30 p-4">
              <p className="text-sm text-green-300">
                <strong>Cost: $0/month.</strong> GitHub Free tier is sufficient for small nonprofit teams.
              </p>
            </div>
          </div>

          {/* Vercel Hosting */}
          <div className="mb-8 rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">1.2 Vercel Production Hosting</h3>
            <p className="mb-4 text-neutral-300">
              <strong className="text-green-500">FREE</strong> - Vercel Hobby Plan ($0/month) - Sufficient for nonprofits
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Project Name:</strong> <code className="text-primary-400">venue-aurora</code>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Features:</strong> Production + Preview environments, 100GB bandwidth, 100 deployments/day, auto SSL
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Domain:</strong> venueaurora.com (custom domain supported on free tier)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">SSL Certificate:</strong> Auto-provisioned by Vercel (Let's Encrypt)
                </div>
              </div>
            </div>
            <div className="mt-4 rounded bg-green-950/20 border border-green-900/30 p-4">
              <p className="text-sm text-green-300">
                <strong>Cost: $0/month.</strong> Hobby plan is perfect for small venues. Upgrade to Pro ($20/month) only if you need team collaboration or advanced analytics.
              </p>
            </div>
          </div>

          {/* Domain & DNS */}
          <div className="mb-8 rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">1.3 Domain & DNS Management</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Current Domain:</strong> venueaurora.com (check current registrar)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">DNS Provider:</strong> Cloudflare (recommended, free) or registrar's DNS
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Required Records:</strong>
                  <ul className="mt-2 ml-4 space-y-1 text-sm text-neutral-400">
                    <li>• A record: @ → Vercel IP</li>
                    <li>• CNAME record: www → venueaurora.com</li>
                    <li>• TXT record: SPF, DKIM (if email needed)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sanity CMS Setup */}
          <div className="mb-8 rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">1.4 Sanity CMS Production Setup</h3>
            <p className="mb-4 text-neutral-300">
              <strong className="text-green-500">FREE</strong> - Sanity.io Content Platform ($0/month up to 3 non-admin users)
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Create Project:</strong> Fox Valley Music Foundation organization
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Dataset:</strong> <code className="text-primary-400">production</code> (migrate from <code className="text-primary-400">development</code>)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Studio Access:</strong> Deploy Sanity Studio at <code className="text-primary-400">/studio</code> route
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">Users:</strong> Add Web Manager as Editor, board member(s) as Viewer
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-500">✓</div>
                <div>
                  <strong className="text-white">CORS Origins:</strong> Add venueaurora.com to allowed origins
                </div>
              </div>
            </div>
            <div className="mt-4 rounded bg-green-950/20 border border-green-900/30 p-4">
              <p className="text-sm text-green-300">
                <strong>Cost: $0/month.</strong> Free tier includes unlimited API requests, 3 non-admin users, 10GB assets.
              </p>
            </div>
          </div>

          {/* Environment Variables */}
          <div className="mb-8 rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">1.5 Environment Variables & Secrets</h3>
            <p className="mb-4 text-neutral-300">
              Required environment variables (stored in Vercel dashboard):
            </p>
            <div className="space-y-2 font-mono text-sm">
              <div className="rounded bg-neutral-900 p-3">
                <code className="text-primary-400">EVENTBRITE_PRIVATE_TOKEN</code> - Eventbrite API key
              </div>
              <div className="rounded bg-neutral-900 p-3">
                <code className="text-primary-400">EVENTBRITE_ORGANIZATION_ID</code> - Organization identifier
              </div>
              <div className="rounded bg-neutral-900 p-3">
                <code className="text-primary-400">NEXT_PUBLIC_SANITY_PROJECT_ID</code> - Sanity project ID
              </div>
              <div className="rounded bg-neutral-900 p-3">
                <code className="text-primary-400">NEXT_PUBLIC_SANITY_DATASET</code> - production
              </div>
              <div className="rounded bg-neutral-900 p-3">
                <code className="text-primary-400">SANITY_API_READ_TOKEN</code> - Sanity read token (for draft content)
              </div>
              <div className="rounded bg-neutral-900 p-3">
                <code className="text-primary-400">NEXT_PUBLIC_BASE_URL</code> - https://venueaurora.com
              </div>
              <div className="rounded bg-neutral-900 p-3">
                <code className="text-primary-400">NODE_ENV</code> - production
              </div>
            </div>
            <div className="mt-4 rounded bg-red-950/20 border border-red-900/30 p-4">
              <p className="text-sm text-red-300">
                <strong>Security Note:</strong> Never commit API keys to Git. Always use Vercel environment variables.
              </p>
            </div>
          </div>

          {/* Monitoring & Analytics */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">1.6 Monitoring & Analytics</h3>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold text-white">Google Analytics 4 (Free)</h4>
                <ul className="ml-4 space-y-1 text-sm text-neutral-400">
                  <li>• Track page views, events, conversions</li>
                  <li>• Measure ticket purchase funnel</li>
                  <li>• Audience demographics and behavior</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-white">Vercel Analytics (Included in Pro)</h4>
                <ul className="ml-4 space-y-1 text-sm text-neutral-400">
                  <li>• Core Web Vitals monitoring</li>
                  <li>• Real-time traffic insights</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-white">Uptime Monitoring (Optional)</h4>
                <ul className="ml-4 space-y-1 text-sm text-neutral-400">
                  <li>• UptimeRobot (Free for 50 monitors)</li>
                  <li>• Pingdom ($10/month) for advanced monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Roles & Responsibilities */}
        <section id="roles" className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-white">2. Roles & Responsibilities</h2>

          <div className="mb-4 rounded-lg border border-green-900/30 bg-green-950/20 p-4">
            <p className="text-green-300">
              <strong>Volunteer-Only Model:</strong> This plan assumes all work is done by volunteers with AI assistance (Claude Code, ChatGPT). Minimum required: 2 volunteers (Technical Lead + Web Manager).
            </p>
          </div>

          {/* Role Cards */}
          <div className="space-y-6">
            {/* Role 1: Executive Sponsor */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Executive Sponsor (Board Member)</h3>
                  <p className="text-sm text-neutral-400">Strategic oversight and approval authority</p>
                </div>
                <span className="rounded bg-red-500/20 px-3 py-1 text-xs font-medium text-red-400">Required</span>
              </div>
              <div className="space-y-3 text-neutral-300">
                <div>
                  <strong className="text-white">Responsibilities:</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>• Approve major decisions and budget expenditures</li>
                    <li>• Represent project to full board</li>
                    <li>• Resolve escalated issues</li>
                    <li>• Sign off on production deployment</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Time Commitment:</strong> 2-4 hours/month
                </div>
                <div>
                  <strong className="text-white">Technical Skills:</strong> None required
                </div>
              </div>
            </div>

            {/* Role 2: Technical Lead */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Technical Lead / Developer</h3>
                  <p className="text-sm text-neutral-400">Hands-on development and infrastructure management</p>
                </div>
                <span className="rounded bg-red-500/20 px-3 py-1 text-xs font-medium text-red-400">Required</span>
              </div>
              <div className="space-y-3 text-neutral-300">
                <div>
                  <strong className="text-white">Responsibilities:</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>• Manage GitHub repository and code reviews</li>
                    <li>• Configure and maintain Vercel deployment</li>
                    <li>• Implement new features and bug fixes</li>
                    <li>• Troubleshoot technical issues</li>
                    <li>• Security updates and dependency management</li>
                    <li>• Onboard and mentor other technical staff</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Time Commitment:</strong> 5-10 hours initially (AI-assisted), 2-4 hours/month ongoing
                </div>
                <div>
                  <strong className="text-white">Technical Skills:</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>• Basic: Git/GitHub, command line comfortable</li>
                    <li>• Helpful: Next.js, React, TypeScript (AI can guide)</li>
                    <li>• AI Tools: Claude Code, ChatGPT, GitHub Copilot</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Compensation:</strong> Volunteer
                </div>
              </div>
            </div>

            {/* Role 3: Web Manager */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Web Manager / Content Editor</h3>
                  <p className="text-sm text-neutral-400">Day-to-day content updates and monitoring</p>
                </div>
                <span className="rounded bg-red-500/20 px-3 py-1 text-xs font-medium text-red-400">Required</span>
              </div>
              <div className="space-y-3 text-neutral-300">
                <div>
                  <strong className="text-white">Responsibilities:</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>• Update blog posts and venue information</li>
                    <li>• Monitor site analytics and report issues</li>
                    <li>• Coordinate with Eventbrite for event listings</li>
                    <li>• Test site functionality after updates</li>
                    <li>• Manage content calendar</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Time Commitment:</strong> 3-5 hours/month
                </div>
                <div>
                  <strong className="text-white">Technical Skills:</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>• Basic: Sanity Studio (visual CMS), content editing</li>
                    <li>• Helpful: Markdown for blog posts</li>
                    <li>• AI Assisted: ChatGPT for content writing/editing</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Compensation:</strong> Volunteer
                </div>
              </div>
            </div>

            {/* Role 4: Marketing Coordinator */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Marketing Coordinator</h3>
                  <p className="text-sm text-neutral-400">Analytics, SEO, and social media integration</p>
                </div>
                <span className="rounded bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">Recommended</span>
              </div>
              <div className="space-y-3 text-neutral-300">
                <div>
                  <strong className="text-white">Responsibilities:</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>• Monitor and analyze web traffic</li>
                    <li>• Optimize SEO and content discoverability</li>
                    <li>• Coordinate social media links and campaigns</li>
                    <li>• Track conversion metrics (newsletter signups, ticket clicks)</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Time Commitment:</strong> 3-5 hours/month
                </div>
                <div>
                  <strong className="text-white">Technical Skills:</strong> Google Analytics, SEO basics, social media management
                </div>
              </div>
            </div>

            {/* Role 5: QA Tester */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">QA Tester / User Advocate</h3>
                  <p className="text-sm text-neutral-400">Pre-deployment testing and user feedback</p>
                </div>
                <span className="rounded bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">Recommended</span>
              </div>
              <div className="space-y-3 text-neutral-300">
                <div>
                  <strong className="text-white">Responsibilities:</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>• Test new features before production deployment</li>
                    <li>• Verify mobile/desktop compatibility</li>
                    <li>• Report bugs and usability issues</li>
                    <li>• Represent end-user perspective</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Time Commitment:</strong> 2-4 hours/month (more during major updates)
                </div>
                <div>
                  <strong className="text-white">Technical Skills:</strong> None required, detail-oriented testing mindset
                </div>
              </div>
            </div>

            {/* Role 6: DevOps/SysAdmin */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">DevOps / Systems Administrator</h3>
                  <p className="text-sm text-neutral-400">Backup, security, and infrastructure monitoring</p>
                </div>
                <span className="rounded bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">Optional (Can be combined with Technical Lead)</span>
              </div>
              <div className="space-y-3 text-neutral-300">
                <div>
                  <strong className="text-white">Responsibilities:</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>• Monitor uptime and performance</li>
                    <li>• Manage automated backups</li>
                    <li>• Security audits and updates</li>
                    <li>• DNS and domain management</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Time Commitment:</strong> 2-3 hours/month
                </div>
                <div>
                  <strong className="text-white">Technical Skills:</strong> Server administration, security best practices, networking basics
                </div>
              </div>
            </div>

            {/* Role 7: Accessibility Advocate */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Accessibility Advocate</h3>
                  <p className="text-sm text-neutral-400">WCAG compliance and inclusive design</p>
                </div>
                <span className="rounded bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">Optional (Highly Recommended for Nonprofits)</span>
              </div>
              <div className="space-y-3 text-neutral-300">
                <div>
                  <strong className="text-white">Responsibilities:</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>• Audit site for WCAG 2.1 AA compliance</li>
                    <li>• Test with screen readers and assistive technology</li>
                    <li>• Provide feedback on keyboard navigation and mobile accessibility</li>
                    <li>• Ensure new content meets accessibility standards</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Time Commitment:</strong> 2-3 hours per major update
                </div>
                <div>
                  <strong className="text-white">Technical Skills:</strong> WCAG standards knowledge, screen reader testing (VoiceOver, NVDA)
                </div>
              </div>
            </div>
          </div>

          {/* Minimum Staffing Model */}
          <div className="mt-8 rounded-lg border border-green-900/30 bg-green-950/20 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">Minimum Viable Staffing (2 Volunteers)</h3>
            <div className="space-y-3 text-neutral-300">
              <div className="flex items-start gap-3">
                <div className="text-green-500">Volunteer 1:</div>
                <div>
                  <strong>Technical Lead</strong> (AI-assisted development, infrastructure, deployments) - 5-10 hours setup, 2-4 hours/month ongoing
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-500">Volunteer 2:</div>
                <div>
                  <strong>Web Manager</strong> (Sanity Studio content editing, basic testing) - 3-5 hours/month
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-400">
              <strong>Executive Sponsor:</strong> Board member provides approval (1-2 hours total). Additional roles (Marketing, QA, Accessibility) can be added later or shared between the two volunteers.
            </p>
            <p className="mt-4 text-sm text-green-300">
              <strong>AI Leverage:</strong> Claude Code, ChatGPT, and GitHub Copilot reduce technical skill requirements and accelerate development timeline by 60-70%.
            </p>
          </div>
        </section>

        {/* 3. RACI Matrix */}
        <section id="raci" className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-white">3. RACI Matrix</h2>

          <div className="mb-4 rounded-lg border border-blue-900/30 bg-blue-950/20 p-4">
            <p className="mb-2 text-sm text-blue-300">
              <strong>RACI Legend:</strong>
            </p>
            <ul className="space-y-1 text-xs text-blue-300">
              <li><strong>R</strong> = Responsible (Does the work)</li>
              <li><strong>A</strong> = Accountable (Final authority, only ONE per task)</li>
              <li><strong>C</strong> = Consulted (Provides input before decision)</li>
              <li><strong>I</strong> = Informed (Kept updated on progress)</li>
            </ul>
          </div>

          {/* RACI Table */}
          <div className="overflow-x-auto rounded-lg border border-neutral-800">
            <table className="w-full text-sm">
              <thead className="bg-neutral-900">
                <tr>
                  <th className="border-b border-neutral-800 px-4 py-3 text-left text-white">Activity / Decision</th>
                  <th className="border-b border-neutral-800 px-4 py-3 text-center text-white">Exec Sponsor</th>
                  <th className="border-b border-neutral-800 px-4 py-3 text-center text-white">Tech Lead</th>
                  <th className="border-b border-neutral-800 px-4 py-3 text-center text-white">Web Mgr</th>
                  <th className="border-b border-neutral-800 px-4 py-3 text-center text-white">Marketing</th>
                  <th className="border-b border-neutral-800 px-4 py-3 text-center text-white">QA Tester</th>
                </tr>
              </thead>
              <tbody className="bg-neutral-900/30">
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">Approve production budget</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-neutral-500/20 px-2 py-1 text-xs font-bold text-neutral-400">I</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-neutral-500/20 px-2 py-1 text-xs font-bold text-neutral-400">I</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">Setup GitHub organization</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-neutral-500/20 px-2 py-1 text-xs font-bold text-neutral-400">I</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">Configure Vercel deployment</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-neutral-500/20 px-2 py-1 text-xs font-bold text-neutral-400">I</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span> <span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">DNS configuration</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-neutral-500/20 px-2 py-1 text-xs font-bold text-neutral-400">I</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">Production deployment sign-off</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">Code development & bug fixes</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-neutral-500/20 px-2 py-1 text-xs font-bold text-neutral-400">I</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span> <span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">Content updates (blog, pages)</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span> <span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-neutral-500/20 px-2 py-1 text-xs font-bold text-neutral-400">I</span></td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">Analytics setup & monitoring</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-neutral-500/20 px-2 py-1 text-xs font-bold text-neutral-400">I</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">SEO optimization</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">Pre-deployment testing</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">Accessibility audits</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span> <span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-neutral-500/20 px-2 py-1 text-xs font-bold text-neutral-400">I</span></td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-800 px-4 py-3 text-neutral-300">Security patches & updates</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-neutral-500/20 px-2 py-1 text-xs font-bold text-neutral-400">I</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span> <span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                  <td className="border-b border-neutral-800 px-4 py-3 text-center">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-neutral-300">Monthly reporting to board</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block rounded bg-red-500/20 px-2 py-1 text-xs font-bold text-red-400">A</span></td>
                  <td className="px-4 py-3 text-center"><span className="inline-block rounded bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">R</span></td>
                  <td className="px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="px-4 py-3 text-center"><span className="inline-block rounded bg-blue-500/20 px-2 py-1 text-xs font-bold text-blue-400">C</span></td>
                  <td className="px-4 py-3 text-center">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Migration Timeline */}
        <section id="timeline" className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-white">4. Migration Timeline (1-2 Weeks, AI-Assisted)</h2>

          <div className="mb-6 rounded-lg border border-blue-900/30 bg-blue-950/20 p-4">
            <p className="text-blue-300">
              <strong>Accelerated Timeline:</strong> With volunteer developers using AI assistance (Claude Code, ChatGPT, Copilot), migration can be completed in 1-2 weeks instead of 4-6 weeks. This assumes 2-3 focused work sessions.
            </p>
          </div>

          <div className="space-y-6">
            {/* Week 1: Setup & Deploy */}
            <div className="rounded-lg border border-primary-800/30 bg-primary-950/20 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-lg font-bold text-primary-500">1</div>
                <h3 className="text-xl font-semibold text-white">Week 1: Setup, Staging & Testing (5-8 hours total)</h3>
              </div>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary-500">□</span>
                  <span><strong>Day 1 (2 hours):</strong> Board approval, create GitHub org, create Vercel account, create Sanity project</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary-500">□</span>
                  <span><strong>Day 2 (2 hours):</strong> Transfer repository, configure environment variables (Eventbrite, Sanity, domain)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary-500">□</span>
                  <span><strong>Day 3 (2 hours):</strong> Deploy to Vercel staging, migrate Sanity content from dev to production dataset</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary-500">□</span>
                  <span><strong>Day 4 (2 hours):</strong> Test staging site (events, blog, forms), configure Google Analytics 4</span>
                </li>
              </ul>
            </div>

            {/* Week 2: Production Launch */}
            <div className="rounded-lg border border-green-800/30 bg-green-950/20 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-lg font-bold text-green-500">2</div>
                <h3 className="text-xl font-semibold text-white">Week 2: Production Launch & Monitoring (3-5 hours total)</h3>
              </div>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-500">□</span>
                  <span><strong>Day 1 (1 hour):</strong> Configure DNS records, verify SSL certificate provisioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-500">□</span>
                  <span><strong>Day 2 (1 hour):</strong> Executive Sponsor final review and go-live approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-500">□</span>
                  <span><strong>Day 3 (1 hour):</strong> Point domain to Vercel production, smoke test all sections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-500">□</span>
                  <span><strong>Day 4-7 (1-2 hours):</strong> Monitor analytics and error logs, onboard Web Manager on Sanity Studio</span>
                </li>
              </ul>
            </div>

            {/* Post-Launch (Optional) */}
            <div className="rounded-lg border border-blue-800/30 bg-blue-950/20 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-lg font-bold text-blue-500">+</div>
                <h3 className="text-xl font-semibold text-white">Post-Launch: Ongoing Optimization (Optional)</h3>
              </div>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-500">□</span>
                  <span><strong>Content Updates:</strong> Replace sample blog posts with real venue stories (Web Manager)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-500">□</span>
                  <span><strong>SEO:</strong> Submit sitemap to Google Search Console</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-500">□</span>
                  <span><strong>Analytics:</strong> Review traffic patterns and user behavior after 2-4 weeks</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Cost Analysis */}
        <section id="costs" className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-white">5. Cost Analysis</h2>

          {/* Zero-Cost Infrastructure */}
          <div className="mb-8 rounded-lg border border-green-800/30 bg-green-950/20 p-8">
            <h3 className="mb-4 text-2xl font-bold text-green-500">$0/month - Completely Free Infrastructure</h3>
            <p className="mb-6 text-neutral-300">
              All required services offer free tiers sufficient for small nonprofit venues. No monthly costs required.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-green-900/30">
                  <tr>
                    <th className="px-4 py-3 text-left text-white">Service</th>
                    <th className="px-4 py-3 text-left text-white">Free Tier</th>
                    <th className="px-4 py-3 text-right text-white">Monthly Cost</th>
                    <th className="px-4 py-3 text-left text-white">Limits / Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-green-900/20">
                    <td className="px-4 py-3 text-neutral-300">GitHub</td>
                    <td className="px-4 py-3 text-neutral-300">Free for nonprofits</td>
                    <td className="px-4 py-3 text-right font-bold text-green-500">$0</td>
                    <td className="px-4 py-3 text-xs text-neutral-400">Unlimited repos, unlimited collaborators</td>
                  </tr>
                  <tr className="border-b border-green-900/20">
                    <td className="px-4 py-3 text-neutral-300">Vercel</td>
                    <td className="px-4 py-3 text-neutral-300">Hobby (nonprofit use)</td>
                    <td className="px-4 py-3 text-right font-bold text-green-500">$0</td>
                    <td className="px-4 py-3 text-xs text-neutral-400">100GB bandwidth, custom domain, auto SSL</td>
                  </tr>
                  <tr className="border-b border-green-900/20">
                    <td className="px-4 py-3 text-neutral-300">Sanity CMS</td>
                    <td className="px-4 py-3 text-neutral-300">Free (up to 3 users)</td>
                    <td className="px-4 py-3 text-right font-bold text-green-500">$0</td>
                    <td className="px-4 py-3 text-xs text-neutral-400">Unlimited API calls, 10GB assets, 3 non-admin users</td>
                  </tr>
                  <tr className="border-b border-green-900/20">
                    <td className="px-4 py-3 text-neutral-300">Eventbrite API</td>
                    <td className="px-4 py-3 text-neutral-300">Free</td>
                    <td className="px-4 py-3 text-right font-bold text-green-500">$0</td>
                    <td className="px-4 py-3 text-xs text-neutral-400">Read-only API access (existing account)</td>
                  </tr>
                  <tr className="border-b border-green-900/20">
                    <td className="px-4 py-3 text-neutral-300">Google Analytics 4</td>
                    <td className="px-4 py-3 text-neutral-300">Free</td>
                    <td className="px-4 py-3 text-right font-bold text-green-500">$0</td>
                    <td className="px-4 py-3 text-xs text-neutral-400">Standard analytics, event tracking</td>
                  </tr>
                  <tr className="border-b border-green-900/20">
                    <td className="px-4 py-3 text-neutral-300">UptimeRobot</td>
                    <td className="px-4 py-3 text-neutral-300">Free (50 monitors)</td>
                    <td className="px-4 py-3 text-right font-bold text-green-500">$0</td>
                    <td className="px-4 py-3 text-xs text-neutral-400">5-minute intervals (optional)</td>
                  </tr>
                  <tr className="border-b border-green-900/20">
                    <td className="px-4 py-3 text-neutral-300">Domain (existing)</td>
                    <td className="px-4 py-3 text-neutral-300">Already owned</td>
                    <td className="px-4 py-3 text-right font-bold text-green-500">$0</td>
                    <td className="px-4 py-3 text-xs text-neutral-400">~$12-24/year renewal (not monthly)</td>
                  </tr>
                  <tr className="bg-green-950/30">
                    <td className="px-4 py-4 font-semibold text-white" colSpan={2}>
                      <strong>Total Monthly Cost</strong>
                    </td>
                    <td className="px-4 py-4 text-right text-2xl font-bold text-green-500">$0</td>
                    <td className="px-4 py-4 text-xs text-neutral-400">100% free infrastructure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* One-Time Setup Costs */}
          <div className="mb-8 rounded-lg border border-green-800/30 bg-green-950/20 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">One-Time Setup Costs: $0 (Volunteer Model)</h3>
            <div className="space-y-3 text-neutral-300">
              <div className="flex items-center justify-between">
                <span>Migration & setup (Volunteer Technical Lead, 5-10 hours AI-assisted)</span>
                <span className="font-semibold text-green-500">$0</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Training & onboarding (Volunteer Web Manager, 2-3 hours)</span>
                <span className="font-semibold text-green-500">$0</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Testing & QA (Integrated into setup, AI-assisted)</span>
                <span className="font-semibold text-green-500">$0</span>
              </div>
              <div className="border-t border-green-900/30 pt-3 mt-3 flex items-center justify-between">
                <span className="font-semibold text-white">Total Setup Cost (Volunteer-Only)</span>
                <span className="text-2xl font-bold text-green-500">$0</span>
              </div>
            </div>
            <div className="mt-4 rounded bg-green-900/20 border border-green-800/30 p-4">
              <p className="text-sm text-green-300">
                <strong>AI Accelerator:</strong> Claude Code, ChatGPT, and GitHub Copilot reduce technical skill requirements and eliminate need for expensive contractors.
              </p>
            </div>
          </div>

          {/* Budget Comparison */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">Budget Comparison vs. Alternatives</h3>
            <div className="space-y-3 text-neutral-300">
              <div className="flex items-center justify-between pb-2 border-b border-green-900/30 bg-green-950/10">
                <div>
                  <strong className="text-green-500">✓ Current Approach (Next.js + Vercel + GitHub + Sanity)</strong>
                  <p className="text-xs text-neutral-400">Full control, modern stack, volunteer-friendly with AI</p>
                </div>
                <span className="text-xl font-bold text-green-500">$0/mo</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <div>
                  <strong className="text-white">Wix / Squarespace</strong>
                  <p className="text-xs text-neutral-400">No code control, limited customization</p>
                </div>
                <span className="text-lg font-bold text-neutral-400">$23-49/mo</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <div>
                  <strong className="text-white">WordPress + Managed Hosting</strong>
                  <p className="text-xs text-neutral-400">Plugin maintenance burden, security concerns</p>
                </div>
                <span className="text-lg font-bold text-neutral-400">$25-95/mo</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <strong className="text-white">Custom CMS + Traditional Hosting</strong>
                  <p className="text-xs text-neutral-400">High development costs, ongoing maintenance</p>
                </div>
                <span className="text-lg font-bold text-neutral-400">$50-200/mo</span>
              </div>
            </div>
            <div className="mt-4 rounded bg-green-900/20 border border-green-800/30 p-4">
              <p className="text-sm text-green-300">
                <strong>Annual Savings vs. Wix:</strong> $276-588/year. <strong>vs. WordPress:</strong> $300-1,140/year.
              </p>
            </div>
          </div>
        </section>

        {/* More sections continue... */}
        <div className="mt-12 rounded-lg border border-amber-900/30 bg-amber-950/20 p-8 text-center">
          <p className="text-amber-300">
            <strong>Document continues with sections 6-9...</strong> This is a working draft. Additional sections (Handoff Procedures, Training Requirements, Ongoing Maintenance, and Risk Mitigation) will be added in the final version.
          </p>
        </div>

        {/* Back to Roadmap */}
        <div className="mt-12 text-center">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400"
          >
            ← Back to Strategic Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
}

