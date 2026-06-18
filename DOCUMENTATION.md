# Technical Documentation — renukswamy-website

This document explains how the site is built, why each technology was chosen, how a request flows from URL to rendered page, and what each file is responsible for. It's written so you can confidently explain the project to someone else — a collaborator, an interviewer, or future-you six months from now.

---

## 1. One-paragraph summary (the elevator pitch)

This is a statically-generated personal academic website built with **Next.js 16** (App Router) and **React 19**, written in **TypeScript**, styled with **Tailwind CSS v4**. There is no database and no backend API — every page is plain content defined directly in React components, so the entire site can be pre-rendered into static HTML at build time and served from a CDN with no server runtime required. The only client-side JavaScript that ships is for genuinely interactive pieces: the mobile navigation menu and the achievements carousel on the home page. Everything else is a **React Server Component**, which means it renders to HTML once at build time and adds zero JavaScript to the page.

---

## 2. Technology stack and why each piece was chosen

| Layer | Technology | Why this, specifically |
|---|---|---|
| Framework | **Next.js 16** (App Router) | File-based routing means a folder structure *is* the sitemap — no router config to maintain. Built-in static rendering, image optimization, and font optimization out of the box, which matters a lot for a content-only site with no backend. |
| UI library | **React 19** | Next.js is built on React; 19 brings the stable Server Components model the whole app relies on. |
| Language | **TypeScript** | Catches typos in props, route names, and data shapes (e.g. a publication object missing a field) at compile time instead of as a broken page in production. |
| Styling | **Tailwind CSS v4** | Utility classes keep styling co-located with markup (no separate CSS files to keep in sync), and v4's CSS-first configuration (see §6) means the entire design system — colors, fonts — lives in one readable block instead of a JS config file. |
| Fonts | **next/font** (Geist, Geist Mono, Space Grotesk) | Self-hosts Google Fonts at build time — no runtime request to Google's font CDN, no layout shift while fonts load, and no separate `<link>` tags to manage. |
| Images | **next/image** | Automatically serves correctly-sized, modern-format images and lazy-loads them, without writing any of that logic by hand. |
| Hosting model | Static export / Node server (your choice) | Because every page is just React + static data (no live database calls), the whole site can be exported to static HTML/CSS/JS and hosted anywhere — Vercel, Netlify, GitHub Pages, a plain Nginx box — there is no infrastructure dependency. |

No state-management library, no CMS, no API layer, no database. That's a deliberate choice: a personal academic site's content changes a few times a year, not a few times a minute, so the simplest possible architecture — content as code — is the right one. If that ever changes (e.g. you want to edit publications from a phone without touching code), see §11 for what would need to change.

---

## 3. Architecture: how Next.js's App Router actually works here

Next.js's **App Router** uses your folder structure as the routing table. Every folder inside `app/` that contains a `page.tsx` becomes a URL route:

```
app/page.tsx                  ->  /
app/about/page.tsx            ->  /about
app/research/page.tsx         ->  /research
app/teaching/page.tsx         ->  /teaching
app/publications/page.tsx     ->  /publications
app/consulting/page.tsx       ->  /consulting
app/collaborate/page.tsx      ->  /collaborate
```

There's no `react-router`-style route configuration file anywhere — the file path *is* the route. `app/layout.tsx` wraps every single page (it renders the `<html>`/`<body>` shell, the `<Navbar>`, and the `<Footer>` once, and each page's content is injected into it as `children`).

### Server Components vs. Client Components (the most important concept in this codebase)

React 19 + Next.js App Router introduces a split between two kinds of components:

- **Server Components** (the default — no special syntax needed). These run once, at build time, produce static HTML, and ship **zero JavaScript** to the browser for that component. Every page in this site (`Home`, `About`, `Research`, `Teaching`, `Publications`, `Consulting`, `Collaborate`) is a Server Component, because none of them need to react to clicks, hold state, or touch the browser — they're just structured content.
- **Client Components** (opt-in via the `"use client"` directive at the very top of the file). These hydrate in the browser and can use `useState`, `useRef`, `useEffect`, event handlers, and browser-only APIs like `window.matchMedia`. Only three files in this project need this: **`Navbar.tsx`** (the mobile hamburger menu needs open/close state), and **`AwardsMarquee.tsx`** (the achievements carousel needs drag handling, scroll position, and an animation loop).

