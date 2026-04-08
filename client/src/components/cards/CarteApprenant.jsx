import React from "react";
import Tag from "../common/Tag";

export default function CarteApprenant({
  prenom,
  nom,
  avatar,
  promo,
  formation,
  annee,
  github,
  linkedin,
  biographie,
  statut,
  labelStatut,
}) {
  return (
    <article className="flex flex-col items-center bg-bg-default rounded-default p-4v md:p-6v h-full">
      <div>
        <img
          className="rounded-full ring-2 ring-accent-orange ring-offset-2 w-20 h-20 object-cover"
          src={avatar}
          alt={`Photo de profil de ${prenom} ${nom}`}
        />
      </div>
      <div>
        <h3 className="text-h3 md:text-h3-desktop font-weight-bold">
          {`${prenom} ${nom}`}
        </h3>
      </div>
      <div>
        <p className="text-small text-text-secondary">
          {formation} • {promo} • {annee}
        </p>
      </div>
      <div className="flex gap-2w my-3v">
        {linkedin && (
          <a href={linkedin} className="text-blue-france">
            LinkedIn
          </a>
        )}
        {github && (
          <a href={github} className="text-blue-france">
            GitHub
          </a>
        )}
      </div>
      <div className="mb-4v text-center">
        <p className="text-body text-text-main">{biographie}</p>
      </div>
      <Tag label={labelStatut} variant={statut} />
    </article>
  );
}
