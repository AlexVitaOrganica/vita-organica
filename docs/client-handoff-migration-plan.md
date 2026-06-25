# Production Infrastructure Handoff — Vita Organica
**Prepared by:** Agency  
**Document type:** Senior Engineer Migration Plan  
**Status:** Pre-handoff audit complete

---

## ⚠️ Missing Information — Resolve Before Starting

The following must be confirmed before executing any step. Do not proceed blind.

| # | Information needed | Where to find it |
|---|---|---|
| 1 | Where is `vita-organica.com` registered? | Check domain registrar (GoDaddy, Cloudflare, Namecheap, etc.) |
| 2 | Where is `vitaorganicasupps.com` registered? | Same as above — may be different registrar |
| 3 | Does the client have a GitHub account? | Ask Alex |
| 4 | Does the client have a Vercel account? | Ask Alex |
| 5 | Does the client have a Resend account? | Ask Alex |
| 6 | What is the actual Sanity Project ID? | Vercel → Project → Environment Variables → `SANITY_PROJECT_ID` |
| 7 | What is the Sanity dataset name? | Vercel → Environment Variables → `SANITY_DATASET` |
| 8 | Is Sanity Studio deployed? If yes, where? | Check `sanity.config.ts` or the `/studio` subdomain |
| 9 | Is there a Google Analytics / GTM tag on the site? | View page source → search for `G-` or `GTM-` |
| 10 | Are there any other third-party services not in the codebase? | Ask Alex (CRM, email marketing, Hotjar, Meta Pixel, etc.) |
| 11 | What is the live production URL being used today? | Confirm: `vita-organica.com` or `vitaorganicasupps.com` |

---

## A. Migration Plan Overview

### What is being transferred
This is a static marketing website for Vita Organica built on:
- **Astro v5** (SSG with serverless API route)
- **React** (interactive islands)
- **Sanity CMS** (blog and content)
- **Resend** (transactional email for form submissions)
- **Vercel** (hosting + serverless functions)
- **GitHub** (source code repository)

### Current ownership state
| Service | Currently owned by |
|---|---|
| GitHub repo (`noelsajor/vita-organica`) | Agency personal account |
| Vercel project | Agency personal account |
| Resend account + API key | Agency personal account (`noelsajor@gmail.com`) |
| Sanity project (if agency monorepo) | Agency — **requires special attention** |
| Domain `vita-organica.com` | Unknown — must confirm |
| Domain `vitaorganicasupps.com` | Unknown — must confirm |

### Migration strategy
Perform a **live cutover** — not a rebuild. The goal is to transfer ownership of every service while the site stays online. Zero re-coding required.

---

## B. Step-by-Step Checklist by System

---

### 1. GitHub

**Goal:** Transfer the repository from `noelsajor/vita-organica` to the client's GitHub account without breaking the Vercel deployment.

> ⚠️ **Critical:** Vercel is connected to the GitHub repo. Transferring the repo will break the Vercel → GitHub integration temporarily. Follow the exact order below.