This split is *why* the site is fast: the vast majority of the page is pure HTML with no attached JavaScript at all, and only the small interactive widgets pay the cost of hydration.

### Static rendering

Because no page reads from a database, calls an external API, or depends on the logged-in user, Next.js can render every route to plain HTML **at build time** (`next build`). The output is the same for every visitor, so it can be cached on a CDN indefinitely until you rebuild and redeploy. This is the same rendering strategy you'd get from a static site generator like Jekyll or Hugo, but written in React/TypeScript with all of Next.js's tooling around images, fonts, and routing.

---

## 4. Full project structure

```
renukswamy-website-main/
├── app/
│   ├── layout.tsx              # Root shell: <html>, fonts, <Navbar>, <Footer>, page <metadata>
│   ├── page.tsx                # Home page ( / )
│   ├── globals.css             # Tailwind import + design tokens (colors, fonts)
│   ├── favicon.ico
│   │
│   ├── about/page.tsx          # /about — bio, timeline, research vision
│   ├── research/page.tsx       # /research — research pillars, selected projects
│   ├── teaching/page.tsx       # /teaching — courses taught, supervision, philosophy
│   ├── publications/page.tsx   # /publications — full publication list, grouped by year
│   ├── consulting/page.tsx     # /consulting — services, audience, process, workshops
│   ├── collaborate/page.tsx    # /collaborate — collaboration tracks + contact CTA
│   │
│   └── components/
│       ├── Navbar.tsx          # Client component — sticky nav, active link state, mobile menu
│       ├── Footer.tsx          # Server component — site links, social icons
│       ├── Icons.tsx           # Shared inline SVG icon set (no icon library dependency)
│       └── AwardsMarquee.tsx   # Client component — interactive achievements carousel
│
├── public/
│   ├── profile.jpg             # Hero/about portrait
│   ├── Renukswamy-Chikkamath-CV.pdf
│   └── awards/                 # 9 achievement/award images referenced by AwardsMarquee.tsx
│
├── next.config.ts              # Next.js build configuration (currently defaults)
├── tsconfig.json               # TypeScript compiler configuration
├── postcss.config.mjs          # Registers the Tailwind v4 PostCSS plugin
├── eslint.config.mjs           # Linting rules (Next.js's recommended config)
├── package.json                # Dependencies + npm scripts (dev/build/start/lint)
└── DOCUMENTATION.md             # This file
```

Anything under `public/` is served as-is from the site root — `public/profile.jpg` is reachable at `yoursite.com/profile.jpg`, which is why components reference it as `src="/profile.jpg"`.

---

## 5. File-by-file breakdown

### `app/layout.tsx` — the root shell
Every page in the App Router is rendered *inside* this file's `children` slot. It does three jobs: loads the three Google Fonts via `next/font` and exposes them as CSS variables; renders `<Navbar />` and `<Footer />` once so they appear on every page without being repeated in each page file; and exports a `metadata` object (title + description) that Next.js automatically turns into `<title>` and `<meta name="description">` tags for SEO — this is the modern Next.js replacement for manually writing `<head>` tags.

### `app/globals.css` — the design system
This is the single source of truth for the visual identity. Tailwind v4 is imported with one line (`@import "tailwindcss"`), and then an `@theme` block defines custom design tokens — `--color-ink`, `--color-accent`, `--font-display`, etc. Tailwind automatically turns each `--color-x` token into ready-to-use utility classes (`bg-ink`, `text-accent`, `border-line`, and so on), so the whole color palette and type system is defined in one readable place instead of being scattered across components as raw hex codes. It also defines the global focus-ring style for accessibility and a `prefers-reduced-motion` override so animations are disabled for visitors who've asked their OS to reduce motion.

### `app/page.tsx` — the Home page
The highest-traffic page, structured top to bottom as: hero (headline, positioning statement, photo, CTA buttons, quick stats), a grid of six research-pillar cards, the `<AwardsMarquee />` component, a row of featured publications, and a closing call-to-action banner. It's a pure Server Component — no `"use client"` — because nothing on it needs interactivity beyond standard link clicks.

### `app/about/page.tsx`, `app/research/page.tsx`, `app/teaching/page.tsx`, `app/publications/page.tsx`, `app/consulting/page.tsx`, `app/collaborate/page.tsx`
Each follows the same pattern: a small TypeScript array or object near the top of the file holds the actual content (timeline entries, course list, publication metadata, service descriptions), and the JSX below simply maps over that data to render cards/lists. This separation means updating content — adding a new publication, a new course, a new collaboration track — means editing a plain data array, not hunting through markup.

