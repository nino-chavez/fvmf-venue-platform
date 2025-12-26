# Fox Valley Music Foundation Migration Plan

**Status:** Ready for Implementation
**Timeline:** 12 weeks
**Budget:** $0 upfront + transaction fees only
**Created:** December 26, 2024

---

## Executive Summary

This plan migrates https://www.foxvalleymusicfoundation.com/ from Wix to Next.js 15, creating a distinct but complementary website to The Venue Aurora. Both sites will operate independently while sharing technical infrastructure, reducing costs and maintenance burden.

**Key Outcomes:**
- ✅ Unified tech stack (Next.js 15 + Sanity CMS)
- ✅ Zero monthly hosting costs
- ✅ Distinct visual identities (violet foundation vs. orange venue)
- ✅ Shared components and infrastructure
- ✅ Integrated membership/donation system (Stripe)

---

## Design System: "Nonprofit Warm"

### Visual Identity Comparison

| Aspect | Venue Aurora | FVMF Foundation |
|--------|--------------|-----------------|
| **Primary Color** | Sunset Orange (#f97316) | Warm Violet (#8b5cf6) |
| **Secondary** | Genre badges (multiple colors) | Impact Green (#22c55e) |
| **Accent** | - | Sunset Orange (brand link) |
| **Typography** | Inter (modern SaaS) | Merriweather + Source Sans 3 |
| **Tone** | Energetic, event-driven | Warm, mission-driven, hopeful |
| **Imagery** | Concert photos, performers | Student stories, community impact |

### Design Principles

**Aesthetic: "Nonprofit Warm"**
- **Approachable:** Not corporate or institutional
- **Trustworthy:** Donors need confidence in impact
- **Heartfelt:** Human stories, not just statistics
- **Hope-Driven:** Music changes lives (not guilt-driven)

**Reference Sites:**
- Charity: Water (impact storytelling)
- Khan Academy (educational mission)
- The Juilliard School (music + sophistication)

**Anti-Patterns:**
- ❌ Generic nonprofit templates (blue + orange)
- ❌ Guilt-driven dark patterns
- ❌ Stock photos of diverse hands stacking
- ❌ Overly slick corporate philanthropy

---

## Architecture: Turborepo Monorepo

### Recommended Structure

```
fvmf-venue-platform/
├── apps/
│   ├── venue-aurora/              # Existing site
│   │   ├── src/
│   │   ├── tailwind.config.ts     # Orange theme
│   │   └── package.json
│   └── fvmf-foundation/           # New site
│       ├── src/
│       ├── tailwind.config.ts     # Violet theme
│       └── package.json
├── packages/
│   ├── ui/                         # Shared shadcn/ui components
│   ├── sanity-config/             # Shared Sanity schemas
│   ├── analytics/                 # Shared Google Analytics
│   └── tsconfig/                  # Shared TypeScript configs
├── turbo.json
└── pnpm-workspace.yaml
```

### Benefits
- ✅ Shared components reduce duplication
- ✅ Consistent tooling (ESLint, Prettier, TypeScript)
- ✅ Atomic deployments
- ✅ Easier code sharing
- ✅ Single source of truth

---

## Content Management: Sanity CMS

### Single Project, Separate Datasets

**Sanity Project:** `Fox Valley Music` (projectId: xyz123)

```
├── Dataset: venue-aurora
│   └── Documents:
│       ├── blog posts (venue news)
│       ├── events (Eventbrite integration)
│       └── pages (about, FAQs, rentals)
└── Dataset: fvmf-foundation
    └── Documents:
        ├── blog posts (foundation news)
        ├── programs (education, venue ops, community)
        ├── testimonials (student stories)
        ├── team members (board, staff)
        └── annual reports
```

### Shared Schemas
- `post` (blog articles)
- `author` (content creators)
- `category` (taxonomy)
- `seo` (metadata)

### Foundation-Specific Schemas
- `program` (education, venue ops, community)
- `testimonial` (student/donor stories)
- `teamMember` (board, staff, volunteers)
- `impactMetric` (impact statistics)
- `annualReport` (PDF uploads)
- `donationTier` (membership levels)

### Studio Navigation
- `/studio` → Choose dataset
- `/studio/venue` → Venue Aurora content
- `/studio/foundation` → FVMF Foundation content

---

## Page Structure

### Homepage

**Mobile (320px-767px):**
```
┌─────────────────────┐
│ [Logo] FVMF    [☰] │
├─────────────────────┤
│ MISSION HERO        │
│ "Supporting music   │
│  education"         │
│ [Donate] [Learn]    │
├─────────────────────┤
│ IMPACT METRICS      │
│ 500+  $50K  15yrs   │
├─────────────────────┤
│ OUR PROGRAMS (3)    │
│ • Education         │
│ • Venue Ops         │
│ • Community         │
├─────────────────────┤
│ GET INVOLVED        │
│ • Donate            │
│ • Volunteer         │
│ • Newsletter        │
├─────────────────────┤
│ IMPACT STORIES      │
│ [Carousel]          │
└─────────────────────┘
```

**Desktop (1024px+):**
```
┌──────────────────────────────────────────┐
│ [Logo] FVMF    About Programs Impact     │
│                Donate  Volunteer [Search]│
├──────────────────────────────────────────┤
│            MISSION HERO IMAGE            │
│      "Supporting music education..."     │
│        [Donate Now] [Learn Story]        │
├──────────────────────────────────────────┤
│ IMPACT METRICS (animated count-up)       │
│ 500+    $50K    15yrs    3      100%     │
│ Students Granted Years  Schools Volunteer│
├──────────────────────────────────────────┤
│ OUR PROGRAMS (3-column)                  │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐    │
│ │🎓 Music │ │🎸 Venue │ │🤝 Community│   │
│ │Education│ │Operations│ │Outreach │    │
│ └─────────┘ └─────────┘ └─────────┘    │
├──────────────────────────────────────────┤
│ GET INVOLVED          LATEST NEWS        │
│ • Donate             [Blog previews]     │
│ • Volunteer          [View All →]        │
│ • Newsletter                             │
└──────────────────────────────────────────┘
```

### Core Pages
1. **Homepage** (mission hero, metrics, programs, stories)
2. **About** (mission, board, financials, annual reports)
3. **Programs** (education, venue ops, community)
4. **Impact** (metrics, stories, annual reports)
5. **Donate** (tiers, one-time/recurring, Stripe)
6. **Volunteer** (application form, opportunities)
7. **Blog** (foundation news, impact stories)
8. **Contact** (form, address, 501c3 info)

---

## Accessibility: WCAG 2.1 AA

### Core Requirements ✅

**Visual:**
- Color contrast ≥ 4.5:1 (text), ≥ 3:1 (UI)
- Violet-600 on white: 7.4:1 (AAA)
- Green-600 on white: 4.8:1 (AA)

**Keyboard:**
- All interactive elements Tab accessible
- Focus indicators 2px, contrast ≥ 3:1
- Skip navigation link
- No keyboard traps

**Touch:**
- Touch targets ≥ 44×44px (48×48px actual)
- Adequate spacing (≥ 8px)
- Mobile menu accessible

**Content:**
- Semantic HTML (`<header>`, `<main>`, `<nav>`, `<footer>`)
- Heading hierarchy (h1 → h2 → h3, no skips)
- ARIA labels for icon-only buttons
- Form labels explicit (no placeholder-only)

**Dynamic:**
- ARIA live regions for updates
- Carousel respects ARIA patterns
- Motion respects `prefers-reduced-motion`
- Loading states indicated

---

## Implementation Roadmap (12 Weeks)

### Week 1-2: Foundation Setup
**Tasks:**
- Create Turborepo monorepo
- Migrate venue-aurora into apps/
- Set up shared packages (ui, sanity-config, analytics)
- Create Sanity dataset: fvmf-foundation

**Deliverables:**
- ✅ Monorepo functional
- ✅ Both apps building
- ✅ Sanity datasets created

---

### Week 3-4: Design System
**Tasks:**
- Create fvmf-foundation app
- Implement design tokens (violet theme)
- Build core components (Nav, Footer, Button, Card)
- Set up typography (Merriweather + Source Sans 3)

**Deliverables:**
- ✅ Tailwind config (violet palette)
- ✅ 10-15 components
- ✅ Design system documented

---

### Week 5-6: Core Pages
**Tasks:**
- Homepage (hero, metrics, programs, stories)
- About pages (mission, board, financials)
- Programs pages (overview + detail)
- Impact page (metrics, stories)

**Deliverables:**
- ✅ 8-10 static pages
- ✅ Responsive layouts
- ✅ WCAG AA validated

---

### Week 7-8: Sanity CMS
**Tasks:**
- Create schemas (program, testimonial, teamMember)
- Deploy Studio at /studio (both datasets)
- Populate content (programs, testimonials, board)
- Build dynamic pages (blog, program details)

**Deliverables:**
- ✅ Studio operational
- ✅ Content populated
- ✅ Dynamic routes functional

---

### Week 9: Stripe Integration
**Tasks:**
- Set up Stripe nonprofit account (2.2% fees)
- Create donation tiers (4 levels: $5, $15, $50, $100+)
- Build donation flow (Checkout integration)
- Implement confirmation + email automation

**Deliverables:**
- ✅ Stripe functional
- ✅ One-time + recurring donations
- ✅ Tax receipts

---

### Week 10: Volunteer & Newsletter
**Tasks:**
- Volunteer application form
- Airtable/Notion integration
- Newsletter signup (Mailchimp/ConvertKit)
- Email automation

**Deliverables:**
- ✅ Volunteer form
- ✅ Newsletter integration
- ✅ Email sequences

---

### Week 11: SEO & Analytics
**Tasks:**
- Structured data (Organization, Nonprofit, Article)
- Google Analytics 4
- Google Search Console
- Sitemap + robots.txt
- OpenGraph + Twitter Cards

**Deliverables:**
- ✅ 7+ schema types
- ✅ Analytics tracking
- ✅ SEO optimized

---

### Week 12: Launch
**Tasks:**
- Accessibility audit (Lighthouse, keyboard, screen reader)
- Performance testing (Core Web Vitals)
- Content migration from Wix
- DNS update (point to Vercel)
- Launch announcement

**Deliverables:**
- ✅ FVMF site live
- ✅ Wix redirects
- ✅ Launch published

---

## Budget & Revenue

### Monthly Costs: $0

| Service | Tier | Cost |
|---------|------|------|
| Vercel | Hobby (2 projects) | $0 |
| Sanity | Free (2 datasets) | $0 |
| Stripe | Nonprofit | 2.2% + $0.30/tx |
| Email | SendGrid Free | $0 |
| Analytics | GA4 | $0 |
| **Total** | - | **$0/month** |

### Revenue Projection (Year 1)

**Conservative Membership Tiers:**
- 🎵 Music Lover: $5/mo × 10 = $50
- 🎸 Backstage Supporter: $15/mo × 5 = $75
- 🎤 VIP Patron: $50/mo × 3 = $150
- 🏆 Founding Benefactor: $100/mo × 1 = $100

**Monthly Recurring Revenue (MRR):** $375
**Annual Gross:** $4,500
**Annual Net (after fees):** $4,401

**Break-Even:** Immediate (zero upfront costs)

---

## Success Metrics

### Launch (First 30 Days)
- Site uptime: >99.9%
- Lighthouse score: >90
- Core Web Vitals: Pass
- First donation: 1+

### Growth (First 90 Days)
- New members: 15-20
- MRR: $250-$400
- Newsletter signups: 50-100
- Volunteer applications: 5-10

### Year 1
- Active members: 30-50
- MRR: $500-$1,000
- Member retention: >80%
- Annual donations: $10K-$15K
- Blog monthly visitors: 1,000+

---

## Risk Mitigation

### Technical Risks
- **Wix data loss:** Manual backup before migration
- **Monorepo complexity:** Use Turborepo docs, start simple
- **Stripe bugs:** Thorough testing, use test mode
- **DNS downtime:** Migrate during low-traffic hours

### Content Risks
- **Missing content:** Comprehensive audit before migration
- **Broken assets:** Verify all uploads
- **SEO drop:** Implement 301 redirects
- **Analytics loss:** Export GA data first

### Business Risks
- **Low adoption:** Test tiers with focus group
- **Donor confusion:** Clear branding, cross-linking
- **Stripe issues:** Apply early, have backup (PayPal)

---

## Next Steps (Week 1)

1. **Create Monorepo:**
   ```bash
   npx create-turbo@latest fvmf-venue-platform
   cd fvmf-venue-platform
   pnpm install
   ```

2. **Migrate Venue Aurora:**
   ```bash
   cp -r ../venue-aurora ./apps/venue-aurora
   ```

3. **Set Up Packages:**
   ```bash
   mkdir -p packages/ui packages/sanity-config packages/analytics
   ```

4. **Create Dataset:**
   ```bash
   npx sanity dataset create fvmf-foundation
   ```

5. **Initialize Foundation App:**
   ```bash
   cd apps
   npx create-next-app@latest fvmf-foundation --typescript --tailwind --app
   ```

---

## Design Token Reference

### Colors

**Primary (Violet):**
```css
--brand-primary-500: #8b5cf6;  /* Main violet */
--brand-primary-600: #7c3aed;  /* Hover state */
```

**Secondary (Green):**
```css
--brand-secondary-500: #22c55e;  /* Impact green */
--brand-secondary-600: #16a34a;  /* Hover state */
```

**Accent (Orange):**
```css
--brand-accent-500: #f97316;  /* Venue Aurora link */
```

### Typography

**Fonts:**
```css
--font-display: 'Merriweather', Georgia, serif;
--font-body: 'Source Sans 3', -apple-system, sans-serif;
```

**Scale:**
```css
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);   /* 16-18px */
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);   /* 20-24px */
--text-3xl: clamp(2rem, 1.7rem + 1.5vw, 2.5rem);      /* 32-40px */
```

### Motion

**Transitions:**
```css
--transition-fast: 150ms ease-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 400ms ease-in-out;
```

**Respect Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  --transition-fast: 0ms;
  --transition-base: 0ms;
  --transition-slow: 0ms;
}
```

---

## Component Examples

### Button Variants

**Primary (Violet):**
```tsx
<Button variant="primary">Donate Now</Button>
// bg-primary-500 hover:bg-primary-600 text-white
```

**Secondary (Green):**
```tsx
<Button variant="secondary">See Our Impact</Button>
// bg-secondary-500 hover:bg-secondary-600 text-white
```

**Accent (Orange - Venue Link):**
```tsx
<Button variant="outline">Visit The Venue</Button>
// border-2 border-accent-500 text-accent-500 hover:bg-accent-50
```

---

## Cross-Site Content Strategy

### Shared Content
- Blog posts (tagged by site: "venue" or "foundation")
- Authors (shared across datasets)
- Categories (music, education, community, etc.)

### Cross-References
- Foundation programs → Venue educational events
- Venue events → Foundation support messaging
- Blog posts → Related content on sister site

### Example GROQ Query
```typescript
// Fetch program with linked venue events
const program = await sanityClient.fetch(`
  *[_type == "program" && slug.current == $slug][0] {
    ...,
    relatedVenueEvents[]-> {
      title,
      date,
      ticketUrl,
      "image": image.asset->url
    }
  }
`, { slug });
```

---

## Deployment

### Vercel Projects
1. **venue-aurora** → `www.venueaurora.com`
2. **fvmf-foundation** → `www.foxvalleymusicfoundation.com`

### Build Commands
```json
// Venue Aurora
{
  "buildCommand": "cd ../.. && npx turbo run build --filter=venue-aurora"
}

// FVMF Foundation
{
  "buildCommand": "cd ../.. && npx turbo run build --filter=fvmf-foundation"
}
```

### Environment Variables
```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=xyz123
NEXT_PUBLIC_SANITY_DATASET=fvmf-foundation  # Or venue-aurora

# Stripe (separate keys or metadata)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email
SENDGRID_API_KEY=SG.xxx
```

---

## Conclusion

This migration plan delivers:

1. **Zero upfront costs** (volunteer + AI-assisted development)
2. **Zero monthly costs** (free tier hosting + Sanity)
3. **Immediate revenue potential** ($4K+ annual from memberships)
4. **Distinct brand identities** (violet foundation vs. orange venue)
5. **Unified infrastructure** (shared tech stack, easier maintenance)
6. **Accessible, performant sites** (WCAG AA, Lighthouse >90)
7. **12-week timeline** (realistic with phased approach)

**Ready for Implementation:** All design decisions made, architecture defined, roadmap clear.

---

**Next Action:** Review with stakeholders → Approve → Begin Week 1 setup
