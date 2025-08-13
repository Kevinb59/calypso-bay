/**
 * Route Vercel pour refuser une réservation
 * Met à jour le statut dans Google Sheets et envoie un email de refus
 */

// Configuration
const SHEET_ID = '1r6rmtpCZ3AZSSQKb6Kf51-Vdpkc1uzM2brubh6RK1tk'
const SHEET_NAME = 'ReservationsTemp'
const RECIPIENT_EMAIL = 'contact.calypso.bay@gmail.com'

export default async function handler(req, res) {
  // Vérifier que c'est une requête GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { token } = req.query

  if (!token) {
    return res.status(400).json({ error: 'Token manquant' })
  }

  try {
    // Appeler Google Apps Script pour traiter le refus
    const scriptUrl = `https://script.google.com/macros/s/AKfycbzkdj57oOwsWqewCnXgvXsCeE9WdG90alI8dt1d_lk3w_xszZfE0dNoe3DW-LkzCiY/exec`

    const response = await fetch(
      `${scriptUrl}?action=refuse&token=${encodeURIComponent(token)}`,
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
      // Rediriger vers une page de confirmation
      res.redirect(
        302,
        '/reservation-refusee.html?token=' + encodeURIComponent(token)
      )
    } else {
      // Rediriger vers une page d'erreur
      res.redirect(
        302,
        '/erreur-reservation.html?error=' + encodeURIComponent(result.message)
      )
    }
  } catch (error) {
    console.error('Erreur lors du refus:', error)
    res.redirect(
      302,
      '/erreur-reservation.html?error=' +
        encodeURIComponent('Erreur technique lors du traitement')
    )
  }
}
