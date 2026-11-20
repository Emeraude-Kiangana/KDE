import { describe, expect, it } from "vitest";
import { KDE_PROTOCOL, KDE_VERSION } from "../../src/core/version.js";

describe("KDE foundation metadata", () => {
  it("exposes the initial semantic version", () => {
    expect(KDE_VERSION).toBe("0.1.0");
  });

  it("declares the evidence-first protocol", () => {
    expect(KDE_PROTOCOL).toBe("CLAIM_LE_EVIDENCE");
  });
});
