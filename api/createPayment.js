/**
 * Route Vercel pour créer un PaymentIntent Stripe
 * Fusionne les anciennes routes createPaymentIntent.js et createBalancePaymentIntent.js
 * Gère les acomptes (type=deposit) et les soldes (type=balance)
 */

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL

export default async function handler(req, res) {
  // Vérifier que c'est une requête POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { token, type = 'deposit', totalAmount, formData } = req.body

  if (!token) {
    return res.status(400).json({ error: 'Token manquant' })
  }

  if (!['deposit', 'balance'].includes(type)) {
    return res
      .status(400)
      .json({ error: 'Type invalide. Doit être "deposit" ou "balance"' })
  }

  try {
    let paymentIntent
    let amount

    if (type === 'deposit') {
      // Logique pour l'acompte
      if (!totalAmount) {
        return res
          .status(400)
          .json({ error: "Montant total manquant pour l'acompte" })
      }

      // Récupérer les détails de la réservation pour obtenir la taxe de séjour
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
      const priceTax = Number(data.priceTax || 0)

      // Calculer l'acompte: 10% de (priceTotal - priceTax) au lieu de priceTotal
      const percent = Number(process.env.DEPOSIT_PERCENT || '10')
      const minEur = Number(process.env.DEPOSIT_MIN_EUR || '0.5')
      const amountWithoutTax = Number(totalAmount) - priceTax
      let computed = amountWithoutTax * (percent / 100)
      if (isNaN(computed) || computed <= 0) {
        computed = minEur
      }
      // Appliquer un minimum en euros
      const finalDepositEur = Math.max(computed, minEur)
      // Stripe attend des centimes
      amount = Math.round(finalDepositEur * 100)

      // Créer le PaymentIntent pour l'acompte
      paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'eur',
        metadata: {
          token: token,
          type: 'deposit',
          totalAmount: totalAmount,
          depositPercent: String(percent),
          depositMinEur: String(minEur),
          finalDepositEur: String(finalDepositEur),
          // FormData compact pour rester dans les limites de Stripe
          form: JSON.stringify({
            name: formData?.name || '',
            email: formData?.email || '',
            tel: formData?.tel || '',
            address: formData?.address || '',
            city: formData?.city || '',
            postal: formData?.postal || '',
            country: formData?.country || '',
            message: (formData?.message || '').slice(0, 400),
            childrenAges: Array.isArray(formData?.childrenAges)
              ? formData.childrenAges.slice(0, 5)
              : []
          }),
          // Fallbacks individuels (au cas où 'form' serait vide ou non parsable)
          name: formData?.name || '',
          email: formData?.email || '',
          tel: formData?.tel || '',
          address: formData?.address || '',
          city: formData?.city || '',
          postal: formData?.postal || '',
          country: formData?.country || '',
          messageShort: (formData?.message || '').slice(0, 180),
          childrenAgesCSV: Array.isArray(formData?.childrenAges)
            ? formData.childrenAges.slice(0, 5).join(',')
            : ''
        },
        description: `Acompte réservation Calypso Bay - Token: ${token}`
      })
    } else {
      // Logique pour le solde
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
      const priceTax = Number(data.priceTax || 0)
      const deposit = Number(data.depositAmount || 0)
      // Calculer le solde: (priceTotal - acompte) car le solde doit inclure la taxe de séjour
      const balance = Math.max(0, total - deposit)
      amount = Math.round(balance * 100)

      if (amount <= 0) {
        return res.status(400).json({ error: 'Aucun solde à régler' })
      }

      // Créer le PaymentIntent pour le solde
      paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
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
    }

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      amount: amount / 100, // Retourner en euros
      paymentIntentId: paymentIntent.id
    })
  } catch (error) {
    console.error(
      `Erreur lors de la création du PaymentIntent (${type}):`,
      error
    )
    res.status(500).json({
      error: 'Erreur lors de la création du paiement'
    })
  }
}
