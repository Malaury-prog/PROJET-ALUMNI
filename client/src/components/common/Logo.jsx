import React from "react";
import logoRF from "../../assets/images/logos/Republique-francaise-logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2w">
      <img
        src={logoRF}
        alt="Logo de la République Française."
        className="h-10 w-auto"
      />
      <span className="font-marianne font-weight-bold text-h4 text-blue-france">
        Annuaire <span className="text-accent-orange">ALUMNI</span>
      </span>
    </div>
  );
};

export default Logo;
