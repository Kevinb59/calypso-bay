/**
 * Route Vercel pour gérer les annulations de réservation
 * Fusionne les anciennes routes requestCancellation.js et validateCancellation.js
 */

// URL du Google Apps Script depuis les variables d'environnement
const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL

if (!GAS_URL) {
  throw new Error(
    "NEXT_PUBLIC_GAS_URL non configurée dans les variables d'environnement"
  )
}

export default async function handler(req, res) {
  const { action } = req.query

  if (!action || !['request', 'validate'].includes(action)) {
    return res.status(400).json({
      error: 'Action invalide. Doit être "request" ou "validate"'
    })
  }

  // Action: Demande d'annulation (POST)
  if (action === 'request') {
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

  // Action: Validation d'annulation (GET)
  if (action === 'validate') {
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
}
