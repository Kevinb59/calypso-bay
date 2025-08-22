/**
 * Route Vercel pour gérer les remboursements
 * Permet de rembourser l'acompte et/ou le solde d'une réservation
 */

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Vérifier que la clé Stripe est configurée
if (!process.env.STRIPE_SECRET_KEY) {
  console.error("Variable d'environnement STRIPE_SECRET_KEY manquante")
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  try {
    console.log('=== DÉBUT FONCTION REFUND ===')
    const { token, refundDeposit, refundBalance } = req.body
    console.log('Données reçues:', { token, refundDeposit, refundBalance })

    if (!token) {
      return res.status(400).json({ error: 'Token de réservation manquant' })
    }

    if (!refundDeposit && !refundBalance) {
      return res.status(400).json({ error: 'Aucun remboursement demandé' })
    }

    // Récupérer les données de la réservation depuis Google Apps Script
    const gasUrl = process.env.NEXT_PUBLIC_GAS_URL
    console.log('GAS URL:', gasUrl)

    if (!gasUrl) {
      console.error("Variable d'environnement NEXT_PUBLIC_GAS_URL manquante")
      return res.status(500).json({
        error: 'Configuration serveur manquante',
        details: 'NEXT_PUBLIC_GAS_URL non définie'
      })
    }

    const gasUrlToCall = `${gasUrl}?action=getReservationAdmin&token=${encodeURIComponent(
      token
    )}`
    console.log('URL à appeler:', gasUrlToCall)

    console.log('Appel à Google Apps Script...')
    const response = await fetch(gasUrlToCall)
    console.log('Réponse reçue, statut:', response.status)

    const data = await response.json()
    console.log('Données GAS reçues:', data)

    if (data.status !== 'success') {
      console.log('Erreur GAS:', data)
      return res.status(404).json({ error: 'Réservation non trouvée' })
    }

    const reservation = data.data
    const refunds = []

    console.log('Réservation récupérée:', {
      token,
      depositPaymentIntentId: reservation.depositPaymentIntentId,
      balancePaymentIntentId: reservation.balancePaymentIntentId,
      depositAmount: reservation.depositAmount,
      balanceAmount: reservation.balanceAmount,
      status: reservation.status
    })

    // Rembourser l'acompte si demandé
    if (refundDeposit) {
      if (!reservation.depositPaymentIntentId) {
        return res.status(400).json({
          error:
            "Impossible de rembourser l'acompte : aucun PaymentIntent trouvé"
        })
      }

      try {
        const paymentIntent = await stripe.paymentIntents.retrieve(
          reservation.depositPaymentIntentId
        )

        if (paymentIntent.charges.data.length > 0) {
          const charge = paymentIntent.charges.data[0]
          const refund = await stripe.refunds.create({
            charge: charge.id,
            // Pas de amount = remboursement complet automatique
            metadata: {
              reservation_token: token,
              refund_type: 'deposit',
              refunded_at: new Date().toISOString()
            }
          })

          refunds.push({
            type: 'deposit',
            amount: refund.amount / 100, // Récupérer le montant réel remboursé
            refundId: refund.id,
            status: refund.status
          })
        } else {
          return res.status(400).json({
            error: "Impossible de rembourser l'acompte : aucune charge trouvée"
          })
        }
      } catch (error) {
        console.error('Erreur remboursement acompte:', error)
        return res.status(500).json({
          error: "Erreur lors du remboursement de l'acompte",
          details: error.message
        })
      }
    }

    // Rembourser le solde si demandé
    if (refundBalance) {
      if (!reservation.balancePaymentIntentId) {
        return res.status(400).json({
          error:
            'Impossible de rembourser le solde : aucun PaymentIntent trouvé'
        })
      }

      try {
        const paymentIntent = await stripe.paymentIntents.retrieve(
          reservation.balancePaymentIntentId
        )

        if (paymentIntent.charges.data.length > 0) {
          const charge = paymentIntent.charges.data[0]
          const refund = await stripe.refunds.create({
            charge: charge.id,
            // Pas de amount = remboursement complet automatique
            metadata: {
              reservation_token: token,
              refund_type: 'balance',
              refunded_at: new Date().toISOString()
            }
          })

          refunds.push({
            type: 'balance',
            amount: refund.amount / 100, // Récupérer le montant réel remboursé
            refundId: refund.id,
            status: refund.status
          })
        } else {
          return res.status(400).json({
            error: 'Impossible de rembourser le solde : aucune charge trouvée'
          })
        }
      } catch (error) {
        console.error('Erreur remboursement solde:', error)
        return res.status(500).json({
          error: 'Erreur lors du remboursement du solde',
          details: error.message
        })
      }
    }

    // Mettre à jour la réservation dans Google Sheets
    const updateResponse = await fetch(`${gasUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'updateRefunds',
        token: token,
        refunds: refunds
      })
    })

    const updateData = await updateResponse.json()

    if (updateData.status !== 'success') {
      return res.status(500).json({
        error: 'Erreur lors de la mise à jour de la réservation',
        details: updateData.message
      })
    }

    // Envoyer l'email de confirmation de remboursement
    const emailResponse = await fetch(`${gasUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'sendRefundEmail',
        token: token,
        refunds: refunds
      })
    })

    return res.status(200).json({
      status: 'success',
      message: 'Remboursement(s) effectué(s) avec succès',
      refunds: refunds
    })
  } catch (error) {
    console.error('Erreur générale remboursement:', error)
    return res.status(500).json({
      error: 'Erreur interne du serveur',
      details: error.message
    })
  }
}
