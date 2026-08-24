# Architecture overview

Last verified: 2026-08-24

## Original goals

Use these goals as the default compass for future technical and product decisions:

- Keep the portfolio small, fast, and easy to understand.
- Prefer static HTML, plain CSS, and no browser JavaScript unless a feature clearly needs more.
- Keep the homepage focused on a short personal introduction, writing, and a few useful links.
- Make publishing a post as simple as adding reviewed Markdown to the repository.
- Leave room for richer articles or experiments without turning the whole site into an application.
- Avoid infrastructure, dependencies, abstractions, and duplicate pages that the site's current
  needs do not justify.

These goals are guardrails, not permanent prohibitions. When a proposed direction no longer aligns
with them, state exactly how it differs and why the tradeoff may now be worthwhile, then ask the
repository owner for confirmation before implementing it. If the deviation is approved, preserve the
reasoning in a new decision record rather than allowing the architecture to drift silently.

## System at a glance

This repository builds a personal portfolio and writing site as static HTML and CSS. Astro is the
build-time framework; there is no application server, database, CMS, or client-side JavaScript in
the current site.

```text
src/content/blog/*.md
        |
        v
src/content.config.ts -- validates post metadata
        |
        +--> src/pages/index.astro -- lists the four newest published posts
        |
        +--> src/pages/blog/[...id].astro -- generates one route per published post
                  |
                  v
          src/layouts/PostLayout.astro
                  |
                  v
          src/layouts/BaseLayout.astro
                  |
                  v
            static HTML + CSS
                  |
                  v
         Vercel preview or production
```

## Repository map

| Path                           | Responsibility                                                 |
| ------------------------------ | -------------------------------------------------------------- |
| `src/pages/`                   | File-based routes and build-time page composition              |
| `src/pages/index.astro`        | Homepage, recent writing, and their scoped styles              |
| `src/pages/blog/[...id].astro` | Static route generation for published posts                    |
| `src/content/blog/`            | Markdown and optional MDX source files for posts               |
| `src/content.config.ts`        | Blog collection loader and frontmatter schema                  |
| `src/layouts/BaseLayout.astro` | Shared shell, metadata, navigation, footer, and layout styles  |
| `src/layouts/PostLayout.astro` | Shared article structure, dates, and scoped article styles     |
| `src/styles/global.css`        | Design tokens, reset, base typography, and shared interactions |
| `public/`                      | Files served unchanged, including the favicon and social image |
| `astro.config.mjs`             | Canonical site URL, static output, and Markdown processor      |
| `pnpm-workspace.yaml`          | Workspace declaration and dependency-security policy           |

## Architectural boundaries

- Astro must continue to emit static output unless a new decision record justifies a server runtime.
- Browser JavaScript is opt-in. A future interactive feature should be isolated and should earn its
  runtime cost; React is not the default component model.
- Blog posts are repository content. Their frontmatter is validated before a successful build.
- Posts with `draft: true` are excluded from both route generation and public listings.
- The filename or nested content path determines the post URL under `/blog/`.
- There is no separate writing archive. The homepage currently shows the four newest published
  posts; revisit this when the volume of posts makes discovery difficult.
- Deployment configuration lives primarily in the connected Vercel project. The repository owns
  source, build inputs, and validation—not a second deployment pipeline.
- Dependency versions and the package manager are intentionally controlled. Do not loosen the
  policies in `pnpm-workspace.yaml` merely to make a new release install immediately.
- CSS belongs with the Astro page or layout that owns the markup. Keep `global.css` limited to
  cross-route foundations, and use `:global()` only where a scoped layout must style rendered
  Markdown descendants.
- Preserve the restrained developer aesthetic without rebuilding a simulated terminal. Monospace
  typography, the green accent, and simple line treatments are intentional; command prompts, cursor
  effects, and decorative terminal chrome are not defaults.

## Common change flows

### Publish a post

1. Add a Markdown file under `src/content/blog/`.
2. Supply schema-valid frontmatter: `title`, `description`, and `publishedAt`; `updatedAt`, `draft`,
   and `tags` are optional.
3. Use `draft: false` or omit `draft` when the post should receive a route.
4. Run `pnpm build` before merging.
5. Merge to `main`; the connected Vercel project performs the production build and deployment.

### Change site structure

1. Identify the route in `src/pages/` and its shared layout, if any.
2. Preserve the static-output and JavaScript-optional boundaries unless the change explicitly
   replaces them.
3. Update this overview when responsibilities move between files.
4. Add a decision record when the change introduces or reverses a durable convention.

### Change styling

1. Put site-wide tokens, resets, base element styles, and shared interaction states in
   `src/styles/global.css`.
2. Put shell, homepage, and article rules in the scoped `<style>` block beside the markup that owns
   them.
3. For Markdown rendered through the article slot, keep the owning `.article-body` selector scoped
   and mark only the generated descendants with Astro's `:global()` syntax.
4. Preserve the minimal, text-first visual language and spacing rhythm unless a deliberate redesign
   replaces it.
5. Run `pnpm build` before merging.

## Deliberate omissions

The site currently has no React runtime, API layer, database, CMS, dedicated `/blog/` index,
automatic deployment workflow in GitHub Actions, or general-purpose component library. Their absence
is intentional, not unfinished scaffolding.
