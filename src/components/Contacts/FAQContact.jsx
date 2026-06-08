const ContactFAQ = () => {
  const faqs = [
    {
      q: "How quickly will I receive a response?",
      a: "Usually within 15-30 minutes during business hours.",
    },
    {
      q: "Are consultations confidential?",
      a: "Yes. All consultations remain private and secure.",
    },
    {
      q: "Can I consult online?",
      a: "Yes, we provide online and offline consultations.",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF9F6]">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg"
            >
              <h3 className="font-bold text-lg">
                {faq.q}
              </h3>

              <p className="text-gray-500 mt-3">
                {faq.a}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ContactFAQ;