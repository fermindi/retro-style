import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--colors-semantic-background)',
        foreground: 'var(--colors-semantic-foreground)',
        border: 'var(--colors-semantic-border)',
        input: 'var(--colors-semantic-input)',
        ring: 'var(--colors-semantic-ring)',
        muted: 'var(--colors-semantic-muted)',
        'muted-foreground': 'var(--colors-semantic-muted-foreground)',
        accent: 'var(--colors-semantic-accent)',
        'accent-foreground': 'var(--colors-semantic-accent-foreground)',
        card: 'var(--colors-semantic-card)',
        'card-foreground': 'var(--colors-semantic-card-foreground)',
        destructive: 'var(--colors-semantic-destructive)',
        'destructive-foreground': 'var(--colors-semantic-destructive-foreground)',
      },
      fontFamily: {
        mono: ['var(--typography-fontFamily-mono)', 'Courier New', 'monospace'],
        sans: ['var(--typography-fontFamily-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        inset: 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
