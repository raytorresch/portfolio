# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Ray Torres's personal developer portfolio (raytorres.dev) — a single-page Next.js site showcasing production projects (mostly GovTech platforms built with Flutter/Laravel/Go/Firebase), plus one dedicated case-study page for Bitácora Digital.

## Commands

```bash
pnpm install   # install deps
pnpm dev       # start dev server (localhost:3000)
pnpm build     # production build
pnpm start     # run production build
pnpm lint      # eslint
```

There is no test suite. Package manager is pnpm (enforced via `pnpm-workspace.yaml`, single-package workspace).

## Architecture

- **Next.js App Router**, TypeScript, Tailwind CSS v4 (via `@tailwindcss/postcss`, configured through the `@theme inline` block in `app/globals.css` — no `tailwind.config.*` file).
- `app/page.tsx` is the entire homepage: it just composes section components in order (`Hero`, `StatStrip`, `Projects`, `Proof`, `Contact`) inside a centered `max-w-3xl` column. There's no routing beyond this and the one case-study page.
- `app/work/bitacora/page.tsx` is a standalone, self-contained case-study page (its own metadata, data arrays, and JSX — not built from shared components). Use it as the template if adding another case-study page under `app/work/<project>/`.
- `components/*.tsx` are flat, single-purpose, mostly presentational sections consumed only by `app/page.tsx`. Content (project list, stats, copy) lives inline as typed data arrays at the top of each component (see `components/Projects.tsx`), not fetched from a CMS or API.
- Dark mode is done via `@media (prefers-color-scheme: dark)` CSS variables in `app/globals.css` plus Tailwind `dark:` variants — there's no theme toggle/JS-driven theme switching.
- `@/*` path alias maps to the repo root (`tsconfig.json`).
- `ref/` holds a local, git-ignored CV reference doc used as source material for project copy — it is not part of the app.

## Content notes

Project data (names, stats, revenue figures, user counts) reflects real production numbers and has been deliberately corrected from earlier estimates to actual figures (see recent commit history). When editing copy with numbers, treat them as verified facts, not placeholders — don't round or rephrase them loosely.

## Rules

### Copy & voice
- Never use AI-typical filler: "leverage", "utilize", "streamline", "robust", 
  "seamlessly", "cutting-edge", "passionate about", "excited to", "delighted".
- Write in plain, direct English. One idea per sentence.
- Numbers must match the CV reference exactly — no rounding up, no loose 
  rephrasing ("over 2,900" is fine; inventing "nearly 3,000" is not).
- If a required fact is not present in the CV reference, insert [PENDING] 
  and stop — do not infer or approximate.
- Do not add superlatives or qualitative claims not supported by the CV 
  ("best", "highly optimized", "world-class", etc.).

### Code conventions
- Follow the existing component pattern in components/*.tsx — content as 
  typed data arrays at the top, no external data fetching.
- Do not install new dependencies without explicit confirmation.
- Do not create new abstractions or refactor existing components unless 
  explicitly asked.
- Do not modify files outside the scope of the current task.

### Git
- Commit messages in English, conventional commits format: 
  type(scope): description
- Types: feat, fix, refactor, chore, docs, style
- Description in lowercase, imperative mood, no period at the end
- Examples:
  feat(i18n): add ES locale for home page
  fix(hero): correct user count in stat strip
  chore(content): update bitacora stats from CV