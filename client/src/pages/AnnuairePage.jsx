import React, { useState, useEffect } from "react";
import CarteApprenant from "../components/cards/CarteApprenant";

export default function AnnuairePage() {
  const [apprenants, setApprenants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((response) => response.json())
      .then((data) => setApprenants(data));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-3w py-8v">
      <div className="mb-8v text-center">
        <h1 className="text-h1 md:text-h1-desktop font-weight-bold text-text-main">
          Nos Alumni
        </h1>
        <p className="text-body text-text-secondary mt-2v">
          Retrouvez l'ensemble des apprenants et anciens stagiaires du GRETA Sud
          Champagne.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6w items-stretch">
        {apprenants.map((apprenant) => (
          <CarteApprenant
            key={apprenant.id}
            prenom={apprenant.prenom}
            nom={apprenant.nom}
            avatar={apprenant.avatar_illustre}
            formation={apprenant.formation}
            promo={apprenant.promo}
            annee={apprenant.annee}
            github={apprenant.github}
            linkedin={apprenant.linkedin}
            biographie={apprenant.description}
            statut={
              apprenant.labelStatut === "En formation" ? "success" : "info"
            }
            labelStatut={apprenant.labelStatut}
          />
        ))}
      </div>
    </div>
  );
}
