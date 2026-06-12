import {
  FaUsers,
  FaHome,
  FaBriefcase,
  FaGavel,
} from "react-icons/fa";
import { motion } from "framer-motion";

const eligibilityItems = [
  {
    title: "Married Individuals",
    description:
      "Legal assistance for divorce, maintenance, child custody, and family disputes.",
    icon: <FaUsers />,
  },
  {
    title: "Property Owners",
    description:
      "Support for ownership disputes, property registration, transfers, and documentation.",
    icon: <FaHome />,
  },
  {
    title: "Business Owners",
    description:
      "Corporate legal services including contracts, compliance, taxation, and litigation.",
    icon: <FaBriefcase />,
  },
  {
    title: "Criminal Case Defendants",
    description:
      "Professional legal representation and defense for criminal and cyber crime matters.",
    icon: <FaGavel />,
  },
];

const EligibilitySection = () => {
  return (
    <section className="py-10 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold">
            Eligibility Criteria
          </span> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-2xl font-bold text-[var(--primary)] mt-5">
              Who Can Apply For Legal Assistance?
            </h2>
            <div className="w-24 h-1 bg-[#C9A227] rounded-full mx-auto mt-3 animate-line"></div>
            <p className="text-gray-600 max-w-xl mx-auto mt-5 text-md">
              Our legal experts provide professional support for individuals,
              families, property owners, businesses, and criminal case matters.
            </p></motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {eligibilityItems.map((item, index) => (

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="relative overflow-hidden bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[var(--accent)]/10 rounded-full"></div>

              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[var(--accent)]/5 rounded-full"></div>

              <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[var(--accent)]"></div>

              {/* Content */}
              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] text-2xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>

                <button className="mt-6 text-[var(--accent)] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <span>→</span>
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;