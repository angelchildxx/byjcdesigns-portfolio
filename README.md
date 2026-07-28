# byjcdesigns.com — site

A static, no-framework portfolio site modeled on the structure and quiet
typography of buzzusborne.com: intro line → career timeline → bio → selected
work → contact. No build step, no dependencies — just HTML/CSS/JS.

## Files

- `index.html` — the homepage (hero, timeline, bio, selected work, contact)
- `ai.html` — AI-focused work
- `about.html` — background and experience
- `styles.css` — all shared styling (colors, type, layout)
- `script.js` — scroll-reveal animation + active nav highlighting

### Case studies

- `eagle.html` — EAGLE (EOP)
- `eagle-design-system.html` — EAGLE Design System (linked from eagle.html)
- `hsi-duty-calender.html` — HSI Duty Swap Calendar
- `olive.html` — Olive
- `perfect-properties.html` — Perfect Properties
- `ensemble-ai.html` — Ensemble.ai (AI work)
- `siax-yoga.html` — Siax Yoga (AI work)

Each case study follows the same section pattern: Overview, The Problem,
Constraints, Process, Solution, Impact. Images live in `/images` and are
referenced with `<img src="images/yourfile.png" alt="...">`.

To add a new case study, duplicate an existing case study file that's
closest in structure, update its content and images, and add a matching
`project-card` link to it in `index.html` (or `ai.html` for AI work).

## Contact

The footer's "Let's connect on LinkedIn →" link points to
`https://www.linkedin.com/in/jennjchen`. There is currently no email/mailto
link in the footer — update this in each file's `<footer class="contact">`
block if you want to add one back.

## 1. Preview it locally

No build tools needed. From this folder, run:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser. (Opening `index.html`
directly by double-clicking also works, but a local server avoids some
font-loading edge cases.)

## 2. Deploy it

Easiest free options, in order of simplicity:

**Netlify Drop** — go to https://app.netlify.com/drop and drag this folder
in. You get a live URL in seconds; add your custom domain after.

**Vercel** — push this folder to a GitHub repo, then import it at
https://vercel.com/new. Auto-deploys on every git push.

**GitHub Pages** — push to a GitHub repo, then in the repo's Settings →
Pages, set the source to your main branch. Free, but no auto build step
(fine here since there isn't one).

## 3. Point byjcdesigns.com at the new host

Your domain is currently pointed at Readymag. Once your new site is live
on Netlify/Vercel/GitHub Pages:

1. In your domain registrar's dashboard (wherever byjcdesigns.com is
   registered — check Readymag's domain settings if unsure whether it's
   registered there or elsewhere), find the DNS settings.
2. Replace the existing A/CNAME records pointing to Readymag with the
   records your new host gives you (each host shows exact instructions
   once you add the custom domain in their dashboard).
3. DNS changes can take a few hours to propagate. Keep Readymag active
   until you've confirmed byjcdesigns.com loads the new site correctly.
4. Only then cancel the Readymag subscription.

## 4. Before you consider it done

- Test on mobile — resize your browser or check on your phone.
- Check every project card link actually goes to a real case study page.
- Run it past a friend for 30 seconds and ask what they think you do —
  that's the same test a recruiter is running.
