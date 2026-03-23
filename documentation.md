## Journal de Bord - Projet ALUMNI GRETA

# PREMIERE SEMAINE

## Séance du Lundi 16 Mars 2026

### 1. Installation du Poste de Travail (Matinée)

L'objectif était de configurer un environnement Full Stack complet (PHP 8.5, Node.js, MySQL). Cette phase a été marquée par plusieurs blocages techniques liés aux restrictions du système et du réseau.

#### Configuration de l'IDE et de Git

- **Visual Studio Code** : Installation et synchronisation des paramètres via GitHub.
- **Git for Windows** : Installation de Git et Git Bash pour disposer d'un terminal Unix-like et préparer le versionnement.

#### Environnement Backend : PHP 8.5 et Xdebug

- **Moteur PHP** : Installation manuelle de PHP 8.5.
  - **Incident 1** : Commande PHP non reconnue. Résolution par l'ajout manuel du chemin dans les variables d'environnement (PATH).
  - **Incident 2** : Erreur de compatibilité VCRUNTIME140.dll. Résolution par la mise à jour des bibliothèques Redistribuables Visual C++ (VC17).
- **Xdebug** : Configuration pour le débogage.
  - **Résolution** : Utilisation du Wizard Xdebug, activation de `extension_dir = "ext"` dans le php.ini et renommage de la DLL en `php_xdebug.dll`.
- **Composer** : Installation réussie et liaison avec l'exécutable PHP.

#### Environnement Frontend : Node.js et NPM

- **Node.js** : Installation du moteur et du gestionnaire de paquets NPM.
  - **Incident 3** : Exécution de scripts bloquée par PowerShell. Résolution via la commande `Set-ExecutionPolicy RemoteSigned`.
  - **Incident 4 (Blocage Réseau)** : Erreur `ERR_SSL_PACKET_LENGTH_TOO_LONG` lors des tentatives d'installation de Vite, React et Tailwind.
  - **Actions de contournement** : Désactivation du SSL strict, bascule du registre en HTTP et nettoyage du cache. Le problème persiste malgré ces tentatives, indiquant un blocage au niveau du proxy/pare-feu de l'établissement.

---

### 2. Étude de Projet et Réunion Stratégique

Entretien avec Laura pour définir les contours concrets du projet Alumni GRETA Sud Champagne.

- **Calendrier** : Réunion de présentation fixée au 10 avril avec un objectif de 85% de réalisation du projet.
- **Périmètre** : Le projet couvre 8 filières, dont 4 prioritaires (HRT, Tertiaire, Numérique, Industries).
- **Références et Veille** : Analyse du site BSB (Business School) comme référence ergonomique et fonctionnelle.
- **Conformité RGPD** : Nécessité de structurer le recueil d'informations (Google Forms) selon les normes de protection des données.
- **Missions annexes** : Prise de vues de la classe BTS et gestion administrative pour le référencement sur la plateforme DORA.

---

### 3. Analyse Fonctionnelle (Après-midi avec David)

Session de travail avec le formateur pour lever les incompréhensions techniques et structurer la phase de développement.

- **Audit Fonctionnel** : Définition précise des besoins utilisateurs et des services rendus par la plateforme.
- **User Cases** : Rédaction des cas d'utilisation pour modéliser les interactions entre les Alumni, les entreprises et l'administration.
- **Infrastructure** : Préparation d'un second questionnaire technique portant sur le déploiement, l'hébergement et la rédaction des mentions légales.
- **Docker** : Réflexion sur l'utilisation de Docker pour isoler l'environnement de développement et garantir la parité avec la production.

---

### 4. État d'Avancement et Reste à Faire

Le poste de travail est configuré à environ 70%. Les outils Backend sont opérationnels, tandis que les outils Frontend nécessitent une intervention sur la configuration réseau.

- **Action prioritaire** : Demander l'ouverture des flux vers `registry.npmjs.org` sur le port 443 à l'administrateur réseau.
- **Documentation** : Rédaction du cahier des charges intégrant les nouveaux éléments stratégiques.
- **Maquettage** : Réflexion sur la Landing Page en s'inspirant de la référence BSB.

## Séance du Mardi 17 Mars 2026

### Évolution du Concept (Pivot)

Suite aux retours des cadres du GRETA, le projet est recentré sur les usagers en cours de formation pour faciliter la recherche de stages et le réseautage via un Annuaire des Apprenants.

### Réflexions sur la Base de Données

L'après-midi a été consacré à la modélisation théorique :

- Choix de MySQL pour la gestion des relations apprenants/entreprises.
- Création d'une table Entreprises orientée prospection.
- Segmentation des données pour la conformité RGPD (client Éducation Nationale).

### Stack Technique retenue

