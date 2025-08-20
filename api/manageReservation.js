/**
 * Route Vercel pour gérer une réservation (accepter ou refuser)
 * Met à jour le statut dans Google Sheets et envoie un email de confirmation
 */

// Configuration
const SHEET_ID = '1r6rmtpCZ3AZSSQKb6Kf51-Vdpkc1uzM2brubh6RK1tk'
const SHEET_NAME = 'ReservationsTemp'
const RECIPIENT_EMAIL = 'contact.calypso.bay@gmail.com'

// URL du Google Apps Script depuis les variables d'environnement
const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL

if (!GAS_URL) {
  throw new Error(
    "NEXT_PUBLIC_GAS_URL non configurée dans les variables d'environnement"
  )
}

export default async function handler(req, res) {
  // Vérifier que c'est une requête GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { token, action } = req.query

  if (!token) {
    return res.status(400).json({ error: 'Token manquant' })
  }

  if (!action || !['accept', 'refuse'].includes(action)) {
    return res.status(400).json({ error: 'Action invalide. Doit être "accept" ou "refuse"' })
  }

  try {
    // Appeler Google Apps Script pour traiter l'action
    const response = await fetch(
      `${GAS_URL}?action=${action}&token=${encodeURIComponent(token)}`,
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
      const redirectPage = action === 'accept' 
        ? '/reservation-acceptee.html' 
        : '/reservation-refusee.html'
      
      res.redirect(
        302,
        redirectPage + '?token=' + encodeURIComponent(token)
      )
    } else {
      // Rediriger vers une page d'erreur
      res.redirect(
        302,
        '/erreur-reservation.html?error=' + encodeURIComponent(result.message)
      )
    }
  } catch (error) {
    console.error(`Erreur lors de l'${action}:`, error)
    res.redirect(
      302,
      '/erreur-reservation.html?error=' +
        encodeURIComponent('Erreur technique lors du traitement')
    )
  }
}
