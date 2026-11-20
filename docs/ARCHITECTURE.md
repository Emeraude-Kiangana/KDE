# KDE Architecture — v0.1.0 foundation

## Scope

Mission 00 defines the shared foundation only. TEST, DOCUMENT, PROVE, and MAINTAIN are planned bounded modules; they are not yet production engines.

## Initial layers

1. **Core contracts:** shared types and runtime validation.
2. **Engines:** independent modules consuming and producing versioned contracts.
3. **Adapters:** filesystem, Git, CI, and optional external providers.
4. **Evidence boundary:** explicit artifact collection and provenance metadata.
5. **Interfaces:** CLI first; GitHub Action and service interfaces are future work.

## Data flow

Repository revision → test execution → validated report → documentation artifacts → evidence manifest → maintenance assessment.

Every stage must preserve source revision, execution context, timestamps, and failure state where available.

## Design constraints

- Pure core logic where practical.
- Explicit I/O boundaries.
- Strict schema validation at module boundaries.
- No mandatory LLM or network dependency in the core.
- No silent overwrites of human-authored documents.
- Fail closed when evidence is incomplete or invalid.

## Trust boundaries

Repository content, test output, generated text, and external model output are untrusted inputs. Validate them, escape them in reports, and never execute repository-provided commands outside an explicitly configured runner.
