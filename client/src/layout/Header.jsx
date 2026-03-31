import React from "react";
import Button from "../components/common/Button"; // Importation du Bouton
import Logo from "../components/common/Logo"; // Importation du Logo

const Header = () => {
  return (
    <header className="w-full bg-bg-default border-b border-border-default px-3w py-2v flex justify-between">
      <div className="flex items-center">
        <div>
          <Logo />
        </div>
        <div>
          <Button
            label="Connexion"
            variant="primary"
            onClick={() => console.log("Clic sur connexion")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
