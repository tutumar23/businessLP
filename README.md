# သိဒ္ဓိပွဲရုံ — Theiddhi Agricultural Wholesale

A responsive Myanmar / English landing page for fellow wholesalers and retail shops, built with **Next.js App Router, React, TypeScript, and Tailwind CSS**.

## Run locally

```sh
cd /Users/tutumar/Desktop/myProject/businessLP
pnpm install
pnpm dev
```

Open **http://localhost:3000**. Dependencies are already installed in this workspace, so you can run `pnpm dev` directly. Press Control + C to stop it.

## Production

```sh
pnpm check
pnpm build
pnpm start
```

The Next.js build exports the static website to `out/`. `pnpm start` serves that build on port 3000; use `PORT` to choose another production port. `pnpm dev` uses Next.js's development server with live updates.

Webpack is selected for development and builds because Turbopack's local subprocess port binding is restricted in this desktop environment.

## Source

- `src/app/page.tsx`: Next.js home route.
- `src/app/layout.tsx`: document layout, metadata, and fonts.
- `src/components/landing-page.tsx`: React sections, mobile navigation, and product enquiries.
- `src/components/animated-action/`: Tailwind border animation with two moving white highlights and a soft glow, matching the supplied recording, for the two hero actions, wholesale phone action, and contact call action, with hover, focus, and touch feedback. The cream wholesale phone button animates on hover, keyboard focus, and touch, with green inner highlights and a white outer glow for contrast.
- `src/components/language-switcher/`: reusable language switcher styled with Tailwind utilities.
- `src/i18n/`: language configuration, shared provider, and translated text component.
- `src/data/products.ts`: four product categories and their translations.
- `src/app/globals.css`: Tailwind import, theme, brand styling, and animations.
- `public/assets/`: supplied logo and illustrative produce photographs.
- `next.config.ts`: static export settings.
- `postcss.config.mjs`: Tailwind CSS integration.
- `.openai/hosting.json`: existing Sites identity with `out` as the static directory. Publication remains pending separate authorization.

Responsive containers, grids, spacing, and action layouts use Tailwind utilities. Custom CSS preserves the supplied brand design, photography sprite positions, transitions, and reduced-motion support.

## Content and contact

The default language is Myanmar. The language provider is mounted in the App Router root layout. The separate language switcher uses shared React state and remembers the choice locally when browser storage is available. Translated text and product enquiries update together, along with the document language and title. Translated text is rendered as React elements.

Phone: **09123456789** (`+959123456789`). Contact is by phone or an in-person visit; Viber is removed.

The Google Maps iframe retains the embed supplied in the request. The directions link opens the supplied coordinates. Generated photographs are illustrative and are not photographs of the business premises; their prompts are recorded in `public/assets/GENERATION.md`.

The footer keeps the requested wording: **သင့်လုပ်ငန်းအတွက် ကုန်စိမ်းလက်တွဲဖော်**.

## Code checks

| Command | Purpose |
| --- | --- |
| `pnpm typecheck` | Check TypeScript without generating files. |
| `pnpm lint` | Check Next.js, React, and TypeScript lint rules; warnings fail the check. |
| `pnpm lint:fix` | Apply automatic fixes, then report anything that needs manual attention. |
| `pnpm check` | Run TypeScript checks followed by lint. |
| `pnpm build` | Create and validate the production build. |

Before sharing changes, run `pnpm check && pnpm build`.

ESLint uses `eslint.config.mjs` and ignores generated output. The pnpm workspace configuration allows the native resolver setup required by ESLint. Narrow, documented lint exceptions cover browser-only preference hydration, passing ref objects without reading them during render, and shared root-layout fonts.

## Verification

TypeScript validation and the Next.js production build pass. Browser QA verifies both languages from 320 to 1440 pixels, Tailwind grids, horizontal overflow, mobile navigation, language persistence, product enquiries, the footer wording, and reduced motion.
