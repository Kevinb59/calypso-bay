export default async function handler(req, res) {
  try {
    const { action, kind, token, to } = req.query
    if (action !== 'testSendEmail') return res.status(400).json({ status: 'error', message: 'Action invalide' })
    if (!kind || !token || !to) return res.status(400).json({ status: 'error', message: 'Paramètres manquants' })
    const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL
    const url = `${GAS_URL}?action=testSendEmail&kind=${encodeURIComponent(kind)}&token=${encodeURIComponent(token)}&to=${encodeURIComponent(to)}`
    const r = await fetch(url)
    const j = await r.json()
    return res.status(200).json(j)
  } catch (err) {
    console.error('test-mails error', err)
    res.status(500).json({ status: 'error', message: 'Erreur serveur' })
  }
}


