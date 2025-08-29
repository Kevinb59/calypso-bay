/**
 * Route Vercel unifiée pour la gestion des réservations
 * Fusionne les anciennes routes getReservation.js, manageReservation.js, finalizeReservation.js et cancellation.js
 */

// URL du Google Apps Script depuis les variables d'environnement
const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL

if (!GAS_URL) {
  throw new Error(
    "NEXT_PUBLIC_GAS_URL non configurée dans les variables d'environnement"
  )
}

export default async function handler(req, res) {
  const {
    method,
    query: { action },
    body
  } = req

  // Vérifier que l'action est spécifiée
  if (!action) {
    return res.status(400).json({
      error: 'Action requise (get, manage, finalize, cancel, validateCancel)'
    })
  }

  try {
    switch (action) {
      case 'get':
        return await handleGetReservation(req, res)
      case 'manage':
        return await handleManageReservation(req, res)
      case 'finalize':
        return await handleFinalizeReservation(req, res)
      case 'cancel':
        return await handleCancelReservation(req, res)
      case 'validateCancel':
        return await handleValidateCancellation(req, res)
      default:
        return res.status(400).json({
          error:
            'Action invalide. Doit être "get", "manage", "finalize", "cancel" ou "validateCancel"'
        })
    }
  } catch (error) {
    console.error(`Erreur dans reservations.js (action: ${action}):`, error)
    res.status(500).json({
      status: 'error',
      message: 'Erreur technique lors du traitement de la réservation'
    })
  }
}

// Fonction pour récupérer les données d'une réservation
async function handleGetReservation(req, res) {
  // Vérifier que c'est une requête GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { token } = req.query

  if (!token) {
    return res.status(400).json({ error: 'Token manquant' })
  }

  try {
    // Appeler Google Apps Script pour récupérer les données
    const response = await fetch(
      `${GAS_URL}?action=getReservation&token=${encodeURIComponent(token)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`)
    }

    const result = await response.json()

    if (result.status === 'success') {
      res.status(200).json(result)
    } else {
      res.status(400).json(result)
    }
  } catch (error) {
    console.error('Erreur lors de la récupération:', error)
    res.status(500).json({
      status: 'error',
      message: 'Erreur technique lors de la récupération des données'
    })
  }
}

// Fonction pour gérer les actions de réservation (accepter/refuser)
async function handleManageReservation(req, res) {
  // Vérifier que c'est une requête GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { token, manageAction } = req.query

  if (!token) {
    return res.status(400).json({ error: 'Token manquant' })
  }

  if (!manageAction || !['accept', 'refuse'].includes(manageAction)) {
    return res.status(400).json({
      error: 'Action de gestion invalide. Doit être "accept" ou "refuse"'
    })
  }

  try {
    // Appeler Google Apps Script pour traiter l'action
    const response = await fetch(
      `${GAS_URL}?action=${manageAction}&token=${encodeURIComponent(token)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`)
    }

    const result = await response.json()

    if (result.status === 'success') {
      // Rediriger vers la page appropriée selon l'action
      if (manageAction === 'accept') {
        res.redirect(
          302,
          '/reservation-acceptee.html?token=' + encodeURIComponent(token)
        )
      } else {
        res.redirect(
          302,
          '/reservation-refusee.html?token=' + encodeURIComponent(token)
        )
      }
    } else {
      // Rediriger vers une page d'erreur
      res.redirect(
        302,
        '/erreur-reservation.html?error=' + encodeURIComponent(result.message)
      )
    }
  } catch (error) {
    console.error(`Erreur lors de l'action ${manageAction}:`, error)
    res.redirect(
      302,
      '/erreur-reservation.html?error=' +
        encodeURIComponent('Erreur technique lors du traitement')
    )
  }
}

// Fonction pour finaliser une réservation après paiement
async function handleFinalizeReservation(req, res) {
  // Vérifier que c'est une requête POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { token, paymentData } = req.body

  if (!token || !paymentData) {
    return res
      .status(400)
      .json({ error: 'Token et données de paiement manquants' })
  }

  try {
    // Appeler Google Apps Script pour finaliser la réservation
    const response = await fetch(
      `${GAS_URL}?action=finalizeReservation&token=${encodeURIComponent(
        token
      )}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ paymentData })
      }
    )

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`)
    }

    const result = await response.json()

    if (result.status === 'success') {
      res.status(200).json(result)
    } else {
      res.status(400).json(result)
    }
  } catch (error) {
    console.error('Erreur lors de la finalisation:', error)
    res.status(500).json({
      status: 'error',
      message: 'Erreur technique lors de la finalisation'
    })
  }
}

// Fonction pour demander l'annulation d'une réservation
async function handleCancelReservation(req, res) {
  // Vérifier que c'est une requête POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  try {
    const { token, reason } = req.body || {}
    if (!token) {
      return res.status(400).json({ error: 'Token manquant' })
    }

    const resp = await fetch(
      `${GAS_URL}?action=requestCancellation&token=${encodeURIComponent(
        token
      )}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason: reason || '' })
      }
    )

    const result = await resp.json()
    if (!resp.ok || result.status !== 'success') {
      return res.status(400).json({
        error: result.message || 'Erreur annulation'
      })
    }

    res.status(200).json(result)
  } catch (err) {
    console.error('Erreur requestCancellation:', err)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

// Fonction pour valider l'annulation d'une réservation
async function handleValidateCancellation(req, res) {
  // Vérifier que c'est une requête GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { token } = req.query

  if (!token) {
    return res.status(400).json({ error: 'Token manquant' })
  }

  try {
    const response = await fetch(
      `${GAS_URL}?action=validateCancellation&token=${encodeURIComponent(
        token
      )}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      }
    )

    const data = await response.json()

    if (data.status === 'success') {
      // Rediriger vers une page de succès
      res.writeHead(302, {
        Location: '/annulation-validee.html'
      })
      res.end()
    } else {
      // Rediriger vers une page d'erreur
      res.writeHead(302, {
        Location: `/erreur-annulation.html?error=${encodeURIComponent(
          data.message || 'Erreur inconnue'
        )}`
      })
      res.end()
    }
  } catch (err) {
    console.error('Erreur validateCancellation:', err)
    res.writeHead(302, {
      Location: `/erreur-annulation.html?error=${encodeURIComponent(
        'Erreur de connexion'
      )}`
    })
    res.end()
  }
}
