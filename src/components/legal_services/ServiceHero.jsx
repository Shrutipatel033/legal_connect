import image1 from "../../assets/slider.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ServicesHero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--accent)]/20 rounded-full blur-[120px] animate-float"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-[150px] animate-float-delayed"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[var(--accent)] font-medium"
        >
          Trusted Legal Platform
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-5xl font-bold text-white mt-4"
        >
          Professional Legal
          <span className="text-[var(--accent)]">
            {" "}Services
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-200 text-lg max-w-xl mx-auto mt-4 leading-8"
        >
          Get expert legal guidance from verified advocates
          across family, criminal, property, corporate and
          cyber law matters.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mt-5"
        >
          <Link to={"/lawyers"} className="bg-[var(--accent)] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Book Consultation
          </Link>

          <button className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="flex flex-wrap justify-center gap-10 mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
        >
          <div>
            <h3 className="text-3xl font-bold text-white">500+</h3>
            <p className="text-gray-300">Verified Lawyers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">50K+</h3>
            <p className="text-gray-300">Consultations</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">98%</h3>
            <p className="text-gray-300">Success Rate</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesHero;