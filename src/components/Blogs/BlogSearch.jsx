import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogSearch = () => {
  return (
    <section className="py-8 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-xl p-4 flex gap-3"
        >

          <input
            type="text"
            placeholder="Search legal articles..."
            className="flex-1 outline-none px-4"
          />

          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#111827] text-white px-6 rounded-full py-2"
          >
            <FaSearch />
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
};

export default BlogSearch;