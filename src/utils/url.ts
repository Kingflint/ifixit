// URL builder helpers used by share buttons and email links.

const APP_BASE = (typeof window !== "undefined" && window.location?.origin) || "";

export function trackingUrl(code: string, base: string = APP_BASE): string {
  if (!code) return base;
  return `${base.replace(/\/$/, "")}/?track=${encodeURIComponent(code)}`;
}

export function mailto(to: string, subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${encodeURIComponent(to)}?${params.toString()}`;
}

export function appendQuery(url: string, params: Record<string, string | number | boolean | undefined>): string {
  const u = new URL(url, APP_BASE || "https://example.com");
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined) continue;
    u.searchParams.set(k, String(v));
  }
  return u.toString();
}