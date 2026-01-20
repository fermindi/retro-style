# Retro Style Design System

Retro/vintage design system inspired by classic computing hardware (mechanical keyboards, beige terminals).

## Installation

```bash
npm install @fermindi/retro-style
```

## Usage

```tsx
// Import styles
import '@fermindi/retro-style/styles';

// Extend Tailwind config
import baseConfig from '@fermindi/retro-style/tailwind';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [baseConfig],
};
```

## Color Palette

- Warm beige backgrounds
- Soft gray text
- Vintage keycap-inspired buttons
- No harsh black/white contrasts

Inspired by classic computing aesthetics.
