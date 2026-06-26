# Deployment Guide

## Hosting

This project is deployed on **Vercel**, connected to the `main` branch of `github.com/AlexVitaOrganica/vita-organica`. Every push to `main` triggers an automatic rebuild and deployment.

## Package manager

This project uses **pnpm**. Do not use npm or yarn.

```bash
pnpm install   # install dependencies
pnpm dev       # local development (http://localhost:4321)
pnpm build     # production build
```

## Environment variables

Set in Vercel → Project → Settings → Environment Variables.

| Variable | Description |
|---|---|
| `SANITY_PROJECT_ID` | Sanity project ID (`wh5eeb8c`) |
| `SANITY_DATASET` | Sanity dataset (`production`) |
| `SANITY_API_VERSION` | Sanity API version (`2023-05-03`) |
| `SANITY_USE_CDN` | CDN caching (`true`) |
| `RESEND_API_KEY` | Resend API key for form email delivery |

For local development, copy these into a `.env` file at the project root.

## Output mode & adapter

Uses `output: 'static'` with the `@astrojs/vercel` adapter. All pages are pre-rendered as static HTML at build time. The `/api/contact` endpoint opts out via `export const prerender = false` and runs as a Vercel Serverless Function.

## Email (Resend)

All form submissions are routed through `src/pages/api/contact.ts`.

- **TO:** `alex@vitaorganicasupps.com`
- **FROM:** `submissions@vitaorganicasupps.com`
- **Form types handled:** `quote` | `guide` | `mockup`
- **Spam protection:** honeypot field (`b_name`) silently drops bot submissions

The sending domain `vitaorganicasupps.com` must be verified in Resend → Domains before production emails will deliver. During development, temporarily set `FROM` to `onboarding@resend.dev` to test without domain verification.

## Sanity webhook

When content is published in Sanity, a webhook triggers an automatic Vercel rebuild.

To update or recreate the webhook:
1. **Vercel:** Project → Settings → Git → Deploy Hooks → create hook targeting `main` branch → copy URL
2. **Sanity:** Project → API → Webhooks → edit "Trigger Vercel Build" → paste new URL

## Security headers

A `vercel.json` file at the project root sets `Content-Security-Policy` and `Strict-Transport-Security` headers. Do not delete it.
