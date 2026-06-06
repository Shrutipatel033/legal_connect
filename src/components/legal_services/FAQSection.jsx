import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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

        <h2 className="text-2xl md:text-3xl font-bold text-start text-[var(--primary)] mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-semibold text-lg text-[var(--primary)]">
                  {faq.question}
                </h3>

                <FaChevronDown
                  className={`text-[var(--accent)] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${openIndex === index
                  ? "max-h-40 opacity-100 px-6 pb-6"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FAQSection;