- Front-end : React.js.
- Styling : Tailwind CSS.
- Back-end : PHP (version à confirmer avec l'équipe technique).

---

## Séance du Mercredi 18 Mars 2026

### Matinée : Configuration de l'Environnement

- Mise en place d'un environnement WAMP via EasyPHP Devserver.
- Résolution d'erreurs système (MSVCR110.dll manquante) par l'installation des packages redistribuables Visual C++.
- Configuration de phpMyAdmin (PHP 7.2.5) pour l'administration graphique de la BDD.

### Après-midi : Modélisation Technique et Analyse

- Réalisation du MCD V1 sur DrawMySQL : création des tables Utilisateurs, Formations et Entreprises.
- Analyse fonctionnelle du MVP : focus sur le module de recherche et le suivi d'insertion.
- Veille réglementaire : étude du RGAA et exploration du Système de Design de l'État (DSFR).

---

## Séance du Jeudi 19 Mars 2026 (Matinée)

### Identité Graphique et UI (Figma)

Application du DSFR pour garantir l'accessibilité institutionnelle :

- Déclaration des variables de couleurs (Bleu France, Blanc, Gris, Orange GRETA).
- Configuration de la typographie Marianne (tokens responsifs).
- Mise en place du système d'espacement modulaire (base 4px).

### Optimisation SEO et Core Web Vitals

Révision des indicateurs de performance pour le maquettage :

- LCP : optimisation des médias.
- INP : réactivité des interactions.
- CLS : réservation des espaces via dimensions fixes en CSS.

### Évolution de la Base de Données (V1 vers V2)

Revue de l'architecture avec le formateur sur DrawMySQL :

- Allègement de la structure par suppression de tables redondantes.
- Refactorisation des relations pour l'intégrité des données.

---

### Objectifs de l'Après-midi

- Figma : Création des composants (Header, Boutons, Cartes formation) et du KIT UX.
- BDD V3 : Intégration des photos de profil (aspect réseau social) et création de la table Réseaux (LinkedIn, GitHub, Gmail).

## Récapitulatif de l'après-midi

### Design System & UI (Figma)

- **Approche "From Scratch" :** Choix de ne pas utiliser de bibliothèque UI Kit externe pour démontrer la maîtrise des fondamentaux du Design System et le respect de la charte **DSFR (Marianne)**.
- **Gestion des Variables :**
  - **Spacing :** Mise en place d'un système modulaire basé sur l'unité **`v` (4px)** pour garantir une grille de construction rigoureuse.
  - **Line-height :** Liaison dynamique de l'interlignage avec les variables de spacing (`8v`, `10v`, etc.) pour une cohérence verticale parfaite.

  ### 📖 Guide de Style Typographique (Marianne)

| Style               | Taille | Graisse       | Line-Height (v) | Usage                   |
| :------------------ | :----- | :------------ | :-------------- | :---------------------- |
| **Desktop / H1**    | 40px   | Bold (700)    | **12v** (48px)  | Titre principal         |
| **Desktop / H2**    | 32px   | Bold (700)    | **10v** (40px)  | Titres de section       |
| **Desktop / H3**    | 28px   | Bold (700)    | **9v** (36px)   | Sous-sections           |
| **Desktop / H4**    | 24px   | Bold (700)    | **8v** (32px)   | **Noms sur les cartes** |
| **Desktop / Body**  | 16px   | Regular (400) | **6v** (24px)   | Texte courant           |
| **Desktop / Small** | 14px   | Regular (400) | **5v** (20px)   | Infos secondaires       |
|                     |        |               |                 |                         |
| **Mobile / H1**     | 32px   | Bold (700)    | **10v** (40px)  | Titre mobile            |
| **Mobile / H2**     | 28px   | Bold (700)    | **9v** (36px)   | Section mobile          |
| **Mobile / H3**     | 24px   | Bold (700)    | **8v** (32px)   | Sous-titre mobile       |
| **Mobile / H4**     | 22px   | Bold (700)    | **7v** (28px)   | Nom carte mobile        |
| **Mobile / Body**   | 16px   | Regular (400) | **6v** (24px)   | Texte mobile            |
| **Mobile / Small**  | 14px   | Regular (400) | **5v** (20px)   | Infos secondaires       |

> **Note technique :** L'unité de base **1v** est fixée à **4px**. Toute modification de cette variable impactera l'ensemble du système d'espacement et d'interlignage du projet.

- **Typographie Responsive :**
  - Création de **12 Text Styles** organisés en dossiers (`Desktop/` et `Mobile/`).
  - Hiérarchie allant de **H1 à Small**, paramétrée pour s'adapter automatiquement aux différents terminaux.
- **Composants Avancés :**
  - Création de la **Carte Parent (Alumni)** en Auto Layout.
  - Développement d'atomes (**Tags/Badges**) avec propriétés de variantes (Orange/Gris) et propriétés booléennes pour une flexibilité maximale.

### Infrastructure & DevOps

- **Virtualisation :** Configuration d'un environnement de développement via **Oracle VirtualBox**.
- **Administration :** Déploiement de **YunoHost** pour la gestion centralisée de l'auto-hébergement.
- **Stack Technique (4 outils opérationnels) :**
  1. **phpMyAdmin :** Gestion et administration de la base de données.
  2. **My WebApp :** Serveur d'hébergement pour l'application Web.
  3. **n8n :** Automatisation de workflows et liaison de services.
  4. **Vaultwarden :** Gestion sécurisée des identifiants et accès de l'environnement.

### Data & Backend

- **Modélisation V3 :** Analyse et restructuration de la base de données (Tables `Users`, `Promotions`, `Social_Links`).
- **Objectif :** Mise en corrélation directe de la structure SQL avec les besoins identifiés lors de la création des composants Figma.

### Objectifs du Week-end

- Finalisation de l'intégralité des **Frames Figma** (Maquettes haute fidélité).
- Verrouillage du schéma de données **BDD V3**.
- Préparation du premier sprint de développement (Front-end & Backend).

## Séance du Vendredi 20 Mars 2026 (Matinée)

## Architecture Base de Données - Évolution V3

### Objectifs de la V3

Passage d'un modèle conceptuel à un schéma relationnel optimisé pour le développement Full Stack. L'architecture a été affinée pour respecter la 3ème Forme Normale (3NF), garantissant l'intégrité des données et des requêtes SQL performantes pour l'affichage de l'annuaire.

### Fondations conservées (Héritage V1/V2)

- **Le Cœur Utilisateur :** Table `utilisateurs` centralisant l'authentification (mot de passe préparé pour le hashage en `VARCHAR(255)`) et les informations de profil.
- **L'Écosystème & Contacts :** Tables `entreprises`, `formations` et `contacts` pour structurer le maillage du réseau et conserver un suivi précis des interlocuteurs professionnels.
- **La Géographie :** La table de liaison `formation_ville` pour gérer correctement les formations dispensées sur plusieurs bassins géographiques.
- **Le Pivot Central :** La table `parcours`, table de liaison complexe retraçant l'historique complet de l'élève (quelle formation, quelle date, quelle entreprise).

### Nouveautés et Optimisations (Ajouts spécifiques V3)

- **Table `reseaux` :** NOUVELLE table (relation 1-to-Many) isolant les liens externes (LinkedIn, GitHub, portfolio) de la table principale `utilisateurs`. Indispensable pour alimenter le bloc "Social Links" de la nouvelle carte UI.
- **Table `sessions` (Promotions) :** Séparation du "catalogue" (`formations`) et de la "cohorte" (`sessions`). Ajout crucial pour permettre le filtrage des Alumni par année de promotion.
- **Table `secteurs_greta` :** Création d'une table de référence pour normaliser les secteurs d'activité, évitant les doublons syntaxiques et fiabilisant les futurs menus déroulants.
- **Standardisation du Naming :** Application stricte des conventions de nommage SQL (`snake_case`, noms de tables au pluriel) pour le futur backend PHP.
- **Optimisation de l'UI :** Déplacement de la clé étrangère `statut_id` (badge "En poste") directement dans la table `utilisateurs` pour éviter une jointure SQL lourde lors de l'affichage de la grille de l'annuaire.

### Choix Techniques & "Scoping" (Périmètre)

- **Exclusion de la table `competences` :** Décision métier assumée et validée. La disparité extrême des filières du réseau rendrait le maintien d'un dictionnaire de compétences ingérable. L'expression des acquis se fera via un champ texte libre (`description`), allégeant considérablement la base.

---

# DEUXIEME SEMAINE

## Séance du Lundi 23 Mars (Matin)

## 1. Fondations et Variables (Styles Globaux)

Nous avons mis en place le "thème" technique pour éviter toute "bidouille" de couleur lors de l'intégration CSS.

### 1.1 Couleurs Institutionnelles (DSFR)

Blue-France (Base) : #000091 (Identité républicaine).

Blue-France-Hover : #1212BA (Plus sombre pour simuler la pression au survol).

Blue-France-Active : #2727D5 (Plus vibrant pour le clic réel).

### 1.2 États de Surface et Neutres

Bg-disable : #EEEEEE (Gris très clair pour les fonds désactivés).

Gris-disable-text : #929292 (Gris moyen pour le texte des éléments verrouillés).

Border-Default : #E5E5E5 (Bordures légères pour les inputs et séparateurs).

## 2. Atomes : Les Composants Maîtres

Chaque composant a été pensé comme un objet de programmation avec des propriétés spécifiques.

### 2.1 Le Bouton "Couteau Suisse"

Variantes d'états : Default, Hover, Active, Disabled.

Propriétés Booleans : Création d'interrupteurs Show Icon Left et Show Icon Right pour gérer l'affichage des icônes sans créer de nouveaux composants.

Logique de Redimensionnement : Utilisation du mode Hug contents (le bouton s'adapte à la taille du texte) pour éviter les cadres fixes inutiles.

### 2.2 L'Input (Champ de saisie)

Structure Auto Layout : Empilement vertical [Label] + [Champ de texte] + [Message d'erreur].

États Critiques : \* Focus : Bordure bleue de 2px (Accessibilité).

Error : Bordure rouge #CE0500 + texte d'aide rouge.

## 3. Organismes : Navigation et Header

Passage de l'unité isolée à la structure de page.

### 3.1 Header Responsive

Mode d'espacement : Utilisation du Gap: Auto (Space-between) pour séparer le logo à gauche, la nav au centre et l'action à droite.

Multi-supports : \* Desktop : Menu textuel visible.

Mobile/Tablette : Remplacement du menu par une icône Burger.

### 3.2 Navigation Mobile (Burger Menu)

Réflexion sur la profondeur : Ajout d'une Ombre Portée (Drop Shadow) légère sur le menu déroulant (Y: 8, Blur: 20, Opacity: 10%) pour marquer la superposition visuelle.

## 4. Méthodologie et Références

Réflexions de "Lead Developpeur" appliquées au design.

Suppression des cadres fixes : Abandon des tailles rigides pour privilégier la flexibilité (préparation au Flexbox CSS).

Correction des Contrastes : Rectification de l'état Hover (plus sombre et non plus clair) pour respecter les normes d'ergonomie.

Références utilisées :

DSFR : Système de Design de l'État.

Système de grille : Utilisation de l'unité v (multiples de 8px) pour la cohérence spatiale.

## Séance du Lundi 23 Mars (Après-midi)

## 1. Amélioration de l'Interface Utilisateur (UI)

Ajustements visuels pour mettre en valeur le contenu tout en respectant la sobriété du DSFR.

Optimisation du contraste (Derniers Profils) : Création d'une "délimitation de zone" avec un fond gris très clair (`Bg-disable`) pour faire ressortir les cartes blanches (effet "pop") sans surcharger le design.

Création de la section "Chiffres Clés" : Conception d'un atome réutilisable `Stat_Card` (chiffre `Display` + légende) intégré sur un bandeau pleine largeur `Blue-France` pour apporter de la crédibilité via un fort contraste.

## 2. Conception des Composants et Layouts

Structuration des éléments réutilisables pour préparer l'intégration CSS (Flexbox/Grid).

Section Valeurs et Arguments : Création d'un composant standard `Feature_Block` (Icône + Titre + Texte) avec des espacements stricts (Gap 16px, Padding 24px) et un alignement horizontal "Space between".

Intégration optimisée des assets : Utilisation du plugin Iconify pour intégrer des icônes vectorielles professionnelles (Mentorat, Opportunités, Visibilité) facilement manipulables et aux couleurs de la charte.

## 3. Expérience Utilisateur (UX) et Éditorial

Ajustement du rythme de la page pour éviter la monotonie visuelle et guider la lecture.

Section éditoriale asymétrique (50/50) : Disposition en deux colonnes (50% Texte / 50% Image) pour casser la symétrie des grilles précédentes et apporter une dimension narrative.

Génération d'assets sur-mesure : Rédaction d'un prompt Midjourney ciblé pour générer une photographie institutionnelle, lumineuse et inclusive, illustrant la collaboration professionnelle.

## 4. Architecture Logique et Choix Back-End

Réflexions de "Lead Développeur" appliquées aux décisions d'interface.

Sécurité et base de données (CTA) : Refus d'un bouton d'inscription libre pour privilégier un système fermé (comptes provisionnés par le Greta), évitant la gestion de faux profils et sécurisant la BDD.

Adaptation du parcours utilisateur : Remplacement du bouton d'inscription par un bloc "Explorez l'annuaire" pour ne pas laisser l'utilisateur face à un "mur" en fin de page.

## 5. Conformité Institutionnelle et Accessibilité

Respect strict des normes obligatoires du Design System de l'État (RGAA / DSFR).

Conception du Footer DSFR : Création d'un Master Component pensé en blocs (divs `Footer_Top` et `Footer_Bottom`) pour calquer la future intégration HTML/CSS.

Intégration des obligations légales : Ajout de la bordure signature `Blue-France`, des liens institutionnels obligatoires, des pages légales et de la licence Etalab-2.0.
