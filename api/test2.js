module.exports = (req, res) => {
  res.status(200).json({
    message: 'Test2 API fonctionne !',
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url
  })
}
