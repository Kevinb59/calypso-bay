function doGet(e) {
  try {
    if (!e.parameter.name || !e.parameter.email || !e.parameter.message) {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: 'error',
          message: '❌ Paramètres manquants'
        })
      ).setMimeType(ContentService.MimeType.JSON)
    }

    return envoyerMessageContact(e.parameter)
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'error',
        message: '❌ Erreur : ' + error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

function envoyerMessageContact(data) {
  try {
    // Adresse de réception du message
    const destinataire = 'contact.calypso.bay@gmail.com'

    // Sujet de l'email reçu
    const objet = `📩 Contact Calypso Bay : Nouveau message de la part de ${data.name}`

    // Corps HTML du mail avec design moderne (basé sur le template de réservation)
    const corpsHtml = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouveau message de contact - Calypso Bay</title>
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
          .footer {
            text-align: center;
            font-size: 13px;
            color: #888;
            padding: 20px;
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
            <h1>📩 Nouveau message de contact</h1>
          </div>

          <div class="section">
            <h2>👤 Informations du contact</h2>
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
            <h2>💬 Message du contact</h2>
            <div class="message">${data.message.replace(/\n/g, '<br>')}</div>
          </div>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb; border-collapse:separate;">
            <tr>
              <td align="center" style="padding:20px 10px;">
                <a href="mailto:${
                  data.email
                }?subject=RE: Contact Calypso Bay&body=Bonjour ${
      data.name
    },%0D%0A%0D%0AMerci pour votre message.%0D%0A%0D%0ACordialement,%0D%0AL'équipe Calypso Bay"
                  target="_blank"
                  style="display:inline-block; background:#6366f1; border-radius:8px; padding:12px 18px; text-decoration:none; color:#ffffff !important; font-weight:700; font-size:14px; line-height:1.2; margin:0 6px;">
                  📩 Répondre
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
        message: '✅ Message envoyé avec succès'
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
