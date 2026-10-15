/**
 * ViCli Translations (6 Talen)
 * =============================
 * nl: Nederlands
 * en: English
 * de: Deutsch
 * fr: Français
 * es: Español
 * pt: Português
 */

window.VICLI_TRANSLATIONS = {
  nl: {
    langName: "Nederlands",
    flag: "🇳🇱",
    nav: {
      forWhom: "Voor wie",
      features: "Functies",
      tutorial: "Interactieve Handleiding",
      pricing: "Abonnement",
      faq: "Veelgestelde vragen",
      trialBadge: "30 dagen gratis in de app",
      downloadApp: "Download App"
    },
    hero: {
      pill: "✨ Voor elke ZZP'er met terugkerende klanten",
      title: "Minder administratie, meer tijd voor je ",
      titleHighlight: "klanten",
      subtitle: "Of je nu kapper, pedicure, coach, personal trainer of beautyspecialist bent: ViCli brengt jouw agenda, klantenbeheer, strippenkaarten en kassa samen in één vloeiende app.",
      ctaPrimary: "Probeer 30 dagen gratis in de app",
      ctaSecondary: "Ontdek functies & hotspots",
      badgeTrial: "30 dagen gratis in de app",
      badgePrice: "Minder dan €10 per maand",
      badgeCommission: "0% commissie over jouw klanten",
      badgePlatform: "Voor iOS & Android",
      badgeZeroData: "100% Lokaal • Zero Data Opslag",
      ipadLabel: "iPad & Tablet weergave • Klantenbeheer & Strippenkaarten",
      iphoneLabel: "iPhone & Android weergave • Agenda"
    },
    privacyPillar: {
      badge: "Veiligheid & Privacy",
      title: "ViCli bewaart géén gegevens op een server",
      subtitle: "Jouw klanten en omzet zijn van jou alleen. Omdat ViCli geen eigen database of server heeft, kan er nooit een datalek ontstaan.",
      points: [
        {
          title: "100% Lokaal op je toestel",
          desc: "Al je klantgegevens, afspraken en bonnen worden versleuteld bewaard op jouw eigen iPhone, iPad of Android toestel. Wij kunnen hier niet bij."
        },
        {
          title: "Sync via jouw eigen Google Drive",
          desc: "Wil je gegevens uitwisselen tussen je iPad en telefoon? Dat gebeurt via je eigen privé Google Drive (drive.appdata). De ontwikkelaar heeft geen toegang."
        },
        {
          title: "Geen accounts of tracking",
          desc: "Geen verplichte registratie bij de ontwikkelaar, geen advertenties en geen analytics-trackers. Volledig AVG/GDPR compliant."
        }
      ]
    },
    audience: {
      badge: "Voor Zelfstandig Ondernemers",
      title: "Gebouwd voor elke ZZP'er met terugkerende klanten",
      subtitle: "Je hebt geen log, overbodig complex enterprise-systeem nodig. ViCli geeft je precies wat jij nodig hebt om je praktijk of dienstverlening soepel te runnen.",
      cards: [
        {
          title: "Beauty & Salons",
          desc: "Kappers, nagelstylistes, schoonheidsspecialistes en brow bars. Houd behandelingen, strippen en voorkeuren per klant nauwkeurig bij.",
          tag: "Strippenkaarten & kassa"
        },
        {
          title: "Zorg & Welzijn",
          desc: "Pedicures, huidtherapeuten, masseurs en fysiotherapeuten. Duidelijke afspraakgeschiedenis en direct een BTW-conforme bon meegeven.",
          tag: "BTW-splitsing & historie"
        },
        {
          title: "Coaches & Trainers",
          desc: "Personal trainers, yogadocenten en lifestyle coaches. Beheer 10-rittenkaarten, sessies en zie direct wie wanneer aan de beurt is.",
          tag: "Rittenkaarten & sessies"
        },
        {
          title: "Vakspecialisten",
          desc: "Hondentrimmers, fotografen en zelfstandig dienstverleners. Geen dubbele afspraken meer, altijd overzicht op zak.",
          tag: "Agenda & klantnotities"
        }
      ]
    },
    features: {
      badge: "Interactieve Tour",
      title: "Ontdek alle functies met interactieve hotspots",
      subtitle: "Klik op een functie hieronder om het echte scherm te zien. Klik op de oplichtende hotspots om direct te ontdekken wat je waar kunt doen.",
      cta: "Open de uitgebreide handleiding",
      interfaceLabel: "Echte ViCli App interface in het Nederlands",
      hotspotHint: "Tik op een genummerde cirkel voor uitleg",
      tabs: [
        {
          id: "agenda",
          tabTitle: "Agenda & Planning",
          tag: "Agenda & Kalender",
          title: "Overzichtelijke dag- en weekplanning zonder gedoe",
          subtitle: "Plan afspraken in een oogwenk in. Schakel soepel tussen dagoverzicht, komende afspraken en eerdere bezoeken.",
          imageFile: "1-agenda.png",
          highlights: [
            "Duidelijke weergave van komende en voltooide afspraken",
            "Moeiteloos nieuwe afspraken toevoegen met één tik op het plusje",
            "Sms-teksten voorgeschreven voor herinneringen (verstuurd via je eigen app)",
            "Werkt razendsnel en reageert direct op al je apparaten"
          ],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "Weergave filters", desc: "Wissel soepel tussen 'Dag', 'Komend' en 'Geweest' om snel te zien wat er vandaag of later op de planning staat." },
            { x: 90, y: 10, number: 2, title: "Nieuwe afspraak (+)", desc: "Tik op het plus-icoon om direct een klant te selecteren, datum en tijd te kiezen en een behandeling in te plannen." },
            { x: 45, y: 34, number: 3, title: "Afsprakenkaart", desc: "Zie direct de naam van de klant en de exacte datum en tijd. Tik op de kaart om details te openen of direct een bon te maken." },
            { x: 50, y: 95, number: 4, title: "Hoofdnavigatie", desc: "Schakel in één tik tussen Home, Klanten, Bonnen, Agenda en Instellingen." }
          ]
        },
        {
          id: "crm",
          tabTitle: "Klanten & Strippen",
          tag: "Klantenbeheer (CRM)",
          title: "Digitale klantenkaart met strippenkaarten & historie",
          subtitle: "Houd al je terugkerende klanten overzichtelijk bij. Zie direct contactgegevens, notities, eerdere bezoeken en hoeveel strippen iemand nog over heeft.",
          imageFile: "2-klant.png",
          highlights: [
            "Compleet overzicht van al je klanten met telefoonnummer en e-mail",
            "Geïntegreerde strippenkaarten en pakketten (direct inzicht in saldo)",
            "Notities en voorkeuren per klant direct bij de hand",
            "Klanten snel vinden via zoekbalk of handige check-in"
          ],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Zoekbalk", desc: "Zoek direct op voornaam, achternaam of telefoonnummer. Resultaten verschijnen realtime tijdens het typen." },
            { x: 45, y: 25, number: 2, title: "Klantkaart & Telefoon", desc: "Elke klant toont direct het telefoonnummer. Tik om te bellen of een voorgeschreven sms te sturen." },
            { x: 80, y: 25, number: 3, title: "Strippenkaart-saldo", desc: "Heeft een klant een strippenkaart? Het resterende aantal strippen staat direct in goud weergegeven." },
            { x: 90, y: 9, number: 4, title: "Klant toevoegen (+)", desc: "Voeg in enkele seconden een nieuwe klant toe met naam, contactgegevens en eventuele bijzonderheden." }
          ]
        },
        {
          id: "pos",
          tabTitle: "Kassa & Bonnen",
          tag: "Kassa (POS)",
          title: "Snelle kassa met BTW-splitsing, barcodes en retouren",
          subtitle: "Reken diensten en producten binnen seconden af. Maak direct professionele bonnen aan met de juiste belastingpercentages.",
          imageFile: "3-bon.png",
          highlights: [
            "Producten toevoegen via barcodescanner óf snelle zoekfunctie",
            "Eenvoudig retouren en terugstortingen registreren",
            "Automatische BTW-berekening (21%, 9%, 0%) volgens belastingrichtlijnen",
            "Bon direct mailen als PDF of afdrukken voor de klant"
          ],
          hotspots: [
            { x: 50, y: 16, number: 1, title: "Klant & Datum", desc: "Bovenaan staat aan wie de bon is gekoppeld en het unieke bonnummer met datumstempel." },
            { x: 50, y: 38, number: 2, title: "Bonregels & Producten", desc: "Voeg diensten of fysieke producten toe met aantal, stukprijs en het juiste btw-tarief." },
            { x: 80, y: 55, number: 3, title: "Retouren & Correcties", desc: "Brengt een klant iets terug? Reken met één tik een retour af met correcte btw-teruggave." },
            { x: 50, y: 78, number: 4, title: "PDF Delen of Mailen", desc: "Verstuur de bon direct als nette PDF per e-mail naar de klant of print hem direct uit." }
          ]
        },
        {
          id: "finance",
          tabTitle: "Boekhouding & Export",
          tag: "Financieel & Export",
          title: "Klaar voor je belastingaangifte en boekhouder",
          subtitle: "Nooit meer bonnetjes handmatig overtypen of urenlang optellen. ViCli houdt al je cijfers sluitend bij.",
          imageFile: "4-btw.png",
          highlights: [
            "Direct inzicht in je omzet per dag, maand en kwartaal",
            "1-klik export van bonnen en BTW-specificaties naar PDF en CSV",
            "Volledig fiscaal betrouwbare registratie",
            "Rust en controle over je zakelijke administratie"
          ],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Periodeselectie", desc: "Bekijk je cijfers per kalendermaand, kwartaal of heel boekjaar voor je btw-aangifte." },
            { x: 50, y: 30, number: 2, title: "Totale Omzet & Netto", desc: "Direct inzicht in bruto omzet, netto omzet en het totale af te dragen btw-bedrag." },
            { x: 50, y: 52, number: 3, title: "BTW-splitsing", desc: "Automatische uitsplitsing in 21% hoog, 9% laag en 0% tarieven conform de Belastingdienst." },
            { x: 50, y: 75, number: 4, title: "Export naar PDF & CSV", desc: "Druk op exporteren en stuur het complete overzicht direct naar je boekhouder of Excel." }
          ]
        },
        {
          id: "sms",
          tabTitle: "SMS & Sjablonen",
          tag: "Berichten & Herinneringen",
          title: "Professionele berichten zonder extra abonnementskosten",
          subtitle: "ViCli stelt automatisch berichten op maat op. Je verstuurt ze via je eigen berichten-app, waardoor je geen dure sms-bundels hoeft af te sluiten.",
          imageFile: "5-sms.png",
          highlights: [
            "Voorgeschreven welkomstberichten, afspraakbevestigingen en herinneringen",
            "Dynamische velden: vult automatisch de naam van de klant en afspraaktijd in",
            "Verzonden via je eigen telefoon: maximale betrouwbaarheid en herkenning",
            "Geen achtergrondpermissies nodig: 100% privacy- en store-veilig"
          ],
          hotspots: [
            { x: 50, y: 18, number: 1, title: "Berichtsjabloon kiezen", desc: "Kies uit welkomstbericht, herinnering vóór de afspraak of een vriendelijke vraag om een review." },
            { x: 50, y: 40, number: 2, title: "Slimme variabelen", desc: "ViCli vult automatisch de juiste klantnaam, behandeldatum en tijd in." },
            { x: 50, y: 65, number: 3, title: "Open in Berichten", desc: "Eén tik en je eigen berichten-app opent met de tekst klaar. Jij drukt op verzenden." }
          ]
        },
        {
          id: "sync",
          tabTitle: "Google Drive Sync",
          tag: "Cloud & Apparaten",
          title: "Veilig synchroniseren via je eigen Google Drive",
          subtitle: "Werk gelijktijdig op meerdere apparaten. Geen server van derden: alle synchronisatie verloopt rechtstreeks via jouw privé Google Drive.",
          imageFile: "6-sync.png",
          highlights: [
            "Koppel eenvoudig apparaten via een veilige werkgroep QR-code",
            "Offline-first: blijft altijd doorwerken als je internet wegvalt",
            "Back-up en synchronisatie via je eigen Google Drive (drive.appdata)",
            "Volledige synchronisatie tussen iOS én Android"
          ],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "Google-verbinding", desc: "Verbind eenmalig met je eigen Google-account. ViCli gebruikt alleen de beveiligde appDataFolder." },
            { x: 80, y: 46, number: 2, title: "Automatische Sync", desc: "Schakel in om wijzigingen direct binnen een minuut tussen iPad en telefoon te synchroniseren." },
            { x: 50, y: 78, number: 3, title: "Werkgroep & Master", desc: "Wijs een hoofdapparaat (Master) aan en koppel extra apparaten via een scanbare QR-code." }
          ]
        }
      ]
    },
    pricing: {
      badge: "Toegankelijk & Transparant",
      title: "Eén compleet pakket. Voor minder dan een tientje per maand.",
      subtitle: "Geen torenhoge licentiekosten of commissies per afspraak. Je begint met 30 dagen gratis waarin alles openstaat in de app.",
      planBadge: "✨ Alles-in-één licentie",
      planTitle: "ViCli Compleet",
      planDesc: "Je krijgt direct toegang tot alle functionaliteiten: klantenkaarten, strippenbeheer, agenda, kassa met BTW-bonnen, barcodescanner, boekhoud-export en synchronisatie tussen meerdere apparaten.",
      features: [
        "Klantenkaarten, historie & notities",
        "Strippenkaarten & saldo bijhouden",
        "Volledige agenda & afsprakenplanning",
        "Kassa, PDF-bonnen & retouren",
        "BTW-rapportage & CSV-export",
        "Sync via eigen Google Drive",
        "Werkt volledig offline",
        "Voor iOS & Android"
      ],
      notice: "* De proefperiode van 30 dagen is direct actief in de app bij installatie, zonder voorafgaande betaalverplichting. Na de proefperiode kies je je abonnement via de Apple App Store of Google Play Store (prijs verschilt per regio/valuta, in Nederland/België ca. €9,49 op Android en €9,99 op iOS per maand).",
      cardPre: "Eerste 30 dagen in de app",
      cardFree: "Gratis",
      cardPost: "Daarna nog geen €10 / maand",
      appStoreBtnSub: "Download in de",
      appStoreBtnTitle: "Apple App Store",
      playStoreBtnSub: "Ontdek op",
      playStoreBtnTitle: "Google Play Store",
      cancelAnytime: "Op elk moment eenvoudig opzegbaar via je account"
    },
    faq: {
      badge: "Vragen & Antwoorden",
      title: "Veelgestelde vragen",
      subtitle: "Heb je een andere vraag over de app of het abonnement? We helpen je graag verder.",
      items: [
        {
          q: "Waarom zijn mijn gegevens bij ViCli veiliger dan bij andere apps? (Zero-Data)",
          a: "ViCli heeft geen eigen database-server waar klantgegevens van gebruikers worden opgeslagen. Al je klanten, afspraken, omzetcijfers en notities staan uitsluitend lokaal op je eigen toestel. Bij synchronisatie wordt gebruikgemaakt van jouw eigen persoonlijke Google Drive (in een afgeschermde map die alleen voor de app toegankelijk is). Zelfs wij als ontwikkelaar kunnen jouw gegevens niet inzien. Daardoor is er zero risico op een centraal datalek en voldoe je direct aan de strengste AVG/GDPR-eisen."
        },
        {
          q: "Hoe werkt de proefperiode van 30 dagen?",
          a: "Je begint bij installatie direct met dertig dagen waarin alle functies volledig openstaan in de app, zonder voorafgaande betaalverplichting. De proefperiode zit in de app zelf. Na 30 dagen gaat de app over in een alleen-lezen stand totdat je via de App Store of Google Play een abonnement kiest. Al je ingevoerde gegevens blijven altijd behouden."
        },
        {
          q: "Voor wie is ViCli bedoeld?",
          a: "ViCli is gemaakt voor iedereen die op afspraak werkt met terugkerende klanten: kappers, nagelstylisten, schoonheidsspecialisten, pedicures, coaches, personal trainers, masseurs en therapeuten. Iedereen die geen zin heeft in een log en duur boekhoudpakket."
        },
        {
          q: "Hoeveel kost het ViCli abonnement?",
          a: "ViCli kost minder dan een tientje per maand (ca. €9,49 op Android en €9,99 op iOS in Nederland/België). De exacte prijs wordt bepaald door de App Store en Google Play Store op basis van jouw land en lokale valuta. Je betaalt géén commissie per afspraak of omzetpercentage."
        },
        {
          q: "Kan ik ViCli op zowel iPhone/iPad als Android gebruiken?",
          a: "Ja! ViCli heeft volwaardige apps voor zowel iOS (iPhone en iPad) als Android. Met een ViCli abonnement kun je meerdere apparaten naadloos met elkaar synchroniseren via een veilige werkgroep."
        },
        {
          q: "Blijft ViCli werken als mijn internetverbinding wegvalt?",
          a: "Ja, ViCli is volledig offline-first. Alles staat lokaal op je eigen toestel. Je hebt geen internet nodig om afspraken in te zien of bonnen aan te maken. Zodra je weer online bent, synchroniseert de app via je eigen Google Drive."
        },
        {
          q: "Hoe werkt het versturen van sms-berichten?",
          a: "ViCli schrijft de berichten voor je klaar (zoals een afspraakbevestiging of herinnering), maar verstuurt ze niet zelfstandig op de achtergrond. Wanneer je tikt op versturen, opent je eigen berichten-app met de tekst er al in. Jij beslist altijd wat er weggaat."
        }
      ]
    },
    ctaBanner: {
      title: "Klaar om jouw klantenbeheer te vereenvoudigen?",
      subtitle: "Download ViCli vandaag nog in de App Store of Google Play Store. Probeer het 30 dagen gratis in de app en ervaar het gemak in je dagelijkse werk.",
      ctaPrimary: "Probeer 30 dagen gratis in de app",
      ctaWhatsApp: "Stel een vraag via WhatsApp"
    },
    footer: {
      tagline: "CRM, agendabeheer en kassa voor elke zelfstandig ondernemer met terugkerende klanten.",
      linksFunctions: "Functies",
      linksPlatform: "Platform",
      linksContact: "Contact & Info",
      privacy: "Privacybeleid",
      terms: "Algemene Voorwaarden",
      rights: "Alle rechten voorbehouden."
    }
  },

  // ENGLISH
  en: {
    langName: "English",
    flag: "🇬🇧",
    nav: {
      forWhom: "For whom",
      features: "Features",
      tutorial: "Interactive Guide",
      pricing: "Subscription",
      faq: "FAQ",
      trialBadge: "30 days free in app",
      downloadApp: "Download App"
    },
    hero: {
      pill: "✨ Built for every professional with recurring clients",
      title: "Less paperwork, more time for your ",
      titleHighlight: "clients",
      subtitle: "Whether you're a hairdresser, nail technician, beautician, coach, personal trainer or therapist: ViCli combines your calendar, client cards, loyalty tracking, and receipts in one fluid app.",
      ctaPrimary: "Try 30 days free in app",
      ctaSecondary: "Explore features & hotspots",
      badgeTrial: "30 days free in the app",
      badgePrice: "Under €10 / month",
      badgeCommission: "0% booking commission",
      badgePlatform: "For iOS & Android",
      badgeZeroData: "100% Local • Zero Data Storage",
      ipadLabel: "iPad & Tablet view • Client Management & Loyalty Cards",
      iphoneLabel: "iPhone & Android view • Calendar"
    },
    privacyPillar: {
      badge: "Security & Privacy",
      title: "ViCli stores NO data on servers",
      subtitle: "Your clients and revenue belong to you alone. Because ViCli operates without a central database, data breaches are technically impossible.",
      points: [
        {
          title: "100% Local on your device",
          desc: "All client records, appointments, and receipts are stored securely on your own phone or tablet. We have no access to them."
        },
        {
          title: "Sync via your own Google Drive",
          desc: "Want to sync across your iPad and phone? That happens directly through your private Google Drive (drive.appdata). The developer cannot see your files."
        },
        {
          title: "No user accounts or tracking",
          desc: "No mandatory account registration with us, no advertisements, and zero tracking SDKs. Fully GDPR compliant."
        }
      ]
    },
    audience: {
      badge: "For Independent Professionals",
      title: "Made for anyone with returning clients",
      subtitle: "You don't need a bloated, complex enterprise system. ViCli gives you exactly what you need to run your practice smoothly.",
      cards: [
        {
          title: "Beauty & Salons",
          desc: "Hairdressers, nail artists, beauticians, lash & brow specialists. Keep track of treatment history, loyalty passes, and preferences.",
          tag: "Loyalty cards & receipts"
        },
        {
          title: "Health & Care",
          desc: "Pedicurists, skin therapists, massage therapists, physiotherapists. Clear appointment logs and instant VAT-compliant receipts.",
          tag: "VAT breakdown & history"
        },
        {
          title: "Coaches & Trainers",
          desc: "Personal trainers, yoga instructors, and wellness coaches. Track 10-session passes, upcoming appointments, and client attendance.",
          tag: "Multi-session passes"
        },
        {
          title: "Specialists",
          desc: "Pet groomers, photographers, and independent service providers. No more double bookings, full control in your pocket.",
          tag: "Calendar & client notes"
        }
      ]
    },
    features: {
      badge: "Interactive Tour",
      title: "Explore all features with interactive hotspots",
      subtitle: "Click any function below to view the actual screen. Tap the pulsing hotspots to learn what you can do at each step.",
      cta: "Open the complete manual",
      interfaceLabel: "Actual ViCli App interface in English",
      hotspotHint: "Tap a numbered circle for details",
      tabs: [
        {
          id: "agenda",
          tabTitle: "Calendar & Schedule",
          tag: "Calendar & Schedule",
          title: "Clear daily and weekly schedule without hassle",
          subtitle: "Book appointments in seconds. Smoothly switch between day view, upcoming bookings, and past client history.",
          imageFile: "1-agenda.png",
          highlights: [
            "Clean overview of upcoming and completed appointments",
            "Easily add new bookings with a single tap on the plus button",
            "Pre-composed text messages for reminders (sent via your own app)",
            "Fast performance and responsive on all your devices"
          ],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "View Filters", desc: "Switch between 'Day', 'Upcoming', and 'Past' to see what's on your agenda today or later." },
            { x: 90, y: 10, number: 2, title: "New Booking (+)", desc: "Tap the plus icon to select a client, pick date & time, and schedule a service." },
            { x: 45, y: 34, number: 3, title: "Booking Card", desc: "Shows client name and scheduled time. Tap to view notes or generate a receipt immediately." },
            { x: 50, y: 95, number: 4, title: "Navigation Bar", desc: "Jump in one tap between Home, Clients, Receipts, Calendar, and Settings." }
          ]
        },
        {
          id: "crm",
          tabTitle: "Clients & Loyalty",
          tag: "Client Management (CRM)",
          title: "Digital client cards with visit history & session passes",
          subtitle: "Keep all your regular clients neatly organized. Instantly see contact details, notes, past visits, and remaining session passes.",
          imageFile: "2-klant.png",
          highlights: [
            "Complete overview of all clients with phone numbers and email",
            "Integrated multi-session passes (instant balance check)",
            "Personal notes and treatment preferences at your fingertips",
            "Quick client lookup via search bar or easy check-in"
          ],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Fast Search", desc: "Search by first name, last name, or phone number. Results appear in real time as you type." },
            { x: 45, y: 25, number: 2, title: "Client Card", desc: "Displays phone number immediately. Tap to call or send a pre-composed reminder text." },
            { x: 80, y: 25, number: 3, title: "Loyalty Pass Balance", desc: "If a client has a multi-session pass, remaining passes are highlighted in gold." },
            { x: 90, y: 9, number: 4, title: "Add Client (+)", desc: "Quickly create a new client profile with contact information and custom notes." }
          ]
        },
        {
          id: "pos",
          tabTitle: "Receipts & POS",
          tag: "Point of Sale (POS)",
          title: "Fast checkout with VAT breakdown, barcodes & returns",
          subtitle: "Charge for treatments and retail products in seconds. Create professional receipts with proper tax rates.",
          imageFile: "3-bon.png",
          highlights: [
            "Add products via camera barcode scanner or fast search",
            "Easily handle customer returns and refunds",
            "Automatic tax & VAT rate calculations (21%, 9%, 0%)",
            "Email receipts directly as PDF or print them out"
          ],
          hotspots: [
            { x: 50, y: 16, number: 1, title: "Client & Date", desc: "Displays recipient, unique receipt number, and timestamp." },
            { x: 50, y: 38, number: 2, title: "Line Items", desc: "Add services or physical products with quantity, unit price, and proper tax tier." },
            { x: 80, y: 55, number: 3, title: "Returns & Refunds", desc: "Customer returned an item? Process a refund with adjusted tax calculations in one tap." },
            { x: 50, y: 78, number: 4, title: "Share or Email PDF", desc: "Send professional PDF receipts directly to the client's email or print locally." }
          ]
        },
        {
          id: "finance",
          tabTitle: "Tax & Export",
          tag: "Finance & Reports",
          title: "Ready for your tax filing and accountant",
          subtitle: "No more manually retyping receipts. ViCli keeps your financial records consistent and export-ready.",
          imageFile: "4-btw.png",
          highlights: [
            "Instant revenue overview per day, month, and quarter",
            "1-click export of receipts and VAT summaries to PDF and CSV",
            "Legally and fiscally reliable records",
            "Peace of mind over your business administration"
          ],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Period Selector", desc: "View financials by month, quarter, or annual period for your tax returns." },
            { x: 50, y: 30, number: 2, title: "Gross & Net Totals", desc: "Real-time visibility into gross sales, net revenue, and total tax owed." },
            { x: 50, y: 52, number: 3, title: "Tax Breakdown", desc: "Detailed breakdown by tax rates (21%, 9%, 0%) compliant with tax requirements." },
            { x: 50, y: 75, number: 4, title: "Export PDF & CSV", desc: "One tap exports a complete financial package directly to your accountant." }
          ]
        },
        {
          id: "sms",
          tabTitle: "SMS & Templates",
          tag: "Messages & Reminders",
          title: "Professional text messages without costly packages",
          subtitle: "ViCli prepares custom messages. You send them through your device's native app, so you never pay extra per-SMS fees.",
          imageFile: "5-sms.png",
          highlights: [
            "Pre-composed welcome messages, appointment confirmations and reminders",
            "Dynamic tags: automatically fills client name, appointment date, and time",
            "Sent from your own phone: trusted number with high open rates",
            "No background permissions required: 100% store and privacy compliant"
          ],
          hotspots: [
            { x: 50, y: 18, number: 1, title: "Template Picker", desc: "Choose welcome, appointment reminder, or review request templates." },
            { x: 50, y: 40, number: 2, title: "Dynamic Placeholders", desc: "ViCli automatically inserts the client name and scheduled appointment time." },
            { x: 50, y: 65, number: 3, title: "Open in Messages", desc: "One tap opens your SMS app with text ready. You tap send." }
          ]
        },
        {
          id: "sync",
          tabTitle: "Google Drive Sync",
          tag: "Cloud & Devices",
          title: "Synchronize via your own Google Drive",
          subtitle: "Work across multiple devices at once: your tablet at your desk and your phone on the go.",
          imageFile: "6-sync.png",
          highlights: [
            "Easily link devices using a secure workgroup QR code",
            "Offline-first: keeps working even without an internet connection",
            "Backup and sync through your own Google Drive (drive.appdata)",
            "Full compatibility between iOS and Android devices"
          ],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "Google Sign-In", desc: "Connect your personal Google account. ViCli only touches its private appDataFolder." },
            { x: 80, y: 46, number: 2, title: "Auto-Sync Toggle", desc: "Enable automatic background synchronization across your phones and tablets." },
            { x: 50, y: 78, number: 3, title: "Workgroup QR", desc: "Assign a master tablet and link team devices in seconds using a QR invite." }
          ]
        }
      ]
    },
    pricing: {
      badge: "Accessible & Transparent",
      title: "One complete plan. For less than €10 per month.",
      subtitle: "No expensive enterprise licenses or booking fees. You start with 30 days free in the app with all features unlocked.",
      planBadge: "✨ All-in-one license",
      planTitle: "ViCli Complete",
      planDesc: "You get full access to all features: client cards, loyalty cards, calendar, point of sale with PDF receipts, barcode scanner, bookkeeping export, and multi-device sync.",
      features: [
        "Client profiles, history & notes",
        "Multi-session pass tracking",
        "Full calendar & appointment scheduling",
        "Point of Sale, PDF receipts & refunds",
        "VAT reporting & CSV export",
        "Sync via your own Google Drive",
        "Works completely offline",
        "For iOS & Android"
      ],
      notice: "* The 30-day free trial is active directly inside the app upon installation, without upfront payment. After the trial, you choose your plan in the Apple App Store or Google Play Store (prices vary per region/currency, approx. €9.49 on Android and €9.99 on iOS in Europe).",
      cardPre: "First 30 days in app",
      cardFree: "Free",
      cardPost: "Then under €10 / month",
      appStoreBtnSub: "Download on the",
      appStoreBtnTitle: "Apple App Store",
      playStoreBtnSub: "Get it on",
      playStoreBtnTitle: "Google Play Store",
      cancelAnytime: "Cancel anytime directly through your store account"
    },
    faq: {
      badge: "Questions & Answers",
      title: "Frequently Asked Questions",
      subtitle: "Have another question about the app or subscription? We are here to help.",
      items: [
        {
          q: "Why is my data safer with ViCli than other apps? (Zero-Data)",
          a: "ViCli does not run a central database server where client information is pooled. All your client records, appointments, receipts, and notes remain stored strictly on your local device. Synchronization operates exclusively through your personal private Google Drive (in an isolated app folder that only your account controls). Even as developers, we cannot access your data. There is zero risk of a centralized data breach, making your business instantly compliant with GDPR."
        },
        {
          q: "How does the 30-day free trial work?",
          a: "You start with thirty days upon installation where everything is open in the app, Pro features included, with no upfront payment. The trial runs inside the app itself. After 30 days, the app switches to read-only mode until you subscribe via the App Store or Google Play. Your data is always preserved."
        },
        {
          q: "Who is ViCli built for?",
          a: "ViCli is designed for anyone who works by appointment with recurring clients: hairdressers, nail technicians, beauticians, pedicurists, coaches, personal trainers, massage therapists, and pet groomers who don't want a heavy accounting package."
        },
        {
          q: "How much is the ViCli subscription?",
          a: "ViCli costs under ten euros per month (around €9.49 on Android and €9.99 on iOS in Europe). The exact price is determined by the App Store and Google Play based on your country and local currency. You pay 0% commission on your bookings."
        },
        {
          q: "Can I use ViCli on both iOS and Android?",
          a: "Yes! ViCli has full native apps for both iOS (iPhone & iPad) and Android. With an active subscription, you can synchronize multiple devices seamlessly using your own Google Drive."
        },
        {
          q: "Does ViCli work without an internet connection?",
          a: "Yes, ViCli is built offline-first. All data lives locally on your device. You can look up clients, schedule appointments, and generate receipts without an internet connection. Once online, it syncs to your Google Drive."
        },
        {
          q: "How do text message reminders work?",
          a: "ViCli writes your messages for you (such as appointment confirmations or reminders), but does not send them in the background. When you tap send, your device's native messaging app opens with the text ready. You always control what is sent."
        }
      ]
    },
    ctaBanner: {
      title: "Ready to simplify your client management?",
      subtitle: "Download ViCli today from the App Store or Google Play Store. Try it 30 days free in the app and experience the ease in your daily routine.",
      ctaPrimary: "Try 30 days free in the app",
      ctaWhatsApp: "Ask a question via WhatsApp"
    },
    footer: {
      tagline: "CRM, calendar and receipts for independent professionals with recurring clients.",
      linksFunctions: "Features",
      linksPlatform: "Platform",
      linksContact: "Contact & Info",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved."
    }
  },

  // DEUTSCH, FRANÇAIS, ESPAÑOL, PORTUGUÊS (met dezelfde structuur)
  de: {
    langName: "Deutsch",
    flag: "🇩🇪",
    nav: {
      forWhom: "Für wen",
      features: "Funktionen",
      tutorial: "Interaktive Anleitung",
      pricing: "Abonnement",
      faq: "Häufige Fragen",
      trialBadge: "30 Tage kostenlos in der App",
      downloadApp: "App laden"
    },
    hero: {
      pill: "✨ Für jeden Selbstständigen mit wiederkehrenden Kunden",
      title: "Weniger Papierkram, mehr Zeit für deine ",
      titleHighlight: "Kunden",
      subtitle: "Ob Friseur, Nageldesignerin, Kosmetikerin, Coach, Personal Trainer oder Therapeut: ViCli vereint Kalender, Kundenkartei, Bonuskarten und Belege in einer flüssigen App.",
      ctaPrimary: "30 Tage kostenlos testen",
      ctaSecondary: "Funktionen & Hotspots ansehen",
      badgeTrial: "30 Tage kostenlos in der App",
      badgePrice: "Unter 10 € pro Monat",
      badgeCommission: "0 % Buchungsprovision",
      badgePlatform: "Für iOS & Android",
      badgeZeroData: "100% Lokal • Keine Serverdaten",
      ipadLabel: "iPad & Tablet Ansicht • Kundenverwaltung & Bonuskarten",
      iphoneLabel: "iPhone & Android Ansicht • Kalender"
    },
    privacyPillar: {
      badge: "Sicherheit & Datenschutz",
      title: "ViCli speichert KEINE Daten auf Servern",
      subtitle: "Deine Kundendaten gehören allein dir. Weil ViCli keine zentrale Datenbank betreibt, sind Datenlecks technisch ausgeschlossen.",
      points: [
        {
          title: "100% lokal auf deinem Gerät",
          desc: "Alle Kundeneinträge, Termine und Belege liegen verschlüsselt auf deinem eigenen Smartphone oder Tablet."
        },
        {
          title: "Sync über dein eigenes Google Drive",
          desc: "Geräteabgleich erfolgt direkt über dein privates Google Drive (drive.appdata). Der Entwickler hat keinen Zugriff darauf."
        },
        {
          title: "Keine Konten oder Tracker",
          desc: "Keine Registrierung beim Entwickler, keine Werbenetzwerke, keine Tracking-SDKs. Vollständig DSGVO-konform."
        }
      ]
    },
    audience: {
      badge: "Für Selbstständige",
      title: "Gemacht für alle mit Stammkunden",
      subtitle: "Du brauchst keine überladene Unternehmenssoftware. ViCli liefert dir genau das, was du für deinen Arbeitsalltag brauchst.",
      cards: [
        { title: "Beauty & Salons", desc: "Friseure, Nageldesignerinnen, Kosmetikerinnen. Historie und Bonuskarten immer parat.", tag: "Bonuskarten & Kasse" },
        { title: "Pflege & Gesundheit", desc: "Fußpfleger, Therapeuten, Masseure. Terminhistorie und MwSt-Belege auf Knopfdruck.", tag: "MwSt-Ausweis & Verlauf" },
        { title: "Coaches & Trainer", desc: "Personal Trainer und Yogalehrer. 10er-Karten und Termine übersichtlich führen.", tag: "10er-Karten & Einheiten" },
        { title: "Fachspezialisten", desc: "Hundefriseure, Fotografen und Dienstleister. Keine Doppelbuchungen mehr.", tag: "Kalender & Notizen" }
      ]
    },
    features: {
      badge: "Interaktive Tour",
      title: "Entdecke alle Funktionen mit Hotspots",
      subtitle: "Wähle eine Funktion, um den echten Bildschirm zu sehen. Klicke auf die Ziffern für eine genaue Erklärung.",
      cta: "Ausführliche Anleitung öffnen",
      interfaceLabel: "Echte ViCli App Oberfläche auf Deutsch",
      hotspotHint: "Tippe auf einen nummerierten Kreis für Details",
      tabs: [
        {
          id: "agenda",
          tabTitle: "Kalender & Termine",
          tag: "Kalender & Termine",
          title: "Übersichtliche Terminplanung ohne Stress",
          subtitle: "Plane Termine in Sekundenschnelle.",
          imageFile: "1-agenda.png",
          highlights: ["Tages-, Kommend- und Gewesen-Filter", "Neuer Termin mit einem Tipp (+)", "Vorformulierte Erinnerungs-SMS", "Extrem flüssig"],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "Ansichtsfilter", desc: "Wechsle zwischen 'Tag', 'Kommend' und 'Gewesen'." },
            { x: 90, y: 10, number: 2, title: "Neuer Termin (+)", desc: "Trage direkt einen Kunden und Termin ein." },
            { x: 45, y: 34, number: 3, title: "Terminkarte", desc: "Tippe darauf für Details oder Sofort-Beleg." },
            { x: 50, y: 95, number: 4, title: "Hauptnavigation", desc: "Schneller Wechsel zwischen allen Bereichen." }
          ]
        },
        {
          id: "crm",
          tabTitle: "Kunden & Bonuskarten",
          tag: "Kundenverwaltung (CRM)",
          title: "Digitale Kundenkartei mit Verlauf",
          subtitle: "Behalte alle Stammkunden übersichtlich im Griff.",
          imageFile: "2-klant.png",
          highlights: ["Schnellsuche nach Name & Telefon", "Bonuskarten-Saldo in Gold", "Individuelle Kundennotizen", "QR/NFC Check-in"],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Schnellsuche", desc: "Echtzeitsuche nach Name oder Telefonnummer." },
            { x: 45, y: 25, number: 2, title: "Kundenkarte", desc: "Telefonnummer direkt antippen zum Anrufen oder SMS senden." },
            { x: 80, y: 25, number: 3, title: "Bonuskarten-Saldo", desc: "Zeigt verbleibende Einheiten übersichtlich an." },
            { x: 90, y: 9, number: 4, title: "Kunde anlegen (+)", desc: "Neuen Kunden im Handumdrehen erfassen." }
          ]
        },
        {
          id: "pos",
          tabTitle: "Kasse & Belege",
          tag: "Kasse (POS)",
          title: "Schnelle Kasse mit MwSt-Aufteilung & Retouren",
          subtitle: "Rechne Leistungen und Produkte zügig ab.",
          imageFile: "3-bon.png",
          highlights: ["Barcodescanner & Produktsuche", "Retouren unkompliziert verbuchen", "Automatische MwSt-Berechnung", "Beleg als PDF"],
          hotspots: [
            { x: 50, y: 16, number: 1, title: "Kunde & Datum", desc: "Belegnummer und Zeitstempel." },
            { x: 50, y: 38, number: 2, title: "Positionen", desc: "Leistungen und Produkte mit Steuersatz." },
            { x: 80, y: 55, number: 3, title: "Retouren", desc: "Erstattungen mit Steuerkorrektur verbuchen." },
            { x: 50, y: 78, number: 4, title: "PDF Export", desc: "Sofort per E-Mail senden oder drucken." }
          ]
        },
        {
          id: "finance",
          tabTitle: "Buchhaltung & Export",
          tag: "Finanzen & Export",
          title: "Bereit für deine Steuererklärung",
          subtitle: "ViCli hält deine Zahlen lückenlos fest.",
          imageFile: "4-btw.png",
          highlights: ["Umsatz nach Tag, Monat und Quartal", "1-Klick Export nach PDF/CSV", "Lückenlose Aufzeichnungen", "Steuerberater-fertig"],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Zeitraum", desc: "Monat oder Quartal auswählen." },
            { x: 50, y: 30, number: 2, title: "Umsatzsummen", desc: "Brutto, Netto und Steuerbeträge." },
            { x: 50, y: 52, number: 3, title: "MwSt-Sätze", desc: "Aufteilung nach Steuersätzen." },
            { x: 50, y: 75, number: 4, title: "Export", desc: "Bericht direkt für die Buchhaltung exportieren." }
          ]
        },
        {
          id: "sms",
          tabTitle: "SMS & Vorlagen",
          tag: "Nachrichten & Erinnerungen",
          title: "Vorlagen ohne teure Zusatzpakete",
          subtitle: "Versand über deine eigene Nachrichten-App.",
          imageFile: "5-sms.png",
          highlights: ["Automatische Platzhalter", "Über eigene SMS-App versendet", "Keine Zusatzgebühren", "100% Store-konform"],
          hotspots: [
            { x: 50, y: 18, number: 1, title: "Vorlage wählen", desc: "Terminbestätigung oder Erinnerung auswählen." },
            { x: 50, y: 40, number: 2, title: "Platzhalter", desc: "Name und Terminzeit werden automatisch eingesetzt." },
            { x: 50, y: 65, number: 3, title: "In SMS öffnen", desc: "Deine Nachrichten-App öffnet sich mit fertigem Text." }
          ]
        },
        {
          id: "sync",
          tabTitle: "Google Drive Sync",
          tag: "Cloud & Geräte",
          title: "Sync über dein eigenes Google Drive",
          subtitle: "Nutze mehrere Geräte parallel.",
          imageFile: "6-sync.png",
          highlights: ["Sicherer QR-Code Beitritt", "Funktioniert offline weiter", "Google Drive appDataFolder", "iOS & Android Sync"],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "Google Login", desc: "Verbindung mit eigenem Google-Konto." },
            { x: 80, y: 46, number: 2, title: "Auto-Sync", desc: "Automatischer Abgleich im Hintergrund." },
            { x: 50, y: 78, number: 3, title: "Workgroup", desc: "Geräte über QR-Code koppeln." }
          ]
        }
      ]
    },
    pricing: {
      badge: "Transparent & Fair",
      title: "Ein Komplettpaket. Für unter 10 € im Monat.",
      subtitle: "Keine teuren Lizenzen oder Buchungsgebühren. Du startest mit 30 Tagen kostenlos in der App.",
      planBadge: "✨ Alles-in-einem Lizenz",
      planTitle: "ViCli Komplett",
      planDesc: "Voller Zugriff auf alle Funktionen.",
      features: ["Kundenkartei & Notizen", "Bonuskarten & Einheiten", "Terminplanung", "Kasse & PDF-Belege", "MwSt-Berichte & CSV", "Sync über Google Drive", "Offline nutzbar", "iOS & Android"],
      notice: "* Die 30-tägige Testphase ist nach Installation direkt in der App aktiv. Danach wählst du dein Abo im App Store oder Google Play Store.",
      cardPre: "Erste 30 Tage in der App",
      cardFree: "Kostenlos",
      cardPost: "Danach unter 10 € / Monat",
      appStoreBtnSub: "Laden im",
      appStoreBtnTitle: "Apple App Store",
      playStoreBtnSub: "Jetzt bei",
      playStoreBtnTitle: "Google Play Store",
      cancelAnytime: "Jederzeit im Store-Konto kündbar"
    },
    faq: {
      badge: "Fragen & Antworten",
      title: "Häufig gestellte Fragen",
      subtitle: "Hast du weitere Fragen zur App oder zum Abonnement?",
      items: [
        {
          q: "Warum sind meine Daten bei ViCli sicherer als bei anderen Apps? (Zero-Data)",
          a: "ViCli besitzt keinen eigenen Server und speichert keine Daten zentral ab. Alle Kundendaten verbleiben zu 100% lokal auf deinem eigenen Gerät. Bei Synchronisierung nutzt du dein privates Google Drive. Dadurch besteht keinerlei Risiko eines zentralen Datenlecks und du erfüllst spielend die DSGVO."
        },
        {
          q: "Wie funktioniert die 30-tägige Testphase?",
          a: "Nach der Installation startest du mit dreißig Tagen, in denen alle Funktionen in der App uneingeschränkt nutzbar sind – ganz ohne vorherige Zahlungsverpflichtung. Nach 30 Tagen wechselt die App in den Lesemodus, bis du im App Store oder bei Google Play ein Abo wählst."
        },
        {
          q: "Für wen ist ViCli gedacht?",
          a: "ViCli ist für alle gemacht, die auf Termin mit Stammkunden arbeiten und keine Lust auf schwere Buchhaltungssoftware haben."
        },
        {
          q: "Wie viel kostet das ViCli Abonnement?",
          a: "ViCli kostet weniger als zehn Euro im Monat (ca. 9,49 € auf Android und 9,99 € auf iOS). Keine Buchungsprovisionen."
        },
        {
          q: "Funktioniert ViCli auch offline ohne Internet?",
          a: "Ja, ViCli ist komplett offline-first. Alle Daten liegen lokal auf deinem Gerät."
        }
      ]
    },
    ctaBanner: {
      title: "Bereit, deine Kundenverwaltung zu vereinfachen?",
      subtitle: "Lade ViCli jetzt im App Store oder Google Play Store herunter. Teste 30 Tage kostenlos in der App.",
      ctaPrimary: "30 Tage kostenlos in der App testen",
      ctaWhatsApp: "Frage über WhatsApp stellen"
    },
    footer: {
      tagline: "CRM, Kalender und Kasse für Selbstständige mit wiederkehrenden Kunden.",
      linksFunctions: "Funktionen",
      linksPlatform: "Plattform",
      linksContact: "Kontakt & Info",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      rights: "Alle Rechte vorbehalten."
    }
  },

  // FR, ES, PT
  fr: {
    langName: "Français",
    flag: "🇫🇷",
    nav: {
      forWhom: "Pour qui",
      features: "Fonctions",
      tutorial: "Guide Interactif",
      pricing: "Abonnement",
      faq: "FAQ",
      trialBadge: "30 jours gratuits dans l'app",
      downloadApp: "Télécharger"
    },
    hero: {
      pill: "✨ Pour tous les indépendants avec des clients réguliers",
      title: "Moins de paperasse, plus de temps pour vos ",
      titleHighlight: "clients",
      subtitle: "ViCli rassemble votre agenda, fiches clients, cartes de fidélité et reçus dans une seule application fluide.",
      ctaPrimary: "Essai gratuit 30 jours dans l'app",
      ctaSecondary: "Voir fonctions & hotspots",
      badgeTrial: "30 jours gratuits dans l'app",
      badgePrice: "Moins de 10 € par mois",
      badgeCommission: "0% commission sur réservations",
      badgePlatform: "Pour iOS & Android",
      badgeZeroData: "100% Local • Zéro Donnée Serveur",
      ipadLabel: "Vue iPad & Tablette • Fiches clients & Cartes de séances",
      iphoneLabel: "Vue iPhone & Android • Agenda"
    },
    privacyPillar: {
      badge: "Sécurité & Confidentialité",
      title: "ViCli ne conserve AUCUNE donnée sur des serveurs",
      subtitle: "Vos clients vous appartiennent. Sans serveur central, le risque de fuite de données est inexistant.",
      points: [
        { title: "100% local sur votre appareil", desc: "Toutes vos données restent chiffrées sur votre propre téléphone ou tablette." },
        { title: "Sync via votre propre Google Drive", desc: "La synchronisation passe par votre Drive privé (drive.appdata). Nous n'y avons aucun accès." },
        { title: "Aucun compte ni traçage", desc: "Aucun suivi publicitaire ni création de compte obligatoire. Totalement conforme RGPD." }
      ]
    },
    audience: {
      badge: "Pour les Professionnels Indépendants",
      title: "Conçu pour tous ceux qui travaillent avec des habitués",
      subtitle: "ViCli vous donne exactement les outils nécessaires pour gérer votre activité sereinement.",
      cards: [
        { title: "Beauté & Salons", desc: "Coiffeurs, esthéticiennes, prothésistes ongulaires.", tag: "Cartes de fidélité & caisse" },
        { title: "Santé & Bien-être", desc: "Pédicures, masseurs, kinésithérapeutes.", tag: "TVA & historique" },
        { title: "Coaches & Entraîneurs", desc: "Coachs sportifs, professeurs de yoga.", tag: "Cartes de séances" },
        { title: "Spécialistes", desc: "Toilettage canin, photographes, prestataires.", tag: "Agenda & notes" }
      ]
    },
    features: {
      badge: "Tour Interactif",
      title: "Découvrez toutes les fonctions avec hotspots",
      subtitle: "Sélectionnez une fonction pour afficher l'écran réel. Cliquez sur les hotspots pour les explications.",
      cta: "Ouvrir le guide complet",
      interfaceLabel: "Interface réelle ViCli en Français",
      hotspotHint: "Appuyez sur un cercle numéroté pour les détails",
      tabs: [
        {
          id: "agenda",
          tabTitle: "Agenda & Planning",
          tag: "Agenda & Planning",
          title: "Planning clair à la journée et à la semaine",
          subtitle: "Planifiez vos rendez-vous en un clin d'œil.",
          imageFile: "1-agenda.png",
          highlights: ["Filtres Jour, À venir et Passé", "Ajout rapide (+)", "SMS pré-rédigés", "Ultra réactif"],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "Filtres d'affichage", desc: "Basculez entre 'Jour', 'À venir' et 'Passé'." },
            { x: 90, y: 10, number: 2, title: "Nouveau rendez-vous (+)", desc: "Enregistrez un créneau en quelques secondes." },
            { x: 45, y: 34, number: 3, title: "Carte de rendez-vous", desc: "Visualisez les coordonnées et générez un reçu." },
            { x: 50, y: 95, number: 4, title: "Navigation", desc: "Accès immédiat à toutes les sections." }
          ]
        },
        {
          id: "crm",
          tabTitle: "Clients & Forfaits",
          tag: "Fiches Clients (CRM)",
          title: "Fiche client avec historique et forfaits",
          subtitle: "Gardez vos habitués organisés.",
          imageFile: "2-klant.png",
          highlights: ["Recherche instantanée", "Solde de forfaits en or", "Notes personnalisées", "Check-in QR"],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Recherche rapide", desc: "Recherchez par nom ou téléphone." },
            { x: 45, y: 25, number: 2, title: "Fiche contact", desc: "Appelez ou envoyez un SMS en un clic." },
            { x: 80, y: 25, number: 3, title: "Solde forfaits", desc: "Nombre de séances restantes bien visible." },
            { x: 90, y: 9, number: 4, title: "Ajouter (+)", desc: "Créer un client en quelques secondes." }
          ]
        },
        {
          id: "pos",
          tabTitle: "Caisse & Reçus",
          tag: "Caisse (POS)",
          title: "Caisse rapide avec TVA & retours",
          subtitle: "Encaissez prestations et produits.",
          imageFile: "3-bon.png",
          highlights: ["Scanneur de code-barres", "Gestion des remboursements", "Taux de TVA automatiques", "Reçu PDF"],
          hotspots: [
            { x: 50, y: 16, number: 1, title: "En-tête reçu", desc: "Numéro unique et horodatage." },
            { x: 50, y: 38, number: 2, title: "Articles", desc: "Prestations et produits avec TVA." },
            { x: 80, y: 55, number: 3, title: "Retours", desc: "Enregistrer un retour facilement." },
            { x: 50, y: 78, number: 4, title: "Partager PDF", desc: "Imprimer ou envoyer par courriel." }
          ]
        },
        {
          id: "finance",
          tabTitle: "Comptabilité & Export",
          tag: "Finances & Export",
          title: "Prêt pour vos déclarations",
          subtitle: "ViCli centralise tous vos chiffres.",
          imageFile: "4-btw.png",
          highlights: ["Chiffre d'affaires en direct", "Export PDF et CSV", "Dossier fiscal propre", "Zéro stress"],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Période", desc: "Mois ou trimestre d'activité." },
            { x: 50, y: 30, number: 2, title: "Totaux", desc: "Montants bruts, nets et TVA." },
            { x: 50, y: 52, number: 3, title: "Ventilation TVA", desc: "Ventilation automatique par taux." },
            { x: 50, y: 75, number: 4, title: "Export 1 clic", desc: "Génération de fichier pour comptable." }
          ]
        },
        {
          id: "sms",
          tabTitle: "SMS & Modèles",
          tag: "Rappels",
          title: "Modèles pré-rédigés sans surcoût",
          subtitle: "Envoi via votre propre application SMS.",
          imageFile: "5-sms.png",
          highlights: ["Variables automatiques", "Pas de forfait SMS payant", "Rappels de rendez-vous", "100% privé"],
          hotspots: [
            { x: 50, y: 18, number: 1, title: "Choisir modèle", desc: "Confirmation ou rappel automatique." },
            { x: 50, y: 40, number: 2, title: "Variables", desc: "Nom et heure insérés automatiquement." },
            { x: 50, y: 65, number: 3, title: "Ouvrir SMS", desc: "Votre appli s'ouvre, texte déjà prêt." }
          ]
        },
        {
          id: "sync",
          tabTitle: "Google Drive Sync",
          tag: "Cloud",
          title: "Synchronisez via Google Drive",
          subtitle: "Travaillez sur tablette et smartphone.",
          imageFile: "6-sync.png",
          highlights: ["QR code de werkgroep", "Fonctionne hors ligne", "Google Drive sécurisé", "iOS & Android"],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "Connexion Google", desc: "Liaison avec votre compte personnel." },
            { x: 80, y: 46, number: 2, title: "Auto-sync", desc: "Synchronisation automatique active." },
            { x: 50, y: 78, number: 3, title: "Groupe", desc: "Associer un autre appareil par QR." }
          ]
        }
      ]
    },
    pricing: {
      badge: "Accessible & Transparent",
      title: "Une formule complète. Pour moins de 10 € par mois.",
      subtitle: "30 jours gratuits dans l'application avec toutes les fonctionnalités débloquées.",
      planBadge: "✨ Licence tout-en-un",
      planTitle: "ViCli Complet",
      planDesc: "Accès illimité à toutes les fonctions.",
      features: ["Fiches clients & notes", "Forfaits & séances", "Agenda complet", "Caisse & reçus PDF", "TVA & export CSV", "Sync Google Drive", "Hors ligne", "iOS & Android"],
      notice: "* L'essai de 30 jours est actif dès l'installation dans l'app sans paiement préalable.",
      cardPre: "30 premiers jours dans l'app",
      cardFree: "Gratuit",
      cardPost: "Puis moins de 10 € / mois",
      appStoreBtnSub: "Télécharger sur l'",
      appStoreBtnTitle: "Apple App Store",
      playStoreBtnSub: "Disponible sur",
      playStoreBtnTitle: "Google Play Store",
      cancelAnytime: "Sans engagement, résiliable sur votre store"
    },
    faq: {
      badge: "Questions & Réponses",
      title: "Foire aux questions",
      subtitle: "Vous avez une question sur l'application ?",
      items: [
        {
          q: "Pourquoi mes données sont-elles plus sûres avec ViCli ? (Zéro Donnée)",
          a: "ViCli ne possède aucun serveur de base de données. Toutes vos informations restent stockées exclusivement en local sur votre appareil. En cas de synchronisation, celle-ci s'effectue via votre Google Drive personnel. Le risque de fuite de données est nul."
        },
        {
          q: "Comment fonctionne l'essai gratuit de 30 jours ?",
          a: "Dès l'installation, vous profitez de trente jours sans aucun paiement préalable. Après 30 jours, l'app passe en lecture seule jusqu'à votre choix d'abonnement."
        },
        {
          q: "Combien coûte l'abonnement ViCli ?",
          a: "Moins de dix euros par mois (env. 9,49 € sur Android et 9,99 € sur iOS). Aucune commission par rendez-vous."
        }
      ]
    },
    ctaBanner: {
      title: "Prêt à simplifier votre gestion ?",
      subtitle: "Téléchargez ViCli dès aujourd'hui et testez 30 jours gratuits dans l'app.",
      ctaPrimary: "Essayer 30 jours gratuits dans l'app",
      ctaWhatsApp: "Poser une question sur WhatsApp"
    },
    footer: {
      tagline: "CRM, agenda et caisse pour les indépendants travaillant avec des habitués.",
      linksFunctions: "Fonctions",
      linksPlatform: "Plateforme",
      linksContact: "Contact & Info",
      privacy: "Politique de confidentialité",
      terms: "Conditions Générales",
      rights: "Tous droits réservés."
    }
  },

  es: {
    langName: "Español",
    flag: "🇪🇸",
    nav: {
      forWhom: "Para quién",
      features: "Funciones",
      tutorial: "Guía Interactiva",
      pricing: "Suscripción",
      faq: "Preguntas frecuentes",
      trialBadge: "30 días gratis en la app",
      downloadApp: "Descargar App"
    },
    hero: {
      pill: "✨ Diseñado para autónomos con clientes habituales",
      title: "Menos papeleo, más tiempo para tus ",
      titleHighlight: "clientes",
      subtitle: "ViCli reúne tu agenda, fichas de clientes, bonos y recibos en una sola aplicación fluida.",
      ctaPrimary: "Probar 30 días gratis en la app",
      ctaSecondary: "Ver funciones y hotspots",
      badgeTrial: "30 días gratis en la app",
      badgePrice: "Menos de 10 € al mes",
      badgeCommission: "0% comisión por cita",
      badgePlatform: "Para iOS y Android",
      badgeZeroData: "100% Local • Cero Datos en Servidores",
      ipadLabel: "Vista iPad y Tablet • Fichas de clientes y Bonos",
      iphoneLabel: "Vista iPhone y Android • Agenda"
    },
    privacyPillar: {
      badge: "Seguridad y Privacidad",
      title: "ViCli NO guarda datos en servidores",
      subtitle: "Tus clientes y facturación son únicamente tuyos. Al no existir un servidor central, las fugas de datos son imposibles.",
      points: [
        { title: "100% local en tu dispositivo", desc: "Toda la información se almacena cifrada en tu propio teléfono o tablet." },
        { title: "Sync con tu propio Google Drive", desc: "La sincronización se realiza a través de tu Drive privado (drive.appdata). Nadie más tiene acceso." },
        { title: "Sin cuentas ni rastreadores", desc: "Sin registros obligatorios ni publicidad. Totalmente adaptado al RGPD." }
      ]
    },
    audience: {
      badge: "Para Profesionales Autónomos",
      title: "Creado para quienes trabajan con cita previa",
      subtitle: "ViCli te proporciona exactamente lo que necesitas para tu día a día.",
      cards: [
        { title: "Belleza y Salones", desc: "Peluquerías, manicura, estética.", tag: "Bonos y caja" },
        { title: "Salud y Bienestar", desc: "Podólogos, masajistas, fisioterapia.", tag: "IVA e historial" },
        { title: "Entrenadores y Coaches", desc: "Entrenadores personales, yoga.", tag: "Bonos de sesiones" },
        { title: "Especialistas", desc: "Peluquería canina, fotógrafos.", tag: "Agenda y notas" }
      ]
    },
    features: {
      badge: "Tour Interactivo",
      title: "Explora todas las funciones con hotspots",
      subtitle: "Pulsa una función para ver la pantalla real. Haz clic en los hotspots para ver las explicaciones.",
      cta: "Abrir la guía completa",
      interfaceLabel: "Interfaz real de ViCli en Español",
      hotspotHint: "Toca un círculo numerado para ver los detalles",
      tabs: [
        {
          id: "agenda",
          tabTitle: "Agenda y Citas",
          tag: "Agenda y Calendario",
          title: "Planificación diaria y semanal sin complicaciones",
          subtitle: "Organiza citas en cuestión de segundos.",
          imageFile: "1-agenda.png",
          highlights: ["Filtros Día, Próximas y Pasadas", "Añadir citas (+)", "SMS preparados", "Rápido y fluido"],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "Filtros de vista", desc: "Alterna entre 'Día', 'Próximas' y 'Pasadas'." },
            { x: 90, y: 10, number: 2, title: "Nueva cita (+)", desc: "Programa una cita en segundos." },
            { x: 45, y: 34, number: 3, title: "Tarjeta de cita", desc: "Accede al cliente y genera recibos." },
            { x: 50, y: 95, number: 4, title: "Navegación", desc: "Cambia entre secciones al instante." }
          ]
        },
        {
          id: "crm",
          tabTitle: "Clientes y Bonos",
          tag: "Gestión de Clientes (CRM)",
          title: "Ficha de cliente con historial y bonos",
          subtitle: "Mantén a todos tus clientes organizados.",
          imageFile: "2-klant.png",
          highlights: ["Búsqueda rápida", "Saldo de bonos en dorado", "Notas personalizadas", "Check-in QR"],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Buscador", desc: "Busca por nombre o teléfono." },
            { x: 45, y: 25, number: 2, title: "Ficha de cliente", desc: "Llama o envía SMS con un toque." },
            { x: 80, y: 25, number: 3, title: "Saldo de bonos", desc: "Sesiones restantes destacadas." },
            { x: 90, y: 9, number: 4, title: "Añadir (+)", desc: "Crea un cliente nuevo al instante." }
          ]
        },
        {
          id: "pos",
          tabTitle: "Caja y Recibos",
          tag: "Punto de Venta (POS)",
          title: "Caja rápida con desglose de IVA",
          subtitle: "Cobra servicios y productos al instante.",
          imageFile: "3-bon.png",
          highlights: ["Lector de código de barras", "Gestión de devoluciones", "Cálculo de IVA automático", "Recibo PDF"],
          hotspots: [
            { x: 50, y: 16, number: 1, title: "Datos recibo", desc: "Número único y fecha." },
            { x: 50, y: 38, number: 2, title: "Líneas de venta", desc: "Servicios y productos con IVA." },
            { x: 80, y: 55, number: 3, title: "Devoluciones", desc: "Registra devoluciones fácilmente." },
            { x: 50, y: 78, number: 4, title: "PDF", desc: "Comparte o imprime el recibo." }
          ]
        },
        {
          id: "finance",
          tabTitle: "Contabilidad y Exportación",
          tag: "Finanzas y Reportes",
          title: "Listo para tus declaraciones",
          subtitle: "ViCli mantiene tus cuentas al día.",
          imageFile: "4-btw.png",
          highlights: ["Ingresos al momento", "Exportación PDF y CSV", "Registros fiscales claros", "Sin estrés"],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Periodo", desc: "Selecciona mes o trimestre." },
            { x: 50, y: 30, number: 2, title: "Totales", desc: "Total bruto, neto e IVA." },
            { x: 50, y: 52, number: 3, title: "Desglose IVA", desc: "Separación por tipos impositivos." },
            { x: 50, y: 75, number: 4, title: "Exportar", desc: "Envía los datos a tu gestor." }
          ]
        },
        {
          id: "sms",
          tabTitle: "SMS y Plantillas",
          tag: "Recordatorios",
          title: "Plantillas listas sin costes extra",
          subtitle: "Envío a través de tu propia app de SMS.",
          imageFile: "5-sms.png",
          highlights: ["Relleno automático", "Sin cargos adicionales", "Recordatorios de cita", "100% privado"],
          hotspots: [
            { x: 50, y: 18, number: 1, title: "Plantilla", desc: "Elige confirmación o recordatorio." },
            { x: 50, y: 40, number: 2, title: "Variables", desc: "Nombre y hora insertados automáticamente." },
            { x: 50, y: 65, number: 3, title: "Abrir SMS", desc: "Tu app se abre con el texto listo." }
          ]
        },
        {
          id: "sync",
          tabTitle: "Google Drive Sync",
          tag: "Nube",
          title: "Sincroniza con Google Drive",
          subtitle: "Trabaja con tablet y móvil.",
          imageFile: "6-sync.png",
          highlights: ["Código QR de grupo", "Modo sin conexión", "Google Drive seguro", "iOS y Android"],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "Login Google", desc: "Vinculación con tu cuenta personal." },
            { x: 80, y: 46, number: 2, title: "Auto-sync", desc: "Sincronización en segundo plano." },
            { x: 50, y: 78, number: 3, title: "Grupo QR", desc: "Conecta otros dispositivos fácilmente." }
          ]
        }
      ]
    },
    pricing: {
      badge: "Transparente y Asequible",
      title: "Un plan completo. Por menos de 10 € al mes.",
      subtitle: "Empiezas con 30 días gratis con todo abierto en la app.",
      planBadge: "✨ Licencia todo incluido",
      planTitle: "ViCli Completo",
      planDesc: "Acceso total a todas las funciones.",
      features: ["Fichas & notas", "Control de bonos", "Agenda completa", "Caja & recibos PDF", "Informes IVA & CSV", "Sync Google Drive", "Funciona offline", "iOS y Android"],
      notice: "* La prueba de 30 días está activa directamente en la app al instalarla.",
      cardPre: "Primeros 30 días en la app",
      cardFree: "Gratis",
      cardPost: "Luego menos de 10 € / mes",
      appStoreBtnSub: "Descárgalo en el",
      appStoreBtnTitle: "Apple App Store",
      playStoreBtnSub: "Disponible en",
      playStoreBtnTitle: "Google Play Store",
      cancelAnytime: "Cancela cuando quieras desde tu cuenta"
    },
    faq: {
      badge: "Preguntas y Respuestas",
      title: "Preguntas frecuentes",
      subtitle: "¿Tienes alguna duda sobre la aplicación?",
      items: [
        {
          q: "¿Por qué mis datos están más seguros con ViCli? (Cero Datos)",
          a: "ViCli no almacena datos en un servidor central. Toda tu información se guarda en local en tu dispositivo y se sincroniza a través de tu propia Google Drive. El riesgo de brechas de seguridad es cero."
        },
        {
          q: "¿Cómo funciona la prueba gratuita de 30 días?",
          a: "Comienzas con 30 días tras la instalación con todas las funciones desbloqueadas sin pago por adelantado."
        },
        {
          q: "¿Cuánto cuesta la suscripción?",
          a: "Menos de diez euros al mes (aprox. 9,49 € en Android y 9,99 € en iOS). Sin comisiones."
        }
      ]
    },
    ctaBanner: {
      title: "¿Listo para simplificar tu gestión?",
      subtitle: "Descarga ViCli hoy y pruébalo 30 días gratis en la app.",
      ctaPrimary: "Probar 30 días gratis en la app",
      ctaWhatsApp: "Preguntar por WhatsApp"
    },
    footer: {
      tagline: "CRM, agenda y caja para profesionales autónomos con clientes habituales.",
      linksFunctions: "Funciones",
      linksPlatform: "Plataforma",
      linksContact: "Contacto e Información",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
      rights: "Todos los derechos reservados."
    }
  },

  pt: {
    langName: "Português",
    flag: "🇵🇹",
    nav: {
      forWhom: "Para quem",
      features: "Funções",
      tutorial: "Guia Interativo",
      pricing: "Subscrição",
      faq: "Perguntas frequentes",
      trialBadge: "30 dias grátis na app",
      downloadApp: "Descarregar App"
    },
    hero: {
      pill: "✨ Feito para profissionais com clientes habituais",
      title: "Menos papelada, mais tempo para os teus ",
      titleHighlight: "clientes",
      subtitle: "O ViCli reúne a tua agenda, fichas de clientes, cartões de sessões e recibos numa só aplicação fluida.",
      ctaPrimary: "Experimentar 30 dias grátis na app",
      ctaSecondary: "Ver funções e hotspots",
      badgeTrial: "30 dias grátis na app",
      badgePrice: "Menos de 10 € por mês",
      badgeCommission: "0% comissão por marcação",
      badgePlatform: "Para iOS e Android",
      badgeZeroData: "100% Local • Sem Dados em Servidores",
      ipadLabel: "Vista iPad e Tablet • Fichas de clientes e Cartões de sessões",
      iphoneLabel: "Vista iPhone e Android • Agenda"
    },
    privacyPillar: {
      badge: "Segurança e Privacidade",
      title: "O ViCli NÃO guarda dados em servidores",
      subtitle: "Os teus clientes pertencem-te a ti. Como não existe um servidor central, o risco de fugas de informação é nulo.",
      points: [
        { title: "100% local no teu dispositivo", desc: "Todos os dados ficam guardados de forma encriptada no teu telemóvel ou tablet." },
        { title: "Sync através da tua Google Drive", desc: "A sincronização passa pela tua Google Drive pessoal (drive.appdata). Não temos acesso." },
        { title: "Sem contas nem rastreamento", desc: "Sem registos nem publicidade. Totalmente em conformidade com o RGPD." }
      ]
    },
    audience: {
      badge: "Para Profissionais Autónomos",
      title: "Criado para quem trabalha por marcação",
      subtitle: "O ViCli dá-te exatamente o que precisas para o teu dia a dia.",
      cards: [
        { title: "Beleza e Salões", desc: "Cabeleireiros, manicures, esteticistas.", tag: "Sessões e caixa" },
        { title: "Saúde e Bem-estar", desc: "Podologistas, terapeutas, massagistas.", tag: "IVA e histórico" },
        { title: "Treinadores e Coaches", desc: "Personal trainers, ioga.", tag: "Pacotes de sessões" },
        { title: "Especialistas", desc: "Tosquia de animais, fotógrafos.", tag: "Agenda e notas" }
      ]
    },
    features: {
      badge: "Tour Interativo",
      title: "Descobre todas as funções com hotspots",
      subtitle: "Clica numa função para veres o ecrã real. Toca nos círculos para veres as explicações.",
      cta: "Abrir o guia completo",
      interfaceLabel: "Interface real do ViCli em Português",
      hotspotHint: "Toca num círculo numerado para veres detalhes",
      tabs: [
        {
          id: "agenda",
          tabTitle: "Agenda e Marcações",
          tag: "Agenda e Calendário",
          title: "Planeamento diário e semanal sem stress",
          subtitle: "Marca sessões em segundos.",
          imageFile: "1-agenda.png",
          highlights: ["Filtros Dia, Próximas e Passadas", "Marcação rápida (+)", "SMS pré-escritas", "Rápido e fluido"],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "Filtros", desc: "Alterna entre 'Dia', 'Próximas' e 'Passadas'." },
            { x: 90, y: 10, number: 2, title: "Nova marcação (+)", desc: "Regista uma sessão rapidamente." },
            { x: 45, y: 34, number: 3, title: "Cartão de marcação", desc: "Acede aos detalhes e emite recibos." },
            { x: 50, y: 95, number: 4, title: "Navegação", desc: "Muda de secção com facilidade." }
          ]
        },
        {
          id: "crm",
          tabTitle: "Clientes e Sessões",
          tag: "Gestão de Clientes (CRM)",
          title: "Ficha de cliente com histórico e sessões",
          subtitle: "Mantém os teus clientes organizados.",
          imageFile: "2-klant.png",
          highlights: ["Pesquisa rápida", "Saldo em dourado", "Notas personalizadas", "Check-in QR"],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Pesquisa", desc: "Procura por nome ou telefone." },
            { x: 45, y: 25, number: 2, title: "Ficha", desc: "Telefona ou envia SMS de imediato." },
            { x: 80, y: 25, number: 3, title: "Saldo de sessões", desc: "Sessões restantes em destaque." },
            { x: 90, y: 9, number: 4, title: "Adicionar (+)", desc: "Cria um cliente em segundos." }
          ]
        },
        {
          id: "pos",
          tabTitle: "Caixa e Recibos",
          tag: "Ponto de Venda (POS)",
          title: "Caixa rápida com discriminação de IVA",
          subtitle: "Cobra serviços e produtos em segundos.",
          imageFile: "3-bon.png",
          highlights: ["Leitor de código de barras", "Registo de devoluções", "Cálculo de IVA automático", "Recibo PDF"],
          hotspots: [
            { x: 50, y: 16, number: 1, title: "Dados do recibo", desc: "Número único e data." },
            { x: 50, y: 38, number: 2, title: "Linhas", desc: "Serviços e produtos com IVA." },
            { x: 80, y: 55, number: 3, title: "Devoluções", desc: "Processa reembolsos facilmente." },
            { x: 50, y: 78, number: 4, title: "PDF", desc: "Partilha ou imprime o recibo." }
          ]
        },
        {
          id: "finance",
          tabTitle: "Contabilidade e Exportação",
          tag: "Finanças e Relatórios",
          title: "Pronto para as tuas obrigações fiscais",
          subtitle: "O ViCli mantém os teus números em ordem.",
          imageFile: "4-btw.png",
          highlights: ["Faturação em direto", "Exportação PDF e CSV", "Registos fiáveis", "Sem complicações"],
          hotspots: [
            { x: 50, y: 15, number: 1, title: "Período", desc: "Mês ou trimestre." },
            { x: 50, y: 30, number: 2, title: "Totais", desc: "Bruto, líquido e IVA." },
            { x: 50, y: 52, number: 3, title: "Taxas de IVA", desc: "Discriminação por escalão." },
            { x: 50, y: 75, number: 4, title: "Exportação", desc: "Gera ficheiro para o contabilista." }
          ]
        },
        {
          id: "sms",
          tabTitle: "SMS e Modelos",
          tag: "Lembretes",
          title: "Modelos prontos sem custos adicionais",
          subtitle: "Envio através da tua própria app de mensagens.",
          imageFile: "5-sms.png",
          highlights: ["Variáveis automáticas", "Sem taxas extra", "Lembretes práticos", "100% privado"],
          hotspots: [
            { x: 50, y: 18, number: 1, title: "Modelo", desc: "Confirmação ou lembrete." },
            { x: 50, y: 40, number: 2, title: "Variáveis", desc: "Nome e hora preenchidos sozinhos." },
            { x: 50, y: 65, number: 3, title: "Abrir SMS", desc: "Abre a app de mensagens pronta." }
          ]
        },
        {
          id: "sync",
          tabTitle: "Google Drive Sync",
          tag: "Nuvem",
          title: "Sync através da Google Drive",
          subtitle: "Usa no tablet e no telemóvel.",
          imageFile: "6-sync.png",
          highlights: ["QR code de grupo", "Modo offline", "Google Drive privada", "iOS e Android"],
          hotspots: [
            { x: 50, y: 22, number: 1, title: "Google", desc: "Ligação à tua conta pessoal." },
            { x: 80, y: 46, number: 2, title: "Auto-sync", desc: "Sincronização em segundo plano." },
            { x: 50, y: 78, number: 3, title: "Grupo QR", desc: "Conecta dispositivos num instante." }
          ]
        }
      ]
    },
    pricing: {
      badge: "Acessível e Transparente",
      title: "Um plano completo. Por menos de 10 € por mês.",
      subtitle: "Começas com 30 dias grátis em que tudo está disponível na app.",
      planBadge: "✨ Licença tudo-em-um",
      planTitle: "ViCli Completo",
      planDesc: "Acesso total a todas as funcionalidades.",
      features: ["Fichas & notas", "Controlo de sessões", "Agenda completa", "Caixa & recibos PDF", "Resumos de IVA & CSV", "Sync Google Drive", "Modo offline", "iOS e Android"],
      notice: "* O período de teste de 30 dias fica ativo na app logo após a instalação.",
      cardPre: "Primeiros 30 dias na app",
      cardFree: "Grátis",
      cardPost: "Depois menos de 10 € / mês",
      appStoreBtnSub: "Descarregar na",
      appStoreBtnTitle: "Apple App Store",
      playStoreBtnSub: "Disponível no",
      playStoreBtnTitle: "Google Play Store",
      cancelAnytime: "Cancela quando quiseres na tua conta"
    },
    faq: {
      badge: "Perguntas e Respostas",
      title: "Perguntas frequentes",
      subtitle: "Tens alguma dúvida sobre a aplicação?",
      items: [
        {
          q: "Porque é que os meus dados estão mais seguros com o ViCli? (Zero Dados)",
          a: "O ViCli não tem um servidor de base de dados. Toda a informação fica guardada apenas no teu próprio dispositivo e sincroniza através da tua Google Drive privada. O risco de fugas de informação é zero."
        },
        {
          q: "Como funciona o período experimental de 30 dias?",
          a: "Começas com 30 dias após a instalação com tudo aberto na aplicação sem pagamento antecipado."
        },
        {
          q: "Quanto custa a subscrição?",
          a: "Menos de dez euros por mês (cerca de 9,49 € em Android e 9,99 € em iOS). Sem comissões."
        }
      ]
    },
    ctaBanner: {
      title: "Pronto para simplificar a tua gestão?",
      subtitle: "Descarrega o ViCli hoje e experimenta 30 dias grátis na app.",
      ctaPrimary: "Experimentar 30 dias grátis na app",
      ctaWhatsApp: "Fazer uma pergunta por WhatsApp"
    },
    footer: {
      tagline: "CRM, agenda e caixa para profissionais com clientes habituais.",
      linksFunctions: "Funções",
      linksPlatform: "Plataforma",
      linksContact: "Contacto e Informação",
      privacy: "Política de Privacidade",
      terms: "Termos e Condições",
      rights: "Todos os direitos reservados."
    }
  }
};
