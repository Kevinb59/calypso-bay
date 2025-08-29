/**
 * API de configuration temporaire
 * À supprimer après l'optimisation complète
 */

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  // Retourner les variables d'environnement nécessaires
  res.status(200).json({
    GAS_URL: process.env.NEXT_PUBLIC_GAS_URL,
    GAS_CONTACT_URL: process.env.NEXT_PUBLIC_GAS_CONTACT_URL,
    GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    DEPOSIT_PERCENT: process.env.DEPOSIT_PERCENT || '10',
    DEPOSIT_MIN_EUR: process.env.DEPOSIT_MIN_EUR || '0.5',
    ENVIRONMENT: process.env.NODE_ENV || 'production'
  })
}
