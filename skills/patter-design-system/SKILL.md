---
name: patter-design-system
description: Use when building, styling, or auditing web interfaces that require the Patter developer aesthetic, neo-brutalist technical minimalism, Instrument Sans typography, hard 1.5px/2px black borders, and signature peach accents.
---

# Patter Design System

## Overview

The Patter design language is a high-density, developer-first **Neo-Brutalist Technical Minimalist** design system. It combines Swiss typography hierarchy with deterministic hard borders, tactile dot-grid textures, and a signature peach accent palette.

## When to Use

```
Is the target audience developers / technical operators?
  ├── YES → Needs high-density data, code panes, or CLI tools?
  │           ├── YES → Use patter-design-system
  │           └── NO  → Standard clean UI
  └── NO  → Use consumer / product design system
```

* **Use when:**
  * Building developer tools, AI agent interfaces, CLI dashboards, or voice/telephony platforms.
  * Creating high-density data tables, code comparison matrices, or real-time metric counters.
  * Needing high-contrast monochrome interfaces with selective peach/amber accents.
* **When NOT to use:**
  * Consumer apps, playful whimsical themes, or marketing sites requiring gradient-heavy or frosted-glass glassmorphic styles.

---

## Quick Reference Tokens

### 1. Colors & Surfaces
| Token | Hex Value | Role / Usage |
| :--- | :--- | :--- |
| `--ink` | `#000000` | Primary text, hard borders, heavy buttons |
| `--ink-2` | `#1a1a1a` | Dark card backgrounds, terminal surfaces |
| `--fg-secondary` | `#4a4a4a` | Body copy, secondary text |
| `--ink-muted` | `#aaaaaa` | Metadata, disabled states, sub-labels |
| `--ink-faint` | `#cbcbcb` | Line numbers, dimmed comments |
| `--bg` | `#ffffff` | Primary app canvas background |
| `--bg-cream` | `#f6f6f4` | Secondary section background, alt card fill |
| `--bg-warm` | `#fff8ef` | Warm callout surface, Python pill background |
| `--bg-cool` | `#ebf0f5` | Cool technical surface, TypeScript badge |
| `--peach` | `#df9367` | Core accent, hover states, hero emphasis |
| `--peach-deep` | `#c97a4c` | High-contrast accent text, code keywords |
| `--peach-light` | `#efc5ac` | Pill borders, active badge outlines |
| `--peach-cream` | `#fff8ef` | Pill surface, active call card turns |
| `--line` | `#eeeeee` | 1px internal dividers, table lines |
| `--status-live` | `#2ea043` | Real-time SSE / Live call pulse |

### 2. Typography & Fonts
* **Primary / Display:** `"Instrument Sans", ui-sans-serif, system-ui, sans-serif`
* **Data / Code / Monospace:** `"JetBrains Mono", ui-monospace, monospace`
* **Scale:** `--fs-12` (12px), `--fs-14` (14px), `--fs-16` (16px), `--fs-19` (19px), `--fs-22` (22px), `--fs-32` (32px), `--fs-56` (56px), `--fs-128` (128px Hero).

### 3. Borders, Radii & Hard Elevation
* **Borders:** `1.5px solid var(--ink)` (Buttons, cards, pills), `2px solid var(--ink)` (Hero mockups).
* **Radii:** `--r-2: 8px` (Icons), `--r-3: 12px` (Cards), `--r-4: 16px` (Panels), `--r-5: 24px` (Grids), `--r-pill: 999px` (Pills/Buttons).
* **Hard Drop Shadows:**
  * Small: `0 4px 0 0 var(--ink)`
  * Medium: `12px 12px 0 -1px var(--bg-cream), 12px 12px 0 0 var(--ink)`
  * Window Mockup: `0 16px 0 -8px var(--bg-cream), 0 16px 0 -6px var(--ink)`
* **Dot Grid Texture:** `radial-gradient(circle at 1px 1px, #dad8de 1px, transparent 0)` with `18px 18px` size.

---

## Core Component Patterns

### 1. Pill Buttons (`.btn` & `.btn-primary`)

```css
.btn {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1.5px solid var(--ink);
  background: var(--bg);
  color: var(--ink);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 150ms cubic-bezier(0.2, 0, 0, 1);
}
.btn:hover { background: var(--ink); color: var(--bg); }
.btn-primary { background: var(--ink); color: var(--bg); }
.btn-primary:hover { background: var(--peach); border-color: var(--ink); color: var(--ink); }
```

### 2. Eyebrow Tag (`.eyebrow-tag`)

```html
<span class="eyebrow-tag">Open-source · MIT</span>
```
```css
.eyebrow-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--ink);
  padding: 6px 12px;
  border: 1.5px solid var(--ink);
  border-radius: 999px;
  background: var(--bg);
}
.eyebrow-tag::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--peach);
}
```

### 3. CLI Install Pill (`.install-pill`)

```html
<button class="install-pill" type="button">
  <span class="lang py">PY</span>
  <code>pip install getpatter</code>
  <span class="copy-ic">📋</span>
</button>
```
```css
.install-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--bg);
  color: var(--ink);
  border: 1.5px solid var(--ink);
  border-radius: 999px;
  padding: 10px 18px 10px 14px;
  font-family: var(--font-mono);
  font-size: 14px;
  cursor: pointer;
  transition: transform 150ms ease, box-shadow 150ms ease;
}
.install-pill:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 0 0 var(--ink);
  background: var(--bg-cream);
}
```

### 4. 3-Column Feature Grid (`.build-grid`)

```html
<div class="build-grid">
  <div class="build-cell">
    <span class="num">01 / Telephony</span>
    <h4>One handler, both directions.</h4>
    <p>Inbound and outbound calls unified.</p>
  </div>
  <div class="build-cell peach">
    <span class="num">02 / Latency</span>
    <h4>&lt;500 ms TTFA.</h4>
    <p>Real-time streaming audio.</p>
  </div>
  <div class="build-cell">
    <span class="num">03 / Composable</span>
    <h4>Hot-swappable providers.</h4>
    <p>27+ integrations across STT, LLM, TTS.</p>
  </div>
</div>
```
```css
.build-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1.5px solid var(--ink);
  border-radius: 24px;
  overflow: hidden;
  background: var(--bg);
}
.build-cell {
  padding: 36px 32px;
  border-right: 1.5px solid var(--ink);
  border-bottom: 1.5px solid var(--ink);
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 280px;
}
.build-cell:nth-child(3n) { border-right: 0; }
.build-cell:nth-last-child(-n+3) { border-bottom: 0; }
.build-cell.peach { background: var(--peach-cream); }
```

---

## Common Mistakes & Anti-Patterns

| Mistake | Correct Pattern |
| :--- | :--- |
| **Blurry soft drop shadows** | Use hard, crisp black offset shadows (`0 4px 0 0 #000` or `12px 12px 0 0 #000`). |
| **Overusing Peach everywhere** | Keep Peach (`#df9367`) strictly for active states, key tags, and call-to-actions. |
| **Mismatched font pairing** | Strictly use `Instrument Sans` for prose/headings and `JetBrains Mono` for metadata/code. |
| **Thin 0.5px borders** | Always use bold `1.5px` or `2px` black borders for card containers and grids. |
| **Gradient keyword text** | Use clean solid typography with deep peach accents (`#c97a4c`) on italicized emphasis words. |
