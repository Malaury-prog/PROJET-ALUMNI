import React from "react";
import Button from "../common/Button"; // On importe le bouton

const Header = () => {
  return (
    <header className="w-full bg-bg-default border-b border-border-default px-3w py-2v flex items-center justify-between">
      <div className="flex items-center gap-2w">
        <span className="font-marianne font-weight-h1 text-h4 text-blue-france">
          Annuaire <span className="text-accent-orange">ALUMNI</span>
        </span>
      </div>
      <div className="flex items-center">
        <Button
          label="Connexion"
          variant="primary"
          onClick={() => console.log("Clic sur connexion")}
        />
      </div>
    </header>
  );
};

export default Header;
