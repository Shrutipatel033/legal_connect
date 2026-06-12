import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboards/Sidebar";
import DashboardHeader from "../components/header/DashboardHeader";
const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div className="flex-1 flex flex-col">

        <DashboardHeader
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className="p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;