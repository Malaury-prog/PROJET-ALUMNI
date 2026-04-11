import React, { useState } from "react";
import Button from "../components/common/Button";

/**
 * Page de connexion — Alumni GRETA
 * @returns {JSX.Element}
 */
export default function ConnexionPage() {
  const [identifiant, setIdentifiant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  /**
   * Gère la soumission du formulaire
   * @param {React.FormEvent} e - Événement de soumission
   * @returns {void}
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Connexion avec :", identifiant);
  };

  return (
    <div className="min-h-screen bg-bg-default flex items-center justify-center px-3w">
      <div className="w-full max-w-md">
        <h1 className="text-h1 md:text-h1-desktop font-weight-bold text-blue-france mb-8v text-center">
          Se connecter
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4v">
          <div className="flex flex-col gap-1v">
            <label
              htmlFor="identifiant"
              className="text-body font-weight-bold text-text-main"
            >
              Identifiant / Mail
            </label>
            <input
              id="identifiant"
              type="email"
              placeholder="Saisir votre email"
              value={identifiant}
              onChange={(e) => setIdentifiant(e.target.value)}
              className="border border-border-default rounded-default px-2w py-2v text-body text-text-main focus:outline-none focus:border-blue-france"
            />
          </div>

          <div className="flex flex-col gap-1v">
            <label
              htmlFor="motDePasse"
              className="text-body font-weight-bold text-text-main"
            >
              Mot de passe
            </label>
            <input
              id="motDePasse"
              type="password"
              placeholder="Saisir votre mot de passe"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              className="border border-border-default rounded-default px-2w py-2v text-body text-text-main focus:outline-none focus:border-blue-france"
            />
          </div>
          <div className="mt-2v flex justify-center">
            <Button label="Se connecter" variant="primary" />
          </div>
        </form>
        <div className="flex flex-row items-center justify-center gap-2v mt-4v">
          <a
            href="#"
            className="text-body text-blue-france underline hover:text-blue-france-hover"
          >
            Pas encore inscrit ?
          </a>
          <a
            href="#"
            className="text-body text-blue-france underline hover:text-blue-france-hover"
          >
            Mot de passe oublié ?
          </a>
        </div>
      </div>
    </div>
  );
}
