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
| Style | Taille | Graisse | Line-Height (v) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop / H1** | 40px | Bold (700) | **12v** (48px) | Titre principal |
| **Desktop / H2** | 32px | Bold (700) | **10v** (40px) | Titres de section |
| **Desktop / H3** | 28px | Bold (700) | **9v** (36px) | Sous-sections |
| **Desktop / H4** | 24px | Bold (700) | **8v** (32px) | **Noms sur les cartes** |
| **Desktop / Body** | 16px | Regular (400) | **6v** (24px) | Texte courant |
| **Mobile / H1** | 32px | Bold (700) | **10v** (40px) | Titre mobile |

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

## Séance du Jeudi 26 Mars 2026 (Mise à jour 13h45)

### Matinée : Finalisation Design & Client
- **Présentation Client** : Validation de la logique des onglets et du système d'avatars par la cliente principale.
- **Section Entreprise** : Création et intégration du bloc "Entreprise" (Desktop & Mobile) dans le profil, incluant le slot pour l'URL professionnelle.
- **Infrastructure Technique Multi-support** : Initialisation d'une **Machine Virtuelle (VM)** sur PC portable. Cette configuration permet de délocaliser les tests et de maintenir la communication sur deux supports simultanément durant les phases de développement.
- **Design System Mobile** : Application des variables DSFR (Textes, Couleurs, Spacing) sur l'intégralité des frames mobiles.

### Objectifs de l'Après-midi
- [ ] **Dashboard Admin** : Conception de l'interface de pilotage (KPIs et gestion tabulaire des Alumni).
- [ ] **Vérification de données (BTS)** : Audit complet des informations collectées pour assurer la validité des futures insertions SQL.
- [ ] **Cross-check BDD/Figma** : Audit final pour vérifier que chaque champ visuel correspond à une colonne SQL (et inversement).
- [ ] **Initialisation Backend** : Rédaction du script de création SQL dans Visual Studio Code.
- [ ] **Setup Front-end** : Installation du package **React** et configuration de l'environnement Tailwind CSS (liaison des variables DSFR).

### 📅 Objectif Week-end
- **Lancement de l'intégration** : Passage du design au code (HTML/CSS/Tailwind/React).