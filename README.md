# Side0 marketing site

Astro + Tailwind, with content managed in Sanity. The Sanity Studio is embedded at `/studio`, so the site and its editor deploy together. Theme tokens mirror the Side0 app (`music-discovery-app/app/globals.css`).

## Local dev

```sh
pnpm install
pnpm dev          # http://localhost:4321  ·  Studio at /studio
```

Without a `.env`, the page renders the fallback copy in `src/lib/defaults.ts`.

## Connecting Sanity (one-time)

1. Create a project: `pnpm dlx sanity login`, then `pnpm dlx sanity init --env` (choose "Create new project", dataset `production`). This writes the project ID to `.env`. Or copy `.env.example` to `.env` and paste an ID from https://www.sanity.io/manage.
2. Allow the Studio to call the API from your origins:
   `pnpm sanity cors add http://localhost:4321 --credentials` (repeat for the production URL).
3. Seed the dataset with the default copy: `pnpm seed`. It only creates missing docs, so it never overwrites edits.
4. Open `/studio` and edit **Home page** and **Site settings**. Each section has its own tab and a "Hide this section" toggle.

## Deploying

The site is static (`output: "static"`), so content is fetched at build time. To make published edits go live:

- Set `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET` in your host (Vercel, Netlify, …).
- Create a deploy hook in the host and add it as a webhook in Sanity (manage → API → Webhooks, filter `_type in ["home", "siteSettings"]`). Every publish then triggers a rebuild (~1 min).

## Where things live

| Path | What |
| --- | --- |
| `src/sanity/schemaTypes/` | Content model (what editors see in the Studio) |
| `src/lib/defaults.ts` | Fallback and seed content |
| `src/components/` | One Astro component per page section |
| `src/styles/global.css` | Side0 theme tokens, fonts, and animations |
