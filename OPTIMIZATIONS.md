# ⚡ Ottimizzazioni UI/UX + Microanimazioni

## 🎖️ Font Militare - Airborne 86

### Integrazione Strategica (Ponderata)
Il font **Airborne 86** è usato **solo** dove serve per l'imprinting militare:

✅ **SI (impatto massimo):**
- Titolo principale "OTHERWISE"
- Location "FERRARA"
- Tagline "STIAMO LUSTRANDO I MUSCOLI"
- Valori: DISCIPLINA, CONTROLLO, LUCIDITÀ  
- Navigation items
- CTA buttons
- Codici militari (TRN_01, FERRARA_BASE_001)
- Numeri grandi (statistiche, intensità)

❌ **NO (leggibilità prioritaria):**
- Body text / paragraf

i
- Descrizioni lunghe
- Form inputs
- Meta info secondaria

### Fallback Intelligente
```css
font-family: 'Airborne 86', 'Oswald', 'Impact', monospace;
```
1. Prova Airborne 86 (custom)
2. Se non disponibile → Oswald (Google Fonts)
3. Ultimo fallback → Impact → monospace

**Risultato:** Il sito funziona subito con Oswald, poi passa ad Airborne 86 quando carichi il font.

---

## 🎬 Microanimazioni Avanzate

### Hero Section

#### 1. Mouse-Following Glow
```typescript
useMotionValue + useSpring
```
- Luce rossa sottile segue il mouse
- Spring physics per movimento fluido
- Non invadente, aggiunge profondità

#### 2. Parallax Background
```typescript
scale: useTransform(scrollYProgress, [0, 1], [1, 1.1])
```
- Background zoom out durante scroll
- Effetto Ken Burns subtile

#### 3. Scan Line
```css
animation: scan 4s linear infinite
```
- Linea rossa animata verticale
- Richiamo a HUD militare

#### 4. Values Grid - Corner Brackets
```typescript
whileHover: { x: 0, y: 0 }
initial: { x: 5, y: 5 }
```
- Brackets angolari appaiono all'hover
- Muovono verso gli angoli (tactile feedback)

#### 5. CTA Shine Effect
```typescript
whileHover: { x: "200%" }
initial: { x: "-100%" }
```
- Gradiente luminoso attraversa il button
- Simile a riflesso metallico

#### 6. Scroll Indicator Animated
```typescript
animate: { y: [0, 48] }
transition: { duration: 2, repeat: Infinity }
```
- Dot rosso scende lungo la linea
- Loop infinito, invita a scrollare

---

### Navigation

#### 1. Active Section Tracking
```typescript
useEffect → detect scroll position
```
- Nav item si illumina quando sezione è visibile
- Linea rossa sotto item attivo

#### 2. Logo Glitch Effect
```css
text-shadow: -2px 0 #B31010
```
- Effetto glitch al hover
- 3 layer sovrapposti con offset
- Richiamo a interferenza digitale

#### 3. Border Fade-In
```typescript
borderOpacity: useTransform(scrollY, [0, 100], [0, 0.3])
```
- Bordo bottom appare gradualmente
- Separazione visiva dallo scroll

#### 4. Nav Items Hover
```typescript
whileHover: { y: -2 }
```
- Lift leggero al hover
- Feedback immediato

---

### Custom Scrollbar

```css
::-webkit-scrollbar-thumb:hover {
  background: #B31010;
}
```
- Scrollbar nero con thumb grigio
- Diventa rosso all'hover
- Coerente con brand

---

### Animazioni Globali Aggiunte

#### Glow Animation
```css
@keyframes glow {
  0%, 100%: box-shadow: 0 0 5px rgba(179, 16, 16, 0.5);
  50%: box-shadow: 0 0 20px rgba(179, 16, 16, 0.8);
}
```
**Uso:** Elementi interattivi, crosshair, dots

#### Flicker Animation
```css
@keyframes flicker {
  42%: opacity: 0;
  43.01%: opacity: 1;
}
```
**Uso:** LED, indicatori, Easter eggs

#### Glitch Class
```css
.glitch-hover:hover {
  animation: glitch 0.3s cubic-bezier;
}
```
**Uso:** Testi militari, codici, labels

---

## 🎯 Principi UX Applicati

### 1. Progressive Enhancement
- Funziona senza JS
- Animazioni aggiunte via Framer Motion
- Fallback font sempre disponibile

### 2. Performance First
- GPU-accelerated animations (transform, opacity)
- useTransform per calcoli smooth
- Spring physics per movimenti naturali

### 3. Accessibility
```typescript
font-display: swap
```
- Font swap evita FOIT (Flash of Invisible Text)
- Testi leggibili anche durante caricamento

### 4. Feedback Visivo
Ogni interazione ha risposta:
- Hover → Scale + colore
- Click → Scale down (whileTap)
- Scroll → Parallax + fade
- Focus → Border color change

### 5. Visual Hierarchy
```
Font-size + Weight
 ↓
Military font per impact
 ↓
Colore (rosso = action)
 ↓
Animazione (attrae attenzione)
```

---

## 📊 Metriche Performance

### Lighthouse Targets
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

### Font Loading
```
Oswald (fallback): ~15kb
Airborne 86: ~30kb (WOFF2)
```
**Total:** <50kb fonts

### Animations Budget
- Max 3-4 elementi animati simultaneamente
- 60fps garantiti con transform/opacity
- No layout thrashing

---

## 🔄 Future Enhancements

### Fase 2 (opzionale)
- [ ] Particle system nel background (sottile)
- [ ] Typewriter effect per tagline
- [ ] 3D tilt su cards (solo desktop)
- [ ] Sound effects su CTA (muted by default)
- [ ] Dark/Light mode toggle (tema militare notturno)
- [ ] Easter egg: Konami code → special animation

### Fase 3 (advanced)
- [ ] WebGL background (low-poly gym equipment)
- [ ] Cursor custom (crosshair)
- [ ] Parallax sections con depth
- [ ] Scroll-triggered number counters
- [ ] Video background (B&W training footage)

---

## ✅ Checklist Implementazione

### Completed ✅
- [x] Font Airborne 86 integrato con fallback Oswald
- [x] Scrollbar custom branded
- [x] Hero: mouse glow + parallax + scan line
- [x] Navigation: glitch logo + active tracking
- [x] Values grid: corner brackets animation
- [x] CTA: shine effect + hover states
- [x] Scroll indicator: animated dot
- [x] Global animations: glow, flicker, glitch

### To Complete
- [ ] Download Airborne 86 font files
- [ ] Place in /public/fonts/
- [ ] Test su mobile (touch states)
- [ ] Optimize images (WebP)
- [ ] Add loading states for forms

---

## 🎨 Style Tokens

### Timing Functions
```css
ease-out: cubic-bezier(0, 0, 0.2, 1)      /* Entrances */
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1) /* Smooth */
spring: { stiffness: 300, damping: 20 }   /* Bouncy */
```

### Duration Standards
```
Micro: 0.2s   (hover, focus)
Short: 0.3-0.4s (transitions)
Medium: 0.6-0.8s (entrances)
Long: 1-2s (parallax, special effects)
```

### Z-Index Scale
```
-1: Background effects
0: Default
10: Content layers
50: Nav
100: Modals
```

---

**Philosophy:** Ogni animazione deve avere uno **scopo**. Non animiamo per decorare, ma per:
1. Guidare l'attenzione
2. Dare feedback
3. Creare gerarchia
4. Reinforzare il brand militare

> "Disciplina anche nelle animazioni. Controllo dei tempi. Lucidità nel purpose."

