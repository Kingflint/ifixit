import { describe, it, expect } from "vitest";
import {
  formatPhoneForDisplay,
  isValidNigerianPhone,
  normalizeNigerianPhone,
  whatsappLinkFor,
} from "../src/utils/phone";

describe("normalizeNigerianPhone", () => {
  it("converts a 0XX local number to E.164", () => {
    expect(normalizeNigerianPhone("08144556677")).toBe("+2348144556677");
  });

  it("keeps an existing country-coded number", () => {
    expect(normalizeNigerianPhone("2348144556677")).toBe("+2348144556677");
  });

  it("strips formatting characters", () => {
    expect(normalizeNigerianPhone(" 0814 455 6677 ")).toBe("+2348144556677");
    expect(normalizeNigerianPhone("(0814) 455-6677")).toBe("+2348144556677");
  });

  it("returns empty for empty input", () => {
    expect(normalizeNigerianPhone("")).toBe("");
  });
});

describe("isValidNigerianPhone", () => {
  it("accepts a known prefix", () => {
    expect(isValidNigerianPhone("08144556677")).toBe(true);
  });

  it("rejects an unknown prefix", () => {
    expect(isValidNigerianPhone("0123456789")).toBe(false);
  });

  it("rejects a too-short number", () => {
    expect(isValidNigerianPhone("0814")).toBe(false);
  });
});

describe("formatPhoneForDisplay", () => {
  it("groups into country + 3+3+4 blocks", () => {
    expect(formatPhoneForDisplay("08144556677")).toBe("+234 814 455 6677");
  });

  it("returns input unchanged on invalid numbers", () => {
    expect(formatPhoneForDisplay("not-a-phone")).toBe("not-a-phone");
  });
});

describe("whatsappLinkFor", () => {
  it("builds a wa.me link", () => {
    expect(whatsappLinkFor("08144556677")).toBe("https://wa.me/2348144556677");
  });

  it("encodes the message", () => {
    expect(whatsappLinkFor("08144556677", "Hello world")).toBe(
      "https://wa.me/2348144556677?text=Hello%20world",
    );
  });

  it("returns empty for empty phone", () => {
    expect(whatsappLinkFor("")).toBe("");
  });
});