### `app/components/Navbar.tsx` — client component
Marked `"use client"` because it needs `useState` to track whether the mobile menu is open, and Next.js's `usePathname()` hook to know which nav link is "active" (so it can underline the current page). On screens narrower than the `lg` breakpoint it collapses into a hamburger button; above that, it shows the full link list plus a "Get in Touch" button.

### `app/components/Footer.tsx` — server component
Plain content: site navigation links, social/profile links (LinkedIn, Google Scholar, ORCID, GitHub, email), and the copyright line. No interactivity, no client directive needed.

### `app/components/Icons.tsx` — shared icon set
Every icon on the site (arrows, social-profile badges, menu/close glyphs) is a small inline SVG React component defined here, rather than pulling in an icon library like `lucide-react`. For a handful of simple icons, hand-written SVGs avoid an extra dependency and give exact control over stroke weight to match the design system.

### `app/components/AwardsMarquee.tsx` — the most complex file in the project
This is the achievements carousel on the Home page, and it's the one component that genuinely needs deep explanation — see §7 below.

---

## 6. The styling system in detail (Tailwind CSS v4)

Older Tailwind versions (v3 and earlier) required a separate `tailwind.config.js` file with a JavaScript object describing your color palette, fonts, and breakpoints. **Tailwind v4 changed this to a CSS-first model** — there is no `tailwind.config.js` in this project at all. Instead, `app/globals.css` contains:

```css
@import "tailwindcss";

@theme {
  --color-ink: #0b1220;
  --color-accent: #c2880a;
  --font-display: var(--font-space-grotesk);
  /* ... */
}
```

Tailwind reads this `@theme` block at build time and automatically generates matching utility classes — defining `--color-accent` makes `bg-accent`, `text-accent`, and `border-accent` all available everywhere in the project, with no manual class definitions. `postcss.config.mjs` simply tells PostCSS to run the `@tailwindcss/postcss` plugin, which is what actually scans every `.tsx` file for class names and generates the final CSS bundle — only the classes you actually use end up in the shipped CSS, keeping the stylesheet small regardless of how many utility classes Tailwind theoretically offers.

---

## 7. Deep dive: how the achievements carousel works

This is worth understanding in detail because it's the one place in the codebase doing real client-side engineering rather than just rendering content.

**The looping illusion.** The 9 achievement cards are rendered *twice*, back to back (`const track = [...achievements, ...achievements]`), inside one horizontally scrollable `<div>` (`overflow-x-auto`). An effect runs a `requestAnimationFrame` loop that slowly increases `scrollLeft` every frame. When `scrollLeft` passes the width of *one* copy of the list, the code instantly subtracts that same width back off — since the second copy is visually identical to the first, that jump is imperceptible, producing the illusion of an infinitely looping strip using only two copies of the content.

**Why `requestAnimationFrame` instead of `setInterval`, and why it tracks elapsed time.** `requestAnimationFrame` syncs with the browser's actual repaint cycle, so the motion looks smooth rather than choppy. The loop also measures the real time elapsed between frames (`timestamp - lastTimestamp`) rather than assuming a fixed frame rate — without that, the carousel would scroll twice as fast on a 120Hz display as on a 60Hz one.

