# Morgan Muraya — Portfolio

Personal portfolio site for Morgan Muraya — full-stack developer, healthcare IT support specialist, and technical writer.

Live site: https://morgan125.vercel.app/

## What's here

- Hero, About, Services, Experience, Process, Projects, Skills, and Contact sections
- Light/dark theme toggle (persisted to `localStorage`)
- Scroll-in reveal animations (respects `prefers-reduced-motion`)
- A working contact form (Formspree) alongside direct call/email/WhatsApp links
- Vercel Analytics
- Project case studies driven from `src/data/portfolioData.js`
- SEO basics: real meta/OG/Twitter tags, `sitemap.xml`, `robots.txt`, JSON-LD structured data

## Stack

- React 19 + Vite
- Plain CSS with CSS custom properties for theming (no framework)
- Inter variable font, self-hosted via `@fontsource-variable/inter`

## Running locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to /dist
npm run lint     # run ESLint
```

## Updating content

Bio, skills, experience, services, and project entries all live in `src/data/portfolioData.js`. To add or edit a project, add an object to the `projects` array there — no admin UI is needed, since this is a static site and any content shown must be committed to the repo to be visible to visitors.

## Setup still needed (manual, one-time)

- **Contact form**: create a free form at [formspree.io](https://formspree.io), pointed at `murmorgan125@gmail.com`, then paste the form ID into `FORMSPREE_FORM_ID` in `src/components/ContactForm.jsx`. Until then, the form shows a friendly error instead of silently failing.
- **Analytics**: enable Web Analytics for this project in the Vercel dashboard (Project → Analytics tab). The `<Analytics />` component is already wired in; it just needs to be turned on.
- **Custom domain** (optional): if you buy a domain, connect it in Vercel, then update the hardcoded URLs in `index.html` and `public/sitemap.xml`/`public/robots.txt` to match.

## To do

- [ ] Add real employment dates to `experience` entries
- [ ] Add a downloadable resume PDF to `public/resume.pdf`
- [ ] Add source/case-study links for the featured project
- [ ] Add 1–2 more real projects
- [ ] Add LinkedIn URL (`src/components/Footer.jsx`, marked with a `TODO`)
