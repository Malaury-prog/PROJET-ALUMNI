# Journal de Bord — Projet Annuaire Alumni GRETA
**Formation** : Développeur Web / Web Mobile  
**Stagiaire** : Malaury  
**Structure d'accueil** : GRETA Sud Champagne  
**Période** : Mars — Avril 2026

---

# SEMAINE 1

## Lundi 16 Mars 2026

### Matinée — Installation du poste de travail

Objectif de la journée : configurer un environnement Full Stack complet (PHP, Node.js, MySQL) sur le poste fourni par l'établissement.

**Visual Studio Code**
Installation et synchronisation des paramètres via GitHub. Configuration des extensions essentielles pour le développement web.

**Git for Windows**
Installation de Git et Git Bash pour disposer d'un terminal Unix et préparer le versionnement du projet.

**PHP 8.5 et Xdebug**
Installation manuelle de PHP 8.5.
- Incident 1 : commande PHP non reconnue en console. Résolution par l'ajout manuel du chemin dans les variables d'environnement (PATH).
- Incident 2 : erreur de compatibilité VCRUNTIME140.dll. Résolution par la mise à jour des bibliothèques Redistribuables Visual C++ (VC17).
- Xdebug configuré via le Wizard officiel. Activation de `extension_dir = "ext"` dans le php.ini et renommage de la DLL en `php_xdebug.dll`.
- Composer installé et lié à l'exécutable PHP.

**Node.js et NPM**
- Incident 3 : exécution de scripts bloquée par PowerShell. Résolution via `Set-ExecutionPolicy RemoteSigned`.
- Incident 4 : erreur `ERR_SSL_PACKET_LENGTH_TOO_LONG` lors des tentatives d'installation de Vite, React et Tailwind. Blocage réseau lié au proxy de l'établissement. Contournements tentés (désactivation SSL strict, bascule registre HTTP, nettoyage cache) sans succès en fin de journée.

### Après-midi — Réunion de cadrage avec Laura

Entretien avec la responsable pour définir les contours du projet Alumni GRETA Sud Champagne.

- Présentation fixée au 10 avril avec un objectif de 85 % de réalisation.
- Périmètre du projet : 8 filières, dont 4 prioritaires (HRT, Tertiaire, Numérique, Industries).
- Référence ergonomique identifiée : site BSB (Business School).
- Conformité RGPD : structuration du recueil d'informations via Google Forms.
- Missions annexes : prise de vues de la classe BTS, gestion administrative pour le référencement sur la plateforme DORA.

**Session avec David (formateur)**
- Définition précise des besoins utilisateurs et modélisation des cas d'utilisation (User Cases).
- Réflexion sur Docker pour isoler l'environnement de développement.
- Préparation d'un questionnaire technique sur le déploiement, l'hébergement et les mentions légales.

---

## Mardi 17 Mars 2026 — Pivot du concept

Suite aux retours des cadres du GRETA, le projet est recentré : l'annuaire s'adresse désormais aussi aux apprenants en cours de formation, pour faciliter la recherche de stages et le réseautage.

**Base de données**
- Choix de MySQL pour la gestion des relations apprenants / entreprises.
- Création d'une table Entreprises orientée prospection.
- Segmentation des données pour la conformité RGPD (client Éducation Nationale).

**Stack technique retenue**
- Front-end : React.js
- Styles : Tailwind CSS
- Back-end : PHP

---

## Mercredi 18 Mars 2026

**Matinée — Configuration de l'environnement**
- Mise en place d'un environnement WAMP via EasyPHP Devserver.
- Résolution d'une erreur système (MSVCR110.dll manquante) par l'installation des packages redistribuables Visual C++.
- Configuration de phpMyAdmin pour l'administration graphique de la base de données.

**Après-midi — Modélisation**
- Réalisation du MCD V1 sur DrawMySQL : tables Utilisateurs, Formations et Entreprises.
- Analyse fonctionnelle du MVP : focus sur le module de recherche et le suivi d'insertion.
- Veille réglementaire : étude du RGAA et exploration du Système de Design de l'État (DSFR).

