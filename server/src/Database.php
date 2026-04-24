<?php
class Database
{
  private $host = 'localhost'; // On met pas le port ici. C'est juste le nom d'hôte! Le port est défini quand tu fais la commande php -S localhost:8000 hehe
  private $dbname = 'alumni_greta';
  private $username = 'root'; // Puisque tu es en local, ça doit être le username MySQL local malaurydb.
  private $password = 'root'; // Puisque tu es en local, ça doit être le password MySQL local la grande c.

  public function getConnection()
  {
    try {
      // Utiliser "$this->quelqueChose" car la fonction n'a autrement pas accès aux variables de la classe dans laquelle elle est
      $connexion = new PDO("mysql:host={$this->host};dbname={$this->dbname}", $this->username, $this->password);

      // C'est aussi une bonne pratique de mettre les erreurs et exceptions pour que ça te retourne des erreurs en cas... d'erreur
      $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $connexion;
    } catch (PDOException $error) {
      echo "Erreur de connexion: " . $error->getMessage();
      return null;
    }
  }
}
