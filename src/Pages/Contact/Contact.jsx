import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: " How quickly will I receive a response?",
    answer:
      " Usually within 15–30 minutes during working hours.",
  },
  {
    question: " Is my consultation confidential?",
    answer:
      " Yes, all consultations and legal documents remain private.",
  },
  {
    question: "Can I consult online?",
    answer:
      " Yes, we offer secure online consultations.",
  },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>

      <section className="relative py-10 overflow-hidden bg-[#FAF9F6]">

        {/* Light Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-[120px]"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C9A227]/5 rounded-full blur-[100px]"></div>

        {/* Decorative Circles */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#C9A227]/20 rounded-full"></div>

        <div className="absolute top-32 right-32 w-20 h-20 border border-[#C9A227]/20 rounded-full"></div>

        <div className="absolute bottom-24 left-1/3 w-16 h-16 border border-[#C9A227]/20 rounded-full"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-medium">
            Contact LegalConnect
          </span>

          <h1 className="mt-8 text-5xl lg:text-5xl font-bold text-[#111827] leading-tight">
            We're Here To Help With
            <span className="block text-[#C9A227]">
              Your Legal Journey
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto leading-8">
            Have questions about legal services, consultations,
            or case management? Our team is ready to assist you.
          </p>

          {/* Premium Cards */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <div className="bg-white px-6 py-4 rounded-2xl shadow-md">
              <h4 className="font-semibold text-[#111827]">
                Confidential Support
              </h4>
            </div>

            <div className="bg-white px-6 py-4 rounded-2xl shadow-md">
              <h4 className="font-semibold text-[#111827]">
                Verified Lawyers
              </h4>
            </div>

            <div className="bg-white px-6 py-4 rounded-2xl shadow-md">
              <h4 className="font-semibold text-[#111827]">
                Quick Response
              </h4>
            </div>

          </div>

        </div>

      </section>
      {/* Contact Cards */}
      <section className="py-10 bg-[#FAF9F6]">

        <div className="max-w-[1400px] mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-[30px] p-8 shadow-lg text-center hover:-translate-y-2 transition-all">

              <div className="w-16 h-16 bg-[#C9A227]/10 rounded-2xl flex items-center justify-center text-[#C9A227] text-2xl mx-auto">
                <FaPhoneAlt />
              </div>

              <h3 className="font-bold text-xl mt-5">
                Call Us
              </h3>

              <p className="text-gray-500 mt-2">
                +91 98765 43210
              </p>

            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg text-center hover:-translate-y-2 transition-all">

              <div className="w-16 h-16 bg-[#C9A227]/10 rounded-2xl flex items-center justify-center text-[#C9A227] text-2xl mx-auto">
                <FaEnvelope />
              </div>

              <h3 className="font-bold text-xl mt-5">
                Email Us
              </h3>

              <p className="text-gray-500 mt-2">
                support@legalconnect.com
              </p>

            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg text-center hover:-translate-y-2 transition-all">

              <div className="w-16 h-16 bg-[#C9A227]/10 rounded-2xl flex items-center justify-center text-[#C9A227] text-2xl mx-auto">
                <FaMapMarkerAlt />
              </div>

              <h3 className="font-bold text-xl mt-5">
                Location
              </h3>

              <p className="text-gray-500 mt-2">
                Lucknow, Uttar Pradesh
              </p>

            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg text-center hover:-translate-y-2 transition-all">

              <div className="w-16 h-16 bg-[#C9A227]/10 rounded-2xl flex items-center justify-center text-[#C9A227] text-2xl mx-auto">
                <FaClock />
              </div>

              <h3 className="font-bold text-xl mt-5">
                Working Hours
              </h3>

              <p className="text-gray-500 mt-2">
                Mon - Sat | 9 AM - 7 PM
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Form */}
      <section className="py-10">

        <div className="max-w-[1200px] mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="text-[#C9A227] font-semibold">
                Send Message
              </span>

              <h2 className="text-5xl font-bold text-[#111827] mt-4">
                Let's Discuss
                Your Legal Issue
              </h2>

              <p className="text-gray-500 mt-6 leading-8">
                Fill out the form and our team will contact
                you shortly. We ensure complete privacy and
                secure communication.
              </p>

            </div>

            <form className="bg-white rounded-[35px] p-8 shadow-xl">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-200 rounded-xl p-4"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-200 rounded-xl p-4"
                />

              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-xl p-4 mt-5"
              />

              <select className="w-full border border-gray-200 rounded-xl p-4 mt-5">

                <option>Select Legal Service</option>
                <option>Family Law</option>
                <option>Criminal Law</option>
                <option>Property Law</option>
                <option>Corporate Law</option>
                <option>Cyber Law</option>

              </select>

              <textarea
                rows="5"
                placeholder="Describe Your Legal Issue"
                className="w-full border border-gray-200 rounded-xl p-4 mt-5"
              ></textarea>

              <button
                type="submit"
                className="w-full mt-6 bg-[#111827] text-white py-4 rounded-xl font-semibold hover:bg-[#1F2937]"
              >
                Submit Request
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="">

        <div className=" mx-auto ">

          <div className="bg-gradient-to-r from-[#111827] to-[#1F2937]   p-12 text-center">

            <h2 className="text-4xl font-bold text-white">
              Need Immediate Legal Help?
            </h2>

            <p className="text-gray-300 mt-3">
              Connect with verified lawyers and get expert guidance today.
            </p>

            <button className="mt-5 bg-[#C9A227] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b59123]">
              Find Lawyer Now
            </button>

          </div>

        </div>

      </section>

    </>
  );
};

export default Contact;