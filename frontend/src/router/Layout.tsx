import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

const Layout = () => {
  return (
    <>
      {/* Main layout container with sidebar and secondary column */}
      <div className="flex h-full">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
