import React from "react";

/**
 * Section Chiffres Clés — Landing Page
 * Bandeau statistiques Alumni GRETA
 * @returns {JSX.Element}
 */
export default function ChiffresCles() {
  return (
    <section className="w-full bg-blue-france py-12v">
      <div className="max-w-7xl mx-auto px-3w flex flex-col md:flex-row items-center justify-between gap-8v">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-white text-h2 md:text-h2-desktop font-weight-bold">
            85%
          </h2>
          <p className="text-white text-small mt-2v">
            Des alumni en poste ou en formation 6 mois après leur sortie
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-white text-h2 md:text-h2-desktop font-weight-bold">
            92%
          </h2>
          <p className="text-white text-small mt-2v">De réussite aux examens</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-white text-h2 md:text-h2-desktop font-weight-bold">
            500
          </h2>
          <p className="text-white text-small mt-2v">
            Membres actifs déjà inscrits sur la plateforme
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-white text-h2 md:text-h2-desktop font-weight-bold">
            45%
          </h2>
          <p className="text-white text-small mt-2v">
            Entreprises partenaires qui recrutent nos stagiaires
          </p>
        </div>
      </div>
    </section>
  );
}
