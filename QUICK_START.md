# Guia Rápido - VOR Fitness Studio

## Início Rápido (5 minutos)

### 1. Instalar Dependências

```bash
npm install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

### 3. Configurar WhatsApp

Edite `lib/constants.ts`:

```typescript
export const WHATSAPP_NUMBER = "5511999999999"; // SEU NÚMERO AQUI
```

**Formato:** Código do país (55) + DDD (11) + número (999999999)

### 4. Atualizar Informações do Negócio

Em `lib/constants.ts`, atualize:

- Endereço completo
- Telefones
- E-mail
- Horários
- Redes sociais

## Checklist Pré-Produção

- [ ] Configurar número do WhatsApp
- [ ] Atualizar dados de contato
- [ ] Adicionar imagens reais em `/public/vor-studio/`
- [ ] Configurar Google Maps (lib/content.ts)
- [ ] Atualizar coordenadas GPS (components/vor/JsonLd.tsx)
- [ ] Revisar todos os textos
- [ ] Testar todos os CTAs do WhatsApp
- [ ] Testar formulário de contato
- [ ] Rodar `npm run build` e verificar erros
- [ ] Testar performance com Lighthouse
- [ ] Configurar domínio
- [ ] Adicionar Google Analytics (opcional)

## Personalização de Conteúdo

### Textos e Depoimentos

Edite `lib/content.ts`:

```typescript
export const testimonials = [
  {
    name: "Nome do Cliente",
    role: "Profissão",
    content: "Depoimento aqui...",
    avatar: "/vor-studio/avatar-1.jpg",
  },
  // ...
];
```

### Planos e Preços

Em `lib/content.ts`:

```typescript
export const plans = [
  {
    name: "Starter",
    price: "R$ 497",
    features: ["...", "..."],
    // ...
  },
];
```

### FAQ

Em `lib/content.ts`:

```typescript
export const faq = {
  items: [
    {
      question: "Pergunta?",
      answer: "Resposta...",
    },
  ],
};
```

## Adicionar Imagens

### 1. Imagem Open Graph (Compartilhamento)

- Arquivo: `/public/vor-studio/og-image.jpg`
- Tamanho: 1200x630px
- Formato: JPG ou PNG

### 2. Galeria do Studio

- Arquivos: `/public/vor-studio/space-1.jpg` até `space-6.jpg`
- Tamanho recomendado: 1200x900px
- Formato: JPG

Depois de adicionar, descomente em `components/vor/sections/Gallery.tsx`:

```tsx
<Image
  src={image.src}
  alt={image.alt}
  fill
  className="object-cover"
/>
```

### 3. Avatares dos Depoimentos (Opcional)

- Arquivos: `/public/vor-studio/avatar-1.jpg` até `avatar-4.jpg`
- Tamanho: 200x200px
- Formato: JPG

## Configurar Google Maps

### 1. Obter Iframe

1. Acesse [Google Maps](https://www.google.com/maps)
2. Pesquise seu endereço
3. Clique em "Compartilhar" → "Incorporar mapa"
4. Copie o código do iframe

### 2. Adicionar ao Site

Em `app/localizacao/page.tsx`, descomente e cole a URL:

```tsx
<iframe
  src="SUA_URL_AQUI"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

## Build e Deploy

### Build Local

```bash
npm run build
npm start
```

### Deploy Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

Siga as instruções e pronto!

### Deploy Netlify

1. Conecte seu repositório Git
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Deploy!

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar produção localmente
npm start

# Linting
npm run lint
```

## Performance

### Lighthouse Score Target

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Testar Performance

1. Abra Chrome DevTools
2. Aba "Lighthouse"
3. Selecione "Desktop" ou "Mobile"
4. Clique em "Generate report"

## Suporte

### Problemas Comuns

**Erro de build:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Fontes não carregam:**
- Verifique conexão com internet (fontes do Google)
- Limpe cache do navegador

**WhatsApp não abre:**
- Verifique formato do número (sem espaços, hífens ou parênteses)
- Formato correto: `5511999999999`

## Próximos Passos

1. ✅ Site funcionando localmente
2. ⬜ Personalizar conteúdo
3. ⬜ Adicionar imagens
4. ⬜ Configurar domínio
5. ⬜ Deploy em produção
6. ⬜ Testar todos os CTAs
7. ⬜ Adicionar Analytics

---

**Dúvidas?** Consulte o [README.md](README.md) completo.
