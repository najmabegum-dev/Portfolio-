# Repository instructions for GitHub Copilot

Project: Najma Begum's backend and AI-systems portfolio (headline: "Beyond prompts. Into systems."). The full spec is in docs/PRD.md. Read it before large changes.

## Stack and commands

- Next.js 16.4+ (App Router, React 19.2), TypeScript strict, Tailwind v4, pnpm, Node LTS from .nvmrc.
- Before using any Next.js API, read the version-matched docs in node_modules/next/dist/docs or the AGENTS.md block that `next dev` writes.
- Verify everything with `pnpm verify`; e2e with `pnpm e2e`.

## Rules

- Server Components by default. Add "use client" only for interaction, and keep client islands small.
- Validate every external input (request bodies, env, content) with Zod. No `any`; no non-null assertions without a comment.
- Secrets only from `env.ts` (server-only). Never log secrets or user message bodies. Never add a phone number or email address anywhere (the contact form is the only contact path). Any resume PDF in public/ must be a copy without them.
- Content facts: only use facts from docs/PRD.md or the project's README. If unsure, set `published: false` and ask.
- Accessibility is a requirement: semantic HTML, visible focus, reduced-motion support, AA contrast. Blur/dim effects must never remove content from the accessibility tree.
- Performance: no new dependency without justification; lazy-load anything heavy (3D, large libraries).
- Styling: use the CSS tokens in globals.css; no hard-coded colors in components.
- Tests: add or update unit tests for pure logic and a Playwright test for new user journeys.
- Commits: Conventional Commits, small and focused. Never commit .env files or photos-src/.
- Do not invent features outside docs/PRD.md; propose them in the PR description instead.
