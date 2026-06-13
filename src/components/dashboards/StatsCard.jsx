import { motion } from "framer-motion";

const StatsCard = ({
  title,
  value,
  icon,
  color,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${color}`}
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
};

export default StatsCard;