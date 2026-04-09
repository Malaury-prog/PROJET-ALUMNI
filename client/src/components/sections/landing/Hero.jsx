import React from "react";
import heroBg from "/src/assets/images/background/lyceeDecomble.jpg";
import Button from "../../common/Button";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[300px] md:h-hero flex items-center justify-center "
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="relative z-10 text-center max-w-7xl mx-auto px-2w md:px-3w">
        <h1 className="text-h1 md:text-h1-desktop font-weight-bold text-white font-marianne">
          Bienvenue sur l'Annuaire Alumni Greta
        </h1>
        <p className="text-body text-white mt-4v mb-6v">
          Restez connectés à votre promotion.
        </p>
        <Button label="Recherchez un Ancien" variant="primary" />
      </div>
    </section>
  );
};

export default Hero;
