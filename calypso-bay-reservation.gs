/**
 * Calypso Bay — Réception des demandes et envoi du mail au gestionnaire
 * - Génère un token unique (UUID)
 * - Stocke la demande dans Google Sheets (onglet "ReservationsTemp")
 * - Envoie un email HTML (charte graphique demandée) au gestionnaire
 * - Boutons: Répondre (mailto), Accepter/Refuser (liens vers votre site)
 */

// ======================
// ⚙️ CONFIG — À ADAPTER
// ======================
const SHEET_ID = '1r6rmtpCZ3AZSSQKb6Kf51-Vdpkc1uzM2brubh6RK1tk' // Fichier Google Sheet
const SHEET_NAME = 'ReservationsTemp' // Onglet tampon

const SITE_BASE = 'https://www.calypso-bay.com' // Domaine prod
const ACCEPT_PATH = '/api/accept' // Route acceptation
const REFUSE_PATH = '/api/refuse' // Route refus

const RECIPIENT_EMAIL = 'contact.calypso.bay@gmail.com' // Gestionnaire

// (optionnel) Préfixe d'environnement dans l'objet de l'email
const ENV_LABEL = '' // ex: '[DEV] ' si utile

// ===============
// Entrée HTTP GET
// ===============
function doGet(e) {
  try {
    const p = (e && e.parameter) || {}

    // Gestion des actions accept/refuse
    if (p.action === 'accept' || p.action === 'refuse') {
      return handleAction_(p.action, p.token)
    }

    // Récupération des données de réservation pour finalisation
    if (p.action === 'getReservation') {
      return getReservationData_(p.token)
    }

    // Diagnostic de la structure du Sheet
    if (p.action === 'debug') {
      return debugSheetStructure_()
    }

    // Validation minimale pour nouvelle réservation
    const required = ['name', 'email', 'reservationDetails']
    const missing = required.filter((k) => !p[k])
    if (missing.length) {
      return jsonOut({
        status: 'error',
        message: '❌ Paramètres manquants: ' + missing.join(', ')
      })
    }

    // Normalisation des champs
    const data = {
      name: String(p.name).trim(),
      email: String(p.email).trim(),
      tel: p.tel ? String(p.tel).trim() : '',
      reservationDetails: String(p.reservationDetails || ''),
      userMessage: String(p.userMessage || ''),
      createdAt: new Date()
    }

    // 1) Générer un token unique
    const token = Utilities.getUuid()

    // 2) Écrire dans le Sheet (création des entêtes si besoin)
    const row = writeToSheet_(data, token)

    // 3) Construire les URLs d'action (Accepter / Refuser)
    const acceptUrl = buildSiteUrl_(ACCEPT_PATH, { token })
    const refuseUrl = buildSiteUrl_(REFUSE_PATH, { token })

    // 4) Construire le HTML de l'email
    const html = buildEmailHtml_(data, { acceptUrl, refuseUrl })

    // 5) Envoyer l'email au gestionnaire
    const subject = `${ENV_LABEL}Demande de réservation de ${data.name}`
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      replyTo: data.email,
      subject,
      htmlBody: html
    })

    return jsonOut({
      status: 'success',
      message: '✅ Demande envoyée',
      token,
      row
    })
  } catch (err) {
    return jsonOut({
      status: 'error',
      message: '❌ Erreur: ' + (err && err.message ? err.message : String(err))
    })
  }
}

// =====================
// Helpers — Sortie JSON
// =====================
function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  )
}

// ================================
// Helpers — URL vers votre backend
// ================================
function buildSiteUrl_(path, query) {
  const safePath = String(path || '').startsWith('/')
    ? path
    : '/' + String(path || '')
  const qs = query
    ? Object.keys(query)
        .map(
          (k) =>
            encodeURIComponent(k) + '=' + encodeURIComponent(String(query[k]))
        )
        .join('&')
    : ''
  return SITE_BASE + safePath + (qs ? '?' + qs : '')
}

