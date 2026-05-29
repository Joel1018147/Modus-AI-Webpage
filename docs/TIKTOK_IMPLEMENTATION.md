# TikTok Tracking Implementation — Final Report

_MODUS AI Associates website (`artifacts/modus-ai`) + API server (`artifacts/api-server`)._

## 1. Modified / new files

### Frontend (`artifacts/modus-ai`)
- `index.html` — TikTok Pixel base snippet (loaded once in `<head>`).
- `src/lib/tiktok.ts` — **new**. Typed pixel helpers + in-memory event log:
  - `trackPageView()` — SPA page views
  - `trackButtonClick(name)` — Phase 2
  - `trackViewContent(page)` — Phase 3
  - `trackContact(method)` — Phase 6 (WhatsApp / phone / email)
  - `trackInquiry(type)` — Phase 6 (consultation / AI / corporate training)
  - `trackLead(data)` — Phase 4 (browser **and** server, shared `event_id`)
  - `subscribeEvents()` / `generateEventId()`
- `src/components/dev/TikTokDebugPanel.tsx` — **new**. Phase 7 dev-only panel.
- `src/App.tsx` — fires `trackPageView()` on every route change; mounts the debug panel.
- `src/pages/home.tsx` — `ViewContent` (`homepage`) on load; `ClickButton` on the hero CTA (`start-ai-transformation`) and the explore nav cards (`explore-<id>`).
- `src/pages/details.tsx` — `ViewContent` (`details`) on load; email link → `Contact`; phone/call links → `ClickButton` (`call-button`); WhatsApp button (`whatsapp-button`, links to `https://wa.me/601111469065`) → `ClickButton`; `Lead` (`contact-form` / "AI Consultation Request") on successful form submit.

All `ViewContent`, `ClickButton`, and `Lead` events carry `content_id`, `content_name`,
and `content_type`, which resolves the Events Manager "Content ID is missing" and
"missing vertical funnel events" warnings (the funnel now spans ViewContent →
ClickButton → Lead).

### Backend (`artifacts/api-server`)
- `src/routes/tiktok.ts` — **new**. `POST /api/tiktok-events` → TikTok Events API (Phase 5).
- `src/routes/index.ts` — mounts the tracking router.

### Contract (`lib/api-spec`)
- `openapi.yaml` — `/tiktok-events` path + `TikTokEventRequest` / `TikTokEventResponse` schemas.
- Generated Zod schemas (`lib/api-zod`) and React Query client (`lib/api-client-react`) via `pnpm --filter @workspace/api-spec run codegen`.

### Secrets / env
- `TIKTOK_PIXEL_ID` — shared environment variable (`D8CG7URC77U91RGD2EIG`).
- `TIKTOK_ACCESS_TOKEN` — **Replit Secret**, server-only, never exposed to the browser.

### Docs
- `docs/TIKTOK_TRACKING_AUDIT.md` — Phase 1 audit.
- `docs/TIKTOK_IMPLEMENTATION.md` — this report.

## 2. Event architecture

```
                        ┌──────────────────────────────────────────────┐
                        │                  Browser                       │
                        │                                                │
  user action ───────►  │  src/lib/tiktok.ts                             │
                        │   ├─ ttq.track("ClickButton" | "ViewContent"  │
                        │   │              | "Contact" | "SubmitForm")   │
                        │   │            ─────────────► TikTok Pixel ───┐ │
                        │   └─ trackLead():                             │ │
                        │        ├─ ttq.track("Lead", {event_id:X}) ───┤ │
                        │        └─ POST /api/tiktok-events {event_id:X}│ │
                        └───────────────────────│─────────────────────┘ │
                                                 ▼                        ▼
                        ┌────────────────────────────────┐    ┌────────────────────┐
                        │   api-server /tiktok-events     │    │   TikTok servers    │
                        │   - validate (Zod)              │    │  dedupe by event_id │
                        │   - SHA256(email)               │    │  (browser + server  │
                        │   - add ip + user_agent         │    │   = one conversion) │
                        │   - POST Events API (3 retries) │───►│                     │
                        │   - Access-Token from Secret    │    └────────────────────┘
                        └────────────────────────────────┘
```

Browser `Lead` and server `Lead` share the same `event_id`, so TikTok counts a
single deduplicated conversion while gaining the reliability of server-side
delivery (hashed email, IP, user agent).

## 3. Testing instructions (development)

1. Open the site preview. Open the **TikTok events** panel (bottom-left, dev only).
2. Homepage load → a `ViewContent` (Homepage) and `PageView` row appear.
3. Click **Start Your AI Transformation** → `ClickButton` row; navigating fires `PageView` + `ViewContent` (Details Page).
4. On the details page, click the email or phone contact → `Contact` row.
5. Submit the contact form with a valid email → `Lead` row goes `pending` → `success` (or `error`), with the server API response shown inline.

Server endpoint smoke test (through the shared proxy):

```bash
curl -s -X POST localhost:80/api/tiktok-events \
  -H "Content-Type: application/json" \
  -d '{"event":"Lead","event_id":"test-123","event_time":1748500000,"url":"http://test","email":"test@example.com","name":"Tester"}'
```

- Without the secret configured → `{"success":false,"error":"Tracking not configured."}`
- Invalid body → `{"success":false,"error":"Invalid event payload."}`
- With a valid `TIKTOK_ACCESS_TOKEN` → `{"success":true}`

## 4. TikTok Events API verification

1. Ensure `TIKTOK_ACCESS_TOKEN` (Secret) and `TIKTOK_PIXEL_ID` (env) are set.
2. Trigger a `Lead` (submit the form, or run the curl above with a real email).
3. The server posts to `https://business-api.tiktok.com/open_api/v1.3/event/track/`.
   A success response has HTTP 200 with body `{"code":0,...}`; the route maps
   that to `{"success":true}`. Each attempt has a 5s timeout (`AbortController`).
   Transient failures (HTTP 429 / 408 / 5xx and network errors) are retried up to
   3 times with exponential backoff + jitter; permanent client errors (400/401/403/404)
   fail fast. All failures are logged via `req.log.warn` and never thrown back to
   the user — the contact form always completes.

## 5. TikTok Events Manager verification checklist

- [ ] Events Manager → your pixel `D8CG7URC77U91RGD2EIG` → **Test Events**: live events appear when interacting with the site.
- [ ] `PageView`, `ViewContent`, `ClickButton`, `Contact`, `Lead` events are received.
- [ ] `Lead` shows **both** "Web" (pixel) and "Server" (Events API) sources, deduplicated by `event_id`.
- [ ] Server `Lead` carries hashed email + IP + user agent (Event Match Quality improves).
- [ ] No duplicate page views or double-counted conversions.

## 6. Production deployment

1. The `TIKTOK_PIXEL_ID` env var is **shared**, so it is already available in production.
2. The `TIKTOK_ACCESS_TOKEN` is a **Secret** (global), available in production automatically.
3. Publish the project (Deploy). The pixel loads on the published domain(s) in
   `$REPLIT_DOMAINS`, and the server endpoint `/api/tiktok-events` is routed by
   the shared proxy exactly as in development.
4. After deploy, repeat the Events Manager checklist (Section 5) on the live domain.
5. If you ever rotate the access token, update only the `TIKTOK_ACCESS_TOKEN`
   Secret — no code change or redeploy of frontend is required.
