# TikTok Tracking Audit — Phase 1

_Audit date: 2026-05-29_

## Scope

Audit of the TikTok Pixel implementation present in the MODUS AI Associates
website (`artifacts/modus-ai`) prior to the Events API / conversion tracking
upgrade.

## Current implementation

The TikTok Pixel base snippet is installed inline in the document head at
`artifacts/modus-ai/index.html`, between the `<head>` tags. It uses the
standard async loader and calls:

```js
ttq.load('D8CG7URC77U91RGD2EIG');
ttq.page();
```

## Findings

| Check | Status | Notes |
| --- | --- | --- |
| Pixel loads once | ✅ Pass | The loader is included exactly once in `index.html`. There are no duplicate `<script>` snippets and no second `ttq.load(...)` call anywhere in the codebase. |
| No duplicate tracking | ✅ Pass | Only one `ttq.page()` call exists (the base snippet). No component re-injects the pixel. |
| Page views firing | ⚠️ Partial | `ttq.page()` fires on the initial full-page load. **This app is a single-page app (wouter router)**, so client-side navigations between `/` and `/details` did **not** previously fire an additional page view. Addressed in the upgrade by re-firing `ttq.page()` on route change. |
| Existing events functioning | ✅ Pass (none existed) | No custom events (`ClickButton`, `ViewContent`, `Lead`, etc.) were implemented before this upgrade — only the automatic page view. |
| Access token exposure | ✅ Pass | No Events API access token was present in the frontend. The token introduced in this upgrade is stored in Replit Secrets and used only server-side. |

## Pixel ID

- Pixel ID: `D8CG7URC77U91RGD2EIG` (also stored as the `TIKTOK_PIXEL_ID` shared
  environment variable for server-side use).

## Conclusion

The base pixel was healthy (single load, no duplication) but only tracked
automatic page views, and those were missed on SPA route changes. The upgrade
(Phases 2–7) adds SPA page-view tracking, button/contact/inquiry conversions,
ViewContent events, and deduplicated browser + server-side Lead tracking via the
TikTok Events API.
