import React from "react";
import logoRF from "../../assets/images/logos/Republique-francaise-logo.png";

/**
 * Logo de l'application — République Française + nom Alumni GRETA
 * Conforme DSFR : typographie Marianne, couleurs officielles
 * @returns {JSX.Element} Logo composé de l'emblème RF et du nom du site
 */
const Logo = () => {
  return (
    <div className="flex items-center gap-2w">
      <img
        src={logoRF}
        alt="Logo de la République Française."
        className="h-logo-mobile w-auto md:h-logo-desktop"
      />
      <span className="font-marianne font-weight-bold text-h4 md:text-h4-desktop text-blue-france">
        Annuaire <span className="text-accent-orange">ALUMNI</span>
      </span>
    </div>
  );
};

export default Logo;
