/**
 * Route Vercel pour finaliser une réservation après paiement
 * Met à jour le statut dans Google Sheets et envoie les emails de confirmation
 */

// URL du Google Apps Script depuis les variables d'environnement
const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL

if (!GAS_URL) {
  throw new Error(
    "NEXT_PUBLIC_GAS_URL non configurée dans les variables d'environnement"
  )
}

export default async function handler(req, res) {
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
