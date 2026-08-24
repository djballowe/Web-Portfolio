# Architecture overview

Last verified: 2026-08-24

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
| `src/pages/index.astro`        | Homepage, profile links, and recent writing                    |
| `src/pages/blog/[...id].astro` | Static route generation for published posts                    |
| `src/content/blog/`            | Markdown and optional MDX source files for posts               |
| `src/content.config.ts`        | Blog collection loader and frontmatter schema                  |
| `src/layouts/BaseLayout.astro` | Shared document shell, metadata, navigation, and footer        |
| `src/layouts/PostLayout.astro` | Shared article structure and dates                             |
| `src/styles/global.css`        | The visual system and responsive behavior; no CSS framework    |
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

## Deliberate omissions

The site currently has no React runtime, API layer, database, CMS, dedicated `/blog/` index,
automatic deployment workflow in GitHub Actions, or general-purpose component library. Their absence
is intentional, not unfinished scaffolding.
