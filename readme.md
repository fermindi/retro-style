# Retro Style Design System

Retro/vintage design system inspired by classic computing hardware (mechanical keyboards, beige terminals).

## Installation

```bash
npm install @fermindi/retro-style
```

## Usage

### Option 1: Full Import (with @tailwind directives)

```tsx
// Import everything (includes @tailwind directives)
import '@fermindi/retro-style/styles';

// Extend Tailwind config
import baseConfig from '@fermindi/retro-style/tailwind';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [baseConfig],
};
```

### Option 2: Modular Import (recommended for Next.js)

```tsx
// In your globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// Import only what you need
@import '@fermindi/retro-style/styles/variables';
@import '@fermindi/retro-style/styles/base';
```

```js
// tailwind.config.js
const retroPreset = require('@fermindi/retro-style/tailwind');

module.exports = {
  presets: [retroPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

## Color Palette

- Warm beige backgrounds
- Soft gray text
- Vintage keycap-inspired buttons
- No harsh black/white contrasts

Inspired by classic computing aesthetics.
