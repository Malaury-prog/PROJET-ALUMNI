import React from "react";

/**
 * Composant bouton réutilisable conforme DSFR
 * @param {string} label - Texte affiché dans le bouton
 * @param {() => void} onClick - Fonction appelée au clic
 * @param {"primary"|"accent"|"outline"} variant - Style du bouton
 * @param {boolean} disabled - Désactive le bouton si true
 * @returns {JSX.Element} Un élément bouton stylisé
 */
const Button = ({ label, onClick, variant = "primary", disabled = false }) => {
  const baseStyles =
    "inline-flex items-center justify-center font-marianne font-weight-bold rounded-default transition-all duration-200 cursor-pointer border-2 border-transparent";

  const sizeStyles = "text-body px-4w py-2v";

  const themes = {
    primary:
      "bg-blue-france text-white hover:bg-blue-france-hover active:bg-blue-france-active",
    accent: "bg-accent-orange text-white hover:opacity-90 active:scale-95",
    outline:
      "bg-transparent border-blue-france text-blue-france hover:bg-bg-alt",
  };

  const disabledStyles =
    "disabled:bg-bg-disable disabled:text-text-disabled disabled:cursor-not-allowed disabled:active:scale-100";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${themes[variant]} ${disabledStyles}`}
    >
      {label}
    </button>
  );
};

export default Button;
