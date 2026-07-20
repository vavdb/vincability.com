# vincability.com/vindicator

Static landing + generated **Codex** and curated **Design** docs.

## Regenerate docs

Requires the game repo at `P:\Vindicator` and `pip install markdown`.

```powershell
python vindicator/build_docs.py
```

Sources:

| Site | Game path |
|------|-----------|
| `/vindicator/codex/*` | `P:\Vindicator\assets\codex\*.md` (all) |
| `/vindicator/design/*` | allowlisted `P:\Vindicator\docs\design-*.md` |

Excluded from design by default: `design-bible.md`, `design-cradle.md` (story spoilers).

Generated HTML is committed so Netlify can deploy without the game tree.

## Local preview

```powershell
cd P:\vincability.com
npx --yes serve -p 4173
# open http://localhost:4173/vindicator/
```
