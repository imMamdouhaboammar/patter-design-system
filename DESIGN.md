# Patter Design System Specification (`DESIGN.md`)

> **Source:** Reverse-engineered and extracted from [https://www.getpatter.com/](https://www.getpatter.com/)  
> **Aesthetic Archetype:** Developer-Centric Neo-Brutalist Technical Minimalism  
> **Version:** 1.0.0 (Patter v0.5.5 Design Spec)

---

## 1. Overview & Brand Persona

The Patter design language is engineered specifically for high-velocity software engineers and developer audiences. It bridges the gap between clean Swiss typography and high-density technical interfaces by using sharp, deterministic borders, near-monochrome ink palettes, subtle tactile dot grids, and a single signature peach accent.

### Core Visual Principles
1. **Deterministic Structure (Hard Lines):** 1.5px and 2px solid ink borders delineate content blocks instead of blurry, indistinct drop shadows.
2. **Tactile Micro-Textures:** Subtle 16px/18px radial dot grids create depth without adding visual noise.
3. **Intentional Accent:** The `#df9367` (Peach) palette is reserved exclusively for interactive elements, primary call-to-actions, live indicators, and key metric differentiators.
4. **Information Density & Legibility:** Typographic pairing strictly separates human-readable UI copy (`Instrument Sans`) from machine data, telemetry, and code snippets (`JetBrains Mono`).

---

## 2. Design Tokens

### 2.1 Color Tokens

#### Ink & Neutral Tokens
| Token Name | Hex Value | Role / Usage |
| :--- | :--- | :--- |
| `--ink` | `#000000` | Primary headings, hard borders, heavy buttons |
| `--ink-2` | `#1a1a1a` | Dark card backgrounds, terminal window surfaces |
| `--fg-secondary` | `#4a4a4a` | Body copy, secondary descriptions |
| `--ink-muted` | `#aaaaaa` | Metadata, disabled states, sub-labels |
| `--ink-faint` | `#cbcbcb` | Line numbers, dimmed terminal comments |
| `--line` | `#eeeeee` | 1px internal dividers, table cell lines |
| `--line-2` | `#e3e3e6` | Hairline borders |

#### Backgrounds & Surfaces
| Token Name | Hex Value | Role / Usage |
| :--- | :--- | :--- |
| `--bg` | `#ffffff` | Primary app canvas background |
| `--bg-cream` | `#f6f6f4` | Secondary section background, card alt fill |
| `--bg-warm` | `#fff8ef` | Warm callout surface, Python pill background |
| `--bg-cool` | `#ebf0f5` | Cool technical surface, TypeScript badge |
| `--bg-fog` | `#f4f7fb` | Soft tinted hover surface |
| `--code-bg` | `#fafaf8` | Code pane container background |

#### Signature Peach Accent Palette
| Token Name | Hex Value | Role / Usage |
| :--- | :--- | :--- |
| `--peach` | `#df9367` | Core accent, hover states, hero emphasis |
| `--peach-deep` | `#c97a4c` | High-contrast text on light backgrounds, code keywords |
| `--peach-light` | `#efc5ac` | Pill borders, active badge outlines |
| `--peach-cream` | `#fff8ef` | Pill surface, active call card turns |

#### Tech Blues & Status Colors
| Token Name | Hex Value | Role / Usage |
| :--- | :--- | :--- |
| `--blue-cool` | `#3b82f6` | TypeScript borders & tech highlights |
| `--blue-1` | `#278eff` | Interactive blue accent |
| `--status-live` | `#2ea043` | Real-time SSE / Live call pulse |
| `--carrier-twilio` | `#d23b3b` | Twilio brand marker dot |
| `--carrier-telnyx` | `#1ea672` | Telnyx brand marker dot |
| `--syntax-string` | `#3b6f3b` | Syntax highlighted strings |

---

### 2.2 Typography Tokens

#### Font Families
* **Display / UI Sans:** `"Instrument Sans", ui-sans-serif, system-ui, -apple-system, sans-serif`
* **Data / Code / Monospace:** `"JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace`

#### Type Scale
```css
--fs-12:  12px;   /* Micro metadata, tags, table headers */
--fs-13:  13px;   /* Small descriptions, tooltips */
--fs-14:  14px;   /* Standard UI label, button text */
--fs-15:  15px;   /* Section lead secondary text */
--fs-16:  16px;   /* Base body copy */
--fs-18:  18px;   /* Card lead, prominent paragraph */
--fs-20:  20px;   /* Sub-headings, small titles */
--fs-22:  22px;   /* Feature card title */
--fs-24:  24px;   /* Standard Section H3 */
--fs-28:  28px;   /* Brand logo, dialog title */
--fs-32:  32px;   /* Medium Section Title */
--fs-40:  40px;   /* Large H2 */
--fs-56:  56px;   /* Stat numbers */
--fs-64:  64px;   /* Big H1 / Section title */
--fs-128: 128px;  /* Hero display headline (responsive clamp) */
```

#### Line Heights & Weights
* `--lh-tight: 0.96` to `1.02` (Headings)
* `--lh-snug: 1.15` (Subheadings)
* `--lh-normal: 1.4` (Monospace & Code)
* `--lh-relaxed: 1.55` (Body text)
* Weights: `400` (Regular), `500` (Medium), `600` (Semi-Bold), `700` (Bold)

---

### 2.3 Spacing & Layout Tokens

```css
--s-0:   0px;
--s-1:   4px;
--s-2:   8px;
--s-3:   12px;
--s-4:   16px;
--s-5:   24px;
--s-6:   32px;
--s-7:   48px;
--s-8:   64px;
--s-9:   96px;
--s-10:  128px;

--container-max:   1280px;
--container-tight: 1080px;
```

---

### 2.4 Borders, Radii & Shadows

#### Border Widths
* Hairline: `1px solid var(--line)` (Internal cell boundaries)
* Standard: `1.5px solid var(--ink)` (Buttons, cards, pills)
* Heavy: `2px solid var(--ink)` (Terminal mockups, primary frames)

#### Corner Radii
* `--r-1: 4px`
* `--r-2: 8px` (Icons, code tags)
* `--r-3: 12px` (Cards, inner modules)
* `--r-4: 16px` (Feature cards, dashboards)
* `--r-5: 24px` (Main section containers, comparison grids)
* `--r-pill: 999px` (Buttons, badges, install pills)

#### Elevation & Shadows
```css
/* Soft contextual shadows */
--shadow-card:    0 8px 32px rgba(0, 0, 0, 0.08);
--shadow-overlay: 0 24px 64px rgba(0, 0, 0, 0.18);

/* Neo-Brutalist Hard Drop Shadows */
--shadow-hard-sm: 0 4px 0 0 var(--ink);
--shadow-hard-md: 12px 12px 0 -1px var(--bg-cream), 12px 12px 0 0 var(--ink);
--shadow-mock:    0 16px 0 -8px var(--bg-cream), 0 16px 0 -6px var(--ink);
```

#### Texture Token
```css
--dot-grid: radial-gradient(circle at 1px 1px, #dad8de 1px, transparent 0);
--dot-grid-size: 18px 18px;
```

---

## 3. Component Specifications

### 3.1 Buttons (`.btn`)
* **Base:** Pill-shaped (`border-radius: 999px`), `1.5px solid var(--ink)`, `14px` Semi-bold, `10px 18px` padding.
* **Ghost:** Transparent border, soft cream hover background.
* **Primary (Dark):** `background: var(--ink); color: var(--bg);` with hover transforming to `background: var(--peach); color: var(--ink);`.
* **Dark Surface Button (`.btn-on-dark`):** `background: var(--bg); color: var(--ink);` with hover transforming to `var(--peach)`.

```css
.btn {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: var(--r-pill);
  border: var(--bw-1) solid var(--ink);
  background: var(--bg);
  color: var(--ink);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: all var(--motion-fast) var(--easing);
}
.btn-primary {
  background: var(--ink);
  color: var(--bg);
}
.btn-primary:hover {
  background: var(--peach);
  border-color: var(--ink);
  color: var(--ink);
}
```

---

### 3.2 Install & Copy Pills (`.install-pill`)
* Clickable pill for CLI installation commands.
* Includes language icon badge (`.lang.py` peach tint, `.lang.ts` blue tint).
* Hover behavior: `translateY(-1px)` with hard shadow `0 4px 0 0 var(--ink)`.
* Active press animation keyframe with tactile feedback.

```css
.install-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--bg);
  color: var(--ink);
  border: 1.5px solid var(--ink);
  border-radius: var(--r-pill);
  padding: 10px 18px 10px 14px;
  font-family: var(--font-mono);
  font-size: 14px;
  cursor: pointer;
  transition: transform var(--motion-fast), box-shadow var(--motion-fast), background var(--motion-fast);
}
.install-pill:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-hard-sm);
  background: var(--bg-cream);
}
```

---

### 3.3 Eyebrows & Badges (`.eyebrow-tag`)
* Monospace uppercase text with `0.08em` letter-spacing.
* Features a 6px circular dot in `--peach` color before the text.

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
  border-radius: var(--r-pill);
  background: var(--bg);
}
.eyebrow-tag::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: var(--r-pill);
  background: var(--peach);
}
```

---

### 3.4 Call & Terminal Mockup Window (`.hero-callmock`)
* 2-column container (`1.1fr` Code, `0.9fr` Live Call).
* Top bar with macOS-style window dots (`.dots i`), filename, and pulsating green/peach live indicator.
* Left pane displays syntax-highlighted code with line numbers.
* Right pane displays live transcript dialogue turns with caller and agent avatar tags.

```css
.hero-callmock {
  background: var(--bg);
  border: 2px solid var(--ink);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 0 -8px var(--bg-cream), 0 16px 0 -6px var(--ink);
}
.callmock-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-bottom: 1.5px solid var(--ink);
  background: var(--bg-cream);
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink-muted);
}
.turn.agent .who {
  background: var(--ink);
  color: var(--bg);
}
.turn.caller .who {
  background: var(--peach-cream);
  color: var(--peach-deep);
  border-color: var(--peach-light);
}
```

---

### 3.5 Feature Cells Grid (`.build-grid` & `.build-cell`)
* 3-column unified grid wrapped in a single `1.5px solid var(--ink)` outer border with `24px` radius.
* Internal grid borders created via border-right and border-bottom collapse.
* Highlighted cards use `--peach-cream` background.

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

### 3.6 Comparison Matrix Table (`table.compare`)
* High-density comparison table with custom header branding.
* Featured column (`th.us`, `td.us`) is highlighted with `--peach` and `--peach-cream` background.
* Clean square indicators for boolean states (`.check-yes`, `.check-no`, `.check-partial`).

```css
table.compare thead th.us {
  background: var(--peach);
  color: var(--ink);
}
table.compare tbody td.us {
  background: var(--peach-cream);
  border-left: 1.5px solid var(--peach);
  border-right: 1.5px solid var(--peach);
  font-weight: 700;
  color: var(--ink);
}
.check-yes.peach {
  background: var(--peach);
  color: var(--ink);
}
```

---

## 4. Complete Tailwind CSS Configuration

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#000000',
          2: '#1a1a1a',
          muted: '#aaaaaa',
          faint: '#cbcbcb',
        },
        surface: {
          DEFAULT: '#ffffff',
          cream: '#f6f6f4',
          warm: '#fff8ef',
          cool: '#ebf0f5',
          fog: '#f4f7fb',
          code: '#fafaf8',
        },
        peach: {
          DEFAULT: '#df9367',
          light: '#efc5ac',
          cream: '#fff8ef',
          deep: '#c97a4c',
        },
        blue: {
          tech: '#3b82f6',
          cool: '#1e6bd6',
          light: '#93c5fd',
        },
        line: {
          DEFAULT: '#eeeeee',
          2: '#e3e3e6',
        },
        status: {
          live: '#2ea043',
          twilio: '#d23b3b',
          telnyx: '#1ea672',
        }
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        '1.5': '1.5px',
        '2': '2px',
      },
      borderRadius: {
        'card': '16px',
        'container': '24px',
        'pill': '999px',
      },
      boxShadow: {
        'hard-sm': '0 4px 0 0 #000000',
        'hard-md': '12px 12px 0 -1px #f6f6f4, 12px 12px 0 0 #000000',
        'mock': '0 16px 0 -8px #f6f6f4, 0 16px 0 -6px #000000',
        'card': '0 8px 32px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle at 1px 1px, #dad8de 1px, transparent 0)',
      }
    }
  }
};
```

