import React from "react";
import CarteApprenant from "../components/cards/CarteApprenant";
import mockApprenants from "../data/mockApprenants.json";
import { genererApprenants } from "../data/mockApprenants";

/**
 * Page Annuaire — Liste complète des apprenants Alumni GRETA
 * @returns {JSX.Element}
 */
export default function AnnuairePage() {
  const tousLesApprenants = [...mockApprenants, ...genererApprenants(6)];

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

      {/* TODO : Filtres — à ajouter (formation, statut, promotion) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6w items-stretch">
        {tousLesApprenants.map((apprenant) => (
          <CarteApprenant key={apprenant.id} {...apprenant} />
        ))}
      </div>
    </div>
  );
}
