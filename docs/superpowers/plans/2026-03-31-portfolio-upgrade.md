# Portfolio Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Kevin's portfolio with Three.js particle text hero, Framer Motion scroll animations, premium fonts (Clash Display + Satoshi), grain texture, and SEO meta tags.

**Architecture:** Keep existing component structure flat (no subfolder refactor except Hero/). Create Hero/ParticleText.jsx with pure Three.js (no R3F), a reusable AnimatedSection wrapper for scroll reveals, and a SEO component using react-helmet-async.

**Tech Stack:** Three.js (particle text), Framer Motion (scroll animations), react-helmet-async (SEO), Clash Display + Satoshi (Fontshare CDN), JetBrains Mono (Google Fonts)

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Modify | `package.json` | Add three, framer-motion, react-helmet-async |
| Modify | `index.html` | Fontshare + Google Fonts, SEO meta tags, favicon |
| Modify | `tailwind.config.js` | New font families, background `#0a0a0a` |
| Modify | `src/index.css` | Grain overlay, font-display utility |
| Create | `src/components/Hero/ParticleText.jsx` | Three.js canvas: particles assemble into "KEVIN" |
| Create | `src/components/Hero/index.jsx` | Hero section using ParticleText |
| Create | `src/components/ui/AnimatedSection.jsx` | Framer Motion scroll-triggered fade-up wrapper |
| Create | `src/components/ui/SEO.jsx` | react-helmet-async meta tags |
| Modify | `src/main.jsx` | Wrap root with HelmetProvider |
| Modify | `src/App.jsx` | Update Hero import path, add SEO component |
| Modify | `src/components/About.jsx` | Wrap content with AnimatedSection |
| Modify | `src/components/Tooling.jsx` | Wrap grid with AnimatedSection (staggered) |
| Modify | `src/components/Education.jsx` | Wrap timeline with AnimatedSection |
| Modify | `src/components/Experience.jsx` | Wrap cards with AnimatedSection |
| Modify | `src/components/Projects.jsx` | Wrap grid with AnimatedSection |
| Modify | `src/components/OtherProjects.jsx` | Wrap grid with AnimatedSection |
| Modify | `src/components/Contact.jsx` | Wrap content with AnimatedSection |
| Modify | `README.md` | Replace Vite generic README with professional one |

---

## Task 1: Install dependencies

**Files:**
- Modify: `package.json` (via npm install)

- [ ] **Step 1: Install new packages**

```bash
cd d:/portafolio/mi-portafolio
npm install three framer-motion react-helmet-async
```

Expected output: 3 packages added, no peer dependency errors.

- [ ] **Step 2: Verify installation**

```bash
cat package.json | grep -E "three|framer-motion|react-helmet"
```

Expected: all three packages appear under `"dependencies"`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: add three, framer-motion, react-helmet-async"
```

---

## Task 2: Update fonts and index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace index.html with updated version**

Replace the entire content of `index.html` with:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kevin Bedon — Software Developer</title>
    <meta name="description" content="Portfolio of Kevin Alexander Bedon Granizo — Software Engineer, AI Trainer, and Full Stack Developer from Ecuador." />
    <meta property="og:title" content="Kevin Bedon — Software Developer" />
    <meta property="og:description" content="Software Engineer, AI Trainer & Full Stack Developer from Ecuador." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/svg+xml" href="/favicon-kb.svg" />
    <!-- Fontshare: Clash Display + Satoshi -->
    <link rel="preconnect" href="https://api.fontshare.com" />
    <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
    <!-- Google Fonts: JetBrains Mono -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Verify dev server still starts**

```bash
npm run dev
```

Expected: Vite starts on localhost:5173, no errors.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: update fonts to Clash Display + Satoshi, add SEO meta"
```

---

