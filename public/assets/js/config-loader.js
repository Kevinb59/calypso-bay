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

        // N'exposons rien en console en dehors de l'environnement local
        window.APP_CONFIG = { ENVIRONMENT: 'development' }
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

      // N'exposons pas les valeurs en console
      window.APP_CONFIG = { ENVIRONMENT: config.ENVIRONMENT || 'production' }
    } catch (error) {
      console.error('❌ Erreur lors du chargement de la configuration:', error)

      // Fallback en cas d'erreur
      window.GAS_URL =
        'https://script.google.com/macros/s/AKfycbzkdj57oOwsWqewCnXgvXsCeE9WdG90alI8dt1d_lk3w_xszZfE0dNoe3DW-LkzCiY/exec'
      window.GAS_CONTACT_URL =
        'https://script.google.com/macros/s/AKfycbxYKzGO8Cn22Gh-XS-Qt4drqUYeLZETVPORXvlFKtnrCPR83Q-aGB9bev-CNwi_OVA/exec'

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
