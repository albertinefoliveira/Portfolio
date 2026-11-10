@AGENTS.md

# Albertine Felipe portfolio

Personal portfolio of Albertine Felipe, product designer who builds. The site is itself a proof of the work: designed and built in code with Claude Code, deployed on Vercel. It replaces the current Framer site at albertinefelipe.com.

## Who reads it
1. Tech recruiters (primary). They must understand level and specialty in seconds, without opening GitHub.
2. Hiring managers and design leads. They look for judgment, trade-offs and business thinking.
3. Design engineers. They notice structure, performance and detail.

## Positioning
Design Engineer anchored in product and UI. "A designer who builds", never "a developer who designs".

## Concept: structure underneath
- Core idea: turning dense, complex products into interfaces that explain themselves.
- Surface: cold, editorial, quiet. Voice: a conversation with a colleague.
- One hidden surprise: an optional structure layer that reveals grid, spacing, tokens and specs, using the same mono vocabulary already on screen. It must never get in the way of someone who only wants the case studies.
- Out on purpose: template effects (smoke backgrounds, smooth-scroll hijacking, bouncy scale-in sections), anything that looks generated from a single prompt.

## Rules
- Read DESIGN.md before any visual work. Use tokens only; never hardcode colors, sizes, durations or easings in components. If a value is missing, add a token first.
- Motion serves content. Respect `prefers-reduced-motion`. Effects never outshine usefulness.
- Accessibility is part of done: semantic HTML, visible focus, keyboard support, alt text, contrast.
- Every decision that caused doubt goes into DECISIONS.md with date and reason.
- Small, focused changes. Explain any code the owner might not understand.

## Writing rules (all site copy and docs)
- Never use em dashes.
- Human, natural voice. No AI-sounding phrasing, no grand openings, no artificial symmetry (avoid rule-of-three lists and tidy closing lines).
- Never invent numbers or results. Metrics come only from the owner's real case data.
- English is the primary language; Portuguese comes later as a secondary locale.

## Stack
- Next.js (App Router) + TypeScript, Tailwind CSS v4 reading CSS variable tokens
- Motion for animation
- Fonts self-hosted via Fontsource (no runtime Google Fonts requests)
- Planned: MDX for case studies, next-intl for EN/PT, Vercel for deploy

## Structure
- `src/app` routes and global styles (`globals.css` holds the tokens)
- `docs/` working documents (Framer audit, references)
- `DESIGN.md` visual system, `DECISIONS.md` decision log
