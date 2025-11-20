# 📸 Gallery Guide - Otherwise Ferrara

## ✅ Sezione Gallery Aggiunta

### **Dove si trova**
```
Pagina: Home
Posizione: Dopo Mindset, prima del CTA
URL anchor: #gallery
Navigation: Menu item "GALLERY"
```

---

## 🖼️ Come Funziona

### **Layout**
- **Grid**: 3 colonne desktop, 2 tablet, 1 mobile
- **Aspect Ratio**: Quadrato (1:1) per uniformità
- **Numero immagini**: 6 foto (estendibile)
- **Effetti**: Grayscale + hover scale + red brackets

### **Interazioni**
- **Hover**: Zoom immagine + bordi rossi + mostra titolo
- **Click**: Apre lightbox full-screen
- **Lightbox**: Chiudi con X o click fuori

---

## 📷 Sostituire con Foto Reali della Box

### **Step 1: Preparare le Foto**

#### **Cosa fotografare**
```
1. Main Training Area - Vista d'insieme box
2. Olympic Lifting Zone - Bilancieri, pesi, pedane
3. Group Classes - Persone che si allenano (con consenso)
4. Cardio Equipment - Rower, bike, ski erg
5. Pull-up Rigs - Rig, pull-up bars, gymnastic rings
6. Community Training - Team WOD, atmosfera
```

#### **Tips Fotografici**
- **Luce**: Luce naturale o illuminazione box, evita flash diretto
- **Angolo**: Prospettive ampie, mostra lo spazio
- **Composizione**: Pulito, professionale, evita disordine
- **Risoluzione**: Minimo 1200x1200px (meglio 2000x2000px)
- **Formato**: JPG o PNG

#### **Ottimizzazione**
```bash
# Converti in B&W (opzionale - già applicato via CSS)
# Ridimensiona per web:
# - Width: 1200px
# - Quality: 80-85%
# - Format: JPG ottimizzato o WebP
```

---

### **Step 2: Caricare le Foto**

#### **Opzione A: Hosting Locale** (consigliato per SEO)

```bash
# Crea cartella images
mkdir -p public/images/gallery

# Sposta foto ottimizzate
# Nomina file: box-main.jpg, lifting-zone.jpg, etc.
mv foto-ottimizzate/*.jpg public/images/gallery/
```

#### **Opzione B: CDN Esterno**
- Upload su Cloudinary / Vercel Blob / S3
- Ottieni URL pubblici

---

### **Step 3: Aggiornare il Codice**

Apri `components/Gallery.tsx` e modifica l'array `images`:

```typescript
const images = [
  {
    id: 1,
    url: "/images/gallery/box-main.jpg",  // ← Cambia qui
    title: "Main Training Area",
    category: "BOX"
  },
  {
    id: 2,
    url: "/images/gallery/lifting-zone.jpg",  // ← Cambia qui
    title: "Olympic Lifting Zone",
    category: "EQUIPMENT"
  },
  {
    id: 3,
    url: "/images/gallery/group-class.jpg",  // ← Cambia qui
    title: "Group Classes",
    category: "TRAINING"
  },
  {
    id: 4,
    url: "/images/gallery/cardio-area.jpg",  // ← Cambia qui
    title: "Cardio Equipment",
    category: "EQUIPMENT"
  },
  {
    id: 5,
    url: "/images/gallery/pull-up-rig.jpg",  // ← Cambia qui
    title: "Pull-up Rigs",
    category: "BOX"
  },
  {
    id: 6,
    url: "/images/gallery/community.jpg",  // ← Cambia qui
    title: "Community Training",
    category: "TRAINING"
  }
];
```

#### **Opzionale: Aggiungere più foto**

```typescript
// Aggiungi altre foto:
{
  id: 7,
  url: "/images/gallery/coaches.jpg",
  title: "Il nostro Team",
  category: "TEAM"
},
{
  id: 8,
  url: "/images/gallery/competition.jpg",
  title: "In Gara",
  category: "EVENTS"
}
```

---

### **Step 4: Ottimizzare con Next.js Image** (opzionale)

Per performance migliori, sostituisci `<div>` con `<Image>`:

```typescript
import Image from 'next/image';

// Invece di background-image, usa:
<Image
  src={image.url}
  alt={image.title}
  fill
  className="object-cover"
  style={{ filter: 'grayscale(100%) contrast(1.2)' }}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## 🎨 Personalizzazione Design

### **Cambiare Layout Grid**

```typescript
// In Gallery.tsx, modifica className:

// Da 3 colonne a 4:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

// Layout masonry (altezze diverse):
className="columns-1 md:columns-2 lg:columns-3 gap-6"
```

### **Cambiare Aspect Ratio**

```typescript
// Rettangolare orizzontale:
className="aspect-video"  // 16:9

// Rettangolare verticale:
className="aspect-[3/4]"  // Portrait

// Panoramico:
className="aspect-[21/9]"
```

### **Rimuovere Grayscale**

```typescript
// In Gallery.tsx, rimuovi filter:
style={{
  backgroundImage: `url(${image.url})`,
  // filter: 'grayscale(100%) contrast(1.2)',  ← Commenta o rimuovi
}}
```

---

## 🔧 Manutenzione

### **Aggiungere Foto Stagionali**
```typescript
// Crea array dinamico per eventi speciali:
const seasonalImages = [
  { id: 9, url: "/gallery/christmas-wod.jpg", title: "Christmas WOD", category: "EVENT" }
];

const allImages = [...images, ...seasonalImages];
```

### **Ordinare per Categoria**
```typescript
// Filtra e ordina:
const sortedImages = images.sort((a, b) => 
  a.category.localeCompare(b.category)
);
```

---

## 📊 SEO per Gallery

### **Alt Text per Immagini**
Aggiungi `alt` descrittivo quando usi `<Image>`:

```typescript
<Image
  src="/images/gallery/box-main.jpg"
  alt="Otherwise CrossFit Ferrara - Main training area con rigs e attrezzatura professionale"
/>
```

### **Structured Data** (opzionale)

Aggiungi JSON-LD per gallery in `app/layout.tsx`:

```typescript
const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Otherwise CrossFit Ferrara Gallery",
  "description": "Foto della nostra box CrossFit a Ferrara"
};
```

---

## ✅ Checklist Post-Upload

- [ ] Foto ottimizzate (<500KB ciascuna)
- [ ] Nomi file descrittivi (no `IMG_1234.jpg`)
- [ ] URL aggiornati in `Gallery.tsx`
- [ ] Test responsive su mobile/tablet/desktop
- [ ] Verifica lightbox funziona
- [ ] Commit e push su GitHub
- [ ] Deploy automatico Vercel
- [ ] Test sito live

---

## 🚀 Quick Commands

```bash
# Ottimizza immagini (con ImageMagick)
mogrify -resize 1200x1200^ -gravity center -extent 1200x1200 -quality 85 *.jpg

# Commit e deploy
git add public/images/gallery/
git commit -m "feat: add real box photos to gallery"
git push

# Vercel auto-deploya in ~1 min
```

---

## 📞 Supporto

**File modificabile**: `components/Gallery.tsx`  
**Cartella immagini**: `public/images/gallery/`  
**Documentazione**: Questo file

---

**Gallery live! Sostituisci con le foto reali della box! 📸**

