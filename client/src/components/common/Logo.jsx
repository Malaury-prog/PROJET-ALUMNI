import React from "react";
import logoRF from "../../assets/images/logos/Republique-francaise-logo.svg.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2w">
      <div className="flex items-center gap-2w">
        <img src={logoRF} alt="Logo de la République Française." />
      </div>
      <div className="flex items-center gap-2w">
        <span className="font-marianne font-weight-h1 text-h4 text-blue-france">
          Annuaire <span className="text-accent-orange">ALUMNI</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
