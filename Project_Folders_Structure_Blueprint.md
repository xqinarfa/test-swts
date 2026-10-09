# Project Folders Structure Blueprint

> **SWTS Industrial Web Platform**  
> *Definitive Guide for Architecture, File Placement, and Modular Organization*  
> Generated: October 2026

---

## 1. Structural Overview

The SWTS web application is built on modern frontend engineering standards using **Next.js 16 (App Router)**, **React 19**, **TypeScript 5**, and **Tailwind CSS v4**.

The codebase follows a **Domain & Responsibility-Driven Architecture**:
- **Routing Layer (`src/app/`)**: Pure route endpoints and root layout orchestrations. Pages act as high-level composers that consume section modules.
- **Global Layout (`src/components/layout/`)**: Persistent, cross-page shell components (`Navbar`, `Footer`, `SidebarDrawer`, `SmoothScrollProvider`).
- **Shared UI Primitives (`src/components/ui/`)**: Reusable atomic visual, layout, and animation primitives (`ParallaxSection`, `AnimatedCounter`, `ScrollScrubText`, `SkewRectangle`).
- **Domain Feature Modules (`src/components/[domain]/`)**: Isolated, route-specific components partitioned cleanly by page (`home/`, `about/`, `services/`, `specializations/`, `careers/`).
- **Data & Content Schemas (`src/data/`)**: Centralized structured content, avoiding hardcoded magic strings inside presentation components.
- **Static Assets (`public/`)**: Categorized static imagery, branding icons, and media files.

---

## 2. Directory Visualization

```text
swts/
├── .agents/
│   └── skills/                       # Local agent skills & automated workflows
├── anti-slop/                        # Quality audit logs & design compliance reports
├── public/                           # Static assets served at root
│   └── assets/                       # Photography, logos, illustrations
├── src/
│   ├── app/                          # Next.js App Router (Pages & Layouts)
│   │   ├── about/
│   │   │   └── page.tsx              # /about route
│   │   ├── careers/
│   │   │   └── page.tsx              # /careers route
│   │   ├── services/
│   │   │   └── page.tsx              # /services route
│   │   ├── specializations/
│   │   │   └── page.tsx              # /specializations route
│   │   ├── favicon.ico
│   │   ├── globals.css               # Core design tokens & Tailwind imports
│   │   ├── layout.tsx                # Global HTML, fonts, & SmoothScrollProvider
│   │   └── page.tsx                  # / (Home landing page)
│   ├── components/                   # Modular React Components
│   │   ├── about/                    # Sections for /about page
│   │   │   ├── AboutBatam.tsx        # Batam engineering facility showcase
│   │   │   ├── AboutCapabilities.tsx # Core disciplines & technical specs
│   │   │   ├── AboutCtaBanner.tsx    # Consultation / contact CTA
│   │   │   ├── AboutHero.tsx         # Page hero with parallax
│   │   │   ├── AboutPartners.tsx     # Partner & classification societies
│   │   │   ├── AboutStory.tsx        # 50-year legacy & regional heritage
│   │   │   ├── AboutTimeline.tsx     # Historical timeline (1973 - Present)
│   │   │   └── AboutVisionMission.tsx# Strategic mission & corporate vision
│   │   ├── careers/                  # Sections & modals for /careers page
│   │   │   ├── CareersCulture.tsx    # Workplace values & culture
│   │   │   ├── CareersHero.tsx       # Careers hero section
│   │   │   ├── CareersIntro.tsx      # Editorial intro & capability metrics
│   │   │   ├── CareersOpenings.tsx   # Active engineering job listings
│   │   │   ├── JobApplicationModal.tsx # Application form modal
│   │   │   └── JobDetailModal.tsx    # Role detail modal
│   │   ├── home/                     # Sections for Home page (/)
│   │   │   ├── AboutUs.tsx           # Home overview section & partner marquee
│   │   │   ├── AppBanner.tsx         # Mobile tracking & operations banner
│   │   │   ├── ContactQuote.tsx      # Quote calculator & contact form
│   │   │   ├── FaqAndNews.tsx        # Technical FAQ & recent articles
│   │   │   ├── Hero.tsx              # Pinned full-bleed cinematic hero
│   │   │   ├── Industries.tsx        # Industrial sectors interactive tabs
│   │   │   ├── Reviews.tsx           # Client testimonials carousel
│   │   │   └── Services.tsx          # 4-pillar logistics services overview
│   │   ├── layout/                   # Global shell & wrapper components
│   │   │   ├── Footer.tsx            # Global multi-column footer
│   │   │   ├── Navbar.tsx            # Floating glassmorphism navbar
│   │   │   ├── SidebarDrawer.tsx     # Slide-over contact & navigation drawer
│   │   │   └── SmoothScrollProvider.tsx # Lenis smooth scrolling engine
│   │   ├── services/                 # Sections & modals for /services page
│   │   │   ├── FiveServicesGrid.tsx  # 5 photographic sector cards
│   │   │   ├── SectorDetailModal.tsx # 7-step engineering scope modal
│   │   │   ├── ServicesCommitment.tsx# Quality standards & SLA commitment
│   │   │   ├── ServicesHero.tsx      # Services page hero
│   │   │   └── ServicesIntro.tsx     # High-contrast capability metrics
│   │   ├── specializations/          # Sections for /specializations page
│   │   │   ├── SpecializationCatalogue.tsx # Unified engineering discipline list
│   │   │   ├── SpecializationFacility.tsx # Batam workshop facility & machinery
│   │   │   ├── SpecializationHero.tsx # Specializations hero section
│   │   │   └── SpecializationIntro.tsx # Technical scope & capacity counters
│   │   └── ui/                       # Shared atomic UI & animation primitives
│   │       ├── AnimatedCounter.tsx   # Smooth viewport-triggered numeric counter
│   │       ├── ParallaxSection.tsx   # Skew curtain parallax transition wrapper
│   │       ├── ScrollScrubText.tsx   # Word-by-word scroll highlight component
│   │       └── SkewRectangle.tsx     # SVG skewed boundary divider
│   └── data/                         # Centralized typed data & content
│       ├── content.ts                # App navigation, home, about, careers data
│       └── servicesData.ts           # Deep engineering sectors & service scopes
├── eslint.config.mjs                 # ESLint flat configuration
├── next.config.ts                    # Next.js framework configuration
├── package.json                      # Dependencies & npm scripts
├── postcss.config.mjs                # PostCSS configuration
├── Project_Folders_Structure_Blueprint.md # This blueprint document
└── tsconfig.json                     # TypeScript strict configuration
```

