# ANVIC — Company Website

Commercial website for **ANVIC** — *Recovering, preserving, and protecting valuable personal and business data.*
ANVIC is a subsidiary of **Pynek Technologies Private Limited**.

## Site structure

| Page | Purpose |
|---|---|
| `index.html` | Home — hero, solutions marquee, auto-rotating solutions carousel, three pillars, process, trust signals |
| `data-recovery.html` | Hub — Logical / Firmware / Physical recovery + CCTV and NVMe overviews + FAQ, linking to the detail pages below |
| `logical-recovery.html` | Service — deleted, formatted, corrupted file systems, lost partitions |
| `firmware-recovery.html` | Service — service-area repair, translator rebuilds, 0 GB / busy drives |
| `physical-recovery.html` | Service — head swaps, motor seizure, PCB repair, donor matching |
| `encryption.html` | Service — encrypted volume recovery (with keys) + encryption deployment |
| `cctv-recovery.html` | Product — DVR/NVR footage reconstruction, evidence-grade packages |
| `ssd-recovery-tool.html` | Product — bench imaging toolkit for unstable SATA/NVMe SSDs |
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
