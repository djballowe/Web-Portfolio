# davidballowe.me

A minimal portfolio and blog built with Astro. The site is statically rendered
and ships no client-side JavaScript by default.

## Local development

Requires Node.js 24 and pnpm 10.34.5.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Build the production site with:

```sh
pnpm build
```

## Writing

Posts live in `src/content/blog` as Markdown files. Frontmatter is validated by
the schema in `src/content.config.ts`; posts marked `draft: true` are excluded
from the site.

## Dependency security

- Direct dependencies use exact versions and the full tree is committed in
  `pnpm-lock.yaml`.
- pnpm rejects packages published less than 24 hours ago.
- Dependency install scripts are blocked unless explicitly reviewed; only
  `esbuild` is currently allowed.
- pnpm verifies registry integrity and package trust without trusting the
  lockfile as a bypass.
- Registry signatures are verified for the installed dependency graph.
- Dependabot checks for updates weekly.

## Deployment

The production site is [davidballowe.me](https://davidballowe.me/). A connected
Vercel project can build and deploy this static Astro project automatically from
the `main` branch.
