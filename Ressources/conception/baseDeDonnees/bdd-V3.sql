-- ==========================================
-- 1. TABLES DE RÉFÉRENCE (Les dictionnaires)
-- ==========================================

CREATE TABLE roles (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    libelle VARCHAR(50) NOT NULL
);

CREATE TABLE villes (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    code_postal VARCHAR(10)
);

CREATE TABLE statuts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    libelle VARCHAR(100) NOT NULL -- Ex: "En poste", "En recherche"
);

CREATE TABLE secteurs_greta (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nom_secteur VARCHAR(100) NOT NULL UNIQUE
);


-- ==========================================
-- 2. FORMATIONS & SESSIONS (Le catalogue)
-- ==========================================

CREATE TABLE formations (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(150) NOT NULL,
    code VARCHAR(50),
    description TEXT
);

-- Table de liaison Villes/Formations
CREATE TABLE formation_ville (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    ville_id BIGINT,
    formation_id BIGINT,
    FOREIGN KEY (ville_id) REFERENCES villes(id),
    FOREIGN KEY (formation_id) REFERENCES formations(id)
);

CREATE TABLE sessions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    formation_id BIGINT NOT NULL,
    annee_debut INT NOT NULL,
    annee_fin INT NOT NULL,
    libelle VARCHAR(100),
    FOREIGN KEY (formation_id) REFERENCES formations(id)
);


-- ==========================================
-- 3. UTILISATEURS (Le cœur du système)
-- ==========================================

CREATE TABLE utilisateurs (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar_url VARCHAR(255),
    consentement_rgpd BOOLEAN DEFAULT FALSE,
    creation_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    role_id BIGINT,
    ville_id BIGINT,
    statut_id BIGINT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (ville_id) REFERENCES villes(id),
    FOREIGN KEY (statut_id) REFERENCES statuts(id)
);

CREATE TABLE reseaux (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    utilisateur_id BIGINT,
    nom_plateforme VARCHAR(100),
    url TEXT,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id)
);


-- ==========================================
-- 4. ÉCOSYSTÈME PRO (Entreprises & Parcours)
-- ==========================================

CREATE TABLE entreprises (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(150) NOT NULL,
    activite VARCHAR(100),
    est_partenaire BOOLEAN DEFAULT FALSE,
    ville_id BIGINT,
    secteur_id BIGINT,
    FOREIGN KEY (ville_id) REFERENCES villes(id),
    FOREIGN KEY (secteur_id) REFERENCES secteurs_greta(id)
);

CREATE TABLE contacts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(150),
    telephone VARCHAR(20),
    role VARCHAR(50),
    entreprise_id BIGINT,
    FOREIGN KEY (entreprise_id) REFERENCES entreprises(id)
);

CREATE TABLE parcours (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    utilisateur_id BIGINT,
    formation_id BIGINT,
    session_id BIGINT,
    entreprise_id BIGINT,
    date_debut DATE,
    date_fin DATE,
    commentaires TEXT,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (formation_id) REFERENCES formations(id),
    FOREIGN KEY (session_id) REFERENCES sessions(id),
    FOREIGN KEY (entreprise_id) REFERENCES entreprises(id)
);