// ======================================
// Gestion des actions accept/refuse
// ======================================
function handleAction_(action, token) {
  try {
    if (!token) {
      return jsonOut({
        status: 'error',
        message: '❌ Token manquant'
      })
    }

    const ss = SpreadsheetApp.openById(SHEET_ID)
    const sh = ss.getSheetByName(SHEET_NAME)

    if (!sh) {
      return jsonOut({
        status: 'error',
        message: '❌ Onglet ReservationsTemp non trouvé'
      })
    }

    // Chercher la ligne avec ce token
    const data = sh.getDataRange().getValues()
    const headers = data[0]
    const tokenColIndex = headers.indexOf('id') // Changé de 'token' à 'id'
    const statusColIndex = headers.indexOf('status')

    if (tokenColIndex === -1 || statusColIndex === -1) {
      return jsonOut({
        status: 'error',
        message: '❌ Structure de données invalide'
      })
    }

    let rowIndex = -1
    for (let i = 1; i < data.length; i++) {
      if (data[i][tokenColIndex] === token) {
        rowIndex = i + 1 // +1 car les indices Sheets commencent à 1
        break
      }
    }

    if (rowIndex === -1) {
      return jsonOut({
        status: 'error',
        message: '❌ Réservation non trouvée'
      })
    }

    // Vérifier que la réservation n'est pas déjà traitée
    const currentStatus = data[rowIndex - 1][statusColIndex]
    if (currentStatus !== 'pending') {
      return jsonOut({
        status: 'error',
        message: `❌ Réservation déjà ${
          currentStatus === 'accepted' ? 'acceptée' : 'refusée'
        }`
      })
    }

    // Mettre à jour le statut
    const newStatus = action === 'accept' ? 'accepted' : 'refused'
    sh.getRange(rowIndex, statusColIndex + 1).setValue(newStatus)

    // Récupérer les données de la réservation pour l'email
    const reservationData = {
      name: data[rowIndex - 1][headers.indexOf('name')],
      email: data[rowIndex - 1][headers.indexOf('email')],
      tel: data[rowIndex - 1][headers.indexOf('tel')],
      reservationDetails:
        data[rowIndex - 1][headers.indexOf('reservationDetails')], // Changé de 'reservationDetails_raw' à 'reservationDetails'
      userMessage: data[rowIndex - 1][headers.indexOf('userMessage')],
      token: token // Ajout du token pour l'email
    }

    // Envoyer l'email de confirmation au client
    sendClientEmail_(reservationData, action)

    return jsonOut({
      status: 'success',
      message:
        action === 'accept'
          ? '✅ Réservation acceptée'
          : '❌ Réservation refusée',
      token,
      action,
      row: rowIndex
    })
  } catch (err) {
    return jsonOut({
      status: 'error',
      message: '❌ Erreur: ' + (err && err.message ? err.message : String(err))
    })
  }
}

// ======================================
// Diagnostic de la structure du Sheet
// ======================================
function debugSheetStructure_() {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID)
    const sh = ss.getSheetByName(SHEET_NAME)

    if (!sh) {
      return jsonOut({
        status: 'error',
        message: '❌ Onglet ReservationsTemp non trouvé'
      })
    }

    const data = sh.getDataRange().getValues()
    const headers = data[0]

    return jsonOut({
      status: 'success',
      message: '✅ Structure du Sheet analysée',
      headers: headers,
      rowCount: data.length,
      expectedHeaders: [
        'timestamp',
        'id',
        'status',
        'name',
        'email',
        'tel',
        'reservationDetails',
        'userMessage',
        'acceptUrl',
        'refuseUrl'
      ],
      missingHeaders: [
        'timestamp',
        'id',
        'status',
        'name',
        'email',
        'tel',
        'reservationDetails',
        'userMessage',
        'acceptUrl',
        'refuseUrl'
      ].filter((h) => !headers.includes(h))
    })
  } catch (err) {
    return jsonOut({
      status: 'error',
      message:
        '❌ Erreur diagnostic: ' +
        (err && err.message ? err.message : String(err))
    })
  }
}

// ======================================
// Envoi email de confirmation au client
// ======================================
function sendClientEmail_(data, action) {
  const subject =
    action === 'accept'
      ? '✅ Votre réservation Calypso Bay a été acceptée !'
      : '❌ Réponse à votre demande de réservation Calypso Bay'

  const html = buildClientEmailHtml_(data, action)

  MailApp.sendEmail({
    to: data.email,
    replyTo: RECIPIENT_EMAIL,
    subject,
    htmlBody: html
  })
}

