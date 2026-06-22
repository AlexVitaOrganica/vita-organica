# Deployment & Webhooks Integration

This guide outlines the proper deployment workflow for taking this Agency Master template into production, ensuring CI/CD flows and CMS synchronization.

## 1. Hosting Environment
We optimize out-of-the-box for **Vercel** or **Netlify**, given their excellent support for Astro and SSR features if needed.

### Steps to Deploy to Vercel
1. Push the customized repository to GitHub.
2. In the Vercel Dashboard, select "Add New Project" and import your repository.
3. **Framework Preset:** Select "Astro". (Vercel usually detects this automatically).
4. **Environment Variables:** Add the following keys in Vercel → Settings → Environment Variables:
   - `PUBLIC_SANITY_PROJECT_ID`
   - `PUBLIC_SANITY_DATASET`
   - `RESEND_API_KEY` *(required for form email delivery — see Section 4)*
5. Deploy.

## 2. Security Headers (Vercel)
A `vercel.json` file is included in the root directory. This explicitly secures the frontend with `Content-Security-Policy` and `Strict-Transport-Security` headers. **DO NOT delete this file** unless migrating to a host that requires a different configuration format (like `netlify.toml`). Ensure the CSP settings match your image sources (see [Cybersecurity Standards](docs/best-practices/06-cybersecurity-standards.md)).

## 3. Output Mode & Adapter
This project uses `output: 'static'` with the `@astrojs/vercel` adapter. All pages are pre-rendered as static HTML at build time. The `/api/contact` endpoint opts out of prerendering via `export const prerender = false`, running as a Vercel Serverless Function. This replaces the old "hybrid" output mode removed in Astro v5.

## 4. Email Integration (Resend)
All form submissions (quote requests, guide downloads, mockup exports) are delivered via [Resend](https://resend.com).

### Setup
1. Create a Resend account at resend.com.
2. Go to **API Keys** → **Create API Key** → copy the `re_...` value.
3. Add it to Vercel as `RESEND_API_KEY` (never prefix with `PUBLIC_`).
4. Add it to your local `.env` file for development.

### Domain verification (required for production)
1. In Resend → **Domains** → Add `vitaorganicasupps.com`.
2. Add the provided DNS records (MX, TXT, DKIM) in your domain registrar.
3. Once verified, emails send from `submissions@vitaorganicasupps.com`.

### Email endpoint
- File: `src/pages/api/contact.ts`
- `TO`: `alex@vitaorganicasupps.com`
- `FROM`: `submissions@vitaorganicasupps.com`
- Handles 3 form types: `quote` | `guide` | `mockup`
- Honeypot field (`b_name`) silently drops bot submissions

### Testing before domain verification
Set `FROM` temporarily to `onboarding@resend.dev` — it delivers only to the Resend account owner's email address.

## 5. Webhook Integration (Sanity CMS)
Since pages are statically generated, Sanity updates will not go live instantly unless you trigger a rebuild.

### How to set up the Sanity Rebuild Webhook:
1. **In Vercel:** Go to Project Settings -> Git -> Deploy Hooks. Create a hook named "Sanity Content Update" targeting your `main` branch. Copy the URL.
2. **In Sanity Dashboard:** Navigate to your project settings -> API -> Webhooks.
3. Click "Add Webhook".
4. **URL:** Paste the Vercel Hook URL.
5. **Dataset:** Your active dataset (usually `production`).
6. **Trigger on:** Create, Update, Delete.
7. Save the webhook.

Now, anytime a client presses "Publish" on an article in the Sanity Studio (see [Client Handoff Manual](docs/client-handoff-manual.md)), Vercel will automatically fetch the new data and rebuild the static site.

---
For pre-launch verification, always run through the [Testing & QA Checklist](docs/best-practices/04-testing-qa-checklist.md).
