<?php
header('Content-Type: application/json');

require_once __DIR__ . '/../Database.php';

$database = new Database();
$connexion = $database->getConnection();

$requete = $connexion->query("SELECT id, nom, prenom, email, avatar_illustre, titre_poste, telephone
FROM utilisateurs");
$utilisateurs = $requete->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($utilisateurs);
