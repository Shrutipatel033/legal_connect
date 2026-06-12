import StatsCard from "../../../components/dashboards/StatsCard";

const SuperAdminDashboard = () => {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Super Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatsCard
          title="Total Admins"
          value="12"
        />

        <StatsCard
          title="Total Lawyers"
          value="150"
        />

        <StatsCard
          title="Total Clients"
          value="2500"
        />

        <StatsCard
          title="Revenue"
          value="₹2.5L"
        />

      </div>

    </div>
  );
};

export default SuperAdminDashboard;