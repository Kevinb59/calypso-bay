//==================================================
// Formulaire de contact - Calypso Bay
//==================================================

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

  function setBtn(text, icon) {
    submit.innerHTML = `<span class="icon solid ${icon}"></span> ${text}`
  }

  function resetBtn() {
    setTimeout(() => {
      setBtn('Envoyer', 'fa-paper-plane')
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
      setBtn('Champs requis', 'fa-exclamation-triangle')
      resetBtn()
      return
    }

    setBtn('Envoi en cours...', 'fa-spinner fa-spin')
    submit.disabled = true

    try {
      const params = new URLSearchParams({
        name,
        email,
        tel: tel || '',
        message
      })
      const res = await fetch(`${GAS_URL}?${params.toString()}`)
      const result = await res.json()

      if (result.status === 'success') {
        setBtn('Message envoyé', 'fa-check')
        form.reset()
      } else {
        setBtn("Erreur à l'envoi", 'fa-exclamation-triangle')
      }
    } catch (err) {
      setBtn('Erreur réseau', 'fa-exclamation-triangle')
    }

    resetBtn()
  })
}

// Sécurité : on attend que tout soit chargé
window.addEventListener('load', initContactForm)
