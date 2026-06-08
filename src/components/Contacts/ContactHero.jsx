import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] py-28">

      <div className="absolute top-0 left-0 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center">

        <span className="inline-block px-5 py-2 bg-[#C9A227]/20 text-[#C9A227] rounded-full font-semibold">
          Contact LegalConnect
        </span>

        <h1 className="text-5xl lg:text-7xl font-bold text-white mt-6">
          Get In Touch With
          <span className="block text-[#C9A227]">
            Legal Experts
          </span>
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg leading-8">
          Need legal guidance? Contact our team and get connected
          with trusted lawyers across India.
        </p>

      </div>
    </section>
  );
};

export default ContactHero;