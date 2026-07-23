#!/usr/bin/env python3
"""Build static codex + curated design-doc pages for vincability.com/vindicator.

Sources (read-only, from the game repo):
  P:\\Vindicator\\assets\\codex\\*.md
  P:\\Vindicator\\docs\\design-*.md  (allowlist only)

Outputs (committed static HTML for Netlify):
  vindicator/codex/*.html
  vindicator/design/*.html

Run from anywhere:
  python vindicator/build_docs.py
"""
from __future__ import annotations

import html
import re
import sys
from dataclasses import dataclass, field
from datetime import date
from pathlib import Path

try:
    import markdown
except ImportError:
    print("Need: pip install markdown", file=sys.stderr)
    sys.exit(1)

SITE = Path(__file__).resolve().parent
GAME = Path(r"P:\Vindicator")
CODEX_SRC = GAME / "assets" / "codex"
DESIGN_SRC = GAME / "docs"

# Player-facing codex: ship all articles.
# Design docs: systems/mechanics WHY only — no story-bible / cradle spoilers.
DESIGN_ALLOWLIST = [
    "design-visual-combat-spine.md",
    "design-weapons-modules.md",
    "design-faction-art-language.md",
    "design-economy.md",
    "design-fleet.md",
    "design-fleets-content.md",
    "design-stations.md",
    "design-battle-stations.md",
    "design-conflict.md",
    "design-munitions.md",
    "design-combat-heat.md",
    "design-generation.md",
    "design-universe.md",
]

CATEGORY_ORDER = ["Flight", "Universe", "Economy", "Factions", "Combat", "Other"]

MD_EXT = [
    "markdown.extensions.fenced_code",
    "markdown.extensions.tables",
    "markdown.extensions.sane_lists",
    "markdown.extensions.smarty",
    "markdown.extensions.toc",
]


@dataclass
class Article:
    slug: str
    title: str
    summary: str
    category: str
    order: int
    body_html: str
    source_name: str
    kind: str  # codex | design


def parse_frontmatter(text: str) -> tuple[dict[str, str], str]:
    meta: dict[str, str] = {}
    if not text.startswith("---"):
        return meta, text
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return meta, text
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            body = "\n".join(lines[i + 1 :])
            return meta, body
        m = re.match(r"^\s*([^:#]+):\s*(.*?)\s*$", lines[i])
        if m:
            key = m.group(1).strip().lower()
            val = m.group(2).strip().strip('"').strip("'")
            meta[key] = val
    return meta, text


def first_heading(body: str, fallback: str) -> str:
    for line in body.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return fallback


def strip_first_h1(body: str) -> str:
    lines = body.splitlines()
    out: list[str] = []
    skipped = False
    for line in lines:
        if not skipped and line.startswith("# "):
            skipped = True
            continue
        out.append(line)
    return "\n".join(out).lstrip("\n")


def md_to_html(body: str) -> str:
    return markdown.markdown(body, extensions=MD_EXT)


def rewrite_internal_links(html_body: str, kind: str) -> str:
    """Point *.md links at generated *.html siblings; drop unreachable repo paths."""

    def repl(m: re.Match[str]) -> str:
        href = m.group(1)
        label_open = m.group(0)[: m.start(1) - m.start(0)]
        # only the href part — redo full match carefully
        return m.group(0)  # placeholder, use sub with function properly

    def sub_href(m: re.Match[str]) -> str:
        full = m.group(0)
        href = m.group(1)
        if href.startswith(("http://", "https://", "mailto:", "#")):
            return full
        # strip optional anchors
        path, frag = (href.split("#", 1) + [""])[:2]
        frag = f"#{frag}" if frag else ""
        name = Path(path).name
        if name.endswith(".md"):
            target = name[:-3] + ".html"
            if kind == "codex" and name.startswith("design-"):
                return full.replace(href, f"../design/{target}{frag}")
            if kind == "design" and not name.startswith("design-"):
                # codex article link from design doc
                return full.replace(href, f"../codex/{target}{frag}")
            return full.replace(href, f"{target}{frag}")
        # CLAUDE.md / ARCHITECTURE etc — leave as code-ish plain text via span
        if name.endswith((".md", ".cs", ".ps1")) or "docs/" in path or "assets/" in path:
            return full.replace(f'href="{href}"', f'href="#" title="Repo path (not on site): {html.escape(href)}" class="dead-link"')
        return full

    return re.sub(r'href="([^"]+)"', sub_href, html_body)


