# Retro Style - Design System

## Sobre o Projeto

Design system retro/vintage completo com tokens estruturados, componentes React e documentacao.

## Estrutura do Monorepo

```
retro-style/
├── packages/
│   ├── tokens/           # @fermindi/retro-tokens
│   │   ├── src/          # JSON tokens (colors, typography, spacing, etc)
│   │   ├── build.js      # Build script (JSON → CSS + Tailwind + TS)
│   │   └── dist/         # Generated outputs
│   │
│   └── ui/               # @fermindi/retro-ui
│       ├── src/
│       │   ├── components/
│       │   │   ├── Button/
│       │   │   ├── Input/
│       │   │   ├── Card/
│       │   │   └── ...
│       │   └── lib/utils.ts
│       └── tsup.config.ts
│
├── apps/
│   └── docs/             # Next.js 15 documentation site
│
├── pnpm-workspace.yaml   # Workspace config
├── turbo.json           # Turborepo config
└── package.json         # Root package
```

## Comandos

```bash
# Instalar dependencias
pnpm install

# Build de todos os pacotes
pnpm build

# Build apenas tokens
pnpm --filter @fermindi/retro-tokens build

# Build apenas UI
pnpm --filter @fermindi/retro-ui build

# Dev do docs
pnpm --filter docs dev
```

## Como Publicar

### Tokens
```bash
cd packages/tokens
pnpm build
npm publish
```

### UI
```bash
cd packages/ui
pnpm build
npm publish
```

## Componentes Disponiveis

1. Button - Variantes: default, primary, secondary, ghost, link, destructive
2. Input - Com error state e sizes
3. Label - Para forms
4. Textarea - Multi-line
5. Card - Com Header, Content, Footer
6. Badge - Status indicators
7. Checkbox - Toggle
8. Select - Dropdown
9. Dialog - Modals
10. DropdownMenu - Context menus
11. Separator - Dividers

## Design Tokens

Os tokens estao em `packages/tokens/src/`:
- colors.json - Cores primitivas e semanticas
- typography.json - Fontes, tamanhos, pesos
- spacing.json - Escala de espacamento
- radius.json - Border radius
- shadows.json - Sombras
- animation.json - Durations e easings

O build script gera:
- `dist/variables.css` - CSS custom properties
- `dist/tailwind.config.js` - Tailwind preset
- `dist/index.js` - JS module com tokens

## Tech Stack

- React 18/19
- Radix UI Primitives (acessibilidade)
- CVA (Class Variance Authority)
- Tailwind CSS
- tsup (bundling)
- Turborepo (monorepo)
- pnpm (package manager)

## Estilo Visual

- Base retro: beige, Courier New, bordas simples
- Toques modernos: focus rings, transicoes suaves (150-200ms)
- Sem sombras pesadas
- Full acessibilidade

## Workflow do GitHub Actions

O arquivo `.github/workflows/npm-publish.yml` e acionado quando uma **release e criada**.

Para publicar:
1. Atualizar versoes nos package.json de cada pacote
2. Fazer commit e push
3. Criar tag e release no GitHub
4. O workflow publicara automaticamente

## Links

- Repositorio: https://github.com/fermindi/retro-style
- npm tokens: https://www.npmjs.com/package/@fermindi/retro-tokens
- npm ui: https://www.npmjs.com/package/@fermindi/retro-ui
