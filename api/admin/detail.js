export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ status: 'error', message: 'Méthode non autorisée' })
  }
  const adminKey = req.headers['x-admin-key'] || ''
  const expected = process.env.ADMIN_KEY || ''
  if (!expected || adminKey !== expected) {
    return res.status(401).json({ status: 'error', message: 'Accès refusé' })
  }
  const token = req.query.token
  if (!token) return res.status(400).json({ status: 'error', message: 'Token manquant' })
  const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL
  const r = await fetch(`${GAS_URL}?action=getReservationAdmin&token=${encodeURIComponent(token)}`)
  const j = await r.json()
  return res.status(200).json(j)
}


