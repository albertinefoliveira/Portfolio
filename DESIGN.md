# Design system

Status: **provisional**. Values come from the current Framer site (see `docs/framer-audit.md`). The sans typeface, type scale and motion are open until the reference review is done.

Tokens live in `src/app/globals.css`. Components use tokens only.

## Color
Dark, cold, one accent. The accent is used sparingly: eyebrows, metrics, links, the logo dot, focus.

| Token | Value |
| --- | --- |
| `--color-bg` | `#000000` |
| `--color-surface` | `#0d0d0d` |
| `--color-fg` | white 92% |
| `--color-fg-secondary` | white 80% |
| `--color-fg-muted` | white 60% |
| `--color-fg-subtle` | white 54% |
| `--color-border` | white 10% |
| `--color-accent` | `#6d8dff` |

## Typography
- Mono: JetBrains Mono. Kept as the signature: eyebrows, indexes, metrics, specs, and the hidden structure layer.
- Sans: Inter, **provisional**. To be tested against 2 or 3 alternatives with more character.
- Type scale: **open**. Target a short scale (the Framer site uses eight sizes and a very loose hero line height).

## Layout
- Container max 1200px
- Gutter 24 / 40 / 80px at <810 / 810 / 1200px
- Breakpoints 810px and 1200px

## Shape
- `--radius-card` 14px for images and cards
- `--radius-pill` for pill buttons
- Everything else square

## Motion (provisional)
- Durations: fast 150ms, base 240ms, slow 600ms
- Easing: `--ease-out`
- Allowed: short fades and small translates, no bounce
- Not allowed: scale-in sections, smoke or gradient backgrounds, smooth-scroll hijacking
- Reduced motion: transitions collapse to near zero

## Signature patterns to carry over
- Section eyebrow: 32px accent line + mono uppercase label
- Case card anchored on one metric: big mono number in accent + short mono caption
- Numbered columns with mono index in accent
- Logo "AF." with the dot in accent
