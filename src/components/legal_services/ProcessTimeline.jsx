import {
  FaClipboardList,
  FaUserTie,
  FaFileSignature,
  FaComments,
  FaGavel,
} from "react-icons/fa";
import { motion } from "framer-motion";
const steps = [
  {
    title: "Submit Details",
    description:
      "Provide your case details through our secure online form.",
    icon: <FaClipboardList />,
  },
  {
    title: "Lawyer Matching",
    description:
      "Get connected with the most suitable legal expert.",
    icon: <FaUserTie />,
  },
  {
    title: "Document Verification",
    description:
      "Upload and verify all required legal documents.",
    icon: <FaFileSignature />,
  },
  {
    title: "Consultation",
    description:
      "Discuss your case with experienced legal professionals.",
    icon: <FaComments />,
  },
  {
    title: "Case Handling",
    description:
      "Our legal team assists you throughout the process.",
    icon: <FaGavel />,
  },
];

const ProcessTimeline = () => {
  return (
    <section className="py-5 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-2xl font-bold text-[var(--primary)] mt-5">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-[#C9A227] rounded-full mx-auto mt-3 animate-line"></div>
            <p className="text-gray-600 max-w-xl mx-auto mt-5">
              Our streamlined legal process ensures you receive
              professional guidance from consultation to resolution.
            </p></motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="hidden lg:block absolute top-10 left-0 h-1 bg-[var(--accent)]/20"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="relative text-center group"
              >
                {/* Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-white shadow-lg border-4 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] text-2xl group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>

                <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-3 w-8 h-8 rounded-full bg-[var(--accent)] text-white text-sm flex items-center justify-center font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="mt-8 bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:border-[var(--accent)] border border-transparent transition-all duration-500">
                  <h3 className="text-md font-bold text-[var(--primary)]">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                    {step.description}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;