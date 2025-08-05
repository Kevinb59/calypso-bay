# Calypso Bay - Villa de Location

Site web de la villa Calypso Bay, une magnifique villa de standing située à Bouillante en Guadeloupe.

## 🌴 À propos

Calypso Bay est une villa contemporaine de 180 m² située sur un terrain de 1 350 m², idéale pour accueillir jusqu'à 6 personnes. Elle offre une vue imprenable sur la mer, les îlets Pigeon et la réserve Cousteau.

## 🚀 Déploiement sur Vercel

Ce site est optimisé pour le déploiement sur Vercel avec les fonctionnalités suivantes :

- **Performance optimisée** : Headers de cache et compression automatique
- **SEO amélioré** : Sitemap XML et robots.txt configurés
- **Sécurité renforcée** : Headers de sécurité configurés
- **Multi-langues** : Support français, anglais et allemand
- **Responsive design** : Optimisé pour tous les appareils

## 📁 Structure du projet

```
calypso-bay/
├── index.html          # Version française
├── index-en.html       # Version anglaise
├── index-de.html       # Version allemande
├── assets/             # CSS, JS, fonts
├── images/             # Images et galerie
├── data/               # Données JSON
├── vercel.json         # Configuration Vercel
├── _redirects          # Redirections
├── robots.txt          # SEO
└── sitemap.xml         # Sitemap
```

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles et animations
- **JavaScript** : Interactivité
- **Font Awesome** : Icônes
- **Vercel** : Hébergement et déploiement

## 🚀 Déploiement

### Déploiement automatique via GitHub

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement la configuration
3. Le site sera déployé automatiquement à chaque push

### Déploiement manuel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

## 📊 Performance

Le site est optimisé pour de meilleures performances :

- **Cache des assets** : 1 an pour les fichiers statiques
- **Compression** : Gzip automatique
- **CDN global** : Distribution mondiale
- **Headers de sécurité** : Protection XSS, clickjacking, etc.

## 🌐 URLs

- **Français** : `https://calypso-bay.com/`
- **Anglais** : `https://calypso-bay.com/index-en.html`
- **Allemand** : `https://calypso-bay.com/index-de.html`

## 📝 Configuration

### Fichiers de configuration

- `vercel.json` : Configuration Vercel avec headers de performance
- `_redirects` : Gestion des redirections
- `robots.txt` : Instructions pour les moteurs de recherche
- `sitemap.xml` : Plan du site pour le SEO

### Variables d'environnement

Aucune variable d'environnement requise pour ce site statique.

## 🔧 Développement local

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Ou avec http-server directement
npx http-server -p 8000 -o
```

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🎨 Design

Basé sur le template **Ethereal** de HTML5 UP avec :

- Design moderne et épuré
- Animations fluides
- Galerie d'images interactive
- Navigation horizontale intuitive

## 📄 Licence

MIT License - Libre d'utilisation personnelle et commerciale.

## 🤝 Support

Pour toute question concernant le site ou la villa, n'hésitez pas à nous contacter.

---

**Calypso Bay** - Votre séjour de rêve en Guadeloupe 🌺
