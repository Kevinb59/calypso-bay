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

      // En production, utiliser les variables d'environnement côté client
      // Ces variables doivent être définies dans le HTML ou via un script global

      // Vérifier si les variables sont déjà définies (par exemple dans index.html)
      if (window.GAS_URL && window.GAS_CONTACT_URL) {
        window.APP_CONFIG = { ENVIRONMENT: 'production' }
        window.dispatchEvent(new CustomEvent('app:config-ready'))
        return
      }

      // Fallback : essayer de récupérer depuis localStorage même en prod
      const prodGasUrl = localStorage.getItem('GAS_URL')
      const prodGasContactUrl = localStorage.getItem('GAS_CONTACT_URL')
      const prodGoogleMapsApiKey = localStorage.getItem('GOOGLE_MAPS_API_KEY')

      if (prodGasUrl && prodGasContactUrl) {
        window.GAS_URL = prodGasUrl
        window.GAS_CONTACT_URL = prodGasContactUrl
        window.GOOGLE_MAPS_API_KEY = prodGoogleMapsApiKey
        window.APP_CONFIG = { ENVIRONMENT: 'production' }
        window.dispatchEvent(new CustomEvent('app:config-ready'))
      } else {
        console.warn('⚠️ Variables de configuration manquantes en production')
        window.APP_CONFIG = { ENVIRONMENT: 'fallback' }
      }
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
