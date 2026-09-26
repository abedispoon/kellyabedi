# Portfolio — Kelly Abedi Kashindi

Site statique en HTML / CSS / JavaScript pur : **aucune installation, aucun npm, aucun framework**. Navigation par ancres (`#/page`), ce qui le rend particulièrement simple à héberger.

## Nom proposé pour le site

- **kellyabedi.dev** — sobre, orienté développeur/technique.
- ou la version gratuite **abedispoon.github.io** (votre nom d'utilisateur GitHub), sans domaine à payer.

## Structure

```
portfolio-kelly/
├── index.html              Structure de toutes les pages (Accueil, Devis, Projets, Cas, Compétences, À propos, Contact)
├── README.md
├── .nojekyll               Fichier vide requis par GitHub Pages (désactive le traitement Jekyll)
├── css/
│   ├── base.css            Design tokens (couleurs, tailles), reset, typographie
│   ├── header.css          En-tête, navigation, boutons, menu burger
│   ├── sections.css        Animations, hero, bannières, cartes, galeries, bloc code
│   ├── components.css      Témoignages, à propos, contact, pied de page
│   └── features.css        WhatsApp flottant, KPI, devis, pôles, modale, filtres, réseaux
├── js/                     (ordre de chargement = ordre de la liste)
│   ├── config.js           Liens : CV, portfolio PDF, LinkedIn, GitHub, e-mail, WhatsApp
│   ├── data.js             Projets (avec client pour le tri), témoignages, études de cas, tarifs
│   ├── utils.js            Outils, liens WhatsApp/mailto, animations au défilement
│   ├── home.js             Accueil : témoignages, cartes, rotation des rôles
│   ├── projects.js         Onglets par catégorie + filtre par client (tri)
│   ├── cases.js            Études de cas + modale plein écran
│   ├── router.js           Navigation par #/page
│   ├── quote.js            Générateur de devis
│   ├── contact.js          Formulaire Client / Formateur-Recruteur
│   └── main.js             Démarrage
└── assets/
    ├── favicon.svg
    ├── images/
    │   ├── profil/         kelly.jpg (photo principale) + 5 variantes
    │   └── projets/        logofolio/  identite/  print/  social/  web/
    └── pdf/                cv-kelly-abedi.pdf, portfolio-kelly-abedi.pdf
```

## Lancer en local

1. **Le plus simple** : double-cliquez sur `index.html` (connexion internet nécessaire pour les polices Google Fonts).
2. **Serveur local** (recommandé) : dans le dossier, lancez `python3 -m http.server 8080` puis ouvrez http://localhost:8080
3. **VS Code** : extension « Live Server » → clic droit sur `index.html` → *Open with Live Server*.

## Trier/filtrer les projets par catégorie

Sur la page Projets (`#/projets`), dès qu'une catégorie contient des visuels pour plus d'un client ou d'une structure, une rangée de filtres apparaît sous les onglets (ex. dans Social Media : « Tous », « Telios Corporation », « Église Parfum de Christ », « Centre Missionnaire La Perle »…). Cliquer dessus n'affiche que les visuels de ce client. C'est piloté par le 4ᵉ champ de chaque projet dans `js/data.js` — voir plus bas.

## Héberger sur GitHub Pages

1. Créez un dépôt sur GitHub (par ex. `portfolio`, ou `abedispoon.github.io` pour l'avoir à la racine).
2. Dans le dossier `portfolio-kelly` :
   ```
   git init
   git add .
   git commit -m "Premier envoi du portfolio"
   git branch -M main
   git remote add origin https://github.com/abedispoon/portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : Settings → Pages → Source : branche `main`, dossier `/ (root)` → Save.
4. Le site sera accessible à `https://abedispoon.github.io/portfolio/` (ou `https://abedispoon.github.io/` si le dépôt s'appelle exactement `abedispoon.github.io`).

Pour toute mise à jour ultérieure : `git add . && git commit -m "..." && git push`.

## Quoi modifier où

| Je veux changer… | Fichier |
|---|---|
| Liens CV / Portfolio PDF / LinkedIn / GitHub / WhatsApp / e-mail | `js/config.js` |
| Projets, images et client (pour le filtre) | `js/data.js` (objet `C`) |
| Témoignages | `js/data.js` (tableau `T`) |
| Études de cas (problème, solution, résultats, outils) | `js/data.js` (tableau `CS`) |
| Tarifs et délais du devis (en USD) | `js/data.js` (objets `D` et `DL`) |
| Textes des pages, KPI, pôles d'expertise, À propos | `index.html` |
| Couleurs, tailles de texte | `css/base.css` (bloc `:root`) |
| Message WhatsApp du bouton flottant | `js/main.js` (chercher `#fab`) |
| Textes du formulaire de contact | `js/contact.js` (objet `M`) |
| Photo de profil | remplacer `assets/images/profil/kelly.jpg` |

### Ajouter un projet (avec tri par client)
Dans `js/data.js`, chaque ligne suit ce format :
```js
['Titre','Sous-titre','chemin/image (ou vide)','Nom du client ou de la structure']
```
Exemple : `['Spoon Creative','Studio personnel de Kelly','assets/images/projets/logofolio/spoon-creative-logo.jpg','Spoon Creative']`
Le 4ᵉ champ est ce qui alimente les filtres — donnez le même nom exact à tous les projets d'un même client pour qu'ils se regroupent.

## Contenu actuel du portfolio

- **Logofolio** (4) : Spoon Creative (votre studio personnel), ANDH, Structure cache-toi, Mission Internationale Jardin des Délices — École Prophétique des Fils d'Issacar. *Telios Corporation et Centre Missionnaire La Perle ont été retirés de cette catégorie : leurs logos n'ont pas été conçus par vous.*
- **Identité visuelle** (2) : Spoon Creative, un gabarit de carte de visite prêt à personnaliser. *Même correction que ci-dessus pour Telios et La Perle : sortis de cette catégorie.*
- **Support print** (6) : Toko Tatola Festival, Formation CCNA, Culte de Bénédiction, packaging Ngona Chalk, couverture de livre, Centre d'Entraînement au Ministère. *« Papeterie & Textile » et le teaser « Bientôt » ont été retirés à votre demande.*
- **Social Media & Packs** (26) : Telios Corporation, Église Parfum de Christ, Centre Missionnaire La Perle, Parole Vivante de Badiadingi, La Nouvelle Jérusalem, Structure cache-toi, et 2 publications LinkedIn personnelles — tous filtrables par client.
- **Développement Web** (4) : gestion des actes de naissance (avec capture d'écran de l'interface), gestion documentaire du Secrétariat DRH du Ministère de l'Agriculture, gestion de restaurant, gestion des stocks pharmaceutiques.

Les études de cas Telios et La Perle ont été reformulées : elles précisent maintenant que vous avez contribué aux **visuels de communication** (flyers, réseaux sociaux), pas à la conception de leur logo ou de leur charte graphique. Deux nouvelles études de cas ont été ajoutées pour **Structure cache-toi** et **Mission Internationale Jardin des Délices**, présentées comme des structures de prière.

Le logo transparent de Structure cache-toi a reçu un fond blanc (il s'affichait mal sur les fonds colorés des vignettes).

À compléter par vous : les chiffres marqués « [À compléter] » dans les études de cas, et les tarifs du devis (`js/data.js`, objet `D`), qui restent des valeurs d'exemple.

## Dépendances

**Installation requise : aucune.** Pas de bibliothèque JS ni CSS, pas de compilation.

| Dépendance externe | Rôle | Obligatoire ? |
|---|---|---|
| `https://fonts.googleapis.com` | Polices Outfit (300/400/600/700) et Lato (400/700) | Non : sans elles, le site utilise les polices du système |
| `https://fonts.gstatic.com` | Fichiers de polices | Idem |

### Polices hors-ligne (optionnel)
Téléchargez Outfit et Lato (par ex. avec google-webfonts-helper), placez les fichiers `.woff2` dans `assets/fonts/`, ajoutez des règles `@font-face` dans `css/base.css`, puis supprimez les 3 balises `<link>` Google Fonts d'`index.html`.

## Liens externes du site (tous dans `js/config.js`)

| Clé | Valeur actuelle | État |
|---|---|---|
| `cv` | `assets/pdf/cv-kelly-abedi.pdf` | Fichier local, en place |
| `pf` | `assets/pdf/portfolio-kelly-abedi.pdf` | Fichier local, en place |
| `li` | https://linkedin.com/kelly-abedi-41536213/ | OK |
| `gh` | https://github.com/abedispoon | OK |
| `em` | mailto:kellyabedi09@gmail.com | OK |
| `wa` | https://wa.me/243813330710 | OK (messages pré-remplis par le site) |

Behance a été retiré du site (plus de lien, plus de bouton) puisque vous n'y êtes pas actif.

## Notes techniques
- Scripts classiques (pas de modules ES) pour fonctionner aussi en ouvrant le fichier directement : gardez l'**ordre des balises `<script>`** dans `index.html`.
- Respecte `prefers-reduced-motion` et le thème clair/sombre du système.
- Navigation : `#/home`, `#/devis`, `#/projets`, `#/cas`, `#/competences`, `#/apropos`, `#/contact` ; les catégories (`#/logofolio`, `#/social`…) ouvrent directement l'onglet correspondant sur la page Projets.
- Hébergement : n'importe quel hébergeur statique convient (GitHub Pages, Netlify, Vercel, cPanel) : il suffit d'envoyer le dossier tel quel.