def load_codex() -> list[Article]:
    articles: list[Article] = []
    for path in sorted(CODEX_SRC.glob("*.md")):
        text = path.read_text(encoding="utf-8")
        meta, body = parse_frontmatter(text)
        title = first_heading(body, path.stem)
        body = strip_first_h1(body)
        cat = meta.get("category", "Other")
        if cat not in CATEGORY_ORDER:
            cat = "Other"
        order = int(meta.get("order", "0") or "0")
        summary = meta.get("summary", "")
        body_html = rewrite_internal_links(md_to_html(body), "codex")
        articles.append(
            Article(
                slug=path.stem,
                title=title,
                summary=summary,
                category=cat,
                order=order,
                body_html=body_html,
                source_name=path.name,
                kind="codex",
            )
        )
    articles.sort(key=lambda a: (CATEGORY_ORDER.index(a.category), a.order, a.title))
    return articles


def load_design() -> list[Article]:
    articles: list[Article] = []
    for name in DESIGN_ALLOWLIST:
        path = DESIGN_SRC / name
        if not path.exists():
            print(f"warn: missing design doc {name}", file=sys.stderr)
            continue
        text = path.read_text(encoding="utf-8")
        meta, body = parse_frontmatter(text)
        title = first_heading(body, path.stem)
        body = strip_first_h1(body)
        summary = meta.get("summary", "")
        if not summary:
            # first non-empty paragraph
            for para in re.split(r"\n\s*\n", body):
                clean = para.strip()
                if clean and not clean.startswith("#") and not clean.startswith("*"):
                    summary = re.sub(r"\s+", " ", clean)[:180]
                    if len(clean) > 180:
                        summary = summary.rstrip() + "…"
                    break
        body_html = rewrite_internal_links(md_to_html(body), "design")
        articles.append(
            Article(
                slug=path.stem,
                title=title,
                summary=summary,
                category="Design",
                order=DESIGN_ALLOWLIST.index(name),
                body_html=body_html,
                source_name=path.name,
                kind="design",
            )
        )
    return articles


def shell(
    *,
    title: str,
    active: str,
    depth: int,
    content: str,
    description: str = "",
) -> str:
    prefix = "../" * depth if depth else ""
    root = prefix  # path to /vindicator/
    desc = description or title
    nav = f"""
  <header class="site-nav">
    <a class="site-nav__brand" href="{root}index.html">VINDICATOR</a>
    <nav class="site-nav__links" aria-label="Section">
      <a href="{root}index.html"{' class="is-active"' if active == 'home' else ''}>Home</a>
      <a href="{root}codex/index.html"{' class="is-active"' if active == 'codex' else ''}>Codex</a>
      <a href="{root}design/index.html"{' class="is-active"' if active == 'design' else ''}>Design</a>
      <a href="{root}design-language.html">UI language</a>
      <a href="{root}index.html#devlog">Devlog</a>
    </nav>
    <a class="site-nav__ext" href="{prefix}../index.html">Vincability</a>
  </header>"""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{html.escape(title)} — Vindicator</title>
  <meta name="description" content="{html.escape(desc)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Asimovian&family=Geist:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="{root}vindicator.css" />
</head>
<body class="doc-body">
{nav}
  <main class="doc-main">
{content}
  </main>
  <footer class="footer">
    <span>Built {date.today().isoformat()} from game sources</span>
    <span><a href="{root}index.html">Home</a> · <a href="mailto:contact@vincability.com">Contact</a></span>
    <span>© Vincability</span>
  </footer>
</body>
</html>
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8", newline="\n")
    print("write", path.relative_to(SITE))


