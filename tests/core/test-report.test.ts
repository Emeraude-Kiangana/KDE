import { describe, expect, it } from "vitest";
import { TestReportSchema } from "../../src/core/test-report.js";

const validReport = {
  schemaVersion: "1.0.0",
  project: "kde-fixture",
  revision: "0123456789abcdef",
  executedAt: "2026-11-20T12:00:00.000Z",
  runner: "vitest",
  summary: { total: 1, passed: 1, failed: 0, skipped: 0 },
  tests: [{ id: "T-001", name: "sample", status: "passed", durationMs: 2 }]
};

describe("TestReportSchema", () => {
  it("accepts a consistent report", () => {
    expect(TestReportSchema.safeParse(validReport).success).toBe(true);
  });

  it("rejects inconsistent summary counts", () => {
    const result = TestReportSchema.safeParse({
      ...validReport,
      summary: { total: 2, passed: 1, failed: 0, skipped: 0 }
    });
    expect(result.success).toBe(false);
  });

  it("rejects unknown fields", () => {
    expect(TestReportSchema.safeParse({ ...validReport, secret: "must-not-be-here" }).success).toBe(false);
  });
});