**Three independent ways to take manual control, all routed through the same scroll position:**
- *Mouse drag* — `onPointerDown`/`onPointerMove` (filtered to `pointerType === "mouse"` so it doesn't fight with native touch scrolling) record the starting mouse position and starting `scrollLeft`, then directly set `scrollLeft` as the mouse moves.
- *Touch / trackpad swipe* — handled entirely by the browser natively, because `overflow-x-auto` on its own already makes an element touch-scrollable; no custom code is needed for this case.
- *Keyboard / buttons* — the container has `tabIndex={0}` so it's reachable by Tab, and an `onKeyDown` handler listens for the arrow keys; the two round buttons call the exact same `scrollByPage()` function on click.

**Pausing.** A plain `useRef` boolean (`pausedRef`) — not React state — tracks whether auto-scroll should currently run. It's a ref rather than state deliberately: changing it doesn't need to trigger a re-render (the animation frame loop reads it directly), so using `useState` here would just cause unnecessary re-renders for no benefit. Hovering, dragging, or focusing the carousel sets it to `true` immediately; releasing it schedules a `setTimeout` to flip it back to `false` after a short delay, so the auto-scroll doesn't jolt back into motion the instant you let go.

**Accessibility details worth knowing:** the duplicated second half of the list is marked `aria-hidden="true"` so screen readers announce each achievement once, not twice. The whole region has `role="region"` and a descriptive `aria-label` explaining the available interactions. The entire auto-scroll loop is skipped outright if the visitor's OS has `prefers-reduced-motion` enabled — manual controls still work, but nothing moves on its own.

---

## 8. Request-to-pixels: what happens when someone visits a page

1. **Build time** (`next build`, run once before deployment): Next.js walks the `app/` folder, finds every `page.tsx`, renders each one (and its Server Component children) to static HTML, and writes out the corresponding JavaScript bundles — but only for the Client Components (`Navbar`, `AwardsMarquee`). Images referenced via `next/image` are analyzed so the browser can request correctly-sized variants later.
2. **A visitor requests `/research`**: the pre-built HTML for that route is served immediately — there's no server-side computation happening per-request, because the page was already fully rendered at build time.
3. **The browser paints the HTML** instantly, since it's complete markup, not an empty `<div id="root">` waiting for JavaScript (which is how older single-page React apps worked).
4. **Hydration**: React then attaches event listeners to the *interactive* parts only (the navbar's hamburger button, the marquee's drag handlers) — this is "hydration," and it's why the rest of the page (plain text, links, images) needs no JavaScript at all to be fully functional.

---

## 9. Accessibility and performance choices made throughout

Focus rings are explicitly styled (`globals.css`) so keyboard users can always see what's focused. The mobile nav menu is a real toggled element with `aria-expanded`. All images have descriptive `alt` text. The carousel's motion respects `prefers-reduced-motion` and is fully operable by keyboard. On the performance side: fonts are self-hosted via `next/font` (no external font-loading request, no flash-of-unstyled-text), images are served through `next/image` (automatic resizing/lazy-loading), and the static-rendering model means there's no per-request server computation or database round-trip on any page.

---

## 10. Running, building, and deploying

```bash
npm install        # install dependencies
npm run dev         # local development server with hot reload, at localhost:3000
npm run build       # production build — generates the static/optimized output
npm run start       # serves the production build locally (after `build`)
npm run lint        # runs ESLint with Next.js's recommended rule set
```

Because the site has no database and no server-side logic beyond rendering, it can be deployed to any static-friendly host. Vercel (the company behind Next.js) is the path of least resistance — connecting the GitHub repo deploys automatically on every push. Netlify, Cloudflare Pages, or a plain static export (`next build` with `output: "export"` in `next.config.ts`) hosted on something like GitHub Pages or a basic Nginx server are equally valid, since there's no runtime dependency the static files need.

---

## 11. If you outgrow "content as code" later

Right now, every piece of content (the publication list, the course list, the achievements) lives as a TypeScript array directly inside the page file that renders it. That's the simplest possible setup and is genuinely the right call for a site that changes a handful of times a year. If that ever stops being true — for example, you want to add a publication from your phone without opening a code editor, or you want the Publications page suggested earlier (ORCID auto-sync) — the natural next step is moving that specific page's data out to a small JSON/Markdown file or a headless CMS, while leaving the rest of the architecture (Server Components, static rendering, Tailwind) completely untouched. None of today's structure needs to change to support that later; only the *source* of the data array would move.

---

## 12. Quick reference: explaining this project out loud

If someone asks "how did you build this," the short version is: *"It's a Next.js site using the App Router — meaning the folder structure defines the routes — written in TypeScript and styled with Tailwind CSS v4. Almost the entire site renders to static HTML at build time with React Server Components, so there's effectively no runtime JavaScript cost for most of the page; the only client-side interactivity is the mobile nav menu and an achievements carousel, both explicitly opted into client-side rendering. There's no database — content lives as typed data structures in the page files themselves, which keeps the whole thing simple, fast, and free to host anywhere static files are served."*

If they probe further, the concepts worth being fluent in are: **Server Components vs. Client Components** (default vs. `"use client"`, and the JS-payload tradeoff between them), **static rendering** (build-time HTML generation vs. per-request server rendering vs. client-side rendering), **hydration** (why HTML appears instantly but interactivity attaches a moment later), and **Tailwind's utility-first, CSS-first (v4) approach** (design tokens defined once, utility classes generated automatically, no separate config file).
