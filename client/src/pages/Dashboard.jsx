import { useState } from "react";

const Dashboard = () => {
  const [sectionActive, setSectionActive] = useState("alumni");

  return (
    <div className="flex h-screen ">
      <aside className="flex-col bg-blue-france w-64"></aside>
      <main></main>
    </div>
  );
};

export default Dashboard;
