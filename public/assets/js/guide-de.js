/**
 * Guide Calypso Bay - Deutsch Translations
 * Gestion du carousel et des popups
 */

// ============================================================================
// DONNÉES DE TRADUCTION - TEXTE STATIQUE
// ============================================================================

const guideTranslations = {
  // Métadonnées de la page
  meta: {
    title: 'Leitfaden',
    description:
      'Ihr Ferienhaus in Bouillante, Guadeloupe. Hier finden Sie alle nützlichen Informationen, um Ihren Aufenthalt in vollen Zügen zu genießen.'
  },

  // Navigation
  navigation: {
    menu: 'Menü',
    logement: 'Unterkunft',
    localisation: 'Lage',
    transport: 'Transport',
    commerces: 'Geschäfte & Dienstleistungen',
    restaurants: 'Restaurants',
    activites: 'Aktivitäten',
    excursions: 'Ausflüge',
    sante: 'Gesundheit & Versorgung',
    eauElectricite: 'Wasser & Strom',
    cyclones: 'Zyklone',
    infosPratiques: 'Praktische Infos'
  },

  // Section Hero
  hero: {
    title: 'Willkommen in',
    brand: 'Calypso Bay',
    description:
      'Ihr Ferienhaus in Bouillante, Guadeloupe. Hier finden Sie alle nützlichen Informationen, um Ihren Aufenthalt in vollen Zügen zu genießen.',
    location: 'Bouillante • Guadeloupe'
  },

  // Sections principales
  sections: {
    logement: 'Unterkunft und Ausstattung',
    localisation: 'Lage und Routen',
    transport: 'Transport und Zugang',
    commerces: 'Dienstleistungen und Geschäfte',
    restaurants: 'Restaurants und Gastronomie',
    activites: 'Aktivitäten',
    excursions: 'Ausflüge',
    sante: 'Gesundheit, Versorgung & Prävention',
    eauElectricite: 'Wasser & Strom',
    cyclones: 'Zyklone und Wetterwarnungen',
    infosPratiques: 'Praktische Informationen'
  },

  // Cartes - descriptions communes
  cards: {
    clickToLearnMore: 'Klicken Sie hier, um mehr zu erfahren…'
  },

  // Traductions des titres de cartes
  cardTitles: {
    Présentation: 'Präsentation',
    'Éclairage & ventilateur du salon': 'Beleuchtung & Wohnzimmer-Ventilator',
    "La distribution de l'eau chaude": 'Warmwasserverteilung',
    Internet: 'Internet',
    'Les WC et les eaux usées': 'Toiletten & Abwasser',
    'Filet de sécurité et terrasse': 'Sicherheitsnetz & Terrasse',
    'La gestion des déchets': 'Abfallentsorgung',
    'Les volets et les fenêtres': 'Rollläden & Schlafzimmerfenster',
    'La Climatisation': 'Klimaanlage',
    'Adresse de Calypso Bay': 'Adresse von Calypso Bay',
    Itinéraires: 'Routen',
    'Accès à la villa': 'Zugang zur Villa',
    'Loueurs de voiture': 'Autovermietungen',
    Taxi: 'Taxi',
    Navette: 'Shuttle',
    'Carrefour Market': 'Carrefour Market',
    'Leader Price': 'Leader Price',
    'Cap Créole': 'Cap Créole',
    'Four des Iles': 'Four des Îles',
    'Ti Taurus': 'Ti Taurus',
    'Chez Adèle': 'Chez Adèle',
    'La Touna': 'La Touna',
    'Chez Didier': 'Chez Didier',
    'Sunset B': 'Sunset B',
    'Aux Deux Coquilles': 'Aux Deux Coquilles',
    'Franko Grill': 'Franko Grill',
    Oganik: 'Oganik',
    'Allo Pizza': 'Allo Pizza',
    'Le Cœur de Pigeon': 'Le Cœur de Pigeon',
    Kayak: 'Kajak',
    Plongée: 'Tauchen',
    Distilleries: 'Rumdestillerien',
    'Maison du Cacao': 'Maison du Cacao',
    'Musée du Rhum': 'Rum-Museum',
    'Habitation Côte sous le Vent': 'Habitation Côte-sous-le-Vent',
    'Mémorial ACTe': 'Mémorial ACTe',
    Microbrasserie: 'Mikrobrauerei',
    Aquarium: 'Aquarium',
    'Site de tournage': 'Drehort',
    'Plages et snorkeling': 'Strände & Schnorcheln',
    'Cascades et randonnées': 'Wasserfälle & Wanderungen',
    'Découvertes en mer': 'Entdeckungen auf dem Meer',
    'Balades et découvertes': 'Spaziergänge & Entdeckungen',
    'Services de soins': 'Gesundheitsdienste',
    'Protection anti-moustiques': 'Mückenschutz',
    'Faune locale': 'Lokale Tierwelt',
    'Protection solaire': 'Sonnenschutz',
    'Bains chauds': 'Heiße Quellen',
    'Bons réflexes': 'Gute Reflexe',
    Eau: 'Wasser',
    Électricité: 'Strom',
    'Saison cyclonique': 'Wirbelsturmsaison',
    'La maison en cas de cyclone': 'Das Haus im Falle eines Wirbelsturms',
    "Gestion de l'eau": 'Wasserverwaltung',
    "Contacts d'urgence": 'Notfallkontakte',
    'Taxe de séjour': 'Kurtaxe',
    'Préparatifs avant le départ': 'Vorbereitungen vor der Abreise',
    'Équipements fournis': 'Bereitgestellte Ausstattung',
    'Équipements à emporter': 'Mitzubringende Ausstattung',
    'Conseils pratiques sur place': 'Praktische Tipps vor Ort'
  },

  // Traductions des tags
  tags: {
    Bistronomique: 'Bistronomisch',
    'Saveurs franco-créole': 'Französisch-kreolische Aromen',
    'Saveurs créoles': 'Kreolische Aromen',
    Grillades: 'Gegrilltes',
    Pizzeria: 'Pizzeria',
    Drive: 'Drive-in',
    'Sur place': 'Vor Ort essen',
    'A emporter': 'Zum Mitnehmen',
    Supermarché: 'Supermarkt',
    Poissonnerie: 'Fischmarkt',
    Boulangerie: 'Bäckerei',
    Boucherie: 'Metzgerei',
    'Fruits et Légumes': 'Obst & Gemüse',
    'Côtière nord': 'Nordküste',
    'La traversée': 'Route de la Traversée',
    'Environ 80€': 'Etwa 80 €',
    Économique: 'Preisgünstig',
    'CARAÏBE KAYAK': 'CARAÏBE KAYAK',
    'GWADA PAGAIE': 'GWADA PAGAIE',
    'Les Heures Saines': 'Les Heures Saines',
    Bologne: 'Bologne',
    Longueteau: 'Longueteau',
    'Pointe-Noire': 'Pointe-Noire',
    Dégustation: 'Verkostung',
    'Sainte-Rose': 'Sainte-Rose',
    Culture: 'Kultur',
    Patrimoine: 'Erbe',
    'Pointe-à-Pitre': 'Pointe-à-Pitre',
    Histoire: 'Geschichte',
    'Bière locale': 'Lokales Bier',
    Gosier: 'Le Gosier',
    'Faune marine': 'Meeresfauna',
    Deshaies: 'Deshaies',
    'Meurtres au paradis': 'Death in Paradise',
    Plages: 'Strände',
    Snorkeling: 'Schnorcheln',
    Cascades: 'Wasserfälle',
    Randonnées: 'Wandern',
    Plongée: 'Tauchen',
    Excursions: 'Ausflüge',
    Culture: 'Kultur',
    Patrimoine: 'Erbe',
    '717 rue de Poirier, BOUILLANTE': '717 rue de Poirier, BOUILLANTE'
  },

  // Autres textes à traduire
  otherTexts: {
    'Adresse : 717 rue de Poirier, Bouillante':
      'Adresse: 717 rue de Poirier, Bouillante',
    'Check-in : 15h00': 'Check-in: 15:00 Uhr',
    'Check-out : 10h00': 'Check-out: 10:00 Uhr'
  },

  // Footer
  footer: {
    brand: 'Calypso Bay',
    contactTitle: 'Für Fragen kontaktieren Sie uns:',
    email: 'contact@calypso-bay.com',
    phone: '+590 • • • • • • •',
    infosTitle: 'Praktische Infos',
    address: 'Adresse: 717 rue de Poirier, Bouillante',
    checkin: 'Check-in: 15:00 Uhr',
    checkout: 'Check-out: 10:00 Uhr',
    copyright: '© 2025 Calypso Bay. Gästehandbuch.'
  },

  // Boutons et actions
  buttons: {
    close: '✕'
  }
}

// ============================================================================
// INITIALISATION DE L'INTERFACE
// ============================================================================

function initializeInterface() {
  // Mettre à jour le titre de la page
  document.title = guideTranslations.meta.title

  // Mettre à jour la meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', guideTranslations.meta.description)
  }

  // Mettre à jour les éléments de navigation
  updateNavigationElements()

  // Mettre à jour la section hero
  updateHeroSection()

  // Mettre à jour les sections
  updateSections()

  // Mettre à jour le footer
  updateFooter()

  // Mettre à jour les cartes
  updateCards()
}

function updateNavigationElements() {
  // Menu button
  const menuText = document.querySelector('.guide-menu-text')
  if (menuText) menuText.textContent = guideTranslations.navigation.menu

  // Navigation links
  const navLinks = document.querySelectorAll('.guide-menu-dropdown a')
  const linkMap = {
    '#logement': guideTranslations.navigation.logement,
    '#localisation': guideTranslations.navigation.localisation,
    '#transport': guideTranslations.navigation.transport,
    '#commerces': guideTranslations.navigation.commerces,
    '#restaurants': guideTranslations.navigation.restaurants,
    '#activites': guideTranslations.navigation.activites,
    '#excursions': guideTranslations.navigation.excursions,
    '#sante': guideTranslations.navigation.sante,
    '#eau-electricite': guideTranslations.navigation.eauElectricite,
    '#cyclones': guideTranslations.navigation.cyclones,
    '#infos-pratiques': guideTranslations.navigation.infosPratiques
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute('href')
    if (linkMap[href]) {
      link.textContent = linkMap[href]
    }
  })
}

function updateHeroSection() {
  // Logo text
  const logoText = document.querySelector('.guide-logo-text')
  if (logoText) logoText.textContent = guideTranslations.meta.title

  // Hero title
  const heroTitle = document.querySelector('.guide-hero-title')
  if (heroTitle) {
    heroTitle.innerHTML = `${guideTranslations.hero.title}<br /><span class="guide-hero-brand">${guideTranslations.hero.brand}</span>`
  }

  // Hero description
  const heroDescription = document.querySelector('.guide-hero-description')
  if (heroDescription)
    heroDescription.textContent = guideTranslations.hero.description

  // Hero badge
  const heroBadge = document.querySelector('.guide-hero-badge')
  if (heroBadge) heroBadge.textContent = guideTranslations.hero.location
}

function updateSections() {
  const sectionMap = {
    logement: guideTranslations.sections.logement,
    localisation: guideTranslations.sections.localisation,
    transport: guideTranslations.sections.transport,
    commerces: guideTranslations.sections.commerces,
    restaurants: guideTranslations.sections.restaurants,
    activites: guideTranslations.sections.activites,
    excursions: guideTranslations.sections.excursions,
    sante: guideTranslations.sections.sante,
    'eau-electricite': guideTranslations.sections.eauElectricite,
    cyclones: guideTranslations.sections.cyclones,
    'infos-pratiques': guideTranslations.sections.infosPratiques
  }

  Object.keys(sectionMap).forEach((sectionId) => {
    const sectionTitle = document.querySelector(
      `#${sectionId} .guide-section-title`
    )
    if (sectionTitle) {
      sectionTitle.textContent = sectionMap[sectionId]
    }
  })
}