---

## 3. Key Directory Analysis

### `src/app/` (Routing & Orchestration)
- **Role**: Pure page composition. Pages should NOT contain heavy raw JSX or state machines for sub-features; they assemble domain components.
- **Pattern**:
  - `page.tsx`: Default export of the route component.
  - `layout.tsx`: Root HTML wrapper, Google Fonts injection, global scroll providers.

### `src/components/layout/` (Application Shell)
- **Role**: Housing components that appear globally or wrap multiple pages.
- **Components**:
  - `Navbar.tsx`: Sticky / fixed navigation bar with dynamic active-state detection.
  - `Footer.tsx`: Universal footer with regional office contacts (Singapore, Batam).
  - `SidebarDrawer.tsx`: Responsive navigation and quick-inquiry drawer.
  - `SmoothScrollProvider.tsx`: Client-side Lenis wrapper.

### `src/components/ui/` (Shared Primitives)
- **Role**: Stateless or atomic reusable visual utilities.
- **Rule**: Must be generic and domain-agnostic. No business logic or hardcoded company copy.
- **Components**:
  - `ParallaxSection.tsx`: Orchestrates the signature layered skew curtain effect.
  - `SkewRectangle.tsx`: Pure SVG angled divider consumed by `ParallaxSection`.
  - `AnimatedCounter.tsx`: Motion-powered number counting from 0 to N when in view.
  - `ScrollScrubText.tsx`: Scroll-driven text opacity scrub.

### `src/components/[domain]/` (Feature Modules)
- **Role**: Domain-specific feature sections.
- **Grouping**:
  - `home/`: All sections belonging to the homepage (`/`).
  - `about/`: All sections belonging to `/about`.
  - `services/`: Sector grid, modals, and SLA commitments for `/services`.
  - `specializations/`: Workshop engineering catalogue for `/specializations`.
  - `careers/`: Open roles and job application flow for `/careers`.

