// ============================================================================
// CALYPSO BAY - FICHIER DE TRADUCTIONS MULTILINGUES
// ============================================================================
// Ce fichier contient toutes les traductions des pages de réservation
// en français (fr), anglais (en) et allemand (de)
//
// Structure :
// - Chaque langue a ses propres traductions
// - Chaque page a ses sections (banner, form, payment, etc.)
// - Les éléments communs sont dans la section "common"
// - Les placeholders utilisent la syntaxe {variable}
//
// Utilisation : window.translations[lang][page][section][key]
// Exemple : window.translations.fr["annuler-reservation"].banner.title
// ============================================================================

window.translations = {
  // ============================================================================
  // FRANÇAIS (LANGUE PAR DÉFAUT)
  // ============================================================================
  fr: {
    // ========================================================================
    // PAGE : ANNULER RÉSERVATION
    // ========================================================================
    'annuler-reservation': {
      // Titre de la page
      title: 'Annuler ma réservation – Calypso Bay',

      // Section bannière principale
      banner: {
        title: 'Annuler ma',
        subtitle: 'Reservation',
        description:
          "Vous pouvez demander l'annulation de votre réservation. Nous appliquerons la politique indiquée dans nos conditions.",
        button: 'Continuer'
      },

      // Section récapitulatif de la réservation
      recap: {
        title: '📅 Détails de la réservation',
        loading: 'Chargement du récapitulatif…'
      },

      // Section formulaire d'annulation
      form: {
        title: "🧾 Demande d'annulation",
        loading: 'Chargement des informations…',
        reason_label: 'Motif (optionnel)',
        reason_placeholder:
          'Expliquez brièvement la raison de votre demande (facultatif)',
        submit_button: "Demander l'annulation"
      },

      // Politique d'annulation
      policy: {
        no_deposit: 'Annulation gratuite.',
        free_cancellation_deposit_only:
          "Annulation gratuite jusqu'à 3 mois avant le début du séjour. Votre acompte vous sera remboursé.",
        deposit_retained:
          "A moins de 3 mois avant le début du séjour, l'acompte peut être retenu selon nos conditions.",
        free_cancellation_full_payment:
          "Annulation gratuite jusqu'à 3 mois avant le début du séjour. Votre acompte ainsi que votre solde vous seront remboursés.",
        deposit_retained_balance_refunded:
          "A moins de 3 mois avant le début du séjour, l'acompte peut être retenu selon nos conditions. Le solde vous sera remboursé."
      },

      // Modal de confirmation
      confirmation: {
        title: "Confirmer l'annulation ?",
        message:
          "Êtes-vous sûr de vouloir envoyer une demande d'annulation pour cette réservation ?",
        cancel: 'Annuler',
        confirm: "Confirmer l'annulation"
      },

      // États du bouton
      status: {
        sending: 'Envoi…',
        sent: 'Demande envoyée ✔'
      },

      // Messages d'erreur
      errors: {
        missing_token: 'Token manquant',
        loading_error: 'Erreur de chargement',
        reservation_not_found: 'Réservation introuvable'
      }
    },

    // ========================================================================
    // PAGE : FINALISER RÉSERVATION
    // ========================================================================
    'finaliser-reservation': {
      title: 'Finaliser ma réservation - Calypso Bay',

      // Section bannière principale
      banner: {
        title: 'Finaliser ma',
        subtitle: 'Reservation',
        description:
          "Votre demande de réservation a été acceptée ! Complétez le formulaire suivant et effectuez le paiement de l'acompte de 10% pour confirmer votre réservation à Calypso Bay.",
        button: 'Commencer'
      },

      // Section informations personnelles
      form: {
        title: '📋 Informations personnelles',
        description:
          'Ces données nous permettront de vous contacter et de préparer votre accueil.',
        name: 'Nom complet',
        name_placeholder: 'Nom complet',
        email: 'Email',
        email_placeholder: 'Email',
        tel: 'Téléphone',
        tel_placeholder: 'Téléphone',
        address: 'Adresse',
        address_placeholder: 'Adresse',
        city: 'Ville',
        city_placeholder: 'Ville',
        postal: 'Code postal',
        postal_placeholder: 'Code postal',
        country: 'Pays',
        country_placeholder: 'Pays'
      },

      // Section enfants et précisions
      children: {
        title: '📝 Précisions',
        description:
          'Vous pouvez nous laisser un message ou nous poser des questions si vous le souhaitez.',
        description_with_children:
          'Vous pouvez nous laisser un message ou nous poser des questions si vous le souhaitez.<br><br><div style="background: rgba(255, 193, 7, 0.2); border: 1px solid rgba(255, 193, 7, 0.5); border-radius: 8px; padding: 12px; margin-top: 15px; display: flex; align-items: center; gap: 8px;"><span style="color: #856404; font-size: 16px;">⚠️</span><span style="color: #856404; font-weight: 500;">Rappel : les enfants de moins de 8 ans ne sont pas admis.</span></div>',
        age_label: "Âge de l'enfant",
        age_placeholder: "Âge de l'enfant"
      },

      // Section message optionnel
      message: {
        label: 'Message (optionnel)',
        placeholder:
          'Votre message, demandes spéciales, informations complémentaires...'
      },

      // Section détails de la réservation
      details: {
        title: '📅 Détails de la réservation',
        description:
          'Voici un récapitulatif de votre demande de réservation. Vérifiez que toutes les informations sont correctes avant de procéder au paiement.',
        loading: 'Chargement des détails...',
        no_details: 'Aucun détail'
      },

      // Section paiement
      payment: {
        title: "💳 Paiement de l'acompte",
        description:
          "Pour confirmer votre réservation, veuillez effectuer le paiement de l'acompte de 10% du montant total. Le solde sera à régler au plus tard 7 jours avant votre arrivée.",
        summary_title: 'Récapitulatif du paiement',
        total: 'Total',
        deposit: 'Acompte',
        remaining: 'Solde restant après acompte',
        card_label: 'Carte de paiement',
        submit_button: "Payer l'acompte et confirmer ma réservation",
        submit_button_with_amount: "Payer l'acompte – {amount} €",
        processing: 'Traitement en cours...',
        calculating: 'Calcul en cours...',
        disclaimer:
          "Paiement sécurisé via Stripe. Aucune donnée bancaire n'est stockée par Calypso Bay."
      },

      // Messages de validation
      validation: {
        required: 'Ce champ est obligatoire',
        email_invalid: 'Email invalide',
        phone_invalid: 'Numéro de téléphone invalide',
        child_age_invalid: 'Âge invalide',
        form_errors: 'Veuillez corriger les erreurs dans le formulaire'
      },

      // Messages de verrouillage
      locks: {
        deposit_paid: 'Acompte déjà réglé',
        balance_paid: 'Acompte et solde déjà réglés',
        reservation_canceled: 'Réservation annulée'
      },

      // Messages d'erreur
      errors: {
        missing_token: 'Token manquant',
        loading_error: 'Erreur lors du chargement',
        connection_error: 'Erreur de connexion',
        reservation_not_found: 'Réservation introuvable'
      },

      // Message de succès
      success: {
        message:
          "Paiement confirmé ✔️. Un email de confirmation vient d'être envoyé."
      }
    },

    // ========================================================================
    // PAGE : PAYER LE SOLDE
    // ========================================================================
    'payer-solde': {
      title: 'Payer le solde – Calypso Bay',

      // Section bannière principale
      banner: {
        title: 'Payer le',
        subtitle: 'Solde',
        description:
          'Pour finaliser votre réservation, veuillez régler le solde restant.',
        button: 'Continuer'
      },

      // Section détails de la réservation
      details: {
        title: '📅 Détails de la réservation',
        description:
          'Vérifiez les informations de votre séjour avant de procéder au paiement du solde.',
        loading: 'Chargement en cours…'
      },

      // Section paiement du solde
      payment: {
        title: '💳 Paiement du solde',
        description:
          'Renseignez votre carte pour régler le solde restant de votre réservation.',
        summary_title: 'Récapitulatif du paiement',
        total: 'Total',
        deposit_paid: 'Acompte déjà versé',
        remaining: 'Solde restant',
        card_label: 'Carte de paiement',
        submit_button: 'Payer le solde',
        submit_button_with_amount: 'Payer le solde – {amount} €',
        creating_payment: 'Création du paiement…',
        confirming: 'Confirmation…',
        confirmed: 'Paiement confirmé ✔',
        disclaimer:
          "Paiement sécurisé via Stripe. Aucune donnée bancaire n'est stockée par Calypso Bay."
      },

      // Messages de verrouillage
      locks: {
        balance_paid: 'Solde déjà réglé',
        reservation_canceled: 'Réservation annulée'
      },

      // Messages d'erreur
      errors: {
        missing_token: 'Token manquant',
        loading_error: 'Erreur de chargement',
        reservation_not_found: 'Réservation introuvable',
        payment_creation_error: 'Erreur lors de la création du paiement'
      }
    },

    // ========================================================================
    // PAGE : RÉSERVATION CONFIRMÉE
    // ========================================================================
    'reservation-confirmee': {
      title: 'Réservation confirmée – Calypso Bay',

      // Contenu principal
      main: {
        title: 'Réservation confirmée !',
        description:
          'Félicitations ! Votre réservation est désormais définitive. Votre acompte de 10 % a été reçu avec succès.',
        status_title: 'Paiement de votre acompte validé',
        status_description:
          "Un e‑mail de confirmation vous a été envoyé. Vous y trouverez un lien pour payer le solde restant ainsi qu'un autre pour annuler votre réservation.",
        help_text:
          "Besoin d'aide, d'un renseignement ou d'une demande particulière (arrivées tardives, options, ...) ? Contactez‑nous — nous nous efforcerons de vous satisfaire."
      },

      // Boutons d'action
      actions: {
        home: "Retour à l'accueil",
        contact: 'Nous contacter'
      },

      // Section héro avec image
      hero: {
        brand: 'Calypso Bay',
        title: 'Votre séjour vous attend',
        description: 'Vue mer, piscine à débordement & atmosphère tropicale.'
      }
    },

    // ========================================================================
    // PAGE : SOLDE PAYÉ
    // ========================================================================
    'reservation-solde-confirme': {
      title: 'Solde payé – Calypso Bay',

      // Contenu principal
      main: {
        title: 'Solde payé !',
        description:
          'Merci ! Votre paiement du solde a bien été reçu. Votre réservation est désormais entièrement réglée.',
        status_title: 'Paiement du solde validé',
        status_description:
          'Un e‑mail de confirmation vous a été envoyé avec le récapitulatif de votre réservation. Vous y trouverez aussi un lien pour annuler votre réservation si besoin.',
        help_text:
          "Besoin d'aide ou d'un complément d'information ? Écrivez‑nous, nous répondons rapidement."
      },

      // Boutons d'action
      actions: {
        home: "Retour à l'accueil",
        contact: 'Nous contacter'
      },

      // Section héro avec image
      hero: {
        brand: 'Calypso Bay',
        title: 'On a hâte de vous accueillir',
        description: 'Vue mer, piscine à débordement & atmosphère tropicale.'
      }
    },

    // ========================================================================
    // ÉLÉMENTS COMMUNS (utilisés dans plusieurs pages)
    // ========================================================================
    common: {
      dates: 'Dates :',
      travelers: 'Voyageurs :',
      adults: 'adulte',
      adults_plural: 'adultes',
      children: 'enfant',
      children_plural: 'enfants',
      nights: 'nuits',
      price_details: 'Détail du prix :',
      nights_total: 'Total des nuits ({count}) :',
      cleaning_fees: 'Frais de ménage :',
      taxes: 'Taxes ({count} {adult_text}) :',
      total: 'Total :',
      deposit: 'Acompte :',
      balance: 'Solde :',
      children_ages: 'Âges des enfants :',
      billing_address: 'Adresse de facturation :',
      copyright: '© Calypso Bay | By',
      currency: '€'
    }
  },

  // ============================================================================
  // ANGLAIS
  // ============================================================================
  en: {
    // ========================================================================
    // PAGE : ANNULER RÉSERVATION
    // ========================================================================
    'annuler-reservation': {
      title: 'Cancel my reservation – Calypso Bay',

      // Section bannière principale
      banner: {
        title: 'Cancel my',
        subtitle: 'Reservation',
        description:
          'You can request the cancellation of your reservation. We will apply the cancellation policy stated in our terms and conditions.',
        button: 'Continue'
      },

      // Section récapitulatif de la réservation
      recap: {
        title: '📅 Reservation details',
        loading: 'Loading summary...'
      },

      // Section formulaire d'annulation
      form: {
        title: '🧾 Cancellation request',
        loading: 'Loading information...',
        reason_label: 'Reason (optional)',
        reason_placeholder:
          'Briefly explain the reason for your request (optional)',
        submit_button: 'Request cancellation'
      },

      // Politique d'annulation
      policy: {
        no_deposit: 'Free cancellation.',
        free_cancellation_deposit_only:
          'Free cancellation up to 3 months before the start of your stay. Your deposit will be refunded.',
        deposit_retained:
          'Less than 3 months before the start of your stay, the deposit may be retained according to our terms and conditions.',
        free_cancellation_full_payment:
          'Free cancellation up to 3 months before the start of your stay. Your deposit and balance will be refunded.',
        deposit_retained_balance_refunded:
          'Less than 3 months before the start of your stay, the deposit may be retained according to our terms and conditions. The balance will be refunded.'
      },

      // Modal de confirmation
      confirmation: {
        title: 'Confirm cancellation?',
        message:
          'Are you sure you want to send a cancellation request for this reservation?',
        cancel: 'Cancel',
        confirm: 'Confirm cancellation'
      },

      // États du bouton
      status: {
        sending: 'Sending...',
        sent: 'Request sent ✔'
      },

      // Messages d'erreur
      errors: {
        missing_token: 'Missing token',
        loading_error: 'Loading error',
        reservation_not_found: 'Reservation not found'
      }
    },

    // ========================================================================
    // PAGE : FINALISER RÉSERVATION
    // ========================================================================
    'finaliser-reservation': {
      title: 'Finalize my reservation - Calypso Bay',

      // Section bannière principale
      banner: {
        title: 'Finalize my',
        subtitle: 'Reservation',
        description:
          'Your reservation request has been accepted! Complete the following form and make the 10% deposit payment to confirm your reservation at Calypso Bay.',
        button: 'Start'
      },

      // Section informations personnelles
      form: {
        title: '📋 Personal information',
        description:
          'This information will allow us to contact you and prepare your arrival.',
        name: 'Full name',
        name_placeholder: 'Full name',
        email: 'Email',
        email_placeholder: 'Email',
        tel: 'Phone',
        tel_placeholder: 'Phone',
        address: 'Address',
        address_placeholder: 'Address',
        city: 'City',
        city_placeholder: 'City',
        postal: 'Postal code',
        postal_placeholder: 'Postal code',
        country: 'Country',
        country_placeholder: 'Country'
      },

      // Section enfants et précisions
      children: {
        title: '📝 Additional details',
        description:
          'You can leave us a message or ask us questions if you wish.',
        description_with_children:
          'You can leave us a message or ask us questions if you wish.<br><br><div style="background: rgba(255, 193, 7, 0.2); border: 1px solid rgba(255, 193, 7, 0.5); border-radius: 8px; padding: 12px; margin-top: 15px; display: flex; align-items: center; gap: 8px;"><span style="color: #856404; font-size: 16px;">⚠️</span><span style="color: #856404; font-weight: 500;">Reminder: children under 8 years old are not allowed.</span></div>',
        age_label: 'Child age',
        age_placeholder: 'Child age'
      },

      // Section message optionnel
      message: {
        label: 'Message (optional)',
        placeholder: 'Your message, special requests, additional information...'
      },

      // Section détails de la réservation
      details: {
        title: '📅 Reservation details',
        description:
          'Here is a summary of your reservation request. Please verify that all information is correct before proceeding with payment.',
        loading: 'Loading details...',
        no_details: 'No details'
      },

      // Section paiement
      payment: {
        title: '💳 Deposit payment',
        description:
          'To confirm your reservation, please make the 10% deposit payment of the total amount. The balance will be due no later than 7 days before your arrival.',
        summary_title: 'Payment summary',
        total: 'Total',
        deposit: 'Deposit',
        remaining: 'Remaining balance after deposit',
        card_label: 'Payment card',
        submit_button: 'Pay deposit and confirm my reservation',
        submit_button_with_amount: 'Pay deposit – {amount} €',
        processing: 'Processing...',
        calculating: 'Calculating...',
        disclaimer:
          'Secure payment via Stripe. No banking data is stored by Calypso Bay.'
      },

      // Messages de validation
      validation: {
        required: 'This field is required',
        email_invalid: 'Invalid email',
        phone_invalid: 'Invalid phone number',
        child_age_invalid: 'Invalid age',
        form_errors: 'Please correct the errors in the form'
      },

      // Messages de verrouillage
      locks: {
        deposit_paid: 'Deposit already paid',
        balance_paid: 'Deposit and balance already paid',
        reservation_canceled: 'Reservation canceled'
      },

      // Messages d'erreur
      errors: {
        missing_token: 'Missing token',
        loading_error: 'Loading error',
        connection_error: 'Connection error',
        reservation_not_found: 'Reservation not found'
      },

      // Messages de succès
      success: {
        message:
          'Payment confirmed ✔️. A confirmation email has just been sent.'
      }
    },

    // ========================================================================
    // PAGE : PAYER LE SOLDE
    // ========================================================================
    'payer-solde': {
      title: 'Pay the balance – Calypso Bay',

      // Section bannière principale
      banner: {
        title: 'Pay the',
        subtitle: 'Balance',
        description:
          'To finalize your reservation, please pay the remaining balance.',
        button: 'Continue'
      },

      // Section détails de la réservation
      details: {
        title: '📅 Reservation details',
        description:
          'Verify your stay information before proceeding with the balance payment.',
        loading: 'Loading...'
      },

      // Section paiement du solde
      payment: {
        title: '💳 Balance payment',
        description:
          'Enter your card details to pay the remaining balance of your reservation.',
        summary_title: 'Payment summary',
        total: 'Total',
        deposit_paid: 'Deposit already paid',
        remaining: 'Remaining balance',
        card_label: 'Payment card',
        submit_button: 'Pay balance',
        submit_button_with_amount: 'Pay balance – {amount} €',
        creating_payment: 'Creating payment...',
        confirming: 'Confirming...',
        confirmed: 'Payment confirmed ✔',
        disclaimer:
          'Secure payment via Stripe. No banking data is stored by Calypso Bay.'
      },

      // Messages de verrouillage
      locks: {
        balance_paid: 'Balance already paid',
        reservation_canceled: 'Reservation canceled'
      },

      // Messages d'erreur
      errors: {
        missing_token: 'Missing token',
        loading_error: 'Loading error',
        reservation_not_found: 'Reservation not found',
        payment_creation_error: 'Error creating payment'
      }
    },

    // ========================================================================
    // PAGE : RÉSERVATION CONFIRMÉE
    // ========================================================================
    'reservation-confirmee': {
      title: 'Reservation confirmed – Calypso Bay',

      // Section principale
      main: {
        title: 'Reservation confirmed!',
        description:
          'Congratulations! Your reservation is now final. Your 10% deposit has been successfully received.',
        status_title: 'Your deposit payment has been validated',
        status_description:
          'A confirmation email has been sent to you. You will find a link to pay the remaining balance and another to cancel your reservation.',
        help_text:
          'Need help, information or have a special request (late arrivals, options, ...)? Contact us — we will do our best to satisfy you.'
      },

      // Section actions
      actions: {
        home: 'Back to home',
        contact: 'Contact us'
      },

      // Section bannière principale
      hero: {
        brand: 'Calypso Bay',
        title: 'Your stay awaits you',
        description: 'Sea view, infinity pool & tropical atmosphere.'
      }
    },

    // ========================================================================
    // PAGE : SOLDE PAYÉ
    // ========================================================================
    'reservation-solde-confirme': {
      title: 'Balance paid – Calypso Bay',

      // Section principale
      main: {
        title: 'Balance paid!',
        description:
          'Thank you! Your balance payment has been received. Your reservation is now fully paid.',
        status_title: 'Balance payment validated',
        status_description:
          'A confirmation email has been sent to you with the summary of your reservation. You will also find a link to cancel your reservation if needed.',
        help_text:
          'Need help or additional information? Write to us, we respond quickly.'
      },

      // Section actions
      actions: {
        home: 'Back to home',
        contact: 'Contact us'
      },

      // Section bannière principale
      hero: {
        brand: 'Calypso Bay',
        title: "We can't wait to welcome you",
        description: 'Sea view, infinity pool & tropical atmosphere.'
      }
    },

    // ========================================================================
    // ÉLÉMENTS COMMUNS
    // ========================================================================
    common: {
      dates: 'Dates:',
      travelers: 'Travelers:',
      adults: 'adult',
      adults_plural: 'adults',
      children: 'child',
      children_plural: 'children',
      nights: 'nights',
      price_details: 'Price details:',
      nights_total: 'Total nights ({count}):',
      cleaning_fees: 'Cleaning fees:',
      taxes: 'Taxes ({count} {adult_text}):',
      total: 'Total:',
      deposit: 'Deposit:',
      balance: 'Balance:',
      children_ages: "Children's ages:",
      billing_address: 'Billing address:',
      copyright: '© Calypso Bay | By',
      currency: '€'
    }
  },

  // ============================================================================
  // ALLEMAND
  // ============================================================================
  de: {
    // ========================================================================
    // PAGE : ANNULER RÉSERVATION
    // ========================================================================
    'annuler-reservation': {
      title: 'Meine Reservierung stornieren – Calypso Bay',

      // Section bannière principale
      banner: {
        title: 'Meine Reservierung',
        subtitle: 'stornieren',
        description:
          'Sie können die Stornierung Ihrer Reservierung beantragen. Wir wenden die in unseren Bedingungen angegebene Stornierungsrichtlinie an.',
        button: 'Weiter'
      },

      // Section récapitulatif de la réservation
      recap: {
        title: '📅 Reservierungsdetails',
        loading: 'Zusammenfassung wird geladen...'
      },

      // Section formulaire d'annulation
      form: {
        title: '🧾 Stornierungsantrag',
        loading: 'Informationen werden geladen...',
        reason_label: 'Grund (optional)',
        reason_placeholder:
          'Erklären Sie kurz den Grund für Ihre Anfrage (optional)',
        submit_button: 'Stornierung beantragen'
      },

      // Politique d'annulation
      policy: {
        no_deposit: 'Kostenlose Stornierung.',
        free_cancellation_deposit_only:
          'Kostenlose Stornierung bis zu 3 Monate vor Beginn Ihres Aufenthalts. Ihre Anzahlung wird erstattet.',
        deposit_retained:
          'Weniger als 3 Monate vor Beginn Ihres Aufenthalts kann die Anzahlung gemäß unseren Bedingungen einbehalten werden.',
        free_cancellation_full_payment:
          'Kostenlose Stornierung bis zu 3 Monate vor Beginn Ihres Aufenthalts. Ihre Anzahlung sowie Ihr Restbetrag werden erstattet.',
        deposit_retained_balance_refunded:
          'Weniger als 3 Monate vor Beginn Ihres Aufenthalts kann die Anzahlung gemäß unseren Bedingungen einbehalten werden. Der Restbetrag wird erstattet.'
      },

      // Modal de confirmation
      confirmation: {
        title: 'Stornierung bestätigen?',
        message:
          'Sind Sie sicher, dass Sie eine Stornierungsanfrage für diese Reservierung senden möchten?',
        cancel: 'Abbrechen',
        confirm: 'Stornierung bestätigen'
      },

      // États du bouton
      status: {
        sending: 'Wird gesendet…',
        sent: 'Anfrage gesendet ✔'
      },

      // Messages d'erreur
      errors: {
        missing_token: 'Token fehlt',
        loading_error: 'Ladefehler',
        reservation_not_found: 'Reservierung nicht gefunden'
      }
    },

    // ========================================================================
    // PAGE : FINALISER RÉSERVATION
    // ========================================================================
    'finaliser-reservation': {
      title: 'Meine Reservierung abschließen - Calypso Bay',

      // Section bannière principale
      banner: {
        title: 'Meine Reservierung',
        subtitle: 'abschließen',
        description:
          'Ihr Reservierungsantrag wurde angenommen! Vervollständigen Sie das folgende Formular und leisten Sie die Anzahlung von 10%, um Ihre Reservierung bei Calypso Bay zu bestätigen.',
        button: 'Starten'
      },

      // Section informations personnelles
      form: {
        title: '📋 Persönliche Informationen',
        description:
          'Diese Angaben ermöglichen es uns, Sie zu kontaktieren und Ihre Ankunft vorzubereiten.',
        name: 'Vollständiger Name',
        name_placeholder: 'Vollständiger Name',
        email: 'E-Mail',
        email_placeholder: 'E-Mail',
        tel: 'Telefon',
        tel_placeholder: 'Telefon',
        address: 'Adresse',
        address_placeholder: 'Adresse',
        city: 'Stadt',
        city_placeholder: 'Stadt',
        postal: 'Postleitzahl',
        postal_placeholder: 'Postleitzahl',
        country: 'Land',
        country_placeholder: 'Land'
      },

      // Section enfants et précisions
      children: {
        title: '📝 Zusätzliche Details',
        description:
          'Sie können uns eine Nachricht hinterlassen oder uns Fragen stellen, wenn Sie möchten.',
        description_with_children:
          'Sie können uns eine Nachricht hinterlassen oder uns Fragen stellen, wenn Sie möchten.<br><br><div style="background: rgba(255, 193, 7, 0.2); border: 1px solid rgba(255, 193, 7, 0.5); border-radius: 8px; padding: 12px; margin-top: 15px; display: flex; align-items: center; gap: 8px;"><span style="color: #856404; font-size: 16px;">⚠️</span><span style="color: #856404; font-weight: 500;">Erinnerung: Kinder unter 8 Jahren sind nicht erlaubt.</span></div>',
        age_label: 'Alter des Kindes',
        age_placeholder: 'Alter des Kindes'
      },

      // Section message optionnel
      message: {
        label: 'Nachricht (optional)',
        placeholder:
          'Ihre Nachricht, besondere Wünsche, zusätzliche Informationen...'
      },

      // Section détails de la réservation
      details: {
        title: '📅 Reservierungsdetails',
        description:
          'Hier ist eine Zusammenfassung Ihres Reservierungsantrags. Bitte überprüfen Sie, ob alle Informationen korrekt sind, bevor Sie mit der Zahlung fortfahren.',
        loading: 'Details werden geladen…',
        no_details: 'Keine Details'
      },

      // Section paiement
      payment: {
        title: '💳 Anzahlungszahlung',
        description:
          'Um Ihre Reservierung zu bestätigen, leisten Sie bitte die Anzahlung von 10% des Gesamtbetrags. Der Restbetrag ist spätestens 7 Tage vor Ihrer Ankunft fällig.',
        summary_title: 'Zahlungsübersicht',
        total: 'Gesamt',
        deposit: 'Anzahlung',
        remaining: 'Verbleibender Restbetrag nach Anzahlung',
        card_label: 'Zahlungskarte',
        submit_button: 'Anzahlung zahlen und meine Reservierung bestätigen',
        submit_button_with_amount: 'Anzahlung zahlen – {amount} €',
        processing: 'Wird verarbeitet...',
        calculating: 'Wird berechnet...',
        disclaimer:
          'Sichere Zahlung über Stripe. Keine Bankdaten werden von Calypso Bay gespeichert.'
      },

      // Messages de validation
      validation: {
        required: 'Dieses Feld ist erforderlich',
        email_invalid: 'Ungültige E-Mail',
        phone_invalid: 'Ungültige Telefonnummer',
        child_age_invalid: 'Ungültiges Alter',
        form_errors: 'Bitte korrigieren Sie die Fehler im Formular'
      },

      // Messages de verrouillage
      locks: {
        deposit_paid: 'Anzahlung bereits bezahlt',
        balance_paid: 'Anzahlung und Restbetrag bereits bezahlt',
        reservation_canceled: 'Reservierung storniert'
      },

      // Messages d'erreur
      errors: {
        missing_token: 'Token fehlt',
        loading_error: 'Ladefehler',
        connection_error: 'Verbindungsfehler',
        reservation_not_found: 'Reservierung nicht gefunden'
      },

      // Messages de succès
      success: {
        message:
          'Zahlung bestätigt ✔️. Eine Bestätigungs-E-Mail wurde gerade gesendet.'
      }
    },

    // ========================================================================
    // PAGE : PAYER LE SOLDE
    // ========================================================================
    'payer-solde': {
      title: 'Restbetrag zahlen – Calypso Bay',

      // Section bannière principale
      banner: {
        title: 'Den Restbetrag',
        subtitle: 'zahlen',
        description:
          'Um Ihre Reservierung abzuschließen, zahlen Sie bitte den verbleibenden Restbetrag.',
        button: 'Weiter'
      },

      // Section détails de la réservation
      details: {
        title: '📅 Reservierungsdetails',
        description:
          'Überprüfen Sie Ihre Aufenthaltsinformationen, bevor Sie mit der Zahlung des Restbetrags fortfahren.',
        loading: 'Wird geladen…'
      },

      // Section paiement du solde
      payment: {
        title: '💳 Restbetragzahlung',
        description:
          'Geben Sie Ihre Kartendaten ein, um den verbleibenden Restbetrag Ihrer Reservierung zu zahlen.',
        summary_title: 'Zahlungsübersicht',
        total: 'Gesamt',
        deposit_paid: 'Anzahlung bereits bezahlt',
        remaining: 'Verbleibender Restbetrag',
        card_label: 'Zahlungskarte',
        submit_button: 'Restbetrag zahlen',
        submit_button_with_amount: 'Restbetrag zahlen – {amount} €',
        creating_payment: 'Zahlung wird erstellt…',
        confirming: 'Wird bestätigt…',
        confirmed: 'Zahlung bestätigt ✔',
        disclaimer:
          'Sichere Zahlung über Stripe. Keine Bankdaten werden von Calypso Bay gespeichert.'
      },

      // Messages de verrouillage
      locks: {
        balance_paid: 'Restbetrag bereits bezahlt',
        reservation_canceled: 'Reservierung storniert'
      },

      // Messages d'erreur
      errors: {
        missing_token: 'Token fehlt',
        loading_error: 'Ladefehler',
        reservation_not_found: 'Reservierung nicht gefunden',
        payment_creation_error: 'Fehler beim Erstellen der Zahlung'
      }
    },

    // ========================================================================
    // PAGE : RÉSERVATION CONFIRMÉE
    // ========================================================================
    'reservation-confirmee': {
      title: 'Reservierung bestätigt – Calypso Bay',

      // Section principale
      main: {
        title: 'Reservierung bestätigt!',
        description:
          'Herzlichen Glückwunsch! Ihre Reservierung ist jetzt endgültig. Ihre Anzahlung von 10% wurde erfolgreich erhalten.',
        status_title: 'Ihre Anzahlungszahlung wurde bestätigt',
        status_description:
          'Eine Bestätigungs-E-Mail wurde an Sie gesendet. Sie finden einen Link, um den verbleibenden Restbetrag zu zahlen, und einen weiteren, um Ihre Reservierung zu stornieren.',
        help_text:
          'Benötigen Sie Hilfe, Informationen oder haben Sie eine besondere Anfrage (späte Ankünfte, Optionen, ...)? Kontaktieren Sie uns — wir werden unser Bestes tun, um Sie zufriedenzustellen.'
      },

      // Section actions
      actions: {
        home: 'Zurück zur Startseite',
        contact: 'Kontaktieren Sie uns'
      },

      // Section bannière principale
      hero: {
        brand: 'Calypso Bay',
        title: 'Ihr Aufenthalt wartet auf Sie',
        description: 'Meerblick, Infinity-Pool & tropische Atmosphäre.'
      }
    },

    // ========================================================================
    // PAGE : SOLDE PAYÉ
    // ========================================================================
    'reservation-solde-confirme': {
      title: 'Restbetrag bezahlt – Calypso Bay',

      // Section principale
      main: {
        title: 'Restbetrag bezahlt!',
        description:
          'Vielen Dank! Ihre Restbetragzahlung wurde erhalten. Ihre Reservierung ist jetzt vollständig bezahlt.',
        status_title: 'Restbetragzahlung bestätigt',
        status_description:
          'Eine Bestätigungs-E-Mail wurde an Sie gesendet mit der Zusammenfassung Ihrer Reservierung. Sie finden auch einen Link, um Ihre Reservierung bei Bedarf zu stornieren.',
        help_text:
          'Benötigen Sie Hilfe oder zusätzliche Informationen? Schreiben Sie uns, wir antworten schnell.'
      },

      // Section actions
      actions: {
        home: 'Zurück zur Startseite',
        contact: 'Kontaktieren Sie uns'
      },

      // Section bannière principale
      hero: {
        brand: 'Calypso Bay',
        title: 'Wir freuen uns darauf, Sie zu begrüßen',
        description: 'Meerblick, Infinity-Pool & tropische Atmosphäre.'
      }
    },

    // ========================================================================
    // ÉLÉMENTS COMMUNS
    // ========================================================================
    common: {
      dates: 'Reisedaten:',
      travelers: 'Reisende:',
      adults: 'Erwachsener',
      adults_plural: 'Erwachsene',
      children: 'Kind',
      children_plural: 'Kinder',
      nights: 'Nächte',
      price_details: 'Preisdetails:',
      nights_total: 'Gesamtnächte ({count}):',
      cleaning_fees: 'Reinigungsgebühren:',
      taxes: 'Steuern ({count} {adult_text}):',
      total: 'Gesamt:',
      deposit: 'Anzahlung:',
      balance: 'Restbetrag:',
      children_ages: 'Alter der Kinder:',
      billing_address: 'Rechnungsadresse:',
      copyright: '© Calypso Bay | By',
      currency: '€'
    }
  }
}

