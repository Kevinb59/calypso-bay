/**
 * Route Vercel pour les actions d'administration
 * Fusionne les anciennes routes admin/list.js et admin/detail.js
 * Gère la liste des réservations (action=list) et les détails (action=detail)
 */

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res
      .status(405)
      .json({ status: 'error', message: 'Méthode non autorisée' })
  }

  // Vérification de l'authentification admin
  const adminKey = req.headers['x-admin-key'] || ''
  const expected = process.env.ADMIN_KEY || ''
  if (!expected || adminKey !== expected) {
    return res.status(401).json({ status: 'error', message: 'Accès refusé' })
  }

  const { action, token, q } = req.query

  if (!action || !['list', 'detail'].includes(action)) {
    return res.status(400).json({
      status: 'error',
      message: 'Action invalide. Doit être "list" ou "detail"'
    })
  }

  const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL

  try {
    if (action === 'list') {
      // Action: Lister les réservations
      const searchQuery = q || ''
      const resp = await fetch(
        `${GAS_URL}?action=listReservations&q=${encodeURIComponent(
          searchQuery
        )}`
      )
      const data = await resp.json()
      return res.status(200).json(data)
    } else if (action === 'detail') {
      // Action: Obtenir les détails d'une réservation
      if (!token) {
        return res
          .status(400)
          .json({ status: 'error', message: 'Token manquant pour les détails' })
      }
      const resp = await fetch(
        `${GAS_URL}?action=getReservationAdmin&token=${encodeURIComponent(
          token
        )}`
      )
      const data = await resp.json()
      return res.status(200).json(data)
    }
  } catch (error) {
    console.error('Erreur admin:', error)
    return res.status(500).json({ status: 'error', message: 'Erreur serveur' })
  }
}
