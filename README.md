# Morgan Muraya — Portfolio

Personal portfolio site for Morgan Muraya — full-stack developer, healthcare IT support specialist, and technical writer.

Live site: https://morgan125.vercel.app/

## What's here

- Hero, About, Services, Experience, Process, Projects, Skills, and Contact sections
- Light/dark theme toggle (persisted to `localStorage`)
- Project case studies driven from `src/data/portfolioData.js`

## Stack

- React 19 + Vite
- Plain CSS with CSS custom properties for theming (no framework)

## Running locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to /dist
npm run lint     # run ESLint
```

## Updating content

Bio, skills, experience, services, and project entries all live in `src/data/portfolioData.js`. To add or edit a project, add an object to the `projects` array there — no admin UI is needed, since this is a static site and any content shown must be committed to the repo to be visible to visitors.

## To do

- [ ] Add real employment dates to `experience` entries
- [ ] Add a downloadable resume PDF to `public/resume.pdf`
- [ ] Add source/case-study links for the featured project
- [ ] Add 1–2 more real projects
