import React from "react";
import Logo from "../components/common/Logo";

/**
 * Footer principal — conforme DSFR
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-blue-france">
      <div className="max-w-7xl mx-auto px-3w py-8v flex flex-col gap-6v">
        <div className="flex flex-col md:flex-row justify-between gap-6v">
          <div className="flex flex-col gap-3v max-w-sm">
            <Logo />
            <p className="text-small text-text-secondary">
              L'Annuaire Alumni du Greta facilite l'insertion professionnelle et
              le maintien du lien entre les anciens stagiaires et les
              entreprises partenaires.
            </p>
          </div>

          <div className="flex flex-col gap-2v">
            <a
              href="https://www.gouvernement.fr"
              className="text-small text-text-secondary hover:text-blue-france"
              target="_blank"
              rel="noreferrer"
            >
              gouvernement.fr
            </a>
            <a
              href="https://www.legifrance.gouv.fr"
              className="text-small text-text-secondary hover:text-blue-france"
              target="_blank"
              rel="noreferrer"
            >
              legifrance.gouv.fr
            </a>
            <a
              href="https://www.service-public.fr"
              className="text-small text-text-secondary hover:text-blue-france"
              target="_blank"
              rel="noreferrer"
            >
              service-public.fr
            </a>
            <a
              href="https://www.data.gouv.fr"
              className="text-small text-text-secondary hover:text-blue-france"
              target="_blank"
              rel="noreferrer"
            >
              data.gouv.fr
            </a>
          </div>
        </div>

        <hr className="border-border-default" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4v">
          <div className="flex flex-wrap gap-4w items-center">
            <a
              href="#"
              className="text-small text-text-secondary hover:text-blue-france"
            >
              Plan du site
            </a>
            <span className="text-border-default">|</span>
            <a
              href="#"
              className="text-small text-text-secondary hover:text-blue-france"
            >
              Accessibilité : non conforme
            </a>
            <span className="text-border-default">|</span>
            <a
              href="#"
              className="text-small text-text-secondary hover:text-blue-france"
            >
              Mentions légales
            </a>
            <span className="text-border-default">|</span>
            <a
              href="#"
              className="text-small text-text-secondary hover:text-blue-france"
            >
              Données personnelles
            </a>
            <span className="text-border-default">|</span>
            <a
              href="#"
              className="text-small text-text-secondary hover:text-blue-france"
            >
              Gestion des cookies
            </a>
          </div>

          <p className="text-small text-text-secondary text-right">
            Sauf mention contraire, tous les contenus de ce site sont sous
            licence etalab 2.0
          </p>
        </div>
      </div>
    </footer>
  );
}
