// components/layout/DashboardLayout.tsx
import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  const { user } = { user: { role: "USER" } };

  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar role={user?.role} />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
