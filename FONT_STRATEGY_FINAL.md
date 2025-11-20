# 🎖️ FONT STRATEGY FINALE - Perfettamente Coordinato

## 📐 Strategia Font Definitiva

### Airborne 86 (Militare - 5%)
**Usato SOLO per:**
- ✅ **h1** - Macrotitoli sezioni (OTHERWISE, titoli principali)
- ✅ **Logo "OTHERWISE_"** - Brand identity nella nav

**Carattere:** Stencil militare, impatto massimo, solo grandi titoli.

---

### JetBrains Mono (Tecnico/Militare - 60%)
**Usato OVUNQUE per look tecnico:**

#### Navigation
- ✅ Nav items (MISSIONE, TRAINING, MINDSET, CONTATTI)
- ✅ CTA "INIZIA ORA"
- ✅ Mobile CTA

#### Hero
- ✅ "FERRARA" (location)
- ✅ "ATHLETICS EVOLVED" (subtitle)
- ✅ "STIAMO LUSTRANDO I MUSCOLI" (tagline)
- ✅ "Se non hai pazienza..." (sub-tagline)
- ✅ CTA "PROVA GRATUITA"
- ✅ CTA "PROGRAMMI"

#### Sezioni
- ✅ **h2 titoli sezioni** (ATHLETICS EVOLVED, PROGRAMMAZIONE STRUTTURATA, etc.)
- ✅ **Nomi programmi** (FOUNDATIONS, OPERATIONAL, ELITE PROTOCOL)
- ✅ **Titoli features** (APPROCCIO MILITARE, CONTROLLO MENTALE, etc.)
- ✅ **Stats** (24/7, 15+, 300m², 100%)
- ✅ **Codici** (TRN_01, TRN_02, TRN_03, [MISSIONE], etc.)
- ✅ **Label tecniche** (DURATA, LIVELLO, INTENSITÀ, etc.)
- ✅ **CTA buttons** (VALUTAZIONE GRATUITA, INIZIA ORA, etc.)

#### Footer
- ✅ Codici e coordinate
- ✅ Link tecnici
- ✅ Label

---

### Inter (Leggibile - 35%)
**Usato SOLO per body text:**
- ✅ Paragrafi e descrizioni lunghe
- ✅ Testi informativi
- ✅ Form placeholders
- ✅ Contenuti lunghi

---

## 🎯 Distribuzione Font

```
JetBrains Mono: 60% (dominante - look tecnico/militare)
Inter:          35% (body text leggibile)
Airborne 86:     5% (solo h1 + logo per impatto)
```

---

## 📊 Font Usage Map

### Hero Section
```
OTHERWISE               → Airborne 86 (h1)
━━ FERRARA ━━           → JetBrains Mono
ATHLETICS EVOLVED       → JetBrains Mono
STIAMO LUSTRANDO...     → JetBrains Mono
Se non hai pazienza...  → JetBrains Mono
[PROVA GRATUITA]        → JetBrains Mono
[PROGRAMMI]             → JetBrains Mono
```

### Navigation
```
OTHERWISE_              → Airborne 86 (logo)
MISSIONE                → JetBrains Mono
TRAINING                → JetBrains Mono
MINDSET                 → JetBrains Mono
CONTATTI                → JetBrains Mono
[INIZIA ORA]            → JetBrains Mono
```

### About Section
```
[MISSIONE]              → JetBrains Mono
ATHLETICS EVOLVED       → Airborne 86 (h1)
Descrizioni...          → Inter
EST. 2024 / FERRARA     → JetBrains Mono
01 APPROCCIO MILITARE   → JetBrains Mono
24/7 ACCESSO            → JetBrains Mono
```

### Training Section
```
[TRAINING PROTOCOLS]    → JetBrains Mono
PROGRAMMAZIONE...       → Airborne 86 (h1)
Descrizioni...          → Inter
TRN_01                  → JetBrains Mono
FOUNDATIONS             → JetBrains Mono
DURATA: 8 settimane     → JetBrains Mono
[VALUTAZIONE GRATUITA]  → JetBrains Mono
```

---

## 🎨 Visual Consistency

### Uppercase Strategy
```
JetBrains Mono → uppercase (look militare/tecnico)
Inter          → normal case (leggibilità)
Airborne 86    → uppercase naturale (h1)
```

### Weight Strategy
```
Titles:  font-mono font-bold
CTA:     font-mono font-bold
Labels:  font-mono (normal o bold)
Body:    font-sans (Inter regular)
```

### Tracking Strategy
```
Mono large:  tracking-wider
Mono small:  tracking-widest
Sans:        tracking-normal
```

---

## 💎 Why This Works

### 1. Tecnico/Militare Dominante
- **60% JetBrains Mono** = Look uniforme tecnico
- Codici, label, numeri, CTA tutti coordinati
- Sensazione "operativa" su tutto

### 2. Impact Misurato
- **5% Airborne 86** = Solo dove serve (h1 + logo)
- Massimo impatto senza sacrificare leggibilità
- Brand riconoscibile ma non invadente

### 3. Leggibilità Garantita
- **35% Inter** = Body text facile da leggere
- Paragrafi lunghi mai con mono
- Comfort visivo per contenuti informativi

---

## 🔧 CSS Implementation

```css
/* globals.css */
h1 {
  @apply font-airborne;
}

body {
  @apply font-sans;  /* Inter default */
}

/* Components use font-mono explicitly */
.label, .code, .cta, .nav-item, h2, h3 {
  @apply font-mono;
}
```

---

## ✅ Risultato Finale

### Before (Scoordinato)
```
❌ Troppi font diversi
❌ No coerenza visiva
❌ Sensazione disorganizzata
❌ Brand poco definito
```

### After (Perfetto)
```
✅ JetBrains Mono dominante (60%)
✅ Look tecnico/militare coordinato
✅ Ogni elemento usa il font giusto
✅ Brand forte e coerente
✅ Leggibilità dove serve (Inter)
✅ Impatto dove serve (Airborne 86)
```

---

## 🎯 Testing Checklist

Verifica che questi elementi usino **font-mono**:

### Hero
- [ ] "FERRARA"
- [ ] "ATHLETICS EVOLVED"
- [ ] Tagline principale
- [ ] CTA buttons

### Navigation
- [ ] Nav items
- [ ] CTA button

### Sezioni
- [ ] h2 titoli (non h1!)
- [ ] Codici (TRN_01, etc.)
- [ ] Label ([MISSIONE], etc.)
- [ ] Stats (24/7, etc.)
- [ ] Nomi programmi
- [ ] CTA buttons

### Body Text (Inter)
- [ ] Paragrafi descrittivi
- [ ] Testi lunghi
- [ ] Form content

---

## 🚀 Performance

```
JetBrains Mono: ~12KB/weight (Google Fonts)
Inter:          ~15KB/weight (Google Fonts)
Airborne 86:    ~47KB (local, preload)

Total:          ~74KB fonts
Loading:        Ottimizzato con preload
Display:        swap (no FOIT)
```

---

> **"Un font dominante. Look coordinato. Brand forte."**

**Font strategy perfetta: 60% Mono, 35% Inter, 5% Airborne!** 🎖️

