# 📚 Bibliothèque dev web


Mon historique de blocs de code qui me permet de réunir en un endroit tout le code que je crée pour mes projets pro ou perso en web.


## ✨ Fonctionnalités

### 🧮 Calcul simple
- Addition automatique de deux nombres
- Conversion des données avec `Number()`
- Affichage du résultat dans la page

### 👤 Interaction utilisateur
- Champ input pour entrer un prénom
- Affichage dynamique du prénom saisi
- Bouton de validation avec événement `onclick`

### 🌐 Appel API
- Récupération de l'heure en temps réel via WorldTimeAPI
- Utilisation de `fetch()` pour les requêtes asynchrones
- Affichage dynamique dans la page

### 🎨 Visuel et style
- Système de bulles modulaires (principale, secondaire, info, action, lien)
- Effets hover et clic avec animations CSS
- Design responsive (écrans >1000px et <999px)
- Boutons et logos animés
- Footer avec liens vers réseaux sociaux


## 🛠️ Technologies utilisées

- HTML
- CSS (variables CSS, media queries)
- JavaScript (vanilla)
- API WorldTimeAPI


## 📖 Ce que j'ai appris

- Manipuler le DOM avec JavaScript (`getElementById`, `innerHTML`, `onclick`)
- Récupérer et afficher des données depuis une API avec `fetch()`
- Gérer des événements utilisateur (click, input)
- Convertir et utiliser des données dynamiques
- Créer un système de design modulaire avec variables CSS
- Rendre un site responsive avec media queries


## 📥 Installation

1. Cloner le projet
```bash
   git clone https://github.com/jp-kaikyo/bibliotheque_dev.git 
```

2. Ouvrir `index.html` dans un navigateur


## 📁 Structure du projet
```
├── index.html
├── style.css
├── script.js
├── images/
│   └── [logos réseaux sociaux]
└── README.md
```


## 🎯 Utilisation

````markdown
### Modifier les valeurs de calcul
Dans `index.html`, tu peux changer les valeurs dans les spans :
```html
<span id="A">1</span> + <span id="B">2</span>
```
Le JavaScript récupère automatiquement ces valeurs et affiche le résultat.

### Changer l'API
Remplace l'URL dans la fonction `fetch()` :
```javascript
let url = "https://worldtimeapi.org/api/timezone/Europe/Paris";
```

### Personnaliser les couleurs
Modifie les variables CSS dans `:root` :
```css
--fond-principal: #0F0F0F;
--objet-permanent: #8B5CF6;
```


## 📝 Notes

- Les images doivent rester dans le dossier `images/` pour que le HTML fonctionne
- Le projet est volontairement simple et modulable
- Facile d'ajouter de nouveaux composants ou exemples


## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésite pas à :
- Ouvrir une **issue** pour signaler un bug
- Proposer une **pull request** pour ajouter des fonctionnalités


## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.