# 🎖️ Airborne 86 Font Installation

## Download Font

### Opzione 1: DaFont (Gratuito)
1. Vai su [DaFont - Airborne 86](https://www.dafont.com/airborne-86.font)
2. Click "Download"
3. Estrai il file ZIP

### Opzione 2: Altri siti
- [FontSpace](https://www.fontspace.com/airborne-86-font-f17862)
- [1001 Fonts](https://www.1001fonts.com/airborne-86-font.html)

### Opzione 3: Font Alternativo (se Airborne 86 non disponibile)
Se non trovi Airborne 86, usa questi font militari alternativi:
- **Stencilia** (Google Fonts - già integrato)
- **Army Stencil**
- **Mach

iatto** 
- **Oswald** (più leggero ma militaresco)

## Installation

### Step 1: Convert to Web Fonts

Dopo il download, converti il `.ttf` in `.woff` e `.woff2` per il web:

**Online Converter:**
1. Vai su [CloudConvert](https://cloudconvert.com/ttf-to-woff2)
2. Upload `Airborne86.ttf`
3. Converti in WOFF2 e WOFF
4. Download entrambi i file

**Oppure usa Font Squirrel:**
1. [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
2. Upload il TTF
3. Seleziona "Optimal" settings
4. Download il kit

### Step 2: Posiziona i file

Metti i file font nella cartella:
```
/public/fonts/
  ├── Airborne86.woff2  (preferito - più leggero)
  └── Airborne86.woff   (fallback)
```

### Step 3: Verifica

Il file `app/globals.css` è già configurato:

```css
@font-face {
  font-family: 'Airborne 86';
  src: url('/fonts/Airborne86.woff2') format('woff2'),
       url('/fonts/Airborne86.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

### Step 4: Test

Dopo aver posizionato i file, riavvia il server:
```bash
npm run dev
```

Il font apparirà su:
- ✅ Titolo "OTHERWISE" nell'hero
- ✅ Location "FERRARA"
- ✅ "STIAMO LUSTRANDO I MUSCOLI"
- ✅ Valori: DISCIPLINA, CONTROLLO, LUCIDITÀ
- ✅ CTA buttons
- ✅ Nav items
- ✅ Codici e label militari

## Fallback Temporaneo

Se il font non carica subito, il sistema userà automaticamente `monospace` come fallback.

## Alternative con Google Fonts (Zero Download)

Se preferisci evitare il download, puoi usare Google Fonts:

### Opzione A: Roboto Condensed (simile a militare)

In `app/layout.tsx`, sostituisci:

```typescript
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({ 
  subsets: ["latin"],
  weight: ["700"],
  variable: '--font-military',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${robotoCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

In `tailwind.config.ts`:
```typescript
fontFamily: {
  military: ['var(--font-military)', 'monospace'],
}
```

### Opzione B: Oswald (più bold e impattante)

```typescript
import { Oswald } from "next/font/google";

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-military',
});
```

### Opzione C: Teko (condensed, industriale)

```typescript
import { Teko } from "next/font/google";

const teko = Teko({ 
  subsets: ["latin"],
  weight: ["700"],
  variable: '--font-military',
});
```

## Dove viene usato il Font Militare

### ✅ USO STRATEGICO (ponderato)

```typescript
// Hero
font-military → Titolo "OTHERWISE", location, tagline

// Values Grid
font-military → DISCIPLINA, CONTROLLO, LUCIDITÀ

// Navigation
font-military → Nav items, CTA buttons

// Training Cards
font-military → Codici (TRN_01), numeri, intensità

// Mindset
font-military → Titoli sezioni

// Footer
font-military → Codici, coordinate
```

### ❌ NON USATO (per leggibilità)

- Body text (rimane sans-serif)
- Descrizioni lunghe
- Form input
- Paragrafi

## Licenza

⚠️ **IMPORTANTE**: Verifica sempre la licenza del font:

- **Uso personale**: Quasi sempre OK
- **Uso commerciale**: Verifica su DaFont/sito ufficiale
- **Web embedding**: Alcuni font lo vietano

Airborne 86 è **gratuito per uso personale**. Se usi il sito commercialmente, considera:
1. Contattare l'autore per licenza commerciale
2. Usare un font Google Fonts (100% free)
3. Comprare una licenza commerciale

## Testing Checklist

Dopo l'installazione:

- [ ] Font carica senza errori in console
- [ ] Titolo "OTHERWISE" usa Airborne 86
- [ ] CTA buttons hanno il font militare
- [ ] Performance: font carica in <100ms
- [ ] Fallback funziona se font mancante
- [ ] Mobile: font è leggibile anche su piccoli schermi

## Troubleshooting

### Font non carica

```bash
# Verifica che i file esistano
ls public/fonts/

# Dovrebbero apparire:
# Airborne86.woff2
# Airborne86.woff
```

### Errore CORS

Se usi un CDN esterno, assicurati che serva i font con header corretti:
```
Access-Control-Allow-Origin: *
```

### Font appare pixelato

Assicurati di usare `.woff2` (non `.ttf`) per qualità web ottimale.

### Performance lenta

```typescript
// In globals.css, aggiungi preload
<link rel="preload" href="/fonts/Airborne86.woff2" as="font" type="font/woff2" crossorigin />
```

---

**Pro Tip**: Per sviluppo rapido, usa temporaneamente Oswald da Google Fonts (zero setup), poi sostituisci con Airborne 86 quando hai il file pronto.

