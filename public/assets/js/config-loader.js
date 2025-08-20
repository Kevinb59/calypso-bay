// Chargeur de configuration depuis l'API Vercel
// Ce script récupère les variables d'environnement depuis /api/config

;(function () {
  'use strict'

  // Fonction pour charger la configuration
  async function loadConfig() {
    try {
      // Vérifier si on est en développement local
      const isLocalDev =
        window.location.hostname === 'localhost' ||
        window.location.hostname.includes('127.0.0.1') ||
        window.location.hostname.includes('file://')

      if (isLocalDev) {
        console.log('🔧 Mode développement local détecté')

        // Fallback local sans URLs codées en dur: lire depuis localStorage
        const localGasUrl = localStorage.getItem('GAS_URL')
        const localGasContactUrl = localStorage.getItem('GAS_CONTACT_URL')
        const localGoogleMapsApiKey = localStorage.getItem(
          'GOOGLE_MAPS_API_KEY'
        )

        if (localGasUrl && localGasContactUrl && localGoogleMapsApiKey) {
          window.GAS_URL = localGasUrl
          window.GAS_CONTACT_URL = localGasContactUrl
          window.GOOGLE_MAPS_API_KEY = localGoogleMapsApiKey
          window.APP_CONFIG = { ENVIRONMENT: 'development' }
          window.dispatchEvent(new CustomEvent('app:config-ready'))
        } else {
          console.warn(
            "⚠️ Variables locales manquantes. Définissez-les via localStorage: localStorage.setItem('GAS_URL','https://...'); localStorage.setItem('GAS_CONTACT_URL','https://...'); localStorage.setItem('GOOGLE_MAPS_API_KEY','votre-clé-api')"
          )
        }
        return
      }

      // En production, récupérer depuis l'API
      // Chargement de la configuration depuis l'API (silencieux en prod)

      const response = await fetch('/api/config')

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`)
      }

      const config = await response.json()

      // Exposer les variables globalement
      window.GAS_URL = config.GAS_URL
      window.GAS_CONTACT_URL = config.GAS_CONTACT_URL
      window.GOOGLE_MAPS_API_KEY = config.GOOGLE_MAPS_API_KEY

      // N'exposons pas les valeurs en console
      window.APP_CONFIG = { ENVIRONMENT: config.ENVIRONMENT || 'production' }

      // Signaler aux autres scripts que la config est prête
      window.dispatchEvent(new CustomEvent('app:config-ready'))
    } catch (error) {
      console.error('❌ Erreur lors du chargement de la configuration:', error)

      // Fallback silencieux: ne pas définir d'URL en prod si erreur
      window.APP_CONFIG = { ENVIRONMENT: 'fallback' }
    }
  }

  // Charger la configuration dès que le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadConfig)
  } else {
    loadConfig()
  }
})()
