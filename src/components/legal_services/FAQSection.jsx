import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const faqs = [
  {
    question: "How long does a case take?",
    answer:
      "The duration depends on the complexity of the case, legal procedures, and court timelines.",
  },
  {
    question: "Is consultation online available?",
    answer:
      "Yes, we provide both video and phone consultation services for clients across India.",
  },
  {
    question: "Are your lawyers verified?",
    answer:
      "Yes, all lawyers on our platform are thoroughly verified and experienced professionals.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-start text-[var(--primary)] mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-[var(--accent)]/30 overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-semibold text-lg text-[var(--primary)]">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-[var(--accent)]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden px-6"
                  >
                    <p className="pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FAQSection;