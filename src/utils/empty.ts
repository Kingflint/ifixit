// Shared "empty" sentinels so React can compare by reference.

export const EMPTY_ARRAY: readonly never[] = Object.freeze([]);
export const EMPTY_OBJECT: Readonly<Record<string, never>> = Object.freeze({});

export function emptyArray<T>(): readonly T[] {
  return EMPTY_ARRAY as readonly T[];
}