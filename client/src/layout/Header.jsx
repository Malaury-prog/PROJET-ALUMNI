import React from "react";
import Button from "../components/common/Button"; // Importation du Bouton
import Logo from "../components/common/Logo"; // Importation du Logo

const Header = () => {
  return (
    <header className="w-full bg-bg-default border-b border-border-default">
      <div className="max-w-7xl mx-auto px-3w py-2v flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <nav className="flex items-center">
          <ul className="flex items-center gap-6w list-none">
            <li>
              <a
                href="#Accueil"
                className="text-body text-text-main hover:text-blue-france"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#Annuaire"
                className="text-body text-text-main hover:text-blue-france"
              >
                Annuaire
              </a>
            </li>
            <li>
              {/* Ajouter un lien Dashboard avec une condition {estConnecte} */}
            </li>
            <li>
              {/* Ajouter un lien Mon Profil avec une condition {estConnecte} */}
            </li>
          </ul>
        </nav>
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
