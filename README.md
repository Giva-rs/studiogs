# StudioGS — Portfólio

Site de portfólio da StudioGS, desenvolvido com **Astro** + **Tailwind CSS**, hospedado no **GitHub Pages**.

## 🚀 Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
# Acesse http://localhost:4321
```

## 📦 Estrutura do projeto

```
studiogs/
├── src/
│   ├── components/
│   │   ├── Nav.astro        # Navegação (desktop + mobile)
│   │   ├── Hero.astro       # Seção inicial com CTAs e estatísticas
│   │   ├── Services.astro   # Cards de serviços
│   │   ├── Projects.astro   # Grid de projetos/cases ← edite aqui
│   │   ├── About.astro      # Sobre a agência + credenciais ← edite aqui
│   │   ├── Contact.astro    # Formulário de contato (Formspree)
│   │   └── Footer.astro     # Rodapé com redes sociais
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML base, meta tags, SEO
│   ├── pages/
│   │   └── index.astro      # Página principal
│   └── styles/
│       └── global.css       # Tailwind + utilitários customizados
├── public/                  # Imagens, favicon e arquivos estáticos
├── astro.config.mjs         # Configuração do Astro + base path
└── tailwind.config.mjs      # Cores e fontes da StudioGS
```

## ✏️ O que personalizar

### 1. Projetos reais (`src/components/Projects.astro`)
Edite o array `projects` com seus cases reais. Para adicionar imagens:
- Coloque as imagens em `public/images/`
- Substitua `bgClass` por `imgSrc: '/images/seu-projeto.jpg'`

### 2. Credenciais e sobre (`src/components/About.astro`)
Edite os arrays `skills` e `credentials` com suas informações reais.

### 3. Formulário de contato (`src/components/Contact.astro`)
1. Crie uma conta gratuita em [formspree.io](https://formspree.io)
2. Crie um novo formulário
3. Substitua `YOUR_FORM_ID` pelo ID gerado

### 4. Redes sociais (`src/components/Footer.astro`)
Atualize os links do LinkedIn, GitHub e Instagram.

### 5. WhatsApp no contato (`src/components/Contact.astro`)
Atualize o número real do WhatsApp.

## 🌐 Deploy no GitHub Pages

### Configuração inicial (uma vez só)
1. Crie um repositório no GitHub com o nome `studiogs`
2. Em `astro.config.mjs`, confirme que `base: '/studiogs'` bate com o nome do repositório
3. Vá em **Settings → Pages → Source** e selecione **GitHub Actions**
4. Faça o primeiro push para a branch `main`

O GitHub Actions fará o build e deploy automaticamente a cada push.

### URL do site após deploy
```
https://seu-usuario.github.io/studiogs
```

## 🛠 Tecnologias

- [Astro 4](https://astro.build) — Framework de sites estáticos
- [Tailwind CSS 3](https://tailwindcss.com) — Estilização utility-first
- [Formspree](https://formspree.io) — Formulário de contato gratuito
- [GitHub Pages](https://pages.github.com) — Hospedagem gratuita
- [GitHub Actions](https://github.com/features/actions) — CI/CD automático
