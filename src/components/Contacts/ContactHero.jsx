
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-[#FAF9F6]">

      {/* Light Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A227]/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C9A227]/5 rounded-full blur-[100px]"></div>

      {/* Decorative Circles */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-[#C9A227]/20 rounded-full"></div>

      <div className="absolute top-32 right-32 w-20 h-20 border border-[#C9A227]/20 rounded-full"></div>

      <div className="absolute bottom-24 left-1/]][3 w-16 h-16 border border-[#C9A227]/20 rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} className="inline-block px-5 py-2 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-medium">
          Contact LegalConnect
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }} className="mt-8 text-5xl lg:text-4xl font-bold text-[#111827] leading-tight">
          We're Here To Help With
          <span className="block text-[#C9A227]">
            Your Legal Journey
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto leading-8">
          Have questions about legal services, consultations,
          or case management? Our team is ready to assist you.
        </motion.p>

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
  );
};

export default ContactHero;