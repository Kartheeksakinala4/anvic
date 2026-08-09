# ANVIC — Company Website

Commercial website for **ANVIC** — *Recovering, preserving, and protecting valuable personal and business data.*
ANVIC is a subsidiary of **Pynek Technologies Private Limited**.

## Site structure

Three pillars, each with **Services** and **Products** in its nav dropdown, and a
dedicated page per sub-item. There is no separate Products tab — products live
under the pillar they belong to.

| Page | Purpose |
|---|---|
| `index.html` | Home — hero, solutions marquee, auto-rotating carousel, three pillars, process |
| **Data Recovery** | |
| `data-recovery.html` | Pillar hub — failure classes, specialist programs, FAQ |
| `logical-recovery.html` | Service — deleted, formatted, corrupted file systems |
| `firmware-recovery.html` | Service — service-area repair, translator rebuilds |
| `physical-recovery.html` | Service — head swaps, PCB repair, donor matching |
| `encryption.html` | Service — encrypted volume recovery (with your keys) |
| `cctv-recovery.html` | Product — DVR/NVR footage reconstruction packages |
| `ssd-recovery-tool.html` | Product — bench imaging toolkit for SATA/NVMe SSDs |
| **Data Preserve** | |
| `data-preserve.html` | Pillar hub — home cloud, 3-2-1 principle, product summary |
| `home-cloud-setup.html` | Service — private NAS cloud, deployment and handover |
| `backup-strategy.html` | Service — 3-2-1 design, off-site copies, restore testing |
| `managed-care.html` | Service — monitoring, updates, backup verification |
| `nas-systems.html` | Product — Synology, QNAP, TrueNAS systems |
| `storage-drives.html` | Product — NAS/enterprise HDDs, SSDs, externals, cards |
| `power-protection.html` | Product — UPS and surge protection |
| **Data Security** | |
| `data-security.html` | Pillar hub — encryption services, erasure, product summary |
| `disk-encryption.html` | Service — BitLocker/FileVault/LUKS rollout, key escrow |
| `secure-erasure.html` | Service — NIST 800-88 sanitisation, certificates |
| `security-review.html` | Service — exposure assessment and roadmap |
| `encrypted-drives.html` | Product — hardware-encrypted portable drives |
| `encrypted-usb.html` | Product — FIPS-validated keypad USB drives |
| `self-encrypting-ssd.html` | Product — SED/OPAL internal SSDs |
| **Company** | |
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
