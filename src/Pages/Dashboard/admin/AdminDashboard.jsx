import StatsCard from "../../../components/dashboards/StatsCard";

const AdminDashboard = () => {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatsCard title="Total Lawyers" value="150" />
        <StatsCard title="Total Clients" value="2500" />
        <StatsCard title="Consultations" value="560" />
        <StatsCard title="Blogs" value="35" />

      </div>

    </div>
  );
};

export default AdminDashboard;