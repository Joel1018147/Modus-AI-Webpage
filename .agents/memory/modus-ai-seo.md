---
name: modus-ai SEO architecture
description: How SEO/meta/JSON-LD work in the modus-ai SPA and its known crawler limits
---

# modus-ai SEO architecture

modus-ai is a client-rendered Vite/React SPA (wouter). SEO is split two ways:

- **Static shell (`index.html`)**: holds the ROOT canonical + OG/Twitter + global
  Organization & WebSite JSON-LD. These are shipped on EVERY path because there is
  no SSR/prerender. So a non-JS request to `/details` or the launch page sees the
  HOME page's canonical/OG until JS runs.
- **Per-route (`src/lib/seo.ts` `useSeo` hook)**: imperatively rewrites
  title/description/canonical/OG/Twitter and injects per-page JSON-LD
  (`data-seo="page"`, removed on unmount). This is what JS-capable crawlers (Google)
  and real users get.

**Decisions made (keep consistent):**
- Do NOT duplicate Organization JSON-LD: it lives only in `index.html`. Per-route
  `useSeo` should inject only page-specific schema (Breadcrumb / ImageObject).
- i18n is **single-URL, client-side** (LanguageContext, no `/en/` `/bm/` paths).
  There is intentionally NO hreflang and NO per-locale URL. All 7 langs share one URL
  per route; canonical points to that single URL.

**Known limitations (out of scope unless asked):** non-JS social unfurlers / strict
crawlers get root meta on subroutes; separate language versions are not independently
indexable. Fixing either requires SSR/prerender or locale routing — a major change.

**Why:** the initiative scope was client-side per-route SEO + 7-language content +
ceremony authority signals, not a rendering-architecture change.
