# ADR-0003: List recent writing on the homepage

- Status: Accepted
- Date: 2026-08-22

## Context

The first Astro version included both a recent-writing list on the homepage and a dedicated `/blog/`
archive. With only a small number of posts, the archive duplicated the homepage and added navigation
without improving discovery.

## Decision

Use the homepage as the writing index for now. Show the four newest published posts, sorted by
`publishedAt` in descending order.

Do not maintain a separate `/blog/` archive route until the number of posts, filtering needs, or
reader navigation makes it useful. Individual articles remain available under `/blog/<id>/`, and
navigation and article back-links point to `/#writing`.

## Rationale

The homepage already introduces the author, provides contact links, and surfaces writing. Keeping
that flow on one page matches the project's minimalist goal and avoids a nearly empty archive that
repeats the same links.

## Consequences

- The fifth-newest and older posts remain addressable but are no longer discoverable through a
  public list.
- A dedicated archive should be reconsidered as the collection grows.
- Code must not assume that the absence of `src/pages/blog/index.astro` means blog routing is
  incomplete.
- Article back-navigation depends on the homepage's `writing` anchor.

## Alternatives considered

- **Keep `/blog/` immediately:** conventional, but redundant at the current content volume.
- **List every post on the homepage:** avoids hidden older posts, but allows the landing page to
  grow without a clear bound.

## Evidence

- Decision implementation: `017e2e1`
- Merged in pull request #22: `b484589`
- Current listing: `src/pages/index.astro`
