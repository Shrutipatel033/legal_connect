import {
  FaUserShield,
  FaUsers,
  FaGavel,
  FaRupeeSign,
} from "react-icons/fa";

import StatsCard from "../../../components/dashboards/StatsCard";

const SuperAdminDashboard = () => {
  return (
    <div className="space-y-8">

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#111827] to-[#1F2937] rounded-3xl p-8 text-white">

        <h1 className="text-3xl font-bold">
          Welcome Back, Super Admin 👋
        </h1>

        <p className="mt-3 text-gray-300">
          Manage lawyers, clients, admins and platform operations.
        </p>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatsCard
          title="Total Admins"
          value="12"
          color="bg-blue-600"
          icon={<FaUserShield />}
        />

        <StatsCard
          title="Total Lawyers"
          value="150"
          color="bg-green-600"
          icon={<FaGavel />}
        />

        <StatsCard
          title="Total Clients"
          value="2500"
          color="bg-purple-600"
          icon={<FaUsers />}
        />

        <StatsCard
          title="Revenue"
          value="₹2.5L"
          color="bg-[#C9A227]"
          icon={<FaRupeeSign />}
        />

      </div>

      {/* Lower Section */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-lg">

          <h2 className="text-xl font-bold mb-5">
            Recent Activities
          </h2>

          <div className="space-y-4">

            <div className="border-b pb-3">
              New Lawyer Registered
            </div>

            <div className="border-b pb-3">
              New Consultation Booked
            </div>

            <div className="border-b pb-3">
              New Blog Published
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">

          <h2 className="text-xl font-bold mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <button className="bg-[#111827] text-white p-4 rounded-xl">
              Add Lawyer
            </button>

            <button className="bg-[#C9A227] text-white p-4 rounded-xl">
              Add Admin
            </button>

            <button className="bg-green-600 text-white p-4 rounded-xl">
              View Clients
            </button>

            <button className="bg-blue-600 text-white p-4 rounded-xl">
              Publish Blog
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SuperAdminDashboard;