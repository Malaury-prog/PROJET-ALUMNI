import React from "react";
import Header from "./Header";
import Footer from "./Footer";

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
      <main className="w-full flex flex-col gap-16v">{children}</main>
      <Footer />
    </>
  );
}
