# Système de Réservation Calypso Bay

## 📋 Vue d'ensemble

Ce système permet de gérer les demandes de réservation avec :

- Réception des demandes via Google Apps Script
- Stockage dans Google Sheets
- Notifications par email au gestionnaire
- Actions d'acceptation/refus avec emails automatiques

## 🚀 Configuration

### 1. Google Apps Script

1. **Créer un nouveau projet Apps Script**

   - Aller sur [script.google.com](https://script.google.com)
   - Créer un nouveau projet
   - Copier le contenu de `calypso-bay-reservation.gs`

2. **Configurer les variables**

   ```javascript
   const SHEET_ID = 'VOTRE_SHEET_ID' // ID du Google Sheet
   const RECIPIENT_EMAIL = 'votre-email@gmail.com' // Email du gestionnaire
   ```

3. **Créer le Google Sheet**

   - Créer un nouveau Google Sheet
   - Copier l'ID depuis l'URL
   - L'onglet `ReservationsTemp` sera créé automatiquement

4. **Déployer en tant qu'app web**
   - Cliquer sur "Déployer" > "Nouveau déploiement"
   - Type : "Application web"
   - Accès : "Tout le monde"
   - Copier l'URL de déploiement

### 2. Vercel

1. **Configurer les routes API**

   - Les fichiers `api/accept.js` et `api/refuse.js` sont déjà créés
   - Remplacer `YOUR_SCRIPT_ID` par l'ID de votre script Apps Script

2. **Déployer sur Vercel**
   ```bash
   vercel --prod
   ```

## 🔧 Utilisation

### Envoi d'une demande de réservation

```javascript
const scriptUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

const params = new URLSearchParams({
  name: 'John Doe',
  email: 'john@example.com',
  tel: '+33123456789',
  reservationDetails: 'Détails de la réservation...',
  userMessage: 'Message optionnel'
})

fetch(`${scriptUrl}?${params}`)
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'success') {
      console.log('Demande envoyée avec succès')
    }
  })
```

### Actions d'acceptation/refus

Les boutons dans l'email pointent vers :

- `/api/accept?token=UUID` - Accepter la réservation
- `/api/refuse?token=UUID` - Refuser la réservation

## 📧 Emails

### Email au gestionnaire

- Contient toutes les informations de la réservation
- Boutons : Répondre, Accepter, Refuser
- Design responsive et compatible email

### Email au client

- Confirmation d'acceptation ou de refus
- Design cohérent avec la charte graphique
- Lien vers le site principal

## 📊 Structure des données

### Google Sheet - Onglet "ReservationsTemp"

| Colonne                | Description              |
| ---------------------- | ------------------------ |
| createdAt              | Date de création         |
| token                  | UUID unique              |
| name                   | Nom du client            |
| email                  | Email du client          |
| tel                    | Téléphone (optionnel)    |
| reservationDetails_raw | Détails bruts            |
| userMessage            | Message du client        |
| status                 | pending/accepted/refused |

## 🛠️ Développement

### Test local

1. **Tester le script Apps Script**

   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?name=Test&email=test@test.com&reservationDetails=Test
   ```

2. **Tester les routes API**
   ```
   http://localhost:3000/api/accept?token=TEST_TOKEN
   http://localhost:3000/api/refuse?token=TEST_TOKEN
   ```

### Debugging

- Vérifier les logs dans Apps Script
- Contrôler les emails envoyés
- Vérifier les données dans Google Sheets

## 🔒 Sécurité

- Validation des paramètres côté serveur
- Protection contre les actions multiples
- Vérification du statut avant modification
- Échappement HTML pour éviter les injections

## 📝 Notes importantes

1. **ID du Script** : Remplacer `YOUR_SCRIPT_ID` dans les fichiers API
2. **Permissions** : Le script doit avoir accès au Google Sheet
3. **Quotas** : Apps Script a des limites quotidiennes
4. **Emails** : Vérifier les paramètres SMTP si nécessaire

## 🆘 Dépannage

### Problèmes courants

1. **Erreur "Onglet non trouvé"**

   - Vérifier que le Sheet ID est correct
   - L'onglet sera créé automatiquement

2. **Emails non reçus**

   - Vérifier les permissions du script
   - Contrôler les quotas Apps Script

3. **Erreur de formatage des prix**
   - Le script gère maintenant les virgules françaises
   - Vérifier le format des données envoyées

### Support

Pour toute question ou problème, consulter les logs Apps Script et vérifier la configuration.
