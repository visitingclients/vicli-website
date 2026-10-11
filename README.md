# ViCli Website — Salon Management & Kassa Systeem

Een ultra-elegante, razendsnelle en conversiegerichte landingspagina voor de ViCli salon app.

---

## 📁 Projectstructuur

```
vicli-website/
├── index.html        # De complete HTML landingspagina (Tailwind, Lucide icons, responsive)
├── site-config.js    # ⚙️ CENTRAAL CONFIGURATIEBESTAND: pas hier teksten, prijzen en contact aan!
├── netlify.toml      # Netlify instellingen (automatische deploys & headers)
├── .gitignore        # Negeert systeembestanden
└── assets/
    ├── hero-mockup.jpg   # Realistische 8k iPad & iPhone salon mockup
    └── feature-pos.jpg   # Luxe POS kassa balie afbeelding
```

---

## 🎨 Hoe pas je teksten & prijzen aan?

Je hoeft **geen HTML of code** te bewerken! Open eenvoudig:
👉 `site-config.js`

Hier kun je direct:
- Je e-mail, telefoonnummer en WhatsApp link aanpassen
- De tarieven en pakketten wijzigen
- Functies en teksten veranderen
- FAQ vragen & antwoorden toevoegen
- Klantreviews aanpassen

Zodra je dit bestand opslaat en refresht in je browser, is de site direct bijgewerkt!

---

## 💻 1. Lokaal bekijken op je Mac

Open je terminal en draai:
```bash
cd /Users/quincy/.gemini/antigravity/scratch/vicli-website
python3 -m http.server 3000
```
Open vervolgens in je browser: [http://localhost:3000](http://localhost:3000)

---

## 🚀 2. Op GitHub zetten

1. Maak een nieuwe repository aan op [GitHub.com](https://github.com) genaamd **`vicli-website`** (kies Public of Private).
2. Voer in je terminal de volgende commando's uit:

```bash
cd /Users/quincy/.gemini/antigravity/scratch/vicli-website
git init
git add .
git commit -m "Initial commit ViCli luxury website"
git branch -M main
git remote add origin https://github.com/JOUW_GEBRUIKERSNAAM/vicli-website.git
git push -u origin main
```
*(Vervang `JOUW_GEBRUIKERSNAAM` door je eigen GitHub username)*.

---

## 🌐 3. Gratis hosten op Netlify (Automatische deploys)

1. Ga naar [Netlify.com](https://app.netlify.com) en log in met je **GitHub** account.
2. Klik op **"Add new site"** $\rightarrow$ **"Import an existing project"**.
3. Kies **GitHub** en klik op je **`vicli-website`** repository.
4. Netlify herkent alles vanzelf (Publish directory is `.`).
5. Klik op **"Deploy vicli-website"**.

> Binnen 60 seconden is je site live op een gratis Netlify URL (bijv. `vicli.netlify.app`). Elke keer als je in de toekomst code pusht naar GitHub, werkt Netlify je site direct automatisch bij!

---

## 🔗 4. Je eigen domeinnaam koppelen (bijv. vicli.nl)

1. Ga in je Netlify dashboard naar:
   **Site configuration** $\rightarrow$ **Domain management** $\rightarrow$ **Add a domain**.
2. Typ je domeinnaam in (bijv. `vicli.nl`).
3. Ga naar de website waar je het domein hebt geregistreerd (bijv. TransIP, Hostnet, Mijndomein, Vimexx) en open het **DNS-beheer**:
   - Voeg een **A-record** toe:
     - **Naam / Host**: `@` (of leeg laten)
     - **Type**: `A`
     - **Waarde / IP**: `75.2.60.5` (het officiële Netlify load balancer IP)
   - Voeg een **CNAME-record** toe:
     - **Naam / Host**: `www`
     - **Type**: `CNAME`
     - **Waarde**: `jouw-site-naam.netlify.app`
4. Netlify activeert automatisch binnen enkele minuten een **gratis Let's Encrypt SSL-certificaat** (groen slotje / veilige HTTPS).
