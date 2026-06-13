import StatsCard from "../../../components/dashboards/StatsCard";

const LawyerDashboard = () => {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-8">
        Lawyer Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatsCard title="My Clients" value="45" />
        <StatsCard title="Appointments" value="20" />
        <StatsCard title="Pending Cases" value="12" />
        <StatsCard title="Earnings" value="₹85K" />

      </div>

    </div>
  );
};

export default LawyerDashboard;