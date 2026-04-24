import React from "react";

export default function Sidebar({ setSectionActive }) {
  return (
    <div>
      <div onClick={() => setSectionActive("stats")}>Tableau de bord</div>

      <div onClick={() => setSectionActive("alumni")}>Annuaire Alumni</div>

      <div onClick={() => setSectionActive("entreprises")}>Entreprises</div>

      <div onClick={() => setSectionActive("sessions")}>Sessions</div>
    </div>
  );
}
