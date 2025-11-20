# 🚀 Deploy su Vercel - Otherwise Ferrara

## ✅ Repo GitHub Pronto

```
Repository: https://github.com/richterzo/otherwise-landing
Branch: main
Status: ✅ Pushed
```

---

## 🚀 Opzione 1: Deploy da Web (Consigliato - 2 minuti)

### **Step by Step**

1. **Vai su Vercel**
   - [vercel.com/new](https://vercel.com/new)
   - Login con GitHub (se non già fatto)

2. **Importa Repository**
   - Click "Import Git Repository"
   - Cerca `otherwise-landing`
   - Click "Import"

3. **Configurazione Auto**
   - Vercel rileva Next.js automaticamente ✅
   - Root Directory: `./`
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Node Version: `18.x` o `20.x`

4. **Deploy**
   - Click "Deploy"
   - Attendi ~1-2 minuti
   - ✅ **Sito LIVE!**

5. **URL Temporaneo**
   ```
   https://otherwise-landing-xxxxx.vercel.app
   ```

---

## 🚀 Opzione 2: Deploy da CLI (Veloce)

### **Installa Vercel CLI** (se non ce l'hai)

```bash
npm i -g vercel
```

### **Deploy**

```bash
cd /Users/riccardoterzaghi/Documents/GitHub/otherwise-landing

# Login (prima volta)
vercel login

# Deploy in production
vercel --prod

# Segui il prompt:
# - Set up and deploy? [Y/n] → Y
# - Which scope? → Seleziona account
# - Link to existing project? [y/N] → N
# - Project name? → otherwise-landing
# - Directory? → ./
# - Override settings? [y/N] → N

# Deploy in corso... ~1-2 minuti
# ✅ Production: https://otherwise-landing.vercel.app
```

---

## 🌐 Custom Domain (Opzionale)

### **Dopo il Deploy**

1. **Vercel Dashboard**
   - Vai su Project → Settings → Domains
   - Click "Add Domain"

2. **Aggiungi Dominio**
   ```
   otherwise-ferrara.it
   www.otherwise-ferrara.it
   ```

3. **Configura DNS** (sul tuo provider dominio)

   **Record A:**
   ```
   Type: A
   Name: @
   Value: 76.76.19.19
   TTL: 3600
   ```

   **Record CNAME:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

4. **Attendi propagazione** (~10-60 minuti)

5. **SSL Automatico** ✅ (Vercel lo attiva automaticamente)

---

## 🔧 Environment Variables (Se Servono)

Nel Vercel Dashboard → Settings → Environment Variables:

```bash
# Esempio (opzionale):
NEXT_PUBLIC_SITE_URL=https://otherwise-ferrara.it
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## ✅ Post-Deploy Checklist

### **Immediate**
- [ ] Apri il sito live su mobile/desktop
- [ ] Verifica font Airborne 86 carica correttamente
- [ ] Test responsive su vari device
- [ ] Verifica tutte le sezioni scrollano bene
- [ ] Test form contatto (se collegato)

### **Performance**
- [ ] Test PageSpeed: [pagespeed.web.dev](https://pagespeed.web.dev)
  - Target: 95+ mobile, 98+ desktop
- [ ] Test mobile-friendly: [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
- [ ] Verifica Web Vitals nel Vercel Dashboard

### **SEO**
- [ ] Submit sitemap a Google: `https://sito.com/sitemap.xml`
  - Google Search Console → Sitemaps → Add sitemap
- [ ] Verifica meta tags:
  - [metatags.io](https://metatags.io)
  - Testa Open Graph e Twitter Cards
- [ ] Google My Business → Collega sito web

### **Analytics** (Opzionale)
- [ ] Google Analytics 4
- [ ] Vercel Analytics (built-in)
- [ ] Facebook Pixel (se fai ads)

---

## 🔄 Auto-Deploy Setup

### **✅ Già Configurato!**

Ogni volta che pushì su GitHub, Vercel auto-deploya:

```bash
# Workflow:
git add .
git commit -m "update: nuovo contenuto"
git push

# Vercel auto-deploya in ~1 minuto
# Ricevi notifica email quando done ✅
```

### **Preview Deployments**

Ogni branch o PR crea un preview deployment automatico:

```bash
git checkout -b feature/nuova-sezione
git push -u origin feature/nuova-sezione

# Vercel crea: https://otherwise-landing-git-feature-nuova-sezione.vercel.app
```

---

## 📊 Monitoring

### **Vercel Dashboard**

- **Analytics**: Traffic, page views, top pages
- **Speed Insights**: Core Web Vitals
- **Deployments**: History, rollback
- **Logs**: Real-time function logs
- **Domains**: SSL status, DNS config

### **Alerts**

Vercel ti notifica via email per:
- ✅ Deploy success
- ❌ Deploy failed
- ⚠️ Performance degradation
- 🔒 SSL renewal

---

## 🐛 Troubleshooting

### **Build Failed**

```bash
# Testa build locale:
npm run build

# Se ok locale ma fail su Vercel:
# Vercel Dashboard → Settings → General → Node.js Version
# Imposta: 18.x o 20.x
```

### **Font Non Carica**

```bash
# Verifica font committed:
git ls-files | grep Airborne86.ttf
# Deve mostrare: public/fonts/Airborne86.ttf

# Se mancante:
git add public/fonts/Airborne86.ttf -f
git commit -m "fix: add Airborne font"
git push
```

### **Immagini Non Caricano**

- Unsplash ha rate limit su production
- Sostituisci con immagini locali in `/public/images/`
- Usa Next.js `<Image>` component per optimization

### **Rollback Veloce**

1. Vercel Dashboard → Deployments
2. Click su deployment precedente funzionante
3. "..." menu → "Promote to Production"
4. ✅ Rollback istantaneo

---

## 🎯 Next Steps

1. **Sostituisci immagini placeholder** con foto reali box
2. **Aggiorna info contatto** in `components/CTA.tsx`
3. **Collega form** a servizio email (Resend, SendGrid, etc)
4. **Setup Google My Business** con link al sito
5. **Launch marketing** 🚀

---

## 📈 Performance Target

```
PageSpeed Score: 95+ mobile, 98+ desktop ✅
First Contentful Paint: <1.5s ✅
Time to Interactive: <3s ✅
Cumulative Layout Shift: <0.1 ✅
```

---

**Repo live su GitHub, pronto per deploy Vercel! Go! 🚀**

**GitHub**: https://github.com/richterzo/otherwise-landing
**Vercel**: https://vercel.com/new (import repo e deploy)

