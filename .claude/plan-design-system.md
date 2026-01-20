# Plano: Transformar retro-style em um Design System Completo

## Estado Atual

O que você tem hoje é um **Style Guide / Theme Package** - não um Design System.

```
Hoje: CSS Variables + Tailwind Config = "Foundations básicas"
```

**O que falta:**
- Tokens estruturados e versionados
- Componentes reutilizáveis
- Documentação interativa
- Testes de acessibilidade
- Guidelines de uso

---

## Expandindo seu Conhecimento: O que é um Design System de Verdade?

### Os 3 Pilares (Detalhados)

#### 1. Design Tokens (Foundations)

Tokens são **decisões de design transformadas em dados**. Não são apenas cores - são:

```
├── Colors
│   ├── Primitives (raw values): gray-100, gray-200, beige-warm
│   ├── Semantic (meaning): background, foreground, border
│   └── Component (specific): button-bg, input-border, card-shadow
│
├── Typography
│   ├── Font families
│   ├── Font sizes (scale)
│   ├── Line heights
│   ├── Font weights
│   └── Letter spacing
│
├── Spacing
│   ├── Base unit (4px, 8px)
│   └── Scale (xs, sm, md, lg, xl, 2xl...)
│
├── Border Radius
│   └── Scale (none, sm, md, lg, full)
│
├── Shadows
│   └── Elevations (none, sm, md, lg)
│
├── Z-Index
│   └── Layers (base, dropdown, modal, toast)
│
├── Motion/Animation
│   ├── Durations
│   ├── Easings
│   └── Transitions
│
└── Breakpoints
    └── Screen sizes (sm, md, lg, xl)
```

**Formato ideal:** JSON/YAML → compilado para CSS vars, Tailwind, JS/TS, iOS, Android.

Ferramentas: Style Dictionary, Tokens Studio, Figma Variables.

#### 2. Component Library

Componentes não são só "divs estilizadas". Um componente bem feito tem:

```typescript
// Exemplo: Anatomia de um Button bem construído

interface ButtonProps {
  // Variantes visuais
  variant: 'primary' | 'secondary' | 'ghost' | 'danger';
  size: 'sm' | 'md' | 'lg';

  // Estados
  disabled?: boolean;
  loading?: boolean;

  // Composição
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  // Acessibilidade
  'aria-label'?: string;
}

// Deve incluir:
// - Estilos base
// - Variantes (variant prop)
// - Estados (:hover, :focus, :active, :disabled, [data-loading])
// - Focus ring para acessibilidade
// - Keyboard navigation
// - Forwarded refs
// - Composable (slots, children)
```

**Componentes essenciais para um DS mínimo:**

```
Primitives (baixo nível):
├── Button
├── Input
├── Textarea
├── Select
├── Checkbox
├── Radio
├── Switch
├── Label
└── Link

Layout:
├── Box (div com props de estilo)
├── Flex
├── Grid
├── Stack (vertical/horizontal spacing)
├── Container
└── Divider

Feedback:
├── Spinner/Loader
├── Toast/Notification
├── Alert
├── Badge
└── Progress

Overlay:
├── Modal/Dialog
├── Drawer
├── Tooltip
├── Popover
└── Dropdown Menu

Data Display:
├── Card
├── Table
├── Avatar
├── Tag/Chip
└── Accordion

Navigation:
├── Tabs
├── Breadcrumb
├── Pagination
└── Navbar (opcional)
```

#### 3. Documentação

Não é só "como usar". Uma boa documentação inclui:

- **Princípios de design**: Por que escolhemos essas cores? Qual a filosofia?
- **Quando usar**: "Use o Button primary para a ação principal da página"
- **Quando NÃO usar**: "Não use Toast para erros críticos que bloqueiam ação"
- **Exemplos interativos**: Playground para testar variantes
- **Código copyable**: Snippets prontos
- **Acessibilidade**: WCAG compliance, keyboard navigation
- **Changelog**: O que mudou em cada versão

---

## Arquitetura Proposta para o retro-style

### Estrutura do Monorepo

```
retro-style/
├── packages/
│   ├── tokens/                    # Design Tokens
│   │   ├── src/
│   │   │   ├── colors.json
│   │   │   ├── typography.json
│   │   │   ├── spacing.json
│   │   │   ├── radius.json
│   │   │   └── shadows.json
│   │   ├── dist/
│   │   │   ├── variables.css      # Output: CSS custom properties
│   │   │   ├── tailwind.js        # Output: Tailwind theme extension
│   │   │   └── tokens.ts          # Output: TypeScript constants
│   │   ├── build.js               # Script que compila tokens
│   │   └── package.json           # @fermindi/retro-tokens
│   │
│   ├── ui/                        # Component Library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.styles.ts
│   │   │   │   │   ├── Button.test.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Input/
│   │   │   │   ├── Card/
│   │   │   │   └── ...
│   │   │   ├── hooks/             # useModal, useToast, etc
│   │   │   ├── utils/             # cn(), variants()
│   │   │   └── index.ts           # Barrel export
│   │   ├── package.json           # @fermindi/retro-ui
│   │   └── tsconfig.json
│   │
│   └── tailwind-config/           # Tailwind Preset (standalone)
│       ├── index.js
│       └── package.json           # @fermindi/retro-tailwind
│
├── apps/
│   └── docs/                      # Documentation Site
│       ├── src/
│       │   ├── pages/
│       │   │   ├── foundations/
│       │   │   │   ├── colors.mdx
│       │   │   │   ├── typography.mdx
│       │   │   │   └── spacing.mdx
│       │   │   ├── components/
│       │   │   │   ├── button.mdx
│       │   │   │   └── input.mdx
│       │   │   └── index.mdx
│       │   └── components/        # Demo components
│       ├── package.json
│       └── next.config.js         # ou storybook config
│
├── package.json                   # Root (workspaces)
├── pnpm-workspace.yaml            # Workspace config
├── turbo.json                     # Turborepo (build orchestration)
└── README.md
```

