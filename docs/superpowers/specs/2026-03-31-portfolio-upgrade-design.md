# Portfolio Upgrade Design — Kevin Bedon
Date: 2026-03-31

## Summary
Full visual and technical upgrade of Kevin's React portfolio. Goal: visually memorable, 3D effects, professional structure, SEO-ready.

## Approach
Refactor + visual upgrade (Option B): reorganize folder structure, install Three.js + Framer Motion, new fonts, SEO.

## Stack Changes
- Add: `three @react-three/fiber @react-three/drei`
- Add: `framer-motion`
- Add: `react-helmet-async`
- Fonts: Clash Display (titles), Satoshi (body), JetBrains Mono (mono) via Fontshare/Google

## Folder Structure
```
src/
├── components/
│   ├── Hero/         ← Three.js particle text "KEVIN"
│   ├── About/
│   ├── Experience/
│   ├── Skills/       ← renamed from Tooling
│   ├── Projects/
│   ├── Education/
│   ├── Contact/
│   └── ui/           ← SectionTitle, cursor
├── hooks/            ← useParticles, useScrollAnimation
├── assets/
├── i18n/             ← locales moved here
└── App.jsx
```

## Visual Design
- **Hero**: Three.js particle text — particles form "KEVIN" in white with subtle glow, react to mouse
- **Animations**: Framer Motion scroll-triggered reveals on every section (fade-up, stagger)
- **Fonts**: Clash Display for H1/H2, Satoshi for body — loaded via @font-face from Fontshare CDN
- **Colors**: Background `#0a0a0a`, accent purple `#8A2BE2`, cursor cyan `#22D3EE` (unchanged)
- **Grain overlay**: subtle noise texture on body to avoid "generic AI" look

## SEO
- react-helmet-async with Open Graph tags
- Custom favicon (K monogram)
- robots.txt + sitemap hint in index.html

## Existing Features to Preserve
- i18next ES/EN translations (all keys intact)
- All 9 project cards with links
- Experience accordion (5 jobs)
- Custom cursor (cyan)
- Mobile-first responsive layout

## Out of Scope
- Backend/form functionality
- Blog section
- Analytics
- Dark/light toggle