---

## Jeudi 19 Mars 2026

**Matinée — Identité graphique (Figma)**

Application du DSFR pour garantir l'accessibilité institutionnelle :
- Déclaration des variables de couleurs (Bleu France #000091, Orange GRETA).
- Configuration de la typographie Marianne avec tokens responsifs.
- Mise en place du système d'espacement modulaire (base 4px).

Révision des indicateurs de performance Core Web Vitals pour le maquettage (LCP, INP, CLS).

**Guide typographique Marianne**

| Style | Taille | Graisse | Line-Height | Usage |
|---|---|---|---|---|
| Desktop H1 | 40px | Bold 700 | 48px (12v) | Titre principal |
| Desktop H2 | 32px | Bold 700 | 40px (10v) | Titres de section |
| Desktop H3 | 28px | Bold 700 | 36px (9v) | Sous-sections |
| Desktop H4 | 24px | Bold 700 | 32px (8v) | Noms sur les cartes |
| Desktop Body | 16px | Regular 400 | 24px (6v) | Texte courant |
| Mobile H1 | 32px | Bold 700 | 40px (10v) | Titre mobile |

**Après-midi — Infrastructure**
- Configuration d'Oracle VirtualBox pour la virtualisation.
- Déploiement de YunoHost sur la VM.
- Évolution de la BDD V1 → V2 avec David : suppression de tables redondantes, refactorisation des relations.

---

## Vendredi 20 Mars 2026 — Architecture BDD V3

Passage à la 3e Forme Normale (3NF) :
- Table `reseaux` : relation 1-to-Many pour LinkedIn / GitHub.
- Table `sessions` : séparation formations et cohortes (promotions).
- Table `secteurs_greta` : normalisation des secteurs d'activité.
- Décision : exclusion de la table `competences` au profit d'un champ `description` (TEXT) libre.

---

# SEMAINE 2

## Lundi 23 Mars 2026

**Matinée — Fondations Figma**
- Définition des variables couleurs DSFR : Blue-France (#000091), Hover (#1212BA), Active (#2727D5).
- Création du bouton "couteau suisse" (Auto Layout, Hug contents) et de l'Input master (Label + Text + Error).
- Header responsive et navigation mobile avec burger menu.

**Après-midi — UI/UX avancée**
- Utilisation du `Bg-disable` (#EEEEEE) pour détacher les cartes de profil du fond.
- Section Chiffres Clés : atome `Stat_Card` sur bandeau Blue-France.
- Feature Block : icônes via Iconify (Mentorat, Opportunités, Visibilité).
- Utilisation de Midjourney pour créer une photographie institutionnelle inclusive.

---

## Mardi 24 Mars 2026

**Matinée — Structure et profil**
- Grille desktop : 12 colonnes, largeur 1224px, gouttière 24px.
- Page Annuaire : remplacement de la pagination par un bouton "Voir plus".
- Page Profil MVP : layout 8/4 colonnes, avatar 160px, sidebar de contact.

**Après-midi — Formulaire et BDD**
- Ajout des colonnes `description`, `titre_poste`, `consentement_rgpd` à la table `utilisateurs`.
- Formulaire de profil : conteneur central 8 colonnes, système de sélection d'avatars illustrés.
- Ajout du variant "En formation" pour le filtrage des stagiaires actuels.

---

## Mercredi 25 Mars 2026 — Recherche utilisateur

**Journée**
- Présentation du projet devant une classe de BTS. Collecte de données réelles (noms, avatars) pour peupler le MVP.
- Pivot UX formulaire : passage à 3 onglets (Mon profil / Ma formation / Ma situation) pour une meilleure cohérence avec la BDD.
- Utilisation stricte de menus `Select` pour éviter les doublons syntaxiques en SQL.

**Session de nuit**
- Création des pages Login, Nouveau mot de passe (First Login) et Erreur 404.
- Définition du plan d'adaptation mobile (stacking vertical des formulaires).

---

## Jeudi 26 Mars 2026

**Matinée — État d'avancement**
- Section Entreprise terminée (desktop et mobile).
- Pages annexes créées : Login, Changement de MDP, Erreur 404.
- Initialisation d'une VM sur PC portable pour un développement flexible.

**Après-midi — RGPD et infrastructure**
- Présentation du projet à la classe BTS et signature du formulaire de consentement éclairé.
- Modèle de données validé : distinction entre usage Prototype/Examen et Déploiement/Production.
- Récupération des 9 points de données (Identité, Contact, Ville, Stage, LinkedIn, etc.) en respectant le droit à l'image.
- Envoi du questionnaire à l'informaticien référent du GRETA (compatibilité PHP 8.5, protocoles de sauvegarde, accès SSH).
- Envoi des préconisations à la Responsable Qualité (DSFR, RGAA, modération).

---

## Vendredi 27 Mars 2026 — Prototype statique

- Implémentation d'une Landing Page sémantique avec navigation par ancres.
- Utilisation des variables CSS et du nesting natif.
- Création d'un header persistant (sticky) et de carrousels interactifs.
- Système de zoom modal (lightbox) pour l'examen des assets Figma.

**Grille DSFR**
- Desktop (1440px) : 12 colonnes, marges 120px, gouttières 24px.
- Mobile (375px) : 4 colonnes, marges 24px, gouttières 16px.

---

# SEMAINE 3

## Lundi 30 Mars 2026 — Architecture projet

**Organisation des dossiers**
- `maquettes-avril` : prototype statique HTML/CSS/JS (livrable intermédiaire du 10 avril).
- `Ressources/conception` : assets Figma et modélisation MCD/Merise.
- `Ressources/references` : documentation théorique et supports MLD.

**Sécurité back-end**
- Dossier `/public` désigné comme unique racine web du serveur.
- `index.php` : Front Controller servant de point d'entrée unique pour toutes les requêtes HTTP.
- Isolation du code métier (`src/`), des dépendances (`vendor/`) et de la configuration (`.env`) hors du dossier public — protection contre les attaques de type Directory Traversal.

**Installation du serveur de développement (avec David)**

Configuration d'un serveur YunoHost sur une tour PC dédiée.

1. Identification des adresses IP (PC portable et tour serveur, IP statique).
2. Configuration réseau manuelle : masque 255.255.255.0, passerelle box, DNS Cloudflare (1.1.1.1) et FDN (80.67.169.12).
3. Partitionnement disque NVMe (GPT) : partition ESP (boot EFI), partition Root ext4, partition Swap.
4. Modification du fichier `hosts` Windows pour la résolution locale du domaine.
5. Installation phpMyAdmin (MariaDB), Custom Webapp (Nginx + PHP-FPM), connexion SFTP via FileZilla vérifiée.

---

## Mardi et Mercredi 31 Mars — 1er Avril 2026

**Intégration React + Tailwind v4 — Échec et reprise**

Tentatives d'intégration React avec Tailwind v4 sans succès. Revue complète de la documentation officielle (TPDWWM2025, documentation Tailwind v4, tutoriels YouTube). Prise de temps nécessaire pour comprendre les différences majeures entre Tailwind v3 et v4 (suppression du fichier de configuration, système `@theme`, classes auto-générées).

---

# SEMAINE 4

## Jeudi 02 Avril 2026 — Démarrage intégration React

Première session de développement React fonctionnelle. Mise en place des fondations du projet.

**Stack technique finale**
- Front-end : React + Vite JS (`client/`)
- Styles : Tailwind CSS v4 + tokens DSFR dans `@theme`
- Back-end : PHP vanilla (`server/`)
- BDD : MySQL
- Serveur : YunoHost + Nginx (VM VirtualBox sur tour dédiée Debian)
- DNS : No-IP (.ddns.net)
- Icônes : Lucide React
- Carrousel : Swiper.js
- Mock data : @faker-js/faker

**Tokens DSFR configurés dans `index.css`**

```css
@theme {
  --font-marianne: "Marianne", sans-serif;
  --color-blue-france: #000091;
  --color-blue-france-hover: #1212ba;
  --color-blue-france-active: #2727d5;
  --color-accent-orange: #fd7e14;
  --color-text-main: #161616;
  --color-bg-default: #ffffff;
  --color-bg-alt: #f6f6f6;
  --color-bg-disable: #eeeeee;
  --color-border-default: #e5e5e5;
  --color-success-green: #18753c;
  /* Espacements v (4px) et w (8px), radius, typographie mobile/desktop */
}
```

**Règle Tailwind v4** : le namespace est retiré automatiquement dans les classes. `--spacing-6w` génère la classe `gap-6w` (et non `gap-spacing-6w`).

**Composants réalisés**
- `Button.jsx` : 3 variantes (primary, accent, outline), props `label`, `onClick`, `variant`, `disabled`, objet `themes` pour la gestion des styles.
- `Logo.jsx` : logo République Française + texte "Annuaire ALUMNI".
- `Header.jsx` : navigation desktop, burger mobile avec `useState`, icônes Lucide `Menu` et `X`.
- `Hero.jsx` : image de fond lycée, overlay sombre, titre + sous-titre + bouton.
- `Layout.jsx` : composant enveloppant Header + `{children}` + Footer (conseillé par Charly).

**Concepts clés appris**
- JSX : HTML dans JavaScript, `className` à la place de `class`, variables avec `{}`.
- Props : paramètres des composants, valeurs par défaut, déstructuration.
- `useState` : hook React pour gérer un état (ex : menu ouvert/fermé). Quand la valeur change, React réaffiche le composant automatiquement.
- Rendu conditionnel : `{condition && <Element />}` et ternaire `{a ? x : y}`.
- Import images Vite : toujours `import img from "..."`, jamais de chemin relatif dans `src=""`.
- Style inline React : camelCase obligatoire (`backgroundSize` et non `background-size`).
- JSDoc : `@param {type} nom`, `@returns {JSX.Element}`, `{() => void}` pour une fonction sans retour.

---

## Semaine du 07 Avril 2026 — Landing Page complète

### Composants et sections réalisés

**Tag.jsx** (`components/common/`)
Composant statut apprenant. 4 variantes : `en-formation` (bleu), `en-poste` (orange), `en-recherche` (vert), `indisponible` (gris). Utilise le même pattern `themes[variant]` que Button.

**CarteApprenant.jsx** (`components/cards/`)
Carte affichant : avatar arrondi avec anneau orange, nom + prénom, formation + promo + année, liens conditionnels LinkedIn / GitHub (affichés uniquement si renseignés), biographie, Tag statut en bas. `flex-1` sur la div biographie pour que le Tag reste toujours aligné en bas quelle que soit la longueur du texte. `items-stretch` sur le conteneur parent pour égaliser la hauteur de toutes les cartes.

**DerniersProfiles.jsx** (`components/sections/landing/`)
Section carrousel avec Swiper.js (EffectCoverflow + Navigation + Autoplay). Combine 3 sources de données : JSON statique, données Faker générées dynamiquement. `loop={true}` et `initialSlide` pour centrer le carrousel au démarrage.

**Mock data — 3 approches**
```js
// 1. JSON statique → import par défaut
import data from "../data/mockApprenants.json";

// 2. JS avec export nommé → import nommé
import { apprenants } from "../data/mockApprenants.js";

// 3. Faker → fonction générant des données aléatoires
import { genererApprenants } from "../data/mockApprenants.js";

// Combinaison des 3 sources
const tousLesApprenants = [...mockApprenants, ...genererApprenants(6)];
```

**ChiffresCles.jsx** (`components/sections/landing/`)
Bandeau bleu France avec 4 statistiques en blanc. Structure `flex-col md:flex-row` pour l'adaptation mobile/desktop.

**NotreMission.jsx** (`components/sections/landing/`)
Section image + texte en deux colonnes sur desktop, empilées sur mobile. `flex-col md:flex-row`.

**Features.jsx** (`components/sections/landing/`)
3 colonnes avec icônes Lucide orange (Users, Briefcase, Eye), titre et description. Fond `bg-bg-alt`.

**CTAFinale.jsx** (`components/sections/landing/`)
Appel à l'action centré avec bordure et bouton primary.

**Footer.jsx** (`layout/`)
Logo + description, liens gouvernementaux (gouvernement.fr, legifrance.gouv.fr, service-public.fr, data.gouv.fr), séparateur, liens légaux sur une ligne, mention licence etalab 2.0. Bordure top bleue France.

### Erreurs rencontrées et corrections

| Erreur | Cause | Solution |
|---|---|---|
| DSFR cassait Tailwind | `dsfr.min.css` écrase tous les styles | Désinstaller DSFR, utiliser uniquement les tokens custom |
| Image non affichée | Chemin relatif dans `src=""` | `import img from "..."` puis `src={img}` |
| `gap-spacing-6w` invalide | Tailwind v4 retire le namespace | `gap-6w` |
| JSX dans `className` | `className` attend du texte, pas du JSX | Mettre le JSX dans le contenu du composant |
| `labelstatut` non défini | Casse différente entre props et JSX | Harmoniser partout : JSON, props et JSX doivent être identiques |
| Import `.js` retournait `undefined` | Export nommé vs import par défaut | `import { fn }` pour `.js`, `import data` pour `.json` |
| Key dupliquée dans `.map()` | JSON et Faker avaient les mêmes IDs | Faker démarre à `id: i + 100` |
| Tag non aligné en bas | `flex-1` sur un `<p>` imbriqué | `flex-1` sur la `<div>` parente directe |
| Cartes hauteurs différentes | `items-stretch` manquant | `items-stretch` sur le conteneur + `h-full` sur `<article>` |
| Double `<main>` | `LandingPage` et `Layout` avaient chacun un `<main>` | `LandingPage` utilise un fragment `<>` |

### Architecture finale Landing Page

```
App.jsx
  └── Layout.jsx
        ├── Header.jsx
        ├── main (flex-col gap-16v)
        │    └── LandingPage.jsx
        │          ├── Hero.jsx
        │          ├── DerniersProfiles.jsx
        │          ├── ChiffresCles.jsx
        │          ├── NotreMission.jsx
        │          ├── Features.jsx
        │          └── CTAFinale.jsx
        └── Footer.jsx
```

---

## État d'avancement — 09 Avril 2026

### Réalisé
- [x] Configuration complète de l'environnement de développement
- [x] Infrastructure serveur : Debian + VirtualBox + YunoHost + No-IP + WireGuard
- [x] Maquettes Figma complètes (Landing Page, Annuaire, Profil, Connexion, 404)
- [x] Design System DSFR complet dans Tailwind v4
- [x] Composants : Button, Logo, Tag, CarteApprenant
- [x] Layout : Header (burger responsive), Hero, Footer
- [x] Landing Page complète : DerniersProfiles, ChiffresCles, NotreMission, Features, CTAFinale
- [x] Mock data : JSON statique + JS exporté + Faker.js

### À faire
- [ ] Page Connexion
- [ ] Page Première connexion (sécurisation du compte)
- [ ] Page 404
- [ ] Page Annuaire (grille + filtres)
- [ ] Page Profil apprenant
- [ ] Dashboard Admin
- [ ] Back-end PHP (API REST + PDO MySQL)
- [ ] Compléter la table `utilisateurs` (colonnes manquantes : description, titre_poste, linkedin_url, github_url, telephone, entreprise_nom)
- [ ] Déploiement sur YunoHost

### Présentation — 10 Avril 2026
Présentation devant les OF (Organismes de Formation). Durée : 7-8 minutes. Public non-technique. Support : PowerPoint 5 slides réalisé en amont.
