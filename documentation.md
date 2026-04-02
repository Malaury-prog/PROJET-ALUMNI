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

### 2. Étude de Projet et Réunion Stratégique

Entretien avec Laura pour définir les contours concrets du projet Alumni GRETA Sud Champagne.

- **Calendrier** : Réunion de présentation fixée au 10 avril avec un objectif de 85% de réalisation du projet.
- **Périmètre** : Le projet couvre 8 filières, dont 4 prioritaires (HRT, Tertiaire, Numérique, Industries).
- **Références et Veille** : Analyse du site BSB (Business School) comme référence ergonomique et fonctionnelle.
- **Conformité RGPD** : Nécessité de structurer le recueil d'informations (Google Forms) selon les normes de protection des données.
- **Missions annexes** : Prise de vues de la classe BTS et gestion administrative pour le référencement sur la plateforme DORA.

### 3. Analyse Fonctionnelle (Après-midi avec David)

Session de travail avec le formateur pour lever les incompréhensions techniques et structurer la phase de développement.

- **Audit Fonctionnel** : Définition précise des besoins utilisateurs et des services rendus par la plateforme.
- **User Cases** : Rédaction des cas d'utilisation pour modéliser les interactions entre les Alumni, les entreprises et l'administration.
- **Infrastructure** : Préparation d'un second questionnaire technique portant sur le déploiement, l'hébergement et la rédaction des mentions légales.
- **Docker** : Réflexion sur l'utilisation de Docker pour isoler l'environnement de développement et garantir la parité avec la production.

---

## Séance du Mardi 17 Mars 2026

### Évolution du Concept (Pivot)

Suite aux retours des cadres du GRETA, le projet est recentré sur les usagers en cours de formation pour faciliter la recherche de stages et le réseautage via un Annuaire des Apprenants.

### Réflexions sur la Base de Données

- Choix de MySQL pour la gestion des relations apprenants/entreprises.
- Création d'une table Entreprises orientée prospection.
- Segmentation des données pour la conformité RGPD (client Éducation Nationale).

### Stack Technique retenue

- **Front-end** : React.js.
- **Styling** : Tailwind CSS.
- **Back-end** : PHP.

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

- **LCP** : optimisation des médias.
- **INP** : réactivité des interactions.
- **CLS** : réservation des espaces via dimensions fixes en CSS.

### Évolution de la Base de Données (V1 vers V2)

- Revue de l'architecture avec le formateur sur DrawMySQL.
- Allègement de la structure par suppression de tables redondantes.
- Refactorisation des relations pour l'intégrité des données.

---

## Séance du Jeudi 19 Mars 2026 (Après-midi)

### Design System & UI (Figma)

- **Approche "From Scratch"** : Conception sans bibliothèque externe pour respecter la charte **DSFR (Marianne)**.
- **Gestion des Variables** :
  - **Spacing** : Unité modulaire **`v` (4px)**.
  - **Line-height** : Liaison dynamique avec les variables de spacing.

#### 📖 Guide de Style Typographique (Marianne)

| Style              | Taille | Graisse       | Line-Height (v) | Usage                   |
| :----------------- | :----- | :------------ | :-------------- | :---------------------- |
| **Desktop / H1**   | 40px   | Bold (700)    | **12v** (48px)  | Titre principal         |
| **Desktop / H2**   | 32px   | Bold (700)    | **10v** (40px)  | Titres de section       |
| **Desktop / H3**   | 28px   | Bold (700)    | **9v** (36px)   | Sous-sections           |
| **Desktop / H4**   | 24px   | Bold (700)    | **8v** (32px)   | **Noms sur les cartes** |
| **Desktop / Body** | 16px   | Regular (400) | **6v** (24px)   | Texte courant           |
| **Mobile / H1**    | 32px   | Bold (700)    | **10v** (40px)  | Titre mobile            |

### Infrastructure & DevOps

- **Virtualisation** : Configuration via **Oracle VirtualBox**.
- **Administration** : Déploiement de **YunoHost**.
- **Stack Opérationnelle** : phpMyAdmin, My WebApp, n8n, Vaultwarden.

