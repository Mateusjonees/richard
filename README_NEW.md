# Dr. Richard Rodrigues - Advogado Especialista

Site oficial do Dr. Richard Rodrigues, advogado especialista em Direito do Consumidor, Contratos e Ações Judiciais em Recife-PE.

## 🎯 Sobre o Projeto

Este é o site institucional de alta performance e totalmente responsivo do Dr. Richard Rodrigues, desenvolvido para oferecer informações completas sobre serviços jurídicos especializados e facilitar o contato com potenciais clientes.

### 📋 Áreas de Atuação

- **Direito do Consumidor**: Proteção integral dos direitos dos consumidores
  - Produtos defeituosos
  - Serviços inadequados
  - Cobranças indevidas
  - Publicidade enganosa
  
- **Contratos e Negociações**: Elaboração, revisão e negociação de contratos
  - Revisão de contratos comerciais
  - Negociação de dívidas
  - Acordos extrajudiciais
  - Assessoria preventiva
  
- **Ações Judiciais**: Representação legal especializada
  - Ações indenizatórias
  - Danos morais e materiais
  - Execução de títulos
  - Recursos e apelações

## 🚀 Tecnologias Utilizadas

- **React 18.3.1** - Biblioteca moderna para construção de UI
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS** - Framework de CSS utilitário com animations
- **Vite** - Build tool ultra-rápido para desenvolvimento
- **shadcn/ui** - Componentes de interface reutilizáveis e acessíveis
- **React Router v6** - Roteamento avançado
- **React Query** - Gerenciamento de dados assíncrono
- **Sonner** - Notificações toast modernas
- **Lucide React** - Ícones SVG de alta qualidade

## 📱 Recursos Principais

### Componentes & Features
- ✅ **Responsivo** - Mobile-first design, funciona em qualquer dispositivo
- ✅ **Header Sticky** - Navegação persistente durante scroll
- ✅ **Dark/Light Mode** - Tema automático baseado em preferências do sistema
- ✅ **WhatsApp Flutuante** - Widget de contato sempre acessível
- ✅ **Formulário de Contato** - Integrado com WhatsApp API
- ✅ **Breadcrumb Navigation** - Navegação clara em pages internas
- ✅ **Testimonials/Depoimentos** - Avaliações de clientes com estrelas
- ✅ **Footer Completo** - Links, contatos, redes sociais, sitemap
- ✅ **Google Maps Integrado** - Localização do escritório
- ✅ **404 Page Profissional** - Página de erro com navegação clara

### SEO & Performance
- ✅ **Meta Tags Completas** - Open Graph, Twitter Card, Canonical
- ✅ **Schema.org JSON-LD** - Dados estruturados para search engines
- ✅ **FAQ Schema** - Perguntas frequentes indexadas
- ✅ **Sitemap.xml** - Mapa do site para crawlers
- ✅ **Robots.txt** - Configuração de crawl otimizada
- ✅ **Lazy Loading** - Otimização de imagens
- ✅ **CSS-in-JS** - Otimização automática de estilos

## 💻 Desenvolvimento Local

### Pré-requisitos
- Node.js 16+ ou Bun
- npm ou yarn instalado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Mateusjonees/richard.git
cd richard

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:5173
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de dev com hot reload

# Build & Deploy
npm run build        # Build otimizado para produção
npm run build:dev    # Build em modo desenvolvimento

# Qualidade de Código
npm run lint         # Verifica problemas com ESLint

# Preview
npm run preview      # Visualiza build de produção localmente
```

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── components/           # Componentes React reutilizáveis
│   │   ├── ui/              # Componentes shadcn/ui
│   │   ├── Footer.tsx       # Footer do site
│   │   ├── Testimonials.tsx # Seção de depoimentos
│   │   ├── ContactForm.tsx  # Formulário de contato
│   │   ├── PageBreadcrumb.tsx # Navegação breadcrumb
│   │   ├── FAQSchema.tsx    # Schema estruturado
│   │   └── ...
│   ├── pages/               # Páginas principais
│   │   ├── Index.tsx        # Homepage
│   │   ├── DireitoConsumidor.tsx
│   │   ├── ContratosNegociacoes.tsx
│   │   ├── AcoesJudiciais.tsx
│   │   └── NotFound.tsx
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilitários e helpers
│   ├── assets/              # Imagens e mídia
│   ├── App.tsx              # Componente raiz
│   ├── App.css              # Estilos globais
│   └── main.tsx             # Entry point
│
├── public/
│   ├── sitemap.xml          # Mapa do site para SEO
│   ├── robots.txt           # Configuração de crawl
│   ├── schema.json          # Schema estruturado JSON-LD
│   └── lovable-uploads/     # Imagens otimizadas
│
├── index.html               # HTML principal
├── vite.config.ts           # Configuração Vite
├── tailwind.config.ts       # Configuração Tailwind CSS
├── tsconfig.json            # Configuração TypeScript
└── package.json             # Dependências e scripts
```

## 🌐 Deploy

O projeto está configurado para deploy automático. Opções recomendadas:

### Vercel (Recomendado)
```bash
# Instale Vercel CLI
npm i -g vercel

# Faça deploy
vercel
```

### Netlify
Conecte seu repositório GitHub e Netlify fará deploy automático a cada push.

### GitHub Pages
Configure em Settings > Pages para fazer deploy automático.

## 📞 Contato & Redes Sociais

**Dr. Richard Rodrigues**
- 📱 WhatsApp: (81) 99977-7157
- 📧 Email: contato@drrichardrodrigues.com
- 📍 Localização: R. do Imperador Pedro II, 346 - Santo Antônio, Recife - PE, 50010-240
- 🔗 Instagram: [@richardrodrigues.adv](https://www.instagram.com/richardrodrigues.adv)
- 🔗 LinkedIn: [Dr. Richard Rodrigues](https://www.linkedin.com/in/richard-rodrigues-6022a0269)
- ⚖️ OAB/PE: Registro Ativo

## 📊 SEO & Performance

### Score de SEO
- 🟢 Meta tags completas
- 🟢 Mobile-friendly
- 🟢 Schema.org implementado
- 🟢 Sitemap.xml presente
- 🟢 Performance otimizada
- 🟢 HTTPS ready

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔐 Segurança

- ✅ Proteção contra XSS
- ✅ CSRF tokens
- ✅ Headers de segurança otimizados
- ✅ Validação de formulários
- ✅ Dados sensíveis protegidos

## 📝 Licença

© 2024 Dr. Richard Rodrigues. Todos os direitos reservados.

## 👨‍💼 Desenvolvedor

Desenvolvido com ❤️ para proporcionar a melhor experiência jurídica.

---

**Última atualização:** Dezembro 2024
**Versão:** 1.0.0
