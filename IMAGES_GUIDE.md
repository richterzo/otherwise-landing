# 📸 Guida Immagini - Otherwise Ferrara

## 🎨 Stile Fotografico

### Trattamento B&W Obbligatorio
Tutte le immagini devono essere convertite in bianco e nero con:
- **Grayscale**: 100%
- **Contrast**: +20-30%
- **Opacity**: 8-15% (per non sovrastare il contenuto)

### CSS Filter Applicato
```css
filter: grayscale(100%) contrast(1.2-1.3);
opacity: 0.08-0.15;
```

## 📍 Immagini Attuali (Unsplash)

### Hero Section
```
URL: https://images.unsplash.com/photo-1534438327276-14e5300c3a48
Soggetto: Gym equipment, industrial setting
Opacità: 15%
```

### About Section - Facility Image
```
URL: https://images.unsplash.com/photo-1571902943202-507ec2618e8f
Soggetto: Kettlebells, weights close-up
Opacità: Full (con overlay gradient)
Label: FERRARA_FACILITY_001
```

### Training Section - Background
```
URL: https://images.unsplash.com/photo-1517836357463-d25dfeac3438
Soggetto: Group training, people working out
Opacità: 8%
```

### Mindset Section - 3 Immagini Rotanti
```
Disciplina: https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b
(Barbell, strength training)

Controllo: https://images.unsplash.com/photo-1574680096145-d05b474e2155
(Focused athlete, mental preparation)

Lucidità: https://images.unsplash.com/photo-1623874228601-f4193c7b1818
(Clean movement, precision)
```

## 🔄 Come Sostituire con Foto Reali

### 1. Prepara le Foto della Tua Palestra

**Soggetti Consigliati:**
- ✅ Attrezzatura (bilancieri, kettlebell, rig)
- ✅ Dettagli industriali (corde, catene, chalk)
- ✅ Atleti in azione (blur, dinamismo)
- ✅ Facility vuota (ambiente operativo)
- ✅ Close-up tecnici (mani, grip, movimenti)

**Evita:**
- ❌ Volti in primo piano
- ❌ Colori accesi o branding esterno
- ❌ Foto di gruppo "posate"
- ❌ Illuminazione troppo morbida

### 2. Converti in B&W

**Opzione A - Photoshop/Lightroom:**
```
1. Desatura completamente (Saturation -100)
2. Aumenta contrasto (+20-30)
3. Curve: S-curve leggera per punch
4. Esporta in WebP o JPG (quality 80)
```

**Opzione B - Online:**
- photopea.com (gratuito, simile a Photoshop)
- squoosh.app (compressione + filtri)

### 3. Ottimizza le Immagini

**Formati Consigliati:**
- **WebP** per web moderno (80% più leggero)
- **JPG** fallback (quality 80)

**Dimensioni:**
```
Hero: 1920x1080px (landscape)
About: 800x600px (dettagli)
Training: 1920x1080px (wide)
Mindset: 600x600px (square)
```

**Compressione:**
```bash
# Con ImageMagick
convert input.jpg -quality 80 -resize 1920x1080 output.jpg

# Con Node.js/Sharp (automatico in Next.js se usi next/image)
```

### 4. Carica le Immagini

**Metodo A - Locale (consigliato per privacy):**
```
/public/images/
  ├── hero-bg.jpg
  ├── facility-001.jpg
  ├── training-bg.jpg
  ├── mindset-disciplina.jpg
  ├── mindset-controllo.jpg
  └── mindset-lucidita.jpg
```

Poi aggiorna i componenti:
```typescript
// Hero.tsx
backgroundImage: 'url(/images/hero-bg.jpg)'

// About.tsx
backgroundImage: 'url(/images/facility-001.jpg)'
```

**Metodo B - Cloud (CDN, più veloce):**
1. Carica su Cloudinary, Vercel Blob, o S3
2. Ottieni URL pubblico
3. Sostituisci negli URL

## 📦 Componenti da Aggiornare

### Hero.tsx (linea ~18)
```typescript
backgroundImage: 'url(/images/hero-bg.jpg)',
```

### About.tsx (linea ~72)
```typescript
backgroundImage: 'url(/images/facility-001.jpg)',
```

### Training.tsx (linea ~62)
```typescript
backgroundImage: 'url(/images/training-bg.jpg)',
```

### Mindset.tsx (linea ~143)
```typescript
backgroundImage: index === 0 
  ? 'url(/images/mindset-disciplina.jpg)'
  : index === 1
  ? 'url(/images/mindset-controllo.jpg)'
  : 'url(/images/mindset-lucidita.jpg)',
```

## 🎯 Checklist Pre-Upload

- [ ] Foto convertite in B&W
- [ ] Contrasto aumentato
- [ ] Dimensioni ottimizzate (vedi sopra)
- [ ] Formato WebP o JPG quality 80
- [ ] Nomi file descrittivi (hero-bg.jpg, non IMG_1234.jpg)
- [ ] Testato su mobile (caricamento veloce)
- [ ] Alt text aggiunto per accessibilità

## 🚀 Performance Tips

### Lazy Loading
Next.js ottimizza automaticamente con `next/image`:

```typescript
import Image from 'next/image';

<Image
  src="/images/hero-bg.jpg"
  alt="Otherwise Ferrara Gym"
  fill
  className="object-cover"
  priority // Solo per hero
  quality={80}
/>
```

### Placeholder Blur
```typescript
<Image
  src="/images/hero-bg.jpg"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Genera con plaiceholder
/>
```

## 📸 Shooting Tips per Foto Reali

### Luce
- Luce naturale o LED freddi
- Evita flash diretto
- Ombre dure = più industriale ✅

### Angolazione
- Low angle per attrezzatura (più imponente)
- Eye level per atleti
- Dettagli macro per texture

### Composizione
- Regola dei terzi
- Leading lines (barre, corde)
- Negative space per testo overlay

### Post-Processing Workflow
```
1. Import RAW
2. Crop + Straighten
3. B&W conversion
4. Contrast +25
5. Highlights -10, Shadows +15
6. Clarity +10 (dettagli metallo)
7. Vignette leggera
8. Grain +5 (optional, look film)
9. Export WebP 80%
```

## 🎨 Alternative Stock Photos (B&W Ready)

Se hai bisogno di foto temporanee migliori:

**Unsplash Collections:**
- [CrossFit](https://unsplash.com/s/photos/crossfit)
- [Gym Equipment](https://unsplash.com/s/photos/gym-equipment)
- [Strength Training](https://unsplash.com/s/photos/strength-training)
- [Industrial Fitness](https://unsplash.com/s/photos/industrial-gym)

**Pexels:**
- Cerca "crossfit black white"
- Filtro: Orientation = Landscape

**Tips:**
- Scegli foto già scure
- Evita sfondi disordinati
- Preferisci composizioni minimal

---

**Pro Tip:** Scatta le foto della tua palestra durante orari vuoti (early morning) per ottenere l'estetica "operativa" senza persone. Aggiungi atleti solo in azione, mai in posa.

