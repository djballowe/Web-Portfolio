# ADR-0001: Use Astro for a static, JavaScript-optional site

- Status: Accepted
- Date: 2026-08-20

## Context

The previous portfolio was a React application, but most behavior was ordinary navigation,
responsive layout, reveal effects, and a small work-history interaction. That runtime and its
dependency graph were disproportionate to a mostly editorial personal site.

The redesign also introduced a writing section and left open the possibility of richer articles or
small experiments later. The site therefore needed to be simpler than a client application without
closing off every future interactive use case.

## Decision

Build the site with Astro in static-output mode, using `.astro` components, semantic HTML, plain
CSS, and Markdown content.

Ship no client-side JavaScript by default. If a future feature clearly requires interactivity, add
it as an isolated Astro island rather than turning the whole site into a client-rendered
application.

## Rationale

Astro preserves the performance and operational simplicity of static files while providing
file-based routing, layouts, validated content collections, and a path to narrowly scoped
interactivity. It gives the writing system more structure than handwritten HTML without requiring
React in the browser.

## Consequences

- The production artifact can be hosted as static files.
- Most implementation work belongs in Astro templates, Markdown, and `global.css`.
- There is no application server or browser state layer to maintain.
- An interactive feature must justify its client bundle and hydration strategy.
- Astro remains a build dependency whose upgrades require intentional review.

## Alternatives considered

- **Plain HTML and CSS:** the fewest moving parts, but repetitive once the blog and shared metadata
  were introduced.
- **Eleventy:** a good static generator with portable templates, but less cohesive content
  validation and a less direct path to isolated interactive articles.
- **React or Next.js:** appropriate for application-like interactions, which this site does not
  have.

## Evidence

- Migration commit: `b8f3e51`
- Configuration: `astro.config.mjs`
- Runtime dependencies: `package.json`
- Superseded implementation removal: ADR-0006