// ======================================
// Construction email client (accept/refuse)
// ======================================
function buildClientEmailHtml_(data, action) {
  const isAccepted = action === 'accept'
  const title = isAccepted ? 'Réservation Acceptée' : 'Réponse à votre demande'
  const color = isAccepted ? '#10b981' : '#ef4444'
  const icon = isAccepted ? '✅' : '❌'
  const message = isAccepted
    ? "Nous avons le plaisir de vous confirmer que votre réservation a été acceptée. Pour finaliser votre réservation, veuillez compléter le formulaire ci-dessous et effectuer le paiement des 10% d'acompte."
    : 'Nous regrettons de vous informer que votre demande de réservation ne peut être acceptée.'

  return (
    '<!DOCTYPE html>' +
    '<html lang="fr">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>' +
    title +
    ' - Calypso Bay</title>' +
    '<style>' +
    "body{font-family:'Helvetica Neue',Arial,sans-serif;background:#f2f4f8;padding:40px 20px;margin:0;}" +
    '.container{max-width:600px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.07);border:1px solid rgba(0,0,0,0.05);}' +
    '.header{background:linear-gradient(120deg,' +
    color +
    ',' +
    color +
    'dd);color:#ffffff;text-align:center;padding:30px;}' +
    '.header h1{margin:0;font-size:24px;letter-spacing:1px;}' +
    '.section{padding:30px;border-bottom:1px solid #eee;}' +
    '.section:last-child{border-bottom:none;}' +
    'p{margin:6px 0;line-height:1.6;}' +
    '.btn{display:inline-block;background:' +
    color +
    ';color:#ffffff !important;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:700;margin-top:20px;}' +
    '</style>' +
    '</head>' +
    '<body>' +
    '<div class="container">' +
    '<div class="header">' +
    '<h1>' +
    icon +
    ' ' +
    title +
    '</h1>' +
    '</div>' +
    '<div class="section">' +
    '<p>Bonjour ' +
    escapeHtml_(data.name) +
    ',</p>' +
    '<p>' +
    message +
    '</p>' +
    '</div>' +
    '<div class="section" style="text-align:center;">' +
    (isAccepted
      ? '<a href="' +
        SITE_BASE +
        '/finaliser-reservation.html?token=' +
        encodeURIComponent(data.token) +
        '" class="btn">Finaliser ma réservation</a>'
      : '<a href="' + SITE_BASE + '" class="btn">Visiter Calypso Bay</a>') +
    '</div>' +
    '<div class="footer" style="text-align:center;font-size:13px;color:#888;padding:20px;">Calypso Bay – Villa de standing à Bouillante, Guadeloupe</div>' +
    '</div>' +
    '</body>' +
    '</html>'
  )
}

// ======================================
// Récupération des données de réservation
// ======================================
function getReservationData_(token) {
  try {
    if (!token) {
      return jsonOut({
        status: 'error',
        message: '❌ Token manquant'
      })
    }

    const ss = SpreadsheetApp.openById(SHEET_ID)
    const sh = ss.getSheetByName(SHEET_NAME)

    if (!sh) {
      return jsonOut({
        status: 'error',
        message: '❌ Onglet ReservationsTemp non trouvé'
      })
    }

    // Chercher la ligne avec ce token
    const data = sh.getDataRange().getValues()
    const headers = data[0]
    const tokenColIndex = headers.indexOf('id') // Changé de 'token' à 'id'
    const statusColIndex = headers.indexOf('status')

    if (tokenColIndex === -1) {
      return jsonOut({
        status: 'error',
        message: '❌ Structure de données invalide'
      })
    }

    let rowIndex = -1
    for (let i = 1; i < data.length; i++) {
      if (data[i][tokenColIndex] === token) {
        rowIndex = i
        break
      }
    }

    if (rowIndex === -1) {
      return jsonOut({
        status: 'error',
        message: '❌ Réservation non trouvée'
      })
    }

    // Vérifier que la réservation est acceptée
    const currentStatus = data[rowIndex][statusColIndex]
    if (currentStatus !== 'accepted') {
      return jsonOut({
        status: 'error',
        message: '❌ Réservation non acceptée'
      })
    }

    // Récupérer les données de la réservation
    const reservationData = {
      name: data[rowIndex][headers.indexOf('name')],
      email: data[rowIndex][headers.indexOf('email')],
      tel: data[rowIndex][headers.indexOf('tel')],
      reservationDetails: data[rowIndex][headers.indexOf('reservationDetails')], // Changé de 'reservationDetails_raw' à 'reservationDetails'
      userMessage: data[rowIndex][headers.indexOf('userMessage')],
      createdAt: data[rowIndex][headers.indexOf('timestamp')], // Changé de 'createdAt' à 'timestamp'
      token: token
    }

    return jsonOut({
      status: 'success',
      data: reservationData
    })
  } catch (err) {
    return jsonOut({
      status: 'error',
      message: '❌ Erreur: ' + (err && err.message ? err.message : String(err))
    })
  }
}

