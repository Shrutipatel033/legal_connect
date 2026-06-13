import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer: "Usually within 15–30 minutes.",
  },
  {
    question: "Is my consultation confidential?",
    answer: "Yes, completely confidential.",
  },
  {
    question: "Can I consult online?",
    answer: "Yes, online consultation is available.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-10 bg-[#FAF9F6]">

      <div className="max-w-5xl mx-auto ">

        <h2 className="text-3xl font-bold text-start mb-12">
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

export default ContactFAQ;