# architexture-theme-antora

Bespoke minimalist architectural theme for [Antora](https://antora.org) — Stone and Graphite design system.

## The habit: use the release UI bundle

Pin the GitHub release `ui-bundle.zip` in your playbook (Default UI + this theme, merged). No npm package.

```yaml
ui:
  bundle:
    url: https://github.com/antora-supplemental/architexture-theme-antora/releases/download/v0.1.0/ui-bundle.zip
    snapshot: true
  supplemental_files: ./supplemental-ui-overrides   # optional
```

Discover via [Antora Supplemental docs](https://antora-supplemental.github.io/docs/) (extensions registry).

> **Former npm package `@amdphreak/architexture-theme-antora`:** deprecated and unpublished. [npm deprecation guide](https://antora-supplemental.github.io/architexture-theme-antora/architexture-theme-antora/guide/npm-deprecation.html).

## Docs & demo

- [Documentation](https://antora-supplemental.github.io/architexture-theme-antora/)
- [Full guide (AsciiDoc)](README.adoc)

## Releasing

Tag `vX.Y.Z` → [.github/workflows/release.yml](.github/workflows/release.yml) publishes `ui-bundle.zip` only.

## License

MIT