// ======================================
// Finalisation de la réservation (après paiement)
// ======================================
function finalizeReservation_(token, paymentData) {
  try {
    if (!token) {
      return jsonOut({
        status: 'error',
        message: '❌ Token manquant'
      })
    }

    const ss = SpreadsheetApp.openById(SHEET_ID)
    const sh = ss.getSheetByName(SHEET_NAME)

    if (!sh) {
      return jsonOut({
        status: 'error',
        message: '❌ Onglet ReservationsTemp non trouvé'
      })
    }

    // Chercher la ligne avec ce token
    const data = sh.getDataRange().getValues()
    const headers = data[0]
    const tokenColIndex = headers.indexOf('id') // Changé de 'token' à 'id'
    const statusColIndex = headers.indexOf('status')

    if (tokenColIndex === -1) {
      return jsonOut({
        status: 'error',
        message: '❌ Structure de données invalide'
      })
    }

    let rowIndex = -1
    for (let i = 1; i < data.length; i++) {
      if (data[i][tokenColIndex] === token) {
        rowIndex = i + 1 // +1 car les indices Sheets commencent à 1
        break
      }
    }

    if (rowIndex === -1) {
      return jsonOut({
        status: 'error',
        message: '❌ Réservation non trouvée'
      })
    }

    // Vérifier que la réservation est acceptée
    const currentStatus = data[rowIndex - 1][statusColIndex]
    if (currentStatus !== 'accepted') {
      return jsonOut({
        status: 'error',
        message: '❌ Réservation non acceptée'
      })
    }

    // Mettre à jour le statut à "finalized"
    sh.getRange(rowIndex, statusColIndex + 1).setValue('finalized')

    // Ajouter les informations de paiement
    const paymentColIndex = headers.indexOf('paymentData')
    if (paymentColIndex === -1) {
      // Créer la colonne si elle n'existe pas
      sh.getRange(1, headers.length + 1).setValue('paymentData')
      sh.getRange(rowIndex, headers.length + 1).setValue(
        JSON.stringify(paymentData)
      )
    } else {
      sh.getRange(rowIndex, paymentColIndex + 1).setValue(
        JSON.stringify(paymentData)
      )
    }

    // Récupérer les données pour l'email
    const reservationData = {
      name: data[rowIndex - 1][headers.indexOf('name')],
      email: data[rowIndex - 1][headers.indexOf('email')],
      tel: data[rowIndex - 1][headers.indexOf('tel')],
      reservationDetails:
        data[rowIndex - 1][headers.indexOf('reservationDetails')], // Changé de 'reservationDetails_raw' à 'reservationDetails'
      userMessage: data[rowIndex - 1][headers.indexOf('userMessage')]
    }

    // Envoyer les emails de confirmation
    sendFinalizationEmails_(reservationData, paymentData)

    return jsonOut({
      status: 'success',
      message: '✅ Réservation finalisée avec succès'
    })
  } catch (err) {
    return jsonOut({
      status: 'error',
      message: '❌ Erreur: ' + (err && err.message ? err.message : String(err))
    })
  }
}

// ======================================
// Envoi des emails de finalisation
// ======================================
function sendFinalizationEmails_(data, paymentData) {
  // Email au client
  const clientSubject = '✅ Votre réservation Calypso Bay est confirmée !'
  const clientHtml = buildFinalizationClientEmail_(data, paymentData)

  MailApp.sendEmail({
    to: data.email,
    replyTo: RECIPIENT_EMAIL,
    subject: clientSubject,
    htmlBody: clientHtml
  })

  // Email au gestionnaire
  const managerSubject = '✅ Réservation finalisée - Paiement reçu'
  const managerHtml = buildFinalizationManagerEmail_(data, paymentData)

  MailApp.sendEmail({
    to: RECIPIENT_EMAIL,
    subject: managerSubject,
    htmlBody: managerHtml
  })
}

