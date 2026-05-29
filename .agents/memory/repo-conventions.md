---
name: Repo conventions
description: Non-obvious workspace conventions that contradict or extend replit.md.
---

# Repo conventions

- `replit.md` claims a root `pnpm run typecheck` exists; it does NOT. Root `package.json` only has `build`. Typecheck per-package: `pnpm --filter @workspace/<pkg> exec tsc -p tsconfig.json --noEmit`, and build libs with `pnpm exec tsc --build lib/<lib>`.
- `artifacts/modus-ai` home.tsx/details.tsx have pre-existing framer-motion `ease: string` Variant TS errors (TS2322). These are unrelated noise — ignore when checking your own changes.
- modus-ai frontend calls the API server via root-relative `/api/...` (not BASE_URL-prefixed); the shared proxy routes it. Keep consistent with the existing contact form.
- modus-ai is 7-language i18n (en, bm, cn, id, vn, ar, th) via a `content` object in `home.tsx`/`details.tsx`; `t = content[lang]` is a TS union, so ANY new user-facing string key MUST be added to all 7 members or typecheck fails — and every visible string (taglines, badges, etc.) should be localized, not hardcoded English.
- modus-ai SPA (wouter) has no built-in hash scrolling; `home.tsx` has a mount `useEffect` that scrolls to `window.location.hash` after a 200ms delay so deep links like `/#our-systems` work. Screenshots of hash URLs need this or they capture the hero.
- modus-ai "Our Systems" data (16 subsystems across 2 ecosystems) lives in a SHARED module `src/data/systems.ts` (exports `systemGroups`, `SYSTEM_DESCRIPTIONS: Record<Lang, Record<SystemId, string>>`, `SYSTEMS_I18N: Record<Lang, {...}>`, and the `SystemId` union). It is RENDERED as a section on the `/details` page (`details.tsx`, `id="systems"`, after the courses section) — NOT on the homepage. Why: the navbar sections (services/courses/activities/systems) all live on `/details`; home only has an Explore-grid card linking to `/details#systems`. Keeping i18n in `SYSTEMS_I18N` (not the page `content` union) avoids widening that union; `Record<Lang,...>`/`Record<SystemId,...>` still force full coverage. Navbar "Our Systems" link (hash "systems") is in `Navbar.tsx` NAV_LINKS for all 7 langs.
- modus-ai LanguageContext: `lang` is React state defaulting to "en" with NO persistence and NO URL param — you cannot screenshot a non-English view without clicking the in-app switcher. Trust the typed translation maps for non-EN verification.
