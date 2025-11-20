# 🎯 Brand Guidelines - Otherwise Athletics Evolved

Linee guida per mantenere la coerenza del brand tra la landing Otherwise Ferrara e l'evento APX Bologna.

**STIAMO LUSTRANDO I MUSCOLI**  
SE NON HAI PAZIENZA VIENI A TROVARCI DAL VIVO

## 🎨 Palette Colori - Struttura d'Uso

### Regola 90/8/2

Questa è la **legge fondamentale** del brand Otherwise/APX:

```
90% → Nero + Grigi (ambiente operativo)
 8% → Bianco Luce (chiarezza mentale)
 2% → Rosso Controllo (focus, CTA)
```

### Quando Usare Ogni Colore

#### Nero Tattico (#0A0A0A)
- Background principale
- Fondali di sezioni
- Base per tutti i layout
- **Messaggio**: Controllo, disciplina, ambiente operativo

#### Grigio Cemento (#2A2A2A)
- Background secondari
- Card e box informativi
- Hover states
- Separatori importanti
- **Messaggio**: Stabilità, struttura, materiale

#### Grigio Acciaio (#6F6F6F)
- Testi secondari
- Descrizioni
- Label e metadata
- Linee e bordi sottili
- Icone passive
- **Messaggio**: Tecnico, preciso, hardware

#### Bianco Luce (#F5F5F5)
- Titoli principali
- Testi primari
- Highlights informativi
- Hover text (da grigio a bianco)
- **Messaggio**: Chiarezza mentale, lucidità

#### Rosso Controllo (#B31010) ⚠️ USARE CON PARSIMONIA
**Solo per:**
- Call-to-action buttons
- Link attivi/hover finale
- Elementi di focus (mirino, dot pulse)
- Highlight critici
- Border su elementi attivi

**MAI per:**
- Background estesi
- Testi lunghi
- Decorazioni multiple
- Elementi ripetuti in massa

Il rosso deve essere un **segnale**, non un colore decorativo.

## 📐 Typography

### Gerarchia Font

```typescript
// Titoli principali - Sans Serif (Inter)
<h1 className="text-5xl font-bold text-bianco-luce">
  OTHERWISE
</h1>

// Elementi tecnici - Monospace (JetBrains Mono)
<span className="font-mono text-sm tracking-[0.3em]">
  RAVENNA_BASE_001
</span>

// Body text - Sans Serif
<p className="text-base text-grigio-acciaio leading-relaxed">
  Descrizione...
</p>
```

### Best Practices Tipografia

1. **Tracking (letter-spacing)**
   - Titoli grandi: `tracking-tight`
   - Codici/label: `tracking-wider` o `tracking-[0.3em]`
   - Body: default

2. **Line Height**
   - Titoli: `leading-tight`
   - Body: `leading-relaxed`
   - Codice: `leading-none`

3. **Font Weight**
   - Titoli: `font-bold`
   - Body: `font-normal`
   - Emphasis: non usare bold, usa il colore (bianco-luce)

## 🎭 Tone of Voice

### Keywords
- **Disciplina** (non "motivazione")
- **Controllo** (non "passione")
- **Lucidità** (non "energia")
- **Operativo** (non "dinamico")
- **Tattico** (non "strategico")
- **Forgiato** (non "trasformato")

### Stile Comunicazione

✅ **DO:**
- Frasi brevi e dirette
- Linguaggio tecnico ma accessibile
- Tono militare ma civile
- Verbi imperativi: "Forgia", "Domina", "Controlla"
- Numeri e dati concreti

❌ **DON'T:**
- Eccesso di emoji
- Linguaggio motivazionale generico
- Frasi lunghe e complesse
- Tono amichevole/casual
- Superlativi esagerati

### Esempi

**✅ Corretto:**
> "Disciplina. Controllo. Lucidità. Otherwise non è una palestra convenzionale. È un ambiente operativo dove corpo e mente vengono forgiati."

**❌ Sbagliato:**
> "🔥 Vieni a scoprire la palestra più cool di Ravenna! Ti aiuteremo a raggiungere i tuoi sogni con energia e passione! 💪✨"

## 🎨 UI Elements

### Buttons

