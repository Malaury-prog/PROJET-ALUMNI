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

### 🛡️ Conformité & Données Réelles (RGPD)
- **Collecte Validée :** Présentation du projet à la classe de BTS et signature du formulaire de consentement éclairé.
- **Privacy by Design :** Validation du modèle de données incluant la distinction entre l'usage "Prototype/Examen" et "Déploiement/Production".
- **Data Audit :** Récupération des 9 points de données (Identité, Contact, Ville, Stage, LinkedIn, etc.) en respectant le droit à l'image (option avatar).

### 🏗️ Infrastructure & Auto-Hébergement
- **Setup Serveur Local :** Étude et préparation de l'installation d'un serveur domestique sur une tour PC dédiée.
- **Solution Logicielle :** Configuration prévue sous **YunoHost** pour faciliter l'auto-hébergement, la gestion des mails et la sécurisation SSL (Let's Encrypt).
- **Compétences SysAdmin :** Apprentissage des bases de l'administration serveur, de l'ouverture des ports et de la gestion d'un environnement de production "at home".

### 📧 Communication Stratégique
- **Audit Technique :** Envoi du questionnaire à l'informaticien référent du GRETA (Compatibilité PHP 8.5, protocoles de sauvegarde, accès SSH).
- **Qualité & Accessibilité :** Envoi des préconisations à la Responsable Qualité (Respect du DSFR, accessibilité RGAA et processus de modération).

### 🎯 État d'avancement Global
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
  *Justification : Rapidité de résolution et neutralité du réseau.*

## 3. Stratégie de Partitionnement et Boot
L'installation a été réalisée sur un disque NVMe avec une table de partitionnement GPT.

- **Partition 1 (ESP) :** Gestion de l'amorçage EFI. *Note : Une erreur initiale a été rencontrée puis résolue lors de la finalisation du partitionnement.*
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