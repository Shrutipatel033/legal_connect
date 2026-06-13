import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    text: "+91 98765 43210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    text: "support@legalconnect.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    text: "Lucknow, Uttar Pradesh",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    text: "Mon - Sat | 9 AM - 7 PM",
  },
];

const ContactInfoCards = () => {
  return (
    <section className="py-10 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-[30px] p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#C9A227]/10 rounded-2xl flex items-center justify-center text-[#C9A227] text-2xl mx-auto">
                {card.icon}
              </div>

              <h3 className="font-bold text-xl mt-5">
                {card.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ContactInfoCards;