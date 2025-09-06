/**
 * Guide Calypso Bay - Language Loader
 * Détection automatique de langue et chargement dynamique
 */

// ============================================================================
// DÉTECTION DE LANGUE
// ============================================================================

function detectLanguage() {
  // 1. Vérifier le paramètre URL ?lang=
  const urlParams = new URLSearchParams(window.location.search)
  const urlLang = urlParams.get('lang')
  if (urlLang && ['fr', 'en', 'de'].includes(urlLang)) {
    return urlLang
  }

  // 2. Vérifier le localStorage
  const storedLang = localStorage.getItem('guide-language')
  if (storedLang && ['fr', 'en', 'de'].includes(storedLang)) {
    return storedLang
  }

  // 3. Vérifier l'attribut lang du HTML
  const htmlLang = document.documentElement.lang
  if (htmlLang) {
    if (htmlLang.startsWith('en')) return 'en'
    if (htmlLang.startsWith('de')) return 'de'
    if (htmlLang.startsWith('fr')) return 'fr'
  }

  // 4. Détecter la langue du navigateur
  const browserLang = navigator.language || navigator.userLanguage
  if (browserLang) {
    if (browserLang.startsWith('en')) return 'en'
    if (browserLang.startsWith('de')) return 'de'
    if (browserLang.startsWith('fr')) return 'fr'
  }

  // 5. Par défaut : français
  return 'fr'
}

// ============================================================================
// CHARGEMENT DYNAMIQUE DES SCRIPTS
// ============================================================================

function loadLanguageScript(lang) {
  return new Promise((resolve, reject) => {
    // Vérifier si le script est déjà chargé
    const existingScript = document.querySelector(`script[data-lang="${lang}"]`)
    if (existingScript) {
      resolve()
      return
    }

    // Créer le script
    const script = document.createElement('script')
    // Le fichier français s'appelle guide.js, pas guide-fr.js
    script.src =
      lang === 'fr' ? 'assets/js/guide.js' : `assets/js/guide-${lang}.js`
    script.setAttribute('data-lang', lang)
    script.onload = () => {
      console.log(`✅ Guide script loaded: ${lang}`)
      resolve()
    }
    script.onerror = () => {
      console.error(`❌ Failed to load guide script: ${lang}`)
      const scriptName = lang === 'fr' ? 'guide.js' : `guide-${lang}.js`
      reject(new Error(`Failed to load ${scriptName}`))
    }

    // Ajouter le script au DOM
    document.head.appendChild(script)
  })
}

// ============================================================================
// GESTION DU SÉLECTEUR DE LANGUE
// ============================================================================

function createLanguageSelector() {
  const currentLang = detectLanguage()

  // Créer le sélecteur
  const selector = document.createElement('div')
  selector.className = 'guide-language-selector'
  selector.innerHTML = `
    <button class="guide-lang-btn" onclick="toggleLanguageMenu()">
      <i class="fas fa-globe"></i>
      <span class="guide-lang-current">${currentLang.toUpperCase()}</span>
      <i class="fas fa-chevron-down"></i>
    </button>
    <div class="guide-lang-menu hidden">
      <button class="guide-lang-option ${
        currentLang === 'fr' ? 'active' : ''
      }" onclick="changeLanguage('fr')">
        <span class="guide-lang-flag">🇫🇷</span>
        <span class="guide-lang-name">Français</span>
      </button>
      <button class="guide-lang-option ${
        currentLang === 'en' ? 'active' : ''
      }" onclick="changeLanguage('en')">
        <span class="guide-lang-flag">🇬🇧</span>
        <span class="guide-lang-name">English</span>
      </button>
      <button class="guide-lang-option ${
        currentLang === 'de' ? 'active' : ''
      }" onclick="changeLanguage('de')">
        <span class="guide-lang-flag">🇩🇪</span>
        <span class="guide-lang-name">Deutsch</span>
      </button>
    </div>
  `

  return selector
}

function toggleLanguageMenu() {
  const menu = document.querySelector('.guide-lang-menu')
  if (menu) {
    menu.classList.toggle('hidden')
  }
}

function changeLanguage(newLang) {
  // Sauvegarder la préférence
  localStorage.setItem('guide-language', newLang)

  // Recharger la page avec le nouveau paramètre de langue
  const url = new URL(window.location)
  url.searchParams.set('lang', newLang)
  window.location.href = url.toString()
}

// ============================================================================
// INITIALISATION PRINCIPALE
// ============================================================================

async function initializeGuide() {
  try {
    // Détecter la langue
    const lang = detectLanguage()
    console.log(`🌍 Detected language: ${lang}`)

    // Charger le script de langue correspondant
    await loadLanguageScript(lang)

    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        // Ajouter le sélecteur de langue
        addLanguageSelector()

        // Initialiser le guide
        if (window.initializeGuide) {
          window.initializeGuide()
        }
      })
    } else {
      // DOM déjà prêt
      addLanguageSelector()

      if (window.initializeGuide) {
        window.initializeGuide()
      }
    }
  } catch (error) {
    console.error('❌ Error initializing guide:', error)

    // Fallback : charger le français par défaut
    try {
      console.log('🔄 Loading fallback: French')
      await loadLanguageScript('fr')
      if (window.initializeGuide) {
        window.initializeGuide()
      }
    } catch (fallbackError) {
      console.error('❌ Fallback failed:', fallbackError)
    }
  }
}

function addLanguageSelector() {
  // Trouver le header
  const header = document.querySelector('.guide-header')
  if (!header) return

  // Créer le sélecteur
  const selector = createLanguageSelector()

  // L'ajouter à droite du logo
  const logo = header.querySelector('.guide-logo')
  if (logo) {
    logo.parentNode.insertBefore(selector, logo.nextSibling)
  }
}

// ============================================================================
// EXPORT DES FONCTIONS GLOBALES
// ============================================================================

// Exposer les fonctions globalement
window.toggleLanguageMenu = toggleLanguageMenu
window.changeLanguage = changeLanguage

// ============================================================================
// DÉMARRAGE AUTOMATIQUE
// ============================================================================

// Démarrer l'initialisation
initializeGuide()
