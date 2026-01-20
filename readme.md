# Retro Style Design System

A complete design system inspired by classic computing hardware - mechanical keyboards, beige terminals, and early computing aesthetics.

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| `@fermindi/retro-tokens` | Design tokens (colors, typography, spacing) | 0.1.0 |
| `@fermindi/retro-ui` | React component library | 0.1.0 |

## Installation

```bash
# Install both packages
npm install @fermindi/retro-tokens @fermindi/retro-ui

# Or with pnpm
pnpm add @fermindi/retro-tokens @fermindi/retro-ui
```

## Quick Start

### 1. Import CSS tokens

```css
/* In your globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import '@fermindi/retro-tokens/css';
```

### 2. Configure Tailwind

```js
// tailwind.config.js
import retroConfig from '@fermindi/retro-tokens/tailwind';

export default {
  presets: [retroConfig],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@fermindi/retro-ui/**/*.{js,ts,jsx,tsx}',
  ],
};
```

### 3. Use Components

```tsx
import { Button, Card, Input } from '@fermindi/retro-ui';

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## Components

The `@fermindi/retro-ui` package includes:

- **Button** - Multiple variants (default, primary, ghost, link, destructive)
- **Input** - Text input with error states
- **Textarea** - Multi-line text input
- **Label** - Form labels
- **Card** - Container with header, content, and footer
- **Badge** - Status indicators
- **Checkbox** - Toggle input
- **Select** - Dropdown selection
- **Dialog** - Modal dialogs
- **DropdownMenu** - Context menus
- **Separator** - Visual dividers

## Design Philosophy

- **Warm beige backgrounds** instead of harsh whites
- **Soft gray text** for reduced eye strain
- **Monospace typography** (Courier New) for authentic retro feel
- **Minimal border radius** - boxy, retro aesthetic
- **Subtle transitions** for modern usability
- **Full accessibility** - focus rings, keyboard navigation, ARIA

## Development

This is a monorepo using pnpm workspaces and Turborepo.

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run docs site
pnpm --filter docs dev
```

## Structure

```
retro-style/
├── packages/
│   ├── tokens/     # @fermindi/retro-tokens
│   └── ui/         # @fermindi/retro-ui
├── apps/
│   └── docs/       # Documentation site
└── package.json    # Root workspace
```

## Links

- [Documentation](https://retro-style.vercel.app) (coming soon)
- [GitHub](https://github.com/fermindi/retro-style)
- [npm - tokens](https://www.npmjs.com/package/@fermindi/retro-tokens)
- [npm - ui](https://www.npmjs.com/package/@fermindi/retro-ui)

## License

MIT
