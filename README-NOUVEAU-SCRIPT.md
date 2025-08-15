# 🚀 Nouveau Script Google Apps Script pour les Réservations

## 📋 Instructions de déploiement

### 1. Créer un nouveau projet Google Apps Script

1. Allez sur [script.google.com](https://script.google.com)
2. Cliquez sur "Nouveau projet"
3. Donnez un nom au projet : `Calypso Bay - Réservations`

### 2. Copier le code

1. Ouvrez le fichier `calypso-bay-reservation.gs`
2. Copiez tout le contenu
3. Collez-le dans l'éditeur Google Apps Script

### 3. Déployer le script

1. Cliquez sur "Déployer" > "Nouveau déploiement"
2. Choisissez "Type" : "Application web"
3. Configurez :
   - **Description** : `Version 1.0 - Script réservations Calypso Bay`
   - **Exécuter en tant que** : `Moi`
   - **Qui a accès** : `Tout le monde`
4. Cliquez sur "Déployer"
5. Autorisez les permissions demandées

### 4. Récupérer l'URL

1. Après le déploiement, copiez l'URL fournie
2. Elle ressemble à : `https://script.google.com/macros/s/[SCRIPT_ID]/exec`

### 5. Mettre à jour les variables d'environnement

Mettez à jour les variables dans Vercel : `NEXT_PUBLIC_GAS_URL` ou `NEXT_PUBLIC_GAS_CONTACT_URL`.

## ✨ Fonctionnalités du nouveau script

### 📧 Email stylisé et moderne

- Design responsive avec gradient violet
- Informations du client clairement présentées
- Détails de la réservation formatés
- Boutons d'action intégrés

### 🔘 Boutons d'action

1. **💬 Répondre** - Envoie un email de réponse standard
2. **✅ Accepter** - Envoie un email de confirmation de réservation
3. **❌ Refuser** - Envoie un email de refus de réservation

### 📱 Design responsive

- S'adapte aux écrans mobiles
- Interface moderne avec animations
- Couleurs cohérentes avec le site

## 🧪 Tests

Testez directement sur la page principale du site. Les variables sont chargées côté client par `assets/js/config-loader.js`.

## 📊 Différences avec l'ancien script

| Fonctionnalité   | Ancien Script                                                  | Nouveau Script                          |
| ---------------- | -------------------------------------------------------------- | --------------------------------------- |
| Sujet email      | `📩 Contact Calypso Bay : Nouveau message de la part de [NOM]` | `Demande de réservation de [NOM]`       |
| Design email     | Basique HTML                                                   | Moderne avec CSS                        |
| Boutons d'action | 1 bouton "Répondre"                                            | 3 boutons : Répondre, Accepter, Refuser |
| Responsive       | Non                                                            | Oui                                     |
| Animations       | Non                                                            | Oui                                     |
| Couleurs         | Standard                                                       | Gradient violet cohérent                |

## 🔧 Personnalisation

### Modifier les couleurs

Dans le fichier `calypso-bay-reservation.gs`, cherchez :

```css
background: linear-gradient(135deg, #551f7e 0%, #7c3aed 100%);
```

Et remplacez par vos couleurs préférées.

### Modifier les messages

Dans la section des boutons d'action, vous pouvez personnaliser :

- Le sujet des emails
- Le contenu des messages
- Les icônes utilisées

### Ajouter des champs

Pour ajouter de nouveaux champs dans l'email :

1. Ajoutez le champ dans la section `info-grid`
2. Utilisez `data.nouveauChamp` pour l'afficher

## 🚨 Troubleshooting

### Erreur "Paramètres manquants"

- Vérifiez que tous les champs obligatoires sont remplis
- Vérifiez que l'URL du script est correcte

### Email non reçu

- Vérifiez les permissions du script
- Vérifiez que l'adresse email de destination est correcte
- Regardez les logs dans Google Apps Script

### Erreur de déploiement

- Vérifiez que vous avez les permissions nécessaires
- Essayez de redéployer le script
- Vérifiez que le code est valide

## 📞 Support

Si vous rencontrez des problèmes :

1. Vérifiez les logs dans Google Apps Script
2. Vérifiez que l'URL du script est correcte dans les variables d'environnement Vercel
