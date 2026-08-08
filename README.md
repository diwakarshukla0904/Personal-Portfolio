# Diwakar Shukla — Personal Portfolio

A simple, one-page professional portfolio built with Next.js, TypeScript, React, and plain CSS. It is intentionally small so the structure is easy to understand and change.

## What is Next.js?

[Next.js](https://nextjs.org/) is a framework built on React. React provides components for building the interface; Next.js adds the project structure, routing, metadata, performance optimizations, development server, and production build process. This project uses the modern **App Router**, where files inside `src/app` define the website.

## Project structure

```text
Personal-Portfolio/
├── public/                    # Static files such as future photos or PDFs
├── src/
│   ├── app/
│   │   ├── globals.css       # All colors, spacing, layout, and responsive styles
│   │   ├── layout.tsx        # Site-wide fonts and search/social metadata
│   │   ├── page.tsx          # The one-page portfolio interface
│   │   ├── icon.svg          # Browser tab icon
│   │   ├── opengraph-image.tsx # Social sharing image
│   │   ├── robots.ts         # Search-engine instructions
│   │   └── sitemap.ts        # Search-engine page listing
│   ├── components/
│   │   └── section-heading.tsx # Reusable heading component
│   └── data/
│       └── portfolio.ts      # Your editable personal content
├── package.json              # Project commands and dependencies
└── pnpm-lock.yaml            # Exact dependency versions
```

## Change your personal information

Most content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).

Open it to update your name, role, biography, email, social links, experience, projects, education, or skills. The page reads that data automatically, so you usually do not need to edit the React components when changing content.

## Add a new project

In `src/data/portfolio.ts`, find the `projects` list and add another object before the closing `]`:

```ts
{
  name: "My New Project",
  description: "A clear explanation of the problem, what I did, and the result.",
  technologies: ["Tool one", "Tool two", "Tool three"],
},
```

Save the file. If the development server is running, the browser will update automatically.

## Change colors or styling

Open [`src/app/globals.css`](src/app/globals.css).

The colors are variables at the top of the file:

```css
:root {
  --ink: #162421;
  --paper: #fbfaf6;
  --accent: #096a5a;
}
```

Changing `--accent`, for example, updates the green accent across the site. The rest of the file is organized roughly in the same order as the page: navigation, hero, sections, projects, contact, and responsive rules.

## Run the website locally

You need [Node.js](https://nodejs.org/) 20.9 or newer and [pnpm](https://pnpm.io/installation) installed.

1. Clone the repository and enter it:

   ```bash
   git clone https://github.com/diwakarshukla0904/Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. Install the project dependencies:

   ```bash
   pnpm install
   ```

3. Start the local development server:

   ```bash
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

`pnpm install` reads `package.json` and downloads the packages the project needs. `pnpm run dev` runs the `dev` command from `package.json`, starting Next.js in development mode with fast browser updates.

To check production readiness, run:

```bash
pnpm run lint
pnpm run build
```

## How GitHub and Vercel deployment work

Vercel connects to this GitHub repository and watches its production branch, usually `main`.

```text
Edit files → commit the changes → push to GitHub → Vercel builds → site updates
```

- A push to `main` creates a new production deployment.
- A push to another branch can create a preview deployment.
- If a build fails, the current live production site stays unchanged and Vercel shows the error in its deployment logs.

## Save and publish a change

After editing and checking the site:

```bash
git status
git add src/data/portfolio.ts
git commit -m "Update portfolio content"
git push
```

- `git status` shows changed files.
- `git add` selects a file for the commit.
- `git commit` saves a named snapshot locally.
- `git push` sends that commit to GitHub. Vercel then starts a deployment automatically when Git integration is connected.

Use a short commit message that says what changed, such as `Add battery project` or `Update biography`.

## Files to learn first

1. **`src/data/portfolio.ts`** — learn how arrays and objects hold the content.
2. **`src/app/page.tsx`** — see how React maps that data into sections and cards.
3. **`src/app/globals.css`** — learn how CSS controls colors, spacing, layout, hover states, and mobile behavior.

After those, read `src/components/section-heading.tsx` to see a small reusable React component and `src/app/layout.tsx` to understand fonts and page metadata.
