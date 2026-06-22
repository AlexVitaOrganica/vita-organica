# Backend Data & CMS Architecture

## 1. Sanity Project Setup
Our standardized Headless CMS is Sanity.
*   **Separation of Concerns:** Treat Sanity as an independent microservice. The Astro frontend uses read-only tokens to pull data via GROQ.
*   **Data Models:** Prioritize structured, modular Object schemas over monolithic Document schemas. 
*   **Block Content (Portable Text):** Use Portable Text for rich text bodies to decouple markup from content.

## 2. API Call Strategies
*   **Build-Time Fetching (SSG):** All API calls must occur within the Astro `---` frontmatter blocks, ensuring data is compiled into static HTML. Do not fetch Sanity data directly within React client-side components unless pagination or live-search is strictly required.

## 3. Image Pipeline Optimization
*   Use `@sanity/image-url` or Astro integrations to request cropped, compressed WebP formats directly from the Sanity Content Delivery Network (e.g., append `?auto=format&fit=crop` to image requests).

## 4. Transactional Email (Resend)
*   All form submissions are routed through `src/pages/api/contact.ts` using the [Resend](https://resend.com) SDK.
*   The endpoint handles three form types: `quote`, `guide`, and `mockup`.
*   Emails are sent `FROM: submissions@vitaorganicasupps.com` and delivered `TO: alex@vitaorganicasupps.com`.
*   The sending domain must be verified in Resend → Domains before production use.
*   Honeypot field (`b_name`) is checked server-side to silently block bot submissions.

## 5. Env Configuration
*   Store Sanity identifiers (`PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`) in `.env` or the hosting provider's variables. Never hardcode them into query files.
*   Store `RESEND_API_KEY` as a private server-side variable. Never prefix it with `PUBLIC_`.
