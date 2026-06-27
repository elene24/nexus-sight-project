# OSINTUS

Premium website for **OSINTUS** — Open Source Intelligence (OSINT), cyber intelligence, investigations, and security consulting.

Built with **TanStack Start**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Designed around a dark, sophisticated palette with Orbitron display type to communicate intelligence, precision, and trust.

---

## Tech Stack

- **Framework:** TanStack Start v1 (SSR + file-based routing)
- **Build tool:** Vite 7
- **UI:** React 19, Tailwind CSS v4, shadcn/ui, Framer Motion
- **Language:** TypeScript (strict)
- **Validation:** Zod
- **Target runtime:** Cloudflare Workers (edge)

## Brand

| Token | Value |
| --- | --- |
| Navy | `#12203B` |
| Steel Blue | `#314A66` |
| Muted Blue Grey | `#77979E` |
| Off-white | `#EBEFF2` |
| Headings | Orbitron |
| Body | Inter |

---

## Getting Started

Requires [Bun](https://bun.sh) (recommended) or Node 20+.

```bash
# install dependencies
bun install

# start the dev server (http://localhost:8080)
bun dev

# production build
bun run build

# preview production build
bun run start
```

---

## Project Structure

```
src/
├── routes/                # File-based routes (TanStack Router)
│   ├── __root.tsx         # App shell — html/head/body, providers
│   ├── index.tsx          # Homepage
│   ├── mission.tsx
│   ├── services.tsx
│   ├── services.$slug.tsx # Dynamic service detail
│   ├── team.tsx
│   ├── activities.tsx
│   ├── insights.tsx
│   ├── careers.tsx
│   ├── partners.tsx
│   └── contact.tsx
├── components/
│   ├── site/              # Header, Footer, Hero, ServicesGrid, Pattern, …
│   └── ui/                # shadcn/ui primitives
├── lib/
│   └── site-data.ts       # Centralized site content (services, team, …)
├── styles.css             # Tailwind v4 theme + global styles
└── router.tsx             # Router bootstrap
```

> `src/routeTree.gen.ts` is auto-generated — do not edit by hand.

---

## Routes

| Path | Description |
| --- | --- |
| `/` | Homepage — hero, services, social proof |
| `/mission` | Mission statement and values |
| `/services` | Service overview |
| `/services/:slug` | Service detail page |
| `/team` | Leadership and team |
| `/activities` | News and activities |
| `/insights` | Research and publications |
| `/careers` | Open roles and culture |
| `/partners` | Partner ecosystem |
| `/contact` | Contact form (Zod-validated) |

---

## Editing Content

Most copy (services, team members, activities, insights) lives in `src/lib/site-data.ts`. Update it there and every page renders the new content.

## Design System

All colors, typography, and spacing are defined as semantic tokens in `src/styles.css`. Avoid hardcoded color utilities like `bg-[#...]` — use the theme tokens so the design stays consistent.

---

## Deployment

Click **Publish** in the top-right of the Lovable editor. Frontend changes require clicking **Update** in the publish dialog to go live; backend changes deploy automatically.

To self-host: connect to GitHub, then deploy the built output to any Cloudflare Workers–compatible host.

## License

© OSINTUS. All rights reserved.
