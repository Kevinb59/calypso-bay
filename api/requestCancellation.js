import { NextResponse } from 'next/server'

export const config = { runtime: 'edge' }

export default async function handler(req) {
  const adminKey = req.headers.get('x-admin-key') || ''
  const expected = process.env.ADMIN_KEY || ''
  if (!expected || adminKey !== expected) {
    return new NextResponse(JSON.stringify({ status: 'error', message: 'Accès refusé' }), { status: 401 })
  }

  const url = new URL(req.url)
  const q = url.searchParams.get('q') || ''

  const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL
  const resp = await fetch(`${GAS_URL}?action=listReservations&q=${encodeURIComponent(q)}`)
  const data = await resp.json()
  return new NextResponse(JSON.stringify(data), { status: 200 })
}

/**
 * Enregistre une demande d'annulation côté Sheet via GAS et envoie les mails
 */

const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  try {
    const { token, reason } = req.body || {}
    if (!token) return res.status(400).json({ error: 'Token manquant' })

    const resp = await fetch(
      `${GAS_URL}?action=requestCancellation&token=${encodeURIComponent(
        token
      )}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason: reason || '' })
      }
    )
    const result = await resp.json()
    if (!resp.ok || result.status !== 'success') {
      return res
        .status(400)
        .json({ error: result.message || 'Erreur annulation' })
    }
    res.status(200).json(result)
  } catch (err) {
    console.error('Erreur requestCancellation:', err)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}
