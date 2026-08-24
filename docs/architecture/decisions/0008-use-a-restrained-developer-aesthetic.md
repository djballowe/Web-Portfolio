# ADR-0008: Use a restrained developer aesthetic

- Status: Accepted
- Date: 2026-08-24

## Context

The original presentation leaned heavily on terminal simulation: command prompts, `cd` and `cat`
labels, cursor treatments, a top accent bar, indented command output, and decorative terminal lines.
Those devices communicated a developer theme, but together they distracted from the introduction,
links, and writing.

The visual identity still benefits from technical cues, especially the monospace typeface, dark
palette, green accent, compact labels, and simple dashed separators. The goal is to retain those
cues without making the site behave like a terminal interface.

## Decision

Use a minimal, text-first developer aesthetic rather than literal terminal simulation.

Keep the dark background, monospace typography, green highlight color, understated dividers, and
plain link treatments. Prefer semantic headings and navigation labels over fake commands. Do not add
prompt characters, command strings, cursor effects, ornamental terminal bars, unnecessary output
indentation, or decorative motion by default.

Use a consistent section rhythm across the homepage and post layout. At the current scale, primary
section boundaries use `1.75rem` on desktop, with the compact mobile rhythm using `1.5rem` above and
`1.75rem` below where needed. Treat those values as the starting point rather than independently
inventing spacing for each route.

## Rationale

The restrained approach keeps the site's personality while making its hierarchy and content easier
to scan. It also supports the original goals of a small, fast site built from static HTML and plain
CSS without decorative JavaScript.

A shared spacing rhythm makes the homepage and articles feel like parts of one system and avoids the
large, inconsistent gaps that accumulated when each block used independent padding.

## Consequences

- New visual work should use typography, color, whitespace, and simple lines before adding themed
  decoration.
- Technical motifs must support comprehension instead of imitating terminal behavior for its own
  sake.
- Motion is opt-in and should serve a clear interaction need.
- Homepage and article spacing should be evaluated together when the rhythm changes.
- A future redesign may replace this direction, but it should do so deliberately and record the new
  rationale rather than gradually reintroducing terminal chrome.

## Alternatives considered

- **Keep the full terminal simulation:** distinctive, but visually busy and increasingly at odds
  with the content-first goal.
- **Remove every developer cue:** visually neutral, but discards an identity that still works when
  used sparingly.
- **Add richer animation and interface chrome:** creates more visual activity, but adds distraction
  and conflicts with the static, JavaScript-optional baseline.

## Evidence

- Initial implementation: `73880b4`
- Pull request: #24
- Homepage presentation: `src/pages/index.astro`
- Shared shell and article presentation: `src/layouts/BaseLayout.astro` and
  `src/layouts/PostLayout.astro`
