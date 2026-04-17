// Naira currency formatting helpers used across the app and admin dashboard.

const NAIRA = "\u20A6";

export function formatNaira(amount: number, options: { withSymbol?: boolean; decimals?: number } = {}): string {
  const { withSymbol = true, decimals = 0 } = options;
  if (!Number.isFinite(amount)) return withSymbol ? `${NAIRA}0` : "0";
  const rounded = Number(amount.toFixed(decimals));
  const formatted = rounded.toLocaleString("en-NG", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return withSymbol ? `${NAIRA}${formatted}` : formatted;
}

export function parseNaira(text: string): number {
  if (!text) return 0;
  const cleaned = text.replace(/[^\d.-]/g, "");
  const value = parseFloat(cleaned);
  return Number.isFinite(value) ? value : 0;
}

export function applyDiscount(amount: number, percent: number): number {
  if (percent <= 0) return amount;
  if (percent >= 100) return 0;
  const discounted = amount - (amount * percent) / 100;
  return Math.max(0, Math.round(discounted));
}

export function withVat(amount: number, vatPercent = 7.5): number {
  if (vatPercent <= 0) return amount;
  return Math.round(amount + (amount * vatPercent) / 100);
}

export function splitAmount(total: number, parts: number): number[] {
  if (parts <= 0) return [];
  const base = Math.floor(total / parts);
  const remainder = total - base * parts;
  return Array.from({ length: parts }, (_, i) => (i < remainder ? base + 1 : base));
}
