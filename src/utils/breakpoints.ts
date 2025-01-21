// Tailwind-aligned breakpoint helpers.

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export function isAtLeast(width: number, bp: Breakpoint): boolean {
  return width >= BREAKPOINTS[bp];
}

export function activeBreakpoint(width: number): Breakpoint | null {
  const order: Breakpoint[] = ["2xl", "xl", "lg", "md", "sm"];
  for (const bp of order) {
    if (width >= BREAKPOINTS[bp]) return bp;
  }
  return null;
}