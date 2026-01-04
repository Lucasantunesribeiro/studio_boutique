# VOR Fitness Studio Boutique - Site Premium

Site institucional completo e ultra premium para o VOR Fitness Studio Boutique, com design minimalista, elegante e foco em conversão via WhatsApp.

## Características

- **Design Premium**: Paleta clean (white/cream/black/gold), tipografia sofisticada, muito espaço em branco
- **Conversão Otimizada**: CTAs estratégicos para agendamento via WhatsApp em pontos-chave
- **Performance**: Core Web Vitals otimizados, lazy loading, fontes otimizadas
- **SEO Completo**: Metadata, Open Graph, JSON-LD, sitemap, robots.txt
- **Acessibilidade**: WCAG 2.2, navegação por teclado, foco visível, aria-labels
- **Responsivo**: Mobile-first, testado em todos os breakpoints

## Stack Tecnológica

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript 5.6
- **Estilização**: Tailwind CSS 3.4
- **Componentes**: shadcn/ui + lucide-react
- **Fontes**: Cormorant Garamond (display) + Inter (sans)

## Estrutura do Projeto

```
├── app/
│   ├── layout.tsx           # Layout global + fontes
│   ├── page.tsx             # Home
│   ├── experiencia/         # Página Experiência
│   ├── planos/              # Página Planos
│   ├── localizacao/         # Página Localização
│   ├── contato/             # Página Contato
│   ├── sitemap.ts           # Sitemap dinâmico
│   ├── robots.ts            # Robots.txt
│   ├── manifest.ts          # PWA Manifest
│   └── globals.css          # Estilos globais
├── components/vor/
│   ├── Header.tsx           # Header fixo com menu
│   ├── Footer.tsx           # Footer completo
│   ├── CTAWhatsApp.tsx      # Componente CTA reutilizável
│   ├── JsonLd.tsx           # Schema.org JSON-LD
│   ├── ui/                  # Componentes base (Button, Card)
│   └── sections/            # Seções da Home
│       ├── Hero.tsx
│       ├── StudioIn60.tsx
│       ├── Testimonials.tsx
│       ├── Plans.tsx
│       ├── Schedule.tsx
│       ├── Gallery.tsx
│       ├── FAQ.tsx
│       └── FinalCTA.tsx
├── lib/
│   ├── constants.ts         # Configurações e dados de negócio
│   ├── content.ts           # Todo conteúdo do site
│   └── utils.ts             # Funções auxiliares
└── public/vor-studio/       # Imagens (placeholders)
```

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home com hero, depoimentos, planos, FAQ |
| `/experiencia` | Método VOR, diferenciais, para quem é |
| `/planos` | Planos detalhados, preços, comparação |
| `/localizacao` | Mapa, endereço, transporte, estacionamento |
| `/contato` | Formulário + WhatsApp, contatos diretos |

## Instalação e Execução

### Pré-requisitos

- Node.js 22+ (recomendado)
- npm ou yarn

### Setup

```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Executar produção
npm start
```

O site estará disponível em `http://localhost:3000`

## Configuração

### 1. WhatsApp

Edite `/lib/constants.ts`:

```typescript
export const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número real
```

### 2. Informações do Negócio

Atualize em `/lib/constants.ts`:

- Endereço completo
- Telefone e e-mail
- Horários de funcionamento
- Redes sociais
- Estatísticas (número de alunos, ano de fundação)

### 3. SEO

Atualize em `/lib/constants.ts`:

- URL do site
- Imagem Open Graph
- Código de verificação do Google Search Console

### 4. Imagens

Adicione imagens reais em `/public/vor-studio/`:

- `og-image.jpg` (1200x630px) - Open Graph
- `space-1.jpg` até `space-6.jpg` - Galeria
- `avatar-1.jpg` até `avatar-4.jpg` - Depoimentos (opcional)

Descomente as tags `<Image>` em `components/vor/sections/Gallery.tsx`

### 5. Google Maps

Obtenha o iframe do Google Maps e substitua em:

- `/lib/content.ts` → `locationContent.address.mapUrl`
- `/app/localizacao/page.tsx` → Descomente o iframe

### 6. Coordenadas GPS

Atualize em `/components/vor/JsonLd.tsx`:

```typescript
geo: {
  "@type": "GeoCoordinates",
  latitude: "-23.5629",  // Latitude real
  longitude: "-46.6873", // Longitude real
}
```

## Conteúdo Editável

Todo conteúdo está centralizado em `/lib/content.ts`:

- Textos do hero
- Depoimentos
- Planos e preços
- Perguntas frequentes
- Horários
- Informações de localização

## Componentes Principais

### CTAWhatsApp

Componente reutilizável para CTAs do WhatsApp:

```tsx
<CTAWhatsApp
  message="Mensagem personalizada"
  variant="gold" // default | gold | outline
  size="lg"      // default | lg | sm
/>
```

### Seções da Home

Todas modulares e reutilizáveis:

- `Hero` - Acima da dobra com CTA principal
- `StudioIn60` - 3 blocos de diferenciais
- `Testimonials` - 4 depoimentos em cards
- `Plans` - 3 planos com destaque
- `Schedule` - Horários por turno
- `Gallery` - Galeria editorial 2x3
- `FAQ` - Accordion interativo
- `FinalCTA` - Último apelo à conversão

## SEO e Performance

### Otimizações Implementadas

- [x] Metadata completa (title, description, keywords)
- [x] Open Graph e Twitter Cards
- [x] JSON-LD para LocalBusiness
- [x] Sitemap dinâmico
- [x] Robots.txt
- [x] Canonical URLs automáticos
- [x] Web manifest (PWA-ready)
- [x] Fontes otimizadas (next/font)
- [x] Imagens responsivas (placeholder enquanto carrega)

### Lighthouse Targets

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Acessibilidade

- Navegação por teclado completa
- Focus visível em todos os elementos interativos
- Aria-labels em ícones decorativos
- Contraste WCAG AAA
- Textos alternativos em imagens
- Semântica HTML correta

## Próximos Passos (Produção)

1. [ ] Adicionar imagens reais
2. [ ] Configurar domínio e SSL
3. [ ] Configurar Google Analytics
4. [ ] Adicionar Google Tag Manager
5. [ ] Testar formulários de contato
6. [ ] Configurar e-mail marketing (opcional)
7. [ ] Adicionar chatbot (opcional)
8. [ ] Implementar blog (opcional)

## Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy manual ou conecte o repositório Git
```

### Outras plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:

- Railway
- Render
- AWS Amplify
- DigitalOcean App Platform

## Suporte e Manutenção

### Atualizar Conteúdo

Todo conteúdo está em arquivos TypeScript para facilitar:

- `/lib/content.ts` - Textos, depoimentos, FAQs
- `/lib/constants.ts` - Dados de negócio

### Adicionar Nova Página

1. Criar pasta em `/app/nome-da-pagina/`
2. Criar `page.tsx` com metadata
3. Adicionar link em `/lib/constants.ts` (NAV_LINKS)
4. Atualizar `/app/sitemap.ts`

### Adicionar Nova Seção

1. Criar componente em `/components/vor/sections/`
2. Importar e usar em `/app/page.tsx`
3. Adicionar conteúdo em `/lib/content.ts`

## Licença

Projeto proprietário - VOR Fitness Studio Boutique © 2025

---

**Desenvolvido com Next.js 15 + TypeScript + Tailwind CSS**

Para dúvidas técnicas, consulte a documentação:
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
