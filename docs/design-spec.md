# musthafaaltaf.com — Redesign Spec

**Date:** 2026-07-04 · **Status:** awaiting approval
**Recipe (user's picks from the inspiration gallery):** Dark & cinematic vibe · matured gold-on-dark palette (sdw.space) · bold statement grotesque type (rauno.me / sdw.space) · playful micro-interactions (joshwcomeau.com) · cinematic long-scroll layout · featured + list projects · new Experience and Now sections · resume PDF hosted on-site.

## 1. Design tokens (Tailwind v4 `@theme`)

### Color — "midnight & gold"

| Token | Value | Use |
|---|---|---|
| `--color-ground` | `#080807` | Page background — warm-biased near-black, not pure `#000` |
| `--color-surface` | `#121210` | Cards, elevated blocks |
| `--color-line` | `#26251F` | Hairlines, borders (warm dark gray) |
| `--color-ink` | `#F4F3EF` | Primary text — warm off-white |
| `--color-ink-muted` | `#A5A198` | Secondary text (≥7:1 on ground) |
| `--color-gold` | `#EAB308` | THE accent. Sparse: hero punctuation, active states, key CTAs, focus rings |
| `--color-gold-soft` | `#8A6D0B` | Gold at low volume: borders, dividers under headings |

Rule: gold appears at most once per viewport-height of scroll. Everything else is monochrome warmth. No second accent color anywhere.

Carve-out: form **error status text** uses a semantic red (`red-400`); semantic state color is not an accent and does not count against the gold rule.

### Typography

- **Display: Archivo** (Google Fonts, variable — weight 100–900, width 62–125). Statements set at `wdth 125` (Expanded), weight 700–800, tight leading (1.02–1.1), tracking `-0.02em`. This is the personality of the site.
- **Body: Archivo** at normal width, weight 400/500. One family, two voices — cohesive and fast (single variable font file via `next/font/google`).
- **Labels: Geist Mono** (Google Fonts), 11–12px, uppercase, `+0.08em` tracking, muted color — section eyebrows ("01 — EXPERIENCE"-style only if numbering reads as sequence; otherwise plain "EXPERIENCE"), dates, tech tags.

Type scale (desktop → mobile): hero statement `clamp(3rem, 8vw, 7.5rem)`; section statements `clamp(2rem, 4.5vw, 3.5rem)`; the closing Contact statement sits between the two at `clamp(2.2rem, 6vw, 4.5rem)`; body 16–18px/1.7; labels 11–12px. Prose measure ≤ 65ch.

### Space, radius, motion

- Section rhythm: `py-32` desktop / `py-20` mobile; content max-width `72rem`; text columns `42rem`.
- Radii: `12px` cards, `999px` pills. Borders 1px `--color-line`.
- Motion (the "playful" budget, all gated by `prefers-reduced-motion`):
  - **Magnetic CTAs** — primary buttons subtly attract toward the cursor and spring back (Motion lib spring).
  - **Hover lifts** — project cards rise 4px with a gold hairline fading in; screenshot inside pans slightly.
  - **Scroll reveals** — sections fade/rise 16px once, 250–400ms ease-out; no parallax, no scroll-jacking.
  - **Character warmth** — the gold period in the hero pulses gently once on load; link underlines draw in on hover; the theme is "one wink per section, not a carnival."
  - **Cursor glow** — a site-wide ember spotlight (gold core fading through amber, 600px radius) follows the mouse above page surfaces; pointer-events-none, fades in on first mouse move, absent on touch devices. Ambient light doesn't count against the gold-sparsity rule.
  - **Night sky** — a fixed canvas starfield behind all content: sparse warm-white stars (~6% gold), gentle twinkle, and a single gold shooting star at a random moment in the first 10 seconds of a visit. Reduced motion: static stars, no meteor.
- Library: `motion` (Framer Motion successor), already React-19 compatible.

## 2. Page structure (single long-scroll page)

1. **Nav** — minimal fixed top bar: monogram "M." (gold period) left; right: EXPERIENCE / PROJECTS / NOW / CONTACT in mono labels + Resume pill. Transparent over hero, gains `backdrop-blur` + hairline after scroll. Mobile: same full-screen drawer pattern as today, restyled.
2. **Hero** — full viewport, ground color, statement in Archivo Expanded:
   “Musthafa Altaf builds software with care**.**” (gold period) — subline in muted body text: role + city. Two CTAs: “See my work” (magnetic, gold) and “Resume” (quiet pill → /resume.pdf). No particles; darkness + type carry it.
3. **About** — one cinematic paragraph (rewritten with user), set large (24–28px), measure 40ch, key phrases in `--color-ink` against muted body (authored as `**…**` markers in `lib/data.ts`). Skills appear as a **compact mono chip row directly under the prose** — no logo wall. The 16 SVG logos retire.
4. **Experience** — the new core. Vertical ledger: mono date range left, role + company + 2-line blurb + tech chips right; hairline between entries; company links external. Content sourced from user's resume (pending).
5. **Projects** — “Featured + list”: 2–3 flagships (Petville, VISE, +1 TBD) as large alternating image/text blocks with hover pan + lift; remaining projects as a compact hoverable list (title — one-liner — tech mono chips — ↗). Screenshots get dark-friendly framing (subtle border, no frosted glassmorphism).
6. **Now** — short personal block: what he's building/learning now, interests; benji-style local-time footer line (“HH:MM in Colombo, Sri Lanka”).
7. **Contact** — statement invite (“Say hello**.**”), the (restyled) form: ground-colored inputs with hairline borders, gold focus rings, magnetic send button, inline status; email + socials as mono links. Phone number: keep/drop decided in content pass.
8. **Footer** — one hairline; tiny mono colophon (“Designed & built by Musthafa Altaf · Next.js 16”).

## 3. Component & code plan

- Keep `lib/data.ts` as the single content source; extend with `experience[]`, `now`, `featuredProjects` flag, `chips` per project.
- New/updated components: `Nav`, `Hero`, `About`, `Experience`, `Projects` (+ `FeaturedProject`, `ProjectRow`), `Now`, `Contact`, `Footer`, `Reveal` (shared scroll-reveal wrapper), `Magnetic` (shared cursor-spring wrapper).
- Delete: `ParticlesBackground`, tsparticles deps, skill-logo assets, `SkillsList`.
- Fonts via `next/font/google` (Archivo variable + Geist Mono), `display: swap`.
- OG image (`app/opengraph-image.tsx`): ground background, statement type, gold period.
- Contact API route unchanged.

## 4. Accessibility & quality bars

- Contrast: ink 15:1, muted ≥7:1, gold-on-ground ≥9:1 (large text only for gold).
- All motion behind `prefers-reduced-motion`; focus-visible rings in gold; form labels (visually hidden where placeholder-driven); semantic landmarks (`header/main/section/footer`), h1→h2 hierarchy.
- Lighthouse targets: Performance ≥ 95 (fonts subset + swap, images `next/image`), A11y ≥ 95, SEO ≥ 95.

## 5. Content dependencies (user to provide)

1. **Resume PDF** → `public/resume.pdf` + source material for the Experience section (roles, companies, dates, highlights).
2. About + Now paragraphs: drafted by Claude from resume + current bio, approved by user.
3. Decision during content pass: keep phone number public? Which 2–3 projects are "featured"? Any new project screenshots?

## 6. Out of scope (explicitly)

Blog/writing section, CMS, dark/light toggle (site is dark by design), i18n, analytics changes (GA4 stays).
