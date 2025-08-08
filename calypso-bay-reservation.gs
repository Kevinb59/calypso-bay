function doGet(e) {
  try {
    if (
      !e.parameter.name ||
      !e.parameter.email ||
      !e.parameter.reservationDetails
    ) {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: 'error',
          message: '❌ Paramètres manquants'
        })
      ).setMimeType(ContentService.MimeType.JSON)
    }

    return envoyerDemandeReservation(e.parameter)
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'error',
        message: '❌ Erreur : ' + error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

function envoyerDemandeReservation(data) {
  try {
    // Adresse de réception du message
    const destinataire = 'contact.calypso.bay@gmail.com'

    // Sujet de l'email reçu
    const objet = `Demande de réservation de ${data.name}`

    // Corps HTML du mail avec design moderne (basé sur votre template)
    const corpsHtml = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Demande de réservation - Calypso Bay</title>
        <style>
          body {
            font-family: 'Helvetica Neue', sans-serif;
            background: #f2f4f8;
            padding: 40px 20px;
            margin: 0;
          }
          .container {
            max-width: 600px;
            margin: auto;
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.07);
            border: 1px solid rgba(0,0,0,0.05);
          }
          .header {
            background: linear-gradient(120deg, #5d3fd3, #8b5cf6);
            color: white;
            text-align: center;
            padding: 30px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            letter-spacing: 1px;
          }
          .section {
            padding: 30px;
            border-bottom: 1px solid #eee;
          }
          .section:last-child {
            border-bottom: none;
          }
          h2 {
            font-size: 18px;
            margin-bottom: 15px;
            color: #5d3fd3;
            border-left: 4px solid #8b5cf6;
            padding-left: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          p {
            margin: 6px 0;
          }
          .label {
            font-weight: bold;
            color: #444;
          }
          .message {
            background: #f9fafb;
            padding: 15px;
            border-left: 3px solid #8b5cf6;
            border-radius: 6px;
            font-family: monospace;
            white-space: pre-wrap;
            margin-top: 10px;
          }
          .buttons {
            display: flex;
            justify-content: space-between;
            padding: 25px 30px;
            background: #f9fafb;
            gap: 10px;
          }
          .btn {
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: bold;
            text-decoration: none;
            color: white !important;
            font-size: 14px;
            transition: background 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            flex: 1;
            justify-content: center;
            min-width: 120px;
          }
          .btn-accept { background: #10b981; }
          .btn-accept:hover { background: #059669; }
          .btn-refuse { background: #ef4444; }
          .btn-refuse:hover { background: #dc2626; }
          .btn-reply { background: #6366f1; }
          .btn-reply:hover { background: #4f46e5; }
          .footer {
            text-align: center;
            font-size: 13px;
            color: #888;
            padding: 20px;
          }
          ul {
            margin-top: 5px;
            padding-left: 20px;
          }
          li {
            margin: 3px 0;
          }
          @media (max-width: 600px) {
            .buttons {
              flex-direction: column;
              gap: 12px;
              align-items: center;
              padding: 20px;
            }
            .btn {
              justify-content: center;
              width: 200px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ Nouvelle demande de réservation</h1>
          </div>

          <div class="section">
            <h2>📅 Informations du client</h2>
            <p><span class="label">Nom :</span> ${data.name}</p>
            <p><span class="label">Email :</span> ${data.email}</p>
            <p><span class="label">Téléphone :</span> ${
              data.tel || 'Non renseigné'
            }</p>
            <p><span class="label">Date :</span> ${new Date().toLocaleDateString(
              'fr-FR',
              {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              }
            )}</p>
          </div>

          <div class="section">
            <h2>🔹 Détails de la réservation</h2>

            <div style="white-space: pre-line;">
              ${(() => {
                const raw = String(data.reservationDetails || '')
                const lines = raw.split('\n')

                let out = []
                let rows = []

                for (const line of lines) {
                  const trimmed = line.trim()

                  // Titre
                  if (/^détail du prix\s*:/i.test(trimmed)) {
                    out.push('<strong>Détail du prix :</strong>')
                    continue
                  }

                  // Lignes de prix au format "• Libellé : 123 €" (ou "- Libellé : 123 €")
                  if (/^(•|-)\s*/.test(trimmed) && trimmed.includes(':')) {
                    const noBullet = trimmed.replace(/^(•|-)\s*/, '')
                    const [labelRaw, amountRaw] = noBullet.split(':')
                    const label = (labelRaw || '').trim()
                    const amount = (amountRaw || '').replace(/€/, '').trim() // sans le symbole

                    // Fonction pour formater les milliers
                    const formatThousands = (str) => {
                      const num = parseFloat(str.replace(/[^\d.-]/g, ''))
                      if (isNaN(num)) return str
                      return num.toLocaleString('fr-FR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })
                    }

                    const formattedAmount = formatThousands(amount)
                    const isTotal = /^total$/i.test(label)

                    rows.push(
                      `<tr>
                          <td style="padding:2px 12px 2px 0; white-space:nowrap;">
                            ${
                              isTotal
                                ? '<strong>• Total :</strong>'
                                : `• ${label} :`
                            }
                          </td>
                          <td style="padding:2px 0; text-align:right; white-space:nowrap;">
                            ${
                              isTotal
                                ? `<strong>${formattedAmount} €</strong>`
                                : `${formattedAmount} €`
                            }
                          </td>
                        </tr>`
                    )
                  } else {
                    // Lignes d’info hors tableau (dates, voyageurs, etc.)
                    out.push(trimmed)
                  }
                }

                // Si on a des lignes de prix, on ajoute le tableau
                if (rows.length) {
                  out.push(
                    '<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:8px; width:100%;">' +
                      rows.join('') +
                      '</table>'
                  )
                }

                return out.join('\n')
              })()}
            </div>
          </div>

          <div class="section">
            <h2>💬 Message du client</h2>
            <div class="message">${
              data.userMessage || 'Aucun message spécifique'
            }</div>
          </div>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb; border-collapse:separate;">
            <tr>
              <td align="center" style="padding:20px 10px;">
                <a href="mailto:${
                  data.email
                }?subject=RE: Demande de réservation Calypso Bay&body=Bonjour ${
      data.name
    },%0D%0A%0D%0AMerci pour votre demande de réservation.%0D%0A%0D%0ACordialement,%0D%0AL'équipe Calypso Bay"
                  target="_blank"
                  style="display:inline-block; background:#6366f1; border-radius:8px; padding:12px 18px; text-decoration:none; color:#ffffff !important; font-weight:700; font-size:14px; line-height:1.2; margin:0 6px;">
                  📩 Répondre
                </a>
                <a href="mailto:${
                  data.email
                }?subject=✅ Réservation acceptée - Calypso Bay&body=Bonjour ${
      data.name
    },%0D%0A%0D%0ANous avons le plaisir de vous confirmer votre réservation.%0D%0A%0D%0ACordialement,%0D%0AL'équipe Calypso Bay"
                  target="_blank"
                  style="display:inline-block; background:#10b981; border-radius:8px; padding:12px 18px; text-decoration:none; color:#ffffff !important; font-weight:700; font-size:14px; line-height:1.2; margin:0 6px;">
                  ✅ Accepter
                </a>
                <a href="mailto:${
                  data.email
                }?subject=❌ Réservation refusée - Calypso Bay&body=Bonjour ${
      data.name
    },%0D%0A%0D%0ANous sommes désolés, mais nous ne pouvons pas accepter votre réservation.%0D%0A%0D%0ACordialement,%0D%0AL'équipe Calypso Bay"
                  target="_blank"
                  style="display:inline-block; background:#ef4444; border-radius:8px; padding:12px 18px; text-decoration:none; color:#ffffff !important; font-weight:700; font-size:14px; line-height:1.2; margin:0 6px;">
                  ❌ Refuser
                </a>
              </td>
            </tr>
          </table>


          <div class="footer">
            Calypso Bay – Villa de standing à Bouillante, Guadeloupe
          </div>
        </div>
      </body>
      </html>
    `

    // Envoi de l'email via MailApp
    MailApp.sendEmail({
      to: destinataire,
      replyTo: data.email,
      subject: objet,
      htmlBody: corpsHtml
    })

    // Réponse JSON en cas de succès
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'success',
        message: '✅ Demande de réservation envoyée avec succès'
      })
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'error',
        message: "❌ Erreur lors de l'envoi : " + error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON)
  }
}
