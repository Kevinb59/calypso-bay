/**
 * Version de test de la fonction refund pour déboguer
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  try {
    console.log('=== TEST REFUND ===')
    const { token, refundDeposit, refundBalance } = req.body

    // Retourner immédiatement les données reçues
    return res.status(200).json({
      status: 'success',
      message: 'Test réussi',
      receivedData: {
        token,
        refundDeposit,
        refundBalance,
        gasUrl: process.env.NEXT_PUBLIC_GAS_URL ? 'Configurée' : 'Manquante',
        stripeKey: process.env.STRIPE_SECRET_KEY ? 'Configurée' : 'Manquante'
      }
    })
  } catch (error) {
    console.error('Erreur test:', error)
    return res.status(500).json({
      error: 'Erreur test',
      details: error.message
    })
  }
}
