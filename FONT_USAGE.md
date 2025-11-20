# 🎖️ Font Usage Strategy - Otherwise Ferrara

## Strategia Font Perfettamente Bilanciata

### ✅ Airborne 86 (Font Militare)
**Usato SOLO per:**
- ✅ Titoli principali (h1, h2) - Automatico via CSS
- ✅ "OTHERWISE" - Titolo hero
- ✅ "FERRARA" - Location
- ✅ DISCIPLINA, CONTROLLO, LUCIDITÀ - Values grid (keyword brevi)
- ✅ Navigation items (MISSIONE, TRAINING, etc.)
- ✅ CTA buttons (PROVA GRATUITA, INIZIA ORA)
- ✅ Codici militari (TRN_01, TRN_02, etc.)
- ✅ Label brevi (SCROLL, EST. 2024)
- ✅ Stats labels (ACCESSO, COACHES, etc.)

**Caratteristiche:**
- Font stencil militare
- Bold e geometrico
- Impatto visivo forte
- **Non per body text** (poco leggibile)

---

### ✅ Inter (Font Leggibile)
**Usato per:**
- ✅ Tutto il body text
- ✅ Paragrafi e descrizioni
- ✅ Tagline "STIAMO LUSTRANDO I MUSCOLI"
- ✅ Sottotitoli e meta info
- ✅ Form input e placeholder
- ✅ Footer content
- ✅ Testi lunghi in generale

**Caratteristiche:**
- Font sans-serif professionale
- Altissima leggibilità
- Ottimo per paragrafi
- **Default per tutto**

---

### ✅ JetBrains Mono (Monospace)
**Usato per:**
- ✅ Codici tecnici
- ✅ JSON/dati strutturati
- ✅ Coordinate GPS
- ✅ Numeri statistiche (opzionale)

---

## 📐 Regola D'Oro

```
Se è BREVE + IMPATTO → Airborne 86
Se è LUNGO + LEGGIBILITÀ → Inter
Se è CODICE/DATI → JetBrains Mono
```

---

## 🎯 Esempi Pratici

### ✅ CORRETTO

```tsx
// Titolo principale - Airborne 86
<h1 className="font-airborne">OTHERWISE</h1>

// Descrizione - Inter (default)
<p className="text-grigio-acciaio">
  Otherwise non è una palestra convenzionale...
</p>

// CTA - Airborne 86
<button className="font-airborne">PROVA GRATUITA</button>
```

### ❌ SBAGLIATO

```tsx
// NO - Paragrafo con font militare (illeggibile)
<p className="font-airborne leading-relaxed">
  Otherwise non è una palestra convenzionale...
</p>

// NO - Button con font leggibile (poco impatto)
<button className="font-sans">PROVA GRATUITA</button>
```

---

## 🔧 Configurazione Tecnica

### CSS Globale (globals.css)
```css
h1, h2 {
  @apply font-airborne;
}
```
Tutti gli h1 e h2 usano automaticamente Airborne 86.

### Tailwind Config
```typescript
fontFamily: {
  sans: ['var(--font-sans)', ...],    // Inter - Default
  airborne: ['var(--font-airborne)', ...],  // Airborne 86 - Titoli
  mono: ['var(--font-mono)', ...],     // JetBrains - Codice
}
```

### Body Default
```tsx
<body className="font-sans">
  {/* Tutto usa Inter di default */}
</body>
```

---

## 📊 Proporzione Font

```
Inter (Leggibile):     70% del contenuto
Airborne 86 (Militare): 25% del contenuto (solo titoli/CTA)
JetBrains Mono:        5% del contenuto (codici)
```

Questo bilanciamento garantisce:
- ✅ Impatto visivo forte (font militare su titoli)
- ✅ Leggibilità eccellente (Inter su body)
- ✅ Brand coerente (Airborne 86 per elementi chiave)

---

## 🎨 Dove Verificare

### Hero Section
- "OTHERWISE" → Airborne 86 ✅
- "FERRARA" → Airborne 86 ✅
- "STIAMO LUSTRANDO..." → Inter ✅
- "Se non hai pazienza..." → Inter ✅
- DISCIPLINA/CONTROLLO/LUCIDITÀ → Airborne 86 ✅
- CTA buttons → Airborne 86 ✅

### Navigation
- Logo "OTHERWISE_" → Airborne 86 ✅
- Nav items → Airborne 86 ✅
- CTA "INIZIA ORA" → Airborne 86 ✅

### About Section
- Titolo "ATHLETICS EVOLVED" → Airborne 86 ✅ (h2)
- Paragrafi descrizione → Inter ✅
- Feature titles → Airborne 86 ✅
- Feature descriptions → Inter ✅
- Stats values → Airborne 86 ✅

### Training Section
- Titolo sezione → Airborne 86 ✅ (h2)
- Descrizione intro → Inter ✅
- Codici TRN_01 → Airborne 86 ✅
- Nomi programmi → Airborne 86 ✅
- Descrizioni programmi → Inter ✅

---

## 🚀 Result

**Prima (tutto Airborne):**
❌ Pesante da leggere
❌ Affaticamento visivo
❌ Poco professionale per body text

**Dopo (bilanciato):**
✅ Titoli impattanti con font militare
✅ Body text leggibilissimo
✅ Look professionale e usabile
✅ Branding forte ma funzionale

---

> **"L'impatto visivo serve nei titoli. La leggibilità serve ovunque."**

---

## 📝 Note per Futuri Aggiornamenti

Quando aggiungi nuovo contenuto, chiediti:

1. **È un titolo/heading?** → `font-airborne`
2. **È un CTA/button?** → `font-airborne`
3. **È un codice/label breve?** → `font-airborne`
4. **È body text/paragrafo?** → Lascia default (`font-sans`)

Se hai dubbi → Usa `font-sans` (Inter). È sempre sicuro per leggibilità.

---

**Configurazione finale perfetta! 🎖️**

