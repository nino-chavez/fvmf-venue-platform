# Phase 1: Architect Deliverable - Venue Aurora Redesign

**Project:** Venue Aurora Frontend Redesign
**Skill:** signal-frontend-designer v2.0 (Triad Workflow)
**Phase:** 1 - Architect (UX Designer Mode)
**Date:** 2025-12-26
**Status:** ✅ APPROVED

---

## Aesthetic Direction

**Selected:** Creative Bold (Professional Variant)

**Rationale:**
1. **Venue/Events Nature**: Live music venue requires high-impact, engaging design to convey excitement
2. **Local Community Focus**: 190-seat listening room, nonprofit foundation = approachable but distinctive
3. **Content Type**: Event-driven (concerts, artists) = visual-first, photography-heavy
4. **Current Direction**: Already uses GSAP animations, immersive hero, parallax = creative intent

**Hybrid Approach:**
- **Creative Bold**: Hero sections, scroll animations, asymmetric layouts for events
- **Product Refined**: Ticket purchasing flows, accessibility features, structured content
- **WCAG 2.1 AA Mandatory**: Public venue, nonprofit status, broad demographic

**References:**
- Music venues: Brooklyn Bowl, First Avenue, The Fillmore
- Event platforms with personality: Eventbrite (elevated), Dice, Resident Advisor
- NOT generic Ticketmaster/LiveNation aesthetics

---

## User Flows Mapping

### Journey A: Discovery → Ticket Purchase
```
Homepage → Browse Events → Event Detail → Ticket Selection → Checkout → Confirmation
```

### Journey B: Calendar Browse
```
Homepage → Calendar View → Filter by Date → Event Detail → Purchase
```

### Journey C: Learn About Venue
```
Homepage → About → Rentals/FAQs → Contact
```

### Journey D: Newsletter Signup
```
Homepage → Newsletter Form → Confirmation
```

---

## Mobile-First Wireframes

### Homepage Wireframe (320px → 768px → 1024px+)

```
┌─────────────────────────────────────┐
│ [Logo]              [☰ Menu]        │ <- Header (sticky)
├─────────────────────────────────────┤
│                                     │
│         HERO IMAGE                  │ <- 90vh, parallax
│         (with text overlay)         │
│                                     │
│    [Live Music]                     │
│    Subtitle text here...            │
│                                     │
│    [View Shows] [About]             │ <- Touch targets ≥44px
│                                     │
├─────────────────────────────────────┤
│  ┌─────────────────────────────┐   │
│  │ STATS BAR (overlay)         │   │ <- -mt-16, glassmorphism
│  │ 190  100+  501c3  2019      │   │
│  │ Seats Shows  Nonprofit Est. │   │
│  └─────────────────────────────┘   │
├─────────────────────────────────────┤
│ UPCOMING SHOWS                      │
│ ┌───────────────────────────────┐  │
│ │ [Event Card 1]                │  │ <- Animated on scroll
│ │ Title, Date, Genre Badge      │  │
│ │ [Get Tickets]                 │  │
│ └───────────────────────────────┘  │
│ ┌───────────────────────────────┐  │
│ │ [Event Card 2]                │  │
│ └───────────────────────────────┘  │
├─────────────────────────────────────┤
│ CALENDAR VIEW                       │
│ ┌─────────────────────────────┐    │
│ │ [Month Selector]            │    │ <- Keyboard accessible
│ │ ┌─┬─┬─┬─┬─┬─┬─┐            │    │
│ │ │S│M│T│W│T│F│S│            │    │
│ │ ├─┼─┼─┼─┼─┼─┼─┤            │    │
│ │ │ │ │●│ │●│ │ │  (events)  │    │
│ │ └─┴─┴─┴─┴─┴─┴─┘            │    │
│ └─────────────────────────────┘    │
├─────────────────────────────────────┤
│ ABOUT SECTION                       │
│ ┌─────────────────────────────┐    │
│ │ About The Venue             │    │
│ │ Text content...             │    │
│ │ [Learn More] [Rent Venue]   │    │
│ └─────────────────────────────┘    │
│ ┌─────────────────────────────┐    │
│ │ Location                    │    │
│ │ Address                     │    │
│ │ [Map placeholder]           │    │
│ │ [Get Directions] ↗          │    │
│ └─────────────────────────────┘    │
├─────────────────────────────────────┤
│ NEWSLETTER CTA                      │
│ ┌─────────────────────────────┐    │
│ │ Never Miss a Show           │    │
│ │ [Email Input]               │    │ <- Labeled, error states
│ │ [Subscribe]                 │    │
│ └─────────────────────────────┘    │
├─────────────────────────────────────┤
│ FOOTER                              │
│ Links, Social, Legal                │
└─────────────────────────────────────┘
```

