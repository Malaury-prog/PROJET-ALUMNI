import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function InscriptionPage() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    motDePasse: "",
    confirmation: "",
  });
  const [erreurs, setErreurs] = useState({});

  const valider = () => {
    const nouvellesErreurs = {};
    if (!form.prenom.trim()) nouvellesErreurs.prenom = "Le prénom est requis.";
    if (!form.nom.trim()) nouvellesErreurs.nom = "Le nom est requis.";
    if (!form.email.trim())
      nouvellesErreurs.email = "L'adresse e-mail est requise.";
    if (form.motDePasse.length < 8)
      nouvellesErreurs.motDePasse =
        "Le mot de passe doit contenir au moins 8 caractères.";
    if (form.confirmation !== form.motDePasse)
      nouvellesErreurs.confirmation = "Les mots de passe ne correspondent pas.";
    return nouvellesErreurs;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (erreurs[id]) setErreurs((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouvellesErreurs = valider();
    if (Object.keys(nouvellesErreurs).length > 0) {
      setErreurs(nouvellesErreurs);
      return;
    }
    console.log("Inscription avec :", form);
  };

  return (
    <div className="min-h-screen bg-bg-default flex items-center justify-center px-3w py-8v">
      <div className="w-full max-w-md">
        <h1 className="text-h1 md:text-h1-desktop font-weight-bold text-blue-france mb-8v text-center">
          Créer un compte
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4v"
          noValidate
        >
          <div className="flex flex-col gap-1v">
            <label
              htmlFor="prenom"
              className="text-body font-weight-bold text-text-main"
            >
              Prénom
            </label>
            <input
              id="prenom"
              type="text"
              placeholder="Votre prénom"
              value={form.prenom}
              onChange={handleChange}
              className={`border rounded-default px-2w py-2v text-body text-text-main focus:outline-none focus:border-blue-france ${
                erreurs.prenom ? "border-red-greta" : "border-border-default"
              }`}
            />
            {erreurs.prenom && (
              <p className="text-small text-red-greta">{erreurs.prenom}</p>
            )}
          </div>

          <div className="flex flex-col gap-1v">
            <label
              htmlFor="nom"
              className="text-body font-weight-bold text-text-main"
            >
              Nom
            </label>
            <input
              id="nom"
              type="text"
              placeholder="Votre nom"
              value={form.nom}
              onChange={handleChange}
              className={`border rounded-default px-2w py-2v text-body text-text-main focus:outline-none focus:border-blue-france ${
                erreurs.nom ? "border-red-greta" : "border-border-default"
              }`}
            />
            {erreurs.nom && (
              <p className="text-small text-red-greta">{erreurs.nom}</p>
            )}
          </div>

          <div className="flex flex-col gap-1v">
            <label
              htmlFor="email"
              className="text-body font-weight-bold text-text-main"
            >
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="prenom.nom@exemple.fr"
              value={form.email}
              onChange={handleChange}
              className={`border rounded-default px-2w py-2v text-body text-text-main focus:outline-none focus:border-blue-france ${
                erreurs.email ? "border-red-greta" : "border-border-default"
              }`}
            />
            {erreurs.email && (
              <p className="text-small text-red-greta">{erreurs.email}</p>
            )}
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
              placeholder="8 caractères minimum"
              value={form.motDePasse}
              onChange={handleChange}
              className={`border rounded-default px-2w py-2v text-body text-text-main focus:outline-none focus:border-blue-france ${
                erreurs.motDePasse
                  ? "border-red-greta"
                  : "border-border-default"
              }`}
            />
            {erreurs.motDePasse && (
              <p className="text-small text-red-greta">{erreurs.motDePasse}</p>
            )}
          </div>

          <div className="flex flex-col gap-1v">
            <label
              htmlFor="confirmation"
              className="text-body font-weight-bold text-text-main"
            >
              Confirmer le mot de passe
            </label>
            <input
              id="confirmation"
              type="password"
              placeholder="Répétez votre mot de passe"
              value={form.confirmation}
              onChange={handleChange}
              className={`border rounded-default px-2w py-2v text-body text-text-main focus:outline-none focus:border-blue-france ${
                erreurs.confirmation
                  ? "border-red-greta"
                  : "border-border-default"
              }`}
            />
            {erreurs.confirmation && (
              <p className="text-small text-red-greta">
                {erreurs.confirmation}
              </p>
            )}
          </div>

          <div className="mt-2v flex justify-center">
            <Button label="Créer mon compte" variant="primary" />
          </div>
        </form>

        <div className="flex justify-center mt-4v">
          <Link
            to="/connexion"
            className="text-body text-blue-france underline hover:text-blue-france-hover"
          >
            Déjà inscrit? Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}