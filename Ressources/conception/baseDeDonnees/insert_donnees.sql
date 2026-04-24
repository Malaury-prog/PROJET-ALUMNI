USE alumni_greta;

INSERT INTO villes (nom, code_postal) VALUES
  ('Chaumont', '52000'),
  ('Brottes',  '52120'),
  ('Pinon',    '02230');

INSERT INTO secteurs_greta (nom_secteur) VALUES
  ('Chaumont'),
  ('Troyes');

INSERT INTO roles (libelle) VALUES
  ('apprenant'),
  ('alumni'),
  ('formateur'),
  ('admin');

INSERT INTO statuts (libelle) VALUES
  ('En formation'),
  ('En poste'),
  ('En recherche'),
  ('Indisponible');

INSERT INTO formations (titre, code, type_produit, url_fiche, secteur_id) VALUES
  ('Développeur Web et Web Mobile', 'TP-DEV-WEB', 'Numérique', 'https://www.francecompetences.fr/recherche/rncp/31114/', 1);

INSERT INTO entreprises (nom, activite, est_partenaire, ville_id, secteur_id) VALUES
  ('GRETA Sud Champagne', 'Organisme de formation', FALSE, 1, 1),
  ('HBD France Finance',  'Finance',                FALSE, 3, 1);

INSERT INTO sessions (formation_id, ville_id, libelle, date_debut, date_fin) VALUES
  (1, 1, 'TP Dev Web Chaumont 2025-2026', '2025-09-01', '2026-06-30');

INSERT INTO utilisateurs
  (nom, prenom, email, password, avatar_illustre, description, titre_poste, telephone, consentement_rgpd, ville_id, statut_id)
VALUES
  (
    'Cousin', 'Malaury', 'cousin.mal3@gmail.com',
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    'images/avatars/avatar (4).png',
    'Passionnée par le développement web et le design, je suis en formation au GRETA Sud Champagne où je développe l annuaire Alumni. J aime créer des interfaces accessibles et soignées, en respectant les standards du web.',
    'Développeuse Web · Stagiaire',
    '03.22.22.22.22',
    TRUE, 2, 1
  ),
  (
    'Trehard', 'Charly', 'charly.trehard@gmail.com',
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    'images/avatars/avatar (2).png',
    'Développeur web en formation au GRETA Sud Champagne, actuellement en stage chez HBD France Finance. Curieux et rigoureux, j aime résoudre des problèmes techniques et apprendre de nouvelles technologies.',
    'Développeur Web · Stagiaire',
    '06.12.34.56.78',
    TRUE, 1, 1
  ),
  (
    'Sauvageot', 'David', 'david.sauvageot@gretasudchampagne.com',
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    'images/avatars/avatar (1).png',
    'Formateur au GRETA Sud Champagne, référent numérique et développement web.',
    'Formateur · Développeur Web',
    '03.25.25.25.25',
    TRUE, 1, 2
  );

INSERT INTO utilisateur_roles (utilisateur_id, role_id) VALUES
  (1, 1),
  (1, 4),
  (2, 1),
  (3, 3),
  (3, 4);

INSERT INTO reseaux (utilisateur_id, nom_plateforme, url) VALUES
  (1, 'linkedin', 'https://www.linkedin.com/in/malaury-c-952b77236/'),
  (1, 'github',   'https://github.com/Malaury_prog'),
  (2, 'github',   'https://github.com/charly43965');

INSERT INTO parcours (utilisateur_id, formation_id, session_id, entreprise_id, commentaires) VALUES
  (1, 1, 1, 1, 'Stage au GRETA Sud Champagne — développement de l annuaire Alumni GRETA, de la conception à la mise en production.'),
  (2, 1, 1, 2, 'Stage chez HBD France Finance à Pinon — développement et intégration d outils web internes.');