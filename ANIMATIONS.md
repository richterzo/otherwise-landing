# 🎬 Guida alle Animazioni

Documentazione completa delle microanimazioni implementate con Framer Motion.

## 🎯 Filosofia Animazioni

Le animazioni in Otherwise seguono il principio **"subtle but impactful"**:
- **Durata**: 0.3-0.8s per la maggior parte
- **Easing**: cubic-bezier per movimenti naturali
- **Performance**: GPU-accelerated (transform, opacity)
- **Scopo**: Guidare l'attenzione, non distrarre

## 📍 Navigation

### Scroll Background Fade
```typescript
const backgroundColor = useTransform(
  scrollY,
  [0, 100],
  ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.95)"]
);
```
La navbar diventa opaca allo scroll.

### Nav Items Stagger
```typescript
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4, delay: 0.1 * index }}
```
Gli elementi appaiono in sequenza.

### Hover Underline
```typescript
<motion.span className="absolute -bottom-1 left-0 w-0 h-[1px] 
  bg-rosso-controllo group-hover:w-full transition-all duration-300" />
```
Linea rossa che si estende al hover.

## 🎪 Hero Section

### Parallax Scroll
```typescript
const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
```
Il contenuto si muove più lentamente dello scroll (effetto profondità).

### Pulsing Dot
```typescript
animate={{
  scale: [1, 1.5, 1],
  opacity: [1, 0.5, 1],
}}
transition={{
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut"
}}
```
Il punto rosso pulsa continuamente per attirare l'attenzione.

### Crosshair Overlay
```typescript
const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
```
Il mirino scompare rapidamente allo scroll iniziale.

### CTA Shimmer Effect
```typescript
<motion.div
  className="absolute inset-0 bg-bianco-luce"
  initial={{ x: "-100%" }}
  whileHover={{ x: "100%" }}
  transition={{ duration: 0.5 }}
  style={{ opacity: 0.1 }}
/>
```
Effetto luce che attraversa il bottone al hover.

## 📖 About Section

### Scroll Trigger
```typescript
const isInView = useInView(ref, { once: true, margin: "-100px" });

initial={{ opacity: 0, x: -30 }}
animate={isInView ? { opacity: 1, x: 0 } : {}}
```
Le animazioni partono quando la sezione entra nel viewport.

### Features Hover Slide
```typescript
whileHover={{ x: 10 }}
```
Le card si spostano leggermente a destra al hover.

### Icon Rotation
```typescript
whileHover={{ rotate: 180 }}
transition={{ duration: 0.5 }}
```
L'icona ruota al hover della feature card.

### Stats Count Animation
```typescript
initial={{ opacity: 0, scale: 0.8 }}
animate={isInView ? { opacity: 1, scale: 1 } : {}}
transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
```
Le statistiche "crescono" in sequenza.

## 🏋️ Training Section

### Intensity Bar Animation
```typescript
<motion.div
  className="h-full bg-rosso-controllo"
  initial={{ width: 0 }}
  animate={isInView ? { width: `${program.intensity}%` } : {}}
  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
/>
```
La barra di intensità si riempie progressivamente.

### Card Lift on Hover
```typescript
whileHover={{ y: -10 }}
```
Le card si sollevano leggermente al hover.

### Staggered Pulse Dots
```typescript
animate={{
  scale: [1, 1.5, 1],
  opacity: [0.5, 1, 0.5],
}}
transition={{
  duration: 2,
  repeat: Infinity,
  delay: index * 0.3
}}
```
I punti rossi pulsano in sequenza sfalsata.

### Expand CTA on Hover
```typescript
initial={{ opacity: 0, height: 0 }}
whileHover={{ opacity: 1, height: "auto" }}
```
Il CTA appare smooth al hover della card.

## 🧠 Mindset Section

### Large Background Text
```typescript
initial={{ scale: 0.8, opacity: 0 }}
animate={isInView ? { scale: 1, opacity: 0.05 } : {}}
transition={{ duration: 1.5 }}
```
Testo gigante che cresce dolcemente come sfondo.

### Alternating Slide In
```typescript
initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
animate={isInView ? { opacity: 1, x: 0 } : {}}
```
Le sezioni entrano alternativamente da sinistra e destra.

