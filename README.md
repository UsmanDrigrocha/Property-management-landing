# Amaze Property Management — Redesign

A premium, animated redesign of [amazepms.com](https://www.amazepms.com), built for
the Dacitos Technologies Web/UI Developer hiring assignment. Same business content and
purpose as the original site — security, housekeeping, technical and facility
management services — reimagined with a modern, Vercel/Stripe-inspired UI: dark
glassmorphic surfaces, scroll-triggered motion, and a component-based architecture.

## Tech Stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** with a hand-rolled shadcn/ui-style component layer (`button`,
  `badge`, `sheet`, `separator`) built on Radix primitives
- **Framer Motion** — scroll reveals, hero parallax blobs, animated counters
- **Lenis** — smooth-scroll
- **lucide-react** — icon set (no emoji anywhere in the UI)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Project Structure

```
src/
  app/
    layout.tsx        # fonts, metadata, smooth-scroll provider
    page.tsx           # section composition
    globals.css         # design tokens (OKLCH), glass/grid/noise utilities
  components/
    ui/                 # button, badge, separator, sheet (shadcn-style primitives)
    layout/              # navbar, footer, smooth-scroll-provider
    sections/             # hero, stats, services, why-choose-us, about, presence, cta
    motion/                # reveal (scroll-in), counter (animated number)
    icons/                  # local social-brand SVGs (lucide-react v1 dropped these)
    icon-map.tsx             # string -> LucideIcon lookup for content-driven icons
  lib/
    content.ts               # all site copy/data, kept separate from components
    utils.ts                  # `cn()` class-merge helper
```

All copy lives in `src/lib/content.ts` — update services, stats, presence states, or
contact details there without touching component code.

## Design Notes

- **Theme**: dark-first, near-black surfaces with a warm amber accent, glass panels
  (`.glass` utility: blurred, translucent, subtly bordered) and a faint animated grid
  background for depth.
- **Motion**: sections reveal on scroll via a shared `Reveal`/`RevealGroup` wrapper;
  the hero has floating gradient blobs and a shimmering gradient headline; stats count
  up with a spring animation when scrolled into view.
- **Responsiveness**: mobile nav collapses into a glass slide-in sheet; grids reflow
  from 1 → 2 → 3/4 columns across breakpoints; verified at mobile, tablet and desktop
  widths.
- **Content parity**: all 12 service lines, the 8 "why choose us" pillars, key stats
  (15,000+ workforce, 200+ clients, 20M+ sq. ft., years of operation), founder story,
  five-state presence, and contact details are carried over from the original site.

## Assets

No external image assets were used — all visuals (icons, gradients, grid/noise
textures, the founder placeholder panel) are generated in code (SVG/CSS), keeping the
bundle lightweight and avoiding placeholder stock photography.

## Deployment

Deploy on [Vercel](https://vercel.com/new) — no configuration needed, it auto-detects
Next.js. Or build and self-host:

```bash
npm run build
npm run start
```
