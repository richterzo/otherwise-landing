# 🚀 Quick Start - Otherwise Ferrara

## Avvio Immediato

```bash
# Installa dipendenze (già fatto)
npm install

# Avvia server di sviluppo
npm run dev
```

Apri: **http://localhost:3000**

---

## ✨ Cosa Vedrai

### Hero Section
- **Titolo "OTHERWISE"** in font militare (Oswald fallback, poi Airborne 86)
- **Mouse glow**: Muovi il mouse, vedrai un alone rosso che ti segue
- **Scan line**: Linea rossa animata verticale (effetto HUD)
- **"STIAMO LUSTRANDO I MUSCOLI"**: Font militare bold
- **Values grid**: Hover su DISCIPLINA/CONTROLLO/LUCIDITÀ per vedere brackets angolari

### Navigation
- **Logo glitch**: Hover su "OTHERWISE_" per effetto interferenza
- **Active tracking**: Scrolla e guarda la nav evidenziare la sezione attiva
- **CTA shine**: Hover su "INIZIA ORA" per vedere il riflesso luminoso

### Scroll Effects
- **Parallax**: Background zoom out mentre scrolli
- **Fade smooth**: Elementi appaiono in sequenza

---

## 🎖️ Font Militare - Airborne 86

### Status Attuale
✅ **Fallback attivo**: Usa **Oswald** (Google Fonts) - già funzionante  
⏳ **Airborne 86**: Segui `FONT_INSTALLATION.md` per il font custom

### Vedere la Differenza
**CON Oswald (ora):**
- Look bold, condensato, impattante
- Caricamento istantaneo

**CON Airborne 86 (dopo install):**
- Stencil militare autentico
- Imprinting tattico più forte

**Come installare Airborne 86:**
1. Leggi `FONT_INSTALLATION.md`
2. Scarica font da DaFont
3. Converti in WOFF2
4. Metti in `/public/fonts/`
5. Refresh → font militare custom!

---

## 📚 Documentazione Completa

| File | Descrizione |
|------|-------------|
| `README.md` | Overview progetto |
| `FONT_INSTALLATION.md` | **Come installare Airborne 86** |
| `OPTIMIZATIONS.md` | **Tutte le animazioni e ottimizzazioni UI/UX** |
| `ANIMATIONS.md` | Dettaglio ogni microanimazione |
| `CUSTOMIZATION.md` | Come personalizzare contenuti |
| `DEPLOYMENT.md` | Deploy su Vercel/Netlify |
| `BRAND_GUIDELINES.md` | Linee guida brand APX |
| `IMAGES_GUIDE.md` | Come sostituire foto B&W |

---

## 🎬 Microanimazioni da Provare

### Interazioni Mouse
1. **Hero - Mouse glow**: Muovi il mouse nell'hero
2. **Values grid**: Hover su DISCIPLINA/CONTROLLO/LUCIDITÀ
3. **CTA buttons**: Hover + click (whileTap scale)
4. **Logo nav**: Hover per glitch effect

### Scroll Effects
1. **Parallax**: Scrolla lentamente l'hero
2. **Nav border**: Guarda il bordo bottom apparire
3. **Active section**: Nav items si illuminano
4. **Scan line**: Linea rossa continua a scorrere

### Mobile
- Touch sui CTA → scala down
- Scroll smooth
- Nav collassa su mobile

---

## ⚡ Performance

### Lighthouse (Target)
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

### Test Performance
```bash
npm run build
npm start
```

Apri DevTools > Lighthouse > Generate Report

---

## 🎨 Palette Colori in Uso

```css
Nero Tattico:  #0A0A0A  (90%)
Grigio Cemento: #2A2A2A  (base)
Grigio Acciaio: #6F6F6F  (8%)
Bianco Luce:    #F5F5F5  (highlights)
Rosso Controllo: #B31010  (2% - CTA, accenti)
```

**Regola 90/8/2**: Rispettata in tutta la landing!

---

## 📋 TODO Utente

### Contenuti
- [ ] Aggiorna indirizzo palestra in `components/CTA.tsx`
- [ ] Sostituisci email/telefono reali
- [ ] Modifica orari di apertura
- [ ] Aggiorna link social nel footer

### Immagini
- [ ] Scarica foto B&W della tua palestra
- [ ] Segui `IMAGES_GUIDE.md` per ottimizzare
- [ ] Sostituisci URL Unsplash con foto locali

### Font (opzionale ma consigliato)
- [ ] Scarica Airborne 86 da DaFont
- [ ] Segui `FONT_INSTALLATION.md`
- [ ] Refresh → vedi font militare custom

### Deployment
- [ ] Crea account Vercel
- [ ] Fai push su GitHub
- [ ] Deploy in 2 click
- [ ] Aggiungi dominio custom

---

## 🔥 Features Speciali

### 1. Font Militare Ponderato
Airborne 86 usato **solo dove serve**:
- Titoli principali ✅
- CTA buttons ✅
- Codici militari ✅
- Body text NO ❌ (leggibilità prioritaria)

### 2. Microanimazioni Raffinate
- Mouse-following glow
- Parallax multi-layer
- Glitch effects
- Corner brackets
- Scan lines
- Spring physics

### 3. UX Ottimizzata
- Active section tracking
- Smooth scrollbar branded
- 60fps garantiti
- Touch-friendly
- Accessibility-first

### 4. Brand Coerente APX
- Palette identica
- Tone militare/civile
- Rosso solo 2%
- Pronto per evento Bologna

---

## 💡 Pro Tips

### Sviluppo
```bash
# Terminal 1: Dev server
npm run dev

# Terminal 2: Lint check
npm run lint

# Build test
npm run build
```

### Debug Animazioni
Apri DevTools > Performance:
- Record 6 secondi
- Scrolla lentamente
- Stop
- Analizza FPS (target: 60fps)

### Test Mobile
```bash
# Trova IP locale
ifconfig | grep "inet "

# Apri da mobile
http://192.168.1.X:3000
```

---

## 🆘 Troubleshooting

### Font non carica
→ Oswald (fallback) è già attivo, funziona subito  
→ Per Airborne 86: segui `FONT_INSTALLATION.md`

### Animazioni lag
→ Chiudi altre tab  
→ Disabilita estensioni browser  
→ Usa Chrome/Edge (migliore GPU acceleration)

### Porta 3000 occupata
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Build errore
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📞 Support

**Documentazione completa:**
- Ogni file .md nella root del progetto

**Domande frequenti:**
1. Font → `FONT_INSTALLATION.md`
2. Animazioni → `OPTIMIZATIONS.md`
3. Deploy → `DEPLOYMENT.md`
4. Immagini → `IMAGES_GUIDE.md`

---

## 🎯 Next Steps

1. ✅ **Testa il sito**: http://localhost:3000
2. 📸 **Personalizza immagini**: Usa foto della tua palestra
3. 🎖️ **Installa Airborne 86**: Font militare custom
4. 📝 **Aggiorna contenuti**: Info reali della palestra
5. 🚀 **Deploy**: Metti online su Vercel

**Il sito è GIÀ funzionante e ottimizzato!**  
Le modifiche sopra sono opzionali per personalizzare.

---

> "Disciplina nel codice. Controllo delle animazioni. Lucidità nella UX."  
> **— Otherwise Athletics Evolved**

