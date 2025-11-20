# 🎨 Guida alla Personalizzazione

## 📝 Contenuti

### Informazioni Palestra
Modifica le informazioni di contatto in `components/CTA.tsx`:

```typescript
// Location
<div className="text-bianco-luce">Via Example 123, Ferrara</div>

// Email
<a href="mailto:info@otherwise.it">info@otherwise.it</a>

// Telefono
<a href="tel:+390532123456">+39 0532 123 456</a>

// Orari
<div className="flex justify-between">
  <span>Lun - Ven</span>
  <span className="font-mono">06:00 - 22:00</span>
</div>
```

### Programmi di Training
Modifica i programmi in `components/Training.tsx`:

```typescript
const programs = [
  {
    code: "TRN_01",
    name: "FOUNDATIONS",
    description: "...",
    duration: "8 settimane",
    level: "Principiante",
    intensity: 60
  },
  // Aggiungi o modifica programmi qui
];
```

### Valori e Mindset
Personalizza i principi in `components/Mindset.tsx`:

```typescript
const principles = [
  {
    title: "DISCIPLINA",
    description: "...",
    quote: "\"...\""
  },
  // Modifica i 3 principi chiave
];
```

## 🎨 Stili e Branding

### Colori
La palette è definita in `tailwind.config.ts`. Mantieni la struttura 90/8/2:
- 90% Nero + Grigi
- 8% Bianco
- 2% Rosso (solo per accenti)

```typescript
colors: {
  'nero-tattico': '#0A0A0A',      // Base
  'grigio-cemento': '#2A2A2A',    // Sfondi
  'grigio-acciaio': '#6F6F6F',    // Testi secondari
  'bianco-luce': '#F5F5F5',       // Highlights
  'rosso-controllo': '#B31010',   // CTA e focus
}
```

### Font
Modifica i font in `app/layout.tsx`:

```typescript
import { Inter, JetBrains_Mono } from "next/font/google";
// Cambia con i font che preferisci da Google Fonts
```

### Animazioni
Velocità globali delle animazioni in `tailwind.config.ts`:

```typescript
animation: {
  'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  // Aggiungi animazioni custom
}
```

## 📱 SEO e Meta Tags

### Meta Tags Base
Modifica in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Otherwise Athletics Evolved | Ferrara",
  description: "Disciplina. Controllo. Lucidità...",
  keywords: "crossfit, palestra, ferrara, ...",
};
```

### Open Graph
Aggiungi immagini social:

```typescript
export const metadata: Metadata = {
  // ... existing meta
  openGraph: {
    title: 'Otherwise Athletics Evolved',
    description: '...',
    images: ['/og-image.jpg'],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otherwise Athletics Evolved',
    description: '...',
    images: ['/twitter-image.jpg'],
  },
};
```

## 🔌 Integrazioni

### Google Analytics
Aggiungi in `app/layout.tsx` prima del `</body>`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Form Backend
Integra un servizio per gestire i form. Esempio con Formspree:

```typescript
// components/CTA.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  // Show success message
};
```

### Social Links
Aggiorna i link social in `components/Footer.tsx`:

```typescript
const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/otherwiseravenna", icon: "IG" },
  { name: "Facebook", href: "https://facebook.com/otherwiseravenna", icon: "FB" },
  { name: "YouTube", href: "https://youtube.com/@otherwiseravenna", icon: "YT" },
];
```

## 🖼️ Immagini

### Aggiungere Immagini
1. Salva le immagini in `/public/images/`
2. Usa `next/image` per ottimizzazione automatica:

```typescript
import Image from 'next/image';

<Image
  src="/images/gym.jpg"
  alt="Otherwise Gym"
  width={800}
  height={600}
  className="..."
/>
```

### Background Images
Per sfondi hero con immagini reali:

```typescript
// components/Hero.tsx
<div className="absolute inset-0">
  <Image
    src="/images/hero-bg.jpg"
    alt=""
    fill
    className="object-cover opacity-20"
    priority
  />
</div>
```

## ⚡ Performance

### Lazy Loading
Per componenti pesanti:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### Ottimizza Animazioni
Per migliorare le performance su mobile:

```typescript
// Riduci animazioni su dispositivi con motion ridotto
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  animate={prefersReducedMotion ? {} : { x: 100 }}
  // ...
/>
```

## 🔒 Sicurezza

### Environment Variables
Per API keys e secrets:

1. Crea `.env.local`:
```bash
NEXT_PUBLIC_FORM_API_KEY=your_key_here
PRIVATE_API_SECRET=secret_here
```

2. Usa nel codice:
```typescript
const apiKey = process.env.NEXT_PUBLIC_FORM_API_KEY;
```

3. Aggiungi `.env.local` al `.gitignore` (già fatto)

## 📦 Build Ottimizzato

### Before Build
```bash
# Controlla errori TypeScript
npm run build

# Analizza bundle size
npm install -D @next/bundle-analyzer
```

### Sitemap Dinamica
Crea `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://otherwise-ravenna.it',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
```

## 🎯 APX Connection

Per mantenere coerenza con l'evento APX Bologna:
- Usa la stessa palette colori
- Mantieni il tone militare/operativo
- Il rosso è sempre accent, mai dominante
- Font mono per elementi tecnici
- Layout pulito e strutturato

---

Per domande: info@otherwise.it

