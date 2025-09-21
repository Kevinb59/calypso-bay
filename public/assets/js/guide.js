/**
 * Guide Calypso Bay - JavaScript
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
      'Votre maison de vacances à Bouillante, Guadeloupe. Retrouvez ici toutes les informations utiles pour profiter pleinement de votre séjour.'
  },

  // Navigation
  navigation: {
    menu: 'Menu',
    logement: 'Logement',
    localisation: 'Localisation',
    transport: 'Transport',
    commerces: 'Commerces',
    restaurants: 'Restaurants',
    activites: 'Activités',
    excursions: 'Excursions',
    sante: 'Soins & Santé',
    eauElectricite: 'Eau & Électricité',
    cyclones: 'Cyclones',
    infosPratiques: 'Infos Pratiques'
  },

  // Section Hero
  hero: {
    title: 'Bienvenue à',
    brand: 'Calypso Bay',
    description:
      'Votre maison de vacances à Bouillante, Guadeloupe. Retrouvez ici toutes les informations utiles pour profiter pleinement de votre séjour.',
    location: 'Bouillante • Guadeloupe'
  },

  // Sections principales
  sections: {
    logement: 'Logement et équipements',
    localisation: 'Localisation et itinéraires',
    transport: 'Transport et Accès',
    commerces: 'Services et Commerces',
    restaurants: 'Restaurants et Gastronomie',
    activites: 'Activités',
    excursions: 'Excursions',
    sante: 'Soins, Santé & Prévention',
    eauElectricite: 'Eau & Électricité',
    cyclones: 'Cyclones et Alertes Météorologiques',
    infosPratiques: 'Informations Pratiques'
  },

  // Cartes - descriptions communes
  cards: {
    clickToLearnMore: 'Cliquez pour en savoir plus…'
  },

  // Traductions des titres de cartes
  cardTitles: {
    Présentation: 'Présentation',
    'Éclairage & ventilateur du salon': 'Éclairage & ventilateur du salon',
    "La distribution de l'eau chaude": "La distribution de l'eau chaude",
    Internet: 'Internet',
    'Les WC et les eaux usées': 'Les WC et les eaux usées',
    'Filet de sécurité et terrasse': 'Filet de sécurité et terrasse',
    'La gestion des déchets': 'La gestion des déchets',
    'Les volets et les fenêtres': 'Les volets et les fenêtres',
    'La Climatisation': 'La Climatisation',
    'Adresse de Calypso Bay': 'Adresse de Calypso Bay',
    Itinéraires: 'Itinéraires',
    'Accès à la villa': 'Accès à la villa',
    'Loueurs de voiture': 'Loueurs de voiture',
    Taxi: 'Taxi',
    Navette: 'Navette',
    'Carrefour Market': 'Carrefour Market',
    'Leader Price': 'Leader Price',
    'Cap Créole': 'Cap Créole',
    'Four des Iles': 'Four des Iles',
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
    Plongée: 'Plongée',
    Distilleries: 'Distilleries',
    'Maison du Cacao': 'Maison du Cacao',
    'Musée du Rhum': 'Musée du Rhum',
    'Habitation Côte sous le Vent': 'Habitation Côte sous le Vent',
    'Mémorial ACTe': 'Mémorial ACTe',
    Microbrasserie: 'Microbrasserie',
    Aquarium: 'Aquarium',
    'Site de tournage': 'Site de tournage',
    'Plages et snorkeling': 'Plages et snorkeling',
    'Cascades et randonnées': 'Cascades et randonnées',
    'Découvertes en mer': 'Découvertes en mer',
    'Balades et découvertes': 'Balades et découvertes',
    'Services de soins': 'Services de soins',
    'Protection anti-moustiques': 'Protection anti-moustiques',
    'Faune locale': 'Faune locale',
    'Protection solaire': 'Protection solaire',
    'Bains chauds': 'Bains chauds',
    'Bons réflexes': 'Bons réflexes',
    Eau: 'Eau',
    Électricité: 'Électricité',
    'Saison cyclonique': 'Saison cyclonique',
    'La maison en cas de cyclone': 'La maison en cas de cyclone',
    "Gestion de l'eau": "Gestion de l'eau",
    "Contacts d'urgence": "Contacts d'urgence",
    'Taxe de séjour': 'Taxe de séjour',
    'Préparatifs avant le départ': 'Préparatifs avant le départ',
    'Équipements fournis': 'Équipements fournis',
    'Équipements à emporter': 'Équipements à emporter',
    'Conseils pratiques sur place': 'Conseils pratiques sur place'
  },

  // Traductions des tags
  tags: {
    Bistronomique: 'Bistronomique',
    'Saveurs franco-créole': 'Saveurs franco-créole',
    'Saveurs créoles': 'Saveurs créoles',
    Grillades: 'Grillades',
    Pizzeria: 'Pizzeria',
    Drive: 'Drive',
    'Sur place': 'Sur place',
    'A emporter': 'A emporter',
    Supermarché: 'Supermarché',
    Poissonnerie: 'Poissonnerie',
    Boulangerie: 'Boulangerie',
    Boucherie: 'Boucherie',
    'Fruits et Légumes': 'Fruits et Légumes',
    'Côtière nord': 'Côtière nord',
    'La traversée': 'La traversée',
    'Environ 80€': 'Environ 80€',
    Économique: 'Économique',
    'CARAÏBE KAYAK': 'CARAÏBE KAYAK',
    'GWADA PAGAIE': 'GWADA PAGAIE',
    'Les Heures Saines': 'Les Heures Saines',
    Bologne: 'Bologne',
    Longueteau: 'Longueteau',
    'Pointe-Noire': 'Pointe-Noire',
    Dégustation: 'Dégustation',
    'Sainte-Rose': 'Sainte-Rose',
    Culture: 'Culture',
    Patrimoine: 'Patrimoine',
    'Pointe-à-Pitre': 'Pointe-à-Pitre',
    Histoire: 'Histoire',
    'Bière locale': 'Bière locale',
    Gosier: 'Gosier',
    'Faune marine': 'Faune marine',
    Deshaies: 'Deshaies',
    'Meurtres au paradis': 'Meurtres au paradis',
    Plages: 'Plages',
    Snorkeling: 'Snorkeling',
    Cascades: 'Cascades',
    Randonnées: 'Randonnées',
    Plongée: 'Plongée',
    Excursions: 'Excursions',
    Culture: 'Culture',
    Patrimoine: 'Patrimoine',
    '717 rue de Poirier, BOUILLANTE': '717 rue de Poirier, BOUILLANTE'
  },

  // Autres textes à traduire
  otherTexts: {
    'Adresse : 717 rue de Poirier, Bouillante':
      'Adresse : 717 rue de Poirier, Bouillante',
    'Check-in : 15h00': 'Arrivée : 15h00',
    'Check-out : 10h00': 'Départ : 10h00'
  },

  // Footer
  footer: {
    brand: 'Calypso Bay',
    contactTitle: 'Pour toute question, contactez-nous :',
    email: 'contact@calypso-bay.com',
    phone: '+590 • • • • • • •',
    infosTitle: 'Infos pratiques',
    address: 'Adresse : 717 rue de Poirier, Bouillante',
    checkin: 'Check-in : 15h00',
    checkout: 'Check-out : 10h00',
    copyright: '© 2025 Calypso Bay. Guide locataire.'
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

    // Données des popups
    this.popupData = {
      presentation: {
        title: 'Présentation',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Présentation</h3>
          <div class="guide-popup-content">
            <p>L'architecte qui a construit la maison s'appelle <strong>Monsieur Laurent DARVIOT</strong>. Il est très sensible à l'écologie ce qui explique l'équipement dès le début d'un double système d'alimentation en eau, avec en particulier une utilisation de l'eau de pluie pour les toilettes.</p>
            <ul>
              <li>L'eau chaude des douches est produite par <strong>chauffe-eau solaire</strong></li>
              <li>Une partie de <strong>l'éclairage extérieur</strong> est solaire</li>
              <li>Monsieur DARVIOT est le premier architecte à avoir construit un <strong>immeuble autonome en Guadeloupe</strong> (résidence MALDYVES à GOYAVE) pour lequel il a reçu le prix résidentiel des <em>Trophées Bâtiments Résilients</em> en 2022</li>
              <li>Dans notre maison, il a prévu de nombreuses ouvertures pour favoriser la <strong>circulation d'air</strong>, complétée par des ventilateurs moins énergivores qu'une climatisation</li>
              <li>Les chambres sont <strong>climatisées</strong> pour améliorer le confort pendant le sommeil</li>
              <li>Tous les ans une société spécialisée passe afin de <strong>contrôler l'installation et nettoyer les filtres</strong></li>
            </ul>
          </div>
        `
      },
      eclairage: {
        title: 'Éclairage & ventilateur du salon',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-lightbulb guide-icon light"></i>Éclairage & ventilateur du salon</h3>
          <div class="guide-popup-content">
            <p><i class="fas fa-power-off guide-icon power"></i> <strong>Interrupteur général :</strong> L'interrupteur général du salon est celui situé à côté de la porte d'accès à la chambre du fond. Il permet l'alimentation en électricité du ventilateur et de la lampe.</p>
            <p><i class="fas fa-lightbulb guide-icon light"></i> <strong>Télécommande LEXMAN (éclairage) :</strong> L'éclairage est dépendant de la petite télécommande LEXMAN. Pour allumer et éteindre, il suffit d'appuyer sur le bouton représentant un cercle interrompu d'une barre.</p>
            <img src="images/guide/24.webp" alt="Télécommande LEXMAN"/>
            <p><i class="fas fa-fan guide-icon fan"></i> <strong>Télécommande FANELITE (ventilateur) :</strong> Le ventilateur dépend de la télécommande FANELITE :</p>
            <ul>
              <li>Mise en route : Appuyer sur le symbole I en haut de la commande</li>
              <li>Arrêt : Appuyer sur le cercle à droite</li>
            </ul>
            <img src="images/guide/23.webp" alt="Télécommande FANELITE"/>
            <p><i class="fas fa-lightbulb guide-icon light"></i> <strong>Éclairage du ventilateur :</strong> Il existe également un éclairage à la base du ventilateur dont l'utilisation est commandée par le symbole représentant une ampoule.</p>
          </div>
        `
      },
      eauchaude: {
        title: "La distribution de l'eau chaude",
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-tint guide-icon water"></i>La distribution de l'eau chaude</h3>
          <div class="guide-popup-content">
            <p>Ceci concerne l'eau des lavabos et surtout des douches. Comme dans beaucoup de pays où le soleil est souvent présent, la maison est équipée d'un chauffe-eau solaire (panneau solaire et réservoir) dont la position sur la toiture se situe près de l'entrée de la maison.</p>
            <p>La taille du réservoir est celle préconisée par l'architecte pour une maison de six personnes. Les caractéristiques de l'appareil et sa situation par rapport à la disposition des chambres amènent à deux précisions :</p>
            <img src="images/guide/28.webp" alt="Chauffe-eau solaire - Distribution eau chaude"/>
            <ul>
              <li><strong>Fonctionnement solaire :</strong> Par définition, le dispositif solaire fonctionne la journée et non la nuit. Il en résulte que si la totalité du réservoir a été utilisée dans la soirée, l'eau des douches sera tiède le lendemain matin mais se réchauffera automatiquement au cours de la journée.</li>
              <li><strong>Disposition :</strong> Le chauffe-eau est plus proche de l'entrée et des deux premières chambres que de la troisième qui en est plus éloignée. La conséquence en est que les deux premières douches vont bénéficier de l'eau chaude plus rapidement que la troisième en raison de son éloignement, sans pour autant qu'il s'agisse d'un dysfonctionnement.</li>
            </ul>
          </div>
        `
      },
      internet: {
        title: 'Internet',
        content: `
          <h3 class="guide-popup-title"><i class="fas fa-wifi guide-icon wifi"></i>Internet</h3>
          <div class="guide-popup-content">
            <p>La box Orange se situe dans le cellier, les codes pour la connexion dans le livret d'accueil, la TV est reliée à la box.</p>
                         <div class="wifi-key-container">
               <p><strong>Livebox 66A0 clé :</strong> <span id="wifi-key">ES6EZy7ZtLTZoKDTtp</span><button onclick="copyWifiKey()" class="copy-button" title="Copier la clé WiFi">Copier</button></p>
             </div>
            <p><strong>L'équipement est high speed VDSL par le câble :</strong></p>
            <ul>
              <li>Envoi de données : 6.41 mbits</li>
              <li>Réception de données : 28.8 mbits</li>
            </ul>
            <p>La commune commence à s'équiper de la fibre mais, à capacité équivalente, le <strong>réseau est aérien, fragile, et exposé aux aléas du climat</strong> (en particulier aux vents), ce qui explique le choix du <strong>câble VDSL pour le moment</strong>.</p>
          </div>
        `
      },
      wc: {
        title: 'Les WC et les eaux usées',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-toilet guide-icon toilet"></i>Les WC et les eaux usées</h3>
           <div class="guide-popup-content">
             <p>Toutes les nouvelles habitations sur les hauteurs de Basse-Terre doivent maintenant être équipées d'une <strong>mini station d'épuration individuelle</strong> lors de la construction.</p>
             <img src="images/guide/26.webp" alt="Mini station d'épuration - WC et eaux usées"/>
             <p><strong>Pour préserver leur bon fonctionnement :</strong></p>
             <ul>
               <li>Ne mettre dans la cuvette des WC que du <strong>papier toilette sec</strong> (en rouleaux)</li>
               <li><strong>Ne pas y déposer de lingettes</strong> ou autre dispositif (fessnet, lotus, etc.)</li>
               <li>Le papier sec se délite au contact de l'humidité et <strong>ne bouche pas</strong> les canalisations</li>
               <li>Le papier toilette humide relève d'une composition proche de celle des lingettes, <strong>obstrue les canalisations</strong> et donc perturbe le traitement des eaux usées</li>
             </ul>
             <p><strong>Merci en cas d'utilisation de papier humide de le jeter dans la poubelle et non dans la cuvette des WC.</strong></p>
             <p>Les produits que nous utilisons (nettoyage du sol, produits WC) sont compatibles avec le bon fonctionnement d'une fosse septique et il convient d'éviter d'utiliser des liquides javellisés.</p>
           </div>
         `
      },
      filet: {
        title: 'Filet de sécurité et terrasse',
        content: `
            <h3 class="guide-popup-title"><i class="fas fa-shield-alt guide-icon shield"></i>Filet de sécurité et terrasse</h3>
            <div class="guide-popup-content">
              <p>La maison est équipée d'un <strong>filet de sécurité</strong> placé entre la piscine et la terrasse. Malgré sa résistance, ce <strong>n'est pas un hamac</strong> sur lequel on peut s'allonger (comme sur les catamarans), il se veut un <strong>élément de sécurité en cas de chute accidentelle</strong>, et donc merci de lui réserver cette vocation afin qu'il garde son efficacité.</p>
              <img src="images/guide/25.webp" alt="Filet de sécurité - Terrasse et piscine"/>
              <p><strong>IMPORTANT :</strong></p>
              <ul>
                <li>La terrasse <strong>n'a pas de balustrade</strong>, et la piscine <strong>pas de barrière de sécurité</strong></li>
                <li>Cette option est volontaire de notre part afin de préserver une <strong>belle vue dégagée sur la baie et les îlets</strong></li>
                <li>Ce point particulier ne pose pas de problème aux adultes qui apprécient en général l'initiative</li>
                <li>Pour cette raison, nous <strong>déconseillons sur le site de réservation la maison aux familles avec de jeunes enfants (moins de 8 ans)</strong> car elle peut se révéler dangereuse dans la zone terrasse - piscine</li>
              </ul>
            </div>
          `
      },
      dechets: {
        title: 'La gestion des déchets',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-trash guide-icon trash"></i>La gestion des déchets</h3>
           <div class="guide-popup-content">
             <p>Gros problème en Guadeloupe (pour avoir une poubelle il nous a fallu l'acheter dans le commerce, nous attendons toujours celle de la mairie depuis deux ans).</p>
             <ul>
               <li>Le ramassage se fait pendant la <strong>nuit du dimanche au lundi</strong></li>
               <li>En ce qui concerne les bouteilles en verre ou en plastique, il existe des bornes de dépôt le long des routes, la plus proche étant située <strong>en face de Carrefour Market</strong></li>
             </ul>
             <img src="images/guide/29.webp" alt="Bornes de recyclage - Gestion des déchets"/>
           </div>
         `
      },
      volets: {
        title: 'Les volets électriques et les fenêtres des chambres',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-window-maximize guide-icon window"></i>Les volets électriques et les fenêtres des chambres</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>LES VOLETS ÉLECTRIQUES</h4>
             <p><strong>ATTENTION :</strong></p>
             <p>Merci de vérifier que rien ne perturbe la fermeture des volets électriques (fauteuils de terrasse en particulier) au risque de les bloquer et de ne pouvoir fermer efficacement la maison en votre absence (c'est déjà arrivé).</p>
             <img src="images/guide/27.webp" alt="Volets électriques - Précautions"/>
             <h4><i class="fas fa-window-restore guide-icon window"></i>LES FENÊTRES DES CHAMBRES</h4>
             <p>Les volets des fenêtres s'ouvrent et se ferment en utilisant la <strong>manivelle</strong> fixée sur le côté du cadre.</p>
             <p>Malheureusement, les cardans de ces manivelles sont très fragiles (c'est un défaut de conception que nous avons signalé au fabricant).</p>
             <p><strong>Merci de ne pas forcer lors des manœuvres d'ouverture et fermeture.</strong></p>
           </div>
         `
      },
      climatisation: {
        title: 'La Climatisation',
        content: `
            <h3 class="guide-popup-title"><i class="fas fa-snowflake guide-icon snowflake"></i>La Climatisation</h3>
            <div class="guide-popup-content">
              <p>L'électricité en Guadeloupe est malheureusement en grande partie d'origine fossile (donc, <strong>d'importation</strong>). La ville de Bouillante bénéficie d'une participation de la centrale géothermique, salvatrice en cas de coupure d'électricité sur le réseau, mais ne permettant pas de jouir pour autant d'un tarif moins élevé.</p>
              <p>De façon regrettable, les énergies « <strong>propres</strong> » sont peu représentées.</p>
              <p><strong>Pour des raisons d'économie et d'écologie :</strong></p>
              <ul>
                <li>Merci de couper les climatiseurs grâce à leur <strong>télécommande</strong> en dehors des périodes d'occupation des chambres</li>
                <li>Veiller à ce que <strong>portes et fenêtres</strong> soient fermées pendant leur fonctionnement</li>
              </ul>
              <p>Comme dit précédemment, <strong>tous les ans</strong> une société spécialisée passe afin de contrôler l'installation et nettoyer les filtres.</p>
            </div>
          `
      },
      adresse: {
        title: 'Adresse de Calypso Bay',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Adresse de Calypso Bay</h3>
           <div class="guide-popup-content">
             <p><strong>717 rue de POIRIER, BOUILLANTE</strong></p>
             <h4><i class="fas fa-route guide-icon route"></i>Depuis l'aéroport Pôle Caraïbes</h4>
             <p><strong>Deux possibilités pour arriver sur la côte Ouest :</strong></p>
             <ul>
               <li><strong>Route côtière nord :</strong> Par Le Lamentin, Sainte-Rose (plus longue et encombrée, mais conseillée par très mauvais temps, plus plate et moins sinueuse)</li>
               <li><strong>Route de la traversée :</strong> Plus directe et moins chargée (recommandée par beau temps, plus sinueuse et pentue)</li>
             </ul>
             <p><em>La route de la traversée est magnifique, les Alpes au milieu de la jungle.</em></p>
             <p><strong>Pour emprunter la route côtière nord :</strong> Ajoutez une étape par Sainte-Rose à votre itinéraire, sinon pour la route de la traversée, indiquez simplement l'adresse de la villa.</p>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=717+Rue+de+Poirier+Bouillante+Guadeloupe" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation vers Calypso Bay
               </a>
             </div>
           </div>
         `
      },
      itineraires: {
        title: 'Itinéraires',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-map-signs guide-icon map"></i>Itinéraires</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-route guide-icon route"></i>Route côtière nord</h4>
             <p>Itinéraire plus long mais plus sûr par mauvais temps.</p>
             <p><strong>Distance : 68 km</strong></p>
             <img src="images/guide/20.webp" alt="Route côtière nord"/>
             <h4 style="margin-top: 30px"><i class="fas fa-route guide-icon route"></i>Route de la traversée</h4>
             <p>Itinéraire direct et panoramique recommandé par beau temps.</p>
             <p><strong>Distance : 46 km</strong></p>
             <img src="images/guide/21.webp" alt="Route de la traversée"/>
           </div>
         `
      },
      acces: {
        title: 'Accès à la villa',
        content: `
            <h3 class="guide-popup-title"><i class="fas fa-mountain guide-icon mountain"></i>Accès à la villa</h3>
            <div class="guide-popup-content">
              <img src="images/guide/22.webp" alt="Rue de Poirier - Accès à Calypso Bay"/>
              <p><strong>La rue de Poirier :</strong> Elle monte de façon assez prononcée. Lors de votre progression :</p>
              <ul>
                <li>Dépasser les résidences du <strong>"JARDIN TROPICAL"</strong> à gauche</li>
                <li>L'entrée de la maison se situe immédiatement après le <strong>"JARDIN ZEN"</strong> (trois petits bungalows blancs et bleus à gauche)</li>
              </ul>
              <p><strong>Vous êtes arrivés, BIENVENUE !</strong></p>
              <h4><i class="fas fa-info-circle guide-icon info"></i>Conseils pratiques</h4>
              <ul>
                <li>Préférer la route de la traversée (plus rapide)</li>
                <li>Attention aux lacets et à la montée</li>
                <li>Éviter par grosse pluie (route glissante)</li>
                <li>Repérer les panneaux "Parc de la Source" et "Poirier"</li>
              </ul>
            </div>
          `
      },
      loueurs: {
        title: 'Loueurs de voiture',
        content: `
              <h3 class="guide-popup-title"><i class="fas fa-car guide-icon car"></i>Loueurs de voiture</h3>
              <div class="guide-popup-content">
                <p><strong>Conseil :</strong> Réservez à l'avance, surtout en haute saison.</p>
                <h4><i class="fas fa-building guide-icon building"></i>Loueur recommandé</h4>
                <ul>
                  <li><strong><a href="https://www.pro-rent.com/" target="_blank" style="color: var(--color-primary); text-decoration: none;">PRO-rent</a> :</strong> Le meilleur loueur est PRO-rent à Jarry. C'est le meilleur rapport qualité/prix, une entreprise locale qui est très sérieuse. Ils viennent nous chercher à l'aéroport en navette sur un appel de notre part, et les locations s'effectuent via le net.</li>
                </ul>
                <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
                  <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,6/5 (Google, 314 avis)</p>
                  <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Entreprise locale sérieuse avec excellent rapport qualité-prix</p>
                </div>
                <h4 style="margin-top: 30px"><i class="fas fa-building guide-icon building"></i>Autres loueurs</h4>
                <ul>
                  <li><strong><a href="https://www.hertzantilles.com/fr/location-de-voiture-guadeloupe" target="_blank" style="color: var(--color-primary); text-decoration: none;">Hertz</a> :</strong> Aéroport Pôle Caraïbes</li>
                  <li><strong><a href="https://www.avis.fr/" target="_blank" style="color: var(--color-primary); text-decoration: none;">Avis</a> :</strong> Aéroport et Pointe-à-Pitre</li>
                  <li><strong><a href="https://www.europcar-guadeloupe.com/agences/aeroport-pointe-a-pitre" target="_blank" style="color: var(--color-primary); text-decoration: none;">Europcar</a> :</strong> Aéroport et plusieurs agences sur l'île</li>
                </ul>
                <p><strong>Cliquez sur les noms des loueurs ou sur les tags au-dessus de l'image pour accéder directement à leurs sites.</strong></p>
              </div>
            `
      },
      taxi: {
        title: 'Taxi',
        content: `
            <h3 class="guide-popup-title"><i class="fas fa-taxi guide-icon taxi"></i>Taxi</h3>
            <div class="guide-popup-content">
              <h4><i class="fas fa-plane guide-icon plane"></i>Depuis l'aéroport Pôle Caraïbes</h4>
              <p><strong>Distance :</strong> 45 minutes en voiture</p>
              <p><strong>Prix :</strong> Environ 80€ l'aller</p>
              <h4><i class="fas fa-info-circle guide-icon info"></i>Informations pratiques</h4>
              <ul>
                <li>Réserver à l'avance pour éviter l'attente</li>
                <li>Prix fixe depuis l'aéroport vers Bouillante</li>
                <li>Possibilité de partager le trajet avec d'autres voyageurs</li>
                <li>Paiement en espèces ou par carte</li>
              </ul>
            </div>
          `
      },
      carrefour: {
        title: 'Carrefour Market',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-shopping-cart guide-icon shopping"></i>Carrefour Market</h3>
           <div class="guide-popup-content">
             <p>Moyenne surface sur la N2 vers Pointe-Noire, permet de faire le gros des courses nécessaires au séjour.</p>
             <img src="images/guide/02.webp" alt="Carrefour Market"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Carrefour+Market+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
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
             <p>En vis-à-vis de Carrefour Market, plus rustique mais très intéressant au niveau des prix avec des produits de bonne qualité.</p>
             <img src="images/guide/03.webp" alt="Leader Price"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Leader+Price+Pigeon+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
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
             <p>Un peu avant Carrefour Market sur la N2. Les pêcheurs locaux déposent leur poisson qui est traité sur place :</p>
             <ul>
               <li>Poisson frais nettoyé et préparé</li>
               <li>Steaks de thon, espadon ou marlin à cuire</li>
               <li>Rillettes de thon ou marlin</li>
               <li>Mi-cuit de thon, carpaccio</li>
             </ul>
             <p><em>Un peu cher mais qualité extraordinaire !</em></p>
             <img src="images/guide/05.webp" alt="Cap Créole - Poisson frais"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1598,-61.7751?q=Cap+Créole+Pigeon+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> ≈ 4,8/5 sur Petit Futé selon 58 avis</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Réputation d'excellence dans les produits de la mer — marque leader spécialisée dans les poissons fumés des Caraïbes, forte présence locale depuis 1996</p>
             </div>
           </div>
         `
      },
      fourdesiles: {
        title: 'Four des Iles',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-bread-slice guide-icon bread"></i>Four des Iles</h3>
           <div class="guide-popup-content">
             <p>Juste à côté de Carrefour Market, pain excellent et traiteur (pizzas maison, rôti de porc, poulet grillé, pâtisseries).</p>
             <p><strong>Horaires :</strong> Ouvert le dimanche matin, fermé le lundi.</p>
             <img src="images/guide/04.webp" alt="Four des Iles - Boulangerie"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1610,-61.7745?q=Four+des+Iles+Boulangerie+Pigeon" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,1/5 (Google, 73 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Boulangerie-pâtisserie du centre commercial de Pigeon, appréciée pour ses produits variés et pratiques</p>
             </div>
           </div>
         `
      },
      titaurus: {
        title: 'Ti Taurus',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-drumstick-bite guide-icon meat"></i>Ti Taurus</h3>
           <div class="guide-popup-content">
             <p>À proximité de Carrefour Market, prendre à pied la petite rue entre le supermarché et la boulangerie. Viandes diverses, brochettes, etc.</p>
             <img src="images/guide/06.webp" alt="Boucherie traiteur Ti Taurus"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1613,-61.7753?q=Boucherie+traiteur+Ti+Taurus+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,7/5 (Google, 15 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Boucherie-traiteur locale (viandes, plats à emporter, produits du terroir), accueil bien noté</p>
             </div>
           </div>
         `
      },
      chezadele: {
        title: 'Chez Adèle',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-apple-alt guide-icon fruit"></i>Chez Adèle</h3>
           <div class="guide-popup-content">
             <p>Sur la N2, à gauche dans la direction nord. Fruits et légumes excellents.</p>
             <p><strong>Conseil :</strong> Bien préciser si c'est pour consommation immédiate ou le lendemain (pour les avocats par exemple). Adèle est incollable sur la qualité de ses produits.</p>
             <p><em>Dites que vous venez de la part de Fanny, elle se souviendra peut-être et vous gâtera !</em></p>
             <img src="images/guide/01.webp" alt="Chez Adèle - Fruits et Légumes"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Chez+Adèle+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,7/5 (Google, 23 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Épicerie fruits et légumes locaux de qualité, vendeuse réputée pour ses conseils (choix selon maturité)</p>
             </div>
           </div>
         `
      },
      latouna: {
        title: 'La Touna',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-utensils guide-icon restaurant"></i>La Touna</h3>
           <div class="guide-popup-content">
             <p>Bon niveau de cuisine, environnement sympa.</p>
             <img src="images/guide/07.webp" alt="La Touna - Restaurant"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=La+Touna+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,5/5 (moyenne sur 1 018 avis vérifiés)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Cuisine raffinée, belle vue mer, plats bien dressés et service chaleureux</p>
             </div>
           </div>
         `
      },
      chezdidier: {
        title: 'Chez Didier',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-utensils guide-icon restaurant"></i>Chez Didier</h3>
           <div class="guide-popup-content">
             <p>Cuisine excellente, patron très sympathique.</p>
             <img src="images/guide/08.webp" alt="Chez Didier - Restaurant"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Chez+Didier+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> Environ 4,5/5 sur Google (201 avis, "Wonderful") et 4,0/5 sur TripAdvisor (136 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Très souvent recommandé pour son accueil et la qualité de service (serveur Alexandre apprécié)</p>
             </div>
           </div>
         `
      },
      sunsetb: {
        title: 'Sunset B',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-utensils guide-icon restaurant"></i>Sunset B</h3>
           <div class="guide-popup-content">
             <p>TOP ! Cadre cosy, produits frais.</p>
             <img src="images/guide/09.webp" alt="Sunset B - Restaurant"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Le+Sunset+B+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,7/5 sur TripAdvisor (438 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> "Super sympas, on mange frais et local" (avis Facebook)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Menu créatif qui change chaque jour, produits frais locaux, ambiance conviviale en terrasse avec bar à punch</p>
             </div>
           </div>
         `
      },
      auxdeuxcoquilles: {
        title: 'Aux Deux Coquilles',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-utensils guide-icon restaurant"></i>Aux Deux Coquilles</h3>
           <div class="guide-popup-content">
             <p>Bon et pas cher, plus "local".</p>
             <img src="images/guide/10.webp" alt="Aux Deux Coquilles - Restaurant"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Les+Deux+Coquilles+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,6/5 (TripAdvisor, 28 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Plancher d'un guide des meilleures tables de Bouillante pour sa cuisine traditionnelle généreuse, accueil chaleureux avec vue mer</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Cuisine créole simple et copieuse face à la mer, vrai moment convivial</p>
             </div>
           </div>
         `
      },
      frankogrill: {
        title: 'Franko Grill',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-fire guide-icon grill"></i>Franko Grill</h3>
           <div class="guide-popup-content">
             <p>Bon et pas cher, plus "local".</p>
             <img src="images/guide/11.webp" alt="Franko Grill - Restaurant"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Franko+Grill+Restaurant+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,8/5 sur Google (189 avis), 4,5/5 sur TripAdvisor (91 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Très apprécié pour les grillades authentiques, la tendreté des viandes et l'ambiance locale avec musique et punch</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Génial rapport qualité-prix, portions généreuses, atmosphère simple et conviviale</p>
             </div>
           </div>
         `
      },
      oganik: {
        title: 'Oganik',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-pizza-slice guide-icon pizza"></i>Oganik</h3>
           <div class="guide-popup-content">
             <p>En face du restaurant La Touna.</p>
             <img src="images/guide/12.webp" alt="Oganik - Pizzeria"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Oganik+Pizzeria+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,6/5 (TripAdvisor, 70 avis) et environ 4,7/5 (Google, 251 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Qualifié de "pépite" pour ses pizzas au feu de bois authentiques, haute qualité des ingrédients et ambiance agréable</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Pizzeria-rotisserie moderne en bord de mer, cuisine italienne conviviale et savoureuse</p>
             </div>
           </div>
         `
      },
      allopizza: {
        title: 'Allo Pizza',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-pizza-slice guide-icon pizza"></i>Allo Pizza</h3>
           <div class="guide-popup-content">
             <p>Derrière Carrefour Market.</p>
             <img src="images/guide/13.webp" alt="Allo Pizza - Pizzeria"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Allo+Pizza+Pizzeria+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> ≈ 3,0/5 (Google, 58 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Pratique pour sa livraison</p>
             </div>
           </div>
         `
      },
      lecoeurdepigeon: {
        title: 'Le Cœur de Pigeon',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-pizza-slice guide-icon pizza"></i>Le Cœur de Pigeon</h3>
           <div class="guide-popup-content">
             <p>Excellentes pizzas pâte fine.</p>
             <img src="images/guide/14.webp" alt="Le Cœur de Pigeon - Pizzeria"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Le+Cœur+de+Pigeon+Pizzeria+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Avis Facebook : « Super pizza pour une superbe vue. L'équipe très agréable. Je recommande ! »</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Concept bar/pizzeria sur place ou à emporter, avec terrasse en bord de mer ; l'équipe est décrite comme très agréable</p>
             </div>
           </div>
         `
      },
      kayak: {
        title: 'Kayak',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-kayak guide-icon kayak"></i>Kayak</h3>
           <div class="guide-popup-content">
             <p>Sur la plage de Malendure pour explorer la <strong>Réserve Cousteau</strong> et les îlets Pigeon.</p>
             <h4><i class="fas fa-building guide-icon building"></i>Loueurs recommandés</h4>
             <p><em>Cliquez sur les noms des loueurs pour ouvrir la navigation GPS :</em></p>
             <ul>
               <li><strong><a href="geo:16.1581,-61.7761?q=CARAÏBE+KAYAK+bouillante" style="color: var(--color-primary); text-decoration: none;">CARAÏBE KAYAK</a>:</strong> Location de kayaks pour explorer la Réserve Cousteau</li>
               <li><strong><a href="geo:16.1581,-61.7761?q=GWADA+PAGAIE+bouillante" style="color: var(--color-primary); text-decoration: none;">GWADA PAGAIE</a>:</strong> Location et excursions guidées</li>
             </ul>
             <img src="images/guide/48.webp" alt="Kayak - Plage de Malendure"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Plage+Malendure+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
           </div>
         `
      },
      plongee: {
        title: 'Plongée',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-diving-helmet guide-icon diving"></i>Plongée</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-water guide-icon water"></i>Clubs de plongée</h4>
             <p><strong>Les Heures Saines (Bouillante) :</strong> Club de plongée réputé pour explorer la Réserve Cousteau.</p>
             <img src="images/guide/49.webp" alt="Plongée - Réserve Cousteau"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Les+Heures+Saines+Plongée+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,8/5 (Google, 649 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Très apprécié pour la sécurité, l'accueil et la qualité du matériel</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Club installé à Malendure depuis 1987, référence pour explorer la réserve Cousteau</p>
             </div>
           </div>
         `
      },
      distilleries: {
        title: 'Distilleries',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-industry guide-icon industry"></i>Distilleries</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-wine-bottle guide-icon bottle"></i>Distilleries réputées</h4>
             <ul>
               <li><strong>Bologne (Basse-Terre) :</strong> Visite et boutique souvenirs</li>
               <li><strong>Longueteau :</strong> Rhum agricole traditionnel</li>
               <li><strong>Damoiseau :</strong> Rhum de qualité</li>
               <li><strong>Montebello :</strong> Rhum premium</li>
               <li><strong>Séverin :</strong> Rhum artisanal</li>
               <li><strong>Rhum Karukera :</strong> Rhum local</li>
               <li><strong>Rhum Raymonenq :</strong> Rhum traditionnel</li>
             </ul>
             <img src="images/guide/50.webp" alt="Distilleries de Guadeloupe"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Distillerie+Bologne+Basse-Terre" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
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
             <p><strong>Pointe-Noire :</strong> Immersion gourmande dans la culture du cacao.</p>
             <p>Découvrez l'histoire du cacao en Guadeloupe et dégustez les produits locaux.</p>
             <img src="images/guide/51.webp" alt="Maison du Cacao - Pointe-Noire"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Maison+du+Cacao+Pointe-Noire" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,4/5 (Google, 3 400 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Souvent recommandé pour ses explications claires et ses dégustations</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Écomusée vivant sur la culture du cacao, balade dans le jardin et démonstrations</p>
             </div>
           </div>
         `
      },
      museerhum: {
        title: 'Musée du Rhum',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-wine-bottle guide-icon bottle"></i>Musée du Rhum</h3>
           <div class="guide-popup-content">
             <p><strong>Sainte-Rose :</strong> Culture locale et dégustations.</p>
             <p>Découvrez l'histoire du rhum en Guadeloupe et dégustez les meilleurs rhums locaux.</p>
             <img src="images/guide/52.webp" alt="Musée du Rhum - Sainte-Rose"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Musée+du+Rhum+Sainte-Rose" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,2/5 (Google, 189 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Recommandé pour découvrir l'histoire du rhum et les traditions locales</p>
             </div>
           </div>
         `
      },
      habitation: {
        title: 'Habitation Côte-sous-le-Vent',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-landmark guide-icon landmark"></i>Habitation Côte-sous-le-Vent</h3>
           <div class="guide-popup-content">
             <p><strong>Pointe-Noire :</strong> Patrimoine et histoire.</p>
             <p>Découvrez l'histoire de cette habitation et son importance dans le patrimoine guadeloupéen.</p>
             <img src="images/guide/53.webp" alt="Habitation Côte-sous-le-Vent - Pointe-Noire"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Habitation+Côte-sous-le-Vent+Pointe-Noire" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 3,9/5 (Google, 370 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Recommandé pour son cadre verdoyant et son aspect culturel</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Ancienne « Maison du Bois », aujourd'hui parc botanique et musée des traditions</p>
             </div>
           </div>
         `
      },
      memorialacte: {
        title: 'Mémorial ACTe',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-monument guide-icon monument"></i>Mémorial ACTe</h3>
           <div class="guide-popup-content">
             <p><strong>Pointe-à-Pitre :</strong> Centre caribéen d'expressions et de mémoire de la traite des esclaves.</p>
             <p>Un lieu de mémoire important pour comprendre l'histoire de la Guadeloupe et de la Caraïbe.</p>
             <img src="images/guide/54.webp" alt="Mémorial ACTe - Pointe-à-Pitre"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Mémorial+ACTe+Pointe-à-Pitre" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,3/5 (Google, 4 496 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Lieu incontournable de mémoire sur l'esclavage, souvent cité comme visite essentielle en Guadeloupe</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Musée moderne et symbolique, expositions permanentes et temporaires, reconnu internationalement</p>
             </div>
           </div>
         `
      },
      microbrasserie: {
        title: 'Microbrasserie',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-beer guide-icon beer"></i>Microbrasserie</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-beer guide-icon beer"></i>Microbrasserie de la Lézarde (Petit-Bourg, Vernou)</h4>
             <p>Située à 500 m de l'entrée du sentier de la cascade. Ouverte à partir de 11h30, fermée dimanche et lundi.</p>
             <img src="images/guide/55.webp" alt="Microbrasserie de la Lézarde"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Microbrasserie+de+la+Lézarde+Petit-Bourg" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 4,8/5 (Google, 1 596 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Très apprécié pour la qualité des bières artisanales et le cadre tropical</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Beer garden convivial au bord de la rivière, bières locales originales et ambiance musicale</p>
             </div>
           </div>
         `
      },
      aquarium: {
        title: 'Aquarium',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-fish guide-icon fish"></i>Aquarium</h3>
           <div class="guide-popup-content">
             <p><strong>Aquarium de Guadeloupe (Gosier) :</strong> Découverte de la faune marine.</p>
             <p>Explorez la richesse de la faune marine des Caraïbes dans cet aquarium exceptionnel.</p>
             <img src="images/guide/56.webp" alt="Aquarium de Guadeloupe - Gosier"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Aquarium+de+Guadeloupe+Gosier" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
             <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-style: italic;"><strong style="font-style: italic;">Note :</strong> 3,9/5 (Google, 2 500 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Recommandation :</strong> Considéré comme l'un des aquariums incontournables des Antilles</p>
               <p style="margin: 5px 0 0 0; font-style: italic;"><strong style="font-style: italic;">Commentaire :</strong> Situé à la marina du Gosier, propose plus de 80 espèces de poissons et 50 espèces de coraux, avec bassins pédagogiques</p>
             </div>
           </div>
         `
      },
      sitetournage: {
        title: 'Site de tournage',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-video guide-icon video"></i>Site de tournage</h3>
           <div class="guide-popup-content">
             <p><strong>Site de tournage de la série "Meurtres au paradis" (Deshaies) :</strong></p>
             <p>Promenade dans le village, souvent animé par les équipes de tournage. Découvrez les lieux de tournage de cette série populaire.</p>
             <img src="images/guide/57.webp" alt="Site de tournage - Deshaies"/>
             <div style="margin-top: 20px; text-align: center">
               <a href="geo:16.1581,-61.7761?q=Deshaies+Site+Tournage+Meurtres+Paradis" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                 <i class="fas fa-location-arrow"></i>
                 Ouvrir la navigation
               </a>
             </div>
           </div>
         `
      },
      plages: {
        title: 'Plages et snorkeling',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-umbrella-beach guide-icon beach"></i>Plages et snorkeling</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-water guide-icon water"></i>Plage de Malendure (Bouillante)</h4>
             <p>Sable noir, observation des tortues (surtout côté nord, Petit Malendure). Snorkeling et location de kayaks pour rejoindre les îlets Pigeon (Réserve Cousteau).</p>

             <h4><i class="fas fa-water guide-icon water"></i>Plage de Petite Anse (Bouillante)</h4>
             <p>Plage sauvage avec sable blond et galets. Snorkeling riche (poissons de récif, coraux, calamars, parfois tortues).</p>

             <h4><i class="fas fa-water guide-icon water"></i>Plage Leroux (Ferry, Deshaies)</h4>
             <p>Petite plage de sable blond, très beau site de snorkeling (poissons coffres, calamars…). Fréquentée aussi par des iguanes le matin.</p>

             <h4><i class="fas fa-water guide-icon water"></i>Plages de Grande Anse et Anse de la Perle (Deshaies)</h4>
             <p>Immenses plages de sable blond, magnifiques mais attention aux rouleaux.</p>

             <h4><i class="fas fa-water guide-icon water"></i>Plage de Petite Anse (Deshaies)</h4>
             <p>Spot agréable pour une baignade plus calme.</p>

             <img src="images/guide/58.webp" alt="Plages et snorkeling"/>
           </div>
         `
      },
      cascades: {
        title: 'Cascades et randonnées',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-mountain guide-icon mountain"></i>Cascades et randonnées</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-water guide-icon water"></i>Cascade du Trou à Diable (Bouillante)</h4>
             <p>Près du Parc de la Source, accessible par un sentier agréable et ombragé. Prudence en cas de fortes pluies.</p>

             <h4><i class="fas fa-water guide-icon water"></i>Saut d'Acomat (Pointe-Noire)</h4>
             <p>Cascade emblématique.</p>

             <h4><i class="fas fa-water guide-icon water"></i>Saut de la Lézarde (Petit-Bourg)</h4>
             <p>Site superbe, accès sportif mais faisable en 1h aller-retour. Bassin propice à la baignade.</p>

             <h4><i class="fas fa-water guide-icon water"></i>Chutes du Carbet (Capesterre-Belle-Eau)</h4>
             <ul>
               <li><strong>1ʳᵉ chute :</strong> 115 m, randonnée sportive avec passages à gué.</li>
               <li><strong>2ᵉ chute :</strong> 110 m, la plus accessible, sentier aménagé (enfants possibles).</li>
               <li><strong>3ᵉ chute :</strong> 20 m, bassin agréable pour la baignade.</li>
             </ul>

             <h4><i class="fas fa-hiking guide-icon hiking"></i>Randonnée derrière la villa (Bouillante)</h4>
             <p>Depuis la rue de Poirier jusqu'au Parc de la Source. Beau chemin de crête avec vue sur la mer.</p>

             <img src="images/guide/59.webp" alt="Cascades et randonnées"/>
           </div>
         `
      },
      mer: {
        title: 'Découvertes en mer',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-ship guide-icon ship"></i>Découvertes en mer</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-diving-helmet guide-icon diving"></i>Plongée bouteille</h4>
             <p>Club Les Heures Saines (Bouillante), réputé pour sa sécurité et sa convivialité. Exploration de la réserve Cousteau et d'épaves.</p>

             <h4><i class="fas fa-ship guide-icon ship"></i>Excursion aux Saintes</h4>
             <p>Départ en ferry de Trois-Rivières, idéale pour une journée.</p>

             <img src="images/guide/60.webp" alt="Découvertes en mer"/>
           </div>
         `
      },
      balades: {
        title: 'Balades et découvertes',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-map-marked-alt guide-icon map"></i>Balades et découvertes</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-seedling guide-icon seedling"></i>Jardin Botanique de Deshaies</h4>
             <p>Promenade de 2h dans un cadre luxuriant.</p>
             <div style="margin: 15px 0; padding: 10px; background: #f0f8f0; border-left: 3px solid #4caf50; border-radius: 3px;">
               <p style="margin: 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Note :</strong> 4,7/5 (Google, 8 900 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Recommandation :</strong> Souvent décrit comme un « jardin remarquable » à visiter absolument</p>
               <p style="margin: 5px 0 0 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Commentaire :</strong> Parc de 7 hectares avec flore tropicale, cascades, volière et restaurant panoramique</p>
             </div>

             <h4><i class="fas fa-fort-awesome guide-icon fort"></i>Fort Delgrès (Basse-Terre)</h4>
             <p>Site historique majeur, visite gratuite.</p>
             <div style="margin: 15px 0; padding: 10px; background: #f0f8f0; border-left: 3px solid #4caf50; border-radius: 3px;">
               <p style="margin: 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Note :</strong> 4,2/5 (Google, 1 300 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Recommandation :</strong> Incontournable pour son rôle historique dans la lutte contre l'esclavage</p>
               <p style="margin: 5px 0 0 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Commentaire :</strong> Ancien fort du XVIIᵉ siècle, classé monument historique, avec vue panoramique et expositions</p>
             </div>

             <h4><i class="fas fa-shopping-basket guide-icon market"></i>Marché de Basse-Terre</h4>
             <p>Marché quotidien (sauf dimanche et lundi), particulièrement animé le samedi. Idéal pour épices, vanille et produits locaux.</p>
             <div style="margin: 15px 0; padding: 10px; background: #f0f8f0; border-left: 3px solid #4caf50; border-radius: 3px;">
               <p style="margin: 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Note :</strong> 3,8/5 (Google, 82 avis), 3,5/5 (TripAdvisor, 85 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Recommandation :</strong> Apprécié pour son authenticité, ses produits locaux (épices, fruits, légumes, poissons) et son ambiance traditionnelle</p>
               <p style="margin: 5px 0 0 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Commentaire :</strong> Marché couvert emblématique en front de mer, coloré et animé, idéal pour découvrir la Guadeloupe authentique</p>
             </div>

             <h4><i class="fas fa-shopping-basket guide-icon market"></i>Marché de Sainte-Anne et son village artisanal</h4>
             <p>Souvenirs et produits locaux.</p>
             <div style="margin: 15px 0; padding: 10px; background: #f0f8f0; border-left: 3px solid #4caf50; border-radius: 3px;">
               <p style="margin: 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Note :</strong> 4,2/5 (Google, 5 510 avis), 4,0/5 (TripAdvisor, 571 avis)</p>
               <p style="margin: 5px 0 0 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Recommandation :</strong> Très recommandé pour son ambiance vivante, ses stands variés et son cadre balnéaire</p>
               <p style="margin: 5px 0 0 0; font-style: italic; font-size: 14px;"><strong style="font-style: italic;">Commentaire :</strong> Marché artisanal et alimentaire au bord de la plage, réputé pour ses punchs, épices, fruits tropicaux et artisanat créole</p>
             </div>

             <h4><i class="fas fa-mountain guide-icon mountain"></i>Pointe des Châteaux (Saint-François)</h4>
             <p>Paysages impressionnants rappelant la Bretagne.</p>

             <img src="images/guide/61.webp" alt="Balades et découvertes"/>
           </div>
         `
      },
      pharmacie: {
        title: 'Services de soins',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-pills guide-icon pills"></i>Services de soins</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-store guide-icon store"></i>La pharmacie de Losteau</h4>
             <p><strong>Adresse :</strong> Zac de Losteau - Pigeon, Bouillante 97125, Guadeloupe</p>
             <p><strong>Téléphone :</strong> +590 590 99 08 44</p>
             <p><strong>Site web :</strong> <a href="https://pharmaciedelosteau.fr" target="_blank" style="color: var(--color-primary); text-decoration: none;">pharmaciedelosteau.fr</a></p>
             <p><strong>Horaires :</strong> Ferme à 19:00</p>
             <p><strong>Services :</strong> Retrait en magasin, réservation en ligne possible</p>
             <p><strong>Conseil :</strong> La carte vitale fonctionne comme en métropole. Pensez à emporter vos médicaments habituels et une trousse de premiers soins.</p>

             <h4 style="margin-top: 20px"><i class="fas fa-user-md guide-icon doctor"></i>Autres professionnels de santé</h4>
             <p>Dans la ZAC de Losteau, vous trouverez également :</p>
             <ul>
               <li><strong>Médecin généraliste</strong></li>
               <li><strong>Dentiste</strong></li>
               <li><strong>Vétérinaire</strong></li>
             </ul>

             <img src="images/guide/15.webp" alt="La pharmacie de Losteau"/>

             <h4 style="margin-top: 30px"><i class="fas fa-phone guide-icon phone"></i>Numéros d'urgence</h4>
             <ul>
               <li><strong>Pompiers :</strong> 18</li>
               <li><strong>Police :</strong> 17</li>
               <li><strong>Samu :</strong> 15</li>
               <li><strong>Météo France :</strong> 0892 68 08 08</li>
             </ul>

             <h4 style="margin-top: 30px"><i class="fas fa-hospital guide-icon hospital"></i>Hôpital</h4>
             <h5><i class="fas fa-hospital-alt guide-icon hospital"></i>Hôpital Maurice Selbonne</h5>
             <p><strong>Adresse :</strong> 97125 Rue des Manguiers, Bouillante 97125, Guadeloupe</p>
             <p><strong>Téléphone :</strong> +590 590 80 49 00</p>
             <p><strong>Site web :</strong> <a href="https://ch-mauriceselbonne.fr" target="_blank" style="color: var(--color-primary); text-decoration: none;">ch-mauriceselbonne.fr</a></p>
             <p><strong>Services :</strong> Hôpital spécialisé avec services d'urgence</p>

             <h4 style="margin-top: 20px"><i class="fas fa-hospital guide-icon hospital"></i>Centres Hospitaliers Universitaires (CHU)</h4>
             <ul>
               <li><strong>CHU de Pointe-à-Pitre</strong> - Centre hospitalier principal de la Guadeloupe</li>
               <li><strong>CHU de Basse-Terre</strong> - Centre hospitalier de Basse-Terre</li>
             </ul>

             <img src="images/guide/16.webp" alt="Hôpital Maurice Selbonne"/>

             <div style="margin-top: 20px; text-align: center">
               <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                 <a href="geo:16.1581,-61.7761?q=La+pharmacie+de+Losteau+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                   <i class="fas fa-pills"></i>
                   Pharmacie de Losteau
                 </a>
                 <a href="geo:16.1581,-61.7761?q=Hôpital+Maurice+Selbonne+Bouillante" style="display: inline-flex; align-items: center; gap: 8px; padding: 15px 25px; background: #4caf50; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: 500; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                   <i class="fas fa-hospital"></i>
                   Hôpital Maurice Selbonne
                 </a>
               </div>
             </div>
           </div>
         `
      },
      moustiques: {
        title: 'Protection anti-moustiques',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-bug guide-icon bug"></i>Protection anti-moustiques</h3>
           <div class="guide-popup-content">
             <p><strong>Précautions importantes :</strong></p>
             <ul>
               <li>Les moustiques sont actifs au petit déjeuner et à l'apéritif du soir</li>
               <li>Utiliser des aérosols ("Insect Ecran" ou "Off") sur les zones découvertes</li>
               <li>Bougies à la citronnelle et spirales antimoustiques</li>
               <li>Moustiquaires équipent les chambres (pas de problème la nuit)</li>
               <li><strong>Répulsif efficace recommandé</strong> dans vos préparatifs</li>
             </ul>

             <h4><i class="fas fa-plane guide-icon plane"></i>Avant de partir</h4>
             <p>N'oubliez pas d'acheter une bombe d'anti-moustique (OFF ou INSECTECRAN à transporter en soute) afin de pouvoir vous traiter sur les parties découvertes dès l'arrivée.</p>

             <img src="images/guide/34.webp" alt="Produits anti-moustiques - Protection"/>

             <p>En arrivant à l'aéroport, la première envie est de se dévêtir et les moustiques souvent présents le matin et le soir n'attendent que ça.</p>
             <p>La Dengue est présente dans toutes les Antilles, elle peut se révéler dangereuse et quoiqu'il en soit peut gâcher votre séjour (comme une très grosse grippe).</p>
             <p>Une fois déclarée, pas de traitement en dehors du Doliprane.</p>
             <p>Le matin et le soir protégez-vous avec les répulsifs, utilisez des spirales ou des bougies à la citronnelle.</p>
             <p>N'hésitez pas à consulter le site d'INSECTECRAN qui prodigue des conseils utiles.</p>
           </div>
         `
      },
      faune: {
        title: 'Faune locale',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-paw guide-icon paw"></i>Faune locale</h3>
           <div class="guide-popup-content">
             <p><strong>Les moustiques :</strong> Se protéger surtout dès le lever et au coucher du soleil (Insectecran, Off). La nuit, les moustiquaires sont une protection très efficace.</p>
             <p><strong>En Guadeloupe pas de serpents.</strong></p>
             <p><strong>Les araignées :</strong> Sont inoffensives même si elles sont quelquefois impressionnantes par leur taille en comparaison avec celles de métropole.</p>

             <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>Les insectes rampants</h4>
             <p>La maison est traitée sur le sol (Digrain) de façon très régulière par l'équipe de la conciergerie afin d'éviter leur présence malheureusement inévitable malgré la répétition des applications d'insecticide (c'est une constante dans toutes les maisons des Antilles).</p>
             <p>Ils sont tous sans danger à l'exception des <strong>Scolopendres</strong> (quelquefois d'une dizaine de centimètres).</p>
             <p>Pendant la saison des pluies, ils ont tendance à chercher refuge dans les maisons ce qui est particulièrement désagréable pour nous les humains.</p>
             <p>En période sèche, ils vivent sous la terre, mais après les fortes pluies de la saison humide, leurs nids sont noyés et ils cherchent des endroits plus secs.</p>
             <p>Craintifs, ils s'enfuient quand on en rencontre, mais comme beaucoup d'animaux se défendent et mordent s'ils se sentent acculés. Leur morsure est très douloureuse.</p>
           </div>
         `
      },
      soleil: {
        title: 'Protection solaire',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-sun guide-icon sun"></i>Protection solaire</h3>
           <div class="guide-popup-content">
             <p><strong>Équipements recommandés :</strong></p>
             <ul>
               <li><strong>Crème solaire :</strong> Haute protection (SPF 50+)</li>
               <li><strong>Lunettes de soleil :</strong> Protection UV</li>
               <li><strong>Chapeau :</strong> Protection de la tête et du visage</li>
               <li><strong>Hydratation :</strong> Boire beaucoup d'eau</li>
             </ul>
           </div>
         `
      },
      bains: {
        title: 'Bains chauds',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-exclamation-triangle guide-icon warning"></i>Attention aux « bains chauds »</h3>
           <div class="guide-popup-content">
             <p>Une dernière recommandation concerne exclusivement les « bains chauds ». Ce sont des résurgences d'eau du volcan où l'on peut se baigner.</p>
             <p>Sur place on les appelle les « bains jaunes », le « bain des amours » etc. La baignade y est agréable et sans danger à condition de ne pas immerger la tête.</p>
             <p>Selon la température de l'eau elle peut contenir des amibes inoffensives au niveau de la peau, mais agressives pour les muqueuses. En rivière ou en mer il n'y a aucun danger.</p>
           </div>
         `
      },
      reflexes: {
        title: 'Bons réflexes',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-shield-alt guide-icon shield"></i>Les bons réflexes</h3>
           <div class="guide-popup-content">
             <p><strong>Conseils de prévention :</strong></p>
             <ul>
               <li>Pendant la journée, surtout pendant la saison des pluies, fermer les portes et fenêtres des chambres, et laisser les moustiquaires des lits fermées.</li>
               <li>Malgré cela contrôler la literie avant de se coucher.</li>
               <li>Si les chaussures « dorment » à l'extérieur des chambres, les secouer avant de les chausser.</li>
               <li>Même technique avec les vêtements.</li>
               <li>Préférer marcher avec des sandales ou des tongs que pieds nus.</li>
             </ul>
           </div>
         `
      },
      eau: {
        title: 'Eau',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-tint guide-icon water"></i>L'EAU</h3>
           <div class="guide-popup-content">
             <p>Pour des raisons de maintenance, d'écologie et d'économie, la maison bénéficie d'une double alimentation en eau.</p>
             <p>Elle est raccordée au réseau de distribution d'eau de la Guadeloupe avec une cuve de réserve.</p>
             <p><strong>La vanne principale de raccordement au réseau de la Guadeloupe</strong> se situe au niveau du portail d'entrée de la maison à côté du compteur, elle sert à couper l'alimentation en cas de rupture d'une tuyauterie par exemple.</p>
             <p>L'eau est ensuite dirigée vers la pièce du sous-sol.</p>
             <p><strong>Au niveau du sous-sol, il existe une vanne de raccordement à deux positions (réseau, cuve de secours) :</strong></p>
             <img src="images/guide/32.webp" alt="Vanne de raccordement - Sous-sol"/>
             <ul>
               <li><strong>Position horizontale</strong> = raccordement direct au réseau de distribution</li>
               <li><strong>Position verticale</strong> = raccordement à la cuve de secours</li>
             </ul>
             <p>Cette cuve de secours dans le sous-sol de la maison contient une pompe électrique se déclenchant spontanément en cas de coupure d'eau du réseau, et continuant d'alimenter douches et robinets. Sa fonction de sauvegarde ne se déclenchant que lorsque le niveau baisse et que la cuve est raccordée aux robinets et aux douches.</p>
             <p><strong>EN CAS DE COUPURE D'EAU :</strong></p>
             <p>C'est l'eau de la cuve de secours qui est utilisée.</p>
             <p>Il existe une deuxième alimentation en eau, exclusivement pour les WC qui bénéficient d'une double arrivée d'eau : le robinet de gauche alimente en eau de pluie, celui de droite en eau du réseau.</p>
             <img src="images/guide/31.webp" alt="Double alimentation WC - Eau de pluie et réseau"/>
             <p>En permanence le robinet de gauche est ouvert, celui de droite fermé et la pompe électrique immergée dans la cuve de récupération d'eau de pluie alimente les toilettes automatiquement.</p>
             <p>En cas de panne sur le réseau d'alimentation, celle des WC, indépendante, se poursuit donc sans interruption alors que les robinets et les douches ne sont plus alimentés si la manette rouge est en position basse.</p>
           </div>
         `
      },
      electricite: {
        title: 'Électricité',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-bolt guide-icon bolt"></i>L'ÉLECTRICITÉ</h3>
           <div class="guide-popup-content">
             <p>Elle est fournie de deux façons sur Bouillante : la centrale thermique de JARRY et la centrale géothermique de BOUILLANTE.</p>
             <p>Cette double source fait que nous sommes privilégiés sur Bouillante et rarement concernés par les coupures de longue durée... sauf en cas de « mouvements sociaux ».</p>
             <p><strong>EN CAS DE COUPURE DE COURANT :</strong></p>

             <h4><i class="fas fa-door-open guide-icon door"></i>Le portail d'entrée</h4>
             <p>Le portail d'entrée est équipé d'un moteur électrique avec une petite batterie de secours qui permet de ne pas se retrouver, à l'extérieur de la maison, devant un portail fermé.</p>
             <p>Malheureusement, cette batterie est de faible capacité et nous conseillons en cas de panne de passer en mode manuel.</p>
             <p>Pour ce faire une petite clé triangulaire est disponible dans le tiroir des couverts de la cuisine (à droite du tiroir). Elle permet de débrayer le moteur électrique et de manipuler le portail de façon manuelle avant le retour du courant.</p>
             <img src="images/guide/33.webp" alt="Clé triangulaire - Portail d'entrée"/>

             <h4><i class="fas fa-window-maximize guide-icon window"></i>Les volets roulants</h4>
             <p>Ils sont au nombre de trois, métalliques et électrifiés, deux plus petits de chaque côté encadrant le volet central plus large (et plus lourd aussi).</p>
             <p>En cas de panne de courant, se trouve à la droite des volets une manivelle sur laquelle s'adapte une pièce intermédiaire métallique (posée dans la petite alcôve juste au-dessus du volet gauche).</p>
             <p>Ce dispositif permet d'ouvrir et fermer manuellement.</p>

             <h4><i class="fas fa-lightbulb guide-icon light"></i>L'éclairage</h4>
             <p>Dans la maison nous avons trois lampes « FATBOY » avec batterie incorporée.</p>
             <p>Les câbles électriques USB afin de permettre leur mise en charge se trouvent dans le meuble sous la télévision. Lors de nos séjours dans la maison nous les mettons en charge en début de vacances, leur lumière est douce et agréable le soir sur la terrasse mais elles peuvent également dépanner... au cas où...</p>
             <p>Dans le cellier (ou dans le sous-sol selon la place) se trouvent des lampes à alcool en cas de besoin.</p>

             <h4><i class="fas fa-tint guide-icon water"></i>L'alimentation en eau</h4>
             <p>La pompe immergée dans la cuve de récupération d'eau de pluie n'est plus opérationnelle de même que celle de la cuve de secours.</p>
             <p>C'est la pression du réseau qui assure l'alimentation des robinets, douches et potentiellement des toilettes.</p>
             <p>Il convient donc de raccorder pendant la période d'interruption du courant le réservoir des WC au réseau de distribution.</p>
             <p>Pour cela, il faut simplement vérifier que la manette rouge du sous-sol soit bien en position basse et pour les toilettes, fermer le robinet situé à gauche puis ouvrir celui de droite.</p>
             <p>La manœuvre inverse étant à réaliser à ce niveau, après retour du courant.</p>
           </div>
         `
      },
      assainissement: {
        title: "Le système d'assainissement",
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-recycle guide-icon recycle"></i>Le système d'assainissement</h3>
           <div class="guide-popup-content">
             <p>Contrairement à une fosse septique classique, l'installation est équipée d'un <strong>système de traitement par filtres compacts en fibres de coco</strong>.</p>
             <p>Ce dispositif assure une épuration efficace des eaux usées, à condition de respecter quelques règles essentielles.</p>

             <h4><i class="fas fa-cogs guide-icon cogs"></i>Fonctionnement</h4>
             <p>Les eaux usées arrivent d'abord dans un compartiment de fosse septique où les matières solides se déposent.</p>
             <p>Les effluents passent ensuite par un préfiltre puis sont répartis grâce à des rampes de dispersion dans un massif filtrant en fibre de coco.</p>
             <p>La fibre de coco retient les impuretés et permet la dégradation biologique, avant le rejet final des eaux traitées.</p>

             <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>Points importants pour l'utilisateur</h4>
             <p>Le système nécessite un entretien régulier pour garantir son bon fonctionnement.</p>
             <p><strong>Il est formellement interdit d'y jeter du papier toilette humide (type Fess'net) ou des lingettes.</strong></p>
             <ul>
               <li>Le papier toilette classique se désagrège correctement et est évacué sans problème.</li>
               <li>En revanche, les lingettes et papiers « spéciaux » s'accumulent dans les filtres, les bouchent et provoquent une panne du système.</li>
             </ul>

             <h4><i class="fas fa-exclamation-circle guide-icon warning"></i>En cas d'obstruction, cela peut entraîner :</h4>
             <ul>
               <li>une panne du dispositif d'épuration,</li>
               <li>des odeurs désagréables dans l'habitation et ses abords,</li>
               <li>une intervention technique coûteuse.</li>
             </ul>

             <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-left: 4px solid #4caf50; border-radius: 5px;">
               <p style="margin: 0; font-weight: bold; color: #2e7d32;"><i class="fas fa-check-circle"></i> À retenir : seuls les déchets organiques et le papier toilette classique doivent être jetés dans les WC.</p>
             </div>
           </div>
         `
      },
      'saison-cyclonique': {
        title: 'Saison cyclonique',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-info-circle guide-icon info"></i>Saison cyclonique</h3>
           <div class="guide-popup-content">
             <p>La Guadeloupe est une zone tropicale exposée au risque cyclonique de <strong>juillet à novembre</strong>. La protection civile, habituée aux phénomènes météorologiques des Antilles, assure une bonne prise en charge des événements climatiques (messages d'avertissement, surveillance, diffusion d'information, gestion des dégâts).</p>
             <p>Il existe <strong>cinq niveaux d'alerte</strong> auxquels il faut s'adapter en fonction des messages des autorités compétentes.</p>

             <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>Niveaux d'alerte</h4>

             <h5 style="color: #607d8b; margin-top: 20px"><i class="fas fa-circle" style="color: #607d8b"></i>Alerte Grise : Restez prudents</h5>
             <ul>
               <li>Évitez les déplacements avant que tout soit remis en ordre</li>
               <li>Ne touchez pas aux fils électriques et téléphoniques à terre</li>
               <li>Buvez de l'eau en bouteille ou traitée avec Micropur</li>
               <li>Assurez-vous que la circulation soit autorisée avant de reprendre votre véhicule</li>
               <li>Ne franchissez pas les radiers submergés ou les ravines en crue</li>
             </ul>

             <h5 style="color: #ffc107; margin-top: 20px"><i class="fas fa-circle" style="color: #ffc107"></i>Alerte Jaune : Soyez attentifs</h5>
             <ul>
               <li>Soyez vigilants et tenez-vous informé via Météo France, les médias et la préfecture</li>
               <li>Vérifiez les réserves nécessaires pour quelques jours (aliments, eau)</li>
               <li>Évitez les longues randonnées, surtout près des rivières et les sorties en mer</li>
             </ul>

             <h5 style="color: #ff9800; margin-top: 20px"><i class="fas fa-circle" style="color: #ff9800"></i>Alerte Orange : Finissez vos préparatifs</h5>
             <ul>
               <li>Rentrez le mobilier extérieur (transats dans le sous-sol si nécessaire)</li>
               <li>Mettez en charge les éclairages sur batterie (lampes Fatboy)</li>
               <li>Constituez une réserve d'eau et de nourriture pour quelques jours</li>
               <li>Limitez vos déplacements</li>
               <li>Fermez les volets métalliques de protection et les persiennes</li>
             </ul>

             <h5 style="color: #f44336; margin-top: 20px"><i class="fas fa-circle" style="color: #f44336"></i>Alerte Rouge : Intégrez les abris</h5>
             <ul>
               <li>Assurez-vous que les volets soient bien fermés</li>
               <li>Vérifiez les réserves d'eau et d'aliments</li>
               <li>Préparez la pièce la plus sûre de la maison (sous-sol)</li>
               <li>Écoutez les sources d'information pour vous adapter à l'évolution</li>
               <li><strong>Proscrivez totalement les déplacements en voiture</strong></li>
               <li>Si besoin d'intégrer le sous-sol, coupez l'électricité au préalable</li>
               <li>Coupez momentanément l'arrivée d'eau (manettes perpendiculaires aux tuyaux)</li>
             </ul>

             <h5 style="color: #9c27b0; margin-top: 20px"><i class="fas fa-circle" style="color: #9c27b0"></i>Alerte Violette : Confinez-vous</h5>
             <ul>
               <li>Essayez de rester calmes, la situation va évoluer rapidement</li>
               <li>Restez réfugiés dans la pièce sécurisée</li>
               <li>N'en sortez que lorsque tout est redevenu calme à l'extérieur</li>
               <li>Écoutez la radio pour les messages des autorités</li>
             </ul>
           </div>
         `
      },
      'maison-cyclone': {
        title: 'La maison en cas de cyclone',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>La maison en cas de cyclone</h3>
           <div class="guide-popup-content">
             <p><strong>LE PLUS IMPORTANT :</strong></p>
             <p>La villa a été construite par notre architecte en respectant les <strong>normes cycloniques et sismiques</strong> :</p>
             <ul>
               <li><strong>Fondations :</strong> Ciment armé (même si la maison s'effondre, le sous-sol est un bunker)</li>
               <li><strong>Volets :</strong> Métalliques, fermeture électrique ou manuelle (manivelle dans l'angle droit de la pièce principale)</li>
               <li><strong>Fenêtres :</strong> Verre avec barreaux de renforcement anti-effraction</li>
               <li><strong>Toiture :</strong> Équipée de "casquettes" anti-arrachement (sauf vent à 300 km/h)</li>
               <li><strong>Pièces de sécurité :</strong> Deux "panic rooms" disponibles</li>
             </ul>

             <h4><i class="fas fa-shield-alt guide-icon shield"></i>Pièces de sécurité</h4>

             <h5><i class="fas fa-door-closed guide-icon door"></i>Le cellier</h5>
             <ul>
               <li>Trois murs béton, plafond béton</li>
               <li>Très peu de place</li>
               <li>Boîte "Cyclone" avec équipements d'urgence</li>
             </ul>

             <h5><i class="fas fa-warehouse guide-icon warehouse"></i>Le sous-sol (recommandé)</h5>
             <ul>
               <li>Pièce plus grande et plus confortable</li>
               <li>Toutes les parois en béton armé</li>
               <li>Fenêtre moins exposée</li>
               <li>Contient la réserve de 1200 litres d'eau potable</li>
               <li>Peut accueillir transats, chaises pliantes, petite table</li>
             </ul>
           </div>
         `
      },
      'gestion-eau-cyclone': {
        title: "Gestion de l'eau",
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-tint guide-icon water"></i>Gestion de l'eau</h3>
           <div class="guide-popup-content">
             <p><strong>IMPORTANT :</strong> La cuve doit être désolidarisée du réseau en cas de cyclone :</p>
             <ul>
               <li>Tourner la manette rouge et le robinet bronze à côté du filtre</li>
               <li>Position perpendiculaire au tuyau d'arrivée d'eau</li>
               <li>Évite la contamination par la boue en cas de rupture de canalisation</li>
             </ul>

             <h4><i class="fas fa-glass-water guide-icon water"></i>Eau de consommation</h4>
             <ul>
               <li><strong>Préférer :</strong> Eau en bouteille</li>
               <li><strong>Eau de la cuve :</strong> Consommable directement en temps normal</li>
               <li><strong>Traitement :</strong> Comprimés Micropur (1 comprimé pour 1 litre, laisser reposer 120 minutes)</li>
               <li><strong>Gourdes :</strong> Métalliques de 1 litre disponibles</li>
             </ul>

             <h4><i class="fas fa-lightbulb guide-icon light"></i>Éclairage d'urgence</h4>
             <ul>
               <li>Lampes Fatboy préalablement chargées</li>
               <li>Câbles USB dans le meuble sous la télévision</li>
               <li><strong>IMPORTANT :</strong> Couper l'électricité avant de descendre au sous-sol (risque d'incendie)</li>
             </ul>

             <h4><i class="fas fa-box guide-icon box"></i>Boîte "Cyclone"</h4>
             <p>Contient dans le cellier :</p>
             <ul>
               <li>Réchaud au gaz avec cartouche</li>
               <li>Radio et piles pour suivre les informations</li>
               <li>Comprimés Micropur pour stériliser l'eau</li>
               <li>Gourdes métalliques de 1 litre</li>
             </ul>
           </div>
         `
      },
      'contacts-urgence': {
        title: "Contacts d'urgence",
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-phone guide-icon phone"></i>Contacts d'urgence</h3>
           <div class="guide-popup-content">
             <ul>
               <li><strong>Police secours :</strong> 17</li>
               <li><strong>Pompiers :</strong> 18</li>
               <li><strong>Appel d'urgence européen :</strong> 112</li>
               <li><strong>Laurence (renseignements pratiques) :</strong> 06 90 40 40 55</li>
             </ul>

             <h4><i class="fas fa-radio guide-icon radio"></i>Sources d'information</h4>
             <ul>
               <li>Météo France Antilles</li>
               <li>Médias locaux</li>
               <li>Préfecture de Guadeloupe</li>
               <li>Protection civile</li>
             </ul>

             <h4><i class="fas fa-exclamation-triangle guide-icon warning"></i>Rappels importants</h4>
             <ul>
               <li>Suivre strictement les consignes des autorités</li>
               <li>Ne pas prendre de risques inutiles</li>
               <li>Rester informé en permanence</li>
               <li>Préparer les équipements à l'avance</li>
               <li>Connaître les pièces de sécurité de la villa</li>
             </ul>
           </div>
         `
      },
      'taxe-sejour': {
        title: 'Taxe de séjour',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Taxe de séjour</h3>
           <div class="guide-popup-content">
             <p>Une taxe de séjour est perçue par la commune de Bouillante :</p>
             <ul>
               <li><strong>Montant :</strong> 2,30€ par adulte et par nuit (résidence de tourisme 4 étoiles)</li>
               <li><strong>Exonération :</strong> Enfants de moins de 18 ans</li>
               <li><strong>Paiement :</strong> Déjà inclus dans le prix du séjour</li>
               <li><strong>Durée concernée :</strong> Séjours de plus de 3 nuits</li>
             </ul>
             <p>Cette taxe participe au développement touristique de la commune et à l'entretien des plages, sentiers et espaces publics.</p>
           </div>
         `
      },
      preparatifs: {
        title: 'Préparatifs avant le départ',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-suitcase guide-icon suitcase"></i>Préparatifs avant le départ</h3>
           <div class="guide-popup-content">
             <ul>
               <li><strong>Vêtements :</strong> Légers et confortables (maillot de bain, chapeau, tenues de plage)</li>
               <li><strong>Chaussures :</strong> Sandales pour la plage + chaussures fermées pour les randonnées</li>
               <li><strong>Accessoires utiles :</strong> Lunettes de soleil, crème solaire haute protection, casquette, répulsif anti-moustiques (type OFF ou Insect Ecran)</li>
             </ul>
             <p><strong>💡 Astuce :</strong> Un petit sac étanche est très pratique en Guadeloupe (plages, randonnées, traversées de rivières).</p>
           </div>
         `
      },
      'equipements-fournis': {
        title: 'Équipements fournis',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-home guide-icon home"></i>Équipements fournis</h3>
           <div class="guide-popup-content">
             <ul>
               <li><strong>Masques de snorkeling</strong> (tailles M et S) disponibles au sous-sol</li>
               <li><strong>Serviettes :</strong> Fournies pour la toilette et la piscine (⚠️ pas de serviettes de plage)</li>
               <li><strong>Sèche serviettes pliants</strong> pour faire sécher à l'extérieur</li>
               <li><strong>Équipements électriques :</strong> Prises USB et adaptateurs pour prises américaines</li>
             </ul>
           </div>
         `
      },
      'equipements-emporter': {
        title: 'Équipements à emporter',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-suitcase guide-icon suitcase"></i>Équipements à emporter</h3>
           <div class="guide-popup-content">
             <ul>
               <li><strong>Sac étanche</strong> pour protéger vos affaires</li>
               <li><strong>Chaussures aquatiques de randonnée :</strong> Idéales pour marcher dans l'eau, passer des gués, éviter les glissades et randonner sans crainte de mouiller ses chaussures</li>
               <li><strong>Paréos :</strong> Une alternative légère aux serviettes de plage, qui sèchent vite et prennent peu de place</li>
               <li><strong>Masque facial :</strong> Suffisant pour profiter de l'exploration sous-marine</li>
             </ul>
           </div>
         `
      },
      'conseils-pratiques': {
        title: 'Conseils pratiques sur place',
        content: `
           <h3 class="guide-popup-title"><i class="fas fa-lightbulb guide-icon light"></i>Conseils pratiques sur place</h3>
           <div class="guide-popup-content">
             <h4><i class="fas fa-umbrella-beach guide-icon beach"></i>À la plage</h4>
             <ul>
               <li>Le climat tropical réserve parfois des ondées soudaines : un sac étanche pour vos serviettes ou paréos évite les désagréments</li>
               <li>Les paréos remplacent avantageusement les serviettes épaisses</li>
               <li>Laissez sécher les serviettes de plage à l'extérieur : cela évite d'introduire des puces de sable (yens yens) responsables de démangeaisons</li>
             </ul>

             <h4><i class="fas fa-hiking guide-icon hiking"></i>En randonnée</h4>
             <ul>
               <li>Les meilleures chaussures sont celles de randonnée aquatique : elles sèchent vite, ne glissent pas et sont adaptées aux traversées de rivières</li>
               <li>En forêt, peu de moustiques, mais prévoyez un répulsif si vous visitez la mangrove</li>
             </ul>

             <h4><i class="fas fa-water guide-icon water"></i>En mer</h4>
             <ul>
               <li>Pour une sortie snorkeling, un simple masque facial suffit (palmes facultatives)</li>
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

  console.log('🌍 Guide Calypso Bay initialisé en français')
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
    address: 'Carrefour+Market+Bouillante'
  },
  'Leader Price': {
    coordinates: '16.1581,-61.7761',
    address: 'Leader+Price+Pigeon+Bouillante'
  },
  'Cap Créole': {
    coordinates: '16.1598,-61.7751',
    address: 'Cap+Créole+Pigeon+Bouillante'
  },
  'Four des Iles': {
    coordinates: '16.1610,-61.7745',
    address: 'Four+des+Iles+Boulangerie+Pigeon'
  },
  'Ti Taurus': {
    coordinates: '16.1613,-61.7753',
    address: 'Boucherie+traiteur+Ti+Taurus+Bouillante'
  },
  'Chez Adèle': {
    coordinates: '16.1581,-61.7761',
    address: 'Chez+Adèle+Bouillante'
  },
  'PRO-rent': {
    coordinates: '16.1581,-61.7761',
    address: 'PRO-rent+Jarry+Guadeloupe'
  },
  'La Touna': {
    coordinates: '16.1581,-61.7761',
    address: 'La+Touna+Restaurant+Bouillante'
  },
  'Chez Didier': {
    coordinates: '16.1581,-61.7761',
    address: 'Chez+Didier+Restaurant+Bouillante'
  },
  'Sunset B': {
    coordinates: '16.1581,-61.7761',
    address: 'Le+Sunset+B+Restaurant+Bouillante'
  },
  'Aux Deux Coquilles': {
    coordinates: '16.1581,-61.7761',
    address: 'Les+Deux+Coquilles+Restaurant+Bouillante'
  },
  'Franko Grill': {
    coordinates: '16.1581,-61.7761',
    address: 'Franko+Grill+Restaurant+Bouillante'
  },
  Oganik: {
    coordinates: '16.1581,-61.7761',
    address: 'Oganik+Pizzeria+Bouillante'
  },
  'Allo Pizza': {
    coordinates: '16.1581,-61.7761',
    address: 'Allo+Pizza+Pizzeria+Bouillante'
  },
  'Le Cœur de Pigeon': {
    coordinates: '16.1581,-61.7761',
    address: 'Le+Cœur+de+Pigeon+Pizzeria+Bouillante'
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
        copyButton.textContent = 'Copié !'

        // Remettre le texte original après 2 secondes
        setTimeout(() => {
          copyButton.classList.remove('copied')
          copyButton.textContent = 'Copier'
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
        copyButton.textContent = 'Copié !'

        setTimeout(() => {
          copyButton.classList.remove('copied')
          copyButton.textContent = 'Copier'
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
