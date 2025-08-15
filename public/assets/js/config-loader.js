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

        // Configuration par défaut pour le développement
        window.GAS_URL =
          'https://script.google.com/macros/s/AKfycbzkdj57oOwsWqewCnXgvXsCeE9WdG90alI8dt1d_lk3w_xszZfE0dNoe3DW-LkzCiY/exec'
        window.GAS_CONTACT_URL =
          'https://script.google.com/macros/s/AKfycbxYKzGO8Cn22Gh-XS-Qt4drqUYeLZETVPORXvlFKtnrCPR83Q-aGB9bev-CNwi_OVA/exec'

        window.APP_CONFIG = {
          GAS_URL: window.GAS_URL,
          GAS_CONTACT_URL: window.GAS_CONTACT_URL,
          ENVIRONMENT: 'development'
        }

        console.log(
          '✅ Configuration de développement chargée:',
          window.APP_CONFIG
        )
        return
      }

      // En production, récupérer depuis l'API
      console.log("🔧 Chargement de la configuration depuis l'API...")

      const response = await fetch('/api/config')

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`)
      }

      const config = await response.json()

      // Exposer les variables globalement
      window.GAS_URL = config.GAS_URL
      window.GAS_CONTACT_URL = config.GAS_CONTACT_URL

      window.APP_CONFIG = {
        GAS_URL: config.GAS_URL,
        GAS_CONTACT_URL: config.GAS_CONTACT_URL,
        ENVIRONMENT: config.ENVIRONMENT
      }

      console.log('✅ Configuration de production chargée:', window.APP_CONFIG)
    } catch (error) {
      console.error('❌ Erreur lors du chargement de la configuration:', error)

      // Fallback en cas d'erreur
      window.GAS_URL =
        'https://script.google.com/macros/s/AKfycbzkdj57oOwsWqewCnXgvXsCeE9WdG90alI8dt1d_lk3w_xszZfE0dNoe3DW-LkzCiY/exec'
      window.GAS_CONTACT_URL =
        'https://script.google.com/macros/s/AKfycbxYKzGO8Cn22Gh-XS-Qt4drqUYeLZETVPORXvlFKtnrCPR83Q-aGB9bev-CNwi_OVA/exec'

      window.APP_CONFIG = {
        GAS_URL: window.GAS_URL,
        GAS_CONTACT_URL: window.GAS_CONTACT_URL,
        ENVIRONMENT: 'fallback'
      }

      console.warn('⚠️ Configuration de fallback utilisée')
    }
  }

  // Charger la configuration dès que le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadConfig)
  } else {
    loadConfig()
  }
})()
