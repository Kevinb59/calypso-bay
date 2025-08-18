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
// Liens post-acompte (à implémenter côté site si besoin)
const CANCEL_PATH = '/annuler-reservation'
const PAY_BALANCE_PATH = '/payer-solde'

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

    // Liste admin des réservations (lecture seule)
    if (p.action === 'listReservations') {
      return listReservations_(p.q || '')
    }

    // Détails admin d'une réservation (lecture seule, sans validation de statut)
    if (p.action === 'getReservationAdmin') {
      return getReservationAdmin_(p.token)
    }

    // Tests d'emails pour QA
    if (p.action === 'testSendEmail') {
      return testSendEmail_(p)
    }

    // Diagnostic de la structure du Sheet
    if (p.action === 'debug') {
      return debugSheetStructure_()
    }

    // Validation minimale pour nouvelle réservation
    const required = ['name', 'email', 'startDate', 'endDate', 'nbAdults']
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
      userMessage: String(p.userMessage || ''),
      nbAdults: parseInt(p.nbAdults) || 0,
      nbChilds: parseInt(p.nbChilds) || 0,
      nbNights: parseInt(p.nbNights) || 0,
      priceNights: parseFloat(p.priceNights) || 0,
      priceClean: parseFloat(p.priceClean) || 0,
      priceTax: parseFloat(p.priceTax) || 0,
      priceTotal: parseFloat(p.priceTotal) || 0,
      startDate: String(p.startDate).trim(),
      endDate: String(p.endDate).trim(),
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

