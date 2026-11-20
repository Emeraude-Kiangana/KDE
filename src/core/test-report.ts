import { z } from "zod";

export const TestCaseResultSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  status: z.enum(["passed", "failed", "skipped"]),
  durationMs: z.number().nonnegative(),
  message: z.string().optional()
}).strict();

export const TestReportSchema = z.object({
  schemaVersion: z.literal("1.0.0"),
  project: z.string().min(1),
  revision: z.string().min(1),
  executedAt: z.string().datetime(),
  runner: z.string().min(1),
  summary: z.object({
    total: z.number().int().nonnegative(),
    passed: z.number().int().nonnegative(),
    failed: z.number().int().nonnegative(),
    skipped: z.number().int().nonnegative()
  }).strict(),
  tests: z.array(TestCaseResultSchema)
}).strict().superRefine((report, context) => {
  const { total, passed, failed, skipped } = report.summary;
  if (total !== report.tests.length || total !== passed + failed + skipped) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Summary counts must match the test result records."
    });
  }
});

export type TestCaseResult = z.infer<typeof TestCaseResultSchema>;
export type TestReport = z.infer<typeof TestReportSchema>;
