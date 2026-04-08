import React from "react";
import CarteApprenant from "../../cards/CarteApprenant";
import mockApprenants from "../../../data/mockApprenants.json";

export default function Caroussel() {
  return (
    <section className="flex items-center flex-col w-full ">
      <h2 className="text-text-main text-h2 md:text-h2-desktop m-4v">
        Découvrez nos Profils
      </h2>
      <div className="flex gap-4w overflow-x-auto p-4v items-stretch">
        {mockApprenants.map((apprenant) => (
          <CarteApprenant key={apprenant.id} {...apprenant} />
        ))}
      </div>
    </section>
  );
}
