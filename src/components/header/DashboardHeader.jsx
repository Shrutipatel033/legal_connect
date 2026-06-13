import {
  HiOutlineBell,
  HiOutlineMenu,
} from "react-icons/hi";

const DashboardHeader = ({
  collapsed,
  setCollapsed,
}) => {
  return (
    <header className="bg-white h-20 px-8 shadow-sm flex items-center justify-between">

      <div className="flex items-center gap-4">

        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            className="text-2xl"
          >
            <HiOutlineMenu />
          </button>
        )}

        <div>
          <h1 className="text-xl font-bold">
            Super Admin Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            Manage platform operations
          </p>
        </div>

      </div>

      <div className="flex items-center gap-5">

        <button className="relative">

          <HiOutlineBell className="text-2xl" />

          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>

        </button>

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/100"
            alt=""
            className="w-12 h-12 rounded-full"
          />

          <div>

            <h3 className="font-semibold">
              Super Admin
            </h3>

            <p className="text-sm text-gray-500">
              admin@legalconnect.com
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default DashboardHeader;