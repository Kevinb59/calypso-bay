// Configuration pour le développement local (Live Server)
// Ce fichier est utilisé uniquement en développement local

;(function () {
  'use strict'

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

    console.log('✅ Configuration de développement chargée:', window.APP_CONFIG)
  }
})()
