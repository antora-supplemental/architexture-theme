# Refreshing the npm registry README (one-time)

The public text on [npmjs.com/package/@amdphreak/architexture-theme-antora](https://www.npmjs.com/package/@amdphreak/architexture-theme-antora) comes from `README.md` in the **last published tarball**.

To update it after editing `README.md` / `deprecated` in `package.json`:

1. Temporarily remove `"private": true` from `package.json` (restore after publish).
2. Bump patch version (e.g. `0.1.1`).
3. `npm publish --access public` (scoped package; workflow does not publish npm).

Or use `npm deprecate @amdphreak/architexture-theme-antora "<message>"` for install warnings only.

Restore `"private": true` in git after the registry is updated.