## Task 3: Update Tailwind config and global CSS

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/index.css`

- [ ] **Step 1: Replace tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'background': '#0a0a0a',
        'primary': '#141414',
        'accent': '#8A2BE2',
        'accent-hover': '#7B1FA2',
        'text-light': '#EAEAEA',
        'text-secondary': '#A0A0A0',
        'border-color': '#2a2a2a',
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Add grain overlay to src/index.css**

Append to the bottom of `src/index.css`:

```css
/* Grain texture overlay */
body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9998;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.025;
}
```

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.js src/index.css
git commit -m "feat: update theme - darker bg, Satoshi/Clash fonts, grain overlay"
```

---

## Task 4: Create ParticleText component

**Files:**
- Create: `src/components/Hero/ParticleText.jsx`

- [ ] **Step 1: Create Hero directory and ParticleText.jsx**

Create `src/components/Hero/ParticleText.jsx`:

```jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleText() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Sample "KEVIN" text pixels using offscreen canvas
    const offscreen = document.createElement('canvas');
    offscreen.width = 600;
    offscreen.height = 150;
    const ctx = offscreen.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('KEVIN', 300, 75);

    const { data } = ctx.getImageData(0, 0, 600, 150);
    const targets = [];
    const stride = 5;

    for (let y = 0; y < 150; y += stride) {
      for (let x = 0; x < 600; x += stride) {
        if (data[(y * 600 + x) * 4 + 3] > 128) {
          targets.push(
            (x - 300) * 0.55,
            (75 - y) * 0.55,
            0
          );
        }
      }
    }

    const count = targets.length / 3;
    const positions = new Float32Array(count * 3);

    // Start from random scattered positions
    for (let i = 0; i < count * 3; i += 3) {
      positions[i]     = (Math.random() - 0.5) * 500;
      positions[i + 1] = (Math.random() - 0.5) * 300;
      positions[i + 2] = (Math.random() - 0.5) * 200;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2.5,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse position for repulsion
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    let animId;
    const posAttr = geometry.attributes.position;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        // Lerp toward target position (assembles the text)
        posAttr.array[i3]     += (targets[i3]     - posAttr.array[i3])     * 0.04;
        posAttr.array[i3 + 1] += (targets[i3 + 1] - posAttr.array[i3 + 1]) * 0.04;
        posAttr.array[i3 + 2] += (targets[i3 + 2] - posAttr.array[i3 + 2]) * 0.04;

        // Mouse repulsion
        const dx = posAttr.array[i3]     - mouse.x * 200;
        const dy = posAttr.array[i3 + 1] - mouse.y * 150;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 70 && dist > 0) {
          const force = (70 - dist) / 70 * 9;
          posAttr.array[i3]     += (dx / dist) * force;
          posAttr.array[i3 + 1] += (dy / dist) * force;
        }
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero/ParticleText.jsx
git commit -m "feat: add Three.js ParticleText component - particles assemble into KEVIN"
```

---

## Task 5: Create new Hero/index.jsx

**Files:**
- Create: `src/components/Hero/index.jsx`

- [ ] **Step 1: Create Hero/index.jsx**

Create `src/components/Hero/index.jsx`:

```jsx
import { useTranslation } from 'react-i18next';
import ParticleText from './ParticleText';

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center py-20 px-8 pt-32 overflow-hidden">
      <div className="container mx-auto">
        {/* Small intro label */}
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-6">
          {t('hero.intro')}
        </p>

        {/* Particle canvas - particles assemble into "KEVIN" */}
        <div className="w-full h-36 md:h-52 -ml-2">
          <ParticleText />
        </div>

        {/* Last name + title */}
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-secondary mt-2 mb-4">
          Bedon Granizo — Software Developer
        </h2>

        <p className="text-base md:text-lg text-text-secondary max-w-xl mb-10 leading-relaxed">
          {t('hero.tagline')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-md transition duration-300 hover:bg-accent-hover transform hover:scale-105 shadow-lg"
          >
            {t('hero.cta')}
          </a>
          <a
            href="/CV_Kevin_Bedon.pdf"
            download="CV_Kevin_Bedon.pdf"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-accent font-bold py-3 px-8 border-2 border-accent rounded-md transition duration-300 hover:bg-accent/10 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t('hero.downloadCV')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary/50 text-xs font-mono tracking-widest uppercase">
        <span>scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-secondary/50 to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
```

