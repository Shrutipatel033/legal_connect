import {
  FaBalanceScale,
  FaHome,
  FaBriefcase,
  FaUserShield,
  FaLaptopCode,
  FaFileContract,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const services = [
  {
    title: "Family Law",
    icon: <FaBalanceScale />,
  },
  {
    title: "Criminal Law",
    icon: <FaUserShield />,
  },
  {
    title: "Property Law",
    icon: <FaHome />,
  },
  {
    title: "Corporate Law",
    icon: <FaBriefcase />,
  },
  {
    title: "Cyber Crime",
    icon: <FaLaptopCode />,
  },
  {
    title: "Documentation",
    icon: <FaFileContract />,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-center">
            Legal Services We Offer
          </h2>
          <div className="w-24 h-1 bg-[#C9A227] rounded-full mx-auto mt-3 animate-line"></div></motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {services.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >

              <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] text-3xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3">
                Expert legal assistance and consultation
                for your case.
              </p>

              <Link
                to={`/services/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative z-20 mt-6 text-[#C9A227] font-semibold hover:translate-x-2 transition-all duration-300"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;