def render_codex_index(articles: list[Article]) -> str:
    groups: dict[str, list[Article]] = {c: [] for c in CATEGORY_ORDER}
    for a in articles:
        groups.setdefault(a.category, []).append(a)

    sections = []
    for cat in CATEGORY_ORDER:
        items = groups.get(cat) or []
        if not items:
            continue
        lis = "\n".join(
            f'        <li><a href="{a.slug}.html"><span class="doc-list__title">{html.escape(a.title)}</span>'
            f'<span class="doc-list__summary">{html.escape(a.summary)}</span></a></li>'
            for a in items
        )
        sections.append(
            f'    <section class="doc-section">\n'
            f'      <h2 class="doc-section__title">{html.escape(cat)}</h2>\n'
            f'      <ul class="doc-list">\n{lis}\n      </ul>\n'
            f"    </section>"
        )

    body = f"""
    <header class="doc-hero">
      <span class="chip">Codex</span>
      <h1>In-game manual</h1>
      <p class="doc-hero__lede">Player-voiced articles that ship with the game. What the systems <em>are</em> — not the design rationale behind them.</p>
    </header>
{chr(10).join(sections)}
"""
    return shell(
        title="Codex",
        active="codex",
        depth=1,
        content=body,
        description="Vindicator codex — the living in-game manual.",
    )


def render_design_index(articles: list[Article]) -> str:
    lis = "\n".join(
        f'        <li><a href="{a.slug}.html"><span class="doc-list__title">{html.escape(a.title)}</span>'
        f'<span class="doc-list__summary">{html.escape(a.summary)}</span></a></li>'
        for a in articles
    )
    body = f"""
    <header class="doc-hero">
      <span class="chip">Design</span>
      <h1>Curated design notes</h1>
      <p class="doc-hero__lede">Systems and production WHY for a subset of design docs. Story-bible and spoiler-heavy captures stay offline. The codex still owns player-facing truth.</p>
      <p class="banner banner--warn">Developer-facing notes. May describe unshipped systems or change without notice.</p>
    </header>
    <section class="doc-section">
      <ul class="doc-list">
{lis}
      </ul>
    </section>
"""
    return shell(
        title="Design notes",
        active="design",
        depth=1,
        content=body,
        description="Curated Vindicator design documents.",
    )


def render_article(a: Article, siblings: list[Article]) -> str:
    active = "codex" if a.kind == "codex" else "design"
    index_href = "index.html"
    warn = ""
    if a.kind == "design":
        warn = '<p class="banner banner--warn">Design note — systems rationale, not player-facing codex text.</p>'

    # prev/next
    idx = next((i for i, s in enumerate(siblings) if s.slug == a.slug), -1)
    prev_html = next_html = ""
    if idx > 0:
        p = siblings[idx - 1]
        prev_html = f'<a class="doc-pager__link" href="{p.slug}.html">← {html.escape(p.title)}</a>'
    if 0 <= idx < len(siblings) - 1:
        n = siblings[idx + 1]
        next_html = f'<a class="doc-pager__link" href="{n.slug}.html">{html.escape(n.title)} →</a>'

    body = f"""
    <article class="doc-article">
      <header class="doc-article__head">
        <a class="doc-back" href="{index_href}">← {'Codex' if a.kind == 'codex' else 'Design'}</a>
        <span class="chip">{html.escape(a.category if a.kind == 'codex' else 'Design')}</span>
        <h1>{html.escape(a.title)}</h1>
        {f'<p class="doc-article__summary">{html.escape(a.summary)}</p>' if a.summary else ''}
        {warn}
      </header>
      <div class="prose">
{a.body_html}
      </div>
      <nav class="doc-pager" aria-label="Adjacent articles">
        {prev_html}
        {next_html}
      </nav>
    </article>
"""
    return shell(
        title=a.title,
        active=active,
        depth=1,
        content=body,
        description=a.summary or a.title,
    )


def main() -> int:
    if not CODEX_SRC.is_dir():
        print(f"Game codex not found: {CODEX_SRC}", file=sys.stderr)
        return 1

    codex = load_codex()
    design = load_design()

    codex_dir = SITE / "codex"
    design_dir = SITE / "design"
    # wipe old generated pages (keep dirs)
    for d in (codex_dir, design_dir):
        if d.exists():
            for p in d.glob("*.html"):
                p.unlink()

    write(codex_dir / "index.html", render_codex_index(codex))
    for a in codex:
        write(codex_dir / f"{a.slug}.html", render_article(a, codex))

    write(design_dir / "index.html", render_design_index(design))
    for a in design:
        write(design_dir / f"{a.slug}.html", render_article(a, design))

    print(f"done: {len(codex)} codex, {len(design)} design")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
