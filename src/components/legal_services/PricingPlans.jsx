import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion"
const plans = [
  {
    name: "Basic",
    price: "₹999",
    description: "Perfect for initial legal consultation.",
    features: [
      "30 Min Consultation",
      "Case Evaluation",
      "Legal Guidance",
      "Email Support",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "₹2499",
    description: "Most popular package for legal assistance.",
    features: [
      "1 Hour Consultation",
      "Document Review",
      "Priority Support",
      "Lawyer Matching",
      "Video Consultation",
    ],
    featured: true,
  },
  {
    name: "Full Case Support",
    price: "Custom",
    description: "Complete legal representation and support.",
    features: [
      "Dedicated Lawyer",
      "Case Management",
      "Court Assistance",
      "Documentation",
      "24/7 Support",
    ],
    featured: false,
  },
];

const PricingPlans = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <section className="py-10 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-2xl font-bold text-[var(--primary)] mt-2">
              Choose The Right Plan
            </h2>
            <div className="w-24 h-1 bg-[#C9A227] rounded-full mx-auto mt-3 animate-line"></div>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Transparent pricing with professional legal support
              tailored to your needs.
            </p></motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2
              
              ${plan.featured
                  ? "bg-[var(--primary)] text-white shadow-2xl scale-105"
                  : "bg-white shadow-lg hover:shadow-2xl"
                }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute top-5 right-5 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Decorative Circle */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-12 -right-12 w-40 h-40 bg-[var(--accent)]/10 rounded-full"
              />
              <div className="relative z-10">

                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-bold"
                >
                  {plan.name}
                </motion.h3>

                <div className="mt-6">
                  <motion.span
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.4,
                    }}
                    className="text-2xl font-bold"
                  >
                    {plan.price}
                  </motion.span>
                </div>

                <p
                  className={`mt-4 ${plan.featured
                    ? "text-gray-300"
                    : "text-gray-600"
                    }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-4">

                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.1,
                        duration: 0.4,
                      }}
                      className="flex items-center gap-3"
                    >
                      <FaCheckCircle className="text-[var(--accent)]" />

                      <span>
                        {feature}
                      </span>
                    </motion.li>
                  ))}

                </ul>

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`w-full mt-10 py-3 rounded-xl font-semibold transition

                  ${plan.featured
                      ? "bg-[var(--accent)] text-white hover:opacity-90"
                      : "bg-[var(--primary)] text-white hover:bg-[var(--secondary)]"
                    }`}
                >
                  Get Started
                </motion.button>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section >
  );
};

export default PricingPlans;