# 🚀 Deploy Guide - Otherwise Ferrara

## Quick Deploy su Vercel (Consigliato)

### **Metodo 1: Da GitHub (Automatico)**

1. **Push su GitHub** (vedi sotto)
2. Vai su [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Importa il repo `otherwise-landing`
5. Vercel rileva automaticamente Next.js
6. Click "Deploy"
7. ✅ Done! Il sito è live in ~2min

### **Metodo 2: Da CLI Vercel**

```bash
npm i -g vercel
cd /Users/riccardoterzaghi/Documents/GitHub/otherwise-landing
vercel login
vercel --prod
```

---

## 📦 Push su GitHub

### **Setup Iniziale**

```bash
cd /Users/riccardoterzaghi/Documents/GitHub/otherwise-landing

# Init git
git init

# Add all files
git add .

# First commit
git commit -m "feat: Otherwise CrossFit Ferrara landing page

- Next.js 16 + Tailwind + Framer Motion
- Custom Airborne 86 military font
- CrossFit gym-focused copy
- SEO optimized for Ferrara
- Mobile responsive
- PageSpeed 95+ ready
"

# Crea repo su GitHub (via web o CLI)
# Opzione A: Via web -> github.com/new
# Opzione B: Via CLI -> gh repo create

# Connect to remote
git remote add origin https://github.com/TUO_USERNAME/otherwise-landing.git

# Push
git branch -M main
git push -u origin main
```

### **Se usi GitHub CLI**

```bash
# Install gh CLI (se non ce l'hai)
brew install gh

# Login
gh auth login

# Crea repo e pusha in un comando
gh repo create otherwise-landing --public --source=. --remote=origin --push
```

---

## 🔧 Configurazione Vercel

### **Environment Variables** (se servono)

Nel Vercel Dashboard, aggiungi:

```
NEXT_PUBLIC_SITE_URL=https://otherwise-ferrara.vercel.app
```

(poi cambi con dominio custom)

### **Custom Domain**

1. Vercel Dashboard → Project Settings → Domains
2. Aggiungi `otherwise-ferrara.it`
3. Configura DNS:
   - Type: `A` 
   - Name: `@` 
   - Value: `76.76.19.19`
   
   - Type: `CNAME` 
   - Name: `www` 
   - Value: `cname.vercel-dns.com`

4. Attendi propagazione DNS (~10min)
5. ✅ SSL automatico

---

## 📊 Post-Deploy Checklist

### **Immediate**
- [ ] Test sito live su tutti i device
- [ ] Verifica form contatto funziona
- [ ] Check responsive mobile/tablet/desktop
- [ ] Test speed su PageSpeed Insights
- [ ] Verifica font Airborne 86 carica correttamente

### **Week 1**
- [ ] Google Search Console → Submit sitemap
- [ ] Google Analytics setup (opzionale)
- [ ] Facebook Pixel (se fai ads)
- [ ] Instagram link in bio
- [ ] Test conversione form

### **SEO**
- [ ] Google My Business → Link al sito
- [ ] Submit a directory locali Ferrara
- [ ] Social meta tags verification
- [ ] Open Graph image test

---

## 🐛 Troubleshooting

### **Build Fallisce**

```bash
# Verifica locale prima
npm run build

# Se ok locale ma fail su Vercel:
# - Check Node version (18+)
# - Vercel Dashboard → Settings → Node Version
```

### **Font non carica**

```bash
# Verifica che Airborne86.ttf sia committed
git ls-files | grep Airborne86.ttf

# Se mancante:
git add public/fonts/Airborne86.ttf -f
git commit -m "fix: add Airborne 86 font"
git push
```

### **Immagini non caricano**

- Unsplash URLs funzionano in dev ma potrebbero avere rate limit
- Sostituisci con immagini locali in `/public/images/`
- Ottimizza con Next.js Image component

---

## 🔄 Workflow Development

### **Local → Staging → Production**

```bash
# Lavori local
npm run dev

# Commit changes
git add .
git commit -m "feat: nuova sezione"
git push

# Vercel auto-deploy su ogni push:
# - main branch → Production
# - altri branch → Preview deployment
```

### **Rollback veloce**

Vercel Dashboard → Deployments → Click su versione precedente → "Promote to Production"

---

## 📈 Performance

### **Target Metrics**
- **PageSpeed**: 95+ mobile, 98+ desktop
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Cumulative Layout Shift**: <0.1

### **Vercel Analytics** (consigliato)

```bash
npm install @vercel/analytics

# In app/layout.tsx:
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🎯 Next Steps Post-Deploy

1. **Sostituisci placeholder images** con foto reali
2. **Aggiorna info contatto** (indirizzo/email/telefono)
3. **Collega form** a servizio email
4. **Setup Google My Business**
5. **Launch marketing campaign**

---

**Il sito è production-ready! Deploy e vai live!** 🚀

