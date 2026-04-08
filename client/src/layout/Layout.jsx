import React from "react";
import Header from "./Header";

/**
 * Layout principal de l'application
 * Enveloppe toutes les pages avec Header et Footer
 * @param {React.ReactNode} children - Contenu de la page
 * @returns {JSX.Element}
 */

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