---

## 5. W3C DTCG Token Definition (JSON)

```json
{
  "color": {
    "ink": {
      "primary": { "$value": "#000000", "$type": "color" },
      "darkCard": { "$value": "#1a1a1a", "$type": "color" },
      "muted": { "$value": "#aaaaaa", "$type": "color" },
      "faint": { "$value": "#cbcbcb", "$type": "color" }
    },
    "surface": {
      "default": { "$value": "#ffffff", "$type": "color" },
      "cream": { "$value": "#f6f6f4", "$type": "color" },
      "warm": { "$value": "#fff8ef", "$type": "color" },
      "cool": { "$value": "#ebf0f5", "$type": "color" },
      "code": { "$value": "#fafaf8", "$type": "color" }
    },
    "peach": {
      "base": { "$value": "#df9367", "$type": "color" },
      "light": { "$value": "#efc5ac", "$type": "color" },
      "deep": { "$value": "#c97a4c", "$type": "color" },
      "cream": { "$value": "#fff8ef", "$type": "color" }
    },
    "border": {
      "divider": { "$value": "#eeeeee", "$type": "color" },
      "hairline": { "$value": "#e3e3e6", "$type": "color" }
    }
  },
  "typography": {
    "fontFamily": {
      "sans": { "$value": "Instrument Sans, ui-sans-serif, sans-serif", "$type": "fontFamily" },
      "mono": { "$value": "JetBrains Mono, ui-monospace, monospace", "$type": "fontFamily" }
    }
  },
  "border": {
    "width": {
      "standard": { "$value": "1.5px", "$type": "dimension" },
      "heavy": { "$value": "2px", "$type": "dimension" }
    },
    "radius": {
      "pill": { "$value": "999px", "$type": "dimension" },
      "card": { "$value": "16px", "$type": "dimension" },
      "container": { "$value": "24px", "$type": "dimension" }
    }
  }
}
```
