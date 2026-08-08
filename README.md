# Diwakar Shukla — Personal Portfolio

A one-page engineering portfolio built with Next.js, the App Router, TypeScript, React, and plain CSS. It is intentionally lightweight: there is no database, CMS, UI framework, or animation library.

## What is Next.js?

[Next.js](https://nextjs.org/) is a framework built on React. React provides components for building the interface; Next.js adds routing, metadata, font and asset optimization, a development server, and the production build process. This project uses the **App Router**, where files inside `src/app` define the website.

## Project structure

```text
Personal-Portfolio/
├── public/
│   ├── diwakar-shukla-portrait.webp # Portrait shown in the Profile section
│   └── diwakar-shukla-resume.pdf # Résumé linked throughout the site
├── src/
│   ├── app/
│   │   ├── globals.css           # Design system, layout, motion, responsive CSS
│   │   ├── layout.tsx            # Fonts and search/social metadata
│   │   ├── page.tsx              # One-page portfolio structure
│   │   ├── icon.svg              # Browser tab icon
│   │   ├── opengraph-image.tsx   # Generated social sharing image
│   │   ├── robots.ts             # Search-engine instructions
│   │   └── sitemap.ts            # Search-engine page listing
│   ├── components/
│   │   ├── project-study.tsx     # Featured project case-study layout
│   │   └── section-intro.tsx     # Reusable section heading
│   └── data/
│       └── portfolio.ts          # Editable personal and professional content
├── package.json                  # Commands and dependencies
└── pnpm-lock.yaml                # Exact dependency versions
```

## Where to change personal information

Most content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that one file to change the headline, biography, email, social links, experience, projects, education, or technical capabilities. TypeScript types at the top describe the required shape of each item and catch missing fields.

## Add or edit a project

Featured case studies live in the `projects` array in `src/data/portfolio.ts`. Each project contains:

- `title`, `eyebrow`, and `summary` for the introduction
- `context`, `contribution`, and `outcome` for the engineering brief
- `steps` for the process sequence
- `methods` for the compact methods list
- `visual` to choose one of the existing CSS diagrams: `interface`, `wafer`, or `steel`

Copy an existing project object, change every field, and give it the next `number`. Smaller projects belong in `additionalProjects` and need only a title, description, and methods line.

## Replace the résumé

Replace `public/diwakar-shukla-resume.pdf` with the new PDF and keep the same filename. The navigation and contact links will continue working. If you rename the file, also update `resumeHref` in `src/data/portfolio.ts`.

To replace the illustrated portrait, overwrite `public/diwakar-shukla-portrait.webp` with a new image using the same filename. Keep a vertical image ratio for the best result.

## Change colors, typography, or spacing

Open [`src/app/globals.css`](src/app/globals.css). The design tokens at the top control the visual system:

```css
:root {
  --ink: #242321;
  --paper: #f3f0e9;
  --accent: #b94726;
  --rail-width: 17rem;
}
```

Change `--accent` to update the oxide/copper accent. Font loading is configured in `src/app/layout.tsx`; font usage is assigned through `--serif`, `--sans`, and `--mono` in `globals.css`. Responsive layouts are near the bottom of the CSS file at 1050px, 860px, and 600px.

## Run the website locally

Install [Node.js](https://nodejs.org/) 20.9 or newer and [pnpm](https://pnpm.io/installation), then run:

```bash
git clone https://github.com/diwakarshukla0904/Personal-Portfolio.git
cd Personal-Portfolio
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- `pnpm install` reads `package.json` and downloads the exact packages the project needs.
- `pnpm run dev` starts Next.js in development mode; saved edits appear in the browser quickly.
- Stop the development server with `Ctrl+C`.

Before publishing, run:

```bash
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
```

These commands check code style, TypeScript correctness, and the same optimized production build Vercel creates.

## How GitHub and Vercel deployment work

Vercel is connected to this GitHub repository and its production branch, `main`.

```text
Edit files → commit → push to GitHub → Vercel builds → shukladiwakar.com updates
```

A push to `main` starts a production deployment. A push to another branch can create a preview deployment. If a build fails, the current production deployment remains live and the error appears in Vercel’s deployment logs.

## Save and publish a change

```bash
git status
git add src/data/portfolio.ts
git commit -m "Update portfolio project"
git push origin main
```

- `git status` shows changed files.
- `git add` chooses what will be included.
- `git commit` saves a named snapshot locally.
- `git push` sends it to GitHub, which triggers Vercel.

After pushing, check the Vercel deployment status and then open [shukladiwakar.com](https://shukladiwakar.com). A successful Git push does not by itself prove that the new deployment built correctly.

## Files to learn first

1. `src/data/portfolio.ts` — objects, arrays, TypeScript types, and all site content.
2. `src/app/page.tsx` — semantic HTML and how React maps data into sections.
3. `src/app/globals.css` — colors, typography, grids, hover states, and mobile layouts.
4. `src/components/project-study.tsx` — how a reusable component receives one project.
5. `src/app/layout.tsx` — optimized fonts, metadata, canonical URL, and social previews.