- [ ] **Step 2: Add `hero.intro` translation key to both locale files**

In `src/locales/es/translation.json`, inside the `"hero"` object, add:
```json
"intro": "Hola, soy"
```

In `src/locales/en/translation.json`, inside the `"hero"` object, add:
```json
"intro": "Hello, I'm"
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero/index.jsx src/locales/
git commit -m "feat: new Hero section with particle text layout"
```

---

## Task 6: Update App.jsx to use new Hero

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Update Hero import in App.jsx**

In `src/App.jsx`, change line 4:
```js
// FROM:
import Hero from './components/Hero.jsx';
// TO:
import Hero from './components/Hero/index.jsx';
```

- [ ] **Step 2: Verify dev server shows new hero**

```bash
npm run dev
```

Open browser at localhost:5173. Confirm particles animate into "KEVIN" on the hero section. No console errors.

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "feat: wire new Hero component with particle text"
```

---

## Task 7: Create AnimatedSection utility

**Files:**
- Create: `src/components/ui/AnimatedSection.jsx`

- [ ] **Step 1: Create src/components/ui/ directory and AnimatedSection.jsx**

Create `src/components/ui/AnimatedSection.jsx`:

```jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/AnimatedSection.jsx
git commit -m "feat: add AnimatedSection scroll-reveal wrapper"
```

---

## Task 8: Add scroll animations to all sections

**Files:**
- Modify: `src/components/About.jsx`
- Modify: `src/components/Tooling.jsx`
- Modify: `src/components/Education.jsx`
- Modify: `src/components/Experience.jsx`
- Modify: `src/components/Projects.jsx`
- Modify: `src/components/OtherProjects.jsx`
- Modify: `src/components/Contact.jsx`

- [ ] **Step 1: Update About.jsx**

Add import at top of file:
```js
import AnimatedSection from './ui/AnimatedSection';
```

Wrap the existing `<div className="flex flex-col md:flex-row ...">` (the content area) with `<AnimatedSection>`:
```jsx
<AnimatedSection>
  <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
    {/* ... existing content unchanged ... */}
  </div>
</AnimatedSection>
```

- [ ] **Step 2: Update Tooling.jsx**

Add import at top:
```js
import AnimatedSection from './ui/AnimatedSection';
```

Wrap the grid `<div className="grid grid-cols-2 ...">` with `<AnimatedSection>`:
```jsx
<AnimatedSection>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {/* ... existing content unchanged ... */}
  </div>
</AnimatedSection>
```

- [ ] **Step 3: Update Education.jsx**

Add import at top:
```js
import AnimatedSection from './ui/AnimatedSection';
```

Wrap the `<ol className="relative border-s ...">` with `<AnimatedSection>`:
```jsx
<AnimatedSection>
  <ol className="relative border-s border-border-color">
    {/* ... existing content unchanged ... */}
  </ol>
</AnimatedSection>
```

- [ ] **Step 4: Update Experience.jsx**

Add import at top:
```js
import AnimatedSection from './ui/AnimatedSection';
```

Wrap the `{experienceKeys.map(...)}` block with `<AnimatedSection>`:
```jsx
<AnimatedSection>
  {experienceKeys.map((key) => (
    <ExperienceCard
      key={key}
      experienceKey={key}
      isOpen={openCardId === key}
      toggleOpen={() => toggleOpen(key)}
    />
  ))}
</AnimatedSection>
```

- [ ] **Step 5: Update Projects.jsx**

Add import at top:
```js
import AnimatedSection from './ui/AnimatedSection';
```

Wrap the grid `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ...">` with `<AnimatedSection>`:
```jsx
<AnimatedSection>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* ... existing content unchanged ... */}
  </div>
</AnimatedSection>
```

