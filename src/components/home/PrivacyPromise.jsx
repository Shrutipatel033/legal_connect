import identity from "../../assets/identity.webp";
import endtoend from "../../assets/endtoend.jpg";
import secure from "../../assets/securedocument.webp";
import privateconsult from "../../assets/privateconsulation.avif";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import { FaUserShield } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { motion } from "framer-motion";
const privacyItems = [
  {
    title: "Identity Protection",
    icon: <FaUserShield />,
    image: identity,
  },
  {
    title: "Secure Documents",
    icon: <IoMdDocument />,
    image: secure,
  },
  {
    title: "Private Consultation",
    icon: <MdOutlinePrivacyTip />,
    image: privateconsult,
  },
  {
    title: "End-to-End Security",
    icon: <MdOutlineSecurity />,
    image: endtoend,
  },
];
const PrivacyPromise = () => {
  return (
    <section className="bg-gradient-to-br from-white via-[#FAF9F6] to-[#F3F4F6] py-8">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-2xl font-bold text-center"
        >
          Your Privacy Comes First
        </motion.h2>
        <div className="w-24 h-1 bg-[#C9A227] rounded-full mx-auto mt-3 animate-line"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

          {privacyItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={item.title}
              className="
        relative
        overflow-hidden
        rounded-3xl
        h-[320px]
        group
        shadow-xl
      "
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/60 to-transparent transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">

                <div className="text-5xl text-white mb-4">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-200 mt-3">
                  Your information remains protected and confidential.
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  )
}
export default PrivacyPromise