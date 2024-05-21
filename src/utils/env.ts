// Tiny helper around import.meta.env so callers do not have to know about Vite.

export function envFlag(name: string, fallback = false): boolean {
  const value = (import.meta as any).env?.[name];
  if (value === undefined) return fallback;
  return value === "true" || value === true || value === "1";
}

export function envString(name: string, fallback = ""): string {
  const value = (import.meta as any).env?.[name];
  if (typeof value === "string") return value;
  return fallback;
}