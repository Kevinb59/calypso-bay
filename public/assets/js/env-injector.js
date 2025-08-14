// Injecteur de variables d'environnement côté client
// Ce script doit être inclus dans le HTML pour exposer les variables d'environnement

;(function () {
  'use strict'

  // Fonction pour injecter les variables d'environnement dans le DOM
  function injectEnvironmentVariables() {
    // Récupérer les variables depuis le serveur (injectées par le middleware)
    let gasUrl = document
      .querySelector('meta[name="gas-url"]')
      ?.getAttribute('content')
    let gasContactUrl = document
      .querySelector('meta[name="gas-contact-url"]')
      ?.getAttribute('content')

    // Fallback pour le développement local (Live Server)
    if (!gasUrl) {
      gasUrl =
        'https://script.google.com/macros/s/AKfycbzkdj57oOwsWqewCnXgvXsCeE9WdG90alI8dt1d_lk3w_xszZfE0dNoe3DW-LkzCiY/exec'
      console.warn(
        '⚠️ Mode développement local - URL de réservation par défaut'
      )
    }
    if (!gasContactUrl) {
      gasContactUrl =
        'https://script.google.com/macros/s/AKfycbxYKzGO8Cn22Gh-XS-Qt4drqUYeLZETVPORXvlFKtnrCPR83Q-aGB9bev-CNwi_OVA/exec'
      console.warn('⚠️ Mode développement local - URL de contact par défaut')
    }

    // Exposer les variables globalement
    window.GAS_URL = gasUrl
    window.GAS_CONTACT_URL = gasContactUrl

    // Configuration globale
    window.APP_CONFIG = {
      GAS_URL: gasUrl,
      GAS_CONTACT_URL: gasContactUrl,
      ENVIRONMENT:
        document
          .querySelector('meta[name="environment"]')
          ?.getAttribute('content') || 'production'
    }

    console.log("🔧 Variables d'environnement injectées:", window.APP_CONFIG)

    // Vérification de sécurité (seulement en production)
    if (
      !gasUrl &&
      window.location.hostname !== 'localhost' &&
      !window.location.hostname.includes('127.0.0.1')
    ) {
      console.error(
        "❌ GAS_URL non configurée - Vérifiez vos variables d'environnement"
      )
    }
    if (
      !gasContactUrl &&
      window.location.hostname !== 'localhost' &&
      !window.location.hostname.includes('127.0.0.1')
    ) {
      console.error(
        "❌ GAS_CONTACT_URL non configurée - Vérifiez vos variables d'environnement"
      )
    }
  }

  // Injecter dès que le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectEnvironmentVariables)
  } else {
    injectEnvironmentVariables()
  }
})()
