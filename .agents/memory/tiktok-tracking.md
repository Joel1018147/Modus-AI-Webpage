---
name: TikTok tracking (modus-ai)
description: Non-obvious constraints for the TikTok Pixel + Events API integration on the MODUS AI site.
---

# TikTok tracking integration

- Pixel ID lives in `index.html` + `TIKTOK_PIXEL_ID` shared env var; the Events API access token is `TIKTOK_ACCESS_TOKEN` (Replit Secret, server-only — never send to browser).
- Browser `Lead` (pixel `ttq.track`) and server `Lead` (POST `/api/tiktok-events` → Events API) MUST share the same `event_id` so TikTok deduplicates them into one conversion.
  **Why:** server-side gives reliable hashed email/IP/UA; browser gives client signals. Without a shared event_id they double-count.
- ViewContent events MUST include `content_id` (+ `content_name`, `content_type`) or TikTok Events Manager reports "Content ID is missing". `trackViewContent` takes `{contentId, contentName, contentType}`.
  **Why:** the client explicitly requires all three fields on ViewContent (ids like "homepage", "details"); the site only has 2 routes (`/`, `/details`).
- Tradeoff: TikTok Pixel `content_type` only *validates* e-commerce values ("product", "product_group", "destination", "hotel", "flight", "vehicle"). Using `content_type: "service"` (client's explicit choice) triggers a cosmetic dev-console "Invalid content type" advisory — it does NOT cause an Events Manager error and does NOT break tracking. Do NOT "fix" this by removing content_type; the client wants it.
- Server email must be SHA256-hashed (lowercased+trimmed) before sending to the Events API.
