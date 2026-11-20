# KIANGANA Documentation Engineering (KDE)

**Documentation Engineering Platform** — TEST · DOCUMENT · PROVE · MAINTAIN.

KDE is an evidence-first foundation for making software projects understandable, testable, verifiable, reproducible, and maintainable.

## Mission 00 — Foundation

This repository establishes the initial project conventions, runtime, data contracts, tests, and governance. It does **not** claim that the four production engines are implemented.

## Principles

- **Claim ≤ Evidence:** every technical claim must be supported by an observable artifact.
- **No fabricated results:** tests are reported only when actually executed.
- **Human approval:** no merge, release, deployment, or paid operation without explicit authorization.
- **Safe by default:** never collect or publish secrets.
- **Portable core:** the foundation must run locally and in CI without a mandatory AI provider.
- **Traceability:** generated artifacts must identify their source revision and tool context where available.

## Requirements

- Node.js 24.x
- npm compatible with the selected Node.js release
- Git

## Quick start

```bash
npm install
npm run typecheck
npm test
```

> Dependency versions are declared in `package.json`. A committed lockfile is required before claiming fully reproducible dependency installation; it is intentionally tracked as a Mission 00 completion item until generated and verified.

## Repository map

- `docs/`: architecture, requirements, governance, ADRs
- `schemas/`: versioned JSON data contracts
- `src/core/`: shared foundation primitives
- `tests/`: automated foundation tests
- `.github/workflows/`: continuous integration

## Status

**Current status: FOUNDATION SCAFFOLD — NOT RELEASED.** See [Mission 00 acceptance criteria](docs/MISSION-00-ACCEPTANCE.md).

## Governance

See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [docs/GOVERNANCE.md](docs/GOVERNANCE.md).

## License

Apache-2.0. See [LICENSE](LICENSE).
