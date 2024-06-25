// Tiny utilities for de-duplicating arrays without pulling in lodash.

export function uniq<T>(items: readonly T[]): T[] {
  return Array.from(new Set(items));
}

export function uniqBy<T, K>(items: readonly T[], by: (item: T) => K): T[] {
  const seen = new Set<K>();
  const result: T[] = [];
  for (const item of items) {
    const key = by(item);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(item);
  }
  return result;
}

export function groupBy<T, K extends string | number>(items: readonly T[], by: (item: T) => K): Record<K, T[]> {
  const out = {} as Record<K, T[]>;
  for (const item of items) {
    const key = by(item);
    if (!out[key]) out[key] = [];
    out[key].push(item);
  }
  return out;
}