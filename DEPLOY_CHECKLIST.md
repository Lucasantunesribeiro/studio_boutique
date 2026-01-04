# Checklist de Deploy - VOR Fitness Studio

## Pré-Deploy (Desenvolvimento)

### Configurações Essenciais

- [ ] **WhatsApp configurado** (`lib/constants.ts`)
  - Número no formato: `5511999999999`
  - Testado em dispositivo mobile

- [ ] **Dados de contato atualizados** (`lib/constants.ts`)
  - Endereço completo e correto
  - Telefone e e-mail atualizados
  - Horários de funcionamento corretos
  - Links de redes sociais funcionando

- [ ] **SEO configurado** (`lib/constants.ts`)
  - URL do site definida
  - Código de verificação do Google (se aplicável)
  - Keywords relevantes

### Conteúdo

- [ ] **Textos revisados** (`lib/content.ts`)
  - Hero section
  - Descrições dos planos
  - Depoimentos (nomes e conteúdo)
  - FAQ completo
  - Seção "Experiência"

- [ ] **Preços atualizados** (`lib/content.ts`)
  - Valores dos planos corretos
  - Formas de pagamento atualizadas
  - Políticas de cancelamento

### Imagens

- [ ] **Open Graph** (`/public/vor-studio/og-image.jpg`)
  - 1200x630px
  - Otimizada (< 200kb)

- [ ] **Galeria** (`/public/vor-studio/space-*.jpg`)
  - 6 fotos do studio
  - 1200x900px recomendado
  - Otimizadas (< 300kb cada)
  - Descomentado em `Gallery.tsx`

- [ ] **Avatares** (opcional) (`/public/vor-studio/avatar-*.jpg`)
  - 200x200px
  - Circular ou quadrado

- [ ] **Favicon** (`/public/favicon.ico`)
  - 32x32px ou 64x64px

### Mapas e Localização

- [ ] **Google Maps iframe** (`app/localizacao/page.tsx`)
  - URL do iframe configurada
  - Código descomentado

- [ ] **Coordenadas GPS** (`components/vor/JsonLd.tsx`)
  - Latitude e longitude corretas
  - Testadas no Google Maps

### Testes Funcionais

- [ ] **Navegação**
  - Todos os links funcionando
  - Menu mobile abrindo/fechando
  - Scroll suave entre seções

- [ ] **CTAs do WhatsApp**
  - Botão do Hero abre WhatsApp
  - CTA em "Planos" funciona
  - CTA Final funciona
  - Formulário de contato envia para WhatsApp
  - Mensagens pré-preenchidas corretas

- [ ] **Formulários**
  - Campos obrigatórios validando
  - Mensagem montada corretamente
  - Redirecionamento para WhatsApp funciona

- [ ] **Responsividade**
  - Testado em mobile (< 768px)
  - Testado em tablet (768-1024px)
  - Testado em desktop (> 1024px)

### Performance e SEO

- [ ] **Lighthouse**
  - Performance > 90
  - Accessibility = 100
  - Best Practices > 95
  - SEO = 100

- [ ] **Core Web Vitals**
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

- [ ] **Build sem erros**
  ```bash
  npm run build
  ```

- [ ] **TypeScript sem erros**
  ```bash
  npm run lint
  ```

## Deploy em Produção

### Vercel

- [ ] Instalar Vercel CLI: `npm i -g vercel`
- [ ] Fazer login: `vercel login`
- [ ] Deploy: `vercel --prod`
- [ ] Configurar domínio customizado
- [ ] Testar URL de produção

### Netlify

- [ ] Conectar repositório Git
- [ ] Configurar build:
  - Build command: `npm run build`
  - Publish directory: `.next`
- [ ] Adicionar variáveis de ambiente (se necessário)
- [ ] Deploy automático configurado
- [ ] Configurar domínio customizado

### Outras Plataformas

#### Railway
- [ ] Criar novo projeto
- [ ] Conectar repositório
- [ ] Deploy automático

#### Render
- [ ] Criar Web Service
- [ ] Conectar repositório
- [ ] Build: `npm install && npm run build`
- [ ] Start: `npm start`

## Pós-Deploy

### Verificações Imediatas

- [ ] **Site acessível**
  - URL principal carrega
  - Todas as páginas carregam
  - Sem erros 404

- [ ] **SEO**
  - Meta tags aparecendo (view source)
  - Open Graph funcionando (test: https://www.opengraph.xyz/)
  - Twitter Cards funcionando

- [ ] **Funcionalidades**
  - CTAs do WhatsApp funcionam em produção
  - Links de redes sociais corretos
  - Formulários funcionando

### Google Search Console

- [ ] Adicionar propriedade
- [ ] Verificar propriedade
- [ ] Enviar sitemap: `https://seusite.com.br/sitemap.xml`
- [ ] Verificar indexação

### Analytics (Opcional)

- [ ] Google Analytics configurado
- [ ] Google Tag Manager (se aplicável)
- [ ] Eventos de conversão configurados
- [ ] Testando tracking

### Performance em Produção

- [ ] PageSpeed Insights
  - https://pagespeed.web.dev/
  - Desktop > 90
  - Mobile > 85

- [ ] GTmetrix
  - https://gtmetrix.com/
  - Grade A
  - Tempos de carregamento < 2s

### Monitoramento

- [ ] Configurar uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configurar alertas de downtime
- [ ] Revisar logs de erro (Vercel/Netlify dashboard)

## Checklist de Marketing

### Divulgação

- [ ] Atualizar redes sociais com novo site
- [ ] Enviar e-mail para base de clientes
- [ ] Atualizar Google Meu Negócio
- [ ] Atualizar assinatura de e-mail com link

### Conteúdo

- [ ] Blog posts de lançamento (se aplicável)
- [ ] Stories no Instagram sobre o novo site
- [ ] Post no Facebook/Instagram

## Manutenção Contínua

### Semanal

- [ ] Verificar tempo de uptime
- [ ] Revisar mensagens do WhatsApp
- [ ] Atualizar horários se necessário

### Mensal

- [ ] Revisar Analytics
- [ ] Atualizar depoimentos
- [ ] Adicionar novas fotos (galeria)
- [ ] Revisar preços e planos

### Trimestral

- [ ] Atualizar dependências: `npm update`
- [ ] Testar performance
- [ ] Revisar conteúdo SEO
- [ ] Adicionar novos FAQs baseado em dúvidas recorrentes

## Troubleshooting

### Site não carrega

1. Verificar status da plataforma (Vercel/Netlify status)
2. Checar domínio e DNS
3. Revisar logs de build
4. Testar build local: `npm run build && npm start`

### WhatsApp não funciona

1. Verificar formato do número (sem espaços/hífens)
2. Testar em dispositivo mobile
3. Verificar se mensagem não tem caracteres especiais problemáticos

### Imagens não aparecem

1. Verificar se arquivos existem em `/public/vor-studio/`
2. Checar nomes dos arquivos (case-sensitive)
3. Verificar se descomentou código do `<Image>` component
4. Limpar cache do navegador

### Erros de build

1. Deletar `.next` e `node_modules`
2. Reinstalar: `npm install`
3. Build novamente: `npm run build`
4. Verificar TypeScript errors: `npm run lint`

---

**Última atualização:** 2025-12-29

**Status:** ✅ Pronto para deploy
