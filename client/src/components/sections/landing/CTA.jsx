import React from "react";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

/**
 * Section CTA Finale — Landing Page
 * Appel à l'action pour rejoindre l'annuaire
 * @returns {JSX.Element}
 */
export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="w-full flex justify-center px-3w py-12v">
      <div className="border border-border-default rounded-medium p-8v flex flex-col items-center gap-4v max-w-2xl w-full text-center">
        <h2 className="text-h2 md:text-h2-desktop font-weight-bold text-text-main">
          Découvrez la force de notre réseau.
        </h2>
        <Button
          label="Explorez l'annuaire"
          variant="primary"
          onClick={() => navigate("/annuaire")}
        />
      </div>
    </section>
  );
}
