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
    const objet =
      '📩 Contact Calypso Bay : Nouveau message de la part de ${data.name}'

    // Préparation du corps du mailto, formaté en texte brut
    const corpsReponse =
      `Bonjour ${data.name},\n\n` +
      `Vous nous avez contacté via le formulaire de contact du site Calypso Bay.\n\n` +
      `-----------------------------\n` +
      `Votre message :\n\n` +
      `${data.message}\n` +
      `-----------------------------\n\n` +
      `RÉPONSE :`

    // Génération du lien mailto encodé proprement
    const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(
      'RE: Contact Calypso Bay'
    )}&body=${encodeURIComponent(corpsReponse)}`

    // Corps HTML du mail avec les infos et le bouton "Répondre au client"
    const corpsHtml = `
      <p><b>Nom :</b> ${data.name}</p>
      <p><b>Email :</b> ${data.email}</p>
      <p><b>Téléphone :</b> ${data.tel || 'Non renseigné'}</p>
      <p><b>Message :</b><br>${data.message.replace(/\n/g, '<br>')}</p>
      <br>
      <a href="${mailtoLink}" style="
        display: inline-block;
        padding: 12px 24px;
        background-color: #551f7e;
        color: #ffffff;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
      ">Répondre au client</a>
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
