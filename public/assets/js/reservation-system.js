// ============================================================================
// LOGIQUE COMMUNE POUR LE SYSTÈME DE RÉSERVATION
// ============================================================================

let currentLang = 'fr'

// Fonction pour traduire la page
function translatePage(lang) {
  currentLang = lang
  const t = window.translations[lang]['annuler-reservation']
  const common = window.translations[lang].common

  // Mettre à jour le titre de la page
  document.title = t.title

  // Traduire la bannière
  document.getElementById('banner-title').textContent = t.banner.title
  document.getElementById('banner-subtitle').textContent = t.banner.subtitle
  document.getElementById('banner-description').textContent =
    t.banner.description
  document.getElementById('banner-button').textContent = t.banner.button

  // Traduire la section récapitulatif
  document.getElementById('recap-title').textContent = t.recap.title
  document.getElementById('recap-loading').textContent = t.recap.loading

  // Traduire la section formulaire
  document.getElementById('form-title').textContent = t.form.title
  document.getElementById('policy-loading').textContent = t.form.loading
  document.getElementById('reason-label').textContent = t.form.reason_label
  document.getElementById('reason').placeholder = t.form.reason_placeholder
  document.getElementById('submit-button-text').textContent =
    t.form.submit_button

  // Traduire la modal de confirmation
  setTimeout(() => {
    const confirmBox = document.querySelector('.confirm-box')
    if (confirmBox) {
      confirmBox.querySelector('h4').textContent = t.confirmation.title
      confirmBox.querySelector('p').textContent = t.confirmation.message
      document.querySelector('#co-cancel').textContent = t.confirmation.cancel
      document.querySelector('#co-confirm').textContent = t.confirmation.confirm
    }
  }, 100)

  // Mettre à jour le sélecteur de langue
  if (document.querySelector('#language-selector')) {
    document.querySelector('#language-selector').value = lang
  }

  // Mettre à jour l'URL avec la nouvelle langue
  const url = new URL(window.location)
  url.searchParams.set('lang', lang)
  window.history.replaceState({}, '', url)

  // Mettre à jour le récapitulatif si les données sont déjà chargées
  updateTranslationsAfterLoad()
}

// Fonction pour traduire les éléments dynamiques du récapitulatif
function translateRecapContent(data, lang) {
  const common = window.translations[lang].common
  const fmtMoney = (v) =>
    Number(v || 0).toLocaleString(
      lang === 'de' ? 'de-DE' : lang === 'en' ? 'en-GB' : 'fr-FR',
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    )
  const s = new Date(data.startDate)
  const e = new Date(data.endDate)
  const fmtDate = (dt) =>
    dt.toLocaleDateString(
      lang === 'de' ? 'de-DE' : lang === 'en' ? 'en-GB' : 'fr-FR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
    )

  const lines = []
  lines.push(
    `<div class="detail-item"><strong>${common.dates}</strong><span>${fmtDate(
      s
    )} ${lang === 'de' ? 'bis' : lang === 'en' ? 'to' : 'au'} ${fmtDate(e)} (${
      data.nbNights
    } ${common.nights})</span></div>`
  )

  const adultText = data.nbAdults > 1 ? common.adults_plural : common.adults
  const childText = data.nbChilds > 1 ? common.children_plural : common.children
  lines.push(
    `<div class="detail-item"><strong>${common.travelers}</strong><span>${
      data.nbAdults
    } ${adultText}${
      data.nbChilds > 0 ? `, ${data.nbChilds} ${childText}` : ''
    }</span></div>`
  )

  lines.push(
    `<div class="detail-item" style="border-bottom:none; display:block; padding-bottom:0;">
      <div><strong>${common.price_details}</strong></div>
      <div style="padding-top:8px">• ${common.nights_total.replace(
        '{count}',
        data.nbNights
      )} ${fmtMoney(data.priceNights)} ${common.currency}</div>
      <div>• ${common.cleaning_fees} ${fmtMoney(data.priceClean)} ${
      common.currency
    }</div>
      <div>• ${common.taxes
        .replace('{count}', data.nbAdults)
        .replace('{adult_text}', adultText)} ${fmtMoney(data.priceTax)} ${
      common.currency
    }</div>
      <div>• <strong>${common.total} ${fmtMoney(data.priceTotal)} ${
      common.currency
    }</strong></div>
    </div>`
  )

  return (
    lines.join('') +
    `<div class="pills">
       <span class="pill ${data.depositAmount > 0 ? 'green' : 'red'}">${
      data.depositAmount > 0 ? '✅' : '❌'
    } ${common.deposit} ${fmtMoney(data.depositAmount)} ${
      common.currency
    }</span>
       <span class="pill ${data.status === 'balancePay' ? 'green' : 'red'}">${
      data.status === 'balancePay' ? '✅' : '❌'
    } ${common.balance} ${fmtMoney(data.balanceAmount || 0)} ${
      common.currency
    }</span>
     </div>`
  )
}

// Mettre à jour les traductions après chargement des données
function updateTranslationsAfterLoad() {
  if (window.reservationData) {
    const recapEl = document.getElementById('reservation-recap')
    if (recapEl && !recapEl.textContent.includes('Chargement')) {
      const balanceAmount = Number(
        window.reservationData.balanceAmount ||
          Math.max(
            0,
            Number(window.reservationData.priceTotal || 0) -
              Number(window.reservationData.depositAmount || 0)
          )
      )
      const dataForRecap = { ...window.reservationData, balanceAmount }
      recapEl.innerHTML = translateRecapContent(dataForRecap, currentLang)
    }
  }
}

