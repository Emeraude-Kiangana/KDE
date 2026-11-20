export const KDE_VERSION = "0.1.0" as const;
export const KDE_PROTOCOL = "CLAIM_LE_EVIDENCE" as const;

export type EvidenceStatus =
  | "DOCUMENTED"
  | "IMPLEMENTED"
  | "TESTED"
  | "REPRODUCIBLE"
  | "UNKNOWN"
  | "BLOCKED";
