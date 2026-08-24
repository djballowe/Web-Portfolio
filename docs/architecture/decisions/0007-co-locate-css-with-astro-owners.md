# ADR-0007: Co-locate CSS with its Astro owner

- Status: Accepted
- Date: 2026-08-24

## Context

The first Astro implementation kept the full visual system, shared shell, homepage, article,
responsive, and accessibility rules in one `global.css` file. As the presentation changed, selectors
for removed terminal elements remained behind and it became difficult to tell which route or layout
owned a rule.

The site is small enough that a CSS framework or elaborate stylesheet architecture would add more
indirection than value. Astro already provides component-scoped `<style>` blocks that can express
ownership without adding dependencies or browser JavaScript.

## Decision

Keep only cross-route foundations in `src/styles/global.css`: design tokens, box sizing, document
defaults, base typography, shared link and focus behavior, and reduced-motion handling.

Co-locate the remaining CSS with the Astro file that owns the markup:

- `BaseLayout.astro` owns the site shell, skip link, header, navigation, footer, and their
  responsive behavior.
- `index.astro` owns the introduction, profile links, recent-post listing, and homepage breakpoints.
- `PostLayout.astro` owns article structure, metadata presentation, prose, and article breakpoints.

Use Astro's scoped styles by default. When `PostLayout.astro` must style Markdown elements rendered
inside its slot, keep `.article-body` scoped and apply `:global()` only to the generated
descendants. Do not move a rule to the global stylesheet merely to bypass scoped-style boundaries.

## Rationale

Styles are easiest to understand and delete when they live beside the markup they affect. Astro's
native scoping prevents route-specific selectors from leaking across the site while preserving the
project's plain-CSS and JavaScript-optional goals.

Keeping a small global foundation still provides one authoritative location for the color palette,
page width, typography defaults, and interaction states shared by every route.

## Consequences

- Removing or changing markup should reveal its associated styles in the same file.
- `global.css` is not a catch-all for convenient selectors; additions need to be genuinely
  cross-route.
- Markdown prose rules require deliberate `:global()` boundaries because slotted content does not
  receive the layout's scoped attribute.
- Some Astro files are longer, but their responsibilities are more explicit.
- Reusable components may own their own styles later when repeated markup justifies extraction.

## Alternatives considered

- **Keep one global stylesheet:** simple initially, but obscures ownership and allows stale
  selectors and cross-route coupling.
- **Create separate external stylesheets per route:** improves grouping, but loses Astro's automatic
  scoping and separates rules from their markup.
- **Introduce Sass, CSS Modules, or a utility framework:** provides additional organization tools,
  but adds dependencies and conventions the current site's size does not justify.

## Evidence

- Initial implementation: `73880b4`
- Pull request: #24
- Shared foundation: `src/styles/global.css`
- Scoped owners: `src/layouts/BaseLayout.astro`, `src/pages/index.astro`, and
  `src/layouts/PostLayout.astro`
