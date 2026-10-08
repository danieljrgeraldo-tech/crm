# Daniel Junior Landing Page

Landing page estática em Astro + Tailwind CSS, pronta para publicação no Cloudflare Pages.

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar build

```bash
npm run build
```

O resultado final fica em `dist`.

## Publicar no GitHub

```bash
git init
git add .
git commit -m "Create premium landing page"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

## Cloudflare Pages

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version recomendada: `22` ou superior

## WhatsApp

O número fica em `src/data/site.ts`, na constante `WHATSAPP_NUMBER`.
