export default function handler(req, res) {
  // Autoriser seulement les requêtes GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Récupérer les variables d'environnement
  const gasUrl = process.env.NEXT_PUBLIC_GAS_URL
  const gasContactUrl = process.env.NEXT_PUBLIC_GAS_CONTACT_URL
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const depositPercent = Number(process.env.DEPOSIT_PERCENT || '10')
  const depositMinEur = Number(process.env.DEPOSIT_MIN_EUR || '0.5')

  // Vérifier que les variables sont configurées
  if (!gasUrl || !gasContactUrl || !googleMapsApiKey) {
    return res.status(500).json({
      error: "Variables d'environnement non configurées",
      missing: {
        gasUrl: !gasUrl,
        gasContactUrl: !gasContactUrl,
        googleMapsApiKey: !googleMapsApiKey
      }
    })
  }

  // Retourner la configuration
  res.status(200).json({
    GAS_URL: gasUrl,
    GAS_CONTACT_URL: gasContactUrl,
    GOOGLE_MAPS_API_KEY: googleMapsApiKey,
    ENVIRONMENT: process.env.NODE_ENV || 'production',
    DEPOSIT_PERCENT: depositPercent,
    DEPOSIT_MIN_EUR: depositMinEur
  })
}
