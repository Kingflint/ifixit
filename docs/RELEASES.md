# Release process

1. Bump `version` in `package.json`.
2. Update `CHANGELOG.md` with the new section.
3. Commit with `chore(release): vX.Y.Z`.
4. Tag with `git tag vX.Y.Z`.
5. Push tags: `git push --tags`.
6. Build the production bundle and deploy.

## Versioning

- Major: breaking changes to data shape or auth flow.
- Minor: new user-facing features.
- Patch: bug fixes and copy tweaks.