# Portfolio

A minimalist, single-page developer portfolio. Vite + React + TypeScript + Tailwind CSS. Fully static — no backend required.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- Tailwind CSS v4
- Deployed as static files via GitHub Actions → GitHub Pages

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

## Customizing content

Everything you're likely to want to change lives in a handful of files — no need to touch component logic:

| What | Where |
| --- | --- |
| Name, tagline, bio | [`src/sections/Hero.tsx`](src/sections/Hero.tsx), [`src/sections/About.tsx`](src/sections/About.tsx), [`src/components/Navbar.tsx`](src/components/Navbar.tsx), [`src/components/Footer.tsx`](src/components/Footer.tsx) |
| Photo | Replace [`public/photo-placeholder.svg`](public/photo-placeholder.svg) (update the `src` in `About.tsx` if you rename the file) |
| Skills | [`src/data/skills.ts`](src/data/skills.ts) |
| Projects | [`src/data/projects.ts`](src/data/projects.ts) — add an object to the array to add a project. The first entry in the array renders as the larger "case study" card. |
| Project thumbnails | `public/projects/` |
| Social links + email | [`src/data/socials.ts`](src/data/socials.ts) |
| Contact form endpoint | [`src/data/socials.ts`](src/data/socials.ts) — `contactFormEndpoint`. Sign up at [Formspree](https://formspree.io), create a form, and swap in your form ID. |
| Accent color, fonts | [`src/index.css`](src/index.css) — the `@theme` block (`--color-accent`, `--font-heading`, `--font-body`) |
| SEO meta / Open Graph | [`index.html`](index.html) |

Search the codebase for comments containing "SWAP IN" to find every placeholder.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds the site and deploys it to GitHub Pages on every push to `main`.

### 1. Set the Vite base path

Open [`vite.config.ts`](vite.config.ts) and set `base` to match how you're hosting the site:

- **User/org site** (repo named `your-username.github.io`, served at the domain root): keep `base: '/'`.
- **Project site** (any other repo name, served at `https://your-username.github.io/repo-name/`): set `base: '/repo-name/'`.

### 2. Enable GitHub Pages

In your repo on GitHub: **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.

### 3. Push to `main`

```bash
git push origin main
```

The workflow builds the app and publishes the `dist/` output. Check the **Actions** tab for progress, and your live URL will appear in the Pages settings once the first deploy finishes.

### Notes on routing

This site is a single page with anchor-based smooth-scroll navigation (no client-side router), so there are no deep-link routes that can 404 on refresh. [`public/404.html`](public/404.html) simply redirects any unknown path back to the homepage.
