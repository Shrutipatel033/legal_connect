import StatsCard from "../../../components/dashboards/StatsCard";

const ClientDashboard = () => {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-8">
        Client Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatsCard title="My Consultations" value="8" />
        <StatsCard title="Active Cases" value="2" />
        <StatsCard title="Documents" value="15" />
        <StatsCard title="Appointments" value="5" />

      </div>

    </div>
  );
};

export default ClientDashboard;