- [ ] 1.1 Client creates a GitHub account (if they don't have one) at github.com
- [ ] 1.2 Client provides their GitHub username to you
- [ ] 1.3 In GitHub → `noelsajor/vita-organica` → Settings → General → scroll to **Danger Zone** → **Transfer**
- [ ] 1.4 Type repo name to confirm → enter client's GitHub username as destination
- [ ] 1.5 GitHub sends the client a transfer invitation — client must accept it
- [ ] 1.6 After acceptance, the repo lives at `github.com/[client-username]/vita-organica`
- [ ] 1.7 Update your local remote: `git remote set-url origin https://github.com/[client-username]/vita-organica.git`
- [ ] 1.8 Verify: `git remote -v` shows the new URL
- [ ] 1.9 Reconnect Vercel to the new repo location (see Vercel section)

---

### 2. Vercel

**Goal:** Move the Vercel project to the client's account with all environment variables and settings intact.

> ⚠️ There is no "transfer project" button in Vercel. The correct path is: export all env vars → client creates their own Vercel account → imports the GitHub repo → re-adds env vars → updates DNS.

**Step A — Export environment variables from your account first**
- [ ] 2.1 In Vercel → vita-organica → Settings → Environment Variables
- [ ] 2.2 Document every key and value in a secure password manager or encrypted file:
  - `SANITY_PROJECT_ID`
  - `SANITY_DATASET`
  - `SANITY_API_VERSION`
  - `SANITY_USE_CDN`
  - `RESEND_API_KEY`
- [ ] 2.3 Note which environments each variable applies to (Production / Preview / Development)

**Step B — Set up client's Vercel account**
- [ ] 2.4 Client creates a Vercel account at vercel.com (recommend using their business email)
- [ ] 2.5 Client connects Vercel to their GitHub account
- [ ] 2.6 Client imports the transferred GitHub repo into their Vercel account:
  - Vercel Dashboard → Add New Project → Import Git Repository → select `vita-organica`
  - Framework: Astro (auto-detected)
  - Build command: `astro build` (auto-detected)
  - Output directory: `.vercel/output` (auto-detected by adapter)
- [ ] 2.7 **Before deploying**, add all environment variables from Step A
- [ ] 2.8 Deploy and verify the preview URL works before touching DNS

**Step C — Migrate custom domain**
- [ ] 2.9 In client's Vercel → vita-organica → Settings → Domains → Add Domain
- [ ] 2.10 Add `vita-organica.com` and `www.vita-organica.com`
- [ ] 2.11 Vercel will show DNS records to add — note these down (see Domain section)
- [ ] 2.12 **Only then** remove the domain from your personal Vercel account
- [ ] 2.13 Delete the project from your personal Vercel account after DNS has propagated

---

### 3. Sanity CMS

**Goal:** Transfer content and project ownership so the client can manage their blog independently.

> ⚠️ **Critical architectural note:** The codebase references a Sanity project via `SANITY_PROJECT_ID`. You must determine whether this is:
> - **Option A:** A dedicated Sanity project created only for Vita Organica → can be transferred directly
> - **Option B:** The agency's shared multi-tenant monorepo → content must be exported and migrated to a new project

**Confirm which option applies before proceeding.**

**If Option A (dedicated project) — Direct transfer:**
- [ ] 3.1 Go to sanity.io → your project → Settings → Members
- [ ] 3.2 Invite the client's email as an **Administrator**
- [ ] 3.3 Client accepts the invitation
- [ ] 3.4 In Sanity → Settings → General → Transfer Project Ownership to client's email
- [ ] 3.5 Remove your own account from the project after transfer
- [ ] 3.6 Client changes the billing plan if needed

**If Option B (agency monorepo) — Export and migrate:**
- [ ] 3.7 Install Sanity CLI: `npm install -g @sanity/cli`
- [ ] 3.8 Log in: `sanity login`
- [ ] 3.9 Export all content:
  ```bash
  sanity dataset export production ./vita-organica-export.tar.gz --project [PROJECT_ID]
  ```
- [ ] 3.10 Client creates a new Sanity account at sanity.io
- [ ] 3.11 Client creates a new project: `sanity init --project vita-organica`
- [ ] 3.12 Client invites you temporarily as admin to complete the import
- [ ] 3.13 Import content into client's project:
  ```bash
  sanity dataset import ./vita-organica-export.tar.gz production --project [CLIENT_PROJECT_ID]
  ```
- [ ] 3.14 Update Vercel environment variables with the new Sanity project ID and dataset
- [ ] 3.15 Trigger a Vercel redeployment to pick up new env vars
- [ ] 3.16 Verify blog posts appear on the live site
- [ ] 3.17 Remove your access from the client's Sanity project

**Sanity Studio (if deployed):**
- [ ] 3.18 Confirm whether the studio is deployed (check for `/studio` route or `studio.vitaorganica.com`)
- [ ] 3.19 If deployed on Vercel, it migrates automatically with the project
- [ ] 3.20 If deployed on Sanity Hosting: sanity.io → project → Settings → Studio → update ownership

---

### 4. Resend

**Goal:** Move email infrastructure so submissions@vitaorganicasupps.com → alex@vitaorganicasupps.com operates under the client's account.

- [ ] 4.1 Client creates a Resend account at resend.com using `alex@vitaorganicasupps.com`
- [ ] 4.2 In client's Resend → Domains → Add Domain → type `vitaorganicasupps.com`
- [ ] 4.3 Resend provides DNS records — add them in the domain registrar (see Domain section):
  - 1x SPF TXT record
  - 1x DKIM CNAME record
  - 1x MX record (only if Resend is handling inbound mail)
- [ ] 4.4 Click Verify in Resend — wait for green status (usually 5–30 minutes)
- [ ] 4.5 In client's Resend → API Keys → Create API Key → name it `vita-organica-prod`
- [ ] 4.6 Copy the new `re_...` key immediately (shown only once)
- [ ] 4.7 Update `RESEND_API_KEY` in the client's Vercel environment variables with the new key
- [ ] 4.8 Trigger a Vercel redeployment
- [ ] 4.9 Submit a test form and verify the email arrives at `alex@vitaorganicasupps.com`
- [ ] 4.10 Remove `vitaorganicasupps.com` domain from your personal Resend account
- [ ] 4.11 Revoke the old API key from your personal Resend account

---

### 5. Domain / DNS

**Goal:** Ensure both domains point to the client's infrastructure with zero downtime.

> ⚠️ DNS changes take 5 minutes to 48 hours to propagate globally. Plan the cutover for low-traffic hours (e.g., Sunday 2am).

**vita-organica.com** (production site domain)
- [ ] 5.1 Confirm registrar for `vita-organica.com`
- [ ] 5.2 If registered under your personal account — transfer registrar to client or update contact info
- [ ] 5.3 In DNS settings, update the A record / CNAME to point to client's Vercel project:
  - Vercel provides exact records under Settings → Domains
  - Typically: `A 76.76.21.21` and `CNAME www → cname.vercel-dns.com`
- [ ] 5.4 Verify propagation: `dig vita-organica.com` should return Vercel's IP

**vitaorganicasupps.com** (email domain)
- [ ] 5.5 Confirm registrar for `vitaorganicasupps.com`
- [ ] 5.6 Add Resend DNS records (from step 4.3) in the registrar's DNS panel
- [ ] 5.7 Verify Resend domain status shows green

**Pre-cutover safety check:**
- [ ] 5.8 Run `curl -I https://vita-organica.com` — confirm it returns `200` from client's Vercel before removing old deployment
- [ ] 5.9 Test all form submissions after DNS switch

---

### 6. Environment Variables

**Goal:** Every secret moves from your Vercel account to the client's with no values lost.

Complete inventory of all required variables:

| Variable | Where used | Sensitive |
|---|---|---|
| `SANITY_PROJECT_ID` | Sanity client config | No |
| `SANITY_DATASET` | Sanity client config | No |
| `SANITY_API_VERSION` | Sanity client config | No |
| `SANITY_USE_CDN` | Sanity client config | No |
| `RESEND_API_KEY` | `/api/contact` email endpoint | **YES — rotate after transfer** |

- [ ] 6.1 Export all values from your Vercel account (Settings → Environment Variables)
- [ ] 6.2 Store them in an encrypted handoff method (1Password share, encrypted email, etc. — NOT plain text Slack/email)
- [ ] 6.3 Add all variables to client's Vercel project before first deployment
- [ ] 6.4 After Resend migration is complete, generate a NEW `RESEND_API_KEY` on the client's account and replace it
- [ ] 6.5 Revoke the old key from your personal Resend account
- [ ] 6.6 Add variables to client's local `.env` file for development

---

### 7. Webhooks

**Goal:** Sanity → Vercel rebuild webhook fires correctly on the client's infrastructure.

- [ ] 7.1 In client's Vercel → vita-organica → Settings → Git → Deploy Hooks
- [ ] 7.2 Create a hook named "Sanity Content Publish" targeting branch `main`
- [ ] 7.3 Copy the generated hook URL
- [ ] 7.4 In Sanity → project → Settings → API → Webhooks
- [ ] 7.5 Delete the old webhook pointing to your Vercel project
- [ ] 7.6 Create a new webhook with the client's Vercel hook URL:
  - Trigger on: Create, Update, Delete
  - Filter: `_type == "post"`
  - Dataset: `production`
- [ ] 7.7 Test by publishing a draft post in Sanity — Vercel should show a new deployment

---

### 8. Forms & Email Delivery

- [ ] 8.1 After full migration, submit each form type on the live site:
  - Quote request form (`/request-quote`)
  - Guide download form (home page)
  - Mockup export (manufacturing pages)
- [ ] 8.2 Verify all three trigger emails to `alex@vitaorganicasupps.com`
- [ ] 8.3 Verify the FROM address shows `submissions@vitaorganicasupps.com`
- [ ] 8.4 Check Resend → Logs for delivery confirmation
- [ ] 8.5 Test honeypot: manually set `b_name` field and confirm no email is sent

---

### 9. Blog Content

- [ ] 9.1 Log into Sanity Studio and verify all blog posts are visible and published
- [ ] 9.2 Visit `/blog` on the live site and confirm posts render
- [ ] 9.3 Open 2–3 individual blog posts and verify images, formatting, and read time appear correctly
- [ ] 9.4 After Sanity transfer, publish a test post to confirm the rebuild webhook triggers correctly

---

### 10. SEO

- [ ] 10.1 Verify `astro.config.mjs` → `site` property matches the live production domain exactly
- [ ] 10.2 Confirm `/sitemap-index.xml` is accessible and lists all pages
- [ ] 10.3 Submit the sitemap to Google Search Console under the client's account
- [ ] 10.4 Verify canonical tags on all pages point to the correct domain
- [ ] 10.5 Check `public/robots.txt` — ensure it does not block indexing
- [ ] 10.6 Verify the `/contract-manufacturing` → `/manufacturing` redirect still works after migration (defined in `vercel.json`)

---

## C. Dependency Map

```
GitHub (source of truth)
    └── Vercel (CI/CD + hosting + serverless)
            ├── /api/contact (serverless function)
            │       └── Resend API
            │               └── vitaorganicasupps.com (DNS — Resend domain verification)
            │                       └── alex@vitaorganicasupps.com (delivery destination)
            ├── Environment Variables
            │       ├── SANITY_PROJECT_ID + SANITY_DATASET
            │       └── RESEND_API_KEY
            └── vita-organica.com (DNS → Vercel)

Sanity CMS
    └── GROQ API → Vercel build (static pages)
    └── Sanity Studio (content editors)
    └── Webhook → Vercel Deploy Hook (on publish)
```

**Key insight:** Vercel is the single point of failure. If Vercel goes down, the site AND email go down. The GitHub repo is the safe fallback — the site can be rebuilt on any Astro-compatible host.

---

## D. Risk Assessment

### Downtime risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| DNS propagation gap between old and new Vercel | Medium | Site unreachable for up to 48h | Keep old Vercel project live until new DNS fully propagates and is confirmed |
| New Vercel project missing env vars | High | Build fails or API errors | Export all vars before starting; double-check before first deploy |
| GitHub transfer breaks Vercel webhook | High | Deployments stop | Immediately reconnect GitHub in client's Vercel after transfer |

### Content loss risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Sanity export incomplete | Low | Blog posts missing | Run export, verify file size, do a dry-run import in a test dataset first |
| Sanity images missing after migration | Medium | Broken images | Sanity CDN images are tied to project ID — re-upload if migrating to a new project |

### DNS risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Old DNS TTL too high causing slow propagation | Medium | Long cutover window | Lower TTL to 300s (5 min) at least 24h before migration |
| Wrong DNS records for Vercel | Low | Site offline | Copy exact records from Vercel dashboard; do not guess |

### Environment variable risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| RESEND_API_KEY not added before deploy | High | Form emails silently fail | Strict checklist — add vars before first deployment |
| Old API key revoked before new one is active | Medium | Email outage | Create new key first, verify it works, then revoke old key |

### Email delivery risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Resend domain not verified | High | All emails fail | Complete domain verification before going live with client's account |
| SPF/DKIM records conflict with existing email setup | Medium | Emails bounce or land in spam | Audit existing DNS records before adding Resend records |

### CMS migration risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Agency monorepo — other clients' data exposed | High | Data breach | Never give client access to the monorepo; always migrate to a dedicated project |
| Sanity API token not updated after migration | High | Blog breaks | Update `SANITY_PROJECT_ID` env var and redeploy immediately after migration |

---

## E. Execution Order (Minimizes Downtime)

Execute in this exact sequence:

```
1. Lower DNS TTL to 300s (do this 24h early)
2. Export Sanity content
3. Client creates: GitHub, Vercel, Resend, Sanity accounts
4. Transfer GitHub repo → client accepts
5. Client imports repo into their Vercel (DO NOT deploy yet)
6. Add all environment variables to client's Vercel
7. Deploy to client's Vercel — verify on preview URL
8. Set up Resend on client's account + verify domain DNS
9. Generate new RESEND_API_KEY on client's account → update Vercel env var → redeploy
10. Add vita-organica.com to client's Vercel project
11. Update DNS records at registrar to point to client's Vercel
12. Wait for DNS propagation — verify with `dig vita-organica.com`
13. Test all forms end-to-end on live URL
14. Set up Sanity rebuild webhook pointing to client's Vercel
15. Revoke old RESEND_API_KEY from your account
16. Remove domain from your Vercel account
17. Delete project from your personal Vercel account
18. Remove yourself from Sanity project
```

---

## F. Rollback Plan

If anything fails during migration, revert in this order:

**If DNS is wrong → site is down:**
1. Restore old DNS records (pointing to your Vercel) at the registrar
2. Wait for propagation (up to TTL, should be 5 min if you lowered it)
3. Site is back on your infrastructure

**If Vercel deploy fails on client's account:**
1. Your old Vercel project is still live — do not delete it until new one is confirmed working
2. Fix the issue (usually missing env var) and redeploy on client's account
3. Only cut DNS after successful deployment is confirmed

**If Sanity migration breaks blog:**
1. The export `.tar.gz` is your backup — it can be re-imported at any time
2. Restore the old `SANITY_PROJECT_ID` env var in Vercel to roll back to your project temporarily
3. Redeploy to restore blog

**If email stops working:**
1. Temporarily change `FROM` in `src/pages/api/contact.ts` back to `onboarding@resend.dev`
2. Change `RESEND_API_KEY` env var back to the old key from your account
3. This restores email while you fix the domain verification issue

---

## G. Final Client Acceptance Checklist

Send this to the client (Alex) to sign off after migration:

```
VITA ORGANICA — POST-MIGRATION ACCEPTANCE CHECKLIST

Please verify each item and confirm:

SITE
[ ] Home page loads correctly at vita-organica.com
[ ] All manufacturing pages load (gummies, capsules, powders, soft gels, sachets, gel)
[ ] Blog page loads and posts are visible
[ ] Individual blog posts open and display correctly
[ ] Mockup tool works on manufacturing pages
[ ] 404 page displays correctly for unknown URLs
[ ] /contract-manufacturing redirects to /manufacturing

FORMS & EMAIL
[ ] Quote request form submits and you receive email at alex@vitaorganicasupps.com
[ ] Guide download form submits and you receive email
[ ] Mockup export form submits and you receive email
[ ] Email FROM address shows submissions@vitaorganicasupps.com

CONTENT MANAGEMENT
[ ] You can log into Sanity Studio
[ ] You can see and edit blog posts
[ ] Publishing a post triggers a site rebuild

INFRASTRUCTURE OWNERSHIP
[ ] GitHub repo is under your account
[ ] Vercel project is under your account
[ ] Resend account is under your email
[ ] Sanity project is under your account
[ ] vita-organica.com domain is registered/controlled by you
[ ] vitaorganicasupps.com domain is registered/controlled by you

SECURITY
[ ] Agency personal accounts have been removed from all services
[ ] Old API keys have been revoked
[ ] You have stored your RESEND_API_KEY securely

Client signature: _______________________  Date: ____________
```

---

## H. Commands, Scripts & Configuration

### GitHub — Transfer repository
```bash
# After transfer is accepted by client, update your local remote
git remote set-url origin https://github.com/[CLIENT_GITHUB_USERNAME]/vita-organica.git

# Verify
git remote -v

# Push to confirm access
git push origin main
```

### Vercel — Export environment variables (manual — Vercel has no CLI export for secrets)
```bash
# Install Vercel CLI
npm install -g vercel

# Log in to your account
vercel login

# List env vars (values hidden — copy from dashboard manually)
vercel env ls --project vita-organica
```

### Sanity — Export content
```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Log in
sanity login

# Export dataset (replace PROJECT_ID with actual value from env vars)
sanity dataset export production ./vita-organica-backup-$(date +%Y%m%d).tar.gz \
  --project [PROJECT_ID]

# Verify the export file exists and has content
ls -lh vita-organica-backup-*.tar.gz
```

### Sanity — Import content to client's new project
```bash
# From inside the project directory, pointed at client's new project
sanity dataset import ./vita-organica-backup-[DATE].tar.gz production \
  --project [CLIENT_PROJECT_ID] \
  --missing  # only imports documents not already present
```

### DNS — Lower TTL before migration (do 24h early)
In your domain registrar DNS panel, find all records for `vita-organica.com` and change TTL to `300` (5 minutes). This makes the DNS cutover faster when you switch.

### DNS — Vercel records to add at registrar
```
# Add these in your domain registrar for vita-organica.com:
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```
*(Verify these exact values in Vercel → Settings → Domains — they may vary)*

### DNS — Resend records to add at registrar for vitaorganicasupps.com
```
# Resend provides these — copy from Resend → Domains → vitaorganicasupps.com
# They will look similar to:
Type    Name                      Value
TXT     @                         v=spf1 include:amazonses.com ~all
CNAME   resend._domainkey         [resend-provided-value].dkim.resend.com
```

### Verify DNS propagation
```bash
# Check A record for vita-organica.com
dig A vita-organica.com +short

# Should return Vercel's IP: 76.76.21.21

# Check Resend DKIM
dig CNAME resend._domainkey.vitaorganicasupps.com +short

# Check from multiple global locations
curl https://dnschecker.org/api/dns/vita-organica.com/A
```

### Verify site after cutover
```bash
# Check response code and server header
curl -I https://vita-organica.com

# Should return:
# HTTP/2 200
# server: Vercel

# Test the API endpoint directly
curl -X POST https://vita-organica.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"type":"quote","name":"Test","email":"test@test.com","company":"Test Co","format":"gummies","timeline":"immediate"}'

# Should return:
# {"success":true}
```

### Rotate RESEND_API_KEY after migration
```bash
# In client's Vercel project, update the key:
vercel env rm RESEND_API_KEY production
vercel env add RESEND_API_KEY production
# Paste new key when prompted

# Trigger redeploy
vercel --prod
```

---

*This document should be stored securely and deleted from any shared channels after the migration is complete. It contains architectural details that should not be publicly accessible.*
