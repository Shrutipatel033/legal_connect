import {
  FaFileAlt,
  FaUserTie,
  FaComments,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion"
const steps = [
  {
    icon: <FaFileAlt />,
    title: "Describe Your Issue",
    desc: "Tell us your legal requirement securely.",
  },
  {
    icon: <FaUserTie />,
    title: "Get Matched",
    desc: "We connect you with suitable lawyers.",
  },
  {
    icon: <FaComments />,
    title: "Consult Lawyer",
    desc: "Compare profiles and start consultation.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Resolve Case",
    desc: "Get professional legal support.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-10">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-2xl font-bold text-[#111827]">
            Four Simple Steps
          </h4>
          <div className="w-24 h-1 bg-[#C9A227] rounded-full mx-auto mt-3 animate-line"></div>
          <p className="text-gray-500 mt-4">
            Get legal help quickly and securely.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {steps.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="w-16 h-16 bg-[#C9A227]/10 rounded-2xl flex items-center justify-center text-[#C9A227] text-3xl">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3 leading-7 text-md">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProcessSteps;