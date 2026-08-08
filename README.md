# ANVIC — Company Website

Commercial website for **ANVIC** — *Recovering, preserving, and protecting valuable personal and business data.*

## Site structure

| Page | Purpose |
|---|---|
| `index.html` | Home — three service pillars, featured solutions, process, trust signals |
| `data-recovery.html` | Logical / Firmware / Physical recovery + CCTV and NVMe specialist programs + FAQ |
| `data-preserve.html` | Home cloud (NAS) setup, 3-2-1 backup strategy (services/solutions only) |
| `data-security.html` | Encryption services, key management, secure erasure (services/solutions only) |
| `products.html` | All products — storage catalogue (`#storage`) and encrypted hardware (`#security`) |
| `about.html` | Company story, principles, audiences |
| `contact.html` | Enquiry form + emergency data-loss guidance |
| `404.html` | Not-found page (served automatically by GitHub Pages) |

## Tech

- Pure static HTML/CSS/JS — no build step, no framework, no dependencies beyond Google Fonts.
- Shared stylesheet: `assets/css/style.css` (design tokens in `:root`).
- Shared script: `assets/js/main.js` (mobile nav, scroll reveal, FAQ accordion, active-link highlight).
- All links are relative, so the site works at a domain root **or** under a project-pages subpath.
- Responsive (mobile nav below 720px) and respects `prefers-reduced-motion`.

## Deployment (GitHub Pages)

Repo → Settings → Pages → deploy from branch, root folder. To use a custom
domain, add a `CNAME` file containing the domain name.

## Things to customize

- **Contact form**: posts via [formsubmit.co](https://formsubmit.co) to `kartheek.s93@gmail.com`.
  The first submission triggers a confirmation email from FormSubmit that must be
  approved once. Swap the address in `contact.html` (form `action` + footer links)
  when a business email exists.
- **Phone / address**: not shown yet — add to `contact.html` and the footer when available.
- **Brand colors**: edit the CSS variables at the top of `assets/css/style.css`.
