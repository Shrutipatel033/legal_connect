const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h4 className="text-gray-500">{title}</h4>
      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
};

export default StatsCard;