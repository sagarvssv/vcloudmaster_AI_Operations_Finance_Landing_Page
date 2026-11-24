# Agentic AI for Finance & Operations: Landing Page

Event registration landing page for VCloudMaster. Built with React 19, Vite, Tailwind CSS v4, Motion and lucide-react. Includes English and Arabic (RTL).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the build
```

Add `?lang=ar` to the URL to open the Arabic version directly.

## Where to edit

| What | File |
| --- | --- |
| Event dates and venue | `src/landing/config.js` (`EVENT_DETAILS`) |
| All page copy (EN + AR) | `src/landing/content.js` |
| Brand colours and fonts | `src/index.css` (`@theme` block) |
| Logo | `src/landing/assets/vcloudmaster-logo.png` |

## Registration form

Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to the URL that should receive registrations (your API, CRM webhook, or a form service). The form sends a `POST` with this JSON body:

```json
{
  "fullName": "", "email": "", "company": "", "jobTitle": "",
  "event": "both | dubai | online",
  "language": "en | ar",
  "source": "agentic-ai-finance-operations-landing",
  "pageUrl": "", "submittedAt": "ISO date"
}
```

Any 2xx response shows the success state. If `VITE_FORM_ENDPOINT` is empty, the form only simulates a submit and logs the payload to the console, so set it before going live.

On success, the form also pushes `agentic_ai_registration` to `window.dataLayer` (GTM) and fires a Meta Pixel `Lead` event, when those scripts are present on the page (they already are on vcloudmaster.com).

## Adding it to the main website

The main site at vcloudmaster.com is also React + Vite + Tailwind, so the page is self-contained in `src/landing/`.

**Option A: as a route in the existing site (recommended)**

1. Copy `src/landing/` into the website's `src/` folder.
2. Install the two extra libraries: `npm install motion lucide-react`.
3. Copy the `@theme` block, the `:root[dir="rtl"]` block and the `@utility` / `@keyframes` rules from `src/index.css` into the site's main CSS file (Tailwind v4).
4. Add the Outfit, Inter and IBM Plex Sans Arabic `<link>` from `index.html` to the site's `index.html`.
5. Add a route, for example with react-router:

   ```jsx
   import AgenticAILanding from './landing/AgenticAILanding';
   <Route path="/agentic-ai" element={<AgenticAILanding />} />
   ```

   The page renders its own header and footer, so render this route outside the site's normal layout wrapper.

**Option B: deploy separately under a sub-path**

```bash
VITE_BASE=/agentic-ai/ npm run build
```

Upload `dist/` to `/agentic-ai/` on your host, or point a subdomain such as `events.vcloudmaster.com` at it (no `VITE_BASE` needed then).

## Before launch

- Replace `[EVENT DATE]`, `[VENUE, DUBAI]` and `[WEBINAR DATE AND TIME]` in `src/landing/config.js`.
- Set `VITE_FORM_ENDPOINT`.
- Have a native speaker review the Arabic copy in `src/landing/content.js`.
- Have the team confirm the "Where agentic AI fits" use cases and the AWS services listed for each (`useCases` in `src/landing/content.js`). This section is not in the original brief.
