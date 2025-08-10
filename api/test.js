export default async function handler(req, res) {
  res.status(200).json({
    message: 'API fonctionne !',
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url
  })
}
