import { HiMenuAlt2 } from "react-icons/hi";

const DashboardHeader = ({ setCollapsed }) => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">

      <div className="flex items-center gap-4">

        <button
          onClick={() => setCollapsed(false)}
          className="text-2xl"
        >
          <HiMenuAlt2 />
        </button>


      </div>

      <div className="flex items-center gap-3">

        <div className="text-right">
          <h4 className="font-semibold">
            Super Admin
          </h4>
        </div>

        <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center text-white">
          S
        </div>

      </div>

    </header>
  );
};

export default DashboardHeader;