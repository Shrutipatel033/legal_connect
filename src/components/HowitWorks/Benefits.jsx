import {
  FaUserShield,
  FaLock,
  FaMoneyCheckAlt,
  FaBolt,
  FaUserSecret,
  FaGlobeAsia,
} from "react-icons/fa";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <FaUserShield />,
    title: "Verified Lawyers",
    desc: "Connect with experienced and verified legal professionals across India.",
  },
  {
    icon: <FaLock />,
    title: "Secure Consultations",
    desc: "Your legal discussions and documents remain completely confidential.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Transparent Pricing",
    desc: "No hidden charges. Know consultation fees before booking.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Response",
    desc: "Receive quick responses from lawyers when you need legal guidance.",
  },
  {
    icon: <FaUserSecret />,
    title: "Privacy Protection",
    desc: "Your identity and legal information are protected with advanced security.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Nationwide Coverage",
    desc: "Find lawyers from different cities, courts, and practice areas.",
  },
];

const leftVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const rightVariant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Benefits = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-[#FAF9F6] to-white">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-3xl font-bold text-[#111827]">
            Why Choose LegalConnect
          </h2>

          <div className="w-24 h-1 bg-[#C9A227] rounded-full mx-auto mt-4"></div>

          <p className="text-gray-500 max-w-2xl mx-auto mt-5 leading-8">
            Trusted by thousands of clients for secure,
            transparent and professional legal services.
          </p>
        </motion.div>

        <div className="relative">

          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-[#C9A227]/20 -translate-x-1/2"></div>

          <div className="space-y-12">

            {benefits.map((item, index) => (

              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={
                  index % 2 === 0
                    ? leftVariant
                    : rightVariant
                }
                className={`flex items-center ${index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
                  } flex-col gap-6`}
              >

                {/* Card */}
                <div className="w-full lg:w-[45%]">

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      bg-white
                      rounded-[30px]
                      p-8
                      shadow-xl
                      border
                      border-gray-100
                      hover:shadow-2xl
                      transition-all
                      duration-500
                    "
                  >

                    <div className="flex items-center gap-5">

                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          rotate: 10,
                          scale: 1.15,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="
                          w-16
                          h-16
                          rounded-2xl
                          bg-gradient-to-br
                          from-[#C9A227]
                          to-[#e0bc48]
                          text-white
                          flex
                          items-center
                          justify-center
                          text-2xl
                          shadow-lg
                        "
                      >
                        {item.icon}
                      </motion.div>

                      <div>

                        <h3 className="text-xl font-bold text-[#111827]">
                          {item.title}
                        </h3>

                        <p className="text-gray-500 mt-2 leading-7">
                          {item.desc}
                        </p>

                      </div>

                    </div>

                  </motion.div>

                </div>

                {/* Center Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  className="
                    hidden
                    lg:flex
                    w-12
                    h-12
                    rounded-full
                    bg-[#C9A227]
                    text-white
                    items-center
                    justify-center
                    font-bold
                    shadow-xl
                    z-10
                  "
                >
                  {index + 1}
                </motion.div>

                {/* Empty Side */}
                <div className="hidden lg:block w-[45%]"></div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Benefits;