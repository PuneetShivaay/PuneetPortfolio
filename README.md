
# Puneet Portfolio

Personal portfolio and technical blog built with Next.js and TypeScript. It demonstrates a modular component system, MDX-based content, and optimized Next.js image and layout patterns.

## Quick start

- Clone the repository:

```bash
git clone https://github.com/PuneetShivaay/PuneetPortfolio.git
cd PuneetPortfolio
```

- Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

- Build for production:

```bash
pnpm build
pnpm start
```

## Project overview

- **Tech stack:** Next.js, TypeScript, MDX, PostCSS
- **Styling:** Global CSS + PostCSS
- **Content:** MDX files drive the blog under `content/`

## Repository structure

- **package.json**: Project metadata and scripts ([package.json](package.json)).
- **content/**: MDX blog posts and articles (e.g. [content/typescript-best-practices.mdx](content/typescript-best-practices.mdx)).
- **public/**: Static assets and fonts ([public/](public/)).
- **src/app/**: Next.js App Router routes and pages ([src/app/layout.tsx](src/app/layout.tsx), [src/app/page.tsx](src/app/page.tsx)).
- **src/components/**: Reusable UI components and subfolders ([src/components/](src/components/)).
- **src/components/mdx/**: MDX-specific components (code blocks, media containers).
- **src/lib/**: Utility helpers and remark/rehype plugins ([src/lib/utils.ts](src/lib/utils.ts)).
- **src/data/**: Personal data and configuration (resume/profile) ([src/data/resume.tsx](src/data/resume.tsx)).
- **src/mdx-components.tsx**: MDX component mapping and render helpers.

## Editing content

- Update your profile and resume data in [src/data/resume.tsx](src/data/resume.tsx).
- Add or edit posts in `content/` as `.mdx` files.

## Deployment

- Vercel is recommended for zero-config deployment with the App Router. Alternatively, use any platform that supports Next.js 14.

## Contributing

- Feel free to open issues or PRs for improvements. For small edits, update content in `content/` or tweak components in `src/components/`.

## License

- Licensed under the MIT License — see [LICENSE](LICENSE).
