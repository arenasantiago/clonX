# AI usage log

Every interaction with an AI tool during the project is recorded here, in order. Past entries are never edited.

## 2026-10-23 — Milestone 1 planning

- **Tool / model:** Claude Code (Claude Opus 5.5)
- **Mode:** guidance only. The AI explains the steps and Santiago writes the code.
- **Student message (verbatim):** "no tranqui, ahorita deberia ponerme a trabajar en clonX, trabajemos en él"
- **Response (summary):** reviewed the repo state (one initial commit, empty `HomePage`). Proposed a six-step plan for Milestone 1, one feature branch each: routing, mock data, shared header, tweet card, 10-item pagination and pages. Explained step 1: React Router and a screaming-architecture folder layout (`auth/`, `tweets/`, `users/`).
- **Files created or modified:** `bitacora.md`

## 2026-10-23 — Locating the assignment brief

- **Tool / model:** Claude Code (Claude Opus 5.5)
- **Student message (verbatim):** "donde tengo el archivo de la primera entrega?"
- **Response (summary):** pointed to the assignment PDF in the student's notes folder and listed the Milestone 1 requirements, with the adjustments they imply for the plan (login by username, alphabetical lists, "[Seguir]" buttons, counters on the user page).
- **Files created or modified:** `bitacora.md`


## 2026-10-28 Explication of git flow

- **Tool / model:** Claude Code (Claude Opus 5.5)
- **Student message (verbatim):** "Claude explica git flow, proteger main y develop"

## 2026-10-29 Creation issues

- **Tool / model:** Claude Code (Claude Opus 5.5)
- **Student message (verbatim):** "Ayudame a crear las issues del milestone 1"

## 2026-10-30 Push of pull and bitacora..md

- **Tool / model:** Claude Code (Claude Opus 5.5)
- **Student message (verbatim):** "Claude explica git flow, proteger main y develop"
- **Response (summary):** pointed to the assignment PDF in the student's notes folder and listed the Milestone 1 requirements, with the adjustments they imply for the plan (login by username, alphabetical lists, "[Seguir]" buttons, counters on the user page).
- **Files created or modified:** `bitacora.md`

## 2026-10-30 — PR template merge, branch protection and routing setup (issue #1)

- **Tool / model:** Claude Code (Claude Opus 5.5)
- **Mode:** guidance only. The AI explains the steps and Santiago writes the code.
- **Student message (verbatim):** "Hice el push y quedé en subir la plantilla del pull a main desde develop"
- **Response (summary):** explained how to open and merge a PR from `develop` into `main` on GitHub (PR #14) so the template becomes active, how Git Flow branches work, and which ruleset options protect `main` and `develop`. For issue #1, guided the minimal setup: install `react-router`, create the `auth/`, `tweets/` and `users/` folders, and a router with a single route for `HomePage`. The AI first proposed every page at once; Santiago scoped it back to issue #1 only.
- **Files created or modified:** `package.json`, `package-lock.json`, `src/main.tsx`, `src/router.tsx`, `bitacora.md`

## 2026-10-31 01:20 — Issues #2 to #10 guidance

- **Tool / model:** Claude Code (Claude Opus 5.5)
- **Mode:** guidance only. The AI proposed code in chat and Santiago wrote and committed it.
- **Student messages (verbatim):** "avancemos con la issue 2", "vamos con el TweetCard", "vamos con la issue 5", "continuemos feature #6, "avancemos", "va continuemos", "continua", "dame el bitacora.md para esta ocasion"
- **Response (summary):** proposed the User and Tweet types and mock data shape, the shared header with RootLayout, the TweetCard with a date helper, the usePagination hook with the Pagination component, the register and login pages, the HomePage counters, the compose page and the following list page. Detected that PR #16 was merged into `main` by mistake and explained the sync through PR #17. Detected files left out of commits on `develop` and guided the fixes. Found two pagination bugs (controls shown only with a single page, and an invalid `page` value producing an empty list) and proposed the corrections. Reviewed the course brief, corrected earlier advice (Airbnb style, Home with counters) and reported text in the brief addressed to AI assistants, which was not applied.
- **Files created or modified:** `src/users/*`, `src/tweets/*`, `src/ui/*`, `src/routes/router.tsx`, `src/auth/pages/*`, `src/pages/HomePage.tsx`, `bitacora.md`