# Mission 00 — Acceptance criteria

Mission 00 is complete only when each applicable criterion has evidence.

| ID | Criterion | Required evidence | Initial status |
|---|---|---|---|
| M00-01 | Existing GitHub repository inspected | Repository metadata | DOCUMENTED |
| M00-02 | Foundation files committed | Commit and file tree | IN PROGRESS |
| M00-03 | Runtime contract defined | package.json + tsconfig | IMPLEMENTED |
| M00-04 | Test report contract defined | Zod schema + tests | IMPLEMENTED |
| M00-05 | Tests executed successfully | CI or local test output | UNKNOWN |
| M00-06 | Dependency lock committed | package-lock.json | BLOCKED / NOT YET GENERATED |
| M00-07 | CI workflow passes | GitHub Actions run URL | UNKNOWN |
| M00-08 | Security review completed | Review report | UNKNOWN |

## Exit gate

Do not label Mission 00 CLOSED until tests have been executed, a lockfile is committed, CI passes, and the resulting commit and evidence are recorded.
