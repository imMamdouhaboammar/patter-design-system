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
