<?php
header('Content-Type: application/json');

require_once __DIR__ . '/../Database.php';

$database = new Database();
$connexion = $database->getConnection();

$requete = $connexion->query("
    SELECT 
        u.id,
        u.nom,
        u.prenom,
        u.avatar_illustre,
        u.description,
        u.titre_poste,
        s.libelle AS labelStatut,
        f.titre AS formation,
        se.libelle AS promo,
        CONCAT(YEAR(se.date_debut), '-', YEAR(se.date_fin)) AS annee
    FROM utilisateurs u
    LEFT JOIN statuts s ON u.statut_id = s.id
    LEFT JOIN parcours p ON p.utilisateur_id = u.id
    LEFT JOIN formations f ON p.formation_id = f.id
    LEFT JOIN sessions se ON p.session_id = se.id
");

$utilisateurs = $requete->fetchAll(PDO::FETCH_ASSOC);

// Récupérer les réseaux pour chaque utilisateur
foreach ($utilisateurs as &$user) {
  $reqReseaux = $connexion->prepare("
        SELECT nom_plateforme, url FROM reseaux WHERE utilisateur_id = ?
    ");
  $reqReseaux->execute([$user['id']]);
  $reseaux = $reqReseaux->fetchAll(PDO::FETCH_ASSOC);

  $user['github'] = null;
  $user['linkedin'] = null;
  foreach ($reseaux as $reseau) {
    if ($reseau['nom_plateforme'] === 'github') $user['github'] = $reseau['url'];
    if ($reseau['nom_plateforme'] === 'linkedin') $user['linkedin'] = $reseau['url'];
  }
}

echo json_encode($utilisateurs);
