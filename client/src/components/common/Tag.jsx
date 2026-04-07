import React from "react";

/**
 * Composant tag réutilisable conforme au DSFR
 * @param {string} label - Texte affiché dans le tag
 * @param {"en-formation"|"en-recherche"|"en-poste"|"indisponible"} variant - Style du tag
 * @returns {JSX.Element} Un élément tag avec ses styles.
 */
export default function Tag({ label, variant = "en-formation" }) {
  const baseStyles =
    "inline-flex items-center font-marianne rounded-default text-small px-2w py-1v";

  const themes = {
    "en-formation": "bg-blue-france text-white",
    "en-recherche": "bg-success-green text-white",
    "en-poste": "bg-accent-orange text-white",
    indisponible: "bg-bg-disable text-text-main",
  };

  return <span className={`${baseStyles} ${themes[variant]}`}>{label}</span>;
}
