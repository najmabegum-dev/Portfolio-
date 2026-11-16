# Najma Begum — Backend & AI Systems Portfolio

Portfolio project for **“Beyond prompts. Into systems.”**

The product requirements and delivery phases are documented in [docs/PRD.md](docs/PRD.md). Repository-specific Copilot guidance is in [.github/copilot-instructions.md](.github/copilot-instructions.md).

## Requirements

- Node.js 24 or newer
- pnpm 10.28.2 (the version pinned in `package.json`)

## Local development

```powershell
pnpm install
Copy-Item .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Add provider credentials to `.env.local` only when implementing the related feature; never commit that file.

## Checks

```powershell
pnpm verify
pnpm e2e
```