- [ ] **Step 6: Update OtherProjects.jsx**

Add import at top:
```js
import AnimatedSection from './ui/AnimatedSection';
```

Wrap the grid `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ...">` with `<AnimatedSection>`:
```jsx
<AnimatedSection>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {/* ... existing content unchanged ... */}
  </div>
</AnimatedSection>
```

- [ ] **Step 7: Update Contact.jsx**

Add import at top:
```js
import AnimatedSection from './ui/AnimatedSection';
```

Wrap the inner content (h2 + p + button) with `<AnimatedSection>`:
```jsx
<AnimatedSection>
  <h2 className="font-sans text-4xl font-bold mb-6 text-text-light">{t('contact.title')}</h2>
  <p className="text-lg text-text-secondary mx-auto mb-8">
    {t('contact.prompt')}
  </p>
  <button
    onClick={handleContactClick}
    className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-md transition duration-300 hover:bg-accent-hover transform hover:scale-105 shadow-lg w-full sm:w-auto"
  >
    {buttonText}
  </button>
</AnimatedSection>
```

- [ ] **Step 8: Verify all animations work**

```bash
npm run dev
```

Open localhost:5173. Scroll through the page. Each section should fade-up as it enters the viewport.

- [ ] **Step 9: Commit**

```bash
git add src/components/About.jsx src/components/Tooling.jsx src/components/Education.jsx src/components/Experience.jsx src/components/Projects.jsx src/components/OtherProjects.jsx src/components/Contact.jsx
git commit -m "feat: add Framer Motion scroll-triggered reveal animations to all sections"
```

---

## Task 9: Update section title typography

**Files:**
- Modify: `src/components/About.jsx`
- Modify: `src/components/Tooling.jsx`
- Modify: `src/components/Education.jsx`
- Modify: `src/components/Experience.jsx`
- Modify: `src/components/Projects.jsx`
- Modify: `src/components/OtherProjects.jsx`
- Modify: `src/components/Contact.jsx`
- Modify: `src/components/Header.jsx`

- [ ] **Step 1: Replace `font-sans` with `font-display` on all section `<h2>` tags**

In each of the following files, find every `<h2 className="font-sans ...">` and change `font-sans` to `font-display`:

- `src/components/About.jsx` — line with `{t('about.title')}`
- `src/components/Tooling.jsx` — line with `{t('tooling.title')}`
- `src/components/Education.jsx` — line with `{t('education.title')}`
- `src/components/Experience.jsx` — line with `{t('experience.title')}`
- `src/components/Projects.jsx` — line with `{t('projects.title')}`
- `src/components/OtherProjects.jsx` — line with `{t('otherProjects.title')}`
- `src/components/Contact.jsx` — line with `{t('contact.title')}`

- [ ] **Step 2: Update Header logo font**

In `src/components/Header.jsx`, line 13, change `font-serif` to `font-display`:
```jsx
// FROM:
<h1 className="text-xl font-bold font-serif text-accent cursor-pointer">Kevin Bedon</h1>
// TO:
<h1 className="text-xl font-bold font-display text-accent cursor-pointer">Kevin Bedon</h1>
```

- [ ] **Step 3: Update tech tags in Projects.jsx and OtherProjects.jsx to use font-mono**

In `src/components/Projects.jsx`, find the tech tag span:
```jsx
// FROM:
<span key={techName} className="bg-border-color text-xs font-medium px-3 py-1 rounded-full text-text-secondary">{techName}</span>
// TO:
<span key={techName} className="bg-border-color text-xs font-mono px-3 py-1 rounded-full text-text-secondary">{techName}</span>
```

In `src/components/OtherProjects.jsx`, same change:
```jsx
// FROM:
<span key={techName} className="bg-border-color text-xs font-medium px-3 py-1 rounded-full text-text-secondary">
// TO:
<span key={techName} className="bg-border-color text-xs font-mono px-3 py-1 rounded-full text-text-secondary">
```

