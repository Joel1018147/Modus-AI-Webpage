---
name: TikTok tracking (modus-ai)
description: Non-obvious constraints for the TikTok Pixel + Events API integration on the MODUS AI site.
---

# TikTok tracking integration

- Pixel ID lives in `index.html` + `TIKTOK_PIXEL_ID` shared env var; the Events API access token is `TIKTOK_ACCESS_TOKEN` (Replit Secret, server-only — never send to browser).
- Browser `Lead` (pixel `ttq.track`) and server `Lead` (POST `/api/tiktok-events` → Events API) MUST share the same `event_id` so TikTok deduplicates them into one conversion.
  **Why:** server-side gives reliable hashed email/IP/UA; browser gives client signals. Without a shared event_id they double-count.
- TikTok Pixel `content_type` only accepts e-commerce values ("product", "product_group", "destination", "hotel", "flight", "vehicle"). For a lead-gen site, OMIT `content_type` entirely (use only `content_name`) or the console floods with "Invalid content type" warnings. The "Missing content_id" warning is VSA-only and safe to ignore.
- Server email must be SHA256-hashed (lowercased+trimmed) before sending to the Events API.
