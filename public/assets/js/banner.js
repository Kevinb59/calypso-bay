// 📤 Affiche la bannière
function showBannerPanel() {
  const nights = Math.round(
    (selectedEnd - selectedStart) / (1000 * 60 * 60 * 24)
  )

  const formatDate = (date) => {
    return date
      .toLocaleDateString('fr-FR', { day: '2-digit', month: 'long' })
      .replace(/^\d{2} (\w)/, (match, p1) =>
        match.replace(p1, p1.toUpperCase())
      )
  }

  const startStr = formatDate(selectedStart)
  const endStr = formatDate(selectedEnd)

  document.getElementById('mobile-start').textContent = startStr
  document.getElementById('mobile-end').textContent = endStr
  document.getElementById('mobile-nights').textContent = nights

  document.getElementById('mobile-banner').style.display = 'block'

  // ✅ Texte formaté avec uniquement dates et nuits en gras
  document.getElementById(
    'banner-summary'
  ).innerHTML = `Séjour du <strong>${startStr}</strong> au <strong>${endStr}</strong> – <strong>${nights} nuits</strong>`

  // ✅ Cache les ronds uniquement en mode compact
  const stepIndicator = document.getElementById('step-indicator')
  if (stepIndicator) stepIndicator.style.display = 'none'

  updateTotalPrice()
}

