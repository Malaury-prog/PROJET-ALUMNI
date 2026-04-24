DROP DATABASE IF EXISTS alumni_greta;
CREATE DATABASE alumni_greta CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE alumni_greta;

CREATE TABLE roles (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE statuts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE villes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    code_postal VARCHAR(5) NOT NULL
)ENGINE= InnoDB;

CREATE TABLE secteurs_greta (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom_secteur VARCHAR(100) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE utilisateurs (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    avatar_illustre VARCHAR(255),
    avatar_url VARCHAR(255),
    description TEXT,
    titre_poste VARCHAR(150),
    telephone VARCHAR(20),
    consentement_rgpd BOOLEAN NOT NULL DEFAULT FALSE,
    ville_id INT UNSIGNED,
    statut_id INT UNSIGNED,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (ville_id) REFERENCES villes(id),
    FOREIGN KEY (statut_id) REFERENCES statuts(id)
) ENGINE=InnoDB;

CREATE TABLE formations (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(150) NOT NULL,
    code VARCHAR(50),
    type_produit VARCHAR(100),
    url_fiche VARCHAR(255),
    secteur_id INT UNSIGNED,
    FOREIGN KEY (secteur_id) REFERENCES secteurs_greta(id)
) ENGINE=InnoDB;

CREATE TABLE entreprises (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(150) NOT NULL,
    activite VARCHAR(100),
    est_partenaire BOOLEAN NOT NULL DEFAULT FALSE,
    ville_id INT UNSIGNED,
    secteur_id INT UNSIGNED, 
    FOREIGN KEY (ville_id) REFERENCES villes(id),
    FOREIGN KEY (secteur_id) REFERENCES secteurs_greta(id)
) ENGINE=InnoDB;

CREATE TABLE utilisateur_roles(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT UNSIGNED NOT NULL,
    role_id INT UNSIGNED NOT NULL, 
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
) ENGINE=InnoDB;

CREATE TABLE sessions (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    formation_id INT UNSIGNED NOT NULL,
    ville_id INT UNSIGNED,
    libelle VARCHAR(100),
    date_debut date,
    date_fin date,
    FOREIGN KEY (formation_id) REFERENCES formations (id),
    FOREIGN KEY (ville_id) REFERENCES villes(id)
) ENGINE=InnoDB;

CREATE TABLE reseaux (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT UNSIGNED NOT NULL,
    nom_plateforme VARCHAR (100) NOT NULL,
    url TEXT NOT NULL,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id)
) ENGINE=InnoDB;

CREATE TABLE contacts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100),
    email VARCHAR(150),
    telephone VARCHAR(20),
    role VARCHAR(50),
    entreprise_id INT UNSIGNED,
    FOREIGN KEY (entreprise_id) REFERENCES entreprises(id)
) ENGINE=InnoDB;

CREATE TABLE formation_ville (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    formation_id INT UNSIGNED NOT NULL,
    ville_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (formation_id) REFERENCES formations(id),
    FOREIGN KEY (ville_id) REFERENCES villes(id)
) ENGINE=InnoDB;

CREATE TABLE parcours (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT UNSIGNED NOT NULL,
    formation_id INT UNSIGNED NOT NULL, 
    session_id INT UNSIGNED,
    entreprise_id INT UNSIGNED,
    commentaires TEXT,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (formation_id) REFERENCES formations(id),
    FOREIGN KEY (session_id) REFERENCES sessions(id),
    FOREIGN KEY (entreprise_id) REFERENCES entreprises(id)
) ENGINE=InnoDB;