function updateFooter() {
  // Footer brand
  const footerBrand = document.querySelector('.guide-footer-brand')
  if (footerBrand) footerBrand.textContent = guideTranslations.footer.brand

  // Footer contact
  const footerTexts = document.querySelectorAll('.guide-footer-text')
  if (footerTexts.length >= 3) {
    footerTexts[0].textContent = guideTranslations.footer.contactTitle
    footerTexts[1].textContent = guideTranslations.footer.email
    footerTexts[2].textContent = guideTranslations.footer.phone
  }

  // Footer infos
  const footerTitle = document.querySelector('.guide-footer-title')
  if (footerTitle) footerTitle.textContent = guideTranslations.footer.infosTitle

  const footerList = document.querySelector('.guide-footer-list')
  if (footerList) {
    footerList.innerHTML = `
      <li>${guideTranslations.footer.address}</li>
      <li>${guideTranslations.footer.checkin}</li>
      <li>${guideTranslations.footer.checkout}</li>
    `
  }

  // Copyright
  const copyright = document.querySelector('.guide-copyright')
  if (copyright) copyright.textContent = guideTranslations.footer.copyright
}

function updateCards() {
  // Mettre à jour toutes les descriptions de cartes
  const cardDescriptions = document.querySelectorAll('.guide-card-description')
  cardDescriptions.forEach((desc) => {
    if (desc.textContent.includes('Cliquez pour en savoir plus')) {
      desc.textContent = guideTranslations.cards.clickToLearnMore
    }
  })

  // Mettre à jour tous les titres de cartes
  const cardTitles = document.querySelectorAll('.guide-card-title')
  cardTitles.forEach((title) => {
    const frenchTitle = title.textContent.trim()
    if (guideTranslations.cardTitles[frenchTitle]) {
      title.textContent = guideTranslations.cardTitles[frenchTitle]
    }
  })

  // Mettre à jour tous les tags
  const cardTags = document.querySelectorAll('.guide-tag')
  cardTags.forEach((tag) => {
    const frenchTag = tag.textContent.trim()
    if (guideTranslations.tags[frenchTag]) {
      tag.textContent = guideTranslations.tags[frenchTag]
    }
  })

  // Mettre à jour les autres textes (adresses, etc.)
  const allTextElements = document.querySelectorAll('li, span, p')
  allTextElements.forEach((element) => {
    const frenchText = element.textContent.trim()
    if (guideTranslations.otherTexts[frenchText]) {
      element.textContent = guideTranslations.otherTexts[frenchText]
    }
  })
}

// ============================================================================
// GESTION DU CAROUSEL
// ============================================================================

class CarouselManager {
  constructor(containerId, leftButtonId, rightButtonId) {
    this.container = document.getElementById(containerId)
    this.leftButton = document.getElementById(leftButtonId)
    this.rightButton = document.getElementById(rightButtonId)

    this.init()
  }

  init() {
    if (!this.container) return

    // Événements pour les boutons de navigation
    if (this.leftButton) {
      this.leftButton.addEventListener('click', () => this.scroll(-1))
    }

    if (this.rightButton) {
      this.rightButton.addEventListener('click', () => this.scroll(1))
    }

    // Événements pour le scroll et le redimensionnement
    this.container.addEventListener('scroll', () => this.updateNavigation())
    window.addEventListener('resize', () => this.updateNavigation())

    // Initialisation de la navigation
    this.updateNavigation()
  }

  updateNavigation() {
    if (!this.container) return

    const { scrollLeft, scrollWidth, clientWidth } = this.container
    const overflow = scrollWidth > clientWidth + 1

    // Affichage/masquage des boutons selon la position
    if (this.leftButton) {
      this.leftButton.classList.toggle('hidden', !overflow || scrollLeft <= 0)
    }

    if (this.rightButton) {
      this.rightButton.classList.toggle(
        'hidden',
        !overflow || scrollLeft + clientWidth >= scrollWidth - 1
      )
    }
  }

  scroll(direction) {
    if (!this.container) return

    const amount = Math.round(this.container.clientWidth * 0.92) * direction
    this.container.scrollBy({
      left: amount,
      behavior: 'smooth'
    })
  }
}

// ============================================================================
// GESTION DES POPUPS
// ============================================================================

