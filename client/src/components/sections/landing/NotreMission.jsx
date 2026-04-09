import React from "react";
import Button from "../../common/Button";

/**
 * Section Notre Mission — Landing Page
 * Présente la mission de l'annuaire Alumni GRETA
 * @returns {JSX.Element}
 */
export default function NotreMission() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-6w px-3w py-12v max-w-7xl mx-auto">
      <div className="w-full md:w-1/2">
        <div className="w-full md:w-1/2 bg-bg-alt rounded-medium h-[300px]" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4v">
        <h3 className="text-h3 md:text-h3-desktop font-weight-bold text-blue-france">
          Notre mission
        </h3>
        <h4 className="text-h4 md:text-h4-desktop font-weight-bold text-text-main">
          Un réseau pensé pour propulser votre carrière.
        </h4>
        <p className="text-body text-text-secondary">
          L'Annuaire Alumni du Greta n'est pas qu'une simple base de données.
          C'est un véritable tremplin professionnel créé par et pour les anciens
          stagiaires. Que vous cherchiez votre premier poste en sortie de
          formation, des conseils pour une reconversion, ou que vous souhaitiez
          recruter les futurs talents de votre entreprise, ce réseau est votre
          meilleur atout.
        </p>
        <Button label="Découvrez les parcours" variant="primary" />
      </div>
    </section>
  );
}
