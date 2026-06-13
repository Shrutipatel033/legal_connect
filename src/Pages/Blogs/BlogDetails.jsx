import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
} from "react-icons/fa";
import blogs from "../../data/blogData";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">
          Blog Not Found
        </h2>
      </div>
    );
  }

  const relatedBlogs = blogs.filter(
    (item) =>
      item.category === blog.category &&
      item.id !== blog.id
  );

  return (
    <section className="bg-[#FAF9F6] min-h-screen py-16">

      <div className="max-w-5xl mx-auto px-6">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-[#C9A227] font-medium hover:translate-x-1 transition mb-8"
          >
            <FaArrowLeft />
            Back To Blogs
          </Link>
        </motion.div>

        {/* Category + Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-4 items-center"
        >

          <span className="bg-[#C9A227]/10 text-[#C9A227] px-4 py-2 rounded-full text-sm font-medium">
            {blog.category}
          </span>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaCalendarAlt />
            {blog.date}
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaClock />
            {blog.readTime}
          </div>

        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="text-4xl md:text-4xl font-bold text-[#111827] mt-6 leading-tight"
        >
          {blog.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="text-gray-600 text-lg leading-9 mt-2 "
        >
          {blog.description}
        </motion.p>

        {/* Featured Image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-12"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[500px] object-cover rounded-[32px] shadow-xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-white rounded-[32px] shadow-lg p-8 md:p-12"
        >

          <div className="border-l-4 border-[#C9A227] pl-6 mb-10">
            <p className="text-lg italic text-gray-600">
              {blog.description}
            </p>
          </div>

          <div className="text-gray-700 text-lg leading-9 whitespace-pre-line">
            {blog.content}
          </div>

        </motion.div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="mt-20">

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-[#111827] mb-10"
            >
              Related Articles
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {relatedBlogs.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-6">

                    <span className="text-[#C9A227] text-sm font-medium">
                      {item.category}
                    </span>

                    <h3 className="text-xl font-bold mt-3 text-[#111827]">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 mt-3 text-sm line-clamp-3">
                      {item.description}
                    </p>

                    <Link
                      to={`/blog/${item.id}`}
                      className="inline-block mt-5 bg-[#111827] text-white px-5 py-3 rounded-xl hover:bg-[#C9A227] transition"
                    >
                      Read More
                    </Link>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>
        )}

      </div>

    </section>
  );
};

export default BlogDetails;