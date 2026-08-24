# ADR-0002: Store posts in validated content collections

- Status: Accepted
- Date: 2026-08-20

## Context

Writing should be easy to version, review, and publish without adding a CMS, database, or admin
application. At the same time, malformed metadata should fail during development or the production
build instead of producing incomplete pages.

## Decision

Store posts as Markdown or MDX under `src/content/blog/` and load them through Astro's `blog`
content collection.

Validate frontmatter in `src/content.config.ts`:

- `title`, `description`, and `publishedAt` are required.
- `updatedAt` is optional.
- `draft` defaults to `false`.
- `tags` defaults to an empty list.

Generate public post pages through `src/pages/blog/[...id].astro`. The catch-all route preserves the
option to organize posts in nested content folders later. Exclude drafts from route generation and
all public listings.

## Rationale

Markdown keeps content portable and reviewable in Git. The schema turns frontmatter into a defined
interface between content and layouts. Static path generation creates predictable URLs without a
runtime content service.

## Consequences

- Adding a post usually requires one content file and no new page component.
- A content filename or nested path becomes its URL below `/blog/`.
- Invalid or incomplete frontmatter blocks a successful build.
- `draft: true` means no previewable public route is generated; a local preview currently requires
  temporarily setting the post to `draft: false`.
- Tags are stored for future use but are not currently rendered or indexed.
- MDX is allowed by the loader, but should be used only when Markdown is insufficient.

## Alternatives considered

- **CMS-backed content:** adds authentication, an external data dependency, and webhook behavior
  that the current publishing volume does not justify.
- **Handwritten Astro page per post:** duplicates routing and layout work and provides no shared
  metadata validation.
- **Unvalidated Markdown frontmatter:** simpler initially, but allows missing titles, dates, or
  descriptions to reach a build.

## Evidence

- Collection schema: `src/content.config.ts`
- Route generation: `src/pages/blog/[...id].astro`
- Article layout: `src/layouts/PostLayout.astro`
- Initial implementation: `b8f3e51`
