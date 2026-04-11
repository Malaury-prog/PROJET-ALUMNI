import React from "react";
import { useNavigate } from "react-router-dom";
import logoRF from "../../assets/images/logos/Republique-francaise-logo.png";

/**
 * Logo de l'application — République Française + nom Alumni GRETA
 * @returns {JSX.Element}
 */
const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-2w cursor-pointer"
      onClick={() => navigate("/")}
    >
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
