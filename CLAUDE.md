# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for SipraHub (siprahub.com). It is a client-side-only React 18 + TypeScript SPA built with Vite, Tailwind CSS and shadcn/ui. It was scaffolded with Lovable, and changes made in Lovable are committed to this repo automatically. There is no backend.

## Commands

```bash
npm i              # install (package-lock.json and bun.lockb both exist; npm is what the README documents)
npm run dev        # dev server on port 8080 (host "::")
npm run build      # production build to dist/
npm run build:dev  # development-mode build (enables lovable-tagger)
npm run lint       # eslint .
npm run preview    # serve the built dist/
```

There is no test framework and no typecheck script. Run `npx tsc -p tsconfig.app.json --noEmit` to typecheck. TypeScript is configured loosely (`strict: false`, `noImplicitAny: false`, `strictNullChecks: false`).

## Architecture

- **Routing**: every route is declared in `src/App.tsx` (react-router v6 `BrowserRouter`). New routes must go above the catch-all `*` route. `public/_redirects` (`/* /index.html 200`) provides the SPA fallback on the host. When you add public pages, also update `public/sitemap.xml`.
- **Pages** (`src/pages/`, service pages in `src/pages/services/`): most pages render `<Navigation />` and `<Footer />` themselves. Only a few (privacy, terms) use `src/components/PageLayout.tsx`. Per-page meta tags come from `src/components/SEO.tsx` (react-helmet-async). Canonical URLs and OG images point at `https://siprahub.com`.
- **Content is static TypeScript data** in `src/data/` (`blogPosts.ts`, `resources.ts`, `caseStudies.ts`, `services.ts`). Detail routes (`/blog/:slug`, `/resources/:slug`) find their entry by slug; the slug comes from `slugify(title)` in `blogPosts.ts`. Changing a title therefore changes its URL.
- **Integration with ai.siprahub.com**: AI services, "Our Work" (case studies) and the blog live on the separate `ai.siprahub.com` site. The navbar, footer and several pages link there with plain `<a href>` tags. `/case-studies` and `/our-work` are hard-redirected there with `window.location.replace`. Use `<a>` for these external links and `<Link>` for internal routes.
- **Forms**: the resume submission page (`src/pages/ResumeSubmission.tsx`) sends email directly from the browser via `@emailjs/browser`. The service and template IDs are constants in that file.
- **UI**: shadcn/ui primitives live in `src/components/ui/` (config: `components.json`). Use the `@/` import alias, which maps to `src/`. Brand colors are HSL CSS variables in `src/index.css` (primary is SipraHub red), exposed through `tailwind.config.ts`. Prefer these tokens over hard-coded colors.
- `case-studies` at the repo root is a single markdown notes file, not a directory or submodule. `.gitmodules` is empty.
