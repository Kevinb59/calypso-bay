/**
 * Guide Calypso Bay - English Translations
 * Gestion du carousel et des popups
 */

// ============================================================================
// DONNÉES DE TRADUCTION - TEXTE STATIQUE
// ============================================================================

const guideTranslations = {
  // Métadonnées de la page
  meta: {
    title: 'Guide',
    description:
      'Your vacation home in Bouillante, Guadeloupe. Find here all the useful information to fully enjoy your stay.'
  },

  // Navigation
  navigation: {
    menu: 'Menu',
    logement: 'Accommodation',
    localisation: 'Location',
    transport: 'Transport',
    commerces: 'Services',
    restaurants: 'Restaurants',
    activites: 'Activities',
    excursions: 'Excursions',
    sante: 'Health & Care',
    eauElectricite: 'Water & Electricity',
    cyclones: 'Cyclones',
    infosPratiques: 'Practical Info'
  },

  // Section Hero
  hero: {
    title: 'Welcome to',
    brand: 'Calypso Bay',
    description:
      'Your vacation home in Bouillante, Guadeloupe. Find here all the useful information to fully enjoy your stay.',
    location: 'Bouillante • Guadeloupe'
  },

  // Sections principales
  sections: {
    logement: 'Accommodation and facilities',
    localisation: 'Location and routes',
    transport: 'Transport and Access',
    commerces: 'Services and Shops',
    restaurants: 'Restaurants and Gastronomy',
    activites: 'Activities',
    excursions: 'Excursions',
    sante: 'Health, Care & Prevention',
    eauElectricite: 'Water & Electricity',
    cyclones: 'Cyclones and Weather Alerts',
    infosPratiques: 'Practical Information'
  },

  // Cartes - descriptions communes
  cards: {
    clickToLearnMore: 'Click to learn more…'
  },

  // Traductions des titres de cartes
  cardTitles: {
    Présentation: 'Presentation',
    'Éclairage & ventilateur du salon': 'Lighting & Living Room Fan',
    "La distribution de l'eau chaude": 'Hot Water Distribution',
    Internet: 'Internet',
    'Les WC et les eaux usées': 'Toilets & Wastewater',
    'Filet de sécurité et terrasse': 'Safety Net & Terrace',
    'La gestion des déchets': 'Waste Management',
    'Les volets et les fenêtres': 'Shutters & Bedroom Windows',
    'La Climatisation': 'Air Conditioning',
    'Adresse de Calypso Bay': 'Calypso Bay Address',
    Itinéraires: 'Itineraries',
    'Accès à la villa': 'Access to the Villa',
    'Loueurs de voiture': 'Car Rentals',
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
    Kayak: 'Kayak',
    Plongée: 'Scuba Diving',
    Distilleries: 'Rum Distilleries',
    'Maison du Cacao': 'Maison du Cacao',
    'Musée du Rhum': 'Musée du Rhum',
    'Habitation Côte sous le Vent': 'Habitation Côte-sous-le-Vent',
    'Mémorial ACTe': 'Mémorial ACTe',
    Microbrasserie: 'Microbrewery',
    Aquarium: 'Aquarium',
    'Site de tournage': 'Filming Location',
    'Plages et snorkeling': 'Beaches & Snorkeling',
    'Cascades et randonnées': 'Waterfalls & Hikes',
    'Découvertes en mer': 'Sea Excursions',
    'Balades et découvertes': 'Walks & Local Discoveries',
    'Services de soins': 'Health Services',
    'Protection anti-moustiques': 'Mosquito Protection',
    'Faune locale': 'Local Wildlife',
    'Protection solaire': 'Sun Protection',
    'Bains chauds': 'Hot Springs',
    'Bons réflexes': 'Good Practices',
    Eau: 'Water',
    Électricité: 'Electricity',
    'Saison cyclonique': 'Cyclone Season',
    'La maison en cas de cyclone': 'The Villa in Case of Cyclone',
    "Gestion de l'eau": 'Water Supply',
    "Contacts d'urgence": 'Emergency Contacts',
    'Taxe de séjour': 'Tourist Tax',
    'Préparatifs avant le départ': 'Preparations Before Departure',
    'Équipements fournis': 'Equipment Provided',
    'Équipements à emporter': 'Equipment to Bring',
    'Conseils pratiques sur place': 'Practical Tips on Site'
  },

  // Traductions des tags
  tags: {
    Bistronomique: 'Bistronomic',
    'Saveurs franco-créole': 'Franco-Creole Flavors',
    'Saveurs créoles': 'Creole Flavors',
    Grillades: 'Grilled',
    Pizzeria: 'Pizzeria',
    Drive: 'Drive',
    'Sur place': 'Eat In',
    'A emporter': 'Take Away',
    Supermarché: 'Supermarket',
    Poissonnerie: 'Fish Market',
    Boulangerie: 'Bakery',
    Boucherie: 'Butcher Shop',
    'Fruits et Légumes': 'Fruits & Vegetables',
    'Côtière nord': 'North Coast',
    'La traversée': 'Route de la Traversée',
    'Environ 80€': 'Around €80',
    Économique: 'Budget-Friendly',
    'CARAÏBE KAYAK': 'CARAÏBE KAYAK',
    'GWADA PAGAIE': 'GWADA PAGAIE',
    'Les Heures Saines': 'Les Heures Saines',
    Bologne: 'Bologne',
    Longueteau: 'Longueteau',
    'Pointe-Noire': 'Pointe-Noire',
    Dégustation: 'Tasting',
    'Sainte-Rose': 'Sainte-Rose',
    Culture: 'Culture',
    Patrimoine: 'Heritage',
    'Pointe-à-Pitre': 'Pointe-à-Pitre',
    Histoire: 'History',
    'Bière locale': 'Local Beer',
    Gosier: 'Le Gosier',
    'Faune marine': 'Marine Wildlife',
    Deshaies: 'Deshaies',
    'Meurtres au paradis': 'Death in Paradise',
    Plages: 'Beaches',
    Snorkeling: 'Snorkeling',
    Cascades: 'Waterfalls',
    Randonnées: 'Hiking',
    Plongée: 'Scuba Diving',
    Excursions: 'Excursions',
    Culture: 'Culture',
    Patrimoine: 'Heritage',
    '717 rue de Poirier, BOUILLANTE': '717 rue de Poirier, BOUILLANTE'
  },

  // Autres textes à traduire
  otherTexts: {
    'Adresse : 717 rue de Poirier, Bouillante':
      'Address: 717 rue de Poirier, Bouillante',
    'Check-in : 15h00': 'Check-in: 3:00 PM',
    'Check-out : 10h00': 'Check-out: 10:00 AM'
  },

  // Footer
  footer: {
    brand: 'Calypso Bay',
    contactTitle: 'For any questions, contact us:',
    email: 'contact@calypso-bay.com',
    phone: '+590 • • • • • • •',
    infosTitle: 'Practical info',
    address: 'Address: 717 rue de Poirier, Bouillante',
    checkin: 'Check-in: 3:00 PM',
    checkout: 'Check-out: 10:00 AM',
    copyright: '© 2025 Calypso Bay. Guest guide.'
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
        title: 'Presentation',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Presentation</h3>
          <div class="guide-popup-content">
            <p>The architect who designed the house is <strong>Mr. Laurent DARVIOT</strong>. He is very environmentally conscious, which explains the dual water supply system from day one — notably using rainwater for the toilets.</p>
            <ul>
              <li>Shower hot water is produced by a <strong>solar water heater</strong></li>
              <li>Part of the <strong>outdoor lighting</strong> is solar-powered</li>
              <li>Mr. DARVIOT built the first <strong>self-sufficient building in Guadeloupe</strong> (Résidence MALDYVES in Goyave), which won the <em>Trophées Bâtiments Résilients</em> residential award in 2022</li>
              <li>Many openings were planned to <strong>promote natural airflow</strong>, complemented by fans that consume less energy than air conditioning</li>
              <li>Bedrooms are <strong>air-conditioned</strong> to improve sleeping comfort</li>
              <li>A specialized company <strong>inspects the installation and cleans the filters annually</strong></li>
            </ul>
          </div>
        `
      },
      eclairage: {
        title: 'Living Room Lighting & Fan',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-lightbulb guide-icon light"></i>Living Room Lighting & Fan</h3>
          <div class="guide-popup-content">
            <p><i class="fas fa-power-off guide-icon power"></i> <strong>Main switch:</strong> The living room's main switch is next to the door leading to the back bedroom. It powers the fan and the lamp.</p>
            <p><i class="fas fa-lightbulb guide-icon light"></i> <strong>LEXMAN remote (lighting):</strong> Use the small LEXMAN remote. Press the button with the circle and vertical bar to turn the light on/off.</p>
            <img src="images/guide/24.webp" alt="LEXMAN remote"/>
            <p><i class="fas fa-fan guide-icon fan"></i> <strong>FANELITE remote (fan):</strong></p>
            <ul>
              <li>Start: press the <strong>I</strong> symbol at the top</li>
              <li>Stop: press the <strong>circle</strong> on the right</li>
            </ul>
            <img src="images/guide/23.webp" alt="FANELITE remote"/>
            <p><i class="fas fa-lightbulb guide-icon light"></i> <strong>Fan light:</strong> There is also a lamp at the base of the fan, controlled by the <strong>bulb</strong> icon on the remote.</p>
          </div>
        `
      },
      eauchaude: {
        title: 'Hot Water Distribution',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-tint guide-icon water"></i>Hot Water Distribution</h3>
          <div class="guide-popup-content">
            <p>This applies to the basins and especially the showers. Like in many sunny regions, the house is equipped with a <strong>solar water heater</strong> (panel + tank) located on the roof near the house entrance.</p>
            <p>The tank size is what the architect recommends for a six-person home. Two practical notes follow from the system's specs and the bedroom layout:</p>
            <img src="images/guide/28.webp" alt="Solar water heater - hot water distribution"/>
            <ul>
              <li><strong>Solar operation:</strong> By design, the solar unit heats during the day, not at night. If the tank has been fully used in the evening, shower water will be lukewarm the next morning but will reheat automatically during the day.</li>
              <li><strong>Layout:</strong> The heater is closer to the entrance and the first two bedrooms than to the third. As a result, the first two showers get hot water faster than the third — this is normal, not a malfunction.</li>
            </ul>
          </div>
        `
      },
      internet: {
        title: 'Internet',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-wifi guide-icon wifi"></i>Internet</h3>
          <div class="guide-popup-content">
            <p>The Orange router is in the pantry. Connection details are in the welcome booklet, and the TV is connected to the router.</p>
                         <div class="wifi-key-container">
               <p><strong>Livebox 66A0 key:</strong> <span id="wifi-key">ES6EZy7ZtLTZoKDTtp</span><button onclick="copyWifiKey()" class="copy-button" title="Copy the Wi-Fi key">Copy</button></p>
             </div>
            <p><strong>High-speed VDSL (cable):</strong></p>
            <ul>
              <li>Upload: 6.41 Mbit/s</li>
              <li>Download: 28.8 Mbit/s</li>
            </ul>
            <p>The municipality has started rolling out fiber, but given similar capacity, the <strong>aerial network is fragile and weather-exposed</strong> (especially to wind), which is why we currently prefer <strong>VDSL over cable</strong>.</p>
          </div>
        `
      },
      wc: {
        title: 'Toilets & Wastewater',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-toilet guide-icon toilet"></i>Toilets & Wastewater</h3>
           <div class="guide-popup-content">
             <p>All new homes in the Basse-Terre hills must be equipped with an <strong>individual mini wastewater treatment unit</strong> at construction.</p>
             <img src="images/guide/26.webp" alt="Mini treatment unit - toilets & wastewater"/>
             <p><strong>To keep it running properly:</strong></p>
             <ul>
               <li>Only flush <strong>dry toilet paper</strong> (standard rolls)</li>
               <li><strong>No wipes</strong> of any kind (including "moist toilet tissue")</li>
               <li>Dry paper breaks down with moisture and <strong>does not clog</strong> pipes</li>
               <li>Moist toilet paper is similar to wipes, <strong>clogs pipes</strong>, and disrupts wastewater treatment</li>
             </ul>
             <p><strong>If you use moist paper, please dispose of it in the bin — not in the toilet.</strong></p>
             <p>Our cleaning products (floors, WC) are compatible with septic systems. Please avoid bleach-based liquids.</p>
           </div>
         `
      },
      filet: {
        title: 'Safety Net & Terrace',
        content: `
      <h3 class="guide-popup-title"><i class="fas fa-shield-alt guide-icon shield"></i>Safety Net & Terrace</h3>
      <div class="guide-popup-content">
        <p>The house is equipped with a <strong>safety net</strong> between the pool and the terrace. Despite its strength, it is <strong>not a hammock</strong> (like on catamarans). It is purely a <strong>safety feature in case of accidental fall</strong> — please use it only for that purpose so it remains effective.</p>
        <img src="images/guide/25.webp" alt="Safety net - terrace and pool"/>
        <p><strong>IMPORTANT:</strong></p>
        <ul>
          <li>The terrace has <strong>no railing</strong> and the pool has <strong>no safety fence</strong></li>
          <li>This was a deliberate choice to preserve the <strong>unobstructed sea view</strong></li>
          <li>Adults usually appreciate this design</li>
          <li>For this reason, we <strong>do not recommend the house for families with young children (under 8)</strong>, as the terrace-pool area can be dangerous</li>
        </ul>
      </div>
    `
      },
      dechets: {
        title: 'Waste Management',
        content: `
      <h3 class="guide-popup-title"><i class="fas fa-trash guide-icon trash"></i>Waste Management</h3>
      <div class="guide-popup-content">
        <p>Waste collection can be problematic in Guadeloupe (we even had to buy our own trash bin as the municipality never delivered one, even after two years!).</p>
        <ul>
          <li>Garbage pickup is on <strong>Sunday night</strong> (between Sunday and Monday)</li>
          <li>Glass and plastic bottles: recycling bins are located along the roads, the closest one is <strong>opposite Carrefour Market</strong></li>
        </ul>
        <img src="images/guide/29.webp" alt="Recycling bins - waste management"/>
      </div>
    `
      },
      volets: {
        title: 'Shutters & Bedroom Windows',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-window-maximize guide-icon window"></i>Shutters & Bedroom Windows</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>ELECTRIC SHUTTERS</h4>
             <p><strong>WARNING:</strong></p>
             <p>Please check that nothing (especially terrace chairs) blocks the shutters when closing. Otherwise, the system may jam and prevent proper closure while you are away (this has already happened).</p>
             <img src="images/guide/27.webp" alt="Electric shutters - precautions"/>
             <h4><i class="fas fa-window-restore guide-icon window"></i>BEDROOM WINDOWS</h4>
             <p>The shutters open and close using the <strong>crank handle</strong> fixed on the frame.</p>
             <p>Unfortunately, the crank joints are fragile (a design flaw we reported to the manufacturer).</p>
             <p><strong>Please do not force them when operating.</strong></p>
           </div>
         `
      },
      climatisation: {
        title: 'Air Conditioning',
        content: `
            <h3 class="guide-popup-title"><i class="fas fa-snowflake guide-icon snowflake"></i>Air Conditioning</h3>
            <div class="guide-popup-content">
              <p>Electricity in Guadeloupe is still mostly <strong>fossil-based</strong> (imported). Bouillante benefits from the geothermal plant, which helps during outages, but the overall cost remains high.</p>
              <p>Unfortunately, "clean" energies are still limited.</p>
              <p><strong>For reasons of savings and ecology:</strong></p>
              <ul>
                <li>Please <strong>switch off the AC units when bedrooms are not in use</strong></li>
                <li>Keep <strong>doors and windows closed</strong> while using the AC</li>
              </ul>
              <p>A specialized company services the system and cleans the filters <strong>every year</strong>.</p>
            </div>
          `
      },
      adresse: {
        title: 'Address of Calypso Bay',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Address of Calypso Bay</h3>
           <div class="guide-popup-content">
             <p><strong>717 rue de POIRIER, BOUILLANTE</strong></p>
             <h4><i class="fas fa-route guide-icon route"></i>From Pôle Caraïbes Airport</h4>
             <p><strong>Two options to reach the West coast:</strong></p>
             <ul>
               <li><strong>Northern coastal road:</strong> Via Le Lamentin, Sainte-Rose (longer and busier, but recommended in very bad weather, flatter and less winding)</li>
               <li><strong>Route de la Traversée:</strong> More direct and less busy (recommended in good weather, more winding and steep)</li>
             </ul>
             <p><em>The Route de la Traversée is magnificent, the Alps in the middle of the jungle.</em></p>
             <p><strong>To take the northern coastal road:</strong> Add a stop in Sainte-Rose to your itinerary, otherwise for the Route de la Traversée, simply enter the villa's address.</p>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=717+Rue+de+Poirier+Bouillante+Guadeloupe" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation to Calypso Bay
               </a>
             </div>
           </div>
         `
      },
      itineraires: {
        title: 'Itineraries',
        content: `
      <h3 class="guide-popup-title"><i class="fas fa-map-signs guide-icon map"></i>Itineraries</h3>
      <div class="guide-popup-content">
        <h4><i class="fas fa-route guide-icon route"></i>Northern Coastal Road</h4>
        <p>Longer route, but safer in bad weather.</p>
        <p><strong>Distance: 68 km</strong></p>
        <img src="images/guide/20.webp" alt="Northern Coastal Road"/>
        <h4 style="margin-top: 30px"><i class="fas fa-route guide-icon route"></i>Route de la Traversée</h4>
        <p>Direct, scenic route recommended in good weather.</p>
        <p><strong>Distance: 46 km</strong></p>
        <img src="images/guide/21.webp" alt="Route de la Traversée"/>
      </div>
    `
      },
      acces: {
        title: 'Access to the Villa',
        content: `
      <h3 class="guide-popup-title"><i class="fas fa-mountain guide-icon mountain"></i>Access to the Villa</h3>
      <div class="guide-popup-content">
        <img src="images/guide/22.webp" alt="Rue de Poirier - Access to Calypso Bay"/>
        <p><strong>Rue de Poirier:</strong> The street climbs steeply. Along the way:</p>
        <ul>
          <li>Pass the <strong>"JARDIN TROPICAL"</strong> residences on the left</li>
          <li>The villa entrance is just after <strong>"JARDIN ZEN"</strong> (three small white and blue bungalows on the left)</li>
        </ul>
        <p><strong>You’ve arrived — WELCOME!</strong></p>
        <h4><i class="fas fa-info-circle guide-icon info"></i>Practical tips</h4>
        <ul>
          <li>Prefer the <strong>Route de la Traversée</strong> (faster)</li>
          <li>Watch out for <strong>sharp bends and steep slope</strong></li>
          <li>Avoid during heavy rain (slippery road)</li>
          <li>Look for the <strong>"Parc de la Source"</strong> and <strong>"Poirier"</strong> signs</li>
        </ul>
      </div>
    `
      },
      loueurs: {
        title: 'Car Rentals',
        content: `
      <h3 class="guide-popup-title"><i class="fas fa-car guide-icon car"></i>Car Rentals</h3>
      <div class="guide-popup-content">
        <p><strong>Tip:</strong> Book in advance, especially during high season.</p>
        <h4><i class="fas fa-building guide-icon building"></i>Recommended companies</h4>
        <ul>
          <li><strong><a href="https://www.hertzantilles.com/fr/location-de-voiture-guadeloupe" target="_blank" style="color: var(--color-primary); text-decoration: none;">Hertz</a>:</strong> Pôle Caraïbes Airport</li>
          <li><strong><a href="https://www.avis.fr/" target="_blank" style="color: var(--color-primary); text-decoration: none;">Avis</a>:</strong> Airport & Pointe-à-Pitre</li>
          <li><strong><a href="https://www.europcar-guadeloupe.com/agences/aeroport-pointe-a-pitre" target="_blank" style="color: var(--color-primary); text-decoration: none;">Europcar</a>:</strong> Airport & several agencies across the island</li>
        </ul>
        <p><strong>Click the company names or image tags above to access their websites.</strong></p>
      </div>
    `
      },
      taxi: {
        title: 'Taxi',
        content: `
      <h3 class="guide-popup-title"><i class="fas fa-taxi guide-icon taxi"></i>Taxi</h3>
      <div class="guide-popup-content">
        <h4><i class="fas fa-plane guide-icon plane"></i>From Pôle Caraïbes Airport</h4>
        <p><strong>Travel time:</strong> About 45 minutes</p>
        <p><strong>Price:</strong> Around €80 (one way)</p>
        <h4><i class="fas fa-info-circle guide-icon info"></i>Practical info</h4>
        <ul>
          <li>Book in advance to avoid waiting</li>
          <li>Fixed price from airport to Bouillante</li>
          <li>Option to share the ride with other travelers</li>
          <li>Payment by cash or card</li>
        </ul>
      </div>
    `
      },
      navette: {
        title: 'Shuttle',
        content: `
      <h3 class="guide-popup-title"><i class="fas fa-shuttle-van guide-icon shuttle"></i>Shuttle</h3>
      <div class="guide-popup-content">
        <h4><i class="fas fa-plane guide-icon plane"></i>Shuttle Services</h4>
        <p>Private services available from Pôle Caraïbes Airport.</p>
        <h4><i class="fas fa-info-circle guide-icon info"></i>Options</h4>
        <ul>
          <li><strong>Private shuttles:</strong> Direct transfer to your destination</li>
          <li><strong>Shared shuttles:</strong> Cheaper, ride with other travelers</li>
          <li><strong>Reservation:</strong> Recommended in advance</li>
          <li><strong>Flexibility:</strong> Schedules adapted to flights</li>
        </ul>
        <h4><i class="fas fa-clock guide-icon clock"></i>Advantages</h4>
        <ul>
          <li>No need to drive after a long flight</li>
          <li>Often cheaper than taxis</li>
          <li>Door-to-door service</li>
          <li>Professional driver familiar with the area</li>
        </ul>
      </div>
    `
      },
      carrefour: {
        title: 'Carrefour Market',
        content: `
      <h3 class="guide-popup-title"><i class="fas fa-shopping-cart guide-icon shopping"></i>Carrefour Market</h3>
      <div class="guide-popup-content">
        <p>Medium-sized supermarket on the N2 towards Pointe-Noire, ideal for the main groceries needed during your stay.</p>
        <img src="images/guide/02.webp" alt="Carrefour Market"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1581,-61.7761?q=Carrefour+Market+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
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
        <p>Located across from Carrefour Market. Simpler, but very interesting for prices with good quality products.</p>
        <img src="images/guide/03.webp" alt="Leader Price"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1581,-61.7761?q=Leader+Price+Pigeon+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
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
        <p>Just before Carrefour Market on the N2. Local fishermen drop off their catch, which is processed on site:</p>
        <ul>
          <li>Fresh fish cleaned and prepared</li>
          <li>Tuna, swordfish, or marlin steaks</li>
          <li>Tuna or marlin rillettes</li>
          <li>Tuna tataki, carpaccio</li>
        </ul>
        <p><em>A bit pricey but top-notch quality!</em></p>
        <img src="images/guide/05.webp" alt="Cap Créole - Fresh fish"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1598,-61.7751?q=Cap+Créole+Pigeon+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
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
        <p>Right next to Carrefour Market. Excellent bread and catering (homemade pizzas, roast pork, grilled chicken, pastries).</p>
        <p><strong>Opening hours:</strong> Open Sunday morning, closed Monday.</p>
        <img src="images/guide/04.webp" alt="Four des Îles - Bakery"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1610,-61.7745?q=Four+des+Iles+Boulangerie+Pigeon" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
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
        <p>Close to Carrefour Market. On foot, take the small street between the supermarket and the bakery. Wide choice of meats, skewers, etc.</p>
        <img src="images/guide/06.webp" alt="Ti Taurus - Butcher & caterer"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1613,-61.7753?q=Boucherie+traiteur+Ti+Taurus+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
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
        <p>On the N2, on the left heading north. Excellent fruits and vegetables.</p>
        <p><strong>Tip:</strong> Say whether it's for immediate consumption or the next day (e.g., for avocados). Adèle really knows her produce.</p>
        <p><em>Tell her you’re coming from Fanny — she might remember and spoil you!</em></p>
        <img src="images/guide/01.webp" alt="Chez Adèle - Fruits & Vegetables"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1581,-61.7761?q=Chez+Adèle+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
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
        <p>Good quality cuisine in a pleasant setting.</p>
        <img src="images/guide/07.webp" alt="La Touna - Restaurant"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1581,-61.7761?q=La+Touna+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
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
        <p>Excellent cuisine; very friendly owner.</p>
        <img src="images/guide/08.webp" alt="Chez Didier - Restaurant"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1581,-61.7761?q=Chez+Didier+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
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
        <p><strong>TOP!</strong> Cozy setting and fresh products.</p>
        <img src="images/guide/09.webp" alt="Sunset B - Restaurant"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1581,-61.7761?q=Le+Sunset+B+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
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
        <p>Tasty and inexpensive — a more “local” vibe.</p>
        <img src="images/guide/10.webp" alt="Aux Deux Coquilles - Restaurant"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1581,-61.7761?q=Les+Deux+Coquilles+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
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
             <p>Tasty and inexpensive — a more "local" vibe.</p>
             <img src="images/guide/11.webp" alt="Franko Grill - Restaurant"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Franko+Grill+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation
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
             <p>Located opposite the La Touna restaurant.</p>
             <img src="images/guide/12.webp" alt="Oganik - Pizzeria"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Oganik+Pizzeria+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation
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
             <p>Behind Carrefour Market.</p>
             <img src="images/guide/13.webp" alt="Allo Pizza - Pizzeria"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Allo+Pizza+Pizzeria+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation
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
             <p>Excellent thin-crust pizzas.</p>
             <img src="images/guide/14.webp" alt="Le Cœur de Pigeon - Pizzeria"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Le+Cœur+de+Pigeon+Pizzeria+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation
               </a>
             </div>
           </div>
         `
      },
      kayak: {
        title: 'Kayak',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-kayak guide-icon kayak"></i>Kayak</h3>
           <div class="guide-popup-content">
             <p>Available on Malendure beach to explore the <strong>Cousteau Reserve</strong> and Pigeon islets.</p>
             <h4><i class="fas fa-building guide-icon building"></i>Recommended rentals</h4>
             <p><em>Click the company names to open GPS navigation:</em></p>
             <ul>
               <li><strong><a href="geo:16.1581,-61.7761?q=CARAÏBE+KAYAK+bouillante" style="color: var(--color-primary); text-decoration: none;">CARAÏBE KAYAK</a>:</strong> Kayak rentals for exploring the Cousteau Reserve</li>
               <li><strong><a href="geo:16.1581,-61.7761?q=GWADA+PAGAIE+bouillante" style="color: var(--color-primary); text-decoration: none;">GWADA PAGAIE</a>:</strong> Rentals and guided excursions</li>
             </ul>
             <img src="images/guide/48.webp" alt="Kayak - Plage de Malendure"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Plage+Malendure+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation
               </a>
             </div>
           </div>
         `
      },
      plongee: {
        title: 'Scuba Diving',
        content: `
      <h3 class="guide-popup-title"><i class="fas fa-diving-helmet guide-icon diving"></i>Scuba Diving</h3>
      <div class="guide-popup-content">
        <h4><i class="fas fa-water guide-icon water"></i>Dive Centers</h4>
        <p><strong>Les Heures Saines (Bouillante):</strong> Renowned club to explore the <strong>Cousteau Reserve</strong>.</p>
        <img src="images/guide/49.webp" alt="Diving - Cousteau Reserve"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1581,-61.7761?q=Les+Heures+Saines+Plongée+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
          </a>
        </div>
      </div>
    `
      },
      distilleries: {
        title: 'Rum Distilleries',
        content: `
      <h3 class="guide-popup-title"><i class="fas fa-industry guide-icon industry"></i>Rum Distilleries</h3>
      <div class="guide-popup-content">
        <h4><i class="fas fa-wine-bottle guide-icon bottle"></i>Famous distilleries</h4>
        <ul>
          <li><strong>Bologne (Basse-Terre):</strong> Tour & gift shop</li>
          <li><strong>Longueteau:</strong> Traditional agricole rum</li>
          <li><strong>Damoiseau:</strong> Quality rums</li>
          <li><strong>Montebello:</strong> Premium rums</li>
          <li><strong>Séverin:</strong> Craft rums</li>
          <li><strong>Rhum Karukera:</strong> Local rums</li>
          <li><strong>Rhum Raymonenq:</strong> Traditional rums</li>
        </ul>
        <img src="images/guide/50.webp" alt="Guadeloupe distilleries"/>
        <div style="margin-top:20px;text-align:center">
          <a href="geo:16.1581,-61.7761?q=Distillerie+Bologne+Basse-Terre" style="display:inline-flex;align-items:center;gap:8px;padding:15px 25px;background:#4caf50;color:white;text-decoration:none;border-radius:25px;font-size:16px;font-weight:500;transition:all .3s ease;box-shadow:0 4px 8px rgba(0,0,0,.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
          </a>
        </div>
      </div>
    `
      },
      maisoncacao: {
        title: 'Cacao House',
        content: `
      <h3 class="guide-popup-title"><i class="fas fa-seedling guide-icon seedling"></i>Cacao House</h3>
      <div class="guide-popup-content">
        <p><strong>Pointe-Noire:</strong> A delicious immersion into cacao culture.</p>
        <p>Learn the history of cacao in Guadeloupe and taste local products.</p>
        <img src="images/guide/51.webp" alt="Maison du Cacao - Pointe-Noire"/>
        <div style="margin-top: 20px; text-align: center">
          <a href="geo:16.1581,-61.7761?q=Maison+du+Cacao+Pointe-Noire" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <i class="fas fa-location-arrow"></i>
            Open Navigation
          </a>
        </div>
      </div>
    `
      },
      museerhum: {
        title: 'Rum Museum',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-wine-bottle guide-icon bottle"></i>Rum Museum</h3>
           <div class="guide-popup-content">
             <p><strong>Sainte-Rose :</strong> Local culture and tastings.</p>
             <p>Discover the history of rum in Guadeloupe and sample some of the island's best.</p>
             <img src="images/guide/52.webp" alt="Musée du Rhum - Sainte-Rose"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Musée+du+Rhum+Sainte-Rose" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation
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
             <p><strong>Pointe-Noire :</strong> Heritage & history.</p>
             <p>Learn about this historic estate and its importance in Guadeloupe's heritage.</p>
             <img src="images/guide/53.webp" alt="Habitation Côte-sous-le-Vent - Pointe-Noire"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Habitation+Côte-sous-le-Vent+Pointe-Noire" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation
               </a>
             </div>
           </div>
         `
      },
      memorialacte: {
        title: 'Mémorial ACTe',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-monument guide-icon monument"></i>Mémorial ACTe<h3>
           <div class="guide-popup-content">
             <p><strong>Pointe-à-Pitre:</strong> Caribbean Center for Expressions and Memory of the Slave Trade.</p>
             <p>An important memorial site to understand the history of Guadeloupe and the Caribbean.</p>
             <img src="images/guide/54.webp" alt="Mémorial ACTe - Pointe-à-Pitre"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Mémorial+ACTe+Pointe-à-Pitre" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation
               </a>
             </div>
           </div>
         `
      },
      microbrasserie: {
        title: 'Microbrewery',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-beer guide-icon beer"></i>Microbrewery</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-beer guide-icon beer"></i>Microbrasserie de la Lézarde (Petit-Bourg, Vernou)</h4>
             <p>Located 500 m from the waterfall trail entrance. Open from 11:30 AM, closed Sunday and Monday.</p>
             <img src="images/guide/55.webp" alt="Microbrasserie de la Lézarde"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Microbrasserie+de+la+Lézarde+Petit-Bourg" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation
               </a>
             </div>
           </div>
         `
      },
      aquarium: {
        title: 'Guadeloupe Aquarium',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-fish guide-icon fish"></i>Guadeloupe Aquarium</h3>
           <div class="guide-popup-content">
             <p><strong>Aquarium de Guadeloupe (Gosier) :</strong> Discover marine fauna.</p>
             <p>Explore the richness of Caribbean marine fauna in this exceptional aquarium.</p>
             <img src="images/guide/56.webp" alt="Aquarium de Guadeloupe - Gosier"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Aquarium+de+Guadeloupe+Gosier" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation
               </a>
             </div>
           </div>
         `
      },
      sitetournage: {
        title: 'Filming Location',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-video guide-icon video"></i>Filming Location</h3>
           <div class="guide-popup-content">
             <p><strong>Filming location for the series "Death in Paradise" (Deshaies) :</strong></p>
             <p>Walk through the village, often animated by filming crews. Discover the filming locations of this popular series.</p>
             <img src="images/guide/57.webp" alt="Site de tournage - Deshaies"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Deshaies+Site+Tournage+Meurtres+Paradis" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Open Navigation
               </a>
             </div>
           </div>
         `
      },
      plages: {
        title: 'Beaches & Snorkeling',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-umbrella-beach guide-icon beach"></i>Beaches & Snorkeling</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-water guide-icon water"></i>Malendure Beach (Bouillante)</h4>
             <p>Black sand, turtle watching (especially on the north side, Petit Malendure). Snorkeling and kayak rental to reach Pigeon islets (Cousteau Reserve).</p>

             <h4><i class="fas fa-water guide-icon water"></i>Petite Anse Beach (Bouillante)</h4>
             <p>Wild beach with golden sand and pebbles. Rich snorkeling (reef fish, corals, squid, sometimes turtles).</p>

             <h4><i class="fas fa-water guide-icon water"></i>Leroux Beach (Ferry, Deshaies)</h4>
             <p>Small golden sand beach, very beautiful snorkeling site (boxfish, squid...). Also frequented by iguanas in the morning.</p>

             <h4><i class="fas fa-water guide-icon water"></i>Grande Anse and Anse de la Perle Beaches (Deshaies)</h4>
             <p>Immense golden sand beaches, magnificent but beware of waves.</p>

             <h4><i class="fas fa-water guide-icon water"></i>Petite Anse Beach (Deshaies)</h4>
             <p>Pleasant spot for a calmer swim.</p>

             <img src="images/guide/58.webp" alt="Plages et snorkeling"/>
           </div>
         `
      },
      cascades: {
        title: 'Waterfalls & Hikes',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-mountain guide-icon mountain"></i>Waterfalls & Hikes</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-water guide-icon water"></i>Trou à Diable Waterfall (Bouillante)</h4>
             <p>Near Parc de la Source, accessible by a pleasant and shaded trail. Be careful in case of heavy rain.</p>

             <h4><i class="fas fa-water guide-icon water"></i>Saut d'Acomat (Pointe-Noire)</h4>
             <p>Iconic waterfall.</p>

             <h4><i class="fas fa-water guide-icon water"></i>Saut de la Lézarde (Petit-Bourg)</h4>
             <p>Superb site, sporty access but doable in 1h round trip. Basin suitable for swimming.</p>

             <h4><i class="fas fa-water guide-icon water"></i>Chutes du Carbet (Capesterre-Belle-Eau)</h4>
             <ul>
               <li><strong>1st fall:</strong> 115 m, sporty hike with river crossings.</li>
               <li><strong>2nd fall:</strong> 110 m, the most accessible, fitted trail (children possible).</li>
               <li><strong>3rd fall:</strong> 20 m, pleasant basin for swimming.</li>
             </ul>

             <h4><i class="fas fa-hiking guide-icon hiking"></i>Hike behind the villa (Bouillante)</h4>
             <p>From rue de Poirier to Parc de la Source. Beautiful ridge path with sea view.</p>

             <img src="images/guide/59.webp" alt="Cascades et randonnées"/>
           </div>
         `
      },
      mer: {
        title: 'Sea Excursions',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-ship guide-icon ship"></i>Sea Excursions</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-diving-helmet guide-icon diving"></i>Scuba Diving</h4>
             <p>Club Les Heures Saines (Bouillante), renowned for its safety and friendliness. Exploration of the Cousteau Reserve and wrecks.</p>

             <h4><i class="fas fa-ship guide-icon ship"></i>Excursion to Les Saintes</h4>
             <p>Departure by ferry from Trois-Rivières, ideal for a day trip.</p>

             <img src="images/guide/60.webp" alt="Découvertes en mer"/>
           </div>
         `
      },
      balades: {
        title: 'Walks & Local Discoveries',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-map-marked-alt guide-icon map"></i>Walks & Local Discoveries</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-seedling guide-icon seedling"></i>Deshaies Botanical Garden</h4>
             <p>2-hour walk in a lush setting.</p>

             <h4><i class="fas fa-fort-awesome guide-icon fort"></i>Fort Delgrès (Basse-Terre)</h4>
             <p>Major historical site, free visit.</p>

             <h4><i class="fas fa-shopping-basket guide-icon market"></i>Basse-Terre Market</h4>
             <p>Daily market (except Sunday and Monday), particularly lively on Saturday. Ideal for spices, vanilla and local products.</p>

             <h4><i class="fas fa-shopping-basket guide-icon market"></i>Sainte-Anne Market and its Artisan Village</h4>
             <p>Souvenirs and local products.</p>

             <h4><i class="fas fa-mountain guide-icon mountain"></i>Pointe des Châteaux (Saint-François)</h4>
             <p>Impressive landscapes reminiscent of Brittany.</p>

             <img src="images/guide/61.webp" alt="Balades et découvertes"/>
           </div>
         `
      },
      pharmacie: {
        title: 'Health Services',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-pills guide-icon pills"></i>Health Services</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-store guide-icon store"></i>Losteau Pharmacy</h4>
             <p><strong>Address:</strong> Zac de Losteau - Pigeon, Bouillante 97125, Guadeloupe</p>
             <p><strong>Phone:</strong> +590 590 99 08 44</p>
             <p><strong>Website:</strong> <a href="https://pharmaciedelosteau.fr" target="_blank" style="color: var(--color-primary); text-decoration: none;">pharmaciedelosteau.fr</a></p>
             <p><strong>Hours:</strong> Closes at 19:00</p>
             <p><strong>Services:</strong> In-store pickup, online booking possible</p>
             <p><strong>Advice:</strong> The carte vitale works as in mainland France. Remember to bring your usual medications and a first aid kit.</p>

             <img src="images/guide/15.webp" alt="La pharmacie de Losteau"/>

             <h4 style="margin-top: 30px"><i class="fas fa-phone guide-icon phone"></i>Emergency Numbers</h4>
             <ul>
               <li><strong>Fire Department:</strong> 18</li>
               <li><strong>Police:</strong> 17</li>
               <li><strong>SAMU:</strong> 15</li>
               <li><strong>Météo France:</strong> 0892 68 08 08</li>
             </ul>

             <h4 style="margin-top: 30px"><i class="fas fa-hospital guide-icon hospital"></i>Hospital</h4>
             <h5><i class="fas fa-hospital-alt guide-icon hospital"></i>Maurice Selbonne Hospital</h5>
             <p><strong>Address:</strong> 97125 Rue des Manguiers, Bouillante 97125, Guadeloupe</p>
             <p><strong>Phone:</strong> +590 590 80 49 00</p>
             <p><strong>Website:</strong> <a href="https://ch-mauriceselbonne.fr" target="_blank" style="color: var(--color-primary); text-decoration: none;">ch-mauriceselbonne.fr</a></p>
             <p><strong>Services:</strong> Specialized hospital with emergency services</p>

             <img src="images/guide/16.webp" alt="Hôpital Maurice Selbonne"/>

             <div style="margin-top: 20px; text-align: center">
               <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                 <a href="geo:16.1581,-61.7761?q=La+pharmacie+de+Losteau+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                   <i class="fas fa-pills"></i>
                   Losteau Pharmacy
                 </a>
                 <a href="geo:16.1581,-61.7761?q=Hôpital+Maurice+Selbonne+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                   <i class="fas fa-hospital"></i>
                   Maurice Selbonne Hospital
                 </a>
               </div>
             </div>
           </div>
         `
      },
      moustiques: {
        title: 'Mosquito Protection',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-bug guide-icon bug"></i>Mosquito Protection</h3>
           <div class="guide-popup-content">
             <p><strong>Important precautions:</strong></p>
             <ul>
               <li>Mosquitoes are active at breakfast and evening aperitif</li>
               <li>Use aerosols ("Insect Ecran" or "Off") on exposed areas</li>
               <li>Citronella candles and mosquito coils</li>
               <li>Mosquito nets equip the bedrooms (no problem at night)</li>
               <li><strong>Effective repellent recommended</strong> in your preparations</li>
             </ul>

             <h4><i class="fas fa-plane guide-icon plane"></i>Before leaving</h4>
             <p>Don't forget to buy an anti-mosquito spray (OFF or INSECTECRAN to transport in hold) so you can treat yourself on exposed parts as soon as you arrive.</p>

             <img src="images/guide/34.webp" alt="Produits anti-moustiques - Protection"/>

             <p>When arriving at the airport, the first desire is to undress and the mosquitoes often present in the morning and evening are just waiting for that.</p>
             <p>Dengue is present in all the Antilles, it can be dangerous and in any case can spoil your stay (like a very big flu).</p>
             <p>Once declared, no treatment other than Doliprane.</p>
             <p>In the morning and evening protect yourself with repellents, use coils or citronella candles.</p>
             <p>Don't hesitate to consult the INSECTECRAN website which provides useful advice.</p>
           </div>
         `
      },
      faune: {
        title: 'Local Wildlife',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-paw guide-icon paw"></i>Local Wildlife</h3>
           <div class="guide-popup-content">
             <p><strong>Mosquitoes:</strong> Protect yourself especially at sunrise and sunset (Insectecran, Off). At night, mosquito nets are very effective protection.</p>
             <p><strong>In Guadeloupe no snakes.</strong></p>
             <p><strong>Spiders:</strong> They are harmless even if they are sometimes impressive by their size compared to those of mainland France.</p>

             <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>Crawling insects</h4>
             <p>The house is treated on the ground (Digrain) very regularly by the concierge team to avoid their presence unfortunately inevitable despite the repetition of insecticide applications (this is a constant in all houses in the Antilles).</p>
             <p>They are all harmless except for <strong>Centipedes</strong> (sometimes about ten centimeters).</p>
             <p>During the rainy season, they tend to seek refuge in houses which is particularly unpleasant for us humans.</p>
             <p>In dry periods, they live underground, but after the heavy rains of the wet season, their nests are flooded and they seek drier places.</p>
             <p>Fearful, they flee when encountered, but like many animals they defend themselves and bite if they feel cornered. Their bite is very painful.</p>
           </div>
         `
      },
      soleil: {
        title: 'Sun Protection',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-sun guide-icon sun"></i>Sun Protection</h3>
           <div class="guide-popup-content">
             <p><strong>Recommended equipment:</strong></p>
             <ul>
               <li><strong>Sunscreen:</strong> High protection (SPF 50+)</li>
               <li><strong>Sunglasses:</strong> UV protection</li>
               <li><strong>Hat:</strong> Protection for head and face</li>
               <li><strong>Hydration:</strong> Drink plenty of water</li>
             </ul>
           </div>
         `
      },
      bains: {
        title: 'Hot Springs',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-exclamation-triangle guide-icon warning"></i>Attention to "hot baths"</h3>
           <div class="guide-popup-content">
             <p>A final recommendation concerns exclusively "hot baths". These are volcanic water resurgences where you can bathe.</p>
             <p>On site they are called "yellow baths", "lovers' bath" etc. Bathing there is pleasant and safe provided you do not immerse your head.</p>
             <p>Depending on the water temperature, it may contain amoebas that are harmless to the skin, but aggressive to mucous membranes. In rivers or sea there is no danger.</p>
           </div>
         `
      },
      reflexes: {
        title: 'Good Practices',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-shield-alt guide-icon shield"></i>Good Practices</h3>
           <div class="guide-popup-content">
             <p><strong>Prevention tips:</strong></p>
             <ul>
               <li>During the day, especially during the rainy season, close the doors and windows of the bedrooms, and leave the bed mosquito nets closed.</li>
               <li>Despite this, check the bedding before going to bed.</li>
               <li>If shoes "sleep" outside the bedrooms, shake them before putting them on.</li>
               <li>Same technique with clothes.</li>
               <li>Prefer walking with sandals or flip-flops rather than barefoot.</li>
             </ul>
           </div>
         `
      },
      eau: {
        title: 'Water',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-tint guide-icon water"></i>WATER</h3>
           <div class="guide-popup-content">
             <p>For maintenance, ecological and economic reasons, the house benefits from a double water supply.</p>
             <p>It is connected to the Guadeloupe water distribution network with a reserve tank.</p>
             <p><strong>The main connection valve to the Guadeloupe network</strong> is located at the entrance gate of the house next to the meter, it serves to cut off the supply in case of a pipe break for example.</p>
             <p>The water is then directed to the basement room.</p>
             <p><strong>At the basement level, there is a connection valve with two positions (network, backup tank):</strong></p>
             <img src="images/guide/32.webp" alt="Vanne de raccordement - Sous-sol"/>
             <ul>
               <li><strong>Horizontal position</strong> = direct connection to the distribution network</li>
               <li><strong>Vertical position</strong> = connection to the backup tank</li>
             </ul>
             <p>This backup tank in the basement of the house contains an electric pump that triggers spontaneously in case of network water cut, and continues to supply showers and taps. Its backup function only triggers when the level drops and the tank is connected to taps and showers.</p>
             <p><strong>IN CASE OF WATER CUT:</strong></p>
             <p>It is the water from the backup tank that is used.</p>
             <p>There is a second water supply, exclusively for the toilets which benefit from a double water inlet: the left tap supplies rainwater, the right one supplies network water.</p>
             <img src="images/guide/31.webp" alt="Double alimentation WC - Eau de pluie et réseau"/>
             <p>Permanently the left tap is open, the right one closed and the electric pump immersed in the rainwater recovery tank supplies the toilets automatically.</p>
             <p>In case of failure on the supply network, that of the toilets, independent, continues without interruption while the taps and showers are no longer supplied if the red handle is in the low position.</p>
           </div>
         `
      },
      electricite: {
        title: 'Electricity',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-bolt guide-icon bolt"></i>ELECTRICITY</h3>
           <div class="guide-popup-content">
             <p>It is provided in two ways in Bouillante: the JARRY thermal power plant and the BOUILLANTE geothermal power plant.</p>
             <p>This double source means that we are privileged in Bouillante and rarely concerned by long-term cuts... except in case of "social movements".</p>
             <p><strong>IN CASE OF POWER CUT:</strong></p>

             <h4><i class="fas fa-door-open guide-icon door"></i>The entrance gate</h4>
             <p>The entrance gate is equipped with an electric motor with a small backup battery that prevents you from finding yourself, outside the house, in front of a closed gate.</p>
             <p>Unfortunately, this battery has low capacity and we recommend switching to manual mode in case of failure.</p>
             <p>To do this, a small triangular key is available in the kitchen cutlery drawer (to the right of the drawer). It allows you to disengage the electric motor and operate the gate manually before power returns.</p>
             <img src="images/guide/33.webp" alt="Clé triangulaire - Portail d'entrée"/>

             <h4><i class="fas fa-window-maximize guide-icon window"></i>Rolling shutters</h4>
             <p>There are three of them, metal and electrified, two smaller ones on each side framing the wider central shutter (and heavier too).</p>
             <p>In case of power failure, there is a crank on the right of the shutters on which a metal intermediate piece fits (placed in the small alcove just above the left shutter).</p>
             <p>This device allows manual opening and closing.</p>

             <h4><i class="fas fa-lightbulb guide-icon light"></i>Lighting</h4>
             <p>In the house we have three "FATBOY" lamps with built-in battery.</p>
             <p>The USB electrical cables to allow their charging are in the furniture under the television. During our stays in the house we charge them at the beginning of the holidays, their light is soft and pleasant in the evening on the terrace but they can also help out... just in case...</p>
             <p>In the pantry (or in the basement depending on space) there are alcohol lamps if needed.</p>

             <h4><i class="fas fa-tint guide-icon water"></i>Water supply</h4>
             <p>The pump immersed in the rainwater recovery tank is no longer operational as well as that of the backup tank.</p>
             <p>It is the network pressure that ensures the supply of taps, showers and potentially toilets.</p>
             <p>It is therefore necessary to connect the toilet tank to the distribution network during the power interruption period.</p>
             <p>For this, simply check that the red handle in the basement is in the low position and for the toilets, close the tap on the left then open the one on the right.</p>
             <p>The reverse operation must be carried out at this level, after power returns.</p>
           </div>
         `
      },
      'saison-cyclonique': {
        title: 'Cyclone Season',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-info-circle guide-icon info"></i>Cyclone Season</h3>
           <div class="guide-popup-content">
             <p>Guadeloupe is a tropical area exposed to cyclone risk from <strong>July to November</strong>. Civil protection, accustomed to meteorological phenomena in the Antilles, ensures good management of climatic events (warning messages, surveillance, information dissemination, damage management).</p>
             <p>There are <strong>five alert levels</strong> to which one must adapt according to messages from competent authorities.</p>

             <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>Alert Levels</h4>

             <h5 style="color: #607d8b; margin-top: 20px"><i class="fas fa-circle" style="color: #607d8b"></i>Gray Alert: Stay cautious</h5>
             <ul>
               <li>Avoid travel before everything is back in order</li>
               <li>Do not touch electrical and telephone wires on the ground</li>
               <li>Drink bottled water or treated with Micropur</li>
               <li>Make sure traffic is authorized before resuming your vehicle</li>
               <li>Do not cross submerged fords or flooded ravines</li>
             </ul>

             <h5 style="color: #ffc107; margin-top: 20px"><i class="fas fa-circle" style="color: #ffc107"></i>Yellow Alert: Be attentive</h5>
             <ul>
               <li>Be vigilant and stay informed via Météo France, media and prefecture</li>
               <li>Check necessary reserves for a few days (food, water)</li>
               <li>Avoid long hikes, especially near rivers and sea outings</li>
             </ul>

             <h5 style="color: #ff9800; margin-top: 20px"><i class="fas fa-circle" style="color: #ff9800"></i>Orange Alert: Finish your preparations</h5>
             <ul>
               <li>Bring in outdoor furniture (deck chairs in the basement if necessary)</li>
               <li>Charge battery lighting (Fatboy lamps)</li>
               <li>Create a reserve of water and food for a few days</li>
               <li>Limit your movements</li>
               <li>Close protective metal shutters and blinds</li>
             </ul>

             <h5 style="color: #9c27b0; margin-top: 20px"><i class="fas fa-circle" style="color: #9c27b0"></i>Purple Alert: Confine yourself</h5>
             <ul>
               <li>Try to stay calm, the situation will evolve quickly</li>
               <li>Stay sheltered in the secure room</li>
               <li>Only go out when everything has become calm outside</li>
               <li>Listen to the radio for messages from authorities</li>
             </ul>

             <h5 style="color: #f44336; margin-top: 20px"><i class="fas fa-circle" style="color: #f44336"></i>Red Alert: Enter shelters</h5>
             <ul>
               <li>Make sure shutters are properly closed</li>
               <li>Check water and food reserves</li>
               <li>Prepare the safest room in the house (basement)</li>
               <li>Listen to information sources to adapt to evolution</li>
               <li><strong>Totally prohibit car travel</strong></li>
               <li>If you need to enter the basement, cut off electricity beforehand</li>
               <li>Temporarily cut off the water supply (handles perpendicular to pipes)</li>
             </ul>
           </div>
         `
      },
      'maison-cyclone': {
        title: 'The Villa in Case of Cyclone',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>The Villa in Case of Cyclone</h3>
           <div class="guide-popup-content">
             <p><strong>MOST IMPORTANT:</strong></p>
             <p>The villa was built by our architect respecting <strong>cyclonic and seismic standards</strong>:</p>
             <ul>
               <li><strong>Foundations:</strong> Reinforced concrete (even if the house collapses, the basement is a bunker)</li>
               <li><strong>Shutters:</strong> Metal, electric or manual closing (crank in the right angle of the main room)</li>
               <li><strong>Windows:</strong> Glass with anti-burglary reinforcement bars</li>
               <li><strong>Roof:</strong> Equipped with anti-tear "caps" (except wind at 300 km/h)</li>
               <li><strong>Safety rooms:</strong> Two "panic rooms" available</li>
             </ul>

             <h4><i class="fas fa-shield-alt guide-icon shield"></i>Safety Rooms</h4>

             <h5><i class="fas fa-door-closed guide-icon door"></i>The Pantry</h5>
             <ul>
               <li>Three concrete walls, concrete ceiling</li>
               <li>Very little space</li>
               <li>"Cyclone" box with emergency equipment</li>
             </ul>

             <h5><i class="fas fa-warehouse guide-icon warehouse"></i>The Basement (recommended)</h5>
             <ul>
               <li>Larger and more comfortable room</li>
               <li>All walls in reinforced concrete</li>
               <li>Less exposed window</li>
               <li>Contains the reserve of 1200 liters of drinking water</li>
               <li>Can accommodate deck chairs, folding chairs, small table</li>
             </ul>
           </div>
         `
      },
      'gestion-eau-cyclone': {
        title: 'Water Management',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-tint guide-icon water"></i>Water Management</h3>
           <div class="guide-popup-content">
             <p><strong>IMPORTANT:</strong> The tank must be disconnected from the network in case of cyclone:</p>
             <ul>
               <li>Turn the red handle and bronze tap next to the filter</li>
               <li>Position perpendicular to the water inlet pipe</li>
               <li>Avoids contamination by mud in case of pipe rupture</li>
             </ul>

             <h4><i class="fas fa-glass-water guide-icon water"></i>Drinking Water</h4>
             <ul>
               <li><strong>Prefer:</strong> Bottled water</li>
               <li><strong>Tank water:</strong> Consumable directly in normal times</li>
               <li><strong>Treatment:</strong> Micropur tablets (1 tablet for 1 liter, let rest 120 minutes)</li>
               <li><strong>Water bottles:</strong> 1 liter metal ones available</li>
             </ul>

             <h4><i class="fas fa-lightbulb guide-icon light"></i>Emergency Lighting</h4>
             <ul>
               <li>Fatboy lamps previously charged</li>
               <li>USB cables in the furniture under the television</li>
               <li><strong>IMPORTANT:</strong> Cut off electricity before going down to the basement (fire risk)</li>
             </ul>

             <h4><i class="fas fa-box guide-icon box"></i>"Cyclone" Box</h4>
             <p>Contains in the pantry:</p>
             <ul>
               <li>Gas stove with cartridge</li>
               <li>Radio and batteries to follow information</li>
               <li>Micropur tablets to sterilize water</li>
               <li>1 liter metal water bottles</li>
             </ul>
           </div>
         `
      },
      'contacts-urgence': {
        title: 'Emergency Contacts',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-phone guide-icon phone"></i>Emergency Contacts</h3>
           <div class="guide-popup-content">
             <ul>
               <li><strong>Police emergency:</strong> 17</li>
               <li><strong>Fire department:</strong> 18</li>
               <li><strong>European emergency call:</strong> 112</li>
               <li><strong>Laurence (practical information):</strong> 06 90 40 40 55</li>
             </ul>

             <h4><i class="fas fa-radio guide-icon radio"></i>Information Sources</h4>
             <ul>
               <li>Météo France Antilles</li>
               <li>Local media</li>
               <li>Guadeloupe Prefecture</li>
               <li>Civil protection</li>
             </ul>

             <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>Important Reminders</h4>
             <ul>
               <li>Strictly follow the instructions of the authorities</li>
               <li>Do not take unnecessary risks</li>
               <li>Stay informed at all times</li>
               <li>Prepare equipment in advance</li>
               <li>Know the safety rooms of the villa</li>
             </ul>
           </div>
         `
      },
      'taxe-sejour': {
        title: 'Tourist Tax',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Tourist Tax</h3>
           <div class="guide-popup-content">
             <p>A tourist tax is collected by the municipality of Bouillante:</p>
             <ul>
               <li><strong>Amount:</strong> €2.30 per adult per night (4-star tourist residence)</li>
               <li><strong>Exemption:</strong> Children under 18 years old</li>
               <li><strong>Payment:</strong> Already included in the stay price</li>
               <li><strong>Duration concerned:</strong> Stays of more than 3 nights</li>
             </ul>
             <p>This tax contributes to the tourist development of the municipality and to the maintenance of beaches, trails and public spaces.</p>
           </div>
         `
      },
      preparatifs: {
        title: 'Preparations Before Departure',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-suitcase guide-icon suitcase"></i>Preparations Before Departure</h3>
           <div class="guide-popup-content">
             <ul>
               <li><strong>Clothing:</strong> Light and comfortable (swimsuit, hat, beach outfits)</li>
               <li><strong>Shoes:</strong> Sandals for the beach + closed shoes for hiking</li>
               <li><strong>Useful accessories:</strong> Sunglasses, high protection sunscreen, cap, mosquito repellent (type OFF or Insect Ecran)</li>
             </ul>
             <p><strong>💡 Tip:</strong> A small waterproof bag is very practical in Guadeloupe (beaches, hiking, river crossings).</p>
           </div>
         `
      },
      'equipements-fournis': {
        title: 'Equipment Provided',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Equipment Provided</h3>
           <div class="guide-popup-content">
             <ul>
               <li><strong>Snorkeling masks</strong> (sizes M and S) available in the basement</li>
               <li><strong>Towels:</strong> Provided for bathroom and pool (⚠️ no beach towels)</li>
               <li><strong>Folding towel dryers</strong> to dry outside</li>
               <li><strong>Electrical equipment:</strong> USB outlets and adapters for American outlets</li>
             </ul>
           </div>
         `
      },
      'equipements-emporter': {
        title: 'Equipment to Bring',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-suitcase guide-icon suitcase"></i>Equipment to Bring</h3>
           <div class="guide-popup-content">
             <ul>
               <li><strong>Waterproof bag</strong> to protect your belongings</li>
               <li><strong>Aquatic hiking shoes:</strong> Ideal for walking in water, crossing fords, avoiding slips and hiking without fear of getting your shoes wet</li>
               <li><strong>Sarongs:</strong> A light alternative to beach towels, which dry quickly and take up little space</li>
               <li><strong>Face mask:</strong> Sufficient to enjoy underwater exploration</li>
             </ul>
           </div>
         `
      },
      'conseils-pratiques': {
        title: 'Practical Tips on Site',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-lightbulb guide-icon light"></i>Practical Tips on Site</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-umbrella-beach guide-icon beach"></i>At the Beach</h4>
             <ul>
               <li>The tropical climate sometimes brings sudden showers: a waterproof bag for your towels or sarongs avoids inconveniences</li>
               <li>Sarongs advantageously replace thick towels</li>
               <li>Let beach towels dry outside: this avoids introducing sand fleas (yens yens) responsible for itching</li>
             </ul>

             <h4><i class="fas fa-hiking guide-icon hiking"></i>On Hiking</h4>
             <ul>
               <li>The best shoes are aquatic hiking shoes: they dry quickly, don't slip and are suitable for river crossings</li>
               <li>In the forest, few mosquitoes, but plan a repellent if you visit the mangrove</li>
             </ul>

             <h4><i class="fas fa-water guide-icon water"></i>At Sea</h4>
             <ul>
               <li>For a snorkeling outing, a simple face mask is sufficient (fins optional)</li>
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

    // Copier dans le presse-papiers
    navigator.clipboard
      .writeText(keyText)
      .then(() => {
        // Feedback visuel
        copyButton.classList.add('copied')
        copyButton.textContent = 'Copied !'

        // Remettre le texte original après 2 secondes
        setTimeout(() => {
          copyButton.classList.remove('copied')
          copyButton.textContent = 'Copy'
        }, 2000)
      })
      .catch((err) => {
        console.error('Erreur lors de la copie:', err)
        // Fallback pour les navigateurs plus anciens
        const textArea = document.createElement('textarea')
        textArea.value = keyText
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)

        // Feedback visuel même en cas de fallback
        copyButton.classList.add('copied')
        copyButton.textContent = 'Copied !'

        setTimeout(() => {
          copyButton.classList.remove('copied')
          copyButton.textContent = 'Copy'
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
