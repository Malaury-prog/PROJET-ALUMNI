<?php
class Database
{
  private $host = 'localhost:8000';
  private $dbname = 'alumni_greta';
  private $username = 'Malaury';
  private $password = '1@mot@passe';

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
