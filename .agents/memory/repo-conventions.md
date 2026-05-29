---
name: Repo conventions
description: Non-obvious workspace conventions that contradict or extend replit.md.
---

# Repo conventions

- `replit.md` claims a root `pnpm run typecheck` exists; it does NOT. Root `package.json` only has `build`. Typecheck per-package: `pnpm --filter @workspace/<pkg> exec tsc -p tsconfig.json --noEmit`, and build libs with `pnpm exec tsc --build lib/<lib>`.
- `artifacts/modus-ai` home.tsx/details.tsx have pre-existing framer-motion `ease: string` Variant TS errors (TS2322). These are unrelated noise — ignore when checking your own changes.
- modus-ai frontend calls the API server via root-relative `/api/...` (not BASE_URL-prefixed); the shared proxy routes it. Keep consistent with the existing contact form.
