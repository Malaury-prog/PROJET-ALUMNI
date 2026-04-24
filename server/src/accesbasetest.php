<?php
$host = '192.168.1.22'; // nom d'hôte
$name = 'alumni_greta'; // nom de la base de données
$user = 'Malaury_Bd'; // nom d'utilisateur
$pass = 'x.Y*I//cz*]DFXDM'; // mot de passe
$charset = 'utf8';

$dsn = "mysql:host=$host; dbname=$name; charset=$charset";

$opt = [
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	PDO::ATTR_EMULATE_PREPARES => false,
];

try {
	$pdo = new PDO($dsn, $user, $pass, $opt);
	echo 'Connection ok oufff :)';
} catch (PDOException $e) {
	echo "Connection non réalisée grrr!!: " . $e->getMessage();
}
