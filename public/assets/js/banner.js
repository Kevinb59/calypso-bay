// 📤 Affiche la bannière + i18n FR/EN/DE
// Ce fichier rend la bannière compatible multi‑langues tout en
// conservant le format FR pour les clés du planning (CSV/JSON).

// Fonction pour formater les dates en format API sans décalage de fuseau horaire
function formatDateForAPI(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Détection de la langue depuis l'URL
const _path = window.location.pathname
let _lang = 'fr'
if (_path.includes('index-en')) _lang = 'en'
else if (_path.includes('index-de')) _lang = 'de'

// Locales d'affichage (⚠️ on garde 'fr-FR' pour les clés planning)
const DISPLAY_LOCALE = {
  fr: 'fr-FR',
  en: 'en-GB',
  de: 'de-DE'
}[_lang]

// Dictionnaire de traductions
const T = {
  fr: {
    staySummary: (a, b, n) =>
      `Séjour du <strong>${a}</strong> au <strong>${b}</strong> – <strong>${n} nuit${
        n > 1 ? 's' : ''
      }</strong>`,
    reqTitle: 'Demande de réservation',
    totalNights: (n) => `Total des nuits (${n})`,
    cleaning: 'Frais de ménage',
    taxes: (a) => `Taxes (${a} adulte${a > 1 ? 's' : ''})`,
    total: 'Total',
    childrenWarn: 'Les enfants de moins de 8 ans ne sont pas admis',
    step2Send:
      '<i class="fas fa-paper-plane"></i> Envoyer la demande de réservation',
    step2Sent: '<i class="fas fa-check"></i> Demande envoyée',
    sending: '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...',
    prev: 'Précédent',
    next: 'Suivant',
    cancel: 'Annuler',
    required: '<i class="fas fa-exclamation-triangle"></i> Champs requis',
    configErr:
      '<i class="fas fa-exclamation-triangle"></i> Erreur de configuration',
    serverErr: '<i class="fas fa-exclamation-triangle"></i> Erreur serveur',
    networkErr: (txt) => `<i class="fas fa-exclamation-triangle"></i> ${txt}`,
    networkTxt: 'Erreur réseau',
    connectTxt: 'Erreur de connexion',
    corsTxt: 'Erreur CORS',
    notFoundTxt: 'Script non trouvé',
    http500Txt: 'Erreur serveur',
    adultsLabel: (n) => `${n} adulte${n > 1 ? 's' : ''}`,
    childrenLabel: (n) => `${n} enfant${n > 1 ? 's' : ''}`,
    formName: 'Nom *',
    formEmail: 'Email *',
    formPhone: 'Téléphone',
    formMsg: 'Message (optionnel)',
    step2BtnText: 'Envoyer la demande de réservation'
  },
  en: {
    staySummary: (a, b, n) =>
      `Stay from <strong>${a}</strong> to <strong>${b}</strong> – <strong>${n} night${
        n > 1 ? 's' : ''
      }</strong>`,
    reqTitle: 'Reservation request',
    totalNights: (n) => `Total nights (${n})`,
    cleaning: 'Cleaning fee',
    taxes: (a) => `Taxes (${a} adult${a > 1 ? 's' : ''})`,
    total: 'Total',
    childrenWarn: 'Children under 8 are not allowed',
    step2Send: '<i class="fas fa-paper-plane"></i> Send reservation request',
    step2Sent: '<i class="fas fa-check"></i> Request sent',
    sending: '<i class="fas fa-spinner fa-spin"></i> Sending...',
    prev: 'Previous',
    next: 'Next',
    cancel: 'Cancel',
    required: '<i class="fas fa-exclamation-triangle"></i> Required fields',
    configErr:
      '<i class="fas fa-exclamation-triangle"></i> Configuration error',
    serverErr: '<i class="fas fa-exclamation-triangle"></i> Server error',
    networkErr: (txt) => `<i class="fas fa-exclamation-triangle"></i> ${txt}`,
    networkTxt: 'Network error',
    connectTxt: 'Connection error',
    corsTxt: 'CORS error',
    notFoundTxt: 'Script not found',
    http500Txt: 'Server error',
    adultsLabel: (n) => `${n} adult${n > 1 ? 's' : ''}`,
    childrenLabel: (n) => `${n} child${n > 1 ? 'ren' : ''}`,
    formName: 'Name *',
    formEmail: 'Email *',
    formPhone: 'Phone',
    formMsg: 'Message (optional)',
    step2BtnText: 'Send reservation request'
  },
  de: {
    staySummary: (a, b, n) =>
      `Aufenthalt vom <strong>${a}</strong> bis <strong>${b}</strong> – <strong>${n} Nacht${
        n > 1 ? 'e' : ''
      }</strong>`,
    reqTitle: 'Buchungsanfrage',
    totalNights: (n) => `Nächte gesamt (${n})`,
    cleaning: 'Reinigungsgebühr',
    taxes: (a) => `Steuern (${a} Erwachsene${a > 1 ? 'n' : ''})`,
    total: 'Summe',
    childrenWarn: 'Kinder unter 8 Jahren sind nicht zugelassen',
    step2Send: '<i class="fas fa-paper-plane"></i> Buchungsanfrage senden',
    step2Sent: '<i class="fas fa-check"></i> Anfrage gesendet',
    sending: '<i class="fas fa-spinner fa-spin"></i> Wird gesendet...',
    prev: 'Zurück',
    next: 'Weiter',
    cancel: 'Abbrechen',
    required: '<i class="fas fa-exclamation-triangle"></i> Pflichtfelder',
    configErr:
      '<i class="fas fa-exclamation-triangle"></i> Konfigurationsfehler',
    serverErr: '<i class="fas fa-exclamation-triangle"></i> Serverfehler',
    networkErr: (txt) => `<i class="fas fa-exclamation-triangle"></i> ${txt}`,
    networkTxt: 'Netzwerkfehler',
    connectTxt: 'Verbindungsfehler',
    corsTxt: 'CORS‑Fehler',
    notFoundTxt: 'Script nicht gefunden',
    http500Txt: 'Serverfehler',
    adultsLabel: (n) => `${n} Erwachsene${n > 1 ? 'n' : ''}`,
    childrenLabel: (n) => `${n} Kind${n > 1 ? 'er' : ''}`,
    formName: 'Name *',
    formEmail: 'E‑Mail *',
    formPhone: 'Telefon',
    formMsg: 'Nachricht (optional)',
    step2BtnText: 'Buchungsanfrage senden'
  }
}

// Utilitaires adultes/enfants pour les selects
const labelFns = {
  adulte: (n) => T[_lang].adultsLabel(n),
  enfant: (n) => T[_lang].childrenLabel(n)
}

// Référence d'état utilisée dans le reste du script original
let step = 1
let isBannerOpen = false

// 👉 Fonctions existantes adaptées à l'i18n
function showBannerPanel() {
  const nights = Math.round(
    (selectedEnd - selectedStart) / (1000 * 60 * 60 * 24)
  )

  const formatDate = (date) =>
    date
      .toLocaleDateString(DISPLAY_LOCALE, { day: '2-digit', month: 'long' })
      .replace(/^(\d{2}) (\w)/, (m, d, p1) => m.replace(p1, p1.toUpperCase()))

  const startStr = formatDate(selectedStart)
  const endStr = formatDate(selectedEnd)

  document.getElementById('mobile-start').textContent = startStr
  document.getElementById('mobile-end').textContent = endStr
  document.getElementById('mobile-nights').textContent = nights

  document.getElementById('mobile-banner').style.display = 'block'

  // Résumé en haut de la bannière
  document.getElementById('banner-summary').innerHTML = T[_lang].staySummary(
    startStr,
    endStr,
    nights
  )

  const stepIndicator = document.getElementById('step-indicator')
  if (stepIndicator) stepIndicator.style.display = 'none'

  updateTotalPrice()
}

function updateTotalPrice() {
  if (!selectedStart || !selectedEnd) return

  const adults = parseInt(document.getElementById('adults').value || '0')
  const children = parseInt(document.getElementById('children').value || '0')
  const touristTaxPerAdultPerNight = 2.3
  const cleaningFee = 100

  let nights = 0
  let baseTotal = 0
  let currentDate = new Date(selectedStart)

  // ⚠️ Clés du planning en FR pour rester compatibles avec les données existantes
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

  const childrenWarning =
    children > 0
      ? `
    <div style="margin-top: 0.75rem; padding: 0.5rem; background-color: rgba(255, 193, 7, 0.2); border-left: 3px solid #ffc107; border-radius: 3px;">
      <span style="color: #ffc107; font-size: 0.9em;">
        <i class="fas fa-exclamation-triangle" style="margin-right: 0.5rem;"></i>
        ${T[_lang].childrenWarn}
      </span>
    </div>
  `
      : ''

  container.innerHTML = `
    <div style="text-align: left;">
      <div style="display: flex; justify-content: space-between;">
        <span style="font-weight: normal;">${T[_lang].totalNights(
          nights
        )}</span>
        <strong>${baseTotal} €</strong>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span style="font-weight: normal;">${T[_lang].cleaning}</span>
        <strong>${cleaningFee} €</strong>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span style="font-weight: normal;">${T[_lang].taxes(adults)}</span>
        <strong>${taxTotal.toFixed(2)} €</strong>
      </div>
      <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.3); margin: 0.5rem 0;" />
      <div style="display: flex; justify-content: space-between; font-weight: bold;">
        <span>${T[_lang].total}</span>
        <span>${total.toFixed(2)} €</span>
      </div>
      ${childrenWarning}
    </div>
  `
}

function updateBannerSummary() {
  const summary = document.getElementById('banner-summary')
  const stepIndicator = document.getElementById('step-indicator')

  if (isBannerOpen || step >= 1) {
    summary.textContent = T[_lang].reqTitle
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

function goToStep2() {
  step = 2
  const details = document.getElementById('mobile-banner-details')
  details.classList.remove('open')
  details.classList.add('full')

  document.getElementById('toggle-banner').style.display = 'none'
  const stepToggle = document.getElementById('step-toggle')
  stepToggle.innerHTML = T[_lang].step2Send
  stepToggle.classList.remove('fa-arrow-circle-right')
  stepToggle.classList.add('fa-paper-plane')

  const cancel = document.getElementById('cancel-selection')
  cancel.textContent = T[_lang].prev
  cancel.classList.remove('fa-times')
  cancel.classList.add('fa-arrow-left')

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

  const stepToggle = document.getElementById('step-toggle')
  stepToggle.textContent = T[_lang].next
  stepToggle.classList.remove('fa-paper-plane')
  stepToggle.classList.add('fa-arrow-circle-right')

  const cancel = document.getElementById('cancel-selection')
  cancel.textContent = T[_lang].cancel
  cancel.classList.remove('fa-arrow-left')
  cancel.classList.add('fa-times')

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
      <div class="field" style="flex: 1; min-width: 100px;"><label for="r-name">${T[_lang].formName}</label><input type="text" id="r-name" required></div>
      <div class="field" style="flex: 1; min-width: 100px;"><label for="r-email">${T[_lang].formEmail}</label><input type="email" id="r-email" required></div>
      <div class="field" style="flex: 1; min-width: 100px;"><label for="r-phone">${T[_lang].formPhone}</label><input type="tel" id="r-phone"></div>
    </div>
    <div class="field"><label for="r-message">${T[_lang].formMsg}</label><textarea id="r-message" rows="3"></textarea></div>
  `

  const actions = container.querySelector('.actions')
  container.insertBefore(div, actions)
}

function removeStep2Fields() {
  const el = document.getElementById('step2-fields')
  if (el) el.remove()
}

function sendReservationRequest() {
  const name = document.getElementById('r-name')?.value.trim()
  const email = document.getElementById('r-email')?.value.trim()
  const phone = document.getElementById('r-phone')?.value.trim()
  const message = document.getElementById('r-message')?.value.trim()

  const stepToggle = document.getElementById('step-toggle')

  if (!name || !email) {
    stepToggle.innerHTML = T[_lang].required
    stepToggle.style.backgroundColor = '#ff4444'
    setTimeout(() => {
      stepToggle.innerHTML = T[_lang].step2Send
      stepToggle.style.backgroundColor = ''
    }, 2000)
    return
  }

  const adults = parseInt(document.getElementById('adults').value) || 0
  const children = parseInt(document.getElementById('children').value) || 0
  const startDate = selectedStart
  const endDate = selectedEnd
  const nights = Math.round(
    (selectedEnd - selectedStart) / (1000 * 60 * 60 * 24)
  )

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
    if (!isNaN(price)) baseTotal += price
    currentDate.setDate(currentDate.getDate() + 1)
  }

  const taxTotal =
    Math.round(adults * nights * touristTaxPerAdultPerNight * 100) / 100
  const total = Math.round((baseTotal + cleaningFee + taxTotal) * 100) / 100

  const formatDate = (date) =>
    date.toLocaleDateString(DISPLAY_LOCALE, {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })

  // Texte récapitulatif (utilisé dans l'email côté GAS)
  const recap = {
    fr: `Dates : ${formatDate(startDate)} au ${formatDate(
      endDate
    )} (${nights} nui${nights > 1 ? 'ts' : 't'})\nVoyageurs : ${adults} adulte${
      adults > 1 ? 's' : ''
    }${
      children > 0 ? `, ${children} enfant${children > 1 ? 's' : ''}` : ''
    }\n\nDétail du prix :\n• Total des nuits (${nights}) : ${baseTotal} €\n• Frais de ménage : ${cleaningFee} €\n• Taxes (${adults} adulte${
      adults > 1 ? 's' : ''
    }) : ${taxTotal.toFixed(2)} €\n• Total : ${total.toFixed(2)} €`,
    en: `Dates: ${formatDate(startDate)} to ${formatDate(
      endDate
    )} (${nights} night${nights > 1 ? 's' : ''})\nGuests: ${adults} adult${
      adults > 1 ? 's' : ''
    }${
      children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''
    }\n\nPrice details:\n• Total nights (${nights}): ${baseTotal} €\n• Cleaning fee: ${cleaningFee} €\n• Taxes (${adults} adult${
      adults > 1 ? 's' : ''
    }): ${taxTotal.toFixed(2)} €\n• Total: ${total.toFixed(2)} €`,
    de: `Daten: ${formatDate(startDate)} bis ${formatDate(
      endDate
    )} (${nights} Nacht${nights > 1 ? 'e' : ''})\nGäste: ${adults} Erwachsene${
      adults > 1 ? 'n' : ''
    }${
      children > 0 ? `, ${children} Kind${children > 1 ? 'er' : ''}` : ''
    }\n\nPreisdetails:\n• Nächte gesamt (${nights}): ${baseTotal} €\n• Reinigungsgebühr: ${cleaningFee} €\n• Steuern (${adults} Erwachsene${
      adults > 1 ? 'n' : ''
    }): ${taxTotal.toFixed(2)} €\n• Summe: ${total.toFixed(2)} €`
  }[_lang]

  const GAS_URL = window.GAS_URL
  if (!GAS_URL) {
    console.error(
      "❌ GAS_URL non configurée dans les variables d'environnement"
    )
    stepToggle.innerHTML = T[_lang].configErr
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
    startDate: formatDateForAPI(selectedStart),
    endDate: formatDateForAPI(selectedEnd),
    lang: _lang,
    recap
  })

  const originalText = stepToggle.textContent
  const originalIcon = stepToggle.querySelector('i')?.className || ''

  stepToggle.innerHTML = T[_lang].sending
  stepToggle.disabled = true

  console.log('🚀 Envoi de la demande de réservation...')

  fetch(`${GAS_URL}?${params.toString()}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
      return res.json()
    })
    .then((result) => {
      if (result.status === 'success') {
        stepToggle.innerHTML = T[_lang].step2Sent
        stepToggle.style.backgroundColor = '#00ff88'
        stepToggle.style.color = '#000'
        setTimeout(() => {
          resetSelection()
        }, 3000)
      } else {
        console.error('❌ Erreur côté serveur:', result.message)
        stepToggle.innerHTML = T[_lang].serverErr
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
      let msg = T[_lang].networkTxt
      if (err.name === 'TypeError' && err.message.includes('fetch'))
        msg = T[_lang].connectTxt
      else if (err.message.includes('CORS')) msg = T[_lang].corsTxt
      else if (err.message.includes('404')) msg = T[_lang].notFoundTxt
      else if (err.message.includes('500')) msg = T[_lang].http500Txt

      stepToggle.innerHTML = T[_lang].networkErr(msg)
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

function resetSelection() {
  selectedStart = null
  selectedEnd = null
  step = 1
  isBannerOpen = false

  document.getElementById('adults').value = '1'
  document.getElementById('children').value = '0'
  document.getElementById('mobile-banner').style.display = 'none'

  if (typeof window.planningResetSelection === 'function')
    window.planningResetSelection()

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
// (section DOMContentLoaded identique au fichier d'origine, avec libellés dynamiques)
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-banner')
  const bannerHeader = document.getElementById('mobile-banner-header')
  const details = document.getElementById('mobile-banner-details')

  const toggleBanner = () => {
    const open = details.classList.toggle('open')
    isBannerOpen = open
    toggleBtn.innerHTML = open
      ? '<i class="fa-regular fa-circle-down"></i>'
      : '<i class="fa-regular fa-circle-up"></i>'
    if (open) updateBannerSummary()
    else showBannerPanel()
  }

  let startY = 0,
    currentY = 0,
    isDragging = false,
    startTime = 0

  if (bannerHeader && details) {
    bannerHeader.addEventListener('click', (e) => {
      if (e.target === toggleBtn || e.target.closest('#toggle-banner')) return
      toggleBanner()
    })
  }

  const banner = document.getElementById('mobile-banner')
  const swipeIndicator = document.getElementById('swipe-indicator')

  if (banner && swipeIndicator) {
    banner.addEventListener('touchstart', handleTouchStart, { passive: true })
    banner.addEventListener('touchmove', handleTouchMove, { passive: false })
    banner.addEventListener('touchend', handleTouchEnd, { passive: true })
    banner.addEventListener('mousedown', handleMouseDown)
    banner.addEventListener('mousemove', handleMouseMove)
    banner.addEventListener('mouseup', handleMouseUp)
    banner.addEventListener('mouseleave', handleMouseUp)

    banner.addEventListener(
      'wheel',
      (e) => {
        if (e.target.matches('input, textarea')) e.stopPropagation()
      },
      { passive: false }
    )

    function handleTouchStart(e) {
      const isInteractive =
        e.target.matches('input, textarea, select, button, a') ||
        e.target.closest('input, textarea, select, button, a, .actions, .field')
      if (isInteractive) return
      startY = e.touches[0].clientY
      startTime = Date.now()
      isDragging = true
    }
    function handleTouchMove(e) {
      if (!isDragging) return
      const isInteractive =
        e.target.matches('input, textarea, select, button, a') ||
        e.target.closest('input, textarea, select, button, a, .actions, .field')
      if (isInteractive) {
        isDragging = false
        return
      }
      currentY = e.touches[0].clientY
      e.preventDefault()
    }
    function handleTouchEnd() {
      if (!isDragging) return
      const deltaY = currentY - startY
      const deltaTime = Date.now() - startTime
      const velocity = Math.abs(deltaY) / deltaTime
      if (Math.abs(deltaY) > 30 || velocity > 0.3) {
        if (deltaY > 0) {
          if (details.classList.contains('open')) toggleBanner()
        } else {
          if (!details.classList.contains('open')) toggleBanner()
        }
      }
      isDragging = false
    }
    function handleMouseDown(e) {
      const isInteractive =
        e.target.matches('input, textarea, select, button, a') ||
        e.target.closest('input, textarea, select, button, a, .actions, .field')
      if (isInteractive) return
      startY = e.clientY
      startTime = Date.now()
      isDragging = true
      banner.style.cursor = 'grabbing'
    }
    function handleMouseMove(e) {
      if (!isDragging) return
      currentY = e.clientY
    }
    function handleMouseUp() {
      if (!isDragging) return
      const deltaY = currentY - startY
      const deltaTime = Date.now() - startTime
      const velocity = Math.abs(deltaY) / deltaTime
      if (Math.abs(deltaY) > 30 || velocity > 0.3) {
        if (deltaY > 0) {
          if (details.classList.contains('open')) toggleBanner()
        } else {
          if (!details.classList.contains('open')) toggleBanner()
        }
      }
      isDragging = false
      banner.style.cursor = 'grab'
    }
  }

  if (toggleBtn && details) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      toggleBanner()
    })
  }

  const selectAdultes = document.getElementById('adults')
  const selectEnfants = document.getElementById('children')

  function updateChildrenOptions() {
    const nbAdultes = parseInt(selectAdultes.value) || 0
    const maxEnfants = 6 - nbAdultes
    const current = Math.min(parseInt(selectEnfants.value) || 0, maxEnfants)

    selectEnfants.innerHTML = ''
    for (let i = 0; i <= maxEnfants; i++) {
      const opt = document.createElement('option')
      opt.value = i
      opt.textContent = labelFns.enfant(i)
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
      opt.textContent = labelFns.adulte(i)
      if (i === current) opt.selected = true
      selectAdultes.appendChild(opt)
    }
    updateTotalPrice()
  }

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

  selectAdultes.addEventListener('change', updateChildrenOptions)
  selectEnfants.addEventListener('change', updateAdultsOptions)

  updateAdultsOptions()
  updateChildrenOptions()
})
