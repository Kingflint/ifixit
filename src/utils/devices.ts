// Helpers around the bundled device catalogue.

import { DEVICES } from "../data/devices";

export function deviceCategories(): string[] {
  const cats = new Set<string>();
  for (const d of DEVICES as any[]) {
    if (d?.category) cats.add(d.category);
  }
  return Array.from(cats).sort();
}

export function devicesInCategory(category: string): unknown[] {
  return (DEVICES as any[]).filter((d) => d?.category === category);
}

export function findDevice(name: string): unknown | undefined {
  const lower = (name || "").toLowerCase();
  return (DEVICES as any[]).find((d) => String(d?.name ?? "").toLowerCase() === lower);
}