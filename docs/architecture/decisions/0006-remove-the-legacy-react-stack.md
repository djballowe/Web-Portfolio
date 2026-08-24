# ADR-0006: Remove the legacy React and Sass stack

- Status: Accepted
- Date: 2026-08-21

## Context

The initial Astro migration kept old React components, JavaScript data files, generated CSS, and
Sass assets as temporary reference material. Once the new site was accepted, those files no longer
participated in the build and made it harder to tell which implementation was authoritative.

## Decision

Remove the legacy React, JavaScript, and Sass implementation instead of maintaining a dual-stack
transition. The Astro source tree is the only active application architecture.

Do not restore old code merely as a template for new work. Recover historical details from Git when
needed, then implement the feature within the current Astro boundaries. If interactivity is later
required, introduce the smallest isolated client component supported by ADR-0001.

## Rationale

Dead migration artifacts create false paths for maintainers and agents, retain obsolete patterns,
and make cleanup or dependency analysis less reliable. Git already preserves the removed
implementation without keeping it in every checkout.

## Consequences

- The repository has one obvious source of truth for pages, content, layouts, and styles.
- Old components and Sass variables are available only through Git history.
- New work should not assume React, Sass, or the previous portfolio information model exists.
- Static assets should be kept only when referenced by the current site or intentionally retained
  for a documented future use.

## Alternatives considered

- **Keep the old tree indefinitely:** useful as a visual reference, but confusing and prone to
  accidental reuse.
- **Migrate legacy components one by one:** preserves more code, but also preserves the complexity
  the Astro rewrite was intended to remove.

## Evidence

- Cleanup commit: `ea06ade`
- Merged in pull request #20: `7ef613b`
- Current active source: `src/pages/`, `src/layouts/`, `src/content/`, and `src/styles/global.css`
