/**
 * Route Vercel pour créer un PaymentIntent Stripe
 * Calcule le montant de l'acompte (10%) et crée l'intention de paiement
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
    // Calculer l'acompte (10% du montant total)
    const depositAmount = Math.round(totalAmount * 0.1 * 100) // Stripe utilise les centimes

    // Créer le PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: depositAmount,
      currency: 'eur',
      metadata: {
        token: token,
        type: 'deposit',
        totalAmount: totalAmount
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
