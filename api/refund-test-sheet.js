/**
 * Version de test de refund.js qui saute l'étape Stripe
 * Pour tester la mise à jour Google Sheets et l'envoi d'email sans risque
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  try {
    console.log('=== DÉBUT FONCTION REFUND TEST (SANS STRIPE) ===')
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

    console.log('Réservation récupérée:', {
      token,
      depositPaymentIntentId: reservation.depositPaymentIntentId,
      balancePaymentIntentId: reservation.balancePaymentIntentId,
      depositAmount: reservation.depositAmount,
      balanceAmount: reservation.balanceAmount,
      status: reservation.status
    })

    // SIMULATION : Créer des données de remboursement fictives
    const refunds = []

    if (refundDeposit) {
      refunds.push({
        type: 'deposit',
        amount: reservation.depositAmount || 0.5,
        refundId: 're_TEST_DEPOSIT_' + Date.now(),
        status: 'succeeded'
      })
    }

    if (refundBalance) {
      refunds.push({
        type: 'balance',
        amount: reservation.balanceAmount || 0.5,
        refundId: 're_TEST_BALANCE_' + Date.now(),
        status: 'succeeded'
      })
    }

    console.log('Données de remboursement simulées:', refunds)

    // Mettre à jour la réservation dans Google Sheets
    console.log('Mise à jour Google Sheets avec les remboursements:', {
      action: 'updateRefunds',
      token: token,
      refunds: refunds
    })

    const updateResponse = await fetch(`${gasUrl}?action=updateRefunds`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token,
        refunds: refunds
      })
    })

    console.log('Réponse mise à jour reçue, statut:', updateResponse.status)
    const updateData = await updateResponse.json()
    console.log('Données mise à jour reçues:', updateData)

    if (updateData.status !== 'success') {
      console.error('Erreur mise à jour Google Sheets:', updateData)
      return res.status(500).json({
        error: 'Erreur lors de la mise à jour de la réservation',
        details: updateData.message || 'Réponse invalide de Google Apps Script'
      })
    }

    console.log('Mise à jour Google Sheets réussie')

    // Envoyer l'email de confirmation de remboursement
    console.log('Envoi email de confirmation de remboursement:', {
      action: 'sendRefundEmail',
      token: token,
      refunds: refunds
    })

    const emailResponse = await fetch(`${gasUrl}?action=sendRefundEmail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token,
        refunds: refunds
      })
    })

    console.log('Réponse email reçue, statut:', emailResponse.status)
    const emailData = await emailResponse.json()
    console.log('Données email reçues:', emailData)

    return res.status(200).json({
      status: 'success',
      message:
        'Test de mise à jour et email réussi (sans remboursement Stripe)',
      refunds: refunds,
      note: 'Ceci était un test - aucun remboursement réel effectué'
    })
  } catch (error) {
    console.error('Erreur générale test refund:', error)
    return res.status(500).json({
      error: 'Erreur interne du serveur',
      details: error.message
    })
  }
}
