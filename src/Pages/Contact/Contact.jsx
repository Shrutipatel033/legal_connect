import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>

      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] overflow-hidden">

        <div className="absolute top-10 left-10 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 text-center">

          <span className="bg-[#C9A227]/20 text-[#C9A227] px-5 py-2 rounded-full">
            Contact LegalConnect
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6">
            Get In Touch With
            <span className="text-[#C9A227]"> Legal Experts</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6">
            Have questions or need legal assistance?
            Our team is here to help you connect with
            trusted legal professionals.
          </p>

        </div>

      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-[#FAF9F6]">

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
      <section className="py-24">

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
      <section className="py-20 bg-[#FAF9F6]">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold">
                How quickly will I receive a response?
              </h3>

              <p className="text-gray-500 mt-2">
                Usually within 15–30 minutes during working hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold">
                Is my consultation confidential?
              </h3>

              <p className="text-gray-500 mt-2">
                Yes, all consultations and legal documents remain private.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold">
                Can I consult online?
              </h3>

              <p className="text-gray-500 mt-2">
                Yes, we offer secure online consultations.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24">

        <div className="max-w-[1200px] mx-auto px-6">

          <div className="bg-gradient-to-r from-[#111827] to-[#1F2937] rounded-[40px] p-16 text-center">

            <h2 className="text-5xl font-bold text-white">
              Need Immediate Legal Help?
            </h2>

            <p className="text-gray-300 mt-5">
              Connect with verified lawyers and get expert guidance today.
            </p>

            <button className="mt-8 bg-[#C9A227] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b59123]">
              Find Lawyer Now
            </button>

          </div>

        </div>

      </section>

    </>
  );
};

export default Contact;