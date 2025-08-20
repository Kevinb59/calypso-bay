#!/usr/bin/env node

/**
 * Script pour configurer les variables d'environnement locales
 * Usage: node setup-local-env.js
 */

console.log(
  "🔧 Configuration des variables d'environnement locales pour Calypso Bay\n"
)

// Demander les valeurs à l'utilisateur
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve)
  })
}

async function setupLocalEnv() {
  try {
    console.log(
      'Veuillez fournir les informations suivantes pour le développement local :\n'
    )

    const gasUrl = await question(
      'URL du Google Apps Script pour les réservations: '
    )
    const gasContactUrl = await question(
      'URL du Google Apps Script pour le contact: '
    )
    const googleMapsApiKey = await question('Clé API Google Maps: ')

    console.log('\n📝 Configuration des variables localStorage...\n')

    // Générer le script JavaScript à exécuter dans la console du navigateur
    const jsScript = `
// Configuration des variables d'environnement locales
localStorage.setItem('GAS_URL', '${gasUrl}');
localStorage.setItem('GAS_CONTACT_URL', '${gasContactUrl}');
localStorage.setItem('GOOGLE_MAPS_API_KEY', '${googleMapsApiKey}');

console.log('✅ Variables d\'environnement locales configurées !');
console.log('🔄 Rechargez la page pour appliquer les changements.');
`

    console.log(
      'Copiez et collez le script suivant dans la console de votre navigateur :\n'
    )
    console.log('='.repeat(60))
    console.log(jsScript)
    console.log('='.repeat(60))
    console.log('\n💡 Instructions :')
    console.log('1. Ouvrez votre site en mode développement local')
    console.log('2. Ouvrez les outils de développement (F12)')
    console.log('3. Allez dans l\'onglet "Console"')
    console.log('4. Collez le script ci-dessus et appuyez sur Entrée')
    console.log('5. Rechargez la page')
    console.log(
      '\n🔒 Pour la production, configurez ces variables dans Vercel :'
    )
    console.log('- NEXT_PUBLIC_GAS_URL')
    console.log('- NEXT_PUBLIC_GAS_CONTACT_URL')
    console.log('- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY')
  } catch (error) {
    console.error('❌ Erreur lors de la configuration:', error)
  } finally {
    rl.close()
  }
}

setupLocalEnv()
