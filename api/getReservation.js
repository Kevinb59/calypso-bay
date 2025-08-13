/**
 * Route Vercel pour récupérer les données d'une réservation
 * Récupère les informations depuis Google Sheets via Apps Script
 */

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
    // Appeler Google Apps Script pour récupérer les données
    const scriptUrl = `https://script.google.com/macros/s/AKfycbzkdj57oOwsWqewCnXgvXsCeE9WdG90alI8dt1d_lk3w_xszZfE0dNoe3DW-LkzCiY/exec`

    const response = await fetch(
      `${scriptUrl}?action=getReservation&token=${encodeURIComponent(token)}`,
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
