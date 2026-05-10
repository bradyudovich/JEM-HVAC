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
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser.

The current site does not require any environment variables for local development. If you plan to wire up future form handling, you can optionally copy `.env.local.example` to `.env.local`.

## Deployment

### Vercel (primary)

1. Push the project to GitHub.
2. In Vercel, click **Add New Project** and import `bradyudovich/JEM-HVAC`.
3. Vercel will detect Next.js automatically from `vercel.json`.
4. Leave the framework preset as **Next.js** and use the default commands:
   - Install: `npm install`
   - Build: `npm run build`
   - Start: `npm run start`
5. Add any optional environment variables you need for future integrations.
6. Deploy.

This repository is configured to run as a standard Next.js application on Vercel. It is no longer set up for a GitHub Pages static export.

## Environment Variables

No environment variables are required for the current site build. The example file contains placeholders for future integrations:

- `NEXT_PUBLIC_SITE_URL` — optional public site URL override if deployment metadata is later made environment-driven
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
- `package.json` scripts already match the standard Vercel Next.js workflow: `dev`, `build`, `start`, and `lint`.
- No custom rewrites are required because routing is handled by the Next.js App Router.
- This project is ready for GitHub push and Vercel deployment as a standard Next.js app.