**Desktop Layout (1024px+):**
- Hero: Full viewport, more dramatic parallax
- Stats bar: Wider, more spacing
- Events: Grid layout (2-3 columns)
- About section: Sidebar + main content (2:1 ratio)

---

### Event Detail Wireframe (320px → 1024px+)

```
┌─────────────────────────────────────┐
│ [← Back]                   [Share]  │ <- Header overlay on hero
├─────────────────────────────────────┤
│                                     │
│      EVENT HERO IMAGE               │ <- 50vh min
│      (darkened overlay)             │
│                                     │
│   [Genre Badge] [Availability]      │
│   Event Title Here                  │
│                                     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ MAIN CONTENT            SIDEBAR     │
│ ┌──────────────┐       ┌─────────┐ │
│ │ Date & Time  │       │ Ticket  │ │ <- Sticky sidebar
│ │ Card         │       │ Purchase│ │
│ └──────────────┘       │ Widget  │ │
│ ┌──────────────┐       │ [Buy]   │ │
│ │ About Event  │       └─────────┘ │
│ │ Description  │                   │
│ └──────────────┘                   │
│ ┌──────────────┐                   │
│ │ Videos       │                   │
│ └──────────────┘                   │
│ ┌──────────────┐                   │
│ │ Photo Gallery│                   │
│ └──────────────┘                   │
│ ┌──────────────┐                   │
│ │ Venue Info   │                   │
│ └──────────────┘                   │
│ ┌──────────────┐                   │
│ │ Ticket Opts  │                   │
│ └──────────────┘                   │
└─────────────────────────────────────┘
```

**Mobile (< 1024px):**
- Sidebar moves below content
- Ticket purchase widget becomes sticky bottom bar
- Easier thumb access for purchase CTA

---

## Component Inventory (Semantic HTML)

### Global Components

| Component | Semantic HTML | Purpose | ARIA Requirements |
|-----------|--------------|---------|------------------|
| **Header** | `<header>` + `<nav>` | Site navigation | `role="navigation"`, skip link |
| **Hero** | `<section>` | Immersive intro | `aria-label="Hero section"` |
| **EventCard** | `<article>` | Event preview | `aria-labelledby` for title |
| **CalendarView** | `<div role="grid">` | Date browser | `aria-label="Event calendar"`, keyboard nav |
| **Newsletter** | `<form>` | Email capture | Proper labels, error messages |
| **Footer** | `<footer>` | Site info | Landmark |

### Homepage Specific

| Component | Element | Accessibility Notes |
|-----------|---------|-------------------|
| **HeroStats** | `<aside>` | Not critical content, `aria-label="Venue statistics"` |
| **EventSection** | `<section>` | `<h2>` heading required |
| **AboutCard** | `<article>` | Self-contained content |
| **LocationCard** | `<article>` | Contains address as `<address>` element |

### Event Detail Specific

| Component | Element | Accessibility Notes |
|-----------|---------|-------------------|
| **BackButton** | `<a>` with `href` | NOT `<button>` - it's navigation |
| **GenreBadge** | `<span role="status">` | Informational, not interactive |
| **DateTimeCard** | `<article>` with `<time>` | Machine-readable datetime |
| **TicketWidget** | `<form>` | Complete purchase flow, error handling |
| **MediaGallery** | `<div role="region">` | Keyboard accessible, alt text on images |
| **VideoEmbed** | `<iframe>` or `<video>` | Captions/transcripts required |

---

## WCAG 2.1 AA Accessibility Checklist

### Level AA Requirements (Mandatory)

#### Perceivable

- [ ] **1.1.1 Non-text Content** - All images have alt text
  - Event images: Describe artist/genre
  - Hero images: Descriptive or decorative (`alt=""`)
  - Icons: Use `aria-label` or include text

- [ ] **1.3.1 Info and Relationships** - Semantic HTML structure
  - Headings in logical order (h1 → h2 → h3)
  - Lists use `<ul>/<ol>`
  - Forms use `<label>` + `for` attribute

- [ ] **1.4.3 Contrast (Minimum)** - 4.5:1 text, 3:1 UI components
  - Test: White text on neutral-900 backgrounds
  - Test: Primary-500 buttons against backgrounds
  - Test: Genre badge colors (amber, indigo, red, purple, emerald)
  - Use contrast-check.py script

- [ ] **1.4.4 Resize Text** - Text scales to 200% without loss
  - Test with browser zoom
  - Ensure no horizontal scrolling on mobile