- [ ] **Step 4: Commit**

```bash
git add src/components/About.jsx src/components/Tooling.jsx src/components/Education.jsx src/components/Experience.jsx src/components/Projects.jsx src/components/OtherProjects.jsx src/components/Contact.jsx src/components/Header.jsx
git commit -m "feat: apply Clash Display to section headers, JetBrains Mono to tech tags"
```

---

## Task 10: Add SEO with react-helmet-async

**Files:**
- Create: `src/components/ui/SEO.jsx`
- Modify: `src/main.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create SEO.jsx**

Create `src/components/ui/SEO.jsx`:

```jsx
import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      <title>Kevin Bedon — Software Developer</title>
      <meta name="description" content="Portfolio of Kevin Alexander Bedon Granizo — Software Engineer, AI Trainer, and Full Stack Developer from Ecuador." />
      <meta name="keywords" content="Kevin Bedon, Software Developer, React, Full Stack, AI Trainer, Ecuador" />
      <meta name="author" content="Kevin Alexander Bedon Granizo" />
      <meta property="og:title" content="Kevin Bedon — Software Developer" />
      <meta property="og:description" content="Software Engineer, AI Trainer & Full Stack Developer from Ecuador." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kevinbedon.dev" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kevin Bedon — Software Developer" />
      <meta name="twitter:description" content="Software Engineer, AI Trainer & Full Stack Developer from Ecuador." />
    </Helmet>
  );
}
```

- [ ] **Step 2: Wrap root with HelmetProvider in main.jsx**

Replace `src/main.jsx` with:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
```

- [ ] **Step 3: Add SEO component to App.jsx**

In `src/App.jsx`, add import:
```js
import SEO from './components/ui/SEO.jsx';
```

Inside the return JSX, add `<SEO />` as the first child inside the outer div, before `<div className="cursor-outline"...>`:
```jsx
return (
  <div className="bg-background font-sans text-text-light relative">
    <SEO />
    {/* ... rest unchanged ... */}
  </div>
);
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/SEO.jsx src/main.jsx src/App.jsx
git commit -m "feat: add react-helmet-async SEO meta tags and Open Graph"
```

---

## Task 11: Update README.md

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Replace README.md with professional version**

Replace the entire content of `README.md`:

```markdown
# Kevin Bedon — Portfolio

Personal portfolio website for Kevin Alexander Bedon Granizo, Software Engineer & AI Trainer from Ecuador.

## Live Site

[kevinbedon.dev](https://kevinbedon.dev) *(update once deployed)*

## Tech Stack

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 3
- **3D / Animation**: Three.js + Framer Motion
- **i18n**: react-i18next (ES/EN)
- **SEO**: react-helmet-async
- **Fonts**: Clash Display, Satoshi, JetBrains Mono

## Features

- Three.js particle text: particles assemble into "KEVIN" on load
- Scroll-triggered fade-up animations on every section
- Full Spanish/English translation
- 9 live project demos + 4 GitHub repos showcased
- Custom animated cursor
- Noise/grain texture overlay for visual depth

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Sections

Hero → About → Skills → Education → Experience → Projects → Other Projects → Contact
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: replace generic Vite README with professional portfolio README"
```

---

## Task 12: Final verification

- [ ] **Step 1: Run dev server and check all sections**

```bash
npm run dev
```

Verify:
1. Particles animate and assemble into "KEVIN" on hero load
2. Moving mouse repels particles
3. Scrolling triggers fade-up animations on each section
4. Clash Display renders on all h2 headers
5. Satoshi renders on body text
6. JetBrains Mono renders on tech tags
7. Language switcher still works (ES/EN toggle)
8. No console errors

- [ ] **Step 2: Run build**

```bash
npm run build
```

Expected: build completes with no errors. Note any warnings about bundle size — Three.js adds ~600KB.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio visual upgrade - particle hero, animations, fonts, SEO"
```
