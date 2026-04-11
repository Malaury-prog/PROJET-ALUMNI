import React from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

/**
 * Page 404 — Page non trouvée
 * @returns {JSX.Element}
 */
export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-3w text-center gap-4v">
      <h1 className="text-h1 md:text-h1-desktop font-weight-bold text-blue-france">
        Erreur 404
      </h1>
      <p className="text-body text-text-secondary max-w-md">
        Oups ! Cette page est partie en stage... et elle n'a pas laissé
        d'adresse.
      </p>
      <p className="text-small text-text-secondary max-w-md">
        La page que vous recherchez n'existe pas ou a été déplacée. Revenez sur
        le bon chemin !
      </p>
      <Button
        label="Retour à l'accueil"
        variant="primary"
        onClick={() => navigate("/")}
      />
    </div>
  );
}
