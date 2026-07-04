# musthafaaltaf.com

Personal portfolio of Mohamed Musthafa Altaf — full-stack developer in Colombo, Sri Lanka.

Built with [Next.js 16](https://nextjs.org) (App Router), React 19, TypeScript, Tailwind CSS v4, and [motion](https://motion.dev). Deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

The contact form needs a [Resend](https://resend.com) API key — copy `.env.example` to `.env.local` and fill it in.

## Structure

- `app/` — App Router pages, layout, contact API route, OG image
- `components/` — one component per section, plus `Reveal`/`Magnetic` motion primitives
- `lib/data.ts` — all site content (roles, projects, socials); edit here, not in components
- `docs/design-spec.md` — the design system this site implements
