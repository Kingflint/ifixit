# Style guide

## Tailwind

- Prefer responsive utilities over media queries in CSS.
- Group classes: layout -> spacing -> typography -> colour.
- Extract repeated combinations into a component, not a CSS class.

## TypeScript

- `strict` is on; do not loosen it.
- Avoid `any` except in third-party shims.
- Prefer `type` aliases over `interface` for prop types.

## React

- Functional components only; no class components.
- Side effects belong in `useEffect`, never in render.
- Lift state only as far as necessary; co-locate when possible.

## Imports

- Sort by group: built-ins, third-party, app, relative.
- One blank line between groups.