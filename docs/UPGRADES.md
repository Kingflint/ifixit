# Upgrade notes

## Tailwind v4 (2024)

We migrated to Tailwind v4 early. The official Vite plugin is
`@tailwindcss/vite`; it auto-discovers content.

## React 18 -> 19 (Future)

- Audit `useEffect` dependencies for new strictness.
- Upgrade `react-dom/client` typings.
- Validate the Paystack inline iframe under StrictMode double-mount.