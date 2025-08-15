# 🔧 Guide de Dépannage - Erreur Réseau GAS

## 🚨 Problème : "Erreur réseau" lors de l'envoi du formulaire de réservation

### 📋 Étapes de diagnostic

#### 1. **Vérifier le déploiement du script GAS**

1. Allez sur [script.google.com](https://script.google.com)
2. Ouvrez votre projet `calypso-bay-reservation`
3. Cliquez sur **"Déployer"** → **"Nouveau déploiement"**
4. Choisissez **"Application web"**
5. Configurez :
   - **Exécuter en tant que** : Moi
   - **Qui a accès** : **Tout le monde**
6. Cliquez sur **"Déployer"**
7. **Copiez la nouvelle URL** et mettez-la à jour dans les variables d'environnement Vercel (`NEXT_PUBLIC_GAS_URL` ou `NEXT_PUBLIC_GAS_CONTACT_URL`)

#### 2. **Tester avec le fichier de diagnostic**

Les fichiers de test ont été retirés. Utilisez la console réseau du navigateur sur la page principale.

#### 3. **Vérifications courantes**

##### A. **Problème de CORS**

- **Symptôme** : Erreur "CORS" dans la console
- **Solution** : Le script GAS doit être déployé avec "Tout le monde" en accès

##### B. **URL incorrecte**

- **Symptôme** : Erreur 404 ou "Not Found"
- **Solution** : Vérifier que l'URL dans les variables d'environnement correspond exactement à celle du déploiement

##### C. **Script non déployé**

- **Symptôme** : Erreur "Script not found"
- **Solution** : Redéployer le script avec les bonnes permissions

##### D. **Paramètres manquants**

- **Symptôme** : Erreur côté serveur
- **Solution** : Vérifier que tous les paramètres requis sont envoyés

### 🔍 Diagnostic détaillé

#### **Test 1 : Connectivité de base**

```javascript
// Test simple sans paramètres
fetch('VOTRE_URL_GAS')
  .then((response) => console.log('OK:', response.status))
  .catch((error) => console.log('ERREUR:', error))
```

#### **Test 2 : Avec paramètres minimaux**

```javascript
const params = new URLSearchParams({
  name: 'Test',
  email: 'test@example.com',
  message: 'Test'
})

fetch(`VOTRE_URL_GAS?${params.toString()}`)
  .then((response) => response.json())
  .then((data) => console.log('RÉPONSE:', data))
  .catch((error) => console.log('ERREUR:', error))
```

### 🛠️ Solutions par type d'erreur

#### **Erreur "Failed to fetch"**

- Vérifiez votre connexion internet
- Vérifiez que l'URL est accessible
- Testez l'URL directement dans le navigateur

#### **Erreur "CORS"**

- Redéployez le script avec "Tout le monde" en accès
- Vérifiez que le script est bien une "Application web"

#### **Erreur "Script not found"**

- L'URL est incorrecte ou le script n'est pas déployé
- Recréez le déploiement et copiez la nouvelle URL

#### **Erreur côté serveur (500)**

- Vérifiez les logs d'exécution dans Google Apps Script
- Allez dans l'éditeur GAS → Affichages → Logs d'exécution

### 📝 Mise à jour de l'URL

1. **Récupérez la nouvelle URL** après redéploiement
2. **Ouvrez** `assets/js/banner.js`
3. **Trouvez la ligne** avec `GAS_URL`
4. **Remplacez** l'URL par la nouvelle

```javascript
const GAS_URL = 'VOTRE_NOUVELLE_URL_ICI'
```

### 🔄 Processus de redéploiement complet

1. **Ouvrez** `calypso-bay-reservation.gs` dans Google Apps Script
2. **Cliquez** sur "Déployer" → "Nouveau déploiement"
3. **Type** : Application web
4. **Exécuter en tant que** : Moi
5. **Qui a accès** : Tout le monde
6. **Déployez** et copiez l'URL
7. **Mettez à jour** l'URL dans `banner.js`
8. **Testez** avec `test-diagnostic.html`

### 📞 Support

Si le problème persiste après ces étapes :

1. **Vérifiez les logs** d'exécution dans Google Apps Script
2. **Testez l'URL** directement dans le navigateur
3. **Vérifiez** que le script contient bien le code de `calypso-bay-reservation.gs`
4. **Assurez-vous** que l'email de destination est correct

### 🎯 Vérification finale

Après avoir suivi ces étapes, testez le formulaire de réservation sur votre site. Si l'erreur persiste, utilisez le fichier `test-diagnostic.html` pour obtenir plus d'informations sur l'erreur spécifique.
