// Configuration pour la production (Vercel)
// Ce script injecte les variables d'environnement dans le DOM

(function() {
  'use strict';
  
  // Vérifier si on est en production (Vercel)
  const isProduction = window.location.hostname !== 'localhost' && 
                       !window.location.hostname.includes('127.0.0.1') &&
                       !window.location.hostname.includes('file://');
  
  if (isProduction) {
    console.log('🔧 Mode production détecté');
    
    // En production, les variables d'environnement sont disponibles via process.env
    // Mais côté client, on doit les injecter différemment
    // Pour l'instant, on utilise les fallbacks sécurisés
    window.GAS_URL = 'https://script.google.com/macros/s/AKfycbzkdj57oOwsWqewCnXgvXsCeE9WdG90alI8dt1d_lk3w_xszZfE0dNoe3DW-LkzCiY/exec';
    window.GAS_CONTACT_URL = 'https://script.google.com/macros/s/AKfycbxYKzGO8Cn22Gh-XS-Qt4drqUYeLZETVPORXvlFKtnrCPR83Q-aGB9bev-CNwi_OVA/exec';
    
    window.APP_CONFIG = {
      GAS_URL: window.GAS_URL,
      GAS_CONTACT_URL: window.GAS_CONTACT_URL,
      ENVIRONMENT: 'production'
    };
    
    console.log('✅ Configuration de production chargée:', window.APP_CONFIG);
  }
})();