### Number Scale Animation
```typescript
initial={{ opacity: 0, scale: 0.5 }}
animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
```
I numeri grandi crescono dietro il contenuto.

### Rotating Crosshair
```typescript
animate={{ rotate: [0, 360] }}
transition={{
  duration: 20,
  repeat: Infinity,
  ease: "linear"
}}
```
Il mirino ruota continuamente e lentamente.

### Progress Line
```typescript
initial={{ width: 0 }}
animate={isInView ? { width: 80 } : {}}
transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
```
La linea rossa si estende progressivamente.

## 📧 CTA/Contact Section

### Form Input Focus
```typescript
<motion.input
  whileFocus={{ scale: 1.02 }}
  className="... focus:border-rosso-controllo"
/>
```
Gli input crescono leggermente quando attivi.

### Info Cards Slide
```typescript
whileHover={{ x: 5 }}
```
Le card info si spostano leggermente a destra.

### Submit Button
```typescript
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```
Il bottone cresce al hover e si comprime al click.

## 👣 Footer

### Sequential Fade In
```typescript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.1 }}
viewport={{ once: true }}
```
Le colonne del footer appaiono in sequenza.

### Social Icon Effects
```typescript
whileHover={{ scale: 1.1, rotate: 5 }}
whileTap={{ scale: 0.9 }}
```
Le icone social si ingrandiscono e ruotano leggermente.

### APX Pulse Dot
```typescript
animate={{
  scale: [1, 1.5, 1],
  opacity: [1, 0.5, 1],
}}
transition={{
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut"
}}
```
Punto rosso che pulsa per l'evento APX.

## 🎪 Loader (Opzionale)

### Progress Circle
```typescript
strokeDashoffset={`${2 * Math.PI * 60 * (1 - progress / 100)}`}
```
Cerchio SVG che si riempie in base al progresso.

### Exit Animation
```typescript
exit={{ opacity: 0 }}
transition={{ duration: 0.5 }}
```
Il loader scompare con fade out.

## 🎛️ Customizzazione Animazioni

### Modificare Velocità Globale
In `tailwind.config.ts`:
```typescript
animation: {
  'pulse-slow': 'pulse 3s ...', // Cambia durata
}
```

### Disabilitare Animazioni
Per accessibility:
```typescript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

<motion.div
  animate={prefersReducedMotion ? {} : { x: 100 }}
/>
```

### Creare Nuove Animazioni
Template base:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}      // Stato iniziale
  animate={{ opacity: 1, y: 0 }}       // Stato finale
  transition={{ 
    duration: 0.6,                     // Durata
    delay: 0.2,                        // Ritardo
    ease: "easeOut"                    // Curva
  }}
  whileHover={{ scale: 1.05 }}         // Al hover
  whileTap={{ scale: 0.95 }}           // Al click
>
  Contenuto
</motion.div>
```

## ⚡ Performance Tips

### Use GPU-Accelerated Properties
✅ Usa: `transform`, `opacity`, `filter`
❌ Evita: `width`, `height`, `top`, `left`

### Lazy Animations
```typescript
const controls = useAnimation();

useEffect(() => {
  if (isInView) {
    controls.start("visible");
  }
}, [isInView, controls]);
```

### Will-Change CSS
Per animazioni complesse:
```css
.complex-animation {
  will-change: transform;
}
```

### Throttle Scroll Events
```typescript
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end end"]
});
// Framer Motion ottimizza automaticamente
```

## 🎨 Easing Reference

```typescript
// Linear
ease: "linear"

// Ease Out (default per UI)
ease: "easeOut"

// Ease In Out (smooth)
ease: "easeInOut"

// Custom Bezier
ease: [0.43, 0.13, 0.23, 0.96]

// Spring (naturale)
type: "spring"
stiffness: 100
damping: 10
```

## 📊 Animation Budget

Per mantenere 60fps:
- Max **3-4 elementi** animati simultaneamente
- Preferisci `transform` a position changes
- Usa `will-change` con parsimonia
- Test su dispositivi low-end

---

**Pro Tip**: Apri DevTools > Performance per analizzare le animazioni e identificare bottleneck.