// ============================================================================
// FONCTIONS UTILITAIRES POUR LES TRADUCTIONS
// ============================================================================

/**
 * Récupère une traduction avec remplacement des placeholders
 * @param {string} lang - Code de langue (fr, en, de)
 * @param {string} page - Nom de la page
 * @param {string} section - Section de la page
 * @param {string} key - Clé de traduction
 * @param {Object} replacements - Objet contenant les valeurs de remplacement
 * @returns {string} Texte traduit avec remplacements
 */
window.getTranslation = function (lang, page, section, key, replacements = {}) {
  try {
    let text = window.translations[lang][page][section][key]

    // Remplacer les placeholders
    if (replacements && typeof replacements === 'object') {
      Object.keys(replacements).forEach((placeholder) => {
        const regex = new RegExp(`{${placeholder}}`, 'g')
        text = text.replace(regex, replacements[placeholder])
      })
    }

    return text
  } catch (error) {
    console.warn(`Traduction manquante: ${lang}.${page}.${section}.${key}`)
    // Retourner la version française par défaut
    return window.translations.fr[page][section][key] || key
  }
}

/**
 * Détecte automatiquement la langue de l'utilisateur
 * @returns {string} Code de langue détecté (fr, en, de)
 */
window.detectLanguage = function () {
  // Priorité 1: Paramètre URL
  const urlParams = new URLSearchParams(window.location.search)
  const urlLang = urlParams.get('lang')
  if (urlLang && ['fr', 'en', 'de'].includes(urlLang)) {
    return urlLang
  }

  // Priorité 2: Langue du navigateur
  const browserLang = navigator.language || navigator.userLanguage
  if (browserLang) {
    if (browserLang.startsWith('en')) return 'en'
    if (browserLang.startsWith('de')) return 'de'
  }

  // Priorité 3: Français par défaut
  return 'fr'
}

/**
 * Initialise le système de traductions
 */
window.initTranslations = function () {
  const currentLang = window.detectLanguage()
  console.log(`🌍 Langue détectée: ${currentLang}`)

  // Stocker la langue actuelle globalement
  window.currentLanguage = currentLang

  // Émettre un événement pour indiquer que les traductions sont prêtes
  window.dispatchEvent(
    new CustomEvent('translations:ready', {
      detail: { language: currentLang }
    })
  )
}

// Initialiser automatiquement les traductions au chargement
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.initTranslations)
} else {
  window.initTranslations()
}