class PopupManager {
  constructor() {
    this.overlay = document.getElementById('popup-overlay')
    this.content = document.getElementById('popup-content')

    // Données des Popups
    this.popupData = {
      presentation: {
        title: 'Präsentation',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Präsentation</h3>
          <div class="guide-popup-content">
            <p>Der Architekt, der das Haus gebaut hat, heißt <strong>Herr Laurent DARVIOT</strong>. Er ist sehr umweltbewusst, was die Ausstattung von Anfang an mit einem doppelten Wasserversorgungssystem erklärt – insbesondere die Nutzung von Regenwasser für die Toiletten.</p>
            <ul>
              <li>Das Warmwasser für die Duschen wird durch einen <strong>Solar-Wassererhitzer</strong> erzeugt</li>
              <li>Ein Teil der <strong>Außenbeleuchtung</strong> wird mit Solarenergie betrieben</li>
              <li>Herr DARVIOT war der erste Architekt, der in Guadeloupe ein <strong>autonomes Gebäude</strong> errichtete (Résidence MALDYVES in Goyave), wofür er 2022 den Wohnpreis der <em>Trophées Bâtiments Résilients</em> erhielt</li>
              <li>In unserem Haus hat er viele Öffnungen vorgesehen, um die <strong>Luftzirkulation</strong> zu fördern, ergänzt durch Ventilatoren, die weniger Energie verbrauchen als eine Klimaanlage</li>
              <li>Die Schlafzimmer sind <strong>klimatisiert</strong>, um den Schlafkomfort zu verbessern</li>
              <li>Jedes Jahr überprüft ein spezialisiertes Unternehmen die <strong>Anlage und reinigt die Filter</strong></li>
            </ul>
          </div>
        `
      },
      eclairage: {
        title: 'Beleuchtung & Wohnzimmer-Ventilator',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-lightbulb guide-icon light"></i>Beleuchtung & Wohnzimmer-Ventilator</h3>
          <div class="guide-popup-content">
            <p><i class="fas fa-power-off guide-icon power"></i> <strong>Hauptschalter :</strong> Der Hauptschalter des Wohnzimmers befindet sich neben der Tür zum hinteren Schlafzimmer. Er schaltet die Stromversorgung für den Ventilator und die Lampe ein.</p>
            <p><i class="fas fa-lightbulb guide-icon light"></i> <strong>LEXMAN-Fernbedienung (Beleuchtung) :</strong> Die Beleuchtung wird über die kleine LEXMAN-Fernbedienung gesteuert. Zum Ein- und Ausschalten einfach die Taste mit dem Symbol eines durchgestrichenen Kreises drücken.</p>
            <img src="images/guide/24.webp" alt="LEXMAN-Fernbedienung"/>
            <p><i class="fas fa-fan guide-icon fan"></i> <strong>FANELITE-Fernbedienung (Ventilator) :</strong> Der Ventilator wird über die FANELITE-Fernbedienung gesteuert :</p>
            <ul>
              <li>Einschalten: Auf das Symbol I oben auf der Fernbedienung drücken</li>
              <li>Ausschalten: Auf den Kreis rechts drücken</li>
            </ul>
            <img src="images/guide/23.webp" alt="FANELITE-Fernbedienung"/>
            <p><i class="fas fa-lightbulb guide-icon light"></i> <strong>Ventilatorbeleuchtung :</strong> Es gibt auch eine Beleuchtung am Sockel des Ventilators, die über das Symbol mit der Glühbirne gesteuert wird.</p>
          </div>
        `
      },
      eauchaude: {
        title: 'Warmwasserverteilung',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-tint guide-icon water"></i>Warmwasserverteilung</h3>
          <div class="guide-popup-content">
            <p>Dies betrifft das Wasser der Waschbecken und vor allem der Duschen. Wie in vielen Ländern mit viel Sonnenschein ist das Haus mit einem Solar-Wassererhitzer (Solarkollektor und Speicher) ausgestattet, der sich auf dem Dach in der Nähe des Eingangs befindet.</p>
            <p>Die Größe des Speichers entspricht der Empfehlung des Architekten für ein Haus mit sechs Personen. Die Eigenschaften des Geräts und seine Lage in Bezug auf die Anordnung der Schlafzimmer führen zu zwei wichtigen Hinweisen:</p>
            <img src="images/guide/28.webp" alt="Solar-Wassererhitzer – Warmwasserverteilung"/>
            <ul>
              <li><strong>Solarbetrieb :</strong> Das Solarsystem funktioniert naturgemäß tagsüber und nicht nachts. Das bedeutet: Wenn der gesamte Speicher am Abend verbraucht wurde, ist das Duschwasser am nächsten Morgen lauwarm, erwärmt sich jedoch im Laufe des Tages automatisch wieder.</li>
              <li><strong>Lage :</strong> Der Solar-Wassererhitzer befindet sich näher am Eingang und den beiden ersten Schlafzimmern als am dritten, das weiter entfernt liegt. Daraus ergibt sich, dass die beiden ersten Duschen schneller warmes Wasser erhalten als die dritte – ohne dass es sich dabei um eine Fehlfunktion handelt.</li>
            </ul>
          </div>
        `
      },
      internet: {
        title: 'Internet',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-wifi guide-icon wifi"></i>Internet</h3>
          <div class="guide-popup-content">
            <p>Die Orange-Box befindet sich in der Abstellkammer, die Zugangsdaten für die Verbindung stehen im Willkommensheft, und der Fernseher ist mit der Box verbunden.</p>
            <div class="wifi-key-container">
              <p><strong>Livebox 66A0 Schlüssel :</strong> <span id="wifi-key">ES6EZy7ZtLTZoKDTtp</span><button onclick="copyWifiKey()" class="copy-button" title="WLAN-Schlüssel kopieren">Kopieren</button></p>
            </div>
            <p><strong>Die Ausstattung ist High-Speed VDSL über Kabel :</strong></p>
            <ul>
              <li>Datenversand: 6,41 Mbit/s</li>
              <li>Datenempfang: 28,8 Mbit/s</li>
            </ul>
            <p>Die Gemeinde beginnt, mit Glasfaser ausgestattet zu werden, aber bei gleicher Kapazität ist das <strong>Netz oberirdisch, fragil und wetteranfällig</strong> (insbesondere bei Wind). Das erklärt die Wahl von <strong>VDSL über Kabel für den Moment</strong>.</p>
          </div>
        `
      },
      wc: {
        title: 'Toiletten & Abwasser',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-toilet guide-icon toilet"></i>Toiletten & Abwasser</h3>
          <div class="guide-popup-content">
            <p>Alle neuen Häuser in den Höhenlagen von Basse-Terre müssen inzwischen bei der Errichtung mit einer <strong>individuellen Kleinkläranlage</strong> ausgestattet werden.</p>
            <img src="images/guide/26.webp" alt="Kleinkläranlage – Toiletten & Abwasser"/>
            <p><strong>Um ihre ordnungsgemäße Funktion zu gewährleisten :</strong></p>
            <ul>
              <li>Nur <strong>trockenes Toilettenpapier</strong> (in Rollen) in die Toilettenschüssel werfen</li>
              <li><strong>Keine Feuchttücher</strong> oder andere Produkte (z. B. Fess’net, Lotus usw.) hineingeben</li>
              <li>Trockenes Papier zerfällt beim Kontakt mit Feuchtigkeit und <strong>verstopft die Leitungen nicht</strong></li>
              <li>Feuchtes Toilettenpapier ähnelt in seiner Zusammensetzung Feuchttüchern, <strong>verstopft die Leitungen</strong> und beeinträchtigt daher die Abwasserbehandlung</li>
            </ul>
            <p><strong>Bitte entsorgen Sie Feuchttücher im Mülleimer und nicht in der Toilettenschüssel.</strong></p>
            <p>Die von uns verwendeten Produkte (Bodenreiniger, WC-Produkte) sind mit dem ordnungsgemäßen Betrieb einer Klärgrube kompatibel; vermeiden Sie die Verwendung von stark chlorhaltigen Flüssigkeiten.</p>
          </div>
        `
      },
      filet: {
        title: 'Sicherheitsnetz & Terrasse',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-shield-alt guide-icon shield"></i>Sicherheitsnetz & Terrasse</h3>
          <div class="guide-popup-content">
            <p>Das Haus ist mit einem <strong>Sicherheitsnetz</strong> ausgestattet, das zwischen dem Pool und der Terrasse gespannt ist. Trotz seiner Widerstandsfähigkeit ist es <strong>keine Hängematte</strong>, auf der man sich hinlegen kann (wie auf Katamaranen). Es dient als <strong>Sicherheitsvorrichtung bei einem versehentlichen Sturz</strong>. Bitte verwenden Sie es ausschließlich zu diesem Zweck, damit es seine Wirksamkeit behält.</p>
            <img src="images/guide/25.webp" alt="Sicherheitsnetz – Terrasse und Pool"/>
            <p><strong>WICHTIG :</strong></p>
            <ul>
              <li>Die Terrasse <strong>hat kein Geländer</strong> und der Pool <strong>keine Sicherheitsbarriere</strong></li>
              <li>Diese Entscheidung wurde bewusst getroffen, um einen <strong>freien Blick auf die Bucht und die kleinen Inseln</strong> zu bewahren</li>
              <li>Dieser Punkt stellt für Erwachsene in der Regel kein Problem dar, die die offene Gestaltung meist schätzen</li>
              <li>Aus diesem Grund <strong>raten wir auf der Buchungsseite Familien mit kleinen Kindern (unter 8 Jahren) von diesem Haus ab</strong>, da es im Bereich Terrasse–Pool gefährlich sein kann</li>
            </ul>
          </div>
        `
      },
      dechets: {
        title: 'Abfallentsorgung',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-trash guide-icon trash"></i>Abfallentsorgung</h3>
          <div class="guide-popup-content">
            <p>Ein großes Problem in Guadeloupe (um eine Mülltonne zu bekommen, mussten wir sie im Handel kaufen – wir warten seit zwei Jahren vergeblich auf die von der Gemeinde).</p>
            <ul>
              <li>Die Müllabfuhr findet in der <strong>Nacht von Sonntag auf Montag</strong> statt</li>
              <li>Für Glas- oder Plastikflaschen gibt es Sammelcontainer entlang der Straßen, der nächste befindet sich <strong>gegenüber vom Carrefour Market</strong></li>
            </ul>
            <img src="images/guide/29.webp" alt="Recyclingcontainer – Abfallentsorgung"/>
          </div>
        `
      },
      volets: {
        title: 'Elektrische Rollläden und Schlafzimmerfenster',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-window-maximize guide-icon window"></i>Elektrische Rollläden und Schlafzimmerfenster</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>DIE ELEKTRISCHEN ROLLLÄDEN</h4>
            <p><strong>ACHTUNG :</strong></p>
            <p>Bitte stellen Sie sicher, dass nichts die Schließung der elektrischen Rollläden behindert (insbesondere Terrassenstühle). Andernfalls können sie blockiert werden und das Haus lässt sich in Ihrer Abwesenheit nicht mehr richtig verschließen (das ist bereits vorgekommen).</p>
            <img src="images/guide/27.webp" alt="Elektrische Rollläden – Vorsichtsmaßnahmen"/>
            <h4><i class="fas fa-window-restore guide-icon window"></i>DIE SCHLAFZIMMERFENSTER</h4>
            <p>Die Fensterläden werden mit der am Rahmen seitlich befestigten <strong>Kurbel</strong> geöffnet und geschlossen.</p>
            <p>Leider sind die Kardangelenke dieser Kurbeln sehr fragil (dies ist ein Konstruktionsfehler, den wir dem Hersteller gemeldet haben).</p>
            <p><strong>Bitte üben Sie beim Öffnen und Schließen keinen übermäßigen Druck aus.</strong></p>
          </div>
        `
      },
      climatisation: {
        title: 'Klimaanlage',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-snowflake guide-icon snowflake"></i>Klimaanlage</h3>
          <div class="guide-popup-content">
            <p>Der Strom in Guadeloupe stammt leider größtenteils aus fossilen Quellen (also <strong>Importen</strong>). Die Stadt Bouillante profitiert zwar teilweise vom geothermischen Kraftwerk, das im Falle eines Stromausfalls im Netz hilfreich ist, jedoch keine niedrigeren Tarife ermöglicht.</p>
            <p>Bedauerlicherweise sind « <strong>saubere</strong> » Energien nur schwach vertreten.</p>
            <p><strong>Aus Gründen der Wirtschaftlichkeit und Ökologie :</strong></p>
            <ul>
              <li>Bitte schalten Sie die Klimaanlagen mit ihrer <strong>Fernbedienung</strong> aus, wenn die Zimmer nicht genutzt werden</li>
              <li>Achten Sie darauf, dass <strong>Türen und Fenster</strong> während des Betriebs geschlossen sind</li>
            </ul>
            <p>Wie bereits erwähnt, kommt <strong>jedes Jahr</strong> ein spezialisiertes Unternehmen, um die Anlage zu überprüfen und die Filter zu reinigen.</p>
          </div>
        `
      },
      adresse: {
        title: 'Adresse von Calypso Bay',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Adresse von Calypso Bay</h3>
          <div class="guide-popup-content">
            <p><strong>717 rue de POIRIER, BOUILLANTE</strong></p>
            <h4><i class="fas fa-route guide-icon route"></i>Vom Flughafen Pôle Caraïbes</h4>
            <p><strong>Zwei Möglichkeiten, um an die Westküste zu gelangen :</strong></p>
            <ul>
              <li><strong>Nordküstenstraße :</strong> Über Le Lamentin, Sainte-Rose (länger und stärker befahren, aber bei sehr schlechtem Wetter empfohlen – flacher und weniger kurvig)</li>
              <li><strong>Route de la Traversée :</strong> Direkter und weniger befahren (bei schönem Wetter empfohlen – kurviger und steiler)</li>
            </ul>
            <p><em>Die Route de la Traversée ist wunderschön – wie die Alpen mitten im Dschungel.</em></p>
            <p><strong>Für die Nordküstenstraße :</strong> Fügen Sie in Ihrer Route einen Zwischenstopp in Sainte-Rose hinzu. Für die Route de la Traversée reicht es, einfach die Adresse der Villa einzugeben.</p>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=717+Rue+de+Poirier+Bouillante+Guadeloupe" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation zu Calypso Bay öffnen
              </a>
            </div>
          </div>
        `
      },
      itineraires: {
        title: 'Routen',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-map-signs guide-icon map"></i>Routen</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-route guide-icon route"></i>Nordküstenstraße</h4>
            <p>Längere Strecke, aber bei schlechtem Wetter sicherer.</p>
            <p><strong>Entfernung: 68 km</strong></p>
            <img src="images/guide/20.webp" alt="Nordküstenstraße"/>
            <h4 style="margin-top: 30px"><i class="fas fa-route guide-icon route"></i>Route de la Traversée</h4>
            <p>Direkte und panoramareiche Strecke, empfohlen bei schönem Wetter.</p>
            <p><strong>Entfernung: 46 km</strong></p>
            <img src="images/guide/21.webp" alt="Route de la Traversée"/>
          </div>
        `
      },
      acces: {
        title: 'Zugang zur Villa',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-mountain guide-icon mountain"></i>Zugang zur Villa</h3>
          <div class="guide-popup-content">
            <img src="images/guide/22.webp" alt="Rue de Poirier – Zugang zu Calypso Bay"/>
            <p><strong>Die Rue de Poirier :</strong> Sie steigt ziemlich steil an. Während Ihrer Fahrt :</p>
            <ul>
              <li>Fahren Sie an den Residenzen <strong>"JARDIN TROPICAL"</strong> auf der linken Seite vorbei</li>
              <li>Der Eingang zum Haus befindet sich direkt nach dem <strong>"JARDIN ZEN"</strong> (drei kleine weiß-blaue Bungalows auf der linken Seite)</li>
            </ul>
            <p><strong>Sie sind angekommen, WILLKOMMEN!</strong></p>
            <h4><i class="fas fa-info-circle guide-icon info"></i>Praktische Tipps</h4>
            <ul>
              <li>Bevorzugen Sie die Route de la Traversée (schneller)</li>
              <li>Achten Sie auf die Serpentinen und die Steigung</li>
              <li>Vermeiden Sie die Fahrt bei starkem Regen (rutschige Straße)</li>
              <li>Achten Sie auf die Schilder "Parc de la Source" und "Poirier"</li>
            </ul>
          </div>
        `
      },
      loueurs: {
        title: 'Autovermietungen',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-car guide-icon car"></i>Autovermietungen</h3>
          <div class="guide-popup-content">
            <p><strong>Tipp :</strong> Buchen Sie im Voraus, besonders in der Hochsaison.</p>
            <h4><i class="fas fa-building guide-icon building"></i>Empfohlene Anbieter</h4>
            <ul>
              <li><strong><a href="https://www.hertzantilles.com/fr/location-de-voiture-guadeloupe" target="_blank" style="color: var(--color-primary); text-decoration: none;">Hertz</a> :</strong> Flughafen Pôle Caraïbes</li>
              <li><strong><a href="https://www.avis.fr/" target="_blank" style="color: var(--color-primary); text-decoration: none;">Avis</a> :</strong> Flughafen und Pointe-à-Pitre</li>
              <li><strong><a href="https://www.europcar-guadeloupe.com/agences/aeroport-pointe-a-pitre" target="_blank" style="color: var(--color-primary); text-decoration: none;">Europcar</a> :</strong> Flughafen und mehrere Agenturen auf der Insel</li>
            </ul>
            <p><strong>Klicken Sie auf die Namen der Anbieter oder auf die Tags oberhalb des Bildes, um direkt zu ihren Webseiten zu gelangen.</strong></p>
          </div>
        `
      },
      taxi: {
        title: 'Taxi',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-taxi guide-icon taxi"></i>Taxi</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-plane guide-icon plane"></i>Vom Flughafen Pôle Caraïbes</h4>
            <p><strong>Fahrzeit :</strong> ca. 45 Minuten mit dem Auto</p>
            <p><strong>Preis :</strong> etwa 80 € pro Strecke</p>
            <h4><i class="fas fa-info-circle guide-icon info"></i>Praktische Informationen</h4>
            <ul>
              <li>Im Voraus buchen, um Wartezeiten zu vermeiden</li>
              <li>Festpreis vom Flughafen nach Bouillante</li>
              <li>Möglichkeit, die Fahrt mit anderen Reisenden zu teilen</li>
              <li>Zahlung in bar oder per Karte</li>
            </ul>
          </div>
        `
      },
      navette: {
        title: 'Shuttle',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-shuttle-van guide-icon shuttle"></i>Shuttle</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-plane guide-icon plane"></i>Shuttle-Services</h4>
            <p>Private Services sind vom Flughafen Pôle Caraïbes aus verfügbar.</p>
            <h4><i class="fas fa-info-circle guide-icon info"></i>Verfügbare Optionen</h4>
            <ul>
              <li><strong>Private Shuttles :</strong> Direkter Transport zu Ihrem Ziel</li>
              <li><strong>Geteilte Shuttles :</strong> Günstiger, Fahrt mit anderen Reisenden</li>
              <li><strong>Buchung :</strong> Im Voraus empfohlen</li>
              <li><strong>Flexibilität :</strong> Fahrpläne angepasst an die Flüge</li>
            </ul>
            <h4><i class="fas fa-clock guide-icon clock"></i>Vorteile</h4>
            <ul>
              <li>Kein Autofahren nach einem langen Flug</li>
              <li>Oft günstiger als ein Taxi</li>
              <li>Haustür-zu-Haustür-Service</li>
              <li>Professioneller Fahrer mit Ortskenntnis</li>
            </ul>
          </div>
        `
      },
      carrefour: {
        title: 'Carrefour Market',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-shopping-cart guide-icon shopping"></i>Carrefour Market</h3>
          <div class="guide-popup-content">
            <p>Mittelgroßer Supermarkt an der N2 in Richtung Pointe-Noire, geeignet für den Großteil der Einkäufe während des Aufenthalts.</p>
            <img src="images/guide/02.webp" alt="Carrefour Market"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Carrefour+Market+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      leaderprice: {
        title: 'Leader Price',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-shopping-cart guide-icon shopping"></i>Leader Price</h3>
          <div class="guide-popup-content">
            <p>Gegenüber vom Carrefour Market, etwas schlichter, aber sehr interessant in Bezug auf die Preise und mit qualitativ guten Produkten.</p>
            <img src="images/guide/03.webp" alt="Leader Price"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Leader+Price+Pigeon+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      capcreole: {
        title: 'Cap Créole',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-fish guide-icon fish"></i>Cap Créole</h3>
          <div class="guide-popup-content">
            <p>Kurz vor dem Carrefour Market an der N2. Die örtlichen Fischer liefern hier ihren Fang ab, der direkt vor Ort verarbeitet wird :</p>
            <ul>
              <li>Frischer Fisch, gereinigt und vorbereitet</li>
              <li>Thunfisch-, Schwertfisch- oder Marlinsteaks zum Braten</li>
              <li>Thunfisch- oder Marlin-Rillettes</li>
              <li>Halbgegarter Thunfisch, Carpaccio</li>
            </ul>
            <p><em>Etwas teuer, aber von außergewöhnlicher Qualität!</em></p>
            <img src="images/guide/05.webp" alt="Cap Créole – Frischer Fisch"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1598,-61.7751?q=Cap+Créole+Pigeon+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      fourdesiles: {
        title: 'Four des Îles',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-bread-slice guide-icon bread"></i>Four des Îles</h3>
          <div class="guide-popup-content">
            <p>Direkt neben dem Carrefour Market – ausgezeichnetes Brot und Feinkost (hausgemachte Pizzen, Schweinebraten, gegrilltes Huhn, Gebäck).</p>
            <p><strong>Öffnungszeiten :</strong> Sonntagvormittag geöffnet, montags geschlossen.</p>
            <img src="images/guide/04.webp" alt="Four des Îles – Bäckerei"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1610,-61.7745?q=Four+des+Iles+Boulangerie+Pigeon" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      titaurus: {
        title: 'Ti Taurus',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-drumstick-bite guide-icon meat"></i>Ti Taurus</h3>
          <div class="guide-popup-content">
            <p>In der Nähe des Carrefour Market – zu Fuß über die kleine Straße zwischen dem Supermarkt und der Bäckerei. Verschiedene Fleischsorten, Spieße usw.</p>
            <img src="images/guide/06.webp" alt="Metzgerei & Feinkost Ti Taurus"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1613,-61.7753?q=Boucherie+traiteur+Ti+Taurus+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      chezadele: {
        title: 'Chez Adèle',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-apple-alt guide-icon fruit"></i>Chez Adèle</h3>
          <div class="guide-popup-content">
            <p>An der N2, links in Richtung Norden. Hervorragendes Obst und Gemüse.</p>
            <p><strong>Tipp :</strong> Geben Sie genau an, ob es für den sofortigen Verzehr oder für den nächsten Tag bestimmt ist (z. B. Avocados). Adèle kennt die Qualität ihrer Produkte in- und auswendig.</p>
            <p><em>Sagen Sie, dass Sie von Fanny kommen – vielleicht erinnert sie sich und wird Sie besonders verwöhnen!</em></p>
            <img src="images/guide/01.webp" alt="Chez Adèle – Obst und Gemüse"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Chez+Adèle+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      latouna: {
        title: 'La Touna',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-utensils guide-icon restaurant"></i>La Touna</h3>
          <div class="guide-popup-content">
            <p>Gute Küche, angenehme Umgebung.</p>
            <img src="images/guide/07.webp" alt="La Touna – Restaurant"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=La+Touna+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      chezdidier: {
        title: 'Chez Didier',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-utensils guide-icon restaurant"></i>Chez Didier</h3>
          <div class="guide-popup-content">
            <p>Ausgezeichnete Küche, sehr sympathischer Besitzer.</p>
            <img src="images/guide/08.webp" alt="Chez Didier – Restaurant"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Chez+Didier+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      sunsetb: {
        title: 'Sunset B',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-utensils guide-icon restaurant"></i>Sunset B</h3>
          <div class="guide-popup-content">
            <p>TOP! Gemütliches Ambiente, frische Produkte.</p>
            <img src="images/guide/09.webp" alt="Sunset B – Restaurant"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Le+Sunset+B+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      auxdeuxcoquilles: {
        title: 'Aux Deux Coquilles',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-utensils guide-icon restaurant"></i>Aux Deux Coquilles</h3>
          <div class="guide-popup-content">
            <p>Gut und günstig, eher „lokal“.</p>
            <img src="images/guide/10.webp" alt="Aux Deux Coquilles – Restaurant"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Les+Deux+Coquilles+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      frankogrill: {
        title: 'Franko Grill',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-fire guide-icon grill"></i>Franko Grill</h3>
          <div class="guide-popup-content">
            <p>Gut und günstig, eher „lokal“.</p>
            <img src="images/guide/11.webp" alt="Franko Grill – Restaurant"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Franko+Grill+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      oganik: {
        title: 'Oganik',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-pizza-slice guide-icon pizza"></i>Oganik</h3>
          <div class="guide-popup-content">
            <p>Gegenüber dem Restaurant La Touna.</p>
            <img src="images/guide/12.webp" alt="Oganik – Pizzeria"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Oganik+Pizzeria+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      allopizza: {
        title: 'Allo Pizza',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-pizza-slice guide-icon pizza"></i>Allo Pizza</h3>
          <div class="guide-popup-content">
            <p>Hinter dem Carrefour Market.</p>
            <img src="images/guide/13.webp" alt="Allo Pizza – Pizzeria"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Allo+Pizza+Pizzeria+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      lecoeurdepigeon: {
        title: 'Le Cœur de Pigeon',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-pizza-slice guide-icon pizza"></i>Le Cœur de Pigeon</h3>
          <div class="guide-popup-content">
            <p>Ausgezeichnete Pizzen mit dünnem Teig.</p>
            <img src="images/guide/14.webp" alt="Le Cœur de Pigeon – Pizzeria"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Le+Cœur+de+Pigeon+Pizzeria+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      kayak: {
        title: 'Kajak',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-kayak guide-icon kayak"></i>Kajak</h3>
          <div class="guide-popup-content">
            <p>Am Strand von Malendure, um das <strong>Cousteau-Reservat</strong> und die Îlets Pigeon zu erkunden.</p>
            <h4><i class="fas fa-building guide-icon building"></i>Empfohlene Anbieter</h4>
            <p><em>Klicken Sie auf die Namen der Anbieter, um die GPS-Navigation zu öffnen :</em></p>
            <ul>
              <li><strong><a href="geo:16.1581,-61.7761?q=CARAÏBE+KAYAK+bouillante" style="color: var(--color-primary); text-decoration: none;">CARAÏBE KAYAK</a> :</strong> Kajakverleih zur Erkundung des Cousteau-Reservats</li>
              <li><strong><a href="geo:16.1581,-61.7761?q=GWADA+PAGAIE+bouillante" style="color: var(--color-primary); text-decoration: none;">GWADA PAGAIE</a> :</strong> Verleih und geführte Ausflüge</li>
            </ul>
            <img src="images/guide/48.webp" alt="Kajak – Strand von Malendure"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Plage+Malendure+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      plongee: {
        title: 'Tauchen',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-diving-helmet guide-icon diving"></i>Tauchen</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-water guide-icon water"></i>Tauchclubs</h4>
            <p><strong>Les Heures Saines (Bouillante) :</strong> Bekannter Tauchclub zur Erkundung des Cousteau-Reservats.</p>
            <img src="images/guide/49.webp" alt="Tauchen – Cousteau-Reservat"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Les+Heures+Saines+Plongée+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      distilleries: {
        title: 'Destillerien',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-industry guide-icon industry"></i>Destillerien</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-wine-bottle guide-icon bottle"></i>Bekannte Destillerien</h4>
            <ul>
              <li><strong>Bologne (Basse-Terre) :</strong> Besichtigung und Souvenirshop</li>
              <li><strong>Longueteau :</strong> Traditioneller Agricole-Rum</li>
              <li><strong>Damoiseau :</strong> Qualitätsrum</li>
              <li><strong>Montebello :</strong> Premium-Rum</li>
              <li><strong>Séverin :</strong> Handwerklich hergestellter Rum</li>
              <li><strong>Rhum Karukera :</strong> Lokaler Rum</li>
              <li><strong>Rhum Raymonenq :</strong> Traditioneller Rum</li>
            </ul>
            <img src="images/guide/50.webp" alt="Destillerien in Guadeloupe"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Distillerie+Bologne+Basse-Terre" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      maisoncacao: {
        title: 'Maison du Cacao',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-seedling guide-icon seedling"></i>Maison du Cacao</h3>
          <div class="guide-popup-content">
            <p><strong>Pointe-Noire :</strong> Genussvolle Entdeckung der Kakaokultur.</p>
            <p>Entdecken Sie die Geschichte des Kakaos in Guadeloupe und probieren Sie lokale Produkte.</p>
            <img src="images/guide/51.webp" alt="Maison du Cacao – Pointe-Noire"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Maison+du+Cacao+Pointe-Noire" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      museerhum: {
        title: 'Rum-Museum',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-wine-bottle guide-icon bottle"></i>Rum-Museum</h3>
          <div class="guide-popup-content">
            <p><strong>Sainte-Rose :</strong> Lokale Kultur und Verkostungen.</p>
            <p>Entdecken Sie die Geschichte des Rums in Guadeloupe und probieren Sie die besten lokalen Rumsorten.</p>
            <img src="images/guide/52.webp" alt="Rum-Museum – Sainte-Rose"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Musée+du+Rhum+Sainte-Rose" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      habitation: {
        title: 'Habitation Côte-sous-le-Vent',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-landmark guide-icon landmark"></i>Habitation Côte-sous-le-Vent</h3>
          <div class="guide-popup-content">
            <p><strong>Pointe-Noire :</strong> Kulturerbe und Geschichte.</p>
            <p>Entdecken Sie die Geschichte dieses Anwesens und seine Bedeutung für das guadeloupische Kulturerbe.</p>
            <img src="images/guide/53.webp" alt="Habitation Côte-sous-le-Vent – Pointe-Noire"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Habitation+Côte-sous-le-Vent+Pointe-Noire" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      memorialacte: {
        title: 'Mémorial ACTe',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-monument guide-icon monument"></i>Mémorial ACTe</h3>
          <div class="guide-popup-content">
            <p><strong>Pointe-à-Pitre :</strong> Karibisches Zentrum für Ausdruck und Erinnerung an den Sklavenhandel.</p>
            <p>Ein wichtiger Erinnerungsort, um die Geschichte von Guadeloupe und der Karibik zu verstehen.</p>
            <img src="images/guide/54.webp" alt="Mémorial ACTe – Pointe-à-Pitre"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Mémorial+ACTe+Pointe-à-Pitre" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      microbrasserie: {
        title: 'Mikrobrauerei',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-beer guide-icon beer"></i>Mikrobrauerei</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-beer guide-icon beer"></i>Mikrobrauerei de la Lézarde (Petit-Bourg, Vernou)</h4>
            <p>500 m vom Eingang des Wasserfall-Pfads entfernt. Geöffnet ab 11:30 Uhr, sonntags und montags geschlossen.</p>
            <img src="images/guide/55.webp" alt="Mikrobrauerei de la Lézarde"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Microbrasserie+de+la+Lézarde+Petit-Bourg" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      aquarium: {
        title: 'Aquarium',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-fish guide-icon fish"></i>Aquarium</h3>
          <div class="guide-popup-content">
            <p><strong>Aquarium von Guadeloupe (Gosier) :</strong> Entdeckung der Meeresfauna.</p>
            <p>Erkunden Sie den Reichtum der karibischen Meeresfauna in diesem außergewöhnlichen Aquarium.</p>
            <img src="images/guide/56.webp" alt="Aquarium von Guadeloupe – Gosier"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Aquarium+de+Guadeloupe+Gosier" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      sitetournage: {
        title: 'Drehort',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-video guide-icon video"></i>Drehort</h3>
          <div class="guide-popup-content">
            <p><strong>Drehort der Serie "Death in Paradise" (Deshaies) :</strong></p>
            <p>Spaziergang durch das Dorf, das oft von den Filmteams belebt wird. Entdecken Sie die Drehorte dieser beliebten Serie.</p>
            <img src="images/guide/57.webp" alt="Drehort – Deshaies"/>
            <div style="margin-top: 20px; text-align: center">
              <a href="geo:16.1581,-61.7761?q=Deshaies+Site+Tournage+Meurtres+Paradis" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <i class="fas fa-location-arrow"></i>
                Navigation öffnen
              </a>
            </div>
          </div>
        `
      },
      plages: {
        title: 'Strände & Schnorcheln',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-umbrella-beach guide-icon beach"></i>Strände & Schnorcheln</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-water guide-icon water"></i>Strand von Malendure (Bouillante)</h4>
            <p>Schwarzer Sand, Beobachtung von Schildkröten (vor allem im Norden, Petit Malendure). Schnorcheln und Kajakverleih, um die Îlets Pigeon (Cousteau-Reservat) zu erreichen.</p>

            <h4><i class="fas fa-water guide-icon water"></i>Strand von Petite Anse (Bouillante)</h4>
            <p>Ursprünglicher Strand mit hellem Sand und Kieselsteinen. Reichhaltiges Schnorcheln (Riffische, Korallen, Kalmare, manchmal Schildkröten).</p>

            <h4><i class="fas fa-water guide-icon water"></i>Strand von Leroux (Ferry, Deshaies)</h4>
            <p>Kleiner Strand mit hellem Sand, sehr schöner Schnorchelplatz (Kofferfische, Kalmare …). Morgens auch von Leguanen besucht.</p>

            <h4><i class="fas fa-water guide-icon water"></i>Strände von Grande Anse und Anse de la Perle (Deshaies)</h4>
            <p>Weite Strände mit hellem Sand, wunderschön, aber Vorsicht vor den Wellen.</p>

            <h4><i class="fas fa-water guide-icon water"></i>Strand von Petite Anse (Deshaies)</h4>
            <p>Angenehmer Ort für ein ruhigeres Bad.</p>

            <img src="images/guide/58.webp" alt="Strände & Schnorcheln"/>
          </div>
        `
      },
      cascades: {
        title: 'Wasserfälle & Wanderungen',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-mountain guide-icon mountain"></i>Wasserfälle & Wanderungen</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-water guide-icon water"></i>Wasserfall Trou à Diable (Bouillante)</h4>
            <p>In der Nähe des Parc de la Source, erreichbar über einen angenehmen, schattigen Pfad. Vorsicht bei starkem Regen.</p>

            <h4><i class="fas fa-water guide-icon water"></i>Saut d'Acomat (Pointe-Noire)</h4>
            <p>Bekannter Wasserfall.</p>

            <h4><i class="fas fa-water guide-icon water"></i>Saut de la Lézarde (Petit-Bourg)</h4>
            <p>Wunderschöner Ort, sportlicher Zugang, aber in 1 Stunde Hin- und Rückweg machbar. Becken geeignet zum Baden.</p>

            <h4><i class="fas fa-water guide-icon water"></i>Carbet-Wasserfälle (Capesterre-Belle-Eau)</h4>
            <ul>
              <li><strong>1. Wasserfall :</strong> 115 m, sportliche Wanderung mit Flussüberquerungen.</li>
              <li><strong>2. Wasserfall :</strong> 110 m, der am leichtesten zugänglich, angelegter Weg (für Kinder geeignet).</li>
              <li><strong>3. Wasserfall :</strong> 20 m, angenehmes Becken zum Baden.</li>
            </ul>

            <h4><i class="fas fa-hiking guide-icon hiking"></i>Wanderung hinter der Villa (Bouillante)</h4>
            <p>Von der Rue de Poirier bis zum Parc de la Source. Schöner Kammweg mit Blick auf das Meer.</p>

            <img src="images/guide/59.webp" alt="Wasserfälle & Wanderungen"/>
          </div>
        `
      },
      mer: {
        title: 'Entdeckungen auf dem Meer',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-ship guide-icon ship"></i>Entdeckungen auf dem Meer</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-diving-helmet guide-icon diving"></i>Gerätetauchen</h4>
            <p>Tauchclub Les Heures Saines (Bouillante), bekannt für Sicherheit und Geselligkeit. Erkundung des Cousteau-Reservats und von Schiffswracks.</p>

            <h4><i class="fas fa-ship guide-icon ship"></i>Ausflug zu den Saintes</h4>
            <p>Abfahrt mit der Fähre von Trois-Rivières, ideal für einen Tagesausflug.</p>

            <img src="images/guide/60.webp" alt="Entdeckungen auf dem Meer"/>
          </div>
        `
      },
      balades: {
        title: 'Spaziergänge & Entdeckungen',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-map-marked-alt guide-icon map"></i>Spaziergänge & Entdeckungen</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-seedling guide-icon seedling"></i>Botanischer Garten von Deshaies</h4>
            <p>2-stündiger Spaziergang in einer üppigen Umgebung.</p>

            <h4><i class="fas fa-fort-awesome guide-icon fort"></i>Fort Delgrès (Basse-Terre)</h4>
            <p>Bedeutende historische Stätte, kostenloser Besuch.</p>

            <h4><i class="fas fa-shopping-basket guide-icon market"></i>Markt von Basse-Terre</h4>
            <p>Täglicher Markt (außer Sonntag und Montag), besonders lebhaft am Samstag. Ideal für Gewürze, Vanille und lokale Produkte.</p>

            <h4><i class="fas fa-shopping-basket guide-icon market"></i>Markt von Sainte-Anne und sein Kunsthandwerksdorf</h4>
            <p>Souvenirs und lokale Produkte.</p>

            <h4><i class="fas fa-mountain guide-icon mountain"></i>Pointe des Châteaux (Saint-François)</h4>
            <p>Beeindruckende Landschaften, die an die Bretagne erinnern.</p>

            <img src="images/guide/61.webp" alt="Spaziergänge & Entdeckungen"/>
          </div>
        `
      },
      pharmacie: {
        title: 'Gesundheitsdienste',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-pills guide-icon pills"></i>Gesundheitsdienste</h3>
          <div class="guide-popup-content">
            <h4><i class="fas fa-store guide-icon store"></i>Apotheke von Losteau</h4>
            <p><strong>Adresse :</strong> Zac de Losteau - Pigeon, Bouillante 97125, Guadeloupe</p>
            <p><strong>Telefon :</strong> +590 590 99 08 44</p>
            <p><strong>Website :</strong> <a href="https://pharmaciedelosteau.fr" target="_blank" style="color: var(--color-primary); text-decoration: none;">pharmaciedelosteau.fr</a></p>
            <p><strong>Öffnungszeiten :</strong> Schließt um 19:00 Uhr</p>
            <p><strong>Dienstleistungen :</strong> Abholung in der Apotheke, Online-Reservierung möglich</p>
            <p><strong>Tipp :</strong> Die Carte Vitale funktioniert wie in Frankreich. Denken Sie daran, Ihre üblichen Medikamente und eine Erste-Hilfe-Ausrüstung mitzunehmen.</p>

            <img src="images/guide/15.webp" alt="Apotheke von Losteau"/>

            <h4 style="margin-top: 30px"><i class="fas fa-phone guide-icon phone"></i>Notrufnummern</h4>
            <ul>
              <li><strong>Feuerwehr :</strong> 18</li>
              <li><strong>Polizei :</strong> 17</li>
              <li><strong>Rettungsdienst (SAMU) :</strong> 15</li>
              <li><strong>Météo France :</strong> 0892 68 08 08</li>
            </ul>

            <h4 style="margin-top: 30px"><i class="fas fa-hospital guide-icon hospital"></i>Krankenhaus</h4>
            <h5><i class="fas fa-hospital-alt guide-icon hospital"></i>Krankenhaus Maurice Selbonne</h5>
            <p><strong>Adresse :</strong> 97125 Rue des Manguiers, Bouillante 97125, Guadeloupe</p>
            <p><strong>Telefon :</strong> +590 590 80 49 00</p>
            <p><strong>Website :</strong> <a href="https://ch-mauriceselbonne.fr" target="_blank" style="color: var(--color-primary); text-decoration: none;">ch-mauriceselbonne.fr</a></p>
            <p><strong>Dienstleistungen :</strong> Fachkrankenhaus mit Notaufnahme</p>

            <img src="images/guide/16.webp" alt="Krankenhaus Maurice Selbonne"/>

            <div style="margin-top: 20px; text-align: center">
              <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <a href="geo:16.1581,-61.7761?q=La+pharmacie+de+Losteau+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                  <i class="fas fa-pills"></i>
                  Apotheke von Losteau
                </a>
                <a href="geo:16.1581,-61.7761?q=Hôpital+Maurice+Selbonne+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                  <i class="fas fa-hospital"></i>
                  Krankenhaus Maurice Selbonne
                </a>
              </div>
            </div>
          </div>
        `
      },
      moustiques: {
        title: 'Mückenschutz',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-bug guide-icon bug"></i>Mückenschutz</h3>
          <div class="guide-popup-content">
            <p><strong>Wichtige Vorsichtsmaßnahmen :</strong></p>
            <ul>
              <li>Mücken sind aktiv beim Frühstück und beim abendlichen Aperitif</li>
              <li>Verwenden Sie Sprays ("Insect Ecran" oder "Off") auf unbedeckten Hautstellen</li>
              <li>Zitronella-Kerzen und Anti-Mücken-Spiralen</li>
              <li>Die Schlafzimmer sind mit Moskitonetzen ausgestattet (nachts also kein Problem)</li>
              <li><strong>Ein wirksames Repellent wird für Ihre Reisevorbereitungen empfohlen</strong></li>
            </ul>

            <h4><i class="fas fa-plane guide-icon plane"></i>Vor der Abreise</h4>
            <p>Vergessen Sie nicht, ein Anti-Mücken-Spray zu kaufen (OFF oder INSECTECRAN, im Aufgabegepäck zu transportieren), damit Sie sich gleich nach der Ankunft auf den unbedeckten Hautstellen behandeln können.</p>

            <img src="images/guide/34.webp" alt="Anti-Mücken-Produkte – Schutz"/>

            <p>Bei der Ankunft am Flughafen ist die erste Reaktion oft, sich umzuziehen – und die Mücken, die morgens und abends häufig anzutreffen sind, warten nur darauf.</p>
            <p>Dengue ist in allen Antillen verbreitet, kann gefährlich sein und in jedem Fall Ihren Aufenthalt beeinträchtigen (wie eine sehr starke Grippe).</p>
            <p>Einmal ausgebrochen, gibt es keine Behandlung außer Doliprane.</p>
            <p>Schützen Sie sich morgens und abends mit Repellents und verwenden Sie Spiralen oder Zitronella-Kerzen.</p>
            <p>Zögern Sie nicht, die Website von INSECTECRAN zu besuchen, die nützliche Ratschläge gibt.</p>
          </div>
        `
      },
      faune: {
        title: 'Lokale Tierwelt',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-paw guide-icon paw"></i>Lokale Tierwelt</h3>
          <div class="guide-popup-content">
            <p><strong>Mücken :</strong> Schutz ist vor allem bei Sonnenaufgang und Sonnenuntergang wichtig (Insectecran, Off). Nachts bieten Moskitonetze einen sehr wirksamen Schutz.</p>
            <p><strong>Auf Guadeloupe gibt es keine Schlangen.</strong></p>
            <p><strong>Spinnen :</strong> Sind harmlos, auch wenn sie im Vergleich zu denen in Europa manchmal durch ihre Größe beeindruckend wirken.</p>

            <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>Kriechende Insekten</h4>
            <p>Das Haus wird vom Concierge-Team regelmäßig mit dem Mittel Digrain behandelt, um ihre Anwesenheit zu vermeiden – auch wenn sie trotz wiederholter Insektizidanwendungen leider unvermeidlich bleibt (das ist in allen Häusern der Antillen üblich).</p>
            <p>Sie sind alle ungefährlich, mit Ausnahme der <strong>Skolopender</strong> (manchmal bis zu zehn Zentimeter lang).</p>
            <p>In der Regenzeit neigen sie dazu, in Häuser zu flüchten, was für uns Menschen besonders unangenehm ist.</p>
            <p>In der Trockenzeit leben sie unter der Erde, aber nach starken Regenfällen in der feuchten Jahreszeit werden ihre Nester überschwemmt und sie suchen trockenere Orte auf.</p>
            <p>Sie sind scheu und fliehen, wenn man ihnen begegnet, aber wie viele Tiere verteidigen sie sich und beißen, wenn sie sich in die Enge getrieben fühlen. Ihr Biss ist sehr schmerzhaft.</p>
          </div>
        `
      },
      soleil: {
        title: 'Sonnenschutz',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-sun guide-icon sun"></i>Sonnenschutz</h3>
          <div class="guide-popup-content">
            <p><strong>Empfohlene Ausrüstung :</strong></p>
            <ul>
              <li><strong>Sonnencreme :</strong> Hoher Schutz (SPF 50+)</li>
              <li><strong>Sonnenbrille :</strong> UV-Schutz</li>
              <li><strong>Hut :</strong> Schutz für Kopf und Gesicht</li>
              <li><strong>Flüssigkeitszufuhr :</strong> Viel Wasser trinken</li>
            </ul>
          </div>
        `
      },
      bains: {
        title: 'Heiße Quellen',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-exclamation-triangle guide-icon warning"></i>Achtung bei den „heißen Quellen“</h3>
          <div class="guide-popup-content">
            <p>Eine letzte Empfehlung betrifft ausschließlich die „heißen Quellen“. Dabei handelt es sich um vulkanische Wasseraustritte, in denen man baden kann.</p>
            <p>Vor Ort nennt man sie „bains jaunes“, „bain des amours“ usw. Das Baden ist angenehm und ungefährlich, solange man den Kopf nicht unter Wasser taucht.</p>
            <p>Je nach Wassertemperatur können Amöben vorhanden sein – für die Haut harmlos, aber gefährlich für die Schleimhäute. In Flüssen oder im Meer besteht keinerlei Gefahr.</p>
          </div>
        `
      },
      reflexes: {
        title: 'Gute Verhaltensweisen',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-shield-alt guide-icon shield"></i>Die guten Verhaltensweisen</h3>
          <div class="guide-popup-content">
            <p><strong>Präventionstipps :</strong></p>
            <ul>
              <li>Tagsüber, besonders in der Regenzeit, Türen und Fenster der Schlafzimmer geschlossen halten und die Moskitonetze an den Betten zuziehen.</li>
              <li>Trotzdem vor dem Schlafengehen die Bettwäsche kontrollieren.</li>
              <li>Wenn die Schuhe draußen bleiben, diese vor dem Anziehen ausschütteln.</li>
              <li>Dasselbe gilt für die Kleidung.</li>
              <li>Besser mit Sandalen oder Flip-Flops gehen als barfuß.</li>
            </ul>
          </div>
        `
      },
      eau: {
        title: 'Wasser',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-tint guide-icon water"></i>WASSER</h3>
          <div class="guide-popup-content">
            <p>Aus Gründen der Wartung, Ökologie und Wirtschaftlichkeit verfügt das Haus über eine doppelte Wasserversorgung.</p>
            <p>Es ist an das Wasserversorgungsnetz von Guadeloupe mit einem Reservetank angeschlossen.</p>
            <p><strong>Das Hauptventil für den Anschluss an das Netz von Guadeloupe</strong> befindet sich am Eingangstor des Hauses neben dem Zähler. Es dient dazu, die Versorgung beispielsweise bei einem Rohrbruch zu unterbrechen.</p>
            <p>Das Wasser wird anschließend in den Kellerraum geleitet.</p>
            <p><strong>Im Keller gibt es ein Anschlussventil mit zwei Positionen (Netz, Reservetank) :</strong></p>
            <img src="images/guide/32.webp" alt="Anschlussventil – Keller"/>
            <ul>
              <li><strong>Horizontale Position</strong> = direkter Anschluss an das Versorgungsnetz</li>
              <li><strong>Vertikale Position</strong> = Anschluss an den Reservetank</li>
            </ul>
            <p>Dieser Reservetank im Keller des Hauses enthält eine elektrische Pumpe, die sich bei einer Unterbrechung der Netzversorgung automatisch einschaltet und weiterhin Duschen und Wasserhähne versorgt. Seine Sicherheitsfunktion tritt nur in Kraft, wenn der Wasserstand sinkt und der Tank mit Duschen und Wasserhähnen verbunden ist.</p>
            <p><strong>IM FALLE EINER WASSERUNTERBRECHUNG :</strong></p>
            <p>Es wird das Wasser aus dem Reservetank verwendet.</p>
            <p>Es gibt eine zweite Wasserversorgung, ausschließlich für die Toiletten, die über einen doppelten Wasseranschluss verfügen: der linke Hahn liefert Regenwasser, der rechte Netz­wasser.</p>
            <img src="images/guide/31.webp" alt="Doppelanschluss WC – Regenwasser und Netz"/>
            <p>Normalerweise ist der linke Hahn geöffnet und der rechte geschlossen, und die elektrische Pumpe im Regenwassertank versorgt die Toiletten automatisch.</p>
            <p>Im Falle einer Störung im Versorgungsnetz funktioniert die Toilettenspülung unabhängig weiter, während Wasserhähne und Duschen nicht mehr versorgt werden, wenn der rote Hebel unten steht.</p>
          </div>
        `
      },
      electricite: {
        title: 'Strom',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-bolt guide-icon bolt"></i>STROM</h3>
          <div class="guide-popup-content">
            <p>In Bouillante wird der Strom auf zwei Arten geliefert: durch das Wärmekraftwerk von JARRY und das Geothermiekraftwerk von BOUILLANTE.</p>
            <p>Diese doppelte Quelle macht uns in Bouillante privilegiert und selten von langen Stromausfällen betroffen … außer im Falle von „sozialen Bewegungen“.</p>
            <p><strong>IM FALLE EINES STROMAUSFALLS :</strong></p>

            <h4><i class="fas fa-door-open guide-icon door"></i>Das Eingangstor</h4>
            <p>Das Eingangstor ist mit einem Elektromotor und einer kleinen Notfallbatterie ausgestattet, damit man nicht draußen vor einem verschlossenen Tor steht.</p>
            <p>Leider hat diese Batterie nur eine geringe Kapazität, und wir empfehlen im Falle einer Panne, auf manuellen Betrieb umzuschalten.</p>
            <p>Dafür befindet sich ein kleiner Dreikantschlüssel in der Küchenschublade mit dem Besteck (rechts von der Schublade). Er ermöglicht es, den Elektromotor zu entriegeln und das Tor manuell zu bedienen, bis der Strom zurückkehrt.</p>
            <img src="images/guide/33.webp" alt="Dreikantschlüssel – Eingangstor"/>

            <h4><i class="fas fa-window-maximize guide-icon window"></i>Die Rollläden</h4>
            <p>Es gibt drei davon, aus Metall und elektrisch betrieben, zwei kleinere an den Seiten und eine größere (und schwerere) mittig.</p>
            <p>Bei Stromausfall befindet sich rechts neben den Rollläden eine Kurbel, auf die ein metallisches Zwischenstück passt (liegt in der kleinen Nische direkt über dem linken Rollladen).</p>
            <p>Dieses System ermöglicht das manuelle Öffnen und Schließen.</p>

            <h4><i class="fas fa-lightbulb guide-icon light"></i>Die Beleuchtung</h4>
            <p>Im Haus haben wir drei „FATBOY“-Lampen mit eingebautem Akku.</p>
            <p>Die USB-Ladekabel befinden sich im Möbel unter dem Fernseher. Während unserer Aufenthalte im Haus laden wir sie zu Beginn auf – ihr Licht ist abends auf der Terrasse angenehm sanft, sie können aber auch im Notfall aushelfen …</p>
            <p>Im Abstellraum (oder im Keller, je nach Platz) befinden sich Spirituslampen für den Bedarfsfall.</p>

            <h4><i class="fas fa-tint guide-icon water"></i>Die Wasserversorgung</h4>
            <p>Die Pumpe im Regenwassertank ist ebenso wie die im Reservetank nicht mehr in Betrieb.</p>
            <p>Der Druck des Netzes versorgt daher die Wasserhähne, Duschen und eventuell die Toiletten.</p>
            <p>Während der Stromunterbrechung muss daher der WC-Tank an das Versorgungsnetz angeschlossen werden.</p>
            <p>Dazu muss lediglich überprüft werden, dass der rote Hebel im Keller unten steht und für die Toiletten der linke Hahn geschlossen und der rechte geöffnet ist.</p>
            <p>Nach der Rückkehr des Stroms ist die umgekehrte Vorgehensweise erforderlich.</p>
          </div>
        `
      },
      'saison-cyclonique': {
        title: 'Hurrikansaison',
        content: `
    <h3 class="guide-popup-title"><i class="fas fa-info-circle guide-icon info"></i>Hurrikansaison</h3>
    <div class="guide-popup-content">
      <p>Guadeloupe liegt in einer tropischen Zone, die <strong>von Juli bis November</strong> dem Hurrikanrisiko ausgesetzt ist. Der Katastrophenschutz, der an die Wetterphänomene der Antillen gewöhnt ist, sorgt für eine gute Betreuung bei Unwettern (Warnmeldungen, Überwachung, Informationsweitergabe, Schadensmanagement).</p>
      <p>Es gibt <strong>fünf Alarmstufen</strong>, an die man sich je nach den Mitteilungen der zuständigen Behörden anpassen muss.</p>

      <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>Alarmstufen</h4>

      <h5 style="color: #607d8b; margin-top: 20px"><i class="fas fa-circle" style="color: #607d8b"></i>Grauer Alarm: Bleiben Sie vorsichtig</h5>
      <ul>
        <li>Vermeiden Sie Fahrten, bis alles wieder unter Kontrolle ist</li>
        <li>Fassen Sie keine Strom- oder Telefonleitungen an, die am Boden liegen</li>
        <li>Trinken Sie Flaschenwasser oder mit Micropur behandeltes Wasser</li>
        <li>Vergewissern Sie sich, dass der Verkehr freigegeben ist, bevor Sie Ihr Fahrzeug benutzen</li>
        <li>Überqueren Sie keine überfluteten Furten oder reißenden Bäche</li>
      </ul>

      <h5 style="color: #ffc107; margin-top: 20px"><i class="fas fa-circle" style="color: #ffc107"></i>Gelber Alarm: Seien Sie aufmerksam</h5>
      <ul>
        <li>Bleiben Sie wachsam und informieren Sie sich über Météo France, die Medien und die Präfektur</li>
        <li>Überprüfen Sie Ihre Vorräte für ein paar Tage (Lebensmittel, Wasser)</li>
        <li>Vermeiden Sie lange Wanderungen, besonders in Flussnähe, sowie Ausfahrten auf See</li>
      </ul>

      <h5 style="color: #ff9800; margin-top: 20px"><i class="fas fa-circle" style="color: #ff9800"></i>Oranger Alarm: Schließen Sie Ihre Vorbereitungen ab</h5>
      <ul>
        <li>Räumen Sie die Gartenmöbel hinein (falls nötig, Liegestühle in den Keller)</li>
        <li>Laden Sie die batteriebetriebenen Lampen (Fatboy-Lampen) auf</li>
        <li>Legen Sie einen Vorrat an Wasser und Lebensmitteln für ein paar Tage an</li>
        <li>Beschränken Sie Ihre Fahrten</li>
        <li>Schließen Sie die Metallschutzläden und Fensterläden</li>
      </ul>

      <h5 style="color: #9c27b0; margin-top: 20px"><i class="fas fa-circle" style="color: #9c27b0"></i>Violetter Alarm: Bleiben Sie im Haus</h5>
      <ul>
        <li>Versuchen Sie, ruhig zu bleiben – die Situation wird sich schnell ändern</li>
        <li>Bleiben Sie im Schutzraum</li>
        <li>Verlassen Sie ihn erst, wenn draußen wieder Ruhe eingekehrt ist</li>
        <li>Hören Sie Radio, um die Mitteilungen der Behörden zu verfolgen</li>
      </ul>

      <h5 style="color: #f44336; margin-top: 20px"><i class="fas fa-circle" style="color: #f44336"></i>Roter Alarm: Gehen Sie in die Schutzräume</h5>
      <ul>
        <li>Stellen Sie sicher, dass alle Fensterläden geschlossen sind</li>
        <li>Überprüfen Sie die Wasser- und Lebensmittelvorräte</li>
        <li>Bereiten Sie den sichersten Raum des Hauses vor (Keller)</li>
        <li>Verfolgen Sie die Informationsquellen, um sich der Entwicklung anzupassen</li>
        <li><strong>Fahrten mit dem Auto sind strikt verboten</strong></li>
        <li>Falls Sie in den Keller gehen müssen, schalten Sie vorher den Strom ab</li>
        <li>Unterbrechen Sie vorübergehend die Wasserversorgung (Hebel senkrecht zu den Rohren)</li>
      </ul>
    </div>
  `
      },
      'maison-cyclone': {
        title: 'Das Haus im Falle eines Hurrikans',
        content: `
    <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Das Haus im Falle eines Hurrikans</h3>
    <div class="guide-popup-content">
      <p><strong>DAS WICHTIGSTE :</strong></p>
      <p>Die Villa wurde von unserem Architekten nach den <strong>Hurrikan- und Erdbebennormen</strong> gebaut :</p>
      <ul>
        <li><strong>Fundamente :</strong> Stahlbeton (selbst wenn das Haus einstürzt, ist der Keller ein Bunker)</li>
        <li><strong>Rollläden :</strong> Metallisch, elektrisch oder manuell zu schließen (Kurbel in der rechten Ecke des Hauptraums)</li>
        <li><strong>Fenster :</strong> Glas mit verstärkten Einbruchschutzgittern</li>
        <li><strong>Dach :</strong> Mit Anti-Abhebe-"Hauben" ausgestattet (außer bei Wind mit 300 km/h)</li>
        <li><strong>Sicherheitsräume :</strong> Zwei verfügbare „Panic Rooms“</li>
      </ul>

      <h4><i class="fas fa-shield-alt guide-icon shield"></i>Sicherheitsräume</h4>

      <h5><i class="fas fa-door-closed guide-icon door"></i>Der Abstellraum</h5>
      <ul>
        <li>Drei Betonwände, Betondecke</li>
        <li>Sehr wenig Platz</li>
        <li>„Hurrikan-Box“ mit Notfallausrüstung</li>
      </ul>

      <h5><i class="fas fa-warehouse guide-icon warehouse"></i>Der Keller (empfohlen)</h5>
      <ul>
        <li>Größerer und komfortablerer Raum</li>
        <li>Alle Wände aus Stahlbeton</li>
        <li>Weniger exponiertes Fenster</li>
        <li>Enthält den Vorrat von 1200 Litern Trinkwasser</li>
        <li>Bietet Platz für Liegestühle, Klappstühle, kleinen Tisch</li>
      </ul>
    </div>
  `
      },
      'gestion-eau-cyclone': {
        title: 'Wasserversorgung',
        content: `
    <h3 class="guide-popup-title"><i class="fas fa-tint guide-icon water"></i>Wasserversorgung</h3>
    <div class="guide-popup-content">
      <p><strong>WICHTIG :</strong> Der Tank muss im Falle eines Hurrikans vom Netz getrennt werden :</p>
      <ul>
        <li>Den roten Hebel und den bronzefarbenen Hahn neben dem Filter drehen</li>
        <li>In senkrechte Position zum Wasserzulauf stellen</li>
        <li>Vermeidet eine Verschmutzung durch Schlamm bei Rohrbruch</li>
      </ul>

      <h4><i class="fas fa-glass-water guide-icon water"></i>Trinkwasser</h4>
      <ul>
        <li><strong>Bevorzugt :</strong> Flaschenwasser</li>
        <li><strong>Wassertank :</strong> Unter normalen Bedingungen direkt trinkbar</li>
        <li><strong>Aufbereitung :</strong> Micropur-Tabletten (1 Tablette für 1 Liter, 120 Minuten ruhen lassen)</li>
        <li><strong>Trinkflaschen :</strong> Metallflaschen à 1 Liter vorhanden</li>
      </ul>

      <h4><i class="fas fa-lightbulb guide-icon light"></i>Notbeleuchtung</h4>
      <ul>
        <li>Fatboy-Lampen vorher aufladen</li>
        <li>USB-Kabel im Möbel unter dem Fernseher</li>
        <li><strong>WICHTIG :</strong> Strom abschalten, bevor man in den Keller geht (Brandgefahr)</li>
      </ul>

      <h4><i class="fas fa-box guide-icon box"></i>„Hurrikan-Box“</h4>
      <p>Im Abstellraum enthalten :</p>
      <ul>
        <li>Gas-Kocher mit Kartusche</li>
        <li>Radio und Batterien, um die Informationen zu verfolgen</li>
        <li>Micropur-Tabletten zur Wasseraufbereitung</li>
        <li>Metallflaschen à 1 Liter</li>
      </ul>
    </div>
  `
      },
      'contacts-urgence': {
        title: 'Notfallkontakte',
        content: `
    <h3 class="guide-popup-title"><i class="fas fa-phone guide-icon phone"></i>Notfallkontakte</h3>
    <div class="guide-popup-content">
      <ul>
        <li><strong>Polizeinotruf :</strong> 17</li>
        <li><strong>Feuerwehr :</strong> 18</li>
        <li><strong>Europäischer Notruf :</strong> 112</li>
        <li><strong>Laurence (praktische Auskünfte) :</strong> 06 90 40 40 55</li>
      </ul>

      <h4><i class="fas fa-radio guide-icon radio"></i>Informationsquellen</h4>
      <ul>
        <li>Météo France Antilles</li>
        <li>Lokale Medien</li>
        <li>Präfektur von Guadeloupe</li>
        <li>Zivilschutz</li>
      </ul>

      <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>Wichtige Hinweise</h4>
      <ul>
        <li>Die Anweisungen der Behörden strikt befolgen</li>
        <li>Keine unnötigen Risiken eingehen</li>
        <li>Ständig informiert bleiben</li>
        <li>Ausrüstung im Voraus vorbereiten</li>
        <li>Die Sicherheitsräume der Villa kennen</li>
      </ul>
    </div>
  `
      },
      'taxe-sejour': {
        title: 'Kurtaxe',
        content: `
    <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Kurtaxe</h3>
    <div class="guide-popup-content">
      <p>In der Gemeinde Bouillante wird eine Kurtaxe erhoben :</p>
      <ul>
        <li><strong>Betrag :</strong> 2,30 € pro Erwachsenem und pro Nacht (4-Sterne-Ferienresidenz)</li>
        <li><strong>Befreiung :</strong> Kinder unter 18 Jahren</li>
        <li><strong>Zahlung :</strong> Bereits im Preis des Aufenthalts enthalten</li>
        <li><strong>Dauer :</strong> Aufenthalte von mehr als 3 Nächten</li>
      </ul>
      <p>Diese Steuer trägt zur touristischen Entwicklung der Gemeinde sowie zur Pflege der Strände, Wanderwege und öffentlichen Bereiche bei.</p>
    </div>
  `
      },
      preparatifs: {
        title: 'Vorbereitungen vor der Abreise',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-suitcase guide-icon suitcase"></i>Vorbereitungen vor der Abreise</h3>
          <div class="guide-popup-content">
            <ul>
              <li><strong>Kleidung :</strong> Leicht und bequem (Badeanzug, Hut, Strandkleidung)</li>
              <li><strong>Schuhe :</strong> Sandalen für den Strand + geschlossene Schuhe für Wanderungen</li>
              <li><strong>Nützliche Accessoires :</strong> Sonnenbrille, Sonnencreme mit hohem Schutzfaktor, Mütze, Mückenschutzmittel (z. B. OFF oder Insect Ecran)</li>
            </ul>
            <p><strong>💡 Tipp :</strong> Ein kleiner wasserdichter Beutel ist in Guadeloupe sehr praktisch (Strände, Wanderungen, Flussüberquerungen).</p>
          </div>
        `
      },
      'equipements-fournis': {
        title: 'Bereitgestellte Ausstattung',
        content: `
    <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Bereitgestellte Ausstattung</h3>
    <div class="guide-popup-content">
      <ul>
        <li><strong>Schnorchelmasken</strong> (Größen M und S) im Keller verfügbar</li>
        <li><strong>Handtücher :</strong> Für Bad und Pool vorhanden (⚠️ keine Strandtücher)</li>
        <li><strong>Klappbare Handtuchtrockner</strong> zum Trocknen im Freien</li>
        <li><strong>Elektrische Ausstattung :</strong> USB-Steckdosen und Adapter für amerikanische Steckdosen</li>
      </ul>
    </div>
  `
      },
      'equipements-emporter': {
        title: 'Mitzubringende Ausstattung',
        content: `
    <h3 class="guide-popup-title"><i class="fas fa-suitcase guide-icon suitcase"></i>Mitzubringende Ausstattung</h3>
    <div class="guide-popup-content">
      <ul>
        <li><strong>Wasserdichter Beutel</strong> zum Schutz Ihrer Sachen</li>
        <li><strong>Wasserschuhe für Wanderungen :</strong> Ideal zum Gehen im Wasser, zum Überqueren von Furten, um Ausrutschen zu vermeiden und zum Wandern, ohne Angst haben zu müssen, die Schuhe nass zu machen</li>
        <li><strong>Paréos :</strong> Eine leichte Alternative zu Strandtüchern, trocknen schnell und brauchen wenig Platz</li>
        <li><strong>Gesichtsmaske :</strong> Ausreichend, um das Unterwassererlebnis zu genießen</li>
      </ul>
    </div>
  `
      },
      'conseils-pratiques': {
        title: 'Praktische Tipps vor Ort',
        content: `
    <h3 class="guide-popup-title"><i class="fas fa-lightbulb guide-icon light"></i>Praktische Tipps vor Ort</h3>
    <div class="guide-popup-content">
      <h4><i class="fas fa-umbrella-beach guide-icon beach"></i>Am Strand</h4>
      <ul>
        <li>Das tropische Klima bringt manchmal plötzliche Schauer: Eine wasserdichte Tasche für Handtücher oder Pareos verhindert Unannehmlichkeiten</li>
        <li>Pareos sind ein praktischer Ersatz für dicke Handtücher</li>
        <li>Lassen Sie Strandtücher draußen trocknen: So vermeiden Sie Sandflöhe (yens yens), die Juckreiz verursachen</li>
      </ul>

      <h4><i class="fas fa-hiking guide-icon hiking"></i>Beim Wandern</h4>
      <ul>
        <li>Die besten Schuhe sind Wasserschuhe für Wanderungen: Sie trocknen schnell, rutschen nicht und eignen sich für Flussüberquerungen</li>
        <li>Im Wald gibt es nur wenige Mücken, aber nehmen Sie ein Repellent mit, wenn Sie die Mangroven besuchen</li>
      </ul>

      <h4><i class="fas fa-water guide-icon water"></i>Auf dem Meer</h4>
      <ul>
        <li>Für einen Schnorchelausflug genügt eine einfache Gesichtsmaske (Flossen sind optional)</li>
      </ul>
    </div>
  `
      }
    }

    this.init()
  }

  init() {
    if (!this.overlay || !this.content) return

    // Événements pour fermer le popup
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.hide()
      }
    })

    // Événement pour la touche Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hide()
      }
    })
  }

  show(type) {
    if (!this.popupData[type]) {
      console.warn(`Popup data not found for type: ${type}`)
      return
    }

    const data = this.popupData[type]
    this.content.innerHTML = data.content
    this.overlay.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
  }

  hide() {
    this.overlay.classList.add('hidden')
    document.body.style.overflow = ''
    this.content.innerHTML = ''
  }
}

// ============================================================================
// FONCTIONS GLOBALES (pour compatibilité avec onclick)
// ============================================================================

function showPopup(type) {
  if (window.popupManager) {
    window.popupManager.show(type)
  }
}

function hidePopup() {
  if (window.popupManager) {
    window.popupManager.hide()
  }
}

function stopEventPropagation(event) {
  event.stopPropagation()
}

// ============================================================================
// FONCTION D'INITIALISATION EXPORTÉE
// ============================================================================

// Fonction d'initialisation qui sera appelée par le loader
window.initializeGuide = function () {
  // Initialiser l'interface avec les traductions
  initializeInterface()

  // Initialiser les carousels
  new CarouselManager('carousel-container', 'carousel-left', 'carousel-right')
  new CarouselManager(
    'carousel-localisation-container',
    'carousel-localisation-left',
    'carousel-localisation-right'
  )
  new CarouselManager(
    'carousel-transport-container',
    'carousel-transport-left',
    'carousel-transport-right'
  )
  new CarouselManager(
    'carousel-commerces-container',
    'carousel-commerces-left',
    'carousel-commerces-right'
  )
  new CarouselManager(
    'carousel-restaurants-container',
    'carousel-restaurants-left',
    'carousel-restaurants-right'
  )
  new CarouselManager(
    'carousel-activites-container',
    'carousel-activites-left',
    'carousel-activites-right'
  )
  new CarouselManager(
    'carousel-excursions-container',
    'carousel-excursions-left',
    'carousel-excursions-right'
  )
  new CarouselManager(
    'carousel-sante-container',
    'carousel-sante-left',
    'carousel-sante-right'
  )
  new CarouselManager(
    'carousel-eau-electricite-container',
    'carousel-eau-electricite-left',
    'carousel-eau-electricite-right'
  )
  new CarouselManager(
    'carousel-cyclones-container',
    'carousel-cyclones-left',
    'carousel-cyclones-right'
  )
  new CarouselManager(
    'carousel-infos-pratiques-container',
    'carousel-infos-pratiques-left',
    'carousel-infos-pratiques-right'
  )

  // Initialiser le gestionnaire de popups
  window.popupManager = new PopupManager()

  // Initialisation du menu - s'assurer qu'il est caché au départ
  setMenuProgress(0)

  // Gestion des clics sur l'overlay pour fermer les popups
  const popupOverlay = document.getElementById('popup-overlay')
  if (popupOverlay) {
    popupOverlay.addEventListener('click', (e) => {
      if (e.target === popupOverlay) {
        hidePopup()
      }
    })
  }

  // Gestion des clics sur le bouton de fermeture
  const popupClose = document.querySelector('.guide-popup-close')
  if (popupClose) {
    popupClose.addEventListener('click', hidePopup)
  }

  // Gestion de la fermeture du menu
  document.addEventListener('click', (e) => {
    const menuButton = document.querySelector('.guide-menu-button')
    const dropdown = document.querySelector('.guide-menu-dropdown')
    const overlay = document.querySelector('.guide-menu-overlay')

    if (MENU_PROGRESS > 0) {
      if (
        !menuButton.contains(e.target) &&
        !dropdown.contains(e.target) &&
        !overlay.contains(e.target)
      ) {
        closeMenu()
      }
    }
  })

  // Fermer le menu avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu()
    }
  })

  // Fermer le menu quand on clique sur un lien
  const menuLinks = document.querySelectorAll('.guide-menu-dropdown a')
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault() // Empêcher le comportement par défaut
      closeMenu()

      // Récupérer l'ID de la section cible
      const targetId = link.getAttribute('href').substring(1)
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        // Scroll progressif vers la section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })

  console.log('🌍 Guide Calypso Bay initialisé en anglais')
}

// ============================================================================
// GESTION DE LA NAVIGATION GPS
// ============================================================================

// Coordonnées et adresses pour chaque commerce, restaurant et activité
const locations = {
  'Calypso Bay': {
    coordinates: '16.1581,-61.7761',
    address: '717+rue+de+Poirier+Bouillante+Guadeloupe'
  },
  'Carrefour Market': {
    coordinates: '16.1581,-61.7761',
    address: 'Carrefour+Market+Bouillante+Guadeloupe'
  },
  'Leader Price': {
    coordinates: '16.1581,-61.7761',
    address: 'Leader+Price+Bouillante+Guadeloupe'
  },
  'Cap Créole': {
    coordinates: '16.1581,-61.7761',
    address: 'Cap+Créole+Bouillante+Guadeloupe'
  },
  'Four des Iles': {
    coordinates: '16.1581,-61.7761',
    address: 'Four+des+Iles+Bouillante+Guadeloupe'
  },
  'Ti Taurus': {
    coordinates: '16.1581,-61.7761',
    address: 'Ti+Taurus+Bouillante+Guadeloupe'
  },
  'Chez Adèle': {
    coordinates: '16.1581,-61.7761',
    address: 'Chez+Adèle+Bouillante+Guadeloupe'
  },
  'La Touna': {
    coordinates: '16.1581,-61.7761',
    address: 'La+Touna+Bouillante+Guadeloupe'
  },
  'Chez Didier': {
    coordinates: '16.1581,-61.7761',
    address: 'Chez+Didier+Bouillante+Guadeloupe'
  },
  'Sunset B': {
    coordinates: '16.1581,-61.7761',
    address: 'Sunset+B+Bouillante+Guadeloupe'
  },
  'Aux Deux Coquilles': {
    coordinates: '16.1581,-61.7761',
    address: 'Aux+Deux+Coquilles+Bouillante+Guadeloupe'
  },
  'Franko Grill': {
    coordinates: '16.1581,-61.7761',
    address: 'Franko+Grill+Bouillante+Guadeloupe'
  },
  Oganik: {
    coordinates: '16.1581,-61.7761',
    address: 'Oganik+Bouillante+Guadeloupe'
  },
  'Allo Pizza': {
    coordinates: '16.1581,-61.7761',
    address: 'Allo+Pizza+Bouillante+Guadeloupe'
  },
  'Le Cœur de Pigeon': {
    coordinates: '16.1581,-61.7761',
    address: 'Le+Cœur+de+Pigeon+Bouillante+Guadeloupe'
  },
  Kayak: {
    coordinates: '16.1581,-61.7761',
    address: 'Plage+Malendure+Bouillante+Guadeloupe'
  },
  'CARAÏBE KAYAK': {
    coordinates: '16.1581,-61.7761',
    address: 'CARAÏBE+KAYAK+bouillante'
  },
  'GWADA PAGAIE': {
    coordinates: '16.1581,-61.7761',
    address: 'GWADA+PAGAIE+bouillante'
  },
  Plongée: {
    coordinates: '16.1581,-61.7761',
    address: 'Les+Heures+Saines+Plongée+Bouillante+Guadeloupe'
  },
  Distilleries: {
    coordinates: '16.1581,-61.7761',
    address: 'Distillerie+Bologne+Basse-Terre+Guadeloupe'
  },
  'Maison du Cacao': {
    coordinates: '16.1581,-61.7761',
    address: 'Maison+du+Cacao+Pointe-Noire+Guadeloupe'
  },
  'Musée du Rhum': {
    coordinates: '16.1581,-61.7761',
    address: 'Musée+du+Rhum+Sainte-Rose+Guadeloupe'
  },
  'Habitation Côte sous le Vent': {
    coordinates: '16.1581,-61.7761',
    address: 'Habitation+Côte+sous+le+Vent+Pointe-Noire+Guadeloupe'
  },
  'Mémorial ACTe': {
    coordinates: '16.1581,-61.7761',
    address: 'Mémorial+ACTe+Pointe-à-Pitre+Guadeloupe'
  },
  Microbrasserie: {
    coordinates: '16.1581,-61.7761',
    address: 'Microbrasserie+de+la+Lézarde+Petit-Bourg+Guadeloupe'
  },
  Aquarium: {
    coordinates: '16.1581,-61.7761',
    address: 'Aquarium+de+Guadeloupe+Gosier+Guadeloupe'
  },
  'Site de tournage': {
    coordinates: '16.1581,-61.7761',
    address: 'Deshaies+Guadeloupe'
  },
  Pharmacie: {
    coordinates: '16.1581,-61.7761',
    address: 'La+pharmacie+de+Losteau+Bouillante+Guadeloupe'
  },
  'Hôpital Maurice Selbonne': {
    coordinates: '16.1581,-61.7761',
    address: 'Hôpital+Maurice+Selbonne+Bouillante'
  }
}

/**
 * Ouvre la navigation GPS vers différents commerces
 * @param {Event} event - L'événement de clic
 */
function openNavigation(event) {
  event.stopPropagation() // Empêche l'ouverture du popup

  // Récupérer le nom du commerce depuis le titre de la carte
  const card = event.target.closest('.guide-card')
  const title = card.querySelector('.guide-card-title').textContent.trim()

  // Debug: afficher le titre récupéré
  console.log('Titre récupéré:', title)
  console.log('Titres disponibles:', Object.keys(locations))

  // Utiliser les coordonnées de Calypso Bay par défaut si le commerce n'est pas trouvé
  const location = locations[title] || {
    coordinates: '16.1581,-61.7761',
    address: '717+Rue+de+Poirier+Bouillante+Guadeloupe'
  }

  // Essayer d'abord le protocole geo: (pour mobile)
  const geoUrl = `geo:${location.coordinates}?q=${location.address}`

  // Fallback vers Google Maps
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.address}`

  try {
    // Essayer d'ouvrir avec le protocole geo:
    window.location.href = geoUrl

    // Si ça ne fonctionne pas après un délai, ouvrir Google Maps
    setTimeout(() => {
      window.open(mapsUrl, '_blank')
    }, 1000)
  } catch (error) {
    // En cas d'erreur, ouvrir directement Google Maps
    window.open(mapsUrl, '_blank')
  }
}

// ============================================================================
// GESTION DU MENU
// ============================================================================

// Etat interne
let MENU_PROGRESS = 0 // 0 fermé, 1 ouvert
let MENU_ANIMATING = false

// Easing doux
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

// Applique la progression visuelle
function setMenuProgress(p) {
  MENU_PROGRESS = Math.min(1, Math.max(0, p))
  // On pilote la variable CSS globale
  document.documentElement.style.setProperty('--menu-progress', MENU_PROGRESS)
  // Pointer events overlay quand > 0
  const overlay = document.querySelector('.guide-menu-overlay')
  if (overlay) {
    overlay.style.pointerEvents = MENU_PROGRESS > 0 ? 'auto' : 'none'
  }
}

// Animation générique
function animateMenu(toOpen) {
  if (MENU_ANIMATING) return
  const overlay = document.querySelector('.guide-menu-overlay')
  const dropdown = document.querySelector('.guide-menu-dropdown')

  const start = performance.now()
  const duration = 400 // ms
  const from = MENU_PROGRESS
  const to = toOpen ? 1 : 0

  // S'assurer que le menu et l'overlay sont visibles
  if (dropdown) {
    dropdown.classList.remove('hidden')
  }

  // Afficher l'overlay au début de l'ouverture
  if (toOpen && overlay) {
    overlay.classList.remove('hidden')
  }

  MENU_ANIMATING = true

  // Animation de la progression visuelle
  function frame(now) {
    const t = Math.min(1, (now - start) / duration)
    const eased = easeInOutCubic(t)
    const value = from + (to - from) * eased
    setMenuProgress(value)

    if (t < 1) {
      requestAnimationFrame(frame)
    } else {
      MENU_ANIMATING = false
      setMenuProgress(to)

      if (!toOpen && overlay) {
        overlay.classList.add('hidden')
      }
    }
  }

  requestAnimationFrame(frame)
}

// Bascule l'affichage du menu déroulant
function toggleMenu() {
  if (MENU_PROGRESS > 0) {
    animateMenu(false)
  } else {
    animateMenu(true)
  }
}

// Ferme le menu déroulant
function closeMenu() {
  if (MENU_PROGRESS > 0) animateMenu(false)
}

// ============================================================================
// COPIE CODE WIFI
// ============================================================================

function copyWifiKey() {
  const wifiKey = document.getElementById('wifi-key')
  const copyButton = event.target.closest('.copy-button')

  if (wifiKey && copyButton) {
    const keyText = wifiKey.textContent

    // In die Zwischenablage kopieren
    navigator.clipboard
      .writeText(keyText)
      .then(() => {
        // Visuelles Feedback
        copyButton.classList.add('copied')
        copyButton.textContent = 'Kopiert!'

        // Nach 2 Sekunden ursprünglichen Text wiederherstellen
        setTimeout(() => {
          copyButton.classList.remove('copied')
          copyButton.textContent = 'Kopieren'
        }, 2000)
      })
      .catch((err) => {
        console.error('Fehler beim Kopieren:', err)
        // Fallback für ältere Browser
        const textArea = document.createElement('textarea')
        textArea.value = keyText
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)

        // Visuelles Feedback auch im Fallback
        copyButton.classList.add('copied')
        copyButton.textContent = 'Kopiert!'

        setTimeout(() => {
          copyButton.classList.remove('copied')
          copyButton.textContent = 'Kopieren'
        }, 2000)
      })
  }
}

// ============================================================================
// EXPORT
// ============================================================================

// Export pour utilisation dans d'autres modules si nécessaire
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CarouselManager,
    PopupManager,
    showPopup,
    hidePopup
  }
}

// Expose global si nécessaire (compat HTML inline onclick)
window.toggleMenu = toggleMenu
window.closeMenu = closeMenu