// ==============
// Entrée HTTP POST
// ==============
function doPost(e) {
  try {
    const p = (e && e.parameter) || {}
    if (!e || !e.postData || !e.postData.contents) {
      return jsonOut({ status: 'error', message: '❌ Corps POST manquant' })
    }
    const body = JSON.parse(e.postData.contents || '{}')

    if (p.action === 'finalizeReservation') {
      const token = p.token || body.token
      const paymentData = body.paymentData || {}
      const formData = body.formData || {}
      return finalizeReservationFromWebhook_(token, paymentData, formData)
    }

    if (p.action === 'finalizeBalance') {
      const token = p.token || body.token
      const paymentData = body.paymentData || {}
      // finalise le paiement de solde
      return finalizeBalanceFromWebhook_(token, paymentData)
    }

    if (p.action === 'requestCancellation') {
      const token = p.token || body.token
      const reason = (body && body.reason) || ''
      return requestCancellation_(token, reason)
    }

    return jsonOut({ status: 'error', message: '❌ Action POST inconnue' })
  } catch (err) {
    return jsonOut({
      status: 'error',
      message:
        '❌ Erreur POST: ' + (err && err.message ? err.message : String(err))
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
    const tokenColIndex = headers.indexOf('id')
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
      userMessage: data[rowIndex - 1][headers.indexOf('userMessage')],
      nbAdults: data[rowIndex - 1][headers.indexOf('nbAdults')],
      nbChilds: data[rowIndex - 1][headers.indexOf('nbChilds')],
      nbNights: data[rowIndex - 1][headers.indexOf('nbNights')],
      priceNights: data[rowIndex - 1][headers.indexOf('priceNights')],
      priceClean: data[rowIndex - 1][headers.indexOf('priceClean')],
      priceTax: data[rowIndex - 1][headers.indexOf('priceTax')],
      priceTotal: data[rowIndex - 1][headers.indexOf('priceTotal')],
      startDate: data[rowIndex - 1][headers.indexOf('startDate')],
      endDate: data[rowIndex - 1][headers.indexOf('endDate')],
      token: token
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
        'userMessage',
        'nbAdults',
        'nbChilds',
        'nbNights',
        'priceNights',
        'priceClean',
        'priceTax',
        'priceTotal',
        'startDate',
        'endDate'
      ],
      missingHeaders: [
        'timestamp',
        'id',
        'status',
        'name',
        'email',
        'tel',
        'userMessage',
        'nbAdults',
        'nbChilds',
        'nbNights',
        'priceNights',
        'priceClean',
        'priceTax',
        'priceTotal',
        'startDate',
        'endDate'
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
      ? '✅ Acceptation de votre demande de réservation pour Calypso Bay !'
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
  const title = isAccepted ? 'Calypso Bay' : 'Réponse à votre demande'
  const color = isAccepted ? '#5d3fd3' : '#ef4444'
  const icon = isAccepted ? '🏖️' : '❌'
  const message = isAccepted
    ? "Nous avons le plaisir de vous informer que votre demande réservation a été acceptée. Pour finaliser votre réservation, veuillez cliquer sur le lien ci-dessous, remplir le formulaire et effectuer le paiement des 10% d'acompte."
    : 'Nous regrettons de vous informer que votre demande de réservation ne peut être acceptée.'

  // Détails de la réservation pour l'email
  const reservationDetails = formatReservationDetails_(data)

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
    '.header{background:' +
    color +
    ';background-color:' +
    color +
    ';color:#ffffff;text-align:center;padding:30px;}' +
    '.header h1{margin:0;font-size:24px;letter-spacing:1px;}' +
    '.section{padding:30px;border-bottom:1px solid #eee;}' +
    '.section:last-child{border-bottom:none;}' +
    'h2{font-size:18px;margin:0 0 15px;color:' +
    color +
    ';border-left:4px solid ' +
    color +
    ';padding-left:15px;display:flex;align-items:center;gap:10px;}' +
    'p{margin:6px 0;line-height:1.6;}' +
    '.details{background:#f9fafb;padding:15px;border-left:3px solid ' +
    color +
    ';border-radius:6px;margin-top:10px;}' +
    '.btn{display:inline-block;background:' +
    color +
    ';color:#ffffff !important;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:700;margin-top:20px;text-align:center;}' +
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
    (isAccepted
      ? '<div class="section">' +
        '<h2>🔹 Détails de votre réservation</h2>' +
        '<div class="details">' +
        reservationDetails +
        '</div>' +
        '</div>'
      : '') +
    '<div class="section" style="text-align:center;">' +
    (isAccepted
      ? '<a href="' +
        SITE_BASE +
        '/finaliser-reservation.html?token=' +
        encodeURIComponent(data.token) +
        '" class="btn"><span style="color:#ffffff !important; text-decoration:none !important;">Finaliser ma réservation</span></a>'
      : '<a href="' +
        SITE_BASE +
        '" class="btn"><span style="color:#ffffff !important; text-decoration:none !important;">Visiter Calypso Bay</span></a>') +
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
    const tokenColIndex = headers.indexOf('id')
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

    // Vérifier le statut uniquement
    const currentStatus = String(data[rowIndex][statusColIndex] || '')
    const depositAmountIndex = headers.indexOf('depositAmount')
    const hasDeposit =
      depositAmountIndex !== -1 &&
      Number(data[rowIndex][depositAmountIndex] || 0) > 0
    if (
      !(
        currentStatus === 'accepted' ||
        (currentStatus === 'depositPay' && hasDeposit)
      )
    ) {
      return jsonOut({
        status: 'error',
        message: '❌ Réservation non acceptée'
      })
    }

    // Récupérer les données de la réservation avec conversion des types
    const nameIndex = headers.indexOf('name')
    const emailIndex = headers.indexOf('email')
    const telIndex = headers.indexOf('tel')
    const userMessageIndex = headers.indexOf('userMessage')
    const nbAdultsIndex = headers.indexOf('nbAdults')
    const nbChildsIndex = headers.indexOf('nbChilds')
    const nbNightsIndex = headers.indexOf('nbNights')
    const priceNightsIndex = headers.indexOf('priceNights')
    const priceCleanIndex = headers.indexOf('priceClean')
    const priceTaxIndex = headers.indexOf('priceTax')
    const priceTotalIndex = headers.indexOf('priceTotal')
    const startDateIndex = headers.indexOf('startDate')
    const endDateIndex = headers.indexOf('endDate')
    const timestampIndex = headers.indexOf('timestamp')
    const depositAtIndex = headers.indexOf('depositAt')
    const addressIndex = headers.indexOf('address')
    const cityIndex = headers.indexOf('city')
    const postalIndex = headers.indexOf('postal')
    const countryIndex = headers.indexOf('country')
    const childAge1Index = headers.indexOf('childAge1')
    const childAge2Index = headers.indexOf('childAge2')
    const childAge3Index = headers.indexOf('childAge3')
    const childAge4Index = headers.indexOf('childAge4')
    const childAge5Index = headers.indexOf('childAge5')

    // Log pour déboguer
    console.log('Headers found:', {
      name: nameIndex,
      email: emailIndex,
      tel: telIndex,
      userMessage: userMessageIndex,
      nbAdults: nbAdultsIndex,
      nbChilds: nbChildsIndex,
      nbNights: nbNightsIndex,
      priceNights: priceNightsIndex,
      priceClean: priceCleanIndex,
      priceTax: priceTaxIndex,
      priceTotal: priceTotalIndex,
      startDate: startDateIndex,
      endDate: endDateIndex,
      timestamp: timestampIndex,
      address: addressIndex,
      city: cityIndex,
      postal: postalIndex,
      country: countryIndex,
      childAge1: childAge1Index,
      childAge2: childAge2Index,
      childAge3: childAge3Index,
      childAge4: childAge4Index,
      childAge5: childAge5Index
    })

    console.log('Raw row data:', data[rowIndex])

    const reservationData = {
      name: nameIndex !== -1 ? String(data[rowIndex][nameIndex] || '') : '',
      email: emailIndex !== -1 ? String(data[rowIndex][emailIndex] || '') : '',
      tel: telIndex !== -1 ? data[rowIndex][telIndex] : '',
      userMessage:
        userMessageIndex !== -1
          ? String(data[rowIndex][userMessageIndex] || '')
          : '',
      nbAdults:
        nbAdultsIndex !== -1 ? Number(data[rowIndex][nbAdultsIndex]) || 0 : 0,
      nbChilds:
        nbChildsIndex !== -1 ? Number(data[rowIndex][nbChildsIndex]) || 0 : 0,
      nbNights:
        nbNightsIndex !== -1 ? Number(data[rowIndex][nbNightsIndex]) || 0 : 0,
      priceNights:
        priceNightsIndex !== -1
          ? Number(data[rowIndex][priceNightsIndex]) || 0
          : 0,
      priceClean:
        priceCleanIndex !== -1
          ? Number(data[rowIndex][priceCleanIndex]) || 0
          : 0,
      priceTax:
        priceTaxIndex !== -1 ? Number(data[rowIndex][priceTaxIndex]) || 0 : 0,
      priceTotal:
        priceTotalIndex !== -1
          ? Number(data[rowIndex][priceTotalIndex]) || 0
          : 0,
      startDate:
        startDateIndex !== -1
          ? String(data[rowIndex][startDateIndex] || '')
          : '',
      endDate:
        endDateIndex !== -1 ? String(data[rowIndex][endDateIndex] || '') : '',
      createdAt:
        timestampIndex !== -1 ? data[rowIndex][timestampIndex] : new Date(),
      status: currentStatus,
      depositAmount:
        depositAmountIndex !== -1
          ? Number(data[rowIndex][depositAmountIndex]) || 0
          : 0,
      depositAt: depositAtIndex !== -1 ? data[rowIndex][depositAtIndex] : '',
      address:
        addressIndex !== -1 ? String(data[rowIndex][addressIndex] || '') : '',
      city: cityIndex !== -1 ? String(data[rowIndex][cityIndex] || '') : '',
      postal:
        postalIndex !== -1 ? String(data[rowIndex][postalIndex] || '') : '',
      country:
        countryIndex !== -1 ? String(data[rowIndex][countryIndex] || '') : '',
      childrenAges: [
        childAge1Index !== -1 ? data[rowIndex][childAge1Index] : '',
        childAge2Index !== -1 ? data[rowIndex][childAge2Index] : '',
        childAge3Index !== -1 ? data[rowIndex][childAge3Index] : '',
        childAge4Index !== -1 ? data[rowIndex][childAge4Index] : '',
        childAge5Index !== -1 ? data[rowIndex][childAge5Index] : ''
      ]
        .filter(function (v) {
          return v !== '' && v != null
        })
        .map(function (v) {
          return Number(v)
        }),
      token: token
    }

    console.log('Processed reservation data:', reservationData)

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
// Admin: liste simple des réservations
// ======================================
function listReservations_(q) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID)
    const sh = ss.getSheetByName(SHEET_NAME)
    if (!sh) {
      return jsonOut({
        status: 'error',
        message: '❌ Onglet ReservationsTemp non trouvé'
      })
    }

    const values = sh.getDataRange().getValues()
    if (!values || values.length <= 1) {
      return jsonOut({ status: 'success', data: [] })
    }

    const headers = values[0]
    const idx = (h) => headers.indexOf(h)
    const out = []

    for (let i = 1; i < values.length; i++) {
      const row = values[i]
      const item = {
        token: row[idx('id')],
        name: row[idx('name')],
        email: row[idx('email')],
        tel: row[idx('tel')],
        startDate: row[idx('startDate')],
        endDate: row[idx('endDate')],
        status: row[idx('status')],
        nbNights: Number(row[idx('nbNights')] || 0),
        nbAdults: Number(row[idx('nbAdults')] || 0),
        nbChilds: Number(row[idx('nbChilds')] || 0),
        priceTotal: Number(row[idx('priceTotal')] || 0),
        depositAmount: Number(row[idx('depositAmount')] || 0),
        balanceAmount: Number(row[idx('balanceAmount')] || 0)
      }
      if (!q) {
        out.push(item)
      } else {
        const qq = String(q).toLowerCase()
        const hay = [item.token, item.name, item.email].join(' ').toLowerCase()
        if (hay.indexOf(qq) !== -1) out.push(item)
      }
    }

    return jsonOut({ status: 'success', data: out })
  } catch (err) {
    return jsonOut({
      status: 'error',
      message: '❌ Erreur: ' + (err && err.message ? err.message : String(err))
    })
  }
}

// Détails complets pour admin (toutes colonnes connues)
function getReservationAdmin_(token) {
  try {
    if (!token) return jsonOut({ status: 'error', message: 'Token manquant' })
    const ss = SpreadsheetApp.openById(SHEET_ID)
    const sh = ss.getSheetByName(SHEET_NAME)
    if (!sh) return jsonOut({ status: 'error', message: 'Onglet introuvable' })
    const data = sh.getDataRange().getValues()
    const headers = data[0]
    const idIdx = headers.indexOf('id')
    if (idIdx === -1)
      return jsonOut({ status: 'error', message: 'Structure invalide' })
    let row = null
    for (let i = 1; i < data.length; i++) {
      if (data[i][idIdx] === token) {
        row = data[i]
        break
      }
    }
    if (!row)
      return jsonOut({ status: 'error', message: 'Réservation non trouvée' })
    const out = {}
    headers.forEach(function (h, i) {
      out[h] = row[i]
    })
    return jsonOut({ status: 'success', data: out })
  } catch (err) {
    return jsonOut({
      status: 'error',
      message: 'Erreur: ' + (err && err.message ? err.message : String(err))
    })
  }
}

// Envoi de mails de test (client/gestionnaire, acompte/solde)
function testSendEmail_(p) {
  try {
    const token = p.token
    const to = p.to
    const kind = p.kind
    if (!token || !to || !kind)
      return jsonOut({ status: 'error', message: 'Paramètres manquants' })
    const ss = SpreadsheetApp.openById(SHEET_ID)
    const sh = ss.getSheetByName(SHEET_NAME)
    const data = sh.getDataRange().getValues()
    const headers = data[0]
    const idIdx = headers.indexOf('id')
    let rowIndex = -1
    for (let i = 1; i < data.length; i++) if (data[i][idIdx] === token) { rowIndex = i; break }
    if (rowIndex === -1) return jsonOut({ status: 'error', message: 'Réservation non trouvée' })
    const row = data[rowIndex]
    const h = function (k) { return headers.indexOf(k) }
    const d = {
      token: token,
      name: row[h('name')],
      email: row[h('email')],
      tel: row[h('tel')],
      nbAdults: row[h('nbAdults')],
      nbChilds: row[h('nbChilds')],
      nbNights: row[h('nbNights')],
      priceNights: row[h('priceNights')],
      priceClean: row[h('priceClean')],
      priceTax: row[h('priceTax')],
      priceTotal: row[h('priceTotal')],
      startDate: row[h('startDate')],
      endDate: row[h('endDate')],
      address: h('address') !== -1 ? row[h('address')] : '',
      city: h('city') !== -1 ? row[h('city')] : '',
      postal: h('postal') !== -1 ? row[h('postal')] : '',
      country: h('country') !== -1 ? row[h('country')] : '',
      childrenAges: [row[h('childAge1')], row[h('childAge2')], row[h('childAge3')], row[h('childAge4')], row[h('childAge5')]].filter(function(v){return v!=='' && v!=null})
    }
    const pay = {
      amount: Number(row[h('balanceAmount')] || row[h('depositAmount')] || 0),
      paymentIntentId: String(row[h('balancePaymentIntentId')] || row[h('depositPaymentIntentId')] || ''),
      status: 'succeeded'
    }
    if (kind === 'balanceClient') {
      MailApp.sendEmail({ to: to, replyTo: RECIPIENT_EMAIL, subject: 'Solde payé – Calypso Bay', htmlBody: buildBalanceClientEmail_(d, pay) })
    } else if (kind === 'balanceManager') {
      MailApp.sendEmail({ to: to, replyTo: RECIPIENT_EMAIL, subject: 'Solde reçu – Calypso Bay', htmlBody: buildBalanceManagerEmail_(d, pay) })
    } else if (kind === 'depositClient') {
      MailApp.sendEmail({ to: to, replyTo: RECIPIENT_EMAIL, subject: 'Acompte reçu – Calypso Bay', htmlBody: buildFinalizationClientEmail_(d, pay) })
    } else if (kind === 'depositManager') {
      MailApp.sendEmail({ to: to, replyTo: RECIPIENT_EMAIL, subject: 'Acompte reçu – Calypso Bay', htmlBody: buildFinalizationManagerEmail_(d, pay) })
    } else {
      return jsonOut({ status: 'error', message: 'Type invalide' })
    }
    return jsonOut({ status: 'success' })
  } catch (err) {
    return jsonOut({ status: 'error', message: 'Erreur: ' + (err && err.message ? err.message : String(err)) })
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
    const tokenColIndex = headers.indexOf('id')
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
      userMessage: data[rowIndex - 1][headers.indexOf('userMessage')],
      nbAdults: data[rowIndex - 1][headers.indexOf('nbAdults')],
      nbChilds: data[rowIndex - 1][headers.indexOf('nbChilds')],
      nbNights: data[rowIndex - 1][headers.indexOf('nbNights')],
      priceNights: data[rowIndex - 1][headers.indexOf('priceNights')],
      priceClean: data[rowIndex - 1][headers.indexOf('priceClean')],
      priceTax: data[rowIndex - 1][headers.indexOf('priceTax')],
      priceTotal: data[rowIndex - 1][headers.indexOf('priceTotal')],
      startDate: data[rowIndex - 1][headers.indexOf('startDate')],
      endDate: data[rowIndex - 1][headers.indexOf('endDate')]
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
// Finalisation depuis le webhook Stripe
// ======================================
function finalizeReservationFromWebhook_(token, paymentData, formData) {
  try {
    if (!token) {
      return jsonOut({ status: 'error', message: '❌ Token manquant' })
    }

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
    const tokenColIndex = headers.indexOf('id')
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
        rowIndex = i + 1
        break
      }
    }
    if (rowIndex === -1) {
      return jsonOut({ status: 'error', message: '❌ Réservation non trouvée' })
    }

    // Idempotence: si déjà payé, ne rien refaire
    const currentStatus = sh.getRange(rowIndex, statusColIndex + 1).getValue()
    if (String(currentStatus) === 'depositPay') {
      return jsonOut({ status: 'success', message: 'Déjà finalisé' })
    }

    // Vérifier statut de paiement
    if (!paymentData || String(paymentData.status) !== 'succeeded') {
      return jsonOut({ status: 'error', message: '❌ Paiement non confirmé' })
    }

    // Colonnes cibles
    const cols = headerIndexes_(headers, [
      'name',
      'email',
      'tel',
      'depositAt',
      'depositAmount',
      'depositPaymentIntentId',
      'balanceDueAt',
      'balanceAmount',
      'address',
      'city',
      'postal',
      'country',
      'finalMessage',
      'childAge1',
      'childAge2',
      'childAge3',
      'childAge4',
      'childAge5'
    ])

    const values = {
      status: 'depositPay',
      depositAt: new Date(),
      depositAmount: Number(paymentData.amount || 0),
      name: formData && formData.name ? String(formData.name) : null,
      email: formData && formData.email ? String(formData.email) : null,
      tel: formData && formData.tel ? String(formData.tel) : null,
      address: formData && formData.address ? String(formData.address) : null,
      city: formData && formData.city ? String(formData.city) : null,
      postal: formData && formData.postal ? String(formData.postal) : null,
      country: formData && formData.country ? String(formData.country) : null,
      finalMessage:
        formData && formData.message ? String(formData.message) : null
    }

    // Écrire statut
    sh.getRange(rowIndex, statusColIndex + 1).setValue(values.status)
    // Écrire timestamp acompte
    if (cols.depositAt !== -1)
      sh.getRange(rowIndex, cols.depositAt + 1).setValue(values.depositAt)
    // Écrire id PaymentIntent acompte
    if (cols.depositPaymentIntentId !== -1)
      sh.getRange(rowIndex, cols.depositPaymentIntentId + 1).setValue(
        String(paymentData.paymentIntentId || '')
      )
    // Écrire montant acompte (en euros)
    if (cols.depositAmount !== -1)
      sh.getRange(rowIndex, cols.depositAmount + 1).setValue(
        values.depositAmount
      )
    // Écrire infos client
    function writeIfPresent(colIdx, newValue) {
      if (
        colIdx !== -1 &&
        newValue !== undefined &&
        newValue !== null &&
        String(newValue).trim() !== ''
      ) {
        sh.getRange(rowIndex, colIdx + 1).setValue(newValue)
      }
    }

    writeIfPresent(cols.name, values.name)
    writeIfPresent(cols.email, values.email)
    writeIfPresent(cols.tel, values.tel)
    writeIfPresent(cols.address, values.address)
    writeIfPresent(cols.city, values.city)
    writeIfPresent(cols.postal, values.postal)
    writeIfPresent(cols.country, values.country)
    writeIfPresent(cols.finalMessage, values.finalMessage)

    // Calcul solde + échéance si colonnes présentes
    if (cols.balanceAmount !== -1 || cols.balanceDueAt !== -1) {
      const totalIdx = headers.indexOf('priceTotal')
      const startIdx = headers.indexOf('startDate')
      const totalVal =
        totalIdx !== -1 ? Number(data[rowIndex - 1][totalIdx] || 0) : 0
      const balance = Math.max(0, totalVal - values.depositAmount)
      if (cols.balanceAmount !== -1)
        sh.getRange(rowIndex, cols.balanceAmount + 1).setValue(balance)
      if (cols.balanceDueAt !== -1) {
        const startVal = startIdx !== -1 ? data[rowIndex - 1][startIdx] : ''
        if (startVal) {
          const due = new Date(
            new Date(startVal).getTime() - 7 * 24 * 60 * 60 * 1000
          )
          sh.getRange(rowIndex, cols.balanceDueAt + 1).setValue(due)
        }
      }
    }

    // Âges enfants
    const ages = Array.isArray(formData.childrenAges)
      ? formData.childrenAges.slice(0, 5)
      : []
    for (let i = 0; i < 5; i++) {
      const headerKey = 'childAge' + (i + 1)
      const colIdx = cols[headerKey]
      if (colIdx !== -1 && ages[i] != null && String(ages[i]).trim() !== '') {
        sh.getRange(rowIndex, colIdx + 1).setValue(Number(ages[i]))
      }
    }

    // Préparer données pour emails (reprendre la ligne actuelle)
    const row = sh.getRange(rowIndex, 1, 1, sh.getLastColumn()).getValues()[0]
    const h = headers
    const reservationData = {
      token: token,
      name: row[h.indexOf('name')],
      email: row[h.indexOf('email')],
      tel: row[h.indexOf('tel')],
      userMessage:
        row[h.indexOf('finalMessage')] || row[h.indexOf('userMessage')] || '',
      nbAdults: row[h.indexOf('nbAdults')],
      nbChilds: row[h.indexOf('nbChilds')],
      nbNights: row[h.indexOf('nbNights')],
      priceNights: row[h.indexOf('priceNights')],
      priceClean: row[h.indexOf('priceClean')],
      priceTax: row[h.indexOf('priceTax')],
      priceTotal: row[h.indexOf('priceTotal')],
      startDate: row[h.indexOf('startDate')],
      endDate: row[h.indexOf('endDate')],
      address: h.indexOf('address') !== -1 ? row[h.indexOf('address')] : '',
      city: h.indexOf('city') !== -1 ? row[h.indexOf('city')] : '',
      postal: h.indexOf('postal') !== -1 ? row[h.indexOf('postal')] : '',
      country: h.indexOf('country') !== -1 ? row[h.indexOf('country')] : '',
      childrenAges: [
        h.indexOf('childAge1') !== -1 ? row[h.indexOf('childAge1')] : '',
        h.indexOf('childAge2') !== -1 ? row[h.indexOf('childAge2')] : '',
        h.indexOf('childAge3') !== -1 ? row[h.indexOf('childAge3')] : '',
        h.indexOf('childAge4') !== -1 ? row[h.indexOf('childAge4')] : '',
        h.indexOf('childAge5') !== -1 ? row[h.indexOf('childAge5')] : ''
      ].filter(function (v) {
        return v !== '' && v != null
      })
    }

    sendFinalizationEmails_(reservationData, paymentData)

    return jsonOut({
      status: 'success',
      message: '✅ Finalisation enregistrée'
    })
  } catch (err) {
    return jsonOut({
      status: 'error',
      message: '❌ Erreur: ' + (err && err.message ? err.message : String(err))
    })
  }
}

// Désactivé: on ne crée plus automatiquement les colonnes pour éviter les doublons
function ensureHeaders_(sh) {
  const headers = sh
    .getRange(1, 1, 1, Math.max(1, sh.getLastColumn()))
    .getValues()[0]
  return { headers: headers, changed: false }
}

function headerIndexes_(headers, keys) {
  const map = {}
  keys.forEach((k) => (map[k] = headers.indexOf(k)))
  return map
}

// ======================================
// Finalisation du solde (webhook Stripe)
// ======================================
function finalizeBalanceFromWebhook_(token, paymentData) {
  try {
    if (!token)
      return jsonOut({ status: 'error', message: '❌ Token manquant' })
    const ss = SpreadsheetApp.openById(SHEET_ID)
    const sh = ss.getSheetByName(SHEET_NAME)
    if (!sh)
      return jsonOut({
        status: 'error',
        message: '❌ Onglet ReservationsTemp non trouvé'
      })

    const data = sh.getDataRange().getValues()
    const headers = data[0]
    const tokenColIndex = headers.indexOf('id')
    const statusColIndex = headers.indexOf('status')
    if (tokenColIndex === -1 || statusColIndex === -1)
      return jsonOut({
        status: 'error',
        message: '❌ Structure de données invalide'
      })

    let rowIndex = -1
    for (let i = 1; i < data.length; i++) {
      if (data[i][tokenColIndex] === token) {
        rowIndex = i + 1
        break
      }
    }
    if (rowIndex === -1)
      return jsonOut({ status: 'error', message: '❌ Réservation non trouvée' })

    const cols = headerIndexes_(headers, [
      'balanceAmount',
      'balancePaymentIntentId',
      'balancePaidAt'
    ])

    // Écritures
    if (cols.balanceAmount !== -1)
      sh.getRange(rowIndex, cols.balanceAmount + 1).setValue(
        Number(paymentData.amount || 0)
      )
    if (cols.balancePaymentIntentId !== -1)
      sh.getRange(rowIndex, cols.balancePaymentIntentId + 1).setValue(
        String(paymentData.paymentIntentId || '')
      )
    if (cols.balancePaidAt !== -1)
      sh.getRange(rowIndex, cols.balancePaidAt + 1).setValue(new Date())

    // Statut
    sh.getRange(rowIndex, statusColIndex + 1).setValue('balancePay')

    // Notification emails (client + gestionnaire)
    const row = sh.getRange(rowIndex, 1, 1, sh.getLastColumn()).getValues()[0]
    const h = headers
    const reservationData = {
      name: row[h.indexOf('name')],
      email: row[h.indexOf('email')],
      tel: row[h.indexOf('tel')],
      nbAdults: row[h.indexOf('nbAdults')],
      nbChilds: row[h.indexOf('nbChilds')],
      nbNights: row[h.indexOf('nbNights')],
      priceNights: row[h.indexOf('priceNights')],
      priceClean: row[h.indexOf('priceClean')],
      priceTax: row[h.indexOf('priceTax')],
      priceTotal: row[h.indexOf('priceTotal')],
      startDate: row[h.indexOf('startDate')],
      endDate: row[h.indexOf('endDate')]
    }
    sendBalanceEmails_(reservationData, paymentData)

    return jsonOut({ status: 'success', message: '✅ Solde enregistré' })
  } catch (err) {
    return jsonOut({
      status: 'error',
      message: '❌ Erreur: ' + (err && err.message ? err.message : String(err))
    })
  }
}

// Emails solde
function sendBalanceEmails_(data, paymentData) {
  const color = '#5d3fd3'
  const amount = Number(paymentData.amount || 0).toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  // Client
  const subjectClient = 'Solde payé – Calypso Bay'
  MailApp.sendEmail({
    to: data.email,
    replyTo: RECIPIENT_EMAIL,
    subject: subjectClient,
    htmlBody: buildBalanceClientEmail_(data, {
      amount: paymentData.amount,
      paymentIntentId: paymentData.paymentIntentId
    })
  })
  // Gestionnaire
  const subjectManager = 'Solde reçu de ' + (data.name || 'Client')
  MailApp.sendEmail({
    to: RECIPIENT_EMAIL,
    subject: subjectManager,
    htmlBody: buildBalanceManagerEmail_(data, {
      amount: paymentData.amount,
      paymentIntentId: paymentData.paymentIntentId
    })
  })
}

// Email client: solde payé (contenu dédié)
function buildBalanceClientEmail_(data, paymentData) {
  const color = '#5d3fd3'
  const fmt = function (n) {
    return Number(n || 0).toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }
  const bloc = formatReservationDetails_(data)
  return (
    '<div style="background:' +
    color +
    ';height:56px;border-radius:16px 16px 0 0"></div>' +
    '<div style="padding:24px;font-family:Arial,Helvetica,sans-serif">' +
    '<h2 style="margin:0 0 16px 0;color:#111">🎉 Solde payé – Calypso Bay</h2>' +
    '<p>Bonjour ' +
    escapeHtml_(data.name || '') +
    ',</p><p>Nous avons bien reçu le <strong>paiement du solde</strong> pour votre séjour à <strong>Calypso Bay</strong>. Félicitations et bienvenue !</p>' +
    '<p>Pour rappel, vous pouvez encore annuler selon les conditions prévues dans notre notice:<br/>• Annulation gratuite jusqu’à 3 mois avant le début du séjour.<br/>• Au-delà, l’acompte reste acquis.</p>' +
    '<h3 style="margin:24px 0 8px 0;color:#111">Récapitulatif</h3>' +
    '<div style="background:#f7f8fa;border:1px solid #e5e7eb;border-radius:12px;padding:16px;color:#111">' +
    bloc +
    '<br><br><strong>Solde payé :</strong> ' +
    fmt(paymentData.amount) +
    ' €' +
    '</div>' +
    '<div style="margin-top:18px">' +
    '<a href="' +
    buildSiteUrl_('/annuler-reservation', { token: data.token || '' }) +
    '" style="display:inline-block;background:#ef4444;color:#fff;text-decoration:none;padding:12px 16px;border-radius:10px">Annuler ma réservation</a>' +
    '</div>' +
    '</div>'
  )
}

// Email gestionnaire: solde payé
function buildBalanceManagerEmail_(data, paymentData) {
  const color = '#5d3fd3'
  const fmt = function (n) {
    return Number(n || 0).toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }
  const bloc = formatReservationDetails_(data)
  return (
    '<div style="background:' +
    color +
    ';height:56px;border-radius:16px 16px 0 0"></div>' +
    '<div style="padding:24px;font-family:Arial,Helvetica,sans-serif">' +
    '<h2 style="margin:0 0 16px 0;color:#111">✅ Solde reçu</h2>' +
    '<p>Le solde de <strong>' +
    fmt(paymentData.amount) +
    ' €</strong> a été reçu pour la réservation de <strong>' +
    escapeHtml_(data.name || '') +
    '</strong>.</p>' +
    '<h3 style="margin:24px 0 8px 0;color:#111">Récapitulatif</h3>' +
    '<div style="background:#f7f8fa;border:1px solid #e5e7eb;border-radius:12px;padding:16px;color:#111">' +
    bloc +
    '</div>' +
    '</div>'
  )
}

// ======================================
// Demande d'annulation (client)
// ======================================
function requestCancellation_(token, reason) {
  try {
    if (!token)
      return jsonOut({ status: 'error', message: '❌ Token manquant' })
    const ss = SpreadsheetApp.openById(SHEET_ID)
    const sh = ss.getSheetByName(SHEET_NAME)
    if (!sh)
      return jsonOut({
        status: 'error',
        message: '❌ Onglet ReservationsTemp non trouvé'
      })

    const data = sh.getDataRange().getValues()
    const headers = data[0]
    const tokenColIndex = headers.indexOf('id')
    if (tokenColIndex === -1)
      return jsonOut({
        status: 'error',
        message: '❌ Structure de données invalide'
      })

    let rowIndex = -1
    for (let i = 1; i < data.length; i++) {
      if (data[i][tokenColIndex] === token) {
        rowIndex = i + 1
        break
      }
    }
    if (rowIndex === -1)
      return jsonOut({ status: 'error', message: '❌ Réservation non trouvée' })

    const cols = headerIndexes_(headers, [
      'cancelRequestedAt',
      'cancelReason',
      'cancelStatus'
    ])
    if (cols.cancelRequestedAt !== -1)
      sh.getRange(rowIndex, cols.cancelRequestedAt + 1).setValue(new Date())
    if (cols.cancelReason !== -1)
      sh.getRange(rowIndex, cols.cancelReason + 1).setValue(
        String(reason || '')
      )
    if (cols.cancelStatus !== -1)
      sh.getRange(rowIndex, cols.cancelStatus + 1).setValue('pending')

    // Mails d’accusé (simple)
    const email = data[rowIndex - 1][headers.indexOf('email')]
    const name = data[rowIndex - 1][headers.indexOf('name')]
    MailApp.sendEmail({
      to: String(email),
      replyTo: RECIPIENT_EMAIL,
      subject: "Votre demande d'annulation – Calypso Bay",
      htmlBody:
        '<div style="background:#5d3fd3;height:56px;border-radius:16px 16px 0 0"></div><div style="padding:24px;font-family:Arial,sans-serif">Bonjour ' +
        escapeHtml_(name) +
        ",<br>Votre demande d'annulation a bien été enregistrée. Notre équipe va la traiter rapidement.</div>"
    })
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: "Demande d'annulation reçue",
      htmlBody:
        '<div style="background:#5d3fd3;height:56px;border-radius:16px 16px 0 0"></div><div style="padding:24px;font-family:Arial,sans-serif">Une nouvelle demande d\'annulation a été reçue.</div>'
    })

    return jsonOut({ status: 'success', message: '✅ Demande enregistrée' })
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
  const clientSubject = 'Votre réservation pour Calypso Bay est confirmée'
  const clientHtml = buildFinalizationClientEmail_(data, paymentData)

  MailApp.sendEmail({
    to: data.email,
    replyTo: RECIPIENT_EMAIL,
    subject: clientSubject,
    htmlBody: clientHtml
  })

  // Email au gestionnaire
  const managerSubject = 'Acompte reçu de ' + (data.name || 'Client')
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
  const color = '#5d3fd3'
  const depositAmount = Number(paymentData.amount || 0).toLocaleString(
    'fr-FR',
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  )
  // Calcul date limite (J-7)
  const start = new Date(data.startDate)
  const deadline = new Date(start.getTime() - 7 * 24 * 60 * 60 * 1000)
  const deadlineStr = deadline.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  const details = (function () {
    var base = formatReservationDetails_(data)
    // Adresse complète
    var addressParts = []
    if (data.address) addressParts.push(escapeHtml_(data.address))
    var cityLine = []
    if (data.postal) cityLine.push(escapeHtml_(data.postal))
    if (data.city) cityLine.push(escapeHtml_(data.city))
    if (cityLine.length) addressParts.push(cityLine.join(' '))
    if (data.country) addressParts.push(escapeHtml_(data.country))
    if (addressParts.length) {
      base +=
        '<br><br><strong>Adresse de facturation :</strong><br>' +
        addressParts.join('<br>')
    }
    // Acompte et solde restant
    var total = Number(data.priceTotal || 0)
    var deposit = Number(paymentData.amount || 0)
    var remaining = Math.max(0, total - deposit)
    var fmt = function (n) {
      return Number(n).toLocaleString('fr-FR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }
    if (!isNaN(total) && total > 0) {
      base += '<br><br><strong>Acompte reçu :</strong> ' + fmt(deposit) + ' €'
      base += '<br><strong>Solde restant :</strong> ' + fmt(remaining) + ' €'
    }
    // Âges enfants
    if (Array.isArray(data.childrenAges) && data.childrenAges.length > 0) {
      base +=
        '<br><br><strong>Âges des enfants :</strong> ' +
        data.childrenAges
          .map(function (a) {
            return escapeHtml_(a)
          })
          .join(', ')
    }
    return base
  })()

  const cancelUrl = buildSiteUrl_('/annuler-reservation', {
    token: data.token || ''
  })
  const payBalanceUrl = buildSiteUrl_('/payer-solde', {
    token: data.token || ''
  })

  return (
    '<!DOCTYPE html>' +
    '<html lang="fr">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>Calypso Bay</title>' +
    '<style>' +
    "body{font-family:'Helvetica Neue',Arial,sans-serif;background:#f2f4f8;padding:40px 20px;margin:0;}" +
    '.container{max-width:640px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.07);border:1px solid rgba(0,0,0,0.05);}' +
    '.header{background:' +
    color +
    ';color:#ffffff;text-align:center;padding:28px;}' +
    '.header h1{margin:0;font-size:24px;letter-spacing:0.5px;}' +
    '.section{padding:26px 28px;border-bottom:1px solid #eee;}' +
    '.section:last-child{border-bottom:none;}' +
    'p{margin:8px 0;line-height:1.6;color:#333;}' +
    '.details{background:#f9fafb;padding:16px;border-left:3px solid ' +
    color +
    ';border-radius:8px;margin-top:12px;}' +
    '.btn{display:block;background:' +
    color +
    ';color:#ffffff !important;text-decoration:none;padding:12px 20px;border-radius:10px;font-weight:700;margin-top:12px;text-align:center;}' +
    '</style>' +
    '</head>' +
    '<body>' +
    '<div class="container">' +
    '<div class="header"><h1>🏖️ Calypso Bay</h1></div>' +
    '<div class="section">' +
    '<p>Bonjour ' +
    escapeHtml_(data.name) +
    ',</p>' +
    '<p>Nous avons le plaisir de vous informer que nous avons bien reçu votre acompte de 10% (' +
    depositAmount +
    ' €), confirmant ainsi votre réservation dans notre villa <strong>Calypso Bay</strong>.</p>' +
    '<p>Le solde restant sera à régler au maximum <strong>7 jours avant le début de votre séjour</strong>, soit le <strong>' +
    escapeHtml_(deadlineStr) +
    '</strong>.</p>' +
    '<p>Comme précisé dans notre notice d’informations, vous pouvez annuler gratuitement votre réservation jusqu’à <strong>3 mois avant</strong> le début du séjour. Au-delà, l’acompte restera acquis.</p>' +
    '<p>Vous trouverez ci-dessous le récapitulatif de votre réservation, ainsi que deux liens utiles : l’un pour <strong>annuler</strong> votre réservation, l’autre pour <strong>régler le solde restant</strong>.</p>' +
    '</div>' +
    '<div class="section">' +
    '<h3 style="margin:0 0 10px; color:' +
    color +
    '">📋 Récapitulatif</h3>' +
    '<div class="details">' +
    details +
    '</div>' +
    '</div>' +
    '<div class="section" style="text-align:center;">' +
    '<a href="' +
    escapeHtml_(payBalanceUrl) +
    '" class="btn"><span style="color:#ffffff !important;text-decoration:none !important;">Régler le solde restant</span></a>' +
    '<a href="' +
    escapeHtml_(cancelUrl) +
    '" class="btn" style="background:#ef4444"><span style="color:#ffffff !important;text-decoration:none !important;">Annuler ma réservation</span></a>' +
    '</div>' +
    '<div class="section" style="text-align:center;color:#666;font-size:13px">Nous vous souhaitons un excellent séjour à Calypso Bay.</div>' +
    '</div>' +
    '</body>' +
    '</html>'
  )
}

// ======================================
// Construction email gestionnaire finalisation
// ======================================
function buildFinalizationManagerEmail_(data, paymentData) {
  const color = '#5d3fd3'
  const amount = Number(paymentData.amount || 0).toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  const details = formatReservationDetails_(data)
  return (
    '<!DOCTYPE html>' +
    '<html lang="fr">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>Acompte reçu</title>' +
    '<style>' +
    "body{font-family:'Helvetica Neue',Arial,sans-serif;background:#f2f4f8;padding:40px 20px;margin:0;}" +
    '.container{max-width:640px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.07);border:1px solid rgba(0,0,0,0.05);}' +
    '.header{background:' +
    color +
    ';color:#ffffff;text-align:center;padding:28px;}' +
    '.header h1{margin:0;font-size:22px;letter-spacing:0.5px;}' +
    '.section{padding:24px 28px;border-bottom:1px solid #eee;}' +
    '.section:last-child{border-bottom:none;}' +
    'p{margin:6px 0;line-height:1.6;color:#333;}' +
    '.details{background:#f9fafb;padding:16px;border-left:3px solid ' +
    color +
    ';border-radius:8px;margin-top:12px;}' +
    '</style>' +
    '</head>' +
    '<body>' +
    '<div class="container">' +
    '<div class="header"><h1>✅ Acompte reçu</h1></div>' +
    '<div class="section">' +
    '<p><strong>Client :</strong> ' +
    escapeHtml_(data.name || '') +
    '</p>' +
    '<p><strong>Email :</strong> ' +
    escapeHtml_(data.email || '') +
    '</p>' +
    '<p><strong>Téléphone :</strong> ' +
    (data.tel ? escapeHtml_(data.tel) : 'Non renseigné') +
    '</p>' +
    '</div>' +
    '<div class="section">' +
    '<p><strong>Montant accompagné :</strong> ' +
    amount +
    ' €</p>' +
    '<p><strong>Référence Stripe :</strong> ' +
    escapeHtml_(paymentData.paymentIntentId || '') +
    '</p>' +
    '</div>' +
    '<div class="section">' +
    '<h3 style="margin:0 0 10px; color:' +
    color +
    '">📋 Récapitulatif</h3>' +
    '<div class="details">' +
    details +
    '</div>' +
    '</div>' +
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
      'userMessage',
      'nbAdults',
      'nbChilds',
      'nbNights',
      'priceNights',
      'priceClean',
      'priceTax',
      'priceTotal',
      'startDate',
      'endDate'
    ])
  }

  const rowValues = [
    new Date(data.createdAt),
    token,
    'pending',
    data.name,
    data.email,
    data.tel,
    data.userMessage,
    data.nbAdults,
    data.nbChilds,
    data.nbNights,
    data.priceNights,
    data.priceClean,
    data.priceTax,
    data.priceTotal,
    data.startDate,
    data.endDate
  ]
  sh.appendRow(rowValues)
  return sh.getLastRow()
}

