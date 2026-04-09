import React from "react";

import { Users, Briefcase, Eye } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full bg-bg-alt py-12v">
      <div className="max-w-7xl mx-auto px-3w flex flex-col md:flex-row gap-8v">
        <div className="flex flex-col items-center text-center gap-3v">
          <Users size={48} className="text-accent-orange" />
          <h3 className="text-h3 md:text-h3-desktop font-weight-bold text-text-main">
            Le Mentorat
          </h3>
          <p className="text-body text-text-secondary">
            Bénéficiez de l'expérience des anciens stagiaires pour booster votre
            insertion professionnelle ou votre reconversion.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-3v">
          <Briefcase size={48} className="text-accent-orange" />
          <h3 className="text-h3 md:text-h3-desktop font-weight-bold text-text-main">
            Les Opportunités
          </h3>
          <p className="text-body text-text-secondary">
            Accédez à des offres d'emploi et de stage partagées exclusivement
            par la communauté du Greta.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-3v">
          <Eye size={48} className="text-accent-orange" />
          <h3 className="text-h3 md:text-h3-desktop font-weight-bold text-text-main">
            La visibilité
          </h3>
          <p className="text-body text-text-secondary">
            Mettez en avant votre parcours, vos compétences et vos projets
            auprès des entreprises partenaires.
          </p>
        </div>
      </div>
    </section>
  );
}
