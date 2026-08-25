# Momento

Hand-finished digital cards for anniversaries, proposals, first dates and everything in between.

A static site — plain HTML, CSS and JavaScript. No build step, no dependencies, no backend.

## Pages

| File | What it is |
|---|---|
| `index.html` | Landing page — hero, how it works, the craft, live preview, contact |
| `gallery.html` | Card designs, filterable by occasion (`?o=anniversary`, `?o=proposal`, …) |
| `preview.html` | Single design preview (`?t=<slug>`) |
| `order.html` | Order form (`?t=<slug>`), submits to WhatsApp |
| `app.js` | All behaviour — templates, gallery, preview, order flow |
| `styles.css` | All styling |

## Run locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

Any static server works — the site does not require one, but opening the files
directly over `file://` breaks the `?query` links between pages.

## Deploy

Hosted on Vercel. There is no build: Vercel serves the repo root as-is
(`vercel.json` says so explicitly). Pushing to `main` redeploys.

```sh
npx vercel --prod   # or import the repo at vercel.com/new
```

## Before going live

The config block at the top of `app.js` (lines 6–13) is still all placeholders —
the order form and every contact link are dead until these are filled in:

| Constant | What it needs |
|---|---|
| `ORDER_ENDPOINT` | Formspree/Getform URL. Empty = local thank-you screen only, orders go nowhere |
| `WHATSAPP` | Digits only, no `+` (e.g. `8801712345678`). Empty = the order button opens a broken `wa.me` link |
| `EMAIL` | Contact address |
| `PHONE` | Display form (e.g. `+880 1712 345678`) |
| `INSTAGRAM`, `FACEBOOK`, `TIKTOK` | Handles without `@` |

## Editing card designs

Card templates live in the `TEMPLATES` array in `app.js` (from line 40). Each entry
needs a `slug`, `name`, occasion tag and its markup. Add an entry and it appears in
the gallery, preview and order flow automatically. Occasion tags come from the
`OCCASIONS` map just above it. Prices render through `CURRENCY` / `fmtPrice` — currently BDT.