---

## Plano de Execução em Fases

### Fase 1: Estruturar Tokens (Fundação)
**Duração estimada: 1-2 dias**

1. Criar estrutura de monorepo com pnpm workspaces
2. Extrair tokens do CSS atual para JSON estruturado
3. Criar script de build (JSON → CSS vars + Tailwind + TS)
4. Expandir tokens existentes:
   - Adicionar typography scale
   - Adicionar spacing scale
   - Adicionar shadows
   - Adicionar z-index scale
5. Publicar `@fermindi/retro-tokens`

**Deliverable:** Tokens versionados e buildáveis

### Fase 2: Component Library Base
**Duração estimada: 3-5 dias**

1. Setup do pacote `@fermindi/retro-ui`
   - TypeScript
   - React 18+
   - Vitest para testes
   - CVA (Class Variance Authority) para variantes
2. Criar utilitários:
   - `cn()` - class merging
   - Slots/composition patterns
3. Implementar componentes primitivos:
   - Button (com todas as variantes)
   - Input
   - Textarea
   - Select
   - Checkbox
   - Label
4. Implementar componentes de layout:
   - Stack
   - Card
5. Testes de acessibilidade básicos

**Deliverable:** Pacote npm instalável com 10+ componentes

### Fase 3: Documentação
**Duração estimada: 2-3 dias**

1. Setup Storybook ou site Next.js com MDX
2. Documentar:
   - Design principles (filosofia retro)
   - Color palette com exemplos
   - Typography scale
   - Cada componente com playground
3. Deploy (Vercel/Netlify)

**Deliverable:** Site de documentação público

### Fase 4: Componentes Avançados
**Duração estimada: ongoing**

1. Modal/Dialog
2. Toast system
3. Dropdown Menu
4. Tabs
5. Table
6. Form validation integration

### Fase 5: Polish & DX
**Duração estimada: ongoing**

1. Figma library sync (opcional)
2. CLI para scaffolding
3. VS Code snippets
4. ESLint plugin (opcional)
5. Changelog automatizado

---

## Decisões Técnicas Recomendadas

### Stack para Componentes

| Aspecto | Recomendação | Por quê |
|---------|--------------|---------|
| Framework | React 18+ | Mais adotado, hooks maduros |
| Styling | Tailwind + CVA | Já usa Tailwind, CVA adiciona type-safe variants |
| Build | tsup | Simples, gera ESM + CJS |
| Testes | Vitest + Testing Library | Rápido, boa DX |
| Docs | Storybook 8 | Padrão da indústria |
| Monorepo | pnpm + Turborepo | Performance + caching |

### Alternativas Consideradas

- **Vanilla Extract**: Mais type-safe, mas curva de aprendizado maior
- **Radix UI Primitives**: Excelente base para acessibilidade, pode usar como dependência
- **Nextra**: Alternativa mais simples ao Storybook para docs

---

## Priorização: MVP vs Ideal

### MVP (Mínimo Viável)
Para considerar um "Design System" real:

- [ ] Tokens estruturados em JSON
- [ ] 5 componentes primitivos (Button, Input, Card, Badge, Stack)
- [ ] Documentação básica (README expandido ou 1 página)
- [ ] TypeScript definitions
- [ ] Testes básicos

### Ideal (Completo)
- [ ] 20+ componentes
- [ ] Site de docs completo
- [ ] Figma library
- [ ] Temas (light/dark ou variações retro)
- [ ] Métricas de uso
- [ ] Contribuição guidelines

---

## Compatibilidade com o Atual

O pacote atual `@fermindi/retro-style` pode:

1. **Ser deprecado** em favor dos novos pacotes
2. **Ser mantido** como "quick start" que re-exporta tokens + CSS
3. **Evoluir** para ser o pacote principal que agrega tudo

Recomendação: **Opção 3** - manter como meta-pacote:

```json
{
  "name": "@fermindi/retro-style",
  "dependencies": {
    "@fermindi/retro-tokens": "workspace:*",
    "@fermindi/retro-ui": "workspace:*"
  }
}
```

---

## Próximos Passos Imediatos

1. **Decisão**: Quer começar pela Fase 1 (Tokens) ou prefere priorizar componentes?
2. **Decisão**: React only ou também Vue/Svelte/vanilla?
3. **Decisão**: Usar Radix Primitives como base ou construir do zero?

---

## Referências de Design Systems Maduros

Para estudar:

1. **Shadcn/ui** - Approach de copy-paste, muito popular
2. **Radix Themes** - Construído sobre primitives acessíveis
3. **Chakra UI** - Boa DX, bem documentado
4. **Mantine** - Feature-complete, boa referência
5. **IBM Carbon** - Enterprise, muito completo
6. **Atlassian Design System** - Guidelines extensivos

Para o estilo retro especificamente:
- **98.css** - Windows 98 aesthetic
- **NES.css** - Nintendo style
- **PSone.css** - PlayStation 1 style
