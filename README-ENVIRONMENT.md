# Configuration des Variables d'Environnement

## Vue d'ensemble

Ce projet utilise des variables d'environnement pour gérer les URLs sensibles et les configurations. Les URLs des Google Apps Scripts sont maintenant centralisées et peuvent être modifiées facilement.

## Variables d'Environnement

### `NEXT_PUBLIC_GAS_URL`

- **Description** : URL du Google Apps Script pour les réservations
- **Valeur** : `https://script.google.com/macros/s/VOTRE_SCRIPT_ID/exec` (obligatoire)
- **Utilisation** : API routes et frontend

### `NEXT_PUBLIC_GAS_CONTACT_URL`

- **Description** : URL du Google Apps Script pour le formulaire de contact
- **Valeur** : `https://script.google.com/macros/s/VOTRE_SCRIPT_CONTACT_ID/exec` (obligatoire)
- **Utilisation** : Formulaire de contact

## Configuration Locale

### Option 1 : Serveur de développement Next.js

#### 1. Créer un fichier `.env.local`

```bash
# Copiez le fichier env.example vers .env.local
cp env.example .env.local

# Puis éditez .env.local avec vos URLs
NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/s/VOTRE_SCRIPT_ID/exec
NEXT_PUBLIC_GAS_CONTACT_URL=https://script.google.com/macros/s/VOTRE_SCRIPT_CONTACT_ID/exec
```

#### 2. Redémarrer le serveur de développement

```bash
npm run dev
```

### Option 2 : Live Server (pour tests rapides)

En local (sans Vercel), aucune URL n'est codée en dur. Définissez vos URLs via `localStorage` dans la console du navigateur :

```js
localStorage.setItem(
  'GAS_URL',
  'https://script.google.com/macros/s/VOTRE_SCRIPT_ID/exec'
)
localStorage.setItem(
  'GAS_CONTACT_URL',
  'https://script.google.com/macros/s/VOTRE_SCRIPT_CONTACT_ID/exec'
)
```

Puis rechargez la page. `config-loader.js` lira ces valeurs et émettra `app:config-ready`.

## Configuration Vercel

### 1. Via l'interface web Vercel

1. Allez dans votre projet sur [vercel.com](https://vercel.com)
2. Cliquez sur "Settings" → "Environment Variables"
3. Ajoutez les variables :

   - **Name** : `NEXT_PUBLIC_GAS_URL`
   - **Value** : `https://script.google.com/macros/s/VOTRE_SCRIPT_ID/exec`
   - **Environment** : Production, Preview, Development

   - **Name** : `NEXT_PUBLIC_GAS_CONTACT_URL`
   - **Value** : `https://script.google.com/macros/s/VOTRE_SCRIPT_CONTACT_ID/exec`
   - **Environment** : Production, Preview, Development

### 2. Via Vercel CLI

```bash
vercel env add NEXT_PUBLIC_GAS_URL
vercel env add NEXT_PUBLIC_GAS_CONTACT_URL
```

## Fonctionnement

### En Production (Vercel)

1. Le script `config-loader.js` fait un appel à `/api/config`
2. L'API route récupère les variables d'environnement Vercel
3. Les URLs sont exposées globalement via `window.GAS_URL` et `window.GAS_CONTACT_URL`

### En Développement Local

1. Le script détecte l'environnement local
2. Il utilise automatiquement les URLs par défaut
3. Aucun appel API n'est nécessaire

## Fichiers Modifiés

### API Routes

- `api/accept.js`
- `api/reservations.js` (fusion de getReservation.js, manageReservation.js et finalizeReservation.js)
- `api/refuse.js`
- `api/config.js` (nouveau)

### Frontend

- `public/assets/js/banner.js`
- `public/assets/js/form-contact.js`
- `public/assets/js/config-loader.js` (nouveau)

## Avantages

1. **Sécurité** : Les URLs ne sont plus exposées dans le code source
2. **Maintenabilité** : Un seul endroit pour modifier les URLs
3. **Flexibilité** : Différentes URLs pour différents environnements
4. **Déploiement** : Changement d'URL sans redéploiement du code
5. **Compatibilité** : Fonctionne avec les sites statiques Vercel

## Migration

Si vous devez changer les URLs des Google Apps Scripts :

1. **Développement local** : Modifiez `.env.local`
2. **Production** : Modifiez les variables dans Vercel
3. **Redéployez** : Les changements sont automatiques

## Notes Importantes

- Le préfixe `NEXT_PUBLIC_` est nécessaire pour que les variables soient accessibles côté client
- **Ces variables sont obligatoires** - l'application ne fonctionnera pas sans elles
- Aucune URL n'est exposée dans le code source pour des raisons de sécurité
- Le système fonctionne avec les sites statiques Vercel
