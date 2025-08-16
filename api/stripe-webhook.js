import Stripe from 'stripe'

export const config = {
  api: {
    bodyParser: false
  }
}

function buffer(readable) {
  return new Promise((resolve, reject) => {
    const chunks = []
    readable.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
    readable.on('end', () => resolve(Buffer.concat(chunks)))
    readable.on('error', reject)
  })
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  let event
  try {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']
    event = stripe.webhooks.constructEvent(buf, sig, endpointSecret)
  } catch (err) {
    console.error('Erreur de signature webhook:', err)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  try {
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object
      const metadata = paymentIntent.metadata || {}
      const token = metadata.token
      let formData = {}
      try {
        formData = metadata.form ? JSON.parse(metadata.form) : {}
      } catch (e) {
        formData = {}
      }

      // Appeler GAS pour finaliser la réservation
      const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL
      const resp = await fetch(
        `${GAS_URL}?action=finalizeReservation&token=${encodeURIComponent(
          token
        )}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            paymentData: {
              amount: paymentIntent.amount / 100,
              paymentIntentId: paymentIntent.id,
              status: 'succeeded'
            },
            formData
          })
        }
      )

      if (!resp.ok) {
        console.error('GAS finalizeReservation HTTP error:', resp.status)
      } else {
        const result = await resp.json().catch(() => null)
        if (!result || result.status !== 'success') {
          console.error('GAS finalizeReservation returned error:', result)
        }
      }
    }

    res.status(200).json({ received: true })
  } catch (err) {
    console.error('Erreur de traitement webhook:', err)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}


