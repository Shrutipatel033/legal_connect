import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#111827] to-[#1F2937] p-12 text-center"
      >
        <h2 className="text-4xl font-bold text-white">
          Need Immediate Legal Help?
        </h2>

        <p className="text-gray-300 mt-3">
          Connect with verified lawyers today.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 bg-[#C9A227] text-white px-8 py-4 rounded-xl"
        >
          Find Lawyer Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ContactCTA;