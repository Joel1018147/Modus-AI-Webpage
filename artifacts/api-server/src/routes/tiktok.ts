import { Router } from "express";
import { createHash } from "node:crypto";
import { TrackTikTokEventBody } from "@workspace/api-zod";

const router = Router();

const TIKTOK_API_URL = "https://business-api.tiktok.com/open_api/v1.3/event/track/";
const MAX_RETRIES = 3;

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function clientIp(req: { headers: Record<string, unknown>; ip?: string }): string | undefined {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.length > 0) return fwd.split(",")[0]!.trim();
  return req.ip;
}

async function sendWithRetry(
  payload: unknown,
  accessToken: string,
  log: { warn: (obj: unknown, msg?: string) => void },
): Promise<{ ok: boolean; response: unknown }> {
  let lastError: unknown = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(TIKTOK_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Token": accessToken,
        },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { code?: number; message?: string };

      // TikTok returns HTTP 200 with a body { code: 0 } on success.
      if (res.ok && json.code === 0) {
        return { ok: true, response: json };
      }

      lastError = json;
      log.warn(
        { attempt, status: res.status, tiktokCode: json.code, tiktokMessage: json.message },
        "TikTok Events API non-success response",
      );

      // Client errors (bad payload / auth) won't be fixed by retrying.
      if (res.status >= 400 && res.status < 500) {
        return { ok: false, response: json };
      }
    } catch (err) {
      lastError = err;
      log.warn({ attempt, err: String(err) }, "TikTok Events API request failed");
    }

    if (attempt < MAX_RETRIES) {
      await new Promise((r) => setTimeout(r, 250 * attempt));
    }
  }

  return { ok: false, response: lastError };
}

router.post("/tiktok-events", async (req, res) => {
  const parsed = TrackTikTokEventBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ success: false, error: "Invalid event payload." });
    return;
  }

  const { event, event_id, event_time, url, email, name, company } = parsed.data;

  const pixelId = process.env.TIKTOK_PIXEL_ID;
  const accessToken = process.env.TIKTOK_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    // Never break the user flow — just report that tracking is unconfigured.
    req.log.warn("TikTok Events API not configured (missing TIKTOK_PIXEL_ID/TIKTOK_ACCESS_TOKEN)");
    res.status(200).json({ success: false, error: "Tracking not configured." });
    return;
  }

  const user: Record<string, string> = {};
  if (email) user.email = sha256(email);
  const ip = clientIp(req);
  if (ip) user.ip = ip;
  const ua = req.headers["user-agent"];
  if (typeof ua === "string") user.user_agent = ua;

  const properties: Record<string, unknown> = {};
  if (name) properties.content_name = name;
  if (company) properties.description = company;

  const payload = {
    event_source: "web",
    event_source_id: pixelId,
    data: [
      {
        event: event || "Lead",
        event_time,
        event_id,
        user,
        page: url ? { url } : undefined,
        properties,
      },
    ],
  };

  try {
    const { ok, response } = await sendWithRetry(payload, accessToken, req.log);
    if (!ok) {
      req.log.warn({ response }, "TikTok Lead event delivery failed after retries");
    }
    res.status(200).json({ success: ok });
  } catch (err) {
    // Defensive: must never throw back to the client / block the form.
    req.log.warn({ err: String(err) }, "Unexpected error sending TikTok Lead event");
    res.status(200).json({ success: false, error: "Tracking error." });
  }
});

export default router;
