# 2026-04-11 - Stone and Graphite Structural Reveal

## Architectural Context

The theme has been upgraded from a static CSS override to a dynamic, Tailwind v4-powered architectural system. This allows the Antora documentation to maintain design parity with the core portfolio site.

## Key Changes

- **Tailwind v4 Setup**: Implementation of the `@custom-variant dark` configuration to allow manual theme toggling via class selector.
- **View Transitions**: Integration of the `document.startViewTransition` API to provide a seamless, hardware-accelerated transition between themes.
- **Structural Hexagon Mask**: An animated SVG-based masking system that reveals the theme change through a series of tessellated hexagons popping into existence.
- **Transient Transitions**: Performance-optimized CSS that only enables transitions during the theme flip, preventing scrolling jank on large documentation pages.

## Verification

- Validated CSS build via `pnpm build:css`.
- Verified UI injection via `npx antora antora-playbook.yml`.
