# Repository Guidelines

## Project Structure & Module Organization
- Source code lives under `src/app` using the Next.js App Router. Directory segments become routes (`page.tsx` entry, `layout.tsx` root), with feature-specific routes like `assessment-results/page.tsx` and `uae-desktop/page.tsx`.
- Global styles sit in `src/app/globals.css`; shared static assets go in `public`. Core configs (`next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`) stay at the repo root.

## Build, Test, and Development Commands
- `npm run dev` launches the local server with Turbopack for rapid iteration.
- `npm run build` compiles the production bundle and surfaces type or lint errors.
- `npm run start` serves the last build; use it for pre-deploy smoke tests.
- `npm run lint` runs the Next.js ESLint config; append `--fix` when it is safe to auto-remediate.

## Coding Style & Naming Conventions
- Write TypeScript React function components and default-export route entries. Name route files `page.tsx` or `layout.tsx`; place shared utilities in future `src/lib` modules with camelCase filenames.
- Keep 2-space indentation, double quotes (current ESLint preference), and Tailwind utility classes instead of bespoke CSS when practical.
- Prefer PascalCase component names and camelCase hooks/state. Co-locate route-specific helpers beside their route directory.

## Testing Guidelines
- Playwright is the chosen E2E runner. Place specs under `tests/e2e` with filenames like `home.spec.ts`.
- Bootstrap browsers once with `npx playwright install`. Run suites via `npx playwright test`; add `--ui` during development for focused runs.
- Aim to cover each new feature’s primary user journey and document notable gaps in the PR description.

## Commit & Pull Request Guidelines
- Follow the existing short, imperative commit style (for example, “Add assessment results route”). Group related changes and note lint/test runs in the body when relevant.
- PRs should describe the surface change, validation steps, and outstanding TODOs. Link tracking issues and attach screenshots for UI updates.
- Request review early when adding routes or shared styles to keep navigation and global CSS cohesive.
