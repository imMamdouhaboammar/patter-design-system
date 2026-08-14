# 🎨 Patter Design System & Tokens

> Comprehensive, production-grade Design System & Token specifications extracted and reverse-engineered from [Patter (getpatter.com)](https://www.getpatter.com/).

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Site-df9367.svg)](https://immamdouhaboammar.github.io/patter-design-system/)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](https://opensource.org/licenses/MIT)
[![Design Style](https://img.shields.io/badge/Style-Neo--Brutalist%20Minimalism-df9367.svg)](#-visual-aesthetic)

---

## ⚡ Quick Scaffolding (bunx / npx)

Clone the design tokens and starter assets into your project instantly:

```bash
# Using Bun (Recommended)
bunx degit imMamdouhaboammar/patter-design-system patter-ds

# Using NPX
npx degit imMamdouhaboammar/patter-design-system patter-ds

# Or direct download the CSS tokens
curl -sSL https://raw.githubusercontent.com/imMamdouhaboammar/patter-design-system/main/index.css -o patter.css
```

---

## 🤖 1-Click AI Coding Agent Prompt

Copy and paste this prompt directly into **Claude Code**, **Cursor Composer**, **Antigravity**, **Windsurf**, or **GitHub Copilot** to apply the Patter theme to your existing project:

```markdown
Apply the Patter Design System (Neo-Brutalist Technical Minimalism) to this project:

1. TYPOGRAPHY:
- Primary UI / Display Font: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif (import from Google Fonts).
- Monospace / Code / Data Font: 'JetBrains Mono', ui-monospace, monospace.

2. COLOR TOKENS:
- Ink & Neutrals: #000000 (primary ink, borders, buttons), #1a1a1a (dark containers), #4a4a4a (body text), #aaaaaa (muted labels), #cbcbcb (faint comments/numbers), #eeeeee (1px dividers).
- Surfaces: #ffffff (base canvas), #f6f6f4 (cream secondary background/cards), #fff8ef (warm accent background), #ebf0f5 (cool tech background), #fafaf8 (code pane background).
- Signature Peach Accent: #df9367 (core accent & button hover), #c97a4c (deep accent text & code keywords), #efc5ac (light badge border), #fff8ef (peach-cream tags).
- Status & Tech: #2ea043 (live green), #3b82f6 (cool blue).

3. HARD NEO-BRUTALIST BORDERS & SHADOWS:
- Use deterministic 1.5px and 2px solid #000000 borders on buttons, cards, tags, and inputs.
- Replace soft/blurry drop shadows with crisp hard offset shadows:
  * Buttons & Small Cards: `box-shadow: 0 4px 0 0 #000000;`
  * Medium Cards: `box-shadow: 12px 12px 0 -1px #f6f6f4, 12px 12px 0 0 #000000;`
  * Terminal/Window Mockups: `box-shadow: 0 16px 0 -8px #f6f6f4, 0 16px 0 -6px #000000;`

4. TACTILE DOT-GRID TEXTURE:
- Add a subtle 18px dot-grid texture on hero & dashboard containers:
  `background-image: radial-gradient(circle at 1px 1px, #dad8de 1px, transparent 0); background-size: 18px 18px;` with radial mask.

5. COMPONENT BLUEPRINTS:
- Buttons: Pill shape (`border-radius: 999px`), 1.5px solid #000, font-weight 600. Primary button has black fill (`#000`), white text, and turns `#df9367` (peach) on hover.
- Eyebrow Tags: Pill badges with 12px monospace uppercase text, 1.5px black border, and a 6px peach dot circle before the label.
- Feature Grid: 3-column unified grid with 1.5px black outer border, 24px corner radius, and collapsed internal cell borders.

Refactor the existing layout and stylesheet to strictly enforce this clean, high-density, neo-brutalist technical aesthetic.
```

---

## 📖 What's Inside?

* 🌐 **[Live Demo & Token Sandbox](https://immamdouhaboammar.github.io/patter-design-system/)**
* 📄 **[`DESIGN.md`](./DESIGN.md)**: Full design system documentation, typography scales, spacing tokens, elevations, neo-brutalist hard shadows, and component specifications.
* 🤖 **[`skills/patter-design-system/SKILL.md`](./skills/patter-design-system/SKILL.md)**: Agent-executable skill document.
* 🎨 **[`index.css`](./index.css)**: Standard CSS Custom Properties.
* ⚙️ **[`tailwind.config.js`](./tailwind.config.js)**: Ready-to-use Tailwind theme extension.
* 📦 **[`tokens.json`](./tokens.json)**: W3C DTCG Token format.

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