// ======================================
// Construction email client finalisation
// ======================================
function buildFinalizationClientEmail_(data, paymentData) {
  return (
    '<!DOCTYPE html>' +
    '<html lang="fr">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>Réservation confirmée - Calypso Bay</title>' +
    '<style>' +
    "body{font-family:'Helvetica Neue',Arial,sans-serif;background:#f2f4f8;padding:40px 20px;margin:0;}" +
    '.container{max-width:600px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.07);border:1px solid rgba(0,0,0,0.05);}' +
    '.header{background:linear-gradient(120deg,#10b981,#059669);color:#ffffff;text-align:center;padding:30px;}' +
    '.header h1{margin:0;font-size:24px;letter-spacing:1px;}' +
    '.section{padding:30px;border-bottom:1px solid #eee;}' +
    '.section:last-child{border-bottom:none;}' +
    'p{margin:6px 0;line-height:1.6;}' +
    '.highlight{background:#f0fdf4;padding:15px;border-left:4px solid #10b981;border-radius:6px;margin:15px 0;}' +
    '</style>' +
    '</head>' +
    '<body>' +
    '<div class="container">' +
    '<div class="header">' +
    '<h1>🎉 Réservation confirmée !</h1>' +
    '</div>' +
    '<div class="section">' +
    '<p>Bonjour ' +
    escapeHtml_(data.name) +
    ',</p>' +
    '<p>Nous avons le plaisir de vous confirmer que votre réservation est maintenant définitive !</p>' +
    '<div class="highlight">' +
    '<p><strong>Paiement reçu :</strong> ' +
    escapeHtml_(paymentData.amount) +
    ' €</p>' +
    '<p><strong>Référence :</strong> ' +
    escapeHtml_(paymentData.paymentIntentId) +
    '</p>' +
    '</div>' +
    '<p>Votre acompte de 10% a été reçu avec succès. Nous vous contacterons prochainement pour les détails de votre séjour.</p>' +
    '</div>' +
    '<div class="section" style="text-align:center;">' +
    '<a href="' +
    SITE_BASE +
    '" style="display:inline-block;background:#10b981;color:#ffffff !important;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:700;">Visiter Calypso Bay</a>' +
    '</div>' +
    '<div class="footer" style="text-align:center;font-size:13px;color:#888;padding:20px;">Calypso Bay – Villa de standing à Bouillante, Guadeloupe</div>' +
    '</div>' +
    '</body>' +
    '</html>'
  )
}

// ======================================
// Construction email gestionnaire finalisation
// ======================================
function buildFinalizationManagerEmail_(data, paymentData) {
  return (
    '<!DOCTYPE html>' +
    '<html lang="fr">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>Réservation finalisée - Calypso Bay</title>' +
    '<style>' +
    "body{font-family:'Helvetica Neue',Arial,sans-serif;background:#f2f4f8;padding:40px 20px;margin:0;}" +
    '.container{max-width:600px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.07);border:1px solid rgba(0,0,0,0.05);}' +
    '.header{background:linear-gradient(120deg,#10b981,#059669);color:#ffffff;text-align:center;padding:30px;}' +
    '.header h1{margin:0;font-size:24px;letter-spacing:1px;}' +
    '.section{padding:30px;border-bottom:1px solid #eee;}' +
    '.section:last-child{border-bottom:none;}' +
    'h2{font-size:18px;margin:0 0 15px;color:#10b981;border-left:4px solid #10b981;padding-left:15px;}' +
    'p{margin:6px 0;line-height:1.6;}' +
    '.highlight{background:#f0fdf4;padding:15px;border-left:4px solid #10b981;border-radius:6px;margin:15px 0;}' +
    '</style>' +
    '</head>' +
    '<body>' +
    '<div class="container">' +
    '<div class="header">' +
    '<h1>💰 Paiement reçu - Réservation finalisée</h1>' +
    '</div>' +
    '<div class="section">' +
    '<h2>📅 Informations client</h2>' +
    '<p><strong>Nom :</strong> ' +
    escapeHtml_(data.name) +
    '</p>' +
    '<p><strong>Email :</strong> ' +
    escapeHtml_(data.email) +
    '</p>' +
    '<p><strong>Téléphone :</strong> ' +
    (data.tel ? escapeHtml_(data.tel) : 'Non renseigné') +
    '</p>' +
    '</div>' +
    '<div class="section">' +
    '<h2>💳 Informations de paiement</h2>' +
    '<div class="highlight">' +
    '<p><strong>Montant :</strong> ' +
    escapeHtml_(paymentData.amount) +
    ' €</p>' +
    '<p><strong>Référence :</strong> ' +
    escapeHtml_(paymentData.paymentIntentId) +
    '</p>' +
    '<p><strong>Statut :</strong> Payé</p>' +
    '</div>' +
    '</div>' +
    '<div class="footer" style="text-align:center;font-size:13px;color:#888;padding:20px;">Calypso Bay – Villa de standing à Bouillante, Guadeloupe</div>' +
    '</div>' +
    '</body>' +
    '</html>'
  )
}

