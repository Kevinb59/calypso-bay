//==================================================
// Formulaire de contact - Calypso Bay (i18n FR/EN/DE)
//==================================================

// ⚙️ Détection de la langue de la page
function detectLang() {
  const htmlLang = (
    document.documentElement.getAttribute('lang') || ''
  ).toLowerCase()
  if (htmlLang.startsWith('en')) return 'en'
  if (htmlLang.startsWith('de')) return 'de'
  const p = window.location.pathname
  if (p.includes('index-en')) return 'en'
  if (p.includes('index-de')) return 'de'
  return 'fr'
}

const _LANG = detectLang()

// 🗺️ Dictionnaire des textes UI
const T_CONTACT = {
  fr: {
    send: 'Envoyer',
    sending: 'Envoi en cours...',
    sent: 'Message envoyé',
    required: 'Champs requis',
    sendError: "Erreur à l'envoi",
    networkError: 'Erreur réseau'
  },
  en: {
    send: 'Send',
    sending: 'Sending...',
    sent: 'Message sent',
    required: 'Required fields',
    sendError: 'Send error',
    networkError: 'Network error'
  },
  de: {
    send: 'Senden',
    sending: 'Wird gesendet...',
    sent: 'Nachricht gesendet',
    required: 'Pflichtfelder',
    sendError: 'Fehler beim Senden',
    networkError: 'Netzwerkfehler'
  }
}

function initContactForm() {
  const form = document.getElementById('contact-form')
  const submit = form?.querySelector('button[type="submit"]')

  const GAS_URL = window.GAS_CONTACT_URL

  if (!GAS_URL) {
    console.error(
      '❌ GAS_CONTACT_URL non configurée pour le formulaire de contact'
    )
    return
  }

  if (!form || !submit) return

  // ♻️ Helpers boutons (icône FontAwesome + texte localisé)
  function setBtn(text, icon) {
    submit.innerHTML = `<span class="icon solid ${icon}"></span> ${text}`
  }

  function resetBtn() {
    setTimeout(() => {
      setBtn(T_CONTACT[_LANG].send, 'fa-paper-plane')
      submit.disabled = false
      submit.classList.remove('disabled')
    }, 2500)
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = form.querySelector('#name')?.value.trim()
    const email = form.querySelector('#email')?.value.trim()
    const tel = form.querySelector('#tel')?.value.trim()
    const message = form.querySelector('#message')?.value.trim()

    if (!name || !email || !message) {
      setBtn(T_CONTACT[_LANG].required, 'fa-exclamation-triangle')
      resetBtn()
      return
    }

    setBtn(T_CONTACT[_LANG].sending, 'fa-spinner fa-spin')
    submit.disabled = true

    try {
      // 🔒 Pas de fuite d'URL complète en console
      const params = new URLSearchParams({
        name,
        email,
        tel: tel || '',
        message
      })

      const res = await fetch(`${GAS_URL}?${params.toString()}`)
      console.log('📥 Statut réponse contact:', res.status)

      let result = { status: 'error' }
      try {
        result = await res.json()
      } catch (_) {
        // JSON non conforme côté GAS : on garde un message générique
      }

      if (res.ok && result.status === 'success') {
        setBtn(T_CONTACT[_LANG].sent, 'fa-check')
        form.reset()
      } else {
        setBtn(T_CONTACT[_LANG].sendError, 'fa-exclamation-triangle')
      }
    } catch (err) {
      console.error('❌ Erreur envoi contact:', err)
      setBtn(T_CONTACT[_LANG].networkError, 'fa-exclamation-triangle')
    }

    resetBtn()
  })
}

// 🛡️ Sécurité : on attend que la configuration soit prête
window.addEventListener('app:config-ready', initContactForm)
// ⏱️ Fallback si l'événement est manqué (ex: chargement très rapide)
window.addEventListener('load', () => {
  if (!window.GAS_CONTACT_URL) return
  initContactForm()
})
