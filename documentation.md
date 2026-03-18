# 📓 Journal de Bord - Projet ALUMNI GRETA

## 📅 Séance du Mercredi 17 Mars 2026 

### 🎯 Évolution du Concept (Pivot)
Suite aux retours des cadres du GRETA (notamment suite à l'envoi du questionnaire technique), le projet a été recentré :
- **Cible prioritaire :** Les usagers actuels en cours de formation.
- **Besoin identifié :** Recherche active de lieux de stage et premier emploi via le réseau.
- **Fonction centrale :** L'Annuaire des Apprenants (le "qui fait quoi et où").

### 💾 Réflexions sur la Base de Données
L'après-midi a été consacré à la modélisation. Choix effectués :
1. **Structure Relationnelle (MySQL) :** Indispensable pour lier les apprenants aux entreprises de stage récurrentes.
2. **Architecture des Tables :**
    - Mise en place d'une table `Entreprises` robuste pour transformer l'annuaire en base de données de prospection pour les stagiaires.
    - Ajout d'un champ `Statut_Recherche` (En recherche de stage / En poste) pour filtrer les profils actifs.
3. **Optimisation :** Séparation des données d'identité et des données de parcours pour respecter le RGPD tout en permettant des statistiques fiables. (Après réalisation de recherche sur le RGPD concernant le client cible "éducation National")

### 📧 Validation Direction
Le questionnaire a été validé pour sa précision technique et sera transmis à **Thierry Colin (Directeur)** pour élargir la vision stratégique du projet - toujours en attente de sa réponse.

---

## 🛠️ Stack Technique retenue
- **Front-end :** React.js (pour la réactivité de l'annuaire).
- **Styling :** Tailwind CSS (pour un design pro respectant les codes du GRETA).
- **Back-end :** PHP (pour la robustesse du traitement des données) - attente de la réunion avec Julien voir si c'est bien PHP(version?) ou sinon ?ASP?