# Système de Réservation Complet - Calypso Bay

## 📋 Vue d'ensemble

Ce système complet permet de gérer les réservations avec :

- Réception des demandes via Google Apps Script
- Stockage dans Google Sheets
- Notifications par email au gestionnaire
- Actions d'acceptation/refus avec emails automatiques
- **Formulaire de finalisation avec paiement Stripe**
- **Finalisation automatique après paiement**

## 🔄 Workflow complet

1. **Client** → Demande de réservation → Google Sheets (statut: `pending`)
2. **Gestionnaire** → Reçoit email → Clique "Accepter" → Statut: `accepted`
3. **Client** → Reçoit email → Clique "Finaliser ma réservation"
4. **Client** → Remplit formulaire → Paiement Stripe (10% d'acompte)
5. **Système** → Paiement réussi → Statut: `finalized` → Emails de confirmation

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

### 2. Stripe

1. **Créer un compte Stripe**

   - Aller sur [stripe.com](https://stripe.com)
   - Créer un compte
   - Récupérer les clés API

2. **Configurer les clés**
   - Clé publique : `pk_test_...` (pour le frontend)
   - Clé secrète : `sk_test_...` (pour le backend)

### 3. Vercel

1. **Configurer les variables d'environnement**

   ```bash
   vercel env add STRIPE_SECRET_KEY
   # Entrer votre clé secrète Stripe
   ```

2. **Remplacer les IDs dans les fichiers API**

   - Dans `api/accept.js`, `api/refuse.js`, `api/getReservation.js`, `api/finalizeReservation.js`
   - Remplacer `YOUR_SCRIPT_ID` par l'ID de votre script Apps Script

3. **Remplacer la clé Stripe publique**

   - Dans `finaliser-reservation.html`
   - Remplacer `pk_test_YOUR_PUBLISHABLE_KEY` par votre clé publique

4. **Déployer sur Vercel**
   ```bash
   vercel --prod
   ```

## 📊 Structure des données

### Google Sheet - Onglet "ReservationsTemp"

| Colonne                | Description                |
| ---------------------- | -------------------------- |
| createdAt              | Date de création           |
| token                  | UUID unique                |
| name                   | Nom du client              |
| email                  | Email du client            |
| tel                    | Téléphone (optionnel)      |
| reservationDetails_raw | Détails bruts              |
| userMessage            | Message du client          |
| status                 | pending/accepted/finalized |
| paymentData            | Données de paiement (JSON) |

## 🔧 Routes API

### GET `/api/getReservation?token=UUID`

Récupère les données d'une réservation acceptée

### POST `/api/createPaymentIntent`

Crée un PaymentIntent Stripe pour l'acompte

### POST `/api/finalizeReservation`

Finalise la réservation après paiement réussi

### GET `/api/accept?token=UUID`

Accepte une réservation (bouton email)

### GET `/api/refuse?token=UUID`

Refuse une réservation (bouton email)

## 📧 Emails

### Email au gestionnaire (nouvelle réservation)

- Informations complètes de la réservation
- Boutons : Répondre, Accepter, Refuser

### Email au client (acceptation)

- Confirmation d'acceptation
- Lien vers formulaire de finalisation

### Email au client (finalisation)

- Confirmation de paiement
- Détails de l'acompte

### Email au gestionnaire (finalisation)

- Confirmation de paiement reçu
- Détails du client et du paiement

## 💳 Paiement Stripe

### Calcul de l'acompte

- 10% du montant total de la réservation
- Montant extrait automatiquement des détails de réservation

### Sécurité

- Validation côté serveur
- Vérification du statut de réservation
- Protection contre les paiements multiples

## 🛠️ Développement

### Test local

1. **Installer les dépendances**

   ```bash
   npm install
   ```

2. **Tester le script Apps Script**

   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?name=Test&email=test@test.com&reservationDetails=Test
   ```

3. **Tester les routes API**
   ```bash
   vercel dev
   ```

### Variables d'environnement Vercel

```bash
STRIPE_SECRET_KEY=sk_test_...
```

## 🔒 Sécurité

- Validation des paramètres côté serveur
- Protection contre les actions multiples
- Vérification du statut avant modification
- Échappement HTML pour éviter les injections
- Validation Stripe côté serveur

## 📝 Notes importantes

1. **ID du Script** : Remplacer dans tous les fichiers API
2. **Clés Stripe** : Configurer en production
3. **Permissions** : Le script doit avoir accès au Google Sheet
4. **Quotas** : Apps Script a des limites quotidiennes
5. **Test** : Utiliser les clés de test Stripe en développement

## 🆘 Dépannage

### Problèmes courants

1. **Erreur "Token manquant"**

   - Vérifier que le token est bien passé dans l'URL
   - Contrôler les logs Apps Script

2. **Erreur de paiement Stripe**

   - Vérifier les clés API
   - Contrôler les logs Vercel
   - Utiliser les cartes de test Stripe

3. **Emails non reçus**

   - Vérifier les permissions du script
   - Contrôler les quotas Apps Script

4. **Formulaire ne se charge pas**
   - Vérifier l'ID du script dans l'API
   - Contrôler les logs de la console

### Cartes de test Stripe

- **Succès** : `4242 4242 4242 4242`
- **Échec** : `4000 0000 0000 0002`
- **3D Secure** : `4000 0025 0000 3155`

## 📞 Support

Pour toute question ou problème :

1. Vérifier les logs Apps Script
2. Contrôler les logs Vercel
3. Tester avec les cartes de test Stripe
4. Vérifier la configuration des clés API