// 💸 Met à jour le prix total réel (en fonction du planning CSV)
function updateTotalPrice() {
  if (!selectedStart || !selectedEnd) return

  const adults = parseInt(document.getElementById('adults').value || '0')
  const children = parseInt(document.getElementById('children').value || '0')
  const touristTaxPerAdultPerNight = 2.3
  const cleaningFee = 100

  let nights = 0
  let baseTotal = 0
  let currentDate = new Date(selectedStart)

  while (currentDate < selectedEnd) {
    const key = currentDate
      .toLocaleDateString('fr-FR', {
        weekday: 'short',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
      .toLowerCase()

    const value = planningData[key]
    const price = parseFloat(value)

    if (!isNaN(price)) {
      baseTotal += price
      nights++
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  const taxTotal =
    Math.round(adults * nights * touristTaxPerAdultPerNight * 100) / 100
  const total = Math.round((baseTotal + cleaningFee + taxTotal) * 100) / 100

  const container = document.getElementById('total-price')

  // Message d'avertissement pour les enfants
  const childrenWarning =
    children > 0
      ? `
    <div style="margin-top: 0.75rem; padding: 0.5rem; background-color: rgba(255, 193, 7, 0.2); border-left: 3px solid #ffc107; border-radius: 3px;">
      <span style="color: #ffc107; font-size: 0.9em;">
        <i class="fas fa-exclamation-triangle" style="margin-right: 0.5rem;"></i>
        Les enfants de moins de 8 ans ne sont pas admis
      </span>
    </div>
  `
      : ''

  container.innerHTML = `
    <div style="text-align: left;">
      <div style="display: flex; justify-content: space-between;">
        <span style="font-weight: normal;">Total des nuits (${nights})</span>
        <strong>${baseTotal} €</strong>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span style="font-weight: normal;">Frais de ménage</span>
        <strong>${cleaningFee} €</strong>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span style="font-weight: normal;">Taxes (${adults} adulte${
    adults > 1 ? 's' : ''
  })</span>
        <strong>${taxTotal.toFixed(2)} €</strong>
      </div>
      <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.3); margin: 0.5rem 0;" />
      <div style="display: flex; justify-content: space-between; font-weight: bold;">
        <span>Total</span>
        <span>${total.toFixed(2)} €</span>
      </div>
      ${childrenWarning}
    </div>
  `
}

// 🧾 Mise à jour du titre et des pastilles d'étape
function updateBannerSummary() {
  const summary = document.getElementById('banner-summary')
  const stepIndicator = document.getElementById('step-indicator')

  if (isBannerOpen || step >= 1) {
    summary.textContent = 'Demande de réservation'
    if (stepIndicator) stepIndicator.style.display = 'flex'

    const dot1 = document.getElementById('step-dot-1')
    const dot2 = document.getElementById('step-dot-2')

    if (dot1 && dot2) {
      dot1.style.color = step >= 1 ? '#00ff88' : 'white'
      dot1.style.opacity = step >= 1 ? '1' : '0.4'

      dot2.style.color = step === 2 ? '#00ff88' : 'white'
      dot2.style.opacity = step === 2 ? '1' : '0.4'
    }
  } else {
    if (stepIndicator) stepIndicator.style.display = 'none'
  }
}

let step = 1
let isBannerOpen = false

function goToStep2() {
  step = 2
  const details = document.getElementById('mobile-banner-details')
  details.classList.remove('open')
  details.classList.add('full')

  document.getElementById('toggle-banner').style.display = 'none'
  document.getElementById('step-toggle').textContent =
    'Envoyer la demande de réservation'
  document
    .getElementById('step-toggle')
    .classList.remove('fa-arrow-circle-right')
  document.getElementById('step-toggle').classList.add('fa-paper-plane')

  document.getElementById('cancel-selection').textContent = 'Précédent'
  document.getElementById('cancel-selection').classList.remove('fa-times')
  document.getElementById('cancel-selection').classList.add('fa-arrow-left')

  updateBannerSummary()

  document.getElementById('adults').disabled = true
  document.getElementById('children').disabled = true
  document.getElementById('adults').classList.add('locked')
  document.getElementById('children').classList.add('locked')

  addStep2Fields()
}

function goToStep1() {
  step = 1
  const details = document.getElementById('mobile-banner-details')
  details.classList.remove('full')

  setTimeout(() => {
    details.classList.add('open')
  }, 10)

  const toggleBtn = document.getElementById('toggle-banner')
  toggleBtn.style.display = 'inline-block'
  toggleBtn.innerHTML = '<i class="fa-regular fa-circle-down"></i>'

  document.getElementById('step-toggle').textContent = 'Suivant'
  document.getElementById('step-toggle').classList.remove('fa-paper-plane')
  document.getElementById('step-toggle').classList.add('fa-arrow-circle-right')

  document.getElementById('cancel-selection').textContent = 'Annuler'
  document.getElementById('cancel-selection').classList.remove('fa-arrow-left')
  document.getElementById('cancel-selection').classList.add('fa-times')

  updateBannerSummary()

  document.getElementById('adults').disabled = false
  document.getElementById('children').disabled = false
  document.getElementById('adults').classList.remove('locked')
  document.getElementById('children').classList.remove('locked')

  setTimeout(() => {
    removeStep2Fields()
  }, 600)
}

function addStep2Fields() {
  const container = document.getElementById('mobile-banner-details')
  if (document.getElementById('step2-fields')) return

  const div = document.createElement('div')
  div.id = 'step2-fields'
  div.innerHTML = `
    <div class="fields" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 1rem;">
      <div class="field" style="flex: 1; min-width: 100px;"><label for="r-name">Nom *</label><input type="text" id="r-name" required></div>
      <div class="field" style="flex: 1; min-width: 100px;"><label for="r-email">Email *</label><input type="email" id="r-email" required></div>
      <div class="field" style="flex: 1; min-width: 100px;"><label for="r-phone">Téléphone</label><input type="tel" id="r-phone"></div>
    </div>
    <div class="field"><label for="r-message">Message (optionnel)</label><textarea id="r-message" rows="3"></textarea></div>
  `

  const actions = container.querySelector('.actions')
  container.insertBefore(div, actions)
}

function removeStep2Fields() {
  const el = document.getElementById('step2-fields')
  if (el) el.remove()
}

// 🚀 Envoi de la demande de réservation
function sendReservationRequest() {
  const name = document.getElementById('r-name')?.value.trim()
  const email = document.getElementById('r-email')?.value.trim()
  const phone = document.getElementById('r-phone')?.value.trim()
  const message = document.getElementById('r-message')?.value.trim()

  // Validation des champs obligatoires
  if (!name || !email) {
    const stepToggle = document.getElementById('step-toggle')
    stepToggle.innerHTML =
      '<i class="fas fa-exclamation-triangle"></i> Champs requis'
    stepToggle.style.backgroundColor = '#ff4444'

    setTimeout(() => {
      stepToggle.innerHTML =
        '<i class="fas fa-paper-plane"></i> Envoyer la demande de réservation'
      stepToggle.style.backgroundColor = ''
    }, 2000)
    return
  }

  // Récupération des données de réservation
  const adults = parseInt(document.getElementById('adults').value) || 0
  const children = parseInt(document.getElementById('children').value) || 0
  const startDate = selectedStart
  const endDate = selectedEnd
  const nights = Math.round(
    (selectedEnd - selectedStart) / (1000 * 60 * 60 * 24)
  )

  // Calcul du prix total
  const touristTaxPerAdultPerNight = 2.3
  const cleaningFee = 100
  let baseTotal = 0
  let currentDate = new Date(selectedStart)

  while (currentDate < selectedEnd) {
    const key = currentDate
      .toLocaleDateString('fr-FR', {
        weekday: 'short',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
      .toLowerCase()

    const value = planningData[key]
    const price = parseFloat(value)

    if (!isNaN(price)) {
      baseTotal += price
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  const taxTotal =
    Math.round(adults * nights * touristTaxPerAdultPerNight * 100) / 100
  const total = Math.round((baseTotal + cleaningFee + taxTotal) * 100) / 100

  // Formatage des dates
  const formatDate = (date) => {
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  // Préparation des données de réservation structurées
  const reservationDetails = `Dates : ${formatDate(startDate)} au ${formatDate(
    endDate
  )} (${nights} nuits)
Voyageurs : ${adults} adulte${adults > 1 ? 's' : ''}${
    children > 0 ? `, ${children} enfant${children > 1 ? 's' : ''}` : ''
  }

Détail du prix :
• Total des nuits (${nights}) : ${baseTotal} €
• Frais de ménage : ${cleaningFee} €
• Taxes (${adults} adulte${adults > 1 ? 's' : ''}) : ${taxTotal.toFixed(2)} €
• Total : ${total.toFixed(2)} €`

  // Envoi via le script Google Apps Script pour les réservations
  // URL récupérée depuis les variables d'environnement
  const GAS_URL = window.GAS_URL

  // Récupérer l'élément stepToggle avant de l'utiliser
  const stepToggle = document.getElementById('step-toggle')

  // Vérification que l'URL est configurée
  if (!GAS_URL) {
    console.error(
      "❌ GAS_URL non configurée dans les variables d'environnement"
    )
    stepToggle.innerHTML =
      '<i class="fas fa-exclamation-triangle"></i> Erreur de configuration'
    stepToggle.style.backgroundColor = '#ff4444'
    return
  }

  const params = new URLSearchParams({
    name,
    email,
    tel: phone || '',
    userMessage: message || '',
    nbAdults: adults,
    nbChilds: children,
    nbNights: nights,
    priceNights: baseTotal,
    priceClean: cleaningFee,
    priceTax: taxTotal,
    priceTotal: total,
    startDate: selectedStart.toISOString().split('T')[0],
    endDate: selectedEnd.toISOString().split('T')[0]
  })

  // Mise à jour du bouton pendant l'envoi
  const originalText = stepToggle.textContent
  const originalIcon = stepToggle.querySelector('i')?.className || ''

  stepToggle.innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...'
  stepToggle.disabled = true

  // Log pour débogage
  console.log('🚀 Envoi de la demande de réservation...')
  // Logs anonymisés (pas d'URL ni de données sensibles en console)
  console.log('📡 Envoi de la demande de réservation...')

  fetch(`${GAS_URL}?${params.toString()}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then((res) => {
      console.log('📥 Réponse reçue:', res.status, res.statusText)

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`)
      }

      return res.json()
    })
    .then((result) => {
      console.log('✅ Réponse JSON:', result)

      if (result.status === 'success') {
        stepToggle.innerHTML = '<i class="fas fa-check"></i> Demande envoyée'
        stepToggle.style.backgroundColor = '#00ff88'
        stepToggle.style.color = '#000'

        // Réinitialiser après 3 secondes
        setTimeout(() => {
          resetSelection()
        }, 3000)
      } else {
        console.error('❌ Erreur côté serveur:', result.message)
        stepToggle.innerHTML =
          '<i class="fas fa-exclamation-triangle"></i> Erreur serveur'
        stepToggle.style.backgroundColor = '#ff4444'

        setTimeout(() => {
          stepToggle.innerHTML = originalIcon
            ? `<i class="${originalIcon}"></i> ${originalText}`
            : originalText
          stepToggle.disabled = false
          stepToggle.style.backgroundColor = ''
          stepToggle.style.color = ''
        }, 3000)
      }
    })
    .catch((err) => {
      console.error("❌ Erreur lors de l'envoi:", err)
      console.error("🔍 Type d'erreur:", err.name)
      console.error("📝 Message d'erreur:", err.message)

      let errorMessage = 'Erreur réseau'

      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        errorMessage = 'Erreur de connexion'
      } else if (err.message.includes('CORS')) {
        errorMessage = 'Erreur CORS'
      } else if (err.message.includes('404')) {
        errorMessage = 'Script non trouvé'
      } else if (err.message.includes('500')) {
        errorMessage = 'Erreur serveur'
      }

      stepToggle.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${errorMessage}`
      stepToggle.style.backgroundColor = '#ff4444'

      setTimeout(() => {
        stepToggle.innerHTML = originalIcon
          ? `<i class="${originalIcon}"></i> ${originalText}`
          : originalText
        stepToggle.disabled = false
        stepToggle.style.backgroundColor = ''
        stepToggle.style.color = ''
      }, 3000)
    })
}

// 🔄 Réinitialisation de la sélection
function resetSelection() {
  selectedStart = null
  selectedEnd = null
  step = 1
  isBannerOpen = false

  // Réinitialiser les champs
  document.getElementById('adults').value = '1'
  document.getElementById('children').value = '0'

  // Cacher la bannière
  document.getElementById('mobile-banner').style.display = 'none'

  // Réinitialiser le calendrier via l'API globale du planning
  if (typeof window.planningResetSelection === 'function') {
    window.planningResetSelection()
  }

  // Réinitialiser les champs du formulaire
  const rName = document.getElementById('r-name')
  const rEmail = document.getElementById('r-email')
  const rPhone = document.getElementById('r-phone')
  const rMessage = document.getElementById('r-message')

  if (rName) rName.value = ''
  if (rEmail) rEmail.value = ''
  if (rPhone) rPhone.value = ''
  if (rMessage) rMessage.value = ''
}

// 🧠 Logique de la bannière : toggle, validation, choix
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-banner')
  const bannerHeader = document.getElementById('mobile-banner-header')
  const details = document.getElementById('mobile-banner-details')

  // Fonction pour basculer l'état de la bannière
  const toggleBanner = () => {
    const open = details.classList.toggle('open')
    isBannerOpen = open

    toggleBtn.innerHTML = open
      ? '<i class="fa-regular fa-circle-down"></i>'
      : '<i class="fa-regular fa-circle-up"></i>'

    if (open) {
      updateBannerSummary()
    } else {
      showBannerPanel() // ✅ restaurer correctement le résumé
    }
  }

  // Variables pour le swipe
  let startY = 0
  let currentY = 0
  let isDragging = false
  let startTime = 0

  // Ajouter l'événement sur le header de la bannière
  if (bannerHeader && details) {
    bannerHeader.addEventListener('click', (e) => {
      // Éviter de déclencher si on clique sur le bouton toggle
      if (e.target === toggleBtn || e.target.closest('#toggle-banner')) {
        return
      }
      toggleBanner()
    })
  }

  // Gestion des gestes tactiles pour la bannière
  const banner = document.getElementById('mobile-banner')
  const swipeIndicator = document.getElementById('swipe-indicator')

  if (banner && swipeIndicator) {
    // Événements tactiles
    banner.addEventListener('touchstart', handleTouchStart, { passive: true })
    banner.addEventListener('touchmove', handleTouchMove, { passive: false })
    banner.addEventListener('touchend', handleTouchEnd, { passive: true })

    // Événements souris pour les écrans tactiles avec souris
    banner.addEventListener('mousedown', handleMouseDown)
    banner.addEventListener('mousemove', handleMouseMove)
    banner.addEventListener('mouseup', handleMouseUp)
    banner.addEventListener('mouseleave', handleMouseUp)

    // Empêcher le scroll de la page quand on est dans un champ de saisie
    banner.addEventListener(
      'wheel',
      (e) => {
        if (e.target.matches('input, textarea')) {
          e.stopPropagation()
        }
      },
      { passive: false }
    )

    function handleTouchStart(e) {
      // Vérifier si on touche un élément interactif
      const isInteractive =
        e.target.matches('input, textarea, select, button, a') ||
        e.target.closest('input, textarea, select, button, a, .actions, .field')

      if (isInteractive) {
        return
      }

      startY = e.touches[0].clientY
      startTime = Date.now()
      isDragging = true
      // Ne pas empêcher le comportement par défaut pour permettre les clics
    }

    function handleTouchMove(e) {
      if (!isDragging) return

      // Vérifier si on touche un élément interactif
      const isInteractive =
        e.target.matches('input, textarea, select, button, a') ||
        e.target.closest('input, textarea, select, button, a, .actions, .field')

      if (isInteractive) {
        isDragging = false
        return
      }

      currentY = e.touches[0].clientY
      // Empêcher le scroll seulement pendant le swipe
      e.preventDefault()
    }

    function handleTouchEnd(e) {
      if (!isDragging) return
      const deltaY = currentY - startY
      const deltaTime = Date.now() - startTime
      const velocity = Math.abs(deltaY) / deltaTime

      // Seuil de vitesse et distance pour déclencher le swipe
      if (Math.abs(deltaY) > 30 || velocity > 0.3) {
        if (deltaY > 0) {
          // Swipe vers le bas = fermer
          if (details.classList.contains('open')) {
            toggleBanner()
          }
        } else {
          // Swipe vers le haut = ouvrir
          if (!details.classList.contains('open')) {
            toggleBanner()
          }
        }
      }
      isDragging = false
    }

    function handleMouseDown(e) {
      // Vérifier si on clique sur un élément interactif
      const isInteractive =
        e.target.matches('input, textarea, select, button, a') ||
        e.target.closest('input, textarea, select, button, a, .actions, .field')

      if (isInteractive) {
        return
      }

      startY = e.clientY
      startTime = Date.now()
      isDragging = true
      banner.style.cursor = 'grabbing'
    }

    function handleMouseMove(e) {
      if (!isDragging) return
      currentY = e.clientY
    }

    function handleMouseUp(e) {
      if (!isDragging) return
      const deltaY = currentY - startY
      const deltaTime = Date.now() - startTime
      const velocity = Math.abs(deltaY) / deltaTime

      // Seuil de vitesse et distance pour déclencher le swipe
      if (Math.abs(deltaY) > 30 || velocity > 0.3) {
        if (deltaY > 0) {
          // Swipe vers le bas = fermer
          if (details.classList.contains('open')) {
            toggleBanner()
          }
        } else {
          // Swipe vers le haut = ouvrir
          if (!details.classList.contains('open')) {
            toggleBanner()
          }
        }
      }
      isDragging = false
      banner.style.cursor = 'grab'
    }
  }

  // Garder l'événement sur le bouton toggle aussi
  if (toggleBtn && details) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation() // Empêcher la propagation vers le header
      toggleBanner()
    })
  }

  const selectAdultes = document.getElementById('adults')
  const selectEnfants = document.getElementById('children')

  const path = window.location.pathname
  let lang = 'fr'
  if (path.includes('index-en')) lang = 'en'
  else if (path.includes('index-de')) lang = 'de'

  const labels = {
    fr: {
      adulte: (n) => `${n} adulte${n > 1 ? 's' : ''}`,
      enfant: (n) => `${n} enfant${n > 1 ? 's' : ''}`
    },
    en: {
      adulte: (n) => `${n} adult${n > 1 ? 's' : ''}`,
      enfant: (n) => `${n} child${n > 1 ? 'ren' : ''}`
    },
    de: {
      adulte: (n) => `${n} Erwachsene${n > 1 ? 'n' : ''}`,
      enfant: (n) => `${n} Kind${n > 1 ? 'er' : ''}`
    }
  }

  function updateChildrenOptions() {
    const nbAdultes = parseInt(selectAdultes.value) || 0
    const maxEnfants = 6 - nbAdultes
    const current = Math.min(parseInt(selectEnfants.value) || 0, maxEnfants)

    selectEnfants.innerHTML = ''
    for (let i = 0; i <= maxEnfants; i++) {
      const opt = document.createElement('option')
      opt.value = i
      opt.textContent = labels[lang].enfant(i)
      if (i === current) opt.selected = true
      selectEnfants.appendChild(opt)
    }
    updateTotalPrice()
  }

  function updateAdultsOptions() {
    const nbEnfants = parseInt(selectEnfants.value) || 0
    const maxAdultes = 6 - nbEnfants
    const current = Math.min(parseInt(selectAdultes.value) || 1, maxAdultes)

    selectAdultes.innerHTML = ''
    for (let i = 1; i <= maxAdultes; i++) {
      const opt = document.createElement('option')
      opt.value = i
      opt.textContent = labels[lang].adulte(i)
      if (i === current) opt.selected = true
      selectAdultes.appendChild(opt)
    }
    updateTotalPrice()
  }

  selectAdultes.addEventListener('change', updateChildrenOptions)
  selectEnfants.addEventListener('change', updateAdultsOptions)

  document.getElementById('step-toggle')?.addEventListener('click', (e) => {
    e.preventDefault()
    if (step === 1) goToStep2()
    else sendReservationRequest()
  })

  document
    .getElementById('cancel-selection')
    ?.addEventListener('click', (e) => {
      e.preventDefault()
      if (step === 2) goToStep1()
      else resetSelection()
    })

  updateAdultsOptions()
  updateChildrenOptions()
})