```typescript
// Primary CTA (rosso)
<button className="px-8 py-4 bg-rosso-controllo text-bianco-luce 
  font-mono hover:bg-rosso-battito">
  INIZIA ORA
</button>

// Secondary CTA (ghost)
<button className="px-8 py-4 border border-grigio-acciaio 
  text-grigio-acciaio hover:text-bianco-luce hover:border-bianco-luce">
  SCOPRI DI PIÙ
</button>
```

### Cards

```typescript
<div className="bg-grigio-cemento p-8 border border-grigio-acciaio 
  border-opacity-30 hover:border-rosso-controllo hover:border-opacity-50">
  {/* Content */}
</div>
```

### Forms

```typescript
<input className="bg-nero-tattico border border-grigio-acciaio 
  border-opacity-30 focus:border-rosso-controllo 
  text-bianco-luce font-mono" />
```

## 🎯 Iconografia

### Stile Icone
- **Preferisci**: Simboli geometrici (⊗, ⊕, ⊙, →, ×)
- **Alternative**: Icone line-based minimal
- **Evita**: Icone colorate, illustrazioni cartoon

### Mirino/Crosshair
Elemento distintivo del brand:

```typescript
<div className="relative w-32 h-32">
  {/* Linee orizzontale/verticale */}
  <div className="absolute top-1/2 left-0 w-full h-[1px] 
    bg-rosso-controllo opacity-30" />
  <div className="absolute left-1/2 top-0 h-full w-[1px] 
    bg-rosso-controllo opacity-30" />
  
  {/* Dot centrale */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
    -translate-y-1/2 w-3 h-3 bg-rosso-controllo rounded-full" />
</div>
```

## 🖼️ Imagery

### Fotografia
- **Stile**: Industrial, high contrast, desaturato
- **Soggetti**: Attrezzatura, movimento blur, close-up tecnici
- **Trattamento**: 
  - Converti in bianco/nero o quasi
  - Aumenta contrasto
  - Overlay scuro (opacity 60-80%)
  - Accenti rossi minimi

### Video
- Slow motion per enfatizzare controllo
- Color grading verso toni freddi
- Cut netti, no transizioni soft

## 📱 Responsive Behavior

### Mobile First
```typescript
// Desktop → Mobile priority
text-5xl md:text-7xl lg:text-8xl  // Scale down
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
hidden md:flex  // Show on desktop only
```

### Touch Targets
- Minimo 44x44px per bottoni mobile
- Aumenta padding su mobile
- Semplifica animazioni su touch devices

## 🔄 Coerenza APX

### Otherwise Ferrara ↔ APX Bologna

Elementi condivisi:
- ✅ Stessa palette colori
- ✅ Stesso tone of voice
- ✅ Stesso uso del rosso (2%)
- ✅ Elementi grafici (mirino, grid)
- ✅ Font mono per codici
- ✅ Approccio militare/civile

Differenze possibili:
- APX può essere più "evento" oriented
- Otherwise più "facility" focused
- APX: intensità maggiore nel messaging
- Otherwise: più welcoming per beginners

## ✅ Checklist Pre-Pubblicazione

### Visual
- [ ] Rosso usato solo per CTA e accent (<2%)
- [ ] Nero/grigi dominano (>90%)
- [ ] Font mono solo per elementi tecnici
- [ ] Animazioni smooth (60fps)
- [ ] Crosshair presente ma sottile

### Content
- [ ] Tone militare ma accessibile
- [ ] Nessun linguaggio motivazionale generico
- [ ] Valori chiave presenti: Disciplina, Controllo, Lucidità
- [ ] Numeri e dati concreti
- [ ] Call-to-action chiare

### Technical
- [ ] Lighthouse Performance >90
- [ ] Mobile responsive testato
- [ ] Form funzionante
- [ ] Meta tags ottimizzati
- [ ] Analytics configurati

## 🎓 Training per il Team

### Per Designer
"Pensa come un UI militare: funzionale, essenziale, preciso. 
Il rosso è un laser pointer, non un colore di sfondo."

### Per Copywriter
"Scrivi come un operatore: breve, diretto, tecnico ma chiaro. 
Niente fluff, solo fatti e azione."

### Per Developer
"Ogni animazione deve avere uno scopo. 
Ottimizza per performance, il brand è veloce e preciso."

---

**Mantra del Brand:**
> "90% ambiente. 8% chiarezza. 2% focus."

Il rosso è un mirino. Usalo per puntare l'attenzione dove serve.

