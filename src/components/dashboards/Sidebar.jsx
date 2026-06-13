import { HiX } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  let menus = [];

  if (location.pathname.startsWith("/superadmin")) {
    menus = [
      { name: "Dashboard", path: "/superadmin" },
      { name: "Admins", path: "/superadmin/admins" },
      { name: "Lawyers", path: "/superadmin/lawyers" },
      { name: "Clients", path: "/superadmin/clients" },
    ];
  }

  if (location.pathname.startsWith("/admin")) {
    menus = [
      { name: "Dashboard", path: "/admin" },
      { name: "Lawyers", path: "/admin/lawyers" },
      { name: "Clients", path: "/admin/clients" },
      { name: "Blogs", path: "/admin/blogs" },
      { name: "Services", path: "/admin/services" },
    ];
  }

  if (location.pathname.startsWith("/lawyer")) {
    menus = [
      { name: "Dashboard", path: "/lawyer" },
      { name: "Appointments", path: "/lawyer/appointments" },
      { name: "Clients", path: "/lawyer/clients" },
      { name: "Documents", path: "/lawyer/documents" },
      { name: "Profile", path: "/lawyer/profile" },
    ];
  }

  if (location.pathname.startsWith("/client")) {
    menus = [
      { name: "Dashboard", path: "/client" },
      { name: "My Cases", path: "/client/cases" },
      { name: "Consultations", path: "/client/consultations" },
      { name: "Documents", path: "/client/documents" },
      { name: "Profile", path: "/client/profile" },
    ];
  }

  return (
    <aside
      className={`bg-[#111827] text-white transition-all duration-300 ${collapsed ? "w-20" : "w-64"
        }`}
    >
      {/* Logo */}
      <div className="h-16 border-b border-gray-700 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#C9A227] rounded-xl flex items-center justify-center">
            ⚖
          </div>

          {!collapsed && (
            <h2 className="font-bold">
              LegalConnect
            </h2>
          )}
        </div>

        {!collapsed && (
          <button
            onClick={() => setCollapsed(true)}
            className="text-xl"
          >
            <HiX />
          </button>
        )}
      </div>

      {/* Menu */}
      <div className="p-4 space-y-2">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            end
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl transition-all ${isActive
                ? "bg-[#C9A227]"
                : "hover:bg-[#1F2937]"
              }`
            }
          >
            {collapsed
              ? menu.name.charAt(0)
              : menu.name}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;