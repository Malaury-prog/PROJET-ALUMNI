import React, { useState } from "react";
import Button from "../components/common/Button"; // Importation du Bouton
import { Menu, X } from "lucide-react";
import Logo from "../components/common/Logo"; // Importation du Logo

const Header = () => {
  const [menuOuvert, setMenuOuvert] = useState(false);
  /**
   * Bascule l'état du menu mobile ouvert/fermé
   * @returns {void}
   */
  const toggleMenu = () => {
    setMenuOuvert(!menuOuvert);
  };
  return (
    <header className="w-full bg-bg-default border-b border-border-default">
      <div className="max-w-7xl mx-auto px-3w py-2v flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <nav className="items-center hidden md:flex">
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
            {/* TODO : Dashboard et Mon Profil — à ajouter avec estConnecte */}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button
            label="Connexion"
            variant="primary"
            onClick={() => console.log("Clic sur connexion")}
          />
        </div>
        <button
          className="flex md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
        >
          {menuOuvert ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOuvert && (
        <div className="md:hidden bg-bg-default border-t border-border-default px-3w py-4v">
          <ul className="flex flex-col gap-4v list-none">
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
            <li className="mt-2v">
              <Button label="Connexion" variant="primary" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
