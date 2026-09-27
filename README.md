# Nurse Apa — Static Site

A fast, SEO-friendly bilingual (English / বাংলা) static website for Nurse Apa Agency — home nursing services in Dhaka.

## Pages

- `index.html` — Home (hero, services overview, why-us, how-it-works, CTA)
- `services.html` — Detailed list of all 9 services
- `about.html` — Story + values
- `contact.html` — Call, Facebook, email, request form
- `404.html` — Friendly not-found page

## Features

- Fully static (no backend). Contact form opens the user's mail client via `mailto:`.
- Bilingual EN ↔ BN via `data-i18n` dictionary in `assets/js/main.js`. Language persists in `localStorage`.
- SEO: unique `<title>`, `<meta description>`, canonical, Open Graph, Twitter card, hreflang, JSON-LD `MedicalBusiness` & `ItemList`, semantic HTML.
- Performance: system fonts (Inter + Hind Siliguri via Google Fonts), no JS framework, responsive `<picture>` cards with 240px/480px sources.
- Mobile-first responsive layout, sticky header, floating call button (pulses on mobile).
- Accessibility: skip-friendly nav, ARIA labels, `prefers-reduced-motion` support, focus rings, contrast checked.

## Service card images

Each service uses a real-world photo downloaded from [Unsplash](https://unsplash.com) (free license — please attribute the photographers on your site if you keep these photos). To replace any photo, drop a new JPG into `assets/img/` and update `index.html`.

| Service            | File                              |
| ------------------ | --------------------------------- |
| IV injection       | `assets/img/svc-iv-240.jpg`       |
| IM injection       | `assets/img/svc-im-240.jpg`       |
| Routine injection  | `assets/img/svc-routine-240.jpg`  |
| One-time injection | `assets/img/svc-onetime-240.jpg`  |
| IV cannulation     | `assets/img/svc-can-240.jpg`      |
| Foley catheter     | `assets/img/svc-foley-240.jpg`    |
| Ryle / NG tube     | `assets/img/svc-ng-240.jpg`       |
| Wound dressing     | `assets/img/svc-wound-240.jpg`    |
| Blood collection   | `assets/img/svc-blood-240.jpg`    |

## Deploy

Drop the folder on any static host (Netlify, Cloudflare Pages, GitHub Pages, Vercel, cPanel/Apache). Replace `nurseapa.agency` in canonical URLs / `sitemap.xml` / JSON-LD with your real domain.

## Customize

- Phone: search-and-replace `01961-414362` and `+8801961414362`.
- Brand color: edit `--c-primary` in `assets/css/styles.css`.
- Add a service: add a new `<a class="srv-card">` block in `index.html` and a matching `srv.<key>` entry in the EN and BN dictionaries in `assets/js/main.js`.
- Replace a card photo: drop a new JPG into `assets/img/svc-{name}-240.jpg` (and 480px version) and update `index.html`.
