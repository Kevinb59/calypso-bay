// ========================================================
// 🚧 CONFIGURATION DU SITE CALYPSO BAY
// ========================================================

// MODE CONSTRUCTION : Changez "true" en "false" pour désactiver
const CONSTRUCTION_MODE = false

// ========================================================
// 📅 CONFIGURATION DU PLANNING
// ========================================================

// Activer/désactiver le message de construction
function toggleConstructionMode() {
  const planningSection = document.querySelector('.planning-section')
  const overlay = document.querySelector('.planning-overlay')
  const notice = document.querySelector('.construction-notice')

  if (CONSTRUCTION_MODE) {
    // Mode construction activé
    planningSection.classList.add('construction-mode')
    if (overlay) overlay.style.display = 'block'
    if (notice) notice.style.display = 'block'
  } else {
    // Mode construction désactivé
    planningSection.classList.remove('construction-mode')
    if (overlay) overlay.style.display = 'none'
    if (notice) notice.style.display = 'none'
  }
}

// Exécuter au chargement de la page
document.addEventListener('DOMContentLoaded', toggleConstructionMode)

// Exporter pour utilisation externe
window.CONSTRUCTION_MODE = CONSTRUCTION_MODE
window.toggleConstructionMode = toggleConstructionMode
