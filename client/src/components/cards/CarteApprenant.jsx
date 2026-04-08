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
    <article className="flex flex-col grow items-center bg-bg-default rounded-default p-4v md:p-6v min-w-[280px] ">
      <div>
        <img
          className="rounded-full ring-2 ring-accent-orange ring-offset-2 w-20 h-20 object-cover"
          src={avatar}
          alt={`Photo de profil de ${prenom} ${nom}`}
        />
      </div>
      <div>
        <h3 className="text-h4 md:text-h4-desktop font-weight-bold mt-2v text-center whitespace-nowrap">
          {`${prenom} ${nom}`}
        </h3>
      </div>
      <div>
        <p className="text-small text-text-secondary text-center mt-1v">
          {formation} • {promo} • {annee}
        </p>
      </div>
      <div className="flex gap-2w my-3v">
        {linkedin && (
          <a
            href={linkedin}
            className="text-blue-france flex items-center gap-1v"
          >
            <span className="hidden md:inline">LinkedIn</span>
          </a>
        )}
        {github && (
          <a
            href={github}
            className="text-blue-france flex items-center gap-1v"
          >
            <span className="hidden md:inline">GitHub</span>
          </a>
        )}
      </div>
      <div className="flex-1 mb-4v text-center">
        <p className="text-body text-text-main">{biographie}</p>
      </div>
      <Tag label={labelStatut} variant={statut} />
    </article>
  );
}
