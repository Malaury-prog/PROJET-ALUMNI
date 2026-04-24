import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./pages/Landingpage";
import ConnexionPage from "./pages/ConnexionPage";
import AnnuairePage from "./pages/AnnuairePage";
import Page404 from "./pages/Page404";
import Dashboard from "./pages/Dashboard";
import InscriptionPage from "./pages/InscriptionPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <LandingPage />
            </Layout>
          }
        />
        <Route
          path="/connexion"
          element={
            <Layout>
              <ConnexionPage />
            </Layout>
          }
        />
        <Route
          path="/annuaire"
          element={
            <Layout>
              <AnnuairePage />
            </Layout>
          }
        />
        <Route
          path="/inscription"
          element={
            <Layout>
              <InscriptionPage />
            </Layout>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
