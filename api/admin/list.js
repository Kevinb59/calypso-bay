export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ status: 'error', message: 'Méthode non autorisée' })
  }
  const adminKey = req.headers['x-admin-key'] || ''
  const expected = process.env.ADMIN_KEY || ''
  if (!expected || adminKey !== expected) {
    return res.status(401).json({ status: 'error', message: 'Accès refusé' })
  }
  const q = req.query.q || ''
  const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL
  const resp = await fetch(`${GAS_URL}?action=listReservations&q=${encodeURIComponent(q)}`)
  const data = await resp.json()
  return res.status(200).json(data)
}