// ======================================
// Google Sheets — création/écriture ligne
// ======================================
function writeToSheet_(data, token) {
  const ss = SpreadsheetApp.openById(SHEET_ID)
  let sh = ss.getSheetByName(SHEET_NAME)
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME)
  }

  // Entêtes si vide
  if (sh.getLastRow() === 0) {
    sh.appendRow([
      'timestamp',
      'id',
      'status',
      'name',
      'email',
      'tel',
      'reservationDetails',
      'userMessage',
      'acceptUrl',
      'refuseUrl'
    ])
  }

  const rowValues = [
    new Date(data.createdAt),
    token,
    'pending',
    data.name,
    data.email,
    data.tel,
    data.reservationDetails,
    data.userMessage,
    '', // acceptUrl sera ajouté plus tard
    '' // refuseUrl sera ajouté plus tard
  ]
  sh.appendRow(rowValues)
  return sh.getLastRow()
}

// ==================================================
// Construction de l'email HTML (mise en forme demandée)
// ==================================================
function buildEmailHtml_(data, links) {
  const { acceptUrl, refuseUrl } = links
  const detailsHtml = formatReservationDetails_(data.reservationDetails)

  // Mailto Répondre — corps simple encodé
  const replySubject = 'RE: Demande de réservation Calypso Bay'
  const replyBody = `Bonjour ${data.name},\n\nMerci pour votre demande de réservation.\n\nCordialement,\nL'équipe Calypso Bay`
  const replyHref =
    'mailto:' +
    encodeURIComponent(data.email) +
    '?subject=' +
    encodeURIComponent(replySubject) +
    '&body=' +
    encodeURIComponent(replyBody)

  const now = new Date()
  const dateStr = now.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  // IMPORTANT: privilégier les styles inline + tables pour compat Outlook/Gmail
  // Les boutons Accepter/Refuser pointent vers votre site (token inclus)
  return (
    '<!DOCTYPE html>' +
    '<html lang="fr">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>Demande de réservation - Calypso Bay</title>' +
    '<style>' +
    "body{font-family:'Helvetica Neue',Arial,sans-serif;background:#f2f4f8;padding:40px 20px;margin:0;}" +
    '.container{max-width:600px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.07);border:1px solid rgba(0,0,0,0.05);}' +
    '.header{background:linear-gradient(120deg,#5d3fd3,#8b5cf6);color:#ffffff;text-align:center;padding:30px;}' +
    '.header h1{margin:0;font-size:24px;letter-spacing:1px;}' +
    '.section{padding:30px;border-bottom:1px solid #eee;}' +
    '.section:last-child{border-bottom:none;}' +
    'h2{font-size:18px;margin:0 0 15px;color:#5d3fd3;border-left:4px solid #8b5cf6;padding-left:15px;display:flex;align-items:center;gap:10px;}' +
    'p{margin:6px 0;}' +
    '.label{font-weight:700;color:#444;}' +
    '.message{background:#f9fafb;padding:15px;border-left:3px solid #8b5cf6;border-radius:6px;font-family:monospace;white-space:pre-wrap;margin-top:10px;}' +
    '@media only screen and (max-width:600px){.btn{width:200px !important;display:block !important;margin:6px auto !important;}}' +
    '</style>' +
    '</head>' +
    '<body>' +
    '<div class="container">' +
    '<div class="header">' +
    '<h1>✨ Nouvelle demande de réservation</h1>' +
    '</div>' +
    '<div class="section">' +
    '<h2>📅 Informations du client</h2>' +
    '<p><span class="label">Nom :</span> ' +
    escapeHtml_(data.name) +
    '</p>' +
    '<p><span class="label">Email :</span> ' +
    escapeHtml_(data.email) +
    '</p>' +
    '<p><span class="label">Téléphone :</span> ' +
    (data.tel ? escapeHtml_(data.tel) : 'Non renseigné') +
    '</p>' +
    '<p><span class="label">Date :</span> ' +
    escapeHtml_(dateStr) +
    '</p>' +
    '</div>' +
    '<div class="section">' +
    '<h2>🔹 Détails de la réservation</h2>' +
    '<div style="white-space:pre-line;">' +
    detailsHtml +
    '</div>' +
    '</div>' +
    '<div class="section">' +
    '<h2>💬 Message du client</h2>' +
    '<div class="message">' +
    (data.userMessage
      ? nl2br_(escapeHtml_(data.userMessage))
      : 'Aucun message spécifique') +
    '</div>' +
    '</div>' +
    // Boutons en tableau pour compatibilité email
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-collapse:separate;">' +
    '<tr>' +
    '<td align="center" style="padding:20px 10px;">' +
    '<a href="' +
    replyHref +
    '" target="_blank" style="display:inline-block;background:#6366f1;border-radius:8px;padding:12px 18px;text-decoration:none;color:#ffffff !important;font-weight:700;font-size:14px;line-height:1.2;margin:0 6px;">📩 Répondre</a>' +
    '<a href="' +
    escapeHtml_(acceptUrl) +
    '" target="_blank" style="display:inline-block;background:#10b981;border-radius:8px;padding:12px 18px;text-decoration:none;color:#ffffff !important;font-weight:700;font-size:14px;line-height:1.2;margin:0 6px;">✅ Accepter</a>' +
    '<a href="' +
    escapeHtml_(refuseUrl) +
    '" target="_blank" style="display:inline-block;background:#ef4444;border-radius:8px;padding:12px 18px;text-decoration:none;color:#ffffff !important;font-weight:700;font-size:14px;line-height:1.2;margin:0 6px;">❌ Refuser</a>' +
    '</td>' +
    '</tr>' +
    '</table>' +
    '<div class="footer" style="text-align:center;font-size:13px;color:#888;padding:20px;">Calypso Bay – Villa de standing à Bouillante, Guadeloupe</div>' +
    '</div>' +
    '</body>' +
    '</html>'
  )
}

