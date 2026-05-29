# npm: deprecate CLI vs final patch publish

See the same guide in [antora-dark-theme `docs/maintainers/npm-registry-notice.md`](https://github.com/antora-supplemental/antora-dark-theme/blob/main/docs/maintainers/npm-registry-notice.md).

## This package (`@amdphreak/architexture-theme-antora`)

**Final patch:** `0.1.1` — publish once so npmjs shows the new `README.md`.

```powershell
cd Z:\code\github.com\antora-supplemental\architexture-theme-antora
pnpm run build:css
# Remove "private": true from package.json temporarily
npm publish --access public
# Restore "private": true; commit if needed
```

Optional — banner on *older* versions after publish:

```bash
npm deprecate @amdphreak/architexture-theme-antora@"<0.1.1" "Retired — use GitHub ui-bundle.zip; see README on latest version."
```
