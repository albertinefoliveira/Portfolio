# Framer audit: albertinefelipe.com (current site)

Read-only extraction from the Framer project "Albertine Felipe Portfolio" on 2026-11-10. Nothing in Framer was changed.

## Pages
- `/` Home
- `/goexplosion`, `/gokursos`, `/minerva`, `/piracanjuba` (case studies)
- Breakpoints: Desktop 1200px, Tablet 810px, Phone 390px

## Color
| Token | Value | Use |
| --- | --- | --- |
| Black | `#000000` | Page background |
| Card bg | `#0D0D0D` | Card surfaces |
| White 100 | `#FFFFFF` | |
| White 92 | `rgba(255,255,255,.92)` | Headings, primary text |
| White 80 | `rgba(255,255,255,.80)` | Hero support text, nav |
| White 65 / 60 | `rgba(255,255,255,.65/.60)` | Body secondary |
| White 54 | `rgba(255,255,255,.54)` | Footer, meta |
| Border | `rgba(255,255,255,.10)` | Dividers |
| Accent blue | `#6D8DFF` (rgb 109,141,255) | Eyebrows, metrics, links, logo dot |

## Typography
- Sans: **Inter** (headings 500, body 400). Open Sans is loaded but barely used.
- Mono: **JetBrains Mono** (eyebrows, numbers, metrics, logo "AF.").

| Role | Font | Size / line-height | Tracking |
| --- | --- | --- | --- |
| Hero | Inter 500 | 52 / 80 | -1.3px |
| Contact headline | Inter 500 | 40 / 50 | -0.8px |
| About lead | Inter 400 | 18 / 31.5 | 0 |
| Body | Inter 400 | 15 / 26.25–27 | 0 |
| Item title | Inter 400 | 14 / 21 | -0.14px |
| Caption | Inter 400 | 12 / 19.2 | 0 |
| Eyebrow / label | JetBrains Mono 400 | 12 / 16.5 (uppercase) | 0.88px |
| Index number | JetBrains Mono 400 | 10 / 15 | 1px |
| Name tag | JetBrains Mono 400 | 14 / 18 | 0.72px |

## Layout
- Container 1200px, side padding 80 / 40 / 24 (desktop / tablet / phone)
- Section internal gap 56px; column gaps 40–64px; hero vertical padding 180px
- Radius: 14px on images and cards, 0 elsewhere; "Get CV" is an outline pill

## Signature patterns (keep)
- Section eyebrow: 32px blue line + mono uppercase label
- Selected Work card: image, tags, mono project + year, title, divider, big mono metric in blue + mono caption
- Numbered capability columns (01–04) with mono index in blue
- Logo "AF." with the dot in accent blue

## Motion (current)
- Appear: fade + slide Y 8–24px, spring 0.6–0.8s, bounce 0, staggered delays
- Text effects: blur 5–10px + slide, by line or element, on hero and contact
- Sections: scale 0.8 → 1 with spring 1.2–1.5s, bounce 0.2
- Hero background: "Animated Gradient Background" (external component, white smoke)
- "Smooth Scroll" external component installed

## Copy (desktop)
- Hero: "I turn messy product problems into clear digital experiences."
- Hero support: "I understand first, organize second, design third. Most of my work happens before the interface: mapping the problem, the business goal, and the constraints so the design that follows actually holds up."
- Contact: "Got a messy problem worth solving? Say hi."
- Tablet and phone breakpoints still carry older copy in a few places (about text, contact headline).
