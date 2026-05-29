/**
 * TikTok tracking utilities.
 *
 * The TikTok Pixel base snippet is loaded once in index.html (`window.ttq`).
 * This module provides typed, deduplicated helpers on top of it plus a small
 * in-memory event log that powers the development analytics panel.
 *
 * The Events API access token NEVER touches this file — server-side Lead events
 * are sent from the API server via POST /api/tiktok-events.
 */

type TtqTrackOptions = { event_id?: string };

interface Ttq {
  page: () => void;
  track: (event: string, params?: Record<string, unknown>, options?: TtqTrackOptions) => void;
  identify: (params: Record<string, unknown>) => void;
}

declare global {
  interface Window {
    ttq?: Ttq;
  }
}

export type TrackedEventStatus = "fired" | "pending" | "success" | "error";

export interface TrackedEvent {
  /** Unique id for this log row (not the TikTok event_id). */
  rowId: string;
  name: string;
  eventId: string;
  timestamp: number;
  status: TrackedEventStatus;
  detail?: string;
  apiResponse?: unknown;
}

type Listener = (events: TrackedEvent[]) => void;

const MAX_EVENTS = 50;
const events: TrackedEvent[] = [];
const listeners = new Set<Listener>();

function emit() {
  const snapshot = [...events];
  for (const l of listeners) l(snapshot);
}

/** Subscribe to the in-memory event log. Returns an unsubscribe function. */
export function subscribeEvents(listener: Listener): () => void {
  listeners.add(listener);
  listener([...events]);
  return () => {
    listeners.delete(listener);
  };
}

function logEvent(event: TrackedEvent) {
  events.unshift(event);
  if (events.length > MAX_EVENTS) events.length = MAX_EVENTS;
  emit();
}

function updateEvent(rowId: string, patch: Partial<TrackedEvent>) {
  const idx = events.findIndex((e) => e.rowId === rowId);
  if (idx === -1) return;
  events[idx] = { ...events[idx], ...patch };
  emit();
}

/** RFC4122 id used both as TikTok event_id and as a log row id. */
export function generateEventId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function fire(
  name: string,
  params: Record<string, unknown>,
  status: TrackedEventStatus = "fired",
): { eventId: string; rowId: string } {
  const eventId = generateEventId();
  const rowId = generateEventId();
  try {
    window.ttq?.track(name, params, { event_id: eventId });
  } catch {
    /* never let analytics break the UI */
  }
  logEvent({
    rowId,
    name,
    eventId,
    timestamp: Date.now(),
    status,
    detail: typeof params.content_name === "string" ? params.content_name : undefined,
  });
  return { eventId, rowId };
}

/** Re-fire a TikTok page view. Useful for SPA route changes. */
export function trackPageView(): void {
  try {
    window.ttq?.page();
  } catch {
    /* noop */
  }
  logEvent({
    rowId: generateEventId(),
    name: "PageView",
    eventId: "-",
    timestamp: Date.now(),
    status: "fired",
  });
}

/** Phase 2 — generic button click conversion. */
export function trackButtonClick(buttonName: string): void {
  fire("ClickButton", { content_name: buttonName });
}

export interface ViewContentData {
  /** Stable identifier for the content/page, e.g. "homepage", "ai-training". */
  contentId: string;
  /** Human-readable name, e.g. "Homepage". */
  contentName: string;
  /** Content category. Defaults to "service" for this lead-gen site. */
  contentType?: string;
}

/**
 * Phase 3 — content / page view conversion.
 * Always sends content_id, content_name and content_type so TikTok Events
 * Manager does not report "Content ID is missing".
 */
export function trackViewContent(data: ViewContentData): void {
  fire("ViewContent", {
    content_id: data.contentId,
    content_name: data.contentName,
    content_type: data.contentType ?? "service",
  });
}

/** Phase 6 — contact channel conversions (WhatsApp / phone / email). */
export function trackContact(method: string): void {
  fire("Contact", { content_name: method });
}

/** Phase 6 — inquiry conversions (consultation / AI training / corporate training). */
export function trackInquiry(inquiryType: string): void {
  fire("SubmitForm", { content_name: inquiryType });
}

export interface LeadData {
  email: string;
  name?: string;
  company?: string;
}

/**
 * Phase 4 — Lead conversion.
 * Fires the browser pixel event AND mirrors it through the server Events API
 * using the SAME event_id so TikTok deduplicates the two signals.
 * Failures are swallowed so the contact form is never blocked.
 */
export async function trackLead(data: LeadData): Promise<void> {
  const eventId = generateEventId();
  const rowId = generateEventId();
  const eventTime = Math.floor(Date.now() / 1000);

  try {
    window.ttq?.identify({ email: data.email });
    window.ttq?.track(
      "Lead",
      {
        content_id: "contact-form",
        content_name: "Website Contact Form",
        content_type: "lead",
      },
      { event_id: eventId },
    );
  } catch {
    /* noop */
  }

  logEvent({
    rowId,
    name: "Lead",
    eventId,
    timestamp: Date.now(),
    status: "pending",
    detail: data.company || data.name,
  });

  try {
    const res = await fetch("/api/tiktok-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "Lead",
        event_id: eventId,
        event_time: eventTime,
        url: window.location.href,
        email: data.email,
        name: data.name,
        company: data.company,
      }),
    });
    const json: unknown = await res.json().catch(() => ({}));
    updateEvent(rowId, {
      status: res.ok && (json as { success?: boolean }).success ? "success" : "error",
      apiResponse: json,
    });
  } catch (err) {
    updateEvent(rowId, { status: "error", apiResponse: { error: String(err) } });
  }
}
