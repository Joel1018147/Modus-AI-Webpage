import { useEffect, useState } from "react";
import { subscribeEvents, type TrackedEvent } from "@/lib/tiktok";

const STATUS_COLORS: Record<TrackedEvent["status"], string> = {
  fired: "#38bdf8",
  pending: "#facc15",
  success: "#4ade80",
  error: "#f87171",
};

/**
 * Development-only TikTok analytics panel.
 * Renders nothing in production builds. Shows a live feed of every tracked
 * event: name, event id, timestamp, status, and the server API response.
 */
export default function TikTokDebugPanel() {
  const [events, setEvents] = useState<TrackedEvent[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => subscribeEvents(setEvents), []);

  if (!import.meta.env.DEV) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        zIndex: 9999,
        fontFamily: "ui-monospace, monospace",
        fontSize: 11,
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          background: "#111827",
          color: "#e5e7eb",
          border: "1px solid #374151",
          borderRadius: 8,
          padding: "6px 10px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 6,
          boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
        }}
        data-testid="tiktok-debug-toggle"
      >
        <span style={{ color: "#fe2c55", fontWeight: 700 }}>TikTok</span>
        <span>events ({events.length})</span>
        <span style={{ opacity: 0.6 }}>{open ? "▾" : "▴"}</span>
      </button>

      {open && (
        <div
          style={{
            marginTop: 8,
            width: 340,
            maxHeight: 420,
            overflowY: "auto",
            background: "#0b1020",
            border: "1px solid #374151",
            borderRadius: 8,
            padding: 8,
            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          }}
        >
          {events.length === 0 && (
            <div style={{ color: "#6b7280", padding: 8 }}>No events fired yet.</div>
          )}
          {events.map((e) => (
            <div
              key={e.rowId}
              style={{
                borderBottom: "1px solid #1f2937",
                padding: "6px 4px",
                color: "#d1d5db",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong style={{ color: "#fff" }}>{e.name}</strong>
                <span style={{ color: STATUS_COLORS[e.status], fontWeight: 700 }}>
                  {e.status}
                </span>
              </div>
              <div style={{ color: "#9ca3af", wordBreak: "break-all" }}>id: {e.eventId}</div>
              <div style={{ color: "#9ca3af" }}>{new Date(e.timestamp).toLocaleTimeString()}</div>
              {e.detail && <div style={{ color: "#9ca3af" }}>detail: {e.detail}</div>}
              {e.apiResponse !== undefined && (
                <pre
                  style={{
                    margin: "4px 0 0",
                    whiteSpace: "pre-wrap",
                    color: "#7dd3fc",
                    background: "#0f172a",
                    padding: 4,
                    borderRadius: 4,
                  }}
                >
                  {JSON.stringify(e.apiResponse, null, 0).slice(0, 400)}
                </pre>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
