# Vita Organica — Website

Official website for **Vita Organica Supplements** — [vitaorganicasupps.com](https://vitaorganicasupps.com)

## Tech Stack

- **Framework:** Astro v5 (static site generation)
- **UI:** React components for interactive sections
- **CMS:** Sanity — manage blog posts and content
- **Email:** Resend — handles all form submissions
- **Hosting:** Vercel — auto-deploys on every push to `main`

## How the site works

- Any push to the `main` branch automatically triggers a new deployment on Vercel
- Any content published in Sanity automatically triggers a site rebuild
- All form submissions (quote requests, guide downloads, mockup leads) are delivered to `alex@vitaorganicasupps.com`

## Managing content

Blog posts and site content are managed through **Sanity Studio**.

- Project ID: `wh5eeb8c`
- Dataset: `production`

## Environment variables

The following variables must be set in Vercel for the site to function:

| Variable | Description |
|---|---|
| `SANITY_PROJECT_ID` | Sanity project identifier |
| `SANITY_DATASET` | Sanity dataset name |
| `SANITY_API_VERSION` | Sanity API version |
| `SANITY_USE_CDN` | Enable Sanity CDN caching |
| `RESEND_API_KEY` | Resend API key for form email delivery |

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

## Contact

For technical support, contact your development team.