// =====================================================
// Formattage des détails (transforme puces en tableau prix)
// =====================================================
function formatReservationDetails_(raw) {
  const text = String(raw || '')
  const lines = text.split(/\r?\n/)

  var out = []
  var rows = []

  for (var i = 0; i < lines.length; i++) {
    var line = String(lines[i] || '').trim()
    if (!line) continue

    // Titre
    if (/^détail du prix\s*:/i.test(line)) {
      out.push('<strong>Détail du prix :</strong>')
      continue
    }

    // Lignes de prix: "• Libellé : 123 €" ou "- Libellé : 123 €"
    if (/^(•|-)/.test(line) && line.indexOf(':') > -1) {
      var noBullet = line.replace(/^(•|-)\s*/, '')
      var parts = noBullet.split(':')
      var label = (parts[0] || '').trim()
      var amountRaw = (parts[1] || '').replace('€', '').trim()

      var amount = formatNumberFr_(amountRaw)
      var isTotal = /^total$/i.test(label)

      rows.push(
        '<tr>' +
          '<td style="padding:2px 12px 2px 0; white-space:nowrap;">' +
          (isTotal
            ? '<strong>• Total :</strong>'
            : '• ' + escapeHtml_(label) + ' :') +
          '</td>' +
          '<td style="padding:2px 0; text-align:right; white-space:nowrap;">' +
          (isTotal ? '<strong>' + amount + ' €</strong>' : amount + ' €') +
          '</td>' +
          '</tr>'
      )
    } else {
      // Autres lignes (dates, voyageurs, etc.)
      out.push(escapeHtml_(line))
    }
  }

  if (rows.length) {
    out.push(
      '<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:8px; width:100%;">' +
        rows.join('') +
        '</table>'
    )
  }

  return out.join('\n')
}

function formatNumberFr_(str) {
  var normalized = String(str || '')
    .trim()
    .replace(/\s+/g, '') // retire espaces (y compris insécables)
    .replace(',', '.') // virgule -> point
  var num = parseFloat(normalized.replace(/[^\d.-]/g, ''))
  if (isNaN(num)) return escapeHtml_(String(str))
  return num.toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

// =============
// Utils HTML
// =============
function escapeHtml_(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function nl2br_(s) {
  return String(s).replace(/\n/g, '<br>')
}
