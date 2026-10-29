/**
 * ViCli Website Configuratie
 * ==============================
 * Centrale instellingen voor teksten, links en platformen.
 */

window.VICLI_CONFIG = {
  brand: {
    name: "ViCli",
    tagline: "CRM • Calendar • POS",
    slogan: "Het slimme CRM, agendabeheer & kassa voor elke ZZP'er met terugkerende klanten.",
    description: "Alles wat je als zelfstandige dienstverlener nodig hebt: moeiteloos afspraken inplannen, klantenkaarten met strippen bijhouden, snelle kassa-bonnen en sluitende BTW-rapportages. Native gebouwd voor iOS en Android.",
    rating: "4.9 / 5",
    trialDays: "14 dagen gratis",
    appStoreUrl: "https://apps.apple.com/app/vicli/id6813818081", // Directe link naar ViCli in de Apple App Store
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vicli.app", // Directe link naar ViCli in de Google Play Store
  },

  contact: {
    email: "visitingclients@gmail.com",
    instagram: "https://instagram.com/vicli.app",
    linkedin: "https://linkedin.com/company/vicli"
  },

  hero: {
    badge: "✨ Voor elke ZZP'er met terugkerende klanten",
    title: "Minder administratie, meer tijd voor je klanten.",
    subtitle: "Of je nu kapper, pedicure, coach, personal trainer of beautyspecialist bent: ViCli brengt jouw agenda, klantenbeheer en kassa samen in één vloeiende app.",
    ctaPrimary: "Download de app",
    ctaSecondary: "Ontdek alle functies",
    highlights: [
      "14 dagen gratis proefperiode",
      "Geen commissies per klant",
      "Voor iPhone, iPad & Android",
      "Lokaal & offline werkend"
    ]
  },

  targetAudience: [
    { title: "Beauty & Salons", desc: "Schoonheidsspecialistes, nagelstudio's, kappers & brow bars", icon: "sparkles" },
    { title: "Therapeuten & Zorg", desc: "Pedicures, huidtherapeuten, masseurs & fysiotherapie", icon: "heart-pulse" },
    { title: "Coaches & Trainers", desc: "Personal trainers, lifestyle coaches & yogadocenten", icon: "dumbbell" },
    { title: "Vakspecialisten", desc: "Hondentrimmers, fotografen & zelfstandig dienstverleners", icon: "scissors" }
  ],

  features: [
    {
      id: "crm",
      tabTitle: "Klanten & Strippen",
      title: "Digitale klantenkaart met strippenkaarten & historie",
      subtitle: "Houd al je terugkerende klanten overzichtelijk bij. Zie direct contactgegevens, notities, eerdere bezoeken en hoeveel strippen iemand nog over heeft.",
      highlights: [
        "Compleet overzicht van al je klanten met telefoonnummer en e-mail",
        "Geïntegreerde strippenkaarten en pakketten (direct inzicht in saldo)",
        "Notities en voorkeuren per klant direct bij de hand",
        "Klanten snel vinden via zoekbalk of handige check-in"
      ],
      tag: "Klantenbeheer (CRM)",
      image: "./assets/vicli-ipad-klanten.png"
    },
    {
      id: "agenda",
      tabTitle: "Agenda & Planning",
      title: "Overzichtelijke dag- en weekplanning zonder gedoe",
      subtitle: "Plan afspraken in een oogwenk in. Schakel soepel tussen dagoverzicht, komende afspraken en eerdere bezoeken.",
      highlights: [
        "Duidelijke weergave van komende en voltooide afspraken",
        "Moeiteloos nieuwe afspraken toevoegen met één tik op het plusje",
        "Automatische herinneringen zodat klanten hun afspraak niet vergeten",
        "Werkt razendsnel en reageert direct op al je apparaten"
      ],
      tag: "Agenda & Kalender",
      image: "./assets/vicli-iphone-agenda.png"
    },
    {
      id: "pos",
      tabTitle: "Kassa & Bonnen",
      title: "Snelle kassa met BTW-splitsing, barcodes en retouren",
      subtitle: "Reken diensten en producten binnen seconden af. Maak direct professionele bonnen aan met de juiste belastingpercentages.",
      highlights: [
        "Producten toevoegen via barcodescanner óf snelle zoekfunctie",
        "Eenvoudig retouren en terugstortingen registreren",
        "Automatische BTW-berekening (21%, 9%, 0%) volgens de belastingregels",
        "Bon direct mailen als PDF of afdrukken voor de klant"
      ],
      tag: "Kassa (POS)",
      image: "./assets/vicli-ipad-klanten.png"
    },
    {
      id: "finance",
      tabTitle: "Boekhouding & Export",
      title: "Klaar voor je belastingaangifte en boekhouder",
      subtitle: "Nooit meer bonnetjes handmatig overtypen of urenlang optellen. ViCli houdt al je cijfers sluitend bij.",
      highlights: [
        "Direct inzicht in je omzet per dag, maand en kwartaal",
        "1-klik export van bonnen en BTW-specificaties naar PDF en CSV",
        "Volledig fiscaal betrouwbare registratie",
        "Rust en controle over je zakelijke administratie"
      ],
      tag: "Financieel & Export",
      image: "./assets/vicli-ipad-klanten.png"
    },
    {
      id: "sync",
      tabTitle: "Multi-Device Sync",
      title: "Synchroniseer tussen iPhone, iPad en Android",
      subtitle: "Werk met meerdere apparaten tegelijk: je iPad op je werkplek en je telefoon onderweg.",
      highlights: [
        "Koppel eenvoudig apparaten via een veilige werkgroep QR-code",
        "Werkt altijd door: offline-first ontwerp als internet even wegvalt",
        "Automatische synchronisatie zodra er weer verbinding is",
        "Volledige synchronisatie tussen iOS én Android"
      ],
      tag: "Cloud & Apparaten",
      image: "./assets/vicli-ipad-klanten.png"
    }
  ],

  pricing: {
    title: "Toegankelijk en transparant. Geen verborgen kosten.",
    subtitle: "Een eerlijk maandelijks abonnement voor minder dan een tientje. Geen commissies per afspraak of percentage over jouw omzet.",
    notice: "* De exacte abonnementsprijs wordt beheerd via de Apple App Store en Google Play Store en kan per regio of valuta licht variëren (vanaf ca. €9,49 op Android en €9,99 op iOS in Nederland/België).",
    trialText: "Inclusief 14 dagen gratis proefperiode via de App Store & Google Play",
    allFeaturesIncluded: [
      "Alle CRM klantenkaarten & notities",
      "Strippenkaarten & pakketbeheer",
      "Volledige agenda & afsprakenplanning",
      "Kassasysteem met PDF-bonnen & retouren",
      "Barcode scanner & productbeheer",
      "BTW-overzichten & export voor je boekhouder",
      "Multi-device cloud synchronisatie",
      "Offline-first betrouwbaarheid",
      "Regelmatige updates op iOS & Android"
    ]
  },

  faq: [
    {
      q: "Voor wie is ViCli bedoeld?",
      a: "ViCli is speciaal ontworpen voor élke ZZP'er en zelfstandig ondernemer met terugkerende klanten. Denk aan schoonheidsspecialistes, kappers, nagelstylistes en pedicures, maar ook personal trainers, masseurs, coaches, therapeuten en hondentrimmers. Iedereen die klanten, afspraken en kassa-bonnen overzichtelijk op één plek wil hebben."
    },
    {
      q: "Hoeveel kost de ViCli app?",
      a: "ViCli kost minder dan een tientje per maand (ca. €9,49 op Android en €9,99 op iOS in Nederland/België). De exacte prijs wordt bepaald door de App Store en Google Play Store op basis van jouw land en valuta. Je betaalt géén commissie per afspraak of transactiekosten over jouw omzet."
    },
    {
      q: "Hoe werkt de gratis proefperiode van 14 dagen?",
      a: "Wanneer je de app downloadt in de App Store of Google Play Store, kun je direct starten met een gratis proefperiode van 14 dagen. Je kunt alle functies onbeperkt testen. Besluit je niet door te gaan? Dan zeg je eenvoudig op via je accountinstellingen zonder dat er kosten in rekening worden gebracht."
    },
    {
      q: "Kan ik ViCli op zowel iPhone/iPad als Android gebruiken?",
      a: "Ja! ViCli heeft volwaardige apps voor zowel iOS (iPhone en iPad) als Android (smartphones en tablets). Je kunt ze zelfs tegelijkertijd gebruiken en naadloos met elkaar synchroniseren via een werkgroep."
    },
    {
      q: "Blijft ViCli werken als mijn internetverbinding wegvalt?",
      a: "Ja, ViCli is gebouwd volgens een 'offline-first' principe. Al je gegevens worden lokaal op je toestel bewaard en functioneren altijd. Zodra je weer verbinding hebt, synchroniseert de app automatisch met de cloud en je andere apparaten."
    },
    {
      q: "Hoe zit het met de BTW en kassa-bonnen voor mijn belastingaangifte?",
      a: "ViCli berekent automatisch de BTW per regel (bijv. 21%, 9% of 0%) en genereert nette bonnen met unieke nummering. Je kunt aan het einde van de maand of het kwartaal met één druk op de knop een compleet rapport exporteren voor je boekhouder."
    }
  ]
};
