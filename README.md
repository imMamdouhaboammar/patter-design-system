# 🎨 Patter Design System & Tokens

> Comprehensive, production-grade Design System & Token specifications extracted and reverse-engineered from [Patter (getpatter.com)](https://www.getpatter.com/).

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](https://opensource.org/licenses/MIT)
[![Design Style](https://img.shields.io/badge/Style-Neo--Brutalist%20Minimalism-df9367.svg)](#-design-aesthetic)

---

## 📖 What's Inside?

This repository contains the complete design language, design tokens (CSS variables, Tailwind configuration, W3C DTCG JSON), and component blueprints for the **Patter** web experience.

* 📄 **[`DESIGN.md`](./DESIGN.md)**: Full design system documentation, typography scales, spacing tokens, elevations, neo-brutalist hard shadows, and component specifications.

---

## 🌟 Visual Aesthetic

The Patter design language is built for developers with a **Neo-Brutalist Technical Minimalist** aesthetic:
* **High Contrast:** Pure black (`#000000`) text & borders over clean whites and warm creams.
* **Hard 1.5px / 2px Borders:** Clean delineation instead of blurry drop shadows.
* **Signature Peach Accent:** `#df9367` (Peach) and `#c97a4c` (Deep Peach) for interactive elements and active states.
* **Dot-Grid Micro-Textures:** Tactile radial dots for technical depth.

---

## 🚀 Quick Tokens Reference

```css
:root {
  /* Colors */
  --ink:          #000000;
  --bg:           #ffffff;
  --bg-cream:     #f6f6f4;
  --peach:        #df9367;
  --peach-deep:   #c97a4c;
  --peach-cream:  #fff8ef;
  --line:         #eeeeee;

  /* Typography */
  --font-sans:    "Instrument Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;

  /* Hard Shadows */
  --shadow-hard-sm: 0 4px 0 0 var(--ink);
  --shadow-hard-md: 12px 12px 0 -1px var(--bg-cream), 12px 12px 0 0 var(--ink);
}
```

---

## 📄 License

MIT © [Patter](https://www.getpatter.com) & Contributors.
