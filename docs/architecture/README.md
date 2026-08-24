# Architecture documentation

This directory is the durable architectural memory for the repository. It describes both the current
shape of the site and the reasons behind decisions that are not obvious from the code.

An agent joining the project should read these documents in this order:

1. [`overview.md`](overview.md) for the current system map and important boundaries.
2. The accepted decision records below for the reasoning behind that map.
3. `README.md` at the repository root for day-to-day commands.

## Decision index

| ID                                                           | Decision                                         | Status   |
| ------------------------------------------------------------ | ------------------------------------------------ | -------- |
| [0001](decisions/0001-use-astro-for-a-static-site.md)        | Use Astro for a static, JavaScript-optional site | Accepted |
| [0002](decisions/0002-store-posts-in-content-collections.md) | Store posts in validated content collections     | Accepted |
| [0003](decisions/0003-list-writing-on-the-homepage.md)       | List recent writing on the homepage              | Accepted |
| [0004](decisions/0004-pin-and-harden-the-node-toolchain.md)  | Pin and harden the Node and pnpm toolchain       | Accepted |
| [0005](decisions/0005-let-vercel-own-deployment.md)          | Let Vercel own preview and production deployment | Accepted |
| [0006](decisions/0006-remove-the-legacy-react-stack.md)      | Remove the legacy React and Sass stack           | Accepted |

## Recording a new decision

Create the next numbered file in `decisions/` when a change affects system boundaries, data or
content flow, deployment, dependencies, security posture, or a convention future work should not
casually reverse.

Use the original goals in [`overview.md`](overview.md#original-goals) as the default test for new
directions. If a proposal conflicts with one or more of those goals, do not treat that as an
automatic rejection or silently proceed. Explain the deviation and ask the repository owner to
confirm it before implementation. A useful form is:

> We can take this path, but it deviates from the original plan by X, Y, and Z. Do you want to make
> that tradeoff?

Record an approved deviation as a new decision, including why the original constraint no longer
serves the project.

Use the same sections as the existing records:

- **Status** and **Date**
- **Context**: the problem and constraints
- **Decision**: the rule future work should follow
- **Rationale**: why this option won
- **Consequences**: benefits, costs, and follow-up work
- **Alternatives considered**
- **Evidence**: commits, pull requests, or current files that verify the record

Do not silently rewrite an accepted decision when the architecture changes. Add a new decision, mark
the old one `Superseded by ADR-NNNN`, and update `overview.md` and this index. Small corrections
that do not change the decision may be edited in place.
