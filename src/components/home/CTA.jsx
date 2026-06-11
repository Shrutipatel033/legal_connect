import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <section className="relative overflow-hidden py-14 bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#111827]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#C9A227]/20 text-[#C9A227] font-semibold">
            ⚖ Trusted Legal Assistance
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-white mt-8 leading-tight">
            Need Legal Help Today?
          </h2>

          <p className="text-gray-300 mt-4 text-lg max-w-1xl mx-auto leading-8">
            Connect with verified lawyers across India for
            family, property, criminal, corporate and civil matters.
            Secure consultations. Transparent pricing. Fast support.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-5 mt-10"
        >

          <Link to={"/lawyers"} className="bg-[#C9A227] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#b59123] transition-all">
            Find Lawyer Now
          </Link>

          <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
            Talk Privately
          </button>

        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >

          <div>
            <h3 className="text-3xl font-bold text-[#C9A227]">500+</h3>
            <p className="text-gray-300 mt-2">Verified Lawyers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#C9A227]">50K+</h3>
            <p className="text-gray-300 mt-2">Consultations</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#C9A227]">98%</h3>
            <p className="text-gray-300 mt-2">Client Satisfaction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#C9A227]">24/7</h3>
            <p className="text-gray-300 mt-2">Legal Support</p>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CTA;