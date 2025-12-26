# FVMF Venue Platform Monorepo

Monorepo containing both **Venue Aurora** (music venue) and **Fox Valley Music Foundation** (nonprofit) websites.

## 🎯 Projects

### Venue Aurora (`apps/venue-aurora`)
Live music venue in downtown Aurora, IL featuring local and touring artists.

- **Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS, Sanity CMS
- **Theme**: Modern, sleek, event-driven with orange accents
- **Live URL**: https://venue-aurora.vercel.app

### Fox Valley Music Foundation (`apps/fvmf-foundation`)
Nonprofit supporting music education through free instruments and instruction.

- **Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS, Sanity CMS
- **Theme**: Vinyl Revival Meets Modern Activism (blue, gold, orange)
- **Status**: In development

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Install Dependencies

```bash
# Install all dependencies for both apps
npm install
```

### Development

```bash
# Run both apps concurrently
npm run dev

# Run venue-aurora only (http://localhost:3000)
npm run dev:venue

# Run fvmf-foundation only (http://localhost:3001)
npm run dev:foundation
```

### Build

```bash
# Build both apps
npm run build

# Build individual apps
npm run build:venue
npm run build:foundation
```

## 📁 Structure

```
fvmf-venue-platform/
├── apps/
│   ├── venue-aurora/          # Venue Aurora website
│   │   ├── src/
│   │   ├── public/
│   │   ├── sanity/
│   │   └── package.json
│   └── fvmf-foundation/       # FVMF Foundation website
│       ├── src/
│       ├── public/
│       └── package.json
├── packages/                  # Shared packages (future)
├── turbo.json                 # Turborepo configuration
└── package.json               # Monorepo root
```

## 📚 Documentation

### Venue Aurora
- See `apps/venue-aurora/README.md`
- Production deployment guide: `apps/venue-aurora/ROADMAP-DEPLOYMENT.md`

### FVMF Foundation
- Quick Start: `apps/venue-aurora/docs/fvmf-quick-start.md`
- Design System: `apps/venue-aurora/docs/fvmf-vinyl-aesthetic-system.md`
- Component Library: `apps/venue-aurora/docs/fvmf-component-library.md`
- Sanity Schemas: `apps/venue-aurora/docs/fvmf-sanity-schemas.md`
- Implementation Guide: `apps/venue-aurora/docs/fvmf-implementation-guide.md`

## 🎨 Design Philosophy

Both sites share the same technical stack but have distinct visual identities:

### Venue Aurora
- **Vibe**: Modern, sleek, tonight's-show energy
- **Colors**: Orange primary (#f97316), dark neutrals
- **Typography**: System fonts optimized for speed
- **Focus**: Events, calendar, ticket sales

### FVMF Foundation
- **Vibe**: Timeless vinyl heritage meets social impact
- **Colors**: Blue Note Blue (#003366), Motown Gold (#fbbf24), Capitol Orange (#f97316)
- **Typography**: Bebas Neue (display), IBM Plex Sans (body)
- **Focus**: Impact metrics, student stories, donations
- **Unforgettable Element**: Spinning vinyl records revealing student photos

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Animation**: Framer Motion, GSAP
- **Deployment**: Vercel
- **Monorepo**: Turborepo

## 📦 Shared Infrastructure

- **Sanity Project**: Single project, multiple datasets
  - `venue-aurora` dataset for Venue Aurora
  - `fvmf-foundation` dataset for FVMF Foundation
- **Vercel Account**: Both deployed to same Vercel account
- **Design Tokens**: Shared color system with 10% overlap (orange accent)

## 🌟 Key Features

### Venue Aurora
- Event calendar with TicketTailor integration
- Dynamic event pages
- Artist profiles
- Newsletter signup
- Social media integration

### FVMF Foundation (Planned)
- Interactive vinyl record data visualizations
- Album cover program cards
- Gatefold LP testimonial sections
- Stripe donation integration
- Student impact stories
- Annual reports

## 🚢 Deployment

Both apps deploy independently to Vercel:

```bash
# Deploy venue-aurora
cd apps/venue-aurora
vercel

# Deploy fvmf-foundation
cd apps/fvmf-foundation
vercel
```

## 📄 License

Proprietary - Signal X Studio

## 🤝 Contributing

This is a private monorepo. For questions or access, contact Nino Chavez.

---

**Built with ❤️ by Signal X Studio**
