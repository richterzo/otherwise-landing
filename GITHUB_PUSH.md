# 🚀 Push su GitHub - Quick Guide

## ✅ Git Setup Completato

```bash
✓ git init
✓ git add .
✓ git commit -m "feat: Otherwise CrossFit Ferrara landing page"
✓ Branch: main
```

---

## 📦 Opzione 1: GitHub CLI (Veloce)

### **Se hai GitHub CLI installato**

```bash
cd /Users/riccardoterzaghi/Documents/GitHub/otherwise-landing

# Login (se non già fatto)
gh auth login

# Crea repo e pusha in un comando
gh repo create otherwise-landing --public --source=. --remote=origin --push

# Done! ✅
```

### **Installa GitHub CLI** (se non ce l'hai)

```bash
brew install gh
```

---

## 📦 Opzione 2: Manuale (Web + Terminal)

### **Step 1: Crea Repo su GitHub**

1. Vai su [github.com/new](https://github.com/new)
2. **Repository name**: `otherwise-landing`
3. **Description**: "Otherwise CrossFit Ferrara - Landing Page"
4. **Public** (o Private se preferisci)
5. ❌ **NON** aggiungere README, .gitignore, license (già presenti)
6. Click **"Create repository"**

### **Step 2: Push da Terminal**

```bash
cd /Users/riccardoterzaghi/Documents/GitHub/otherwise-landing

# Aggiungi remote (sostituisci TUO_USERNAME)
git remote add origin https://github.com/TUO_USERNAME/otherwise-landing.git

# Push
git push -u origin main
```

### **Step 3: Verifica**

Vai su `https://github.com/TUO_USERNAME/otherwise-landing` e verifica che tutti i file siano presenti.

---

## 🔑 Autenticazione GitHub

### **Se usa HTTPS e ti chiede password**

GitHub non accetta più password. Devi usare **Personal Access Token**:

1. Vai su: [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Scopes: seleziona `repo`
4. Copia il token
5. Quando fai `git push`, usa il token come password

### **Oppure usa SSH** (consigliato)

```bash
# Genera SSH key
ssh-keygen -t ed25519 -C "tua@email.com"

# Copia la chiave pubblica
cat ~/.ssh/id_ed25519.pub | pbcopy

# Aggiungi a GitHub:
# github.com/settings/keys → "New SSH key" → Incolla

# Cambia remote da HTTPS a SSH:
git remote set-url origin git@github.com:TUO_USERNAME/otherwise-landing.git

# Push
git push -u origin main
```

---

## ✅ Dopo il Push

Una volta pushato su GitHub, sei pronto per il **deploy su Vercel**!

### **Deploy Vercel (Metodo Facile)**

1. Vai su [vercel.com/new](https://vercel.com/new)
2. Login con GitHub
3. Click "Import Project"
4. Seleziona `otherwise-landing`
5. Vercel rileva Next.js automaticamente
6. Click "Deploy"
7. ✅ **Live in ~2 minuti!**

---

## 🔄 Workflow Futuro

```bash
# Modifichi codice...

git add .
git commit -m "fix: aggiorna copy"
git push

# Vercel auto-deploya automaticamente! 🚀
```

---

## 📊 Repo Info

```
Repository: otherwise-landing
Framework: Next.js 16
Styling: Tailwind CSS
Animations: Framer Motion
Font: Airborne 86 (custom)
Target: CrossFit Ferrara
```

---

**Ready to push? Scegli Opzione 1 (CLI) o 2 (Manuale) e vai! 🔥**

