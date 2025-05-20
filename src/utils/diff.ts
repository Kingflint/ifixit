// Compute a shallow object diff used for admin audit logs.

export type Diff<T> = Partial<{ [K in keyof T]: { from: T[K]; to: T[K] } }>;

export function shallowDiff<T extends Record<string, unknown>>(prev: T, next: T): Diff<T> {
  const out: Diff<T> = {};
  for (const key of Object.keys(next) as (keyof T)[]) {
    if (prev[key] !== next[key]) {
      (out as any)[key] = { from: prev[key], to: next[key] };
    }
  }
  for (const key of Object.keys(prev) as (keyof T)[]) {
    if (!(key in next)) {
      (out as any)[key] = { from: prev[key], to: undefined };
    }
  }
  return out;
}

export function describeDiff<T extends Record<string, unknown>>(diff: Diff<T>): string {
  const parts = Object.entries(diff).map(([k, v]) => {
    const change = v as { from: unknown; to: unknown };
    return `${k}: ${JSON.stringify(change.from)} -> ${JSON.stringify(change.to)}`;
  });
  return parts.join("; ");
}