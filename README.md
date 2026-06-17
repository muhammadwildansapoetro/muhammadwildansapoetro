# Muhammad's Portfolio

My personal developer portfolio. Minimalist, single-page, fully static — no backend required.

**Live:** [muhammadwildansapoetro.github.io](https://muhammadwildansapoetro.github.io)

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- Tailwind CSS v4
- Deployed as static files via GitHub Actions → GitHub Pages

## Project structure

```
src/
  App.tsx              # Page composition: Navbar → Hero → About → Projects → Contact → Footer
  main.tsx             # React entry point
  index.css            # Tailwind import + @theme tokens (accent color, fonts)
  components/          # Reusable, content-agnostic UI pieces (Navbar, Footer, ProjectCard, ThemeToggle, FadeIn, ...)
  sections/             # Page sections that compose components + data (Hero, About, Projects, Contact)
  data/                # Editable content: skills.ts, projects.ts, socials.ts
  hooks/               # useScrollFadeIn — scroll-triggered fade-in animations
  assets/              # Bundled images/icons referenced via import
public/                # Static files served as-is (favicon, photo placeholder, project thumbnails, 404.html)
```

The split is intentional: `sections/` own layout and data wiring, `components/` are dumb/reusable, and `data/` is where content lives separately from logic (see the table below).

## Getting started

```bash
bun install   # or: npm install
bun run dev   # or: npm run dev
```

Build for production:

```bash
bun run build   # outputs to dist/
bun run preview # preview the production build locally
```

## Editing content

Everything content-related lives in a handful of files — no need to touch component logic:

| What | Where |
| --- | --- |
| Name, tagline, bio | [`src/sections/Hero.tsx`](src/sections/Hero.tsx), [`src/sections/About.tsx`](src/sections/About.tsx), [`src/components/Navbar.tsx`](src/components/Navbar.tsx), [`src/components/Footer.tsx`](src/components/Footer.tsx) |
| Photo | Replace [`public/photo-placeholder.svg`](public/photo-placeholder.svg) (update the `src` in `About.tsx` if renamed) |
| Skills | [`src/data/skills.ts`](src/data/skills.ts) |
| Projects | [`src/data/projects.ts`](src/data/projects.ts) — add an object to the array to add a project. The first entry renders as the larger "case study" card. |
| Project thumbnails | `public/projects/` |
| Social links + email | [`src/data/socials.ts`](src/data/socials.ts) |
| Contact form endpoint | [`src/data/socials.ts`](src/data/socials.ts) — `contactFormEndpoint`, via [Formspree](https://formspree.io) |
| Accent color, fonts | [`src/index.css`](src/index.css) — the `@theme` block (`--color-accent`, `--font-heading`, `--font-body`) |
| SEO meta / Open Graph | [`index.html`](index.html) |

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds the site and deploys it to GitHub Pages on every push to `main`.

GitHub Pages is configured in **Settings → Pages → Build and deployment → Source → GitHub Actions**. The workflow builds the app and publishes the `dist/` output — check the **Actions** tab for progress.

### Notes on routing

This site is a single page with anchor-based smooth-scroll navigation (no client-side router), so there are no deep-link routes that can 404 on refresh. [`public/404.html`](public/404.html) simply redirects any unknown path back to the homepage.
