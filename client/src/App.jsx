import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./pages/Landingpage";
import ConnexionPage from "./pages/ConnexionPage";
import AnnuairePage from "./pages/AnnuairePage";
import Page404 from "./pages/Page404";

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
          path="/*"
          element={
            <Layout>
              <Page404 />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
