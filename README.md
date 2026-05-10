# JEM Heating & Air Conditioning

A Next.js website for JEM Heating & Air Conditioning, prepared for local development and zero-config deployment on Vercel.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/bradyudovich/JEM-HVAC.git
   cd JEM-HVAC
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables and fill them in as needed:
   ```bash
   cp .env.local.example .env.local
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser.

## Deployment

### GitHub Pages (configured in-repo)

This repo now includes a Pages workflow at `.github/workflows/deploy-pages.yml` that builds and deploys the Next.js site artifact from `main`.

1. In **GitHub → Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to `main` (or trigger the workflow manually from Actions).
3. The workflow builds the Next.js app and deploys the exported `out/` directory.

### Vercel (optional alternative)

1. Push the project to GitHub.
2. In Vercel, click **Add New Project** and import `bradyudovich/JEM-HVAC`.
3. Vercel will detect Next.js automatically.
4. Add the required environment variables in the Vercel project settings.
5. Deploy.

## Environment Variables

Create a `.env.local` file locally and configure the same values in Vercel:

- `NEXT_PUBLIC_SITE_URL` — public site URL for canonical links and client-side references
- `CONTACT_FORM_EMAIL` — destination email address for future contact form wiring
- `RESEND_API_KEY` — API key for Resend if email sending is implemented
- `FORMSPREE_ENDPOINT` — optional alternative to Resend for form submissions

## Page Structure Overview

Current repository structure indicates an App Router setup with the following top-level app areas:

- `app/` — application routes, layouts, and pages
- `public/` — static assets
- `tailwind.config.ts` — Tailwind configuration

Add or expand route segments inside `app/` as the site grows, such as:

- `/` — homepage
- `/services` — HVAC services overview
- `/about` — company information
- `/contact` — contact page and future form integration

## Notes

- `vercel.json` is configured with the Next.js framework preset.
- No custom rewrites are required because routing is handled by the Next.js App Router.
- This project is ready for GitHub push and Vercel deployment.
