/**
 * Crée un PaymentIntent Stripe pour le solde restant
 * Metadata: { token, type: 'balance' }
 */

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  try {
    const { token } = req.body || {}
    if (!token) {
      return res.status(400).json({ error: 'Token manquant' })
    }

    // Récupérer la réservation pour calculer le solde: priceTotal - depositAmount
    const resp = await fetch(
      `${GAS_URL}?action=getReservation&token=${encodeURIComponent(token)}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    )
    if (!resp.ok) {
      return res.status(500).json({ error: 'Erreur GAS' })
    }
    const result = await resp.json()
    if (result.status !== 'success') {
      return res
        .status(400)
        .json({ error: result.message || 'Réservation introuvable' })
    }
    const data = result.data || {}
    const total = Number(data.priceTotal || 0)
    const deposit = Number(data.depositAmount || 0)
    const balance = Math.max(0, total - deposit)
    const balanceCents = Math.round(balance * 100)

    if (balanceCents <= 0) {
      return res.status(400).json({ error: 'Aucun solde à régler' })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: balanceCents,
      currency: 'eur',
      metadata: {
        token: token,
        type: 'balance',
        totalAmount: String(total),
        depositAmount: String(deposit),
        balanceAmount: String(balance)
      },
      description: `Solde réservation Calypso Bay - Token: ${token}`
    })

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      amount: balance,
      paymentIntentId: paymentIntent.id
    })
  } catch (err) {
    console.error('Erreur createBalancePaymentIntent:', err)
    res.status(500).json({ error: 'Erreur lors de la création du paiement' })
  }
}
