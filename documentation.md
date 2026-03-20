# Journal de Bord - Projet ALUMNI GRETA

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
* **Approche "From Scratch" :** Choix de ne pas utiliser de bibliothèque UI Kit externe pour démontrer la maîtrise des fondamentaux du Design System et le respect de la charte **DSFR (Marianne)**.
* **Gestion des Variables :**
    * **Spacing :** Mise en place d'un système modulaire basé sur l'unité **`v` (4px)** pour garantir une grille de construction rigoureuse.
    * **Line-height :** Liaison dynamique de l'interlignage avec les variables de spacing (`8v`, `10v`, etc.) pour une cohérence verticale parfaite.

    ### 📖 Guide de Style Typographique (Marianne)

| Style | Taille | Graisse | Line-Height (v) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop / H1** | 40px | Bold (700) | **12v** (48px) | Titre principal |
| **Desktop / H2** | 32px | Bold (700) | **10v** (40px) | Titres de section |
| **Desktop / H3** | 28px | Bold (700) | **9v** (36px) | Sous-sections |
| **Desktop / H4** | 24px | Bold (700) | **8v** (32px) | **Noms sur les cartes** |
| **Desktop / Body** | 16px | Regular (400) | **6v** (24px) | Texte courant |
| **Desktop / Small** | 14px | Regular (400) | **5v** (20px) | Infos secondaires |
| | | | | |
| **Mobile / H1** | 32px | Bold (700) | **10v** (40px) | Titre mobile |
| **Mobile / H2** | 28px | Bold (700) | **9v** (36px) | Section mobile |
| **Mobile / H3** | 24px | Bold (700) | **8v** (32px) | Sous-titre mobile |
| **Mobile / H4** | 22px | Bold (700) | **7v** (28px) | Nom carte mobile |
| **Mobile / Body** | 16px | Regular (400) | **6v** (24px) | Texte mobile |
| **Mobile / Small** | 14px | Regular (400) | **5v** (20px) | Infos secondaires |

> **Note technique :** L'unité de base **1v** est fixée à **4px**. Toute modification de cette variable impactera l'ensemble du système d'espacement et d'interlignage du projet.


* **Typographie Responsive :**
    * Création de **12 Text Styles** organisés en dossiers (`Desktop/` et `Mobile/`).
    * Hiérarchie allant de **H1 à Small**, paramétrée pour s'adapter automatiquement aux différents terminaux.
* **Composants Avancés :**
    * Création de la **Carte Parent (Alumni)** en Auto Layout.
    * Développement d'atomes (**Tags/Badges**) avec propriétés de variantes (Orange/Gris) et propriétés booléennes pour une flexibilité maximale.

### Infrastructure & DevOps
* **Virtualisation :** Configuration d'un environnement de développement via **Oracle VirtualBox**.
* **Administration :** Déploiement de **YunoHost** pour la gestion centralisée de l'auto-hébergement.
* **Stack Technique (4 outils opérationnels) :**
    1. **phpMyAdmin :** Gestion et administration de la base de données.
    2. **My WebApp :** Serveur d'hébergement pour l'application Web.
    3. **n8n :** Automatisation de workflows et liaison de services.
    4. **Vaultwarden :** Gestion sécurisée des identifiants et accès de l'environnement.

### Data & Backend
* **Modélisation V3 :** Analyse et restructuration de la base de données (Tables `Users`, `Promotions`, `Social_Links`).
* **Objectif :** Mise en corrélation directe de la structure SQL avec les besoins identifiés lors de la création des composants Figma.

### Objectifs du Week-end
* Finalisation de l'intégralité des **Frames Figma** (Maquettes haute fidélité).
* Verrouillage du schéma de données **BDD V3**.
* Préparation du premier sprint de développement (Front-end & Backend).




## Séance du Vendredi 20 Mars 2026 (Matinée)
##  Architecture Base de Données - Évolution V3

###  Objectifs de la V3
Passage d'un modèle conceptuel à un schéma relationnel optimisé pour le développement Full Stack. L'architecture a été affinée pour respecter la 3ème Forme Normale (3NF), garantissant l'intégrité des données et des requêtes SQL performantes pour l'affichage de l'annuaire.

###  Fondations conservées (Héritage V1/V2)
* **Le Cœur Utilisateur :** Table `utilisateurs` centralisant l'authentification (mot de passe préparé pour le hashage en `VARCHAR(255)`) et les informations de profil.
* **L'Écosystème & Contacts :** Tables `entreprises`, `formations` et `contacts` pour structurer le maillage du réseau et conserver un suivi précis des interlocuteurs professionnels.
* **La Géographie :** La table de liaison `formation_ville` pour gérer correctement les formations dispensées sur plusieurs bassins géographiques.
* **Le Pivot Central :** La table `parcours`, table de liaison complexe retraçant l'historique complet de l'élève (quelle formation, quelle date, quelle entreprise).

###  Nouveautés et Optimisations (Ajouts spécifiques V3)
* **Table `reseaux` :** NOUVELLE table (relation 1-to-Many) isolant les liens externes (LinkedIn, GitHub, portfolio) de la table principale `utilisateurs`. Indispensable pour alimenter le bloc "Social Links" de la nouvelle carte UI.
* **Table `sessions` (Promotions) :** Séparation du "catalogue" (`formations`) et de la "cohorte" (`sessions`). Ajout crucial pour permettre le filtrage des Alumni par année de promotion.
* **Table `secteurs_greta` :** Création d'une table de référence pour normaliser les secteurs d'activité, évitant les doublons syntaxiques et fiabilisant les futurs menus déroulants.
* **Standardisation du Naming :** Application stricte des conventions de nommage SQL (`snake_case`, noms de tables au pluriel) pour le futur backend PHP.
* **Optimisation de l'UI :** Déplacement de la clé étrangère `statut_id` (badge "En poste") directement dans la table `utilisateurs` pour éviter une jointure SQL lourde lors de l'affichage de la grille de l'annuaire.

###  Choix Techniques & "Scoping" (Périmètre)
* **Exclusion de la table `competences` :** Décision métier assumée et validée. La disparité extrême des filières du réseau rendrait le maintien d'un dictionnaire de compétences ingérable. L'expression des acquis se fera via un champ texte libre (`description`), allégeant considérablement la base.