const GAS_URL = process.env.GAS_URL

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { token } = req.query

  if (!token) {
    return res.status(400).json({ error: 'Token manquant' })
  }

  try {
    const response = await fetch(
      `${GAS_URL}?action=validateCancellation&token=${encodeURIComponent(token)}`,
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
        Location: `/erreur-annulation.html?error=${encodeURIComponent(data.message || 'Erreur inconnue')}`
      })
      res.end()
    }
  } catch (err) {
    console.error('Erreur validateCancellation:', err)
    res.writeHead(302, {
      Location: `/erreur-annulation.html?error=${encodeURIComponent('Erreur de connexion')}`
    })
    res.end()
  }
}