### `src/data/` (Content & Schemas)
- **Role**: Single source of truth for technical copy, metrics, partner logos, and service specifications.
- **Rule**: Kept strictly typed with TypeScript interfaces (`SectorData`, `DisciplineData`, etc.).

---

## 4. File Placement Patterns

| File Type | Target Location | Naming Pattern | Example |
|---|---|---|---|
| Route Page | `src/app/<route>/` | `page.tsx` | `src/app/services/page.tsx` |
| Route Layout | `src/app/<route>/` | `layout.tsx` | `src/app/layout.tsx` |
| Domain Section | `src/components/<domain>/` | `PascalCase.tsx` | `src/components/home/AboutUs.tsx` |
| Domain Modal | `src/components/<domain>/` | `[Entity]Modal.tsx` | `src/components/services/SectorDetailModal.tsx` |
| Shared UI Primitive | `src/components/ui/` | `PascalCase.tsx` | `src/components/ui/ParallaxSection.tsx` |
| Layout Shell | `src/components/layout/` | `PascalCase.tsx` | `src/components/layout/Navbar.tsx` |
| Data / Constants | `src/data/` | `camelCase.ts` | `src/data/content.ts` |
| Static Images | `public/assets/` | `kebab-case.png/jpg` | `public/assets/specializations/hero-workshop.jpg` |

---

## 5. Naming and Organization Conventions

1. **Components**:
   - PascalCase matching the file name: `export default function FiveServicesGrid()`.
   - Explicit props interface at top of file: `interface FiveServicesGridProps { ... }`.
2. **Import Aliases**:
   - Use Next.js path alias `@/` for all internal imports:
     - `@/components/layout/*`
     - `@/components/ui/*`
     - `@/components/[domain]/*`
     - `@/data/*`
3. **Ponytail Principles (Simplicity & YAGNI)**:
   - No dead or unreferenced components.
   - No unnecessary barrel `index.ts` files that slow down bundlers and obscure origins. Direct file imports are preferred: `import Hero from "@/components/home/Hero"`.
   - Native HTML & CSS platform features over unnecessary third-party libraries.

---

## 6. Navigation and Development Workflow

### Adding a New Route
1. Create directory `src/app/<new-route>/`.
2. Create `src/app/<new-route>/page.tsx`.
3. Create corresponding feature components in `src/components/<new-route>/`.
4. Wrap sections in `<ParallaxSection>` using `@/components/ui/ParallaxSection`.

### Adding a New Section to Existing Page
1. Create `src/components/<domain>/<SectionName>.tsx`.
2. Add static data or strings to `src/data/content.ts`.
3. Import into `src/app/<domain>/page.tsx` and place within the layer architecture.

---

## 7. Structure Templates

### Component Template (`src/components/<domain>/<Name>.tsx`)
```tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  className?: string;
}

export default function ExampleSection({ className = "" }: SectionProps) {
  return (
    <section className={`py-20 px-6 sm:px-12 max-w-7xl mx-auto ${className}`}>
      {/* Content */}
    </section>
  );
}
```

### Page Template (`src/app/<domain>/page.tsx`)
```tsx
"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import SidebarDrawer from "@/components/layout/SidebarDrawer";
import Footer from "@/components/layout/Footer";
import ParallaxSection from "@/components/ui/ParallaxSection";

export default function DomainPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col">
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <SidebarDrawer isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="flex-1 w-full relative">
        <ParallaxSection zIndex={10} bgClassName="bg-white" skewColor="#ffffff">
          {/* Domain Sections */}
        </ParallaxSection>
        <Footer />
      </main>
    </div>
  );
}
```

---

## 8. Structure Enforcement & Maintenance

- **Type Safety**: Enforced via TypeScript (`npx tsc --noEmit`).
- **Linter**: Enforced via ESLint flat config (`npm run lint`).
- **Dead Code Audit**: Periodically scan for unreferenced files. Unused prototypes or deprecated components must be removed immediately to prevent architectural rot.
