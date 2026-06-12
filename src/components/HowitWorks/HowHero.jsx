import { motion } from "framer-motion";
const HowHero = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-10 bg-[#FAF9F6]">

      {/* Background Effects */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#111827]/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}

            className="inline-flex items-center px-5 py-2 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-semibold border border-[#C9A227]/20">
            Legal Process Simplified
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }} className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">

            How
            <span className="text-[#C9A227]">
              {" "}LegalConnect
            </span>

            <br />

            Works For You

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} className="mt-4 text-md lg:text-lg text-gray-600 leading-7 max-w-3xl mx-auto">
            Connect with trusted lawyers, book consultations,
            and get professional legal guidance through a simple,
            secure and transparent process.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-wrap justify-center gap-4 mt-5"
          >
            <button className="px-8 py-4 rounded-2xl bg-[#111827] text-white font-semibold hover:bg-[#1F2937] transition">
              Find Lawyer
            </button>

            <button className="px-8 py-4 rounded-2xl border border-[#C9A227] text-[#C9A227] font-semibold hover:bg-[#C9A227] hover:text-white transition">
              Learn More
            </button>

          </motion.div>

        </div>


      </div>

    </section>
  );
};

export default HowHero;