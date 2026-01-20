# Retro Style - Guia de Desenvolvimento

## Sobre o Projeto

Design system retro/vintage inspirado em hardware clássico de computação (teclados mecânicos, terminais beige). Publicado via GitHub Packages.

## Estrutura do Projeto

```
retro-style/
├── styles/
│   └── globals.css          # Estilos CSS do design system
├── tailwind.config.js       # Configuração do Tailwind
├── index.js                 # Entry point
├── index.d.ts              # TypeScript definitions
├── package.json
└── .github/workflows/
    └── npm-publish-github-packages.yml
```

## Como Publicar Nova Versão

1. **Atualizar versão no package.json**
   ```bash
   # Edite manualmente ou use npm version
   npm version patch  # 0.1.2 -> 0.1.3
   npm version minor  # 0.1.2 -> 0.2.0
   npm version major  # 0.1.2 -> 1.0.0
   ```

2. **Commitar e pushar**
   ```bash
   git add package.json
   git commit -m "Bump version to X.X.X"
   git push
   ```

3. **Criar tag e release**
   ```bash
   git tag vX.X.X
   git push origin vX.X.X
   gh release create vX.X.X --title "vX.X.X" --notes "Descrição das mudanças"
   ```

O workflow do GitHub Actions vai rodar automaticamente e publicar o pacote.

## Como Instalar o Pacote

1. **Autenticar no GitHub Packages**

   Criar arquivo `.npmrc` no projeto:
   ```
   @fermindi:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```

2. **Instalar**
   ```bash
   npm install @fermindi/retro-style
   ```

## Como Usar

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

## Workflow do GitHub Actions

O arquivo `.github/workflows/npm-publish-github-packages.yml` é acionado quando uma **release é criada**.

**O que ele faz:**
- Checkout do código
- Setup do Node.js 20
- Publica no GitHub Packages usando `npm publish`

**Importante:** Não precisa de `npm ci` ou build porque o pacote só contém CSS e configs (sem dependências para instalar).

## Troubleshooting

### Erro: "npm ci can only install with an existing package-lock.json"

**Causa:** O workflow estava usando `npm ci` mas o projeto não tem `package-lock.json`.

**Solução:** Removido o step de build do workflow, já que não há dependências para instalar.

### Erro ao instalar o pacote

Verifique se:
1. Você está autenticado no GitHub Packages (`.npmrc` configurado)
2. Tem permissões para acessar o pacote
3. O escopo `@fermindi` está configurado corretamente

## Paleta de Cores

- Backgrounds em beige quente
- Texto em cinza suave
- Botões inspirados em keycaps vintage
- Sem contrastes fortes preto/branco

## Peer Dependencies

- `tailwindcss: ^3.4.0`

## Links Úteis

- Repositório: https://github.com/fermindi/retro-style
- Packages: https://github.com/fermindi?tab=packages
- Releases: https://github.com/fermindi/retro-style/releases