// ==================================================
// Construction de l'email HTML (mise en forme demandée)
// ==================================================
function buildEmailHtml_(data, links) {
  const { acceptUrl, refuseUrl } = links
  const detailsHtml = formatReservationDetails_(data)

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
    '.header{background:#5d3fd3;background-color:#5d3fd3;color:#ffffff;text-align:center;padding:30px;}' +
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
    '" target="_blank" style="display:inline-block;background:#6366f1;border-radius:8px;padding:12px 18px;text-decoration:none;color:#ffffff !important;font-weight:700;font-size:14px;line-height:1.2;margin:0 6px;"><span style="color:#ffffff !important;text-decoration:none !important;">📩 Répondre</span></a>' +
    '<a href="' +
    escapeHtml_(acceptUrl) +
    '" target="_blank" style="display:inline-block;background:#10b981;border-radius:8px;padding:12px 18px;text-decoration:none;color:#ffffff !important;font-weight:700;font-size:14px;line-height:1.2;margin:0 6px;"><span style="color:#ffffff !important;text-decoration:none !important;">✅ Accepter</span></a>' +
    '<a href="' +
    escapeHtml_(refuseUrl) +
    '" target="_blank" style="display:inline-block;background:#ef4444;border-radius:8px;padding:12px 18px;text-decoration:none;color:#ffffff !important;font-weight:700;font-size:14px;line-height:1.2;margin:0 6px;"><span style="color:#ffffff !important;text-decoration:none !important;">❌ Refuser</span></a>' +
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
// Formattage des détails (utilise les données structurées)
// =====================================================
function formatReservationDetails_(data) {
  const startDate = new Date(data.startDate)
  const endDate = new Date(data.endDate)

  const formatDate = (date) => {
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  let details = []

  // Dates avec formatage HTML
  const startDateStr = formatDate(startDate)
  const endDateStr = formatDate(endDate)
  details.push(
    `<strong>Dates :</strong> <u>${startDateStr}</u> au <u>${endDateStr}</u> (${data.nbNights} nuits)`
  )

  // Voyageurs
  if (data.nbChilds > 0) {
    details.push(
      `<strong>Voyageurs :</strong> ${data.nbAdults} adulte${
        data.nbAdults > 1 ? 's' : ''
      }, ${data.nbChilds} enfant${data.nbChilds > 1 ? 's' : ''}`
    )
  } else {
    details.push(
      `<strong>Voyageurs :</strong> ${data.nbAdults} adulte${
        data.nbAdults > 1 ? 's' : ''
      }`
    )
  }

  details.push('')
  details.push('<strong>Détail du prix :</strong>')

  if (data.priceNights > 0) {
    details.push(
      `&nbsp;&nbsp;&nbsp;&nbsp;• Total des nuits (${
        data.nbNights
      }) : ${data.priceNights.toLocaleString('fr-FR')} €`
    )
  }

  if (data.priceClean > 0) {
    details.push(
      `&nbsp;&nbsp;&nbsp;&nbsp;• Frais de ménage : ${data.priceClean.toLocaleString(
        'fr-FR'
      )} €`
    )
  }

  if (data.priceTax > 0) {
    details.push(
      `&nbsp;&nbsp;&nbsp;&nbsp;• Taxes (${data.nbAdults} adulte${
        data.nbAdults > 1 ? 's' : ''
      }) : ${data.priceTax.toLocaleString('fr-FR')} €`
    )
  }

  if (data.priceTotal > 0) {
    details.push(
      `&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Total : ${data.priceTotal.toLocaleString(
        'fr-FR'
      )} €</strong>`
    )
  }

  return details.join('<br>')
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