- [ ] **1.4.5 Images of Text** - Avoid images containing text (use real text)

#### Operable

- [ ] **2.1.1 Keyboard** - All functionality via keyboard
  - Tab order logical
  - Event cards keyboard focusable
  - Calendar keyboard navigable (Arrow keys)
  - Modal dialogs trap focus
  - Skip links present

- [ ] **2.1.2 No Keyboard Trap** - Can tab out of all components

- [ ] **2.4.1 Bypass Blocks** - Skip navigation link
  ```html
  <a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
  ```

- [ ] **2.4.2 Page Titled** - Descriptive `<title>` tags
  - Homepage: "The Venue Aurora - Live Music in Downtown Aurora"
  - Event: "{Artist Name} | The Venue Aurora"

- [ ] **2.4.3 Focus Order** - Logical tab sequence

- [ ] **2.4.4 Link Purpose** - Links describe destination
  - NOT "Click here", USE "Get tickets for {Event Name}"

- [ ] **2.4.7 Focus Visible** - Visible focus indicators
  - Tailwind: `focus:ring-2 focus:ring-primary-500`

- [ ] **2.5.1 Pointer Gestures** - No complex gestures required

- [ ] **2.5.2 Pointer Cancellation** - Click completes on up-event

- [ ] **2.5.3 Label in Name** - Visible label matches accessible name

- [ ] **2.5.4 Motion Actuation** - No motion-only controls

#### Understandable

- [ ] **3.1.1 Language of Page** - `<html lang="en">`

- [ ] **3.2.1 On Focus** - No context change on focus

- [ ] **3.2.2 On Input** - Forms don't auto-submit

- [ ] **3.3.1 Error Identification** - Form errors clearly identified
  - Newsletter email: "Please enter a valid email address"
  - Ticket purchase: Field-specific errors

- [ ] **3.3.2 Labels or Instructions** - Form fields labeled
  ```html
  <label for="email">Email Address</label>
  <input id="email" type="email" required />
  ```

- [ ] **3.3.3 Error Suggestion** - Provide correction hints

- [ ] **3.3.4 Error Prevention** - Confirm before submitting (tickets)

#### Robust

- [ ] **4.1.1 Parsing** - Valid HTML (no duplicate IDs)

- [ ] **4.1.2 Name, Role, Value** - All UI components programmatically determinable
  - Custom components use proper ARIA
  - Buttons: `<button>` not `<div onclick>`
  - Links: `<a href>` not `<span onclick>`

- [ ] **4.1.3 Status Messages** - Use `role="status"` for announcements
  - "Ticket added to cart"
  - "Event saved to favorites"

---

### Touch Targets (Mobile)

- [ ] All interactive elements ≥ 44x44px
  - Buttons: `min-h-[44px] min-w-[44px]`
  - Links in navigation: Adequate padding
  - Calendar dates: Touch-friendly sizing
  - Genre badges (if clickable): Meet minimum

---

### Animation Considerations

- [ ] **2.3.1 Three Flashes** - No content flashes > 3 times/second
  - GSAP animations are safe (smooth transitions)

- [ ] **2.2.2 Pause, Stop, Hide** - Auto-playing content controllable
  - Hero video (if used): Pause button required
  - Parallax: Respect `prefers-reduced-motion`

- [ ] **Reduced Motion Preference:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

---

## Validation Criteria (Phase 1 Completion)

**Verified:**

- [x] All user flows mapped and documented
- [x] Mobile-first wireframes created (320px, 768px, 1024px)
- [x] Component inventory complete with semantic HTML
- [x] WCAG 2.1 AA checklist generated (54 criteria)
- [x] No aesthetic decisions made (color, typography, spacing TBD)
- [x] Focus remains on structure and accessibility

---

## Constraints for Phase 2 (Manager)

**Hard Constraints (CANNOT be changed by Artist):**
1. ✅ Semantic HTML structure as defined above
2. ✅ WCAG 2.1 AA compliance mandatory
3. ✅ Touch targets ≥ 44x44px
4. ✅ Keyboard navigation support
5. ✅ `prefers-reduced-motion` support
6. ✅ Mobile-first responsive breakpoints (320px, 768px, 1024px)

**Creative Freedom (Phase 2/3 decisions):**
- Color palette selection
- Typography system
- Spacing scale (8pt grid vs fluid)
- Animation timing/easing
- Visual hierarchy within constraints
- Micro-interactions

---

## Phase 1 Status: ✅ APPROVED

**Next Phase:** Phase 2 (Manager mode) - Create creative brief and design tokens for Artist implementation.
