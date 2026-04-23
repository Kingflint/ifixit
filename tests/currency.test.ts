import { describe, it, expect } from "vitest";
import { applyDiscount, formatNaira, parseNaira, splitAmount, withVat } from "../src/utils/currency";

describe("formatNaira", () => {
  it("renders thousands separators with the naira sign", () => {
    expect(formatNaira(15000)).toBe("\u20A615,000");
  });

  it("can omit the symbol", () => {
    expect(formatNaira(15000, { withSymbol: false })).toBe("15,000");
  });

  it("respects decimals option", () => {
    expect(formatNaira(1234.567, { decimals: 2 })).toBe("\u20A61,234.57");
  });

  it("handles non-finite input", () => {
    expect(formatNaira(Number.NaN)).toBe("\u20A60");
    expect(formatNaira(Number.POSITIVE_INFINITY)).toBe("\u20A60");
  });
});

describe("parseNaira", () => {
  it("strips currency markers", () => {
    expect(parseNaira("\u20A615,000")).toBe(15000);
    expect(parseNaira("NGN 7,500.50")).toBe(7500.5);
  });

  it("returns 0 on empty input", () => {
    expect(parseNaira("")).toBe(0);
    expect(parseNaira("free")).toBe(0);
  });
});

describe("applyDiscount", () => {
  it("returns the original amount for non-positive percent", () => {
    expect(applyDiscount(10000, 0)).toBe(10000);
    expect(applyDiscount(10000, -5)).toBe(10000);
  });

  it("returns 0 when percent is at least 100", () => {
    expect(applyDiscount(10000, 100)).toBe(0);
    expect(applyDiscount(10000, 150)).toBe(0);
  });

  it("rounds to integer naira", () => {
    expect(applyDiscount(10000, 12.5)).toBe(8750);
  });
});

describe("withVat", () => {
  it("applies the default 7.5% VAT", () => {
    expect(withVat(10000)).toBe(10750);
  });

  it("returns the original amount for non-positive vat", () => {
    expect(withVat(10000, 0)).toBe(10000);
    expect(withVat(10000, -1)).toBe(10000);
  });
});

describe("splitAmount", () => {
  it("splits exactly when divisible", () => {
    expect(splitAmount(900, 3)).toEqual([300, 300, 300]);
  });

  it("distributes the remainder to the front", () => {
    expect(splitAmount(1000, 3)).toEqual([334, 333, 333]);
  });

  it("handles zero parts", () => {
    expect(splitAmount(1000, 0)).toEqual([]);
  });
});
