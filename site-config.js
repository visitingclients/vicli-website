/**
 * ViCli Website Configuratie
 * ==============================
 * Pas hier eenvoudig alle teksten, prijzen, contactgegevens en links aan.
 * De website leest deze gegevens automatisch in!
 */

window.VICLI_CONFIG = {
  brand: {
    name: "ViCli",
    tagline: "Salon Management & Kassa Systeem",
    slogan: "De alles-in-één kassa & management app voor de moderne beauty professional.",
    description: "Van moeiteloos afspraken plannen en razendsnelle kassa-bonnen tot digitaal klantenbeheer, BTW-rapportages en multi-device cloud sync. Ontworpen voor de veeleisende beauty salon, skin clinic en stylist.",
    rating: "4.9 / 5",
    reviewCount: "250+ tevreden salons",
    platforms: ["iOS (iPhone & iPad)", "Android (Telefoon & Tablet)"]
  },

  contact: {
    email: "info@vicli.nl",
    phone: "+31 (0)6 12 34 56 78",
    whatsappUrl: "https://wa.me/31612345678?text=Hallo%20ViCli,%20ik%20heb%20interesse%20in%20een%20demo!",
    address: "Amsterdam & heel Nederland / België",
    instagram: "https://instagram.com/vicli.app",
    linkedin: "https://linkedin.com/company/vicli"
  },

  hero: {
    badge: "✨ De nieuwe standaard voor beauty salons & clinics",
    ctaPrimary: "Start 14 dagen gratis",
    ctaSecondary: "Vraag demo aan",
    stats: [
      { value: "0%", label: "Commissie per afspraak" },
      { value: "80%", label: "Minder no-shows door SMS" },
      { value: "100%", label: "BTW-conform & export" },
      { value: "2 min", label: "Installatie & startklaar" }
    ]
  },

  features: [
    {
      id: "pos",
      tabTitle: "Kassa & Bonnen",
      title: "Slimme kassa, razendsnelle bonnen & retouren",
      subtitle: "Geen trage kassa meer bij het afrekenen. Reken direct behandelingen en producten af met barcodescanner of productzoeker.",
      highlights: [
        "Producten toevoegen via camera barcodescanner of snelle zoekbalk",
        "Eenvoudig retouren en terugstortingen registreren op bestaande bonnen",
        "Automatische BTW uitsplitsing (21%, 9%, 0%) volgens belastingrichtlijnen",
        "Bon direct printen of als professionele PDF e-mailen naar de klant"
      ],
      tag: "POS & Kassa"
    },
    {
      id: "agenda",
      tabTitle: "Agenda & Afspraken",
      title: "Moeiteloos plannen & automatische SMS herinneringen",
      subtitle: "Houd overzicht over je dag, behandelstoelen en medewerkers. Voorkom dure no-shows met slimme sms-berichten.",
      highlights: [
        "Overzichtelijke dag- en weekkalender op maat voor salons",
        "Automatische SMS-bevestigingen en herinneringen voorafgaand aan de afspraak",
        "Koppeling met strippenkaarten en behandelpakketten van klanten",
        "Beschikbaar op al je apparaten: altijd je agenda bij de hand"
      ],
      tag: "Planning & SMS"
    },
    {
      id: "crm",
      tabTitle: "Digitale Klantenkaart",
      title: "Bouw een hechte band met al je klanten",
      subtitle: "Alle klantgegevens, eerdere behandelingen, allergieën en productvoorkeuren op één centrale plek.",
      highlights: [
        "Snelle klant check-in via persoonlijke QR-code of NFC badge",
        "Uitgebreide behandelhistorie en notities per klant",
        "Automatische Google Review uitnodigingen na een geslaagde afspraak",
        "AVG/GDPR-veilig opgeslagen met lokale bescherming en optionele pincode-applock"
      ],
      tag: "Klanten & Loyaliteit"
    },
    {
      id: "finance",
      tabTitle: "BTW & Boekhouding",
      title: "Nooit meer stress aan het einde van het kwartaal",
      subtitle: "ViCli berekent automatisch al je omzet- en belastingcijfers. Met één druk op de knop klaar voor je boekhouder.",
      highlights: [
        "Automatische maand- en kwartaaloverzichten met BTW-splitsing",
        "1-klik export naar PDF of CSV voor je boekhoudprogramma",
        "Inzicht in omzet per medewerker, productcategorie en behandeling",
        "Sluitende kasopmaak en overzicht van betalingen"
      ],
      tag: "Boekhouding & Rapportage"
    },
    {
      id: "sync",
      tabTitle: "Multi-Device Sync",
      title: "Werk samen in de salon via veilige Cloud Sync",
      subtitle: "Gebruik ViCli gelijktijdig op de iPad bij de balie, je eigen iPhone en de tablets van je collega's.",
      highlights: [
        "Koppel eenvoudig nieuwe apparaten via een veilige werkgroep QR-code",
        "Offline-first: blijft gewoon werken als de wifi even wegvalt",
        "Automatische synchronisatie zodra er weer verbinding is",
        "Volledige synchronisatie tussen zowel iOS als Android apparaten"
      ],
      tag: "Werkgroep & Cloud"
    }
  ],

  pricing: {
    monthly: [
      {
        name: "Solo Specialist",
        price: 29,
        period: "per maand",
        description: "Ideaal voor zzp'ers en zelfstandig werkende beauty ondernemers.",
        badge: null,
        features: [
          "1 gebruiker & 1 apparaat",
          "Onbeperkt afspraken & klanten",
          "Kassa & bonnen genereren (PDF)",
          "Producten- & voorraadbeheer",
          "Basis BTW- en omzetrapportages",
          "E-mail ondersteuning"
        ],
        cta: "Start 14 dagen gratis",
        popular: false
      },
      {
        name: "Salon Pro",
        price: 49,
        period: "per maand",
        description: "Voor groeiende salons die maximale efficiëntie en automatisering willen.",
        badge: "Meest Gekozen",
        features: [
          "Tot 3 apparaten (Multi-device sync)",
          "Automatische SMS-herinneringen & campagnes",
          "Geavanceerde kassa (retouren & barcode scanner)",
          "Google Review verzoeken automatiseren",
          "Uitgebreide BTW- en kwartaalexport",
          "App-vergrendeling met pincode",
          "Prioriteitsondersteuning via WhatsApp"
        ],
        cta: "Start 14 dagen gratis",
        popular: true
      },
      {
        name: "Salon Team",
        price: 79,
        period: "per maand",
        description: "Voor klinieken en salons met meerdere behandelaren en stoelen.",
        badge: null,
        features: [
          "Onbeperkt aantal apparaten & medewerkers",
          "Werkgroepen met Master/Member rechten",
          "Omzetrapportage per medewerker",
          "Onbeperkte SMS-berichten",
          "Persoonlijke onboarding & data-import",
          "24/7 dedicated support"
        ],
        cta: "Vraag demo aan",
        popular: false
      }
    ],
    yearly: [
      {
        name: "Solo Specialist",
        price: 24,
        period: "per maand (jaarlijks gefactureerd)",
        description: "Ideaal voor zzp'ers en zelfstandig werkende beauty ondernemers.",
        badge: "Bespaar €60/jaar",
        features: [
          "1 gebruiker & 1 apparaat",
          "Onbeperkt afspraken & klanten",
          "Kassa & bonnen genereren (PDF)",
          "Producten- & voorraadbeheer",
          "Basis BTW- en omzetrapportages",
          "E-mail ondersteuning"
        ],
        cta: "Start 14 dagen gratis",
        popular: false
      },
      {
        name: "Salon Pro",
        price: 39,
        period: "per maand (jaarlijks gefactureerd)",
        description: "Voor groeiende salons die maximale efficiëntie en automatisering willen.",
        badge: "Meest Gekozen • Bespaar €120/jaar",
        features: [
          "Tot 3 apparaten (Multi-device sync)",
          "Automatische SMS-herinneringen & campagnes",
          "Geavanceerde kassa (retouren & barcode scanner)",
          "Google Review verzoeken automatiseren",
          "Uitgebreide BTW- en kwartaalexport",
          "App-vergrendeling met pincode",
          "Prioriteitsondersteuning via WhatsApp"
        ],
        cta: "Start 14 dagen gratis",
        popular: true
      },
      {
        name: "Salon Team",
        price: 65,
        period: "per maand (jaarlijks gefactureerd)",
        description: "Voor klinieken en salons met meerdere behandelaren en stoelen.",
        badge: "Bespaar €168/jaar",
        features: [
          "Onbeperkt aantal apparaten & medewerkers",
          "Werkgroepen met Master/Member rechten",
          "Omzetrapportage per medewerker",
          "Onbeperkte SMS-berichten",
          "Persoonlijke onboarding & data-import",
          "24/7 dedicated support"
        ],
        cta: "Vraag demo aan",
        popular: false
      }
    ]
  },

  testimonials: [
    {
      name: "Cynthia van Dijk",
      salon: "Skin & Glow Aesthetics",
      quote: "Sinds we ViCli gebruiken zijn onze no-shows met bijna 80% gedaald dankzij de automatische sms'jes. De kassa is zó stijlvol en makkelijk, een verademing vergeleken met logge software.",
      rating: 5,
      city: "Utrecht"
    },
    {
      name: "Elena de Vries",
      salon: "Maison de Beauté",
      quote: "Mijn boekhouder is dolblij met de kwartaalexport. Aan het einde van de maand druk ik op één knop en alle BTW-specificaties kloppen exact. Ik wil nooit meer iets anders.",
      rating: 5,
      city: "Rotterdam"
    },
    {
      name: "Sabine Martens",
      salon: "Studio Brow & Lash",
      quote: "We werken met 3 iPads in de salon en de synchronisatie via werkgroep QR werkt vlekkeloos. Super professioneel voor onze klanten en enorm snel in gebruik.",
      rating: 5,
      city: "Antwerpen"
    }
  ],

  faq: [
    {
      q: "Hoe werkt de gratis proefperiode van 14 dagen?",
      a: "Je kunt ViCli 14 dagen lang volledig gratis en vrijblijvend uitproberen. Je hebt geen creditcard nodig en zit nergens aan vast. Pas na 14 dagen beslis je of je door wilt gaan met een betaald abonnement."
    },
    {
      q: "Kan ik ViCli op zowel iPhone/iPad als Android gebruiken?",
      a: "Ja, absoluut! ViCli is speciaal native gebouwd voor zowel iOS (iPhone & iPad) als Android (telefoons en tablets). Je kunt verschillende apparaten binnen één salon naadloos met elkaar synchroniseren."
    },
    {
      q: "Voldoet de kassa en de BTW-bon aan de eisen van de Belastingdienst?",
      a: "Ja. ViCli registreert alle transacties conform de fiscale richtlijnen, inclusief juiste BTW-percentages (21%, 9%, 0%), datum, uniek bonnummer en exportmogelijkheden naar PDF en CSV voor je boekhouder."
    },
    {
      q: "Hoe werkt het koppelen van meerdere apparaten via werkgroepen?",
      a: "Heel eenvoudig: op je hoofdapparaat (bijv. de iPad aan de balie) genereer je een werkgroep-uitnodiging met een QR-code. Vervolgens scan je deze code met het tweede apparaat en binnen enkele seconden synchroniseren alle afspraken, klanten en bonnen!"
    },
    {
      q: "Kan ik overstappen vanaf een ander systeem en mijn klanten meenemen?",
      a: "Zeker. Je kunt je bestaande klantenbestand eenvoudig exporteren vanuit je oude software en laten inlezen in ViCli. We helpen je hier graag kosteloos bij tijdens de start."
    }
  ]
};
