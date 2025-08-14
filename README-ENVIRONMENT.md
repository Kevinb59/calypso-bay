# Configuration des Variables d'Environnement

## Vue d'ensemble

Ce projet utilise des variables d'environnement pour gérer les URLs sensibles et les configurations. L'URL du Google Apps Script est maintenant centralisée et peut être modifiée facilement.

## Variables d'Environnement

### `NEXT_PUBLIC_GAS_URL`

- **Description** : URL du Google Apps Script pour les réservations
- **Valeur** : `https://script.google.com/macros/s/VOTRE_SCRIPT_ID/exec` (obligatoire)
- **Utilisation** : API routes et frontend
- **Sécurité** : Cette variable est obligatoire et ne peut pas être laissée vide

## Configuration Locale

### Option 1 : Serveur de développement Next.js

#### 1. Créer un fichier `.env.local`

```bash
# Copiez le fichier env.example vers .env.local
cp env.example .env.local

# Puis éditez .env.local avec votre URL
NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/s/VOTRE_SCRIPT_ID/exec
```

#### 2. Redémarrer le serveur de développement

```bash
npm run dev
```

### Option 2 : Live Server (pour tests rapides)

#### 1. Inclure le script de configuration dans vos pages HTML

Ajoutez cette ligne dans le `<head>` de vos pages HTML :

```html
<script src="/assets/js/dev-config.js"></script>
```

#### 2. Utiliser "Open With Live Server" dans Cursor

- Clic droit sur `index.html`
- Sélectionner "Open With Live Server"
- Le site fonctionnera avec les URLs par défaut

**Note** : En mode développement local, les URLs par défaut sont utilisées automatiquement.

## Configuration Vercel

### 1. Via l'interface web Vercel

1. Allez dans votre projet sur [vercel.com](https://vercel.com)
2. Cliquez sur "Settings" → "Environment Variables"
3. Ajoutez la variable :
   - **Name** : `NEXT_PUBLIC_GAS_URL`
   - **Value** : `https://script.google.com/macros/s/VOTRE_NOUVEAU_SCRIPT_ID/exec`
   - **Environment** : Production, Preview, Development

### 2. Via Vercel CLI

```bash
vercel env add NEXT_PUBLIC_GAS_URL
```

## Fichiers Modifiés

### API Routes

- `api/accept.js`
- `api/finalizeReservation.js`
- `api/getReservation.js`
- `api/refuse.js`

### Frontend

- `public/assets/js/banner.js`
- `public/assets/js/config.js` (nouveau)

## Avantages

1. **Sécurité** : L'URL n'est plus exposée dans le code source
2. **Maintenabilité** : Un seul endroit pour modifier l'URL
3. **Flexibilité** : Différentes URLs pour différents environnements
4. **Déploiement** : Changement d'URL sans redéploiement du code

## Migration

Si vous devez changer l'URL du Google Apps Script :

1. **Développement local** : Modifiez `.env.local`
2. **Production** : Modifiez la variable dans Vercel
3. **Redéployez** : Les changements sont automatiques

## Notes Importantes

- Le préfixe `NEXT_PUBLIC_` est nécessaire pour que la variable soit accessible côté client
- **Cette variable est obligatoire** - l'application ne fonctionnera pas sans elle
- Aucune URL n'est exposée dans le code source pour des raisons de sécurité
- Tous les fichiers utilisent maintenant la même variable d'environnement
