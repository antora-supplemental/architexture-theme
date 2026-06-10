# npm: web deprecate + final patch publish (use both)

Same model as [antora-dark-mode](https://github.com/antora-supplemental/antora-dark-mode/blob/main/docs/maintainers/npm-registry-notice.md).

**Package:** `@amdphreak/architexture-theme-antora`  
**Final npm version:** `0.1.1`

```powershell
cd Z:\code\github.com\antora-supplemental\architexture-theme
pnpm run build:css
# Remove "private": true from package.json
npm publish --access public
# Restore "private": true
```

Short banner (after publish; overwrites website message):

```bash
npm deprecate @amdphreak/architexture-theme-antora@* "RETIRED — Do not install. Open README tab or use GitHub ui-bundle.zip."
```
