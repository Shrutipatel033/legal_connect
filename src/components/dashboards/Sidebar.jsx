import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Sidebar = ({
  collapsed,
  setCollapsed,
}) => {
  const menus = [
    { name: "Dashboard", path: "/superadmin" },
    { name: "Admins", path: "/superadmin/admins" },
    { name: "Lawyers", path: "/superadmin/lawyers" },
    { name: "Clients", path: "/superadmin/clients" },
    { name: "Services", path: "/superadmin/services" },
    { name: "Blogs", path: "/superadmin/blogs" },
  ];

  return (
    <aside
      className={`
        bg-[#111827]
        text-white
        transition-all
        duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >

      {/* Logo Area */}
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

      {/* Menus */}
      <div className="p-4 space-y-2">

        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            end={menu.path === "/superadmin"}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                ? "bg-[#C9A227] text-white"
                : "hover:bg-[#1F2937]"
              }`
            }
          >
            {collapsed ? menu.name.charAt(0) : menu.name}
          </NavLink>
        ))}

      </div>

    </aside>
  );
};

export default Sidebar;