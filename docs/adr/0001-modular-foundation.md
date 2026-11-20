# ADR-0001: Modular evidence-first foundation

- **Status:** Accepted for Mission 00
- **Date:** 2026-11-20

## Context

KDE must support multiple projects and execution environments while preserving auditability and avoiding mandatory paid services.

## Decision

Start with a TypeScript modular monolith, Node.js 24.x, Zod runtime contracts, Vitest tests, and GitHub Actions as an optional CI runner. Keep the core independent of AI providers.

## Consequences

- One repository and one release unit simplify the initial proof.
- Strict contracts reduce ambiguity between engines.
- A modular boundary allows future extraction if evidence justifies it.
- Node.js 24.x is the declared runtime; other major versions are unsupported until tested.
