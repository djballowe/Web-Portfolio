# ADR-0005: Let Vercel own preview and production deployment

- Status: Accepted
- Date: 2026-08-20

## Context

The repository was already expected to publish through Vercel. Adding a GitHub Actions deployment
workflow would create a second system responsible for building and releasing the same static site.
The project still benefits from pull-request validation, but validation and deployment do not need
the same owner.

## Decision

Treat Git as the source of truth and the connected Vercel project as the deployment system:

- Branches and pull requests receive Vercel preview builds.
- Merges to `main` trigger the production build and deployment.
- If GitHub Actions is added, use it for checks such as formatting, type checking, builds, or broken
  links—not for a duplicate deployment.

Keep provider-side project, domain, and integration settings in Vercel unless a future requirement
justifies checked-in infrastructure configuration.

## Rationale

Vercel's Git integration already models preview and production environments for a static Astro site.
Giving one system ownership of releases reduces credentials, workflow code, and the chance of two
pipelines racing or disagreeing.

## Consequences

- The repository alone cannot prove or fully recreate the Vercel account connection, domain, or
  project settings.
- A broken provider-side integration can block publishing even when `pnpm build` succeeds locally.
- Repository checks may be added independently without taking deployment ownership.
- Moving away from Vercel requires a new decision and an explicit replacement for previews,
  production releases, domains, and rollback.

## Alternatives considered

- **Deploy from GitHub Actions:** keeps more logic in the repository, but duplicates the native
  integration and requires deployment credentials and maintenance.
- **Manual uploads:** fewer integrations, but loses automatic previews and reliable main-branch
  publishing.

## Evidence

- Expected production behavior: root `README.md`
- Static build configuration: `astro.config.mjs`
- Node and pnpm deployment-alignment commits: `c491798`, `b0150ab`
- There is intentionally no deployment workflow under `.github/workflows/`.