---

## Séance du Vendredi 20 Mars 2026 (Matinée)

### Architecture Base de Données - Évolution V3

- **Objectif** : Passage à la 3ème Forme Normale (3NF).
- **Nouveautés** :
  - Table `reseaux` : Relation 1-to-Many pour les liens LinkedIn/GitHub.
  - Table `sessions` : Séparation des formations et des cohortes (promotions).
  - Table `secteurs_greta` : Normalisation des secteurs d'activité.
- **Scoping** : Exclusion de la table `competences` pour privilégier un champ `description` (TEXT) libre.

---

# DEUXIEME SEMAINE

## Séance du Lundi 23 Mars 2026

### Matinée : Fondations techniques

- **Variables Couleurs DSFR** : Blue-France (#000091), Hover (#1212BA), Active (#2727D5).
- **Atomes** : Création du bouton "Couteau Suisse" (Auto Layout, Hug contents) et de l'Input master (Label + Text + Error).
- **Organismes** : Header Responsive (Gap Auto) et Navigation Mobile (Burger Menu avec Drop Shadow).

### Après-midi : UI/UX Avancée

- **Contraste** : Utilisation du `Bg-disable` (#EEEEEE) pour détacher les cartes de profil.
- **Section Chiffres Clés** : Atome `Stat_Card` sur bandeau Blue-France.
- **Feature Block** : Icônes via Iconify (Mentorat, Opportunités, Visibilité).
- **IA Générative** : Utilisation de Midjourney pour créer une photographie institutionnelle inclusive.

---

## Séance du Mardi 24 Mars 2026

### Matinée : Structure et Profil

- **Grille** : 12 colonnes, largeur 1224px, gouttière 24px.
- **Page Annuaire** : Remplacement de la pagination par un bouton "Voir plus".
- **Page Profil (MVP)** : Layout 8/4 colonnes. Avatar 160px. Sidebar de contact grise.

### Après-midi : Formulaire et BDD

- **Mapping BDD** : Ajout des colonnes `description`, `titre_poste`, `consentement_rgpd` à la table `utilisateurs`.
- **Formulaire de profil** : Conteneur central de 8 colonnes. Système de sélection d'avatars illustrés.
- **Filtres** : Ajout du variant "En formation" pour le filtrage précis des stagiaires actuels.

---

## Séance du Mercredi 25 Mars 2026

### Journée : Recherche Utilisateur & Pivot

- **User Research** : Présentation devant une classe de BTS. Collecte de données réelles (noms, avatars) pour peupler le MVP.
- **Pivot UX Formulaire** : Passage à un système de **3 onglets** (Mon profil / Ma formation / Ma situation) pour une meilleure cohérence BDD.
- **Intégrité des données** : Utilisation stricte de menus `Select` pour éviter les doublons syntaxiques en SQL.

### Session de Nuit : Quick-Wins & Mobile

- **Frames de Sécurité** : Création des pages Login, Nouveau Mot de Passe (First Login) et Erreur 404.
- **Roadmap Mobile** : Définition du plan d'adaptation (Stacking vertical des formulaires).

---

## Séance du Jeudi 26 Mars 2026

### 🏁 État d'avancement (Matinée)

- **Section Entreprise :** Structure Desktop et Mobile terminée (avec slot URL).
- **Pages Annexes :** Création des frames Login, Changement de MDP (sécurité) et Erreur 404.
- **Infrastructure :** Initialisation d'une VM sur PC portable pour le développement flexible et multi-support.

### 🛠️ Objectifs de l'Après-midi

- [ ] **Audit des Variables DSFR :** Vérification et application systématique des couleurs (#000091), typographies (Marianne) et espacements (unités v) sur l'ensemble des frames.
- [ ] **Dashboard Admin :** Conception complète de l'interface de pilotage (KPIs et gestion des comptes).
- [ ] **Vérification Données BTS :** Audit des informations collectées pour l'insertion SQL.
- [ ] **Cross-check BDD/Figma :** Validation de la correspondance 1:1 entre les champs visuels et les colonnes SQL.
- [ ] **Initialisation Technique :** Rédaction du script SQL et installation de React/Tailwind.

### 📅 Objectif Week-end

- Lancement de l'intégration HTML/CSS/React.

## Journal de Bord - Jeudi 26 Mars 2026 (Après-midi)

### Conformité & Données Réelles (RGPD)

- **Collecte Validée :** Présentation du projet à la classe de BTS et signature du formulaire de consentement éclairé.
- **Privacy by Design :** Validation du modèle de données incluant la distinction entre l'usage "Prototype/Examen" et "Déploiement/Production".
- **Data Audit :** Récupération des 9 points de données (Identité, Contact, Ville, Stage, LinkedIn, etc.) en respectant le droit à l'image (option avatar).

### Infrastructure & Auto-Hébergement

- **Setup Serveur Local :** Étude et préparation de l'installation d'un serveur domestique sur une tour PC dédiée.
- **Solution Logicielle :** Configuration prévue sous **YunoHost** pour faciliter l'auto-hébergement, la gestion des mails et la sécurisation SSL (Let's Encrypt).
- **Compétences SysAdmin :** Apprentissage des bases de l'administration serveur, de l'ouverture des ports et de la gestion d'un environnement de production "at home".

### Communication Stratégique

- **Audit Technique :** Envoi du questionnaire à l'informaticien référent du GRETA (Compatibilité PHP 8.5, protocoles de sauvegarde, accès SSH).
- **Qualité & Accessibilité :** Envoi des préconisations à la Responsable Qualité (Respect du DSFR, accessibilité RGAA et processus de modération).

### État d'avancement Global

- [x] Formulaire RGPD rédigé et signé.
- [x] Stratégie d'hébergement définie (YunoHost).
- [x] Architecture BDD mise à jour avec les colonnes de consentement.
- [ ] À venir : Finalisation des frames mobiles "Tokenized".
- [ ] À venir : Conception du Dashboard Admin (Modération).

## Phase de Validation et Tests (Post-Déploiement)

# Journal d'Installation du Serveur de Développement - Malaury

Ce document retrace la configuration complète d'un serveur YunoHost sur une tour dédiée, utilisé comme environnement "Sandbox" pour l'apprentissage du développement Web / Web Mobile.

## 1. Identification de l'Infrastructure Réseau

Avant l'installation, les adresses IP ont été identifiées pour éviter les conflits.

- **Machine Cliente (PC Portable) :** Adresse IP locale identifiée via `ipconfig`.
- **Machine Serveur (Tour) :** Attribution d'une IP locale statique pour garantir la persistance des accès (ex: `xxx.xxx.x.x`).

## 2. Configuration Réseau du Serveur

Le paramétrage manuel a été privilégié pour stabiliser l'environnement Full Stack.

- **Masque de sous-réseau :** `255.255.255.0` (Classe C standard).
- **Passerelle (Gateway) :** IP de la Box Internet (ex: `xxx.x.x.x`).
- **Serveurs de noms (DNS) :**
  - Primaire : `1.1.1.1` (Cloudflare)
  - Secondaire : `80.67.169.12` (FDN)
    _Justification : Rapidité de résolution et neutralité du réseau._

## 3. Stratégie de Partitionnement et Boot

L'installation a été réalisée sur un disque NVMe avec une table de partitionnement GPT.

- **Partition 1 (ESP) :** Gestion de l'amorçage EFI. _Note : Une erreur initiale a été rencontrée puis résolue lors de la finalisation du partitionnement._
- **Partition 2 (Root /) :** Système de fichiers en `ext4` pour l'OS et les applications.
- **Partition 3 (Swap) :** Mémoire virtuelle de secours.

## 4. Configuration du Domaine et DNS Local

Choix d'une stratégie de "Sandbox" isolée d'Internet pour les phases de test.

- **Domaine choisi :** Domaine local (ex: `serveur-dev.local`).
- **Résolution locale :** Modification du fichier `hosts` sur le PC portable (`C:\Windows\System32\drivers\etc\hosts`) pour mapper le domaine sur l'IP statique de la tour.
- **Sécurité :** Accès HTTPS via certificat auto-signé (acceptation manuelle des alertes de sécurité pour le développement local).

## 5. Stack Technique et Outils de Développement

Le serveur est désormais équipé des briques logicielles fondamentales.

### Gestion de Base de Données : phpMyAdmin

- **Moteur :** MariaDB.
- **Usage :** Visualisation des données, création de schémas SQL et tests de requêtes.
- **Accès :** Sécurisé via le portail d'authentification unique (SSO).

### Environnement de Code : Custom Webapp

- **Serveur Web :** Nginx.
- **Runtime :** PHP-FPM.
- **Permissions :** Accès configuré sur "Visiteurs" (Public sur le LAN) pour faciliter les tests multi-appareils sans contrainte de login SSO systématique.

## 6. Prochaines Étapes de Développement

- [ ] Configurer l'extension **Remote - SSH** sur VS Code pour coder directement sur la tour.
- [ ] Initialiser un premier dépôt Git dans le dossier `/var/www/my_webapp`.
- [ ] Tester la connexion PDO entre la Webapp et la base de données MariaDB.

Conformément au protocole de test, les points suivants ont été vérifiés sur l'environnement local.

### 1. Accessibilité des Services

- **Portail Utilisateur :** Opérationnel.
- **Lien Webapp :** Testé et accessible via `https://[domaine].local/my_webapp`.
- **Lien Base de Données :** Interface phpMyAdmin accessible.

### 2. Connectivité SFTP (Transfert de fichiers)

- **Client utilisé :** FileZilla.
- **Protocole :** SFTP (SSH File Transfer Protocol) sur le port 22.
- **Statut :** Connexion établie avec l'utilisateur `admin`. Accès en écriture vérifié dans le répertoire `/var/www/my_webapp/www/`.
- **Vérification :** Capacité à téléverser des scripts PHP et des assets (images/CSS) sur le serveur.

### 3. Intégrité du Serveur de Base de Données

- **Système :** MariaDB.
- **Outil de gestion :** phpMyAdmin.
- **Validation :** Authentification réussie. La base de données dédiée à la Webapp est présente et manipulable (Privilèges vérifiés).

> **Conclusion de l'étape :** L'environnement Full Stack est prêt pour le développement. Le cycle "Code (VS Code) -> Transfert (SFTP) -> Visualisation (Navigateur) -> Gestion Data (phpMyAdmin)" est validé.

## Récapitulatif de session - 27/03/2026

### Architecture Technique & Développement

- **Structure HTML :** Implémentation d'une Landing Page sémantique avec navigation par ancres.
- **CSS Moderne :** Utilisation des variables :root et du Nesting natif pour une maintenabilité optimisée.
- **Composants :** Création d'un header persistant (Sticky) et de carrousels interactifs.
- **Interactivité :** Système de zoom modal (Lightbox) pour l'examen détaillé des assets Figma.

### Design System & Spacing (Pixel Perfect)

- **Grille Desktop (1440px) :** 12 colonnes, marges de 120px, gouttières de 24px.
- **Grille Mobile (375px) :** 4 colonnes, marges de 24px, gouttières de 16px.
- **Unités DSFR :** Adoption du pas de 4px (v) pour l'ensemble des marges (V) et paddings (W).
- **Contraste :** Validation des couleurs pour la conformité AA du RGAA.

### Préparation Jury & Posture

- Justification de la séparation entre l'UI de présentation (créativité) et l'UI produit (rigueur institutionnelle).
- Maîtrise du vocabulaire technique : interopérabilité, éco-conception et sémantique.

## Journal de Bord - Lundi 30 Mars 2026

## Architecture du Projet - Validation 30/03/2026

### Organisation des Dossiers

- **maquettes-avril :** Stockage du prototype statique HTML/CSS/JS (Livrable intermédiaire du 10 avril).
- **Ressources/conception :** Assets de design (Figma) et modélisation de données (MCD/Merise).
- **Ressources/references :** Documentation théorique et supports de cours liés à la structure MLD.

### Standardisation & Nomenclature

- Utilisation de termes anglais standards pour les dossiers techniques (`desktop`, `mobile`, `bg`).

### Note Pédagogique (Jury Juin)

"L'organisation monorepo adoptée ici permet de conserver l'historique complet du projet. On distingue nettement la phase de **Conception** (Ressources), la phase de **Prototypage** (Maquettes) et, prochainement, la phase de **Développement Industriel** (Client/Server). C'est une structure scalable qui minimise les erreurs de chemins d'accès et facilite le déploiement."

## Architecture de Sécurité : Le répertoire Public

### Implémentation du Web Root

- **Dossier /public :** Désigné comme l'unique racine web du serveur Backend.
- **index.php :** Mise en place d'un Front Controller servant de point d'entrée unique pour toutes les requêtes HTTP.

### Isolation des Composants Sensibles

- **Principe de moindre exposition :** En isolant le code métier (`src/`), les dépendances (`vendor/`) et la configuration (`.env`) en dehors du dossier public, on élimine les risques d'accès direct aux fichiers sensibles par URL.

### Note Pédagogique (Jury Juin)

"Le choix d'un dossier /public séparé est une norme de sécurité de l'industrie (standard sur Symfony ou Laravel). Cela garantit que si un utilisateur tente d'accéder à l'adresse `monsite.fr/.env`, il recevra une erreur 404 car le serveur ne connaît que le contenu du dossier public. C'est une protection proactive contre les cyberattaques de type 'Directory Traversal'."

## Stratégie d'Intégration et Design System

### Architecture des Composants

- **Modularité :** Adoption d'une structure orientée composants (`/src/components`).
- **Découplage :** Le fichier `App.jsx` sert de conteneur principal (Layout), tandis que les composants gèrent leur propre logique visuelle.

### Identité Visuelle (Typographie & Couleurs)

- **Variables CSS :** Centralisation des tokens de design dans le bloc `@theme` de Tailwind v4 pour une maintenance simplifiée.

### Note Pédagogique (Jury Juin)

"L'intégration ne se limite pas à reproduire un visuel, c'est la mise en place d'un système. En utilisant les variables CSS au sein du thème Tailwind v4, je crée un 'Single Source of Truth' (Source unique de vérité). Si la charte graphique de l'Alumni GRETA évolue, je ne modifie qu'une seule ligne de code pour mettre à jour l'ensemble de l'application. C'est une preuve de scalabilité."

---

## Organisation Structurelle & Identité Visuelle

### Architecture des Dossiers

- **src/pages/ :** Regroupement des vues principales pour une gestion optimisée du React Router.
- **src/components/ :** Bibliothèque de composants atomiques et modulaires.
- **src/assets/fonts/ :** Stockage local des polices de caractères pour garantir l'affichage multi-support.

### Typographie Officielle

- **Font :** Marianne (Police officielle du Système de Design de l'État - DSFR).
- **Méthode d'import :** Utilisation de la règle `@font-face` pour l'auto-hébergement, évitant ainsi la dépendance à des CDN externes et renforçant la confidentialité des données.

### Note Pédagogique (Jury Juin)

"L'utilisation de la police Marianne n'est pas qu'un choix esthétique, c'est une mise en conformité avec le **DSFR (Design System de l'État Français)**. Techniquement, l'auto-hébergement des polices améliore les performances (réduction du temps de latence DNS) et assure que le design reste identique, quel que soit l'appareil utilisé par le jury."

---

## Architecture de Navigation & Design Tokens

### Routage Applicatif

- **Bibliothèque :** `react-router-dom` v6+.
- **Concept :** Mise en place d'un système de navigation côté client (Client-Side Routing) pour une expérience utilisateur fluide (SPA).

### Systématisation du Design (Tokens)

- **Typographie :** Importation de la police Marianne (DSFR) et liaison avec le moteur Tailwind v4 via les variables CSS.
- **Couleurs :** Définition des constantes chromatiques (Bleu France, Or Luxury) extraites de la maquette Figma.
- **Unités :** Utilisation de l'échelle de 4px standard de Tailwind pour assurer la cohérence des marges et paddings.

### Note Pédagogique (Jury Juin)

"La mise en place de Design Tokens avant l'intégration permet de garantir l'homogénéité visuelle. Si le design système évolue, je ne modifie que les variables dans le bloc `@theme`. Concernant le routage, l'utilisation de React Router démontre ma compréhension des Single Page Applications : l'application ne recharge pas la page entière, elle 'swappe' dynamiquement les composants selon l'URL, optimisant ainsi les performances réseau et le confort de navigation."

## Typographie Responsive & Système de Radius

### Implémentation technique

- **Adaptabilité :** Double déclaration des échelles de texte (Desktop vs Mobile) pour garantir une lisibilité optimale sur tous les terminaux.
- **Radius Harmonique :** Utilisation d'une échelle d'arrondis progressive (4px à 16px) pour adoucir l'interface tout en restant dans les standards du DSFR.
- **Unités :** Conversion des valeurs Figma en pixels fixes dans le thème pour une fidélité 1:1.

### Note Pédagogique (Jury Juin)

"La gestion de la typographie responsive est un enjeu majeur d'accessibilité. En isolant les tailles de texte pour le mobile et le desktop dès la configuration du thème, je m'assure que l'expérience utilisateur reste cohérente sans effort supplémentaire lors de l'intégration. De plus, le système de 'Radius' permet de hiérarchiser les éléments : un petit arrondi pour les boutons, un plus grand pour les cartes de profil Alumni, créant ainsi une structure visuelle intuitive."

## Comprendre le passage du HTML au JSX

### Pourquoi le JSX ?

- **Nature du JSX :** Ce n'est pas du HTML, mais une extension syntaxique du JavaScript.
- **Rôle :** Il permet de décrire ce que l'interface utilisateur (UI) doit devenir. React se charge ensuite de transformer ce code en véritables balises DOM pour le navigateur.

### Logique de Décomposition

- **Le Composant :** C'est une fonction qui retourne un élément visuel.
- **Les Props :** Ce sont des paramètres que l'on passe au composant pour le personnaliser (ex: changer le texte du bouton).
- **Le Style :** Utilisation de constantes de texte pour stocker les classes Tailwind, ce qui rend le code plus lisible et facile à maintenir.

## Architecture Avancée : Composants à Variants

### Concept des Variants

- **Définition :** Utilisation d'un objet JavaScript servant de "dictionnaire" de styles.
- **Fonctionnement :** La prop `variant` sert de clé pour extraire dynamiquement les classes CSS Tailwind correspondantes.
- **Avantage :** Centralisation totale du design. Une modification dans le dictionnaire impacte tous les boutons du site instantanément.

### Analyse du code (Button.jsx)

1. **baseStyles :** Stocke les propriétés immuables (padding, police, bordures).
2. **stylesParCouleur :** Mappe les intentions (primary, danger) aux codes couleurs du Design System (Bleu-France, Rouge-Greta).
3. **Template Literal :** L'expression `${...}` permet de fusionner proprement les chaînes de caractères de styles.

## 📁 Nomenclature et Organisation des Ressources (Assets)

### 📋 Architecture du répertoire /assets

- **Classification par type :** Séparation stricte entre les polices (`fonts`), les éléments iconographiques (`icons`) et les médias visuels (`images`).
- **Sous-catégorisation :** Utilisation de répertoires dédiés pour les logos et les fonds de page (`backgrounds`) afin d'optimiser la gestion des ressources graphiques.

### 🔧 Logique de maintenance

- **Uniformisation :** Tous les médias sont centralisés dans `src/assets` pour bénéficier de la compilation et de l'optimisation par le bundler (Vite).
- **Évolutivité :** Cette structure permet d'ajouter de nouvelles catégories (ex: `videos` ou `json`) sans perturber l'arborescence existante.

## Séance du Mardi et Mercedi

-**Intégration HTML5 & REACT avec TAILWIND V4:** Echec de l'intégration, review de toutes la documentation afin de repartir sur de bonnes bases, TPDEV2025, Youtube ect. Voir Liens sur NOTIONS.

# Documentation - Projet Alumni GRETA

### Séance du jeudi 02/04/2026:

# Documentation - Projet Alumni GRETA

## Stack technique
- **Front-end** : React + Vite JS
- **Styles** : Tailwind CSS v4 + tokens DSFR
- **Back-end** : PHP vanilla (API REST)
- **BDD** : MariaDB + phpMyAdmin
- **Serveur** : YunoHost + Nginx (VM locale)

---

## Règles Tailwind v4 — Variables custom

Les variables CSS définies dans `@theme` génèrent automatiquement 
des classes Tailwind. Le namespace est retiré dans le nom de classe :

| Variable CSS | Classe Tailwind | Usage |
|---|---|---|
| `--spacing-6w` | `gap-6w` | gap |
| `--spacing-3w` | `px-3w` | padding horizontal |
| `--spacing-2v` | `py-2v` | padding vertical |
| `--color-blue-france` | `bg-blue-france` | fond |
| `--color-blue-france` | `text-blue-france` | texte |
| `--radius-default` | `rounded-default` | arrondi |
| `--font-marianne` | `font-marianne` | police |
| `--text-h4` | `text-h4` | taille texte |
| `--font-weight-bold` | `font-weight-bold` | graisse |

**Règle** : `--[namespace]-[nom]` → `[utilitaire]-[nom]`
Le namespace (`spacing`, `color`, `radius`...) disparaît.

---

## Import d'image avec Vite

Toujours importer les images comme un module — jamais de 
chemin relatif dans `src="..."` :
```jsx
// ✅ Correct
import logo from "../../assets/images/logos/fichier.png";
<img src={logo} />

// ❌ Incorrect
<img src="../../assets/images/logos/fichier.png" />
```

**Pourquoi ?** Vite compile et optimise les fichiers. 
Sans import, le chemin devient invalide au build.

**Exception** : les fichiers dans `public/` peuvent être 
appelés directement sans import.

---

## Composants React — Structure de base

Deux syntaxes valides et équivalentes :
```jsx
// Syntaxe 1 — Arrow function
const MonComposant = ({ prop1, prop2 }) => {
  return (
    <div>{prop1}</div>
  );
};
export default MonComposant;

// Syntaxe 2 — Function declaration (Charly)
export default function MonComposant({ prop1, prop2 }) {
  return (
    <div>{prop1}</div>
  );
}
```

**3 éléments obligatoires** :
1. Définition de la fonction
2. `return (...)` avec parenthèse sur la même ligne
3. `export default NomComposant`

---

## Props — Passer des données à un composant
```jsx
// Définition avec valeurs par défaut
const Button = ({ 
  label, 
  onClick, 
  variant = "primary",   // valeur par défaut
  disabled = false       // valeur par défaut
}) => { ... };

// Utilisation
<Button label="Connexion" variant="primary" />
<Button label="S'inscrire" variant="accent" />
<Button label="Annuler" disabled={true} />
```

---

## Rendu conditionnel

Afficher un élément seulement si une condition est vraie :
```jsx
// React
{estConnecte && <a href="/profil">Mon profil</a>}

// Équivalent PHP
if ($estConnecte) {
    echo '<a href="/profil">Mon profil</a>';
}
```

---

## .map() — Boucle sur un tableau

Équivalent du `foreach` PHP pour afficher une liste :
```jsx
// React
apprenants.map((apprenant) => (
  <CarteApprenant 
    nom={apprenant.nom} 
    formation={apprenant.formation} 
  />
))

// Équivalent PHP
foreach ($apprenants as $apprenant) {
    echo "<div>" . $apprenant['nom'] . "</div>";
}
```

---

## Commentaires en JSX
```jsx
// ✅ Correct — dans le JSX
{/* Mon commentaire */}

// ❌ Incorrect — dans le JSX
// Mon commentaire
```

---

## Flex et justify-between

`justify-between` écarte les **enfants directs** entre eux.
`w-full` obligatoire sur le conteneur sinon pas d'espace à écarter.
```jsx
// ✅ Correct — 3 enfants directs
<header className="flex justify-between w-full">
  <Logo />          {/* enfant 1 — poussé à gauche */}
  <nav />           {/* enfant 2 — centré */}
  <Button />        {/* enfant 3 — poussé à droite */}
</header>

// ❌ Incorrect — 1 seul enfant, rien à écarter
<header className="flex justify-between">
  <div>
    <Logo />
    <Button />
  </div>
</header>
```

---

## Largeur maximale DSFR

Centrer le contenu avec une largeur max conforme DSFR :
```jsx
<header className="w-full bg-bg-default">
  <div className="max-w-7xl mx-auto px-3w py-2v flex justify-between items-center">
    ...
  </div>
</header>
```

- `max-w-7xl` = 1280px (proche des 1224px du DSFR)
- `mx-auto` = centré horizontalement

---

## Style CSS inline en React

Pour les propriétés CSS non disponibles en Tailwind 
(ex: background-image) :
```jsx
<section
  style={{
    backgroundImage: `url(${heroBg})`,  // url() obligatoire pour background-image
    backgroundSize: "cover",             // camelCase (pas background-size)
    backgroundPosition: "center",
  }}
>
```

**Règle** : les tirets CSS deviennent des majuscules en React
(`background-size` → `backgroundSize`)

---

## Chemins relatifs — Règle de navigation

Depuis `src/layout/Hero.jsx` :
```
../../assets/...        → remonte layout/ puis src/
../components/common/   → remonte layout/, entre dans components/
```

Depuis `src/components/common/Logo.jsx` :
```
../../assets/...        → remonte common/ puis components/
```

**Astuce** : glisser un fichier depuis l'explorateur VSCode 
dans le code génère automatiquement le bon chemin.

---

## Tokens JWT — 4 méthodes de stockage

| Méthode | Persiste | Accessible JS | Sécurité |
|---|---|---|---|
| localStorage | Oui | Oui | Faible |
| sessionStorage | Onglet | Oui | Faible |
| Cookie HttpOnly | Oui | **Non** | **Forte** |
| Mémoire JS | Non | Oui | Forte |

**Pour ce projet** : Cookie `HttpOnly` généré par PHP.
JavaScript ne peut pas le lire → protégé contre XSS.

---

## Pièges courants

- `gap-spacing-6w` ❌ → `gap-6w` ✅
- `// commentaire` dans JSX ❌ → `{/* commentaire */}` ✅  
- `src="../../image.png"` ❌ → `import img` puis `src={img}` ✅
- `return` seul sur sa ligne ❌ → `return (` sur la même ligne ✅
- `<li>` vide ❌ → commentaire JSX en dehors des `<li>` ✅
- Chemin absolu dans import ❌ → chemin relatif `../../` ✅

---

## Avancement du projet

### Composants terminés
- [x] `Button.jsx` — 3 variantes (primary, accent, outline)
- [x] `Logo.jsx` — logo RF + texte "Annuaire ALUMNI"
- [x] `Header.jsx` — nav complète avec justify-between
- [x] `Hero.jsx` — image de fond + titre + bouton

### À faire
- [ ] Carrousel Hero (2 images en défilement)
- [ ] Section "Découvrez les derniers profils"
- [ ] Section "Notre Mission"
- [ ] Section chiffres clés
- [ ] Section features (Mentorat, Opportunités, Visibilité)
- [ ] Section CTA finale
- [ ] Footer
- [ ] Page Annuaire
- [ ] Page Profil
- [ ] Formulaire d'inscription
- [ ] Page Login
- [ ] Dashboard Admin
- [ ] Back-end PHP (API REST)
- [ ] Connexion BDD MariaDB