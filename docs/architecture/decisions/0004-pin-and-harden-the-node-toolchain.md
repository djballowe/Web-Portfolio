# ADR-0004: Pin and harden the Node and pnpm toolchain

- Status: Accepted
- Date: 2026-08-22

## Context

The site has a small runtime surface, but its static build still executes npm packages. Local and
Vercel builds also need to resolve the same lockfile with the same package-manager behavior.
Uncontrolled tool upgrades or newly published dependencies would make otherwise simple changes less
reproducible and expand supply-chain risk.

An initial seven-day package-release quarantine proved too restrictive for routine development,
including installing the Astro Prettier plugin. The policy was reduced to 24 hours while retaining
the other controls.

## Decision

- Use Node `24.x`, recorded in both `package.json` and `.node-version`.
- Pin pnpm exactly to `10.34.5` through the `packageManager` field.
- Pin direct dependencies exactly and commit `pnpm-lock.yaml`.
- Reject dependency releases younger than 24 hours, including transitive dependencies.
- Keep strict package trust, integrity, exotic-source, and dependency-build checks enabled.
- Deny dependency build scripts unless explicitly reviewed; currently only `esbuild` is allowed.
- Use weekly Dependabot proposals for reviewed upgrades rather than automatic merging.

## Rationale

The exact toolchain makes local and hosted builds behave consistently. A short quarantine adds time
for compromised releases to be noticed without regularly blocking normal maintenance. Script and
source restrictions reduce the risk of packages executing or fetching unexpected code during the
trusted build step.

## Consequences

- Install with `pnpm install --frozen-lockfile` for a reproducible checkout.
- Very recent legitimate releases may need to age for 24 hours before they can be installed.
- New packages that require build scripts need an explicit, narrow `allowBuilds` entry after review.
- Node and pnpm upgrades are coordinated architectural changes, not incidental developer-machine
  updates.
- The generated site still has no npm server runtime and currently ships no browser JavaScript, but
  build-time dependency risk remains relevant.

## Alternatives considered

- **Unpinned Node or package manager:** easier to start, but can change install behavior between
  environments.
- **Seven-day release quarantine:** more conservative, but caused excessive maintenance friction for
  this project.
- **Package-specific age exemptions:** useful for a reviewed emergency, but a poor default because
  exemptions accumulate and obscure policy.
- **Allow all install scripts:** compatible with more packages, but grants unnecessary execution
  during install.

## Evidence

- Tool versions and exact direct dependencies: `package.json`
- Local Node selection: `.node-version`
- Security controls: `pnpm-workspace.yaml`
- Locked dependency graph: `pnpm-lock.yaml`
- Dependabot schedule: `.github/dependabot.yml`
- Toolchain commits: `c491798`, `b0150ab`, `5f33974`, `d145b19`
- Final 24-hour policy merged in `b484589`
