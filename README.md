# DEPRECATED — do not install

**The npm package `@amdphreak/architexture-theme-antora` is retired.** It will not receive updates. Do not add it to new projects.

If the npm deprecation banner is hard to read in dark mode, **use this README** — it is the authoritative migration notice.

---

## Why you should not use npm for this theme

architexture-theme is an **Antora UI bundle** (Tailwind-built CSS, partials, scripts), not a Node module you import. Installing from npm:

- Pollutes the `@amdphreak` scope and your lockfile without helping Antora
- Invites broken playbooks (stacked supplemental dirs, `node_modules` copy scripts)
- Ignores the merged **`ui-bundle.zip`** that is the real distribution artifact

**Use the release bundle in your playbook.** That is the habit to adopt.

---

## What to do instead (correct instructions)

### 1. Pin the GitHub release UI bundle

In `antora-playbook.yml`:

```yaml
ui:
  bundle:
    url: https://github.com/antora-supplemental/architexture-theme/releases/download/v0.1.0/ui-bundle.zip
    snapshot: true
```

Use the latest `vX.Y.Z` from [GitHub Releases](https://github.com/antora-supplemental/architexture-theme/releases).

### 2. Optional overrides (one directory)

```yaml
  supplemental_files: ./supplemental-ui-overrides
```

### 3. Remove this package if already installed

```bash
pnpm remove -D @amdphreak/architexture-theme-antora
# or: npm uninstall @amdphreak/architexture-theme-antora
```

Remove scripts that copied `node_modules/@amdphreak/architexture-theme-antora/supplemental-ui`.

---

## Where to find full documentation

| Resource | URL |
|----------|-----|
| **Install guide & lessons learned** | [npm deprecation (Antora site)](https://antora-supplemental.github.io/architexture-theme/architexture-theme/guide/npm-deprecation.html) |
| **Docs & demo** | [antora-supplemental.github.io/architexture-theme](https://antora-supplemental.github.io/architexture-theme/) |
| **Extensions catalog (org hub)** | [antora-supplemental.github.io/docs](https://antora-supplemental.github.io/docs/) |
| **Source repository** | [github.com/antora-supplemental/architexture-theme](https://github.com/antora-supplemental/architexture-theme) |
| **Example playbook** | [examples/antora-playbook.yml](https://github.com/antora-supplemental/architexture-theme/blob/main/examples/antora-playbook.yml) |

---

## License

MIT — see [repository LICENSE](https://github.com/antora-supplemental/architexture-theme/blob/main/LICENSE).