// Charger les données de réservation
async function load() {
  if (!token) {
    const t = window.translations[currentLang]['annuler-reservation']
    policyBox.innerHTML = `<span>${t.errors.missing_token}</span>`
    btn.disabled = true
    return
  }
  try {
    const res = await fetch(
      `/api/reservations?action=get&token=${encodeURIComponent(token)}`
    )
    const json = await res.json()
    if (json.status !== 'success') {
      const t = window.translations[currentLang]['annuler-reservation']
      policyBox.innerHTML = `<span>${
        json.message || t.errors.reservation_not_found
      }</span>`
      btn.disabled = true
      return
    }
    const d = json.data
    // Sauvegarder les données pour les traductions
    window.reservationData = d

    // Récapitulatif complet avec traductions
    const recapEl = document.getElementById('reservation-recap')
    const recapBalanceAmount = Number(
      d.balanceAmount ||
        Math.max(0, Number(d.priceTotal || 0) - Number(d.depositAmount || 0))
    )
    const dataForRecap = { ...d, balanceAmount: recapBalanceAmount }
    recapEl.innerHTML = translateRecapContent(dataForRecap, currentLang)

    const start = new Date(d.startDate)
    const now = new Date()
    const diffDays = Math.ceil((start - now) / (1000 * 60 * 60 * 24))
    const t = window.translations[currentLang]['annuler-reservation']

    // Déterminer le message de politique selon les conditions
    let msg
    const depositAmount = Number(d.depositAmount || 0)
    const balanceAmount = Number(d.balanceAmount || 0)
    const hasDeposit = depositAmount > 0
    const hasBalance = balanceAmount > 0
    const isMoreThan3Months = diffDays >= 90

    if (!hasDeposit) {
      // Acompte non payé
      msg = t.policy.no_deposit
    } else if (hasDeposit && !hasBalance) {
      // Acompte payé mais pas le solde
      if (isMoreThan3Months) {
        msg = t.policy.free_cancellation_deposit_only
      } else {
        msg = t.policy.deposit_retained
      }
    } else if (hasDeposit && hasBalance) {
      // Acompte et solde payés
      if (isMoreThan3Months) {
        msg = t.policy.free_cancellation_full_payment
      } else {
        msg = t.policy.deposit_retained_balance_refunded
      }
    }

    // Désactiver le bouton si pas d'acompte
    if (!hasDeposit) {
      btn.disabled = true
      policyBox.classList.add('error')
    } else {
      btn.disabled = false
      policyBox.classList.remove('error')
    }

    policyBox.innerHTML = `<span>${msg}</span>`
    policyBox.style.color = '#fff'
    policyBox.style.opacity = '0.95'
  } catch (e) {
    const t = window.translations[currentLang]['annuler-reservation']
    policyBox.innerHTML = `<span>${t.errors.loading_error}</span>`
  }
}

// Initialisation de la page
function initPage() {
  // Créer l'overlay de confirmation
  const overlay = document.createElement('div')
  overlay.className = 'confirm-overlay'
  overlay.id = 'confirm-overlay'
  overlay.innerHTML = `
    <div class="confirm-box">
      <h4 id="confirm-title">Confirmer l'annulation ?</h4>
      <p style="margin:0;color:#374151" id="confirm-message">Êtes-vous sûr de vouloir envoyer une demande d'annulation pour cette réservation ?</p>
      <div class="confirm-actions">
        <button class="btn cancel" id="co-cancel">Annuler</button>
        <button class="btn danger" id="co-confirm">Confirmer l'annulation</button>
      </div>
    </div>`
  document.body.appendChild(overlay)

  // Initialiser les traductions
  window.addEventListener('translations:ready', function (event) {
    const detectedLang = event.detail.language
    translatePage(detectedLang)
  })

  // Gérer le changement de langue
  const languageSelector = document.querySelector('#language-selector')
  if (languageSelector) {
    languageSelector.addEventListener('change', function () {
      const newLang = this.value

      // Sauvegarder la préférence
      localStorage.setItem('calypso-bay-lang', newLang)

      // Rediriger vers la nouvelle URL avec le bon paramètre de langue
      const url = new URL(window.location)
      url.searchParams.set('lang', newLang)
      window.location.href = url.toString()
    })

    // Charger la préférence sauvegardée
    const savedLang = localStorage.getItem('calypso-bay-lang')
    if (savedLang && ['fr', 'en', 'de'].includes(savedLang)) {
      languageSelector.value = savedLang
    }
  }

  // Gestion du clic sur le bouton d'annulation
  btn.addEventListener('click', async () => {
    if (!token) return
    // Ouvrir l'overlay de confirmation
    document.getElementById('confirm-overlay').style.display = 'flex'
    const closeOverlay = () => {
      document.getElementById('confirm-overlay').style.display = 'none'
    }
    document.getElementById('co-cancel').onclick = closeOverlay
    document.getElementById('co-confirm').onclick = async () => {
      closeOverlay()
      btn.disabled = true
      const t = window.translations[currentLang]['annuler-reservation']
      document.getElementById('submit-button-text').textContent =
        t.status.sending
      try {
        const reason = document.getElementById('reason').value
        const resp = await fetch('/api/reservations?action=cancel', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, reason })
        })
        const json = await resp.json()
        if (!resp.ok || json.status !== 'success')
          throw new Error(json.error || json.message || 'Erreur')
        document.getElementById('submit-button-text').textContent =
          t.status.sent
      } catch (e) {
        alert(e.message)
        btn.disabled = false
        document.getElementById('submit-button-text').textContent =
          t.form.submit_button
      }
    }
  })

  // Charger les données
  load()
}

// Variables globales
const params = new URLSearchParams(window.location.search)
const token = params.get('token')
const policyBox = document.getElementById('policy')
const btn = document.getElementById('cancel-btn')

// Initialiser la page quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initPage)
