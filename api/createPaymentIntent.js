/**
 * Route Vercel pour créer un PaymentIntent Stripe
 * Calcule le montant de l'acompte (configurable) et crée l'intention de paiement
 */

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  // Vérifier que c'est une requête POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { token, totalAmount } = req.body

  if (!token || !totalAmount) {
    return res.status(400).json({ error: 'Token et montant total manquants' })
  }

  try {
    // Calculer l'acompte: pour les tests on autorise un pourcentage configurable
    const percent = Number(process.env.DEPOSIT_PERCENT || '10')
    const minEur = Number(process.env.DEPOSIT_MIN_EUR || '0.5')
    let computed = (Number(totalAmount) * (percent / 100))
    if (isNaN(computed) || computed <= 0) {
      computed = minEur
    }
    // Appliquer un minimum en euros
    const finalDepositEur = Math.max(computed, minEur)
    // Stripe attend des centimes
    const depositAmount = Math.round(finalDepositEur * 100)

    // Créer le PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: depositAmount,
      currency: 'eur',
      metadata: {
        token: token,
        type: 'deposit',
        totalAmount: totalAmount,
        depositPercent: String(percent),
        depositMinEur: String(minEur),
        finalDepositEur: String(finalDepositEur)
      },
      description: `Acompte réservation Calypso Bay - Token: ${token}`
    })

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      amount: depositAmount / 100, // Retourner en euros
      paymentIntentId: paymentIntent.id
    })
  } catch (error) {
    console.error('Erreur lors de la création du PaymentIntent:', error)
    res.status(500).json({
      error: 'Erreur lors de la création du paiement'
    })
  }
}
