# 🚀 Deployment Guide

Guida al deployment della landing page Otherwise su diverse piattaforme.

## Vercel (Consigliato)

Landing page per **Otherwise Ferrara** - Palestra CrossFit.

### Setup rapido
1. Crea un account su [Vercel](https://vercel.com)
2. Installa Vercel CLI:
```bash
npm i -g vercel
```

3. Deploy da CLI:
```bash
vercel
```

### Deploy da GitHub
1. Fai push del codice su GitHub
2. Importa il progetto su Vercel dal dashboard
3. Vercel rileverà automaticamente Next.js e configurerà il build

### Variabili d'ambiente
Configura eventuali variabili nel dashboard Vercel:
- `NEXT_PUBLIC_SITE_URL` - URL del sito
- Email service API keys (se usi un servizio per il form)

## Netlify

```bash
npm run build
```

Carica la cartella `.next` su Netlify con le seguenti impostazioni:
- Build command: `npm run build`
- Publish directory: `.next`
- Framework preset: Next.js

## Self-Hosting

### Build
```bash
npm run build
```

### Avvia in produzione
```bash
npm start
```

Il sito sarà disponibile su `localhost:3000`

### Con PM2
```bash
npm install -g pm2
pm2 start npm --name "otherwise-landing" -- start
pm2 save
pm2 startup
```

## Docker

```dockerfile
# Dockerfile esempio
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build e run:
```bash
docker build -t otherwise-landing .
docker run -p 3000:3000 otherwise-landing
```

## Ottimizzazioni Pre-Deploy

### 1. Comprimi immagini
Se aggiungi immagini, usa formati moderni (WebP, AVIF)

### 2. Analytics
Aggiungi Google Analytics o Plausible in `app/layout.tsx`

### 3. Form Backend
Integra il form con:
- [Formspree](https://formspree.io)
- [Web3Forms](https://web3forms.com)
- EmailJS
- API custom

### 4. SEO
- Aggiorna meta tags in `app/layout.tsx`
- Crea `app/sitemap.ts` per sitemap dinamica
- Verifica Open Graph images

## SSL/HTTPS
Vercel e Netlify forniscono SSL automaticamente. 
Per self-hosting, usa Let's Encrypt con Certbot.

## Performance Checklist
- ✅ Lighthouse score > 90
- ✅ First Contentful Paint < 1.8s
- ✅ Time to Interactive < 3.8s
- ✅ Cumulative Layout Shift < 0.1

## Post-Deploy
1. Testa tutte le animazioni
2. Verifica form su mobile
3. Controlla GTmetrix/PageSpeed Insights
4. Setup Google Search Console
5. Abilita monitoring (Sentry, LogRocket, etc.)

---

Per supporto: info@otherwise.it

