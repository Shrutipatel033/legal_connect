import { MdFamilyRestroom } from "react-icons/md";
import { RiCriminalFill } from "react-icons/ri";
import { AiFillPropertySafety } from "react-icons/ai";
import { MdCorporateFare } from "react-icons/md";
import { TbTax } from "react-icons/tb";
import { GiCyberEye } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { useState } from "react";
import heroimg from "../../assets/image.jpg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  return (

    <div className="bg-[#FAF9F6]">
      <section
        className="relative overflow-hidden min-h-[90vh] flex items-center "
        style={{ backgroundImage: `url(${heroimg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Dark overlay to make content readable while showing the image clearly */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-[120px] animate-float"></div>

        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-[150px] animate-float-delayed"></div>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center bg-[#C9A227]/20 text-[#C9A227] px-5 py-2 rounded-full text-sm font-semibold mt-5 backdrop-blur-md border border-[#C9A227]/30 ">
                ⚖ India's Trusted Legal Platform
              </span>
              <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white mt-5 drop-shadow-md">
                Legal Help
                <span className="block text-[#C9A227] mt-1">
                  Made Simple
                </span>
              </h1>

              <p className="text-gray-200 text-md mt-4 leading-9 max-w-xl font-medium drop-shadow-sm">
                Connect with verified lawyers, compare experts,
                book consultations, and manage your legal matters
                with complete privacy and confidence.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-white/10 btn-shine backdrop-blur-md border border-white/40 text-white px-4 py-3 rounded-xl font-semibold hover:bg-white/20 hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ">
                  Find Lawyer
                </button>
                <Link
                  to="/anonymous-consultation"
                  className="bg-white/5 btn-shine backdrop-blur-md border border-[#C9A227]/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#C9A227]/20 hover:border-[#C9A227] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Talk Privately
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 lg:gap-10 mt-5 bg-black/40 p-6 rounded-2xl backdrop-blur-md border border-white/10 hover:border-[#C9A227]/40 transition-all duration-500">
                <div>
                  <h3 className="text-3xl font-bold text-white">500+</h3>
                  <p className="text-gray-300 font-medium">Verified Lawyers</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">50K+</h3>
                  <p className="text-gray-300 font-medium">Consultations</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">98%</h3>
                  <p className="text-gray-300 font-medium">Success Rate</p>
                </div>
              </div>
            </motion.div>
            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="min-h-[500px] flex items-center justify-center">
                {showForm ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-[32px] shadow-2xl border border-white/20 p-8 w-full"
                  >
                    <h3 className="text-3xl font-bold text-white mb-8 ">
                      Find Your Lawyer
                    </h3>

                    <input
                      type="text"
                      placeholder="What legal help do you need?"
                      className="w-full border border-white/20 rounded-xl p-4 mb-4 bg-white/10 text-white"
                    />

                    <input
                      type="text"
                      placeholder="Your City"
                      className="w-full border border-white/20 rounded-xl p-4 mb-4 bg-white/10 text-white"
                    />

                    <select className="w-full border border-white/20 rounded-xl p-4 mb-4 bg-black/40 text-white">
                      <option>Practice Area</option>
                      <option>Family Law</option>
                      <option>Property Law</option>
                      <option>Corporate Law</option>
                    </select>

                    <button className="w-full bg-[#C9A227] text-white py-4 rounded-xl font-bold">
                      Match Me With A Lawyer
                    </button>

                  </motion.div>
                ) : (
                  <div className="text-center text-white">


                    <h3 className="text-3xl font-bold mt-6">
                      Need Legal Assistance?
                    </h3>

                    <p className="text-gray-300 mt-4 max-w-md mx-auto">
                      Click "Find My Lawyer" and get connected
                      with verified legal experts across India.
                    </p>

                  </div>
                )}

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Practice Areas */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-16 py-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <h2 className="text-2xl font-bold text-[#111827] mt-2 ">
            Legal Services We Cover
          </h2>
          <div className="w-24 h-1 bg-[#C9A227] rounded-full mx-auto mt-3 animate-line"></div>
          <p className="text-gray-500 max-w-md mx-auto mt-4">
            Get connected with experienced lawyers specializing
            in various legal fields across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 ">

          {[
            {
              icon: <MdFamilyRestroom />,
              title: "Family Law",
              desc: "Divorce, custody, marriage disputes and family matters."
            },
            {
              icon: <RiCriminalFill />,
              title: "Criminal Law",
              desc: "Legal defense, FIR matters and criminal proceedings."
            },
            {
              icon: <AiFillPropertySafety />,
              title: "Property Law",
              desc: "Property disputes, registration and ownership issues."
            },
            {
              icon: <MdCorporateFare />,
              title: "Corporate Law",
              desc: "Business compliance and company legal support."
            },
            {
              icon: <TbTax />,
              title: "Tax Law",
              desc: "Income tax, GST and financial legal matters."
            },
            {
              icon: <GiCyberEye />,
              title: "Cyber Crime",
              desc: "Online fraud, cyber security and digital disputes."
            },
            {
              icon: <FaUser />,
              title: "Labour Law",
              desc: "Employment disputes and workplace regulations."
            },
            {
              icon: <BsBank2 />,
              title: "Banking Law",
              desc: "Loan disputes, recovery and financial matters."
            }
          ].map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={item.title}
              className="
    relative service-card
              overflow-hidden
              group
              rounded-[30px]
          bg-gradient-to-br
          from-white
          via-white
          to-[#FFF8E7]
          p-8
          border
          border-gray-100
          shadow-lg
          hover:shadow-2xl
   
          transition-all
          duration-500
          flex
          flex-col
          h-full
          "
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#C9A227]/10 flex items-center justify-center text-3xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#111827] mt-6">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mt-3 leading-7 text-md flex-grow">
                {item.desc}
              </p>

              <Link
                to={`/services/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative z-20 mt-6 text-[#C9A227] font-semibold hover:translate-x-2 transition-all duration-300"
              >
                Learn More →
              </Link>

              {/* Wave */}
              <div className="absolute bottom-0 left-0 w-full pointer-events-none">
                <svg
                  viewBox="0 0 500 100"
                  preserveAspectRatio="none"
                  className="w-full h-20"
                >
                  <path
                    d="M0,50 C150,120 350,0 500,60 L500,100 L0,100 Z"
                    fill="rgba(201,162,39,0.08)"
                  />
                </svg>
              </div>
            </motion.div>
          ))}

        </div>
      </section >
      {/* How It Works */}
      <section section className="py-10 bg-gradient-to-b from-white to-[#FAF9F6]" >

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-[#111827] ">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-[#C9A227] rounded-full mx-auto mt-3 animate-line"></div>
            <p className="text-gray-500 max-md mx-auto mt-2">
              Get legal assistance in just a few simple steps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

            {[
              {
                number: "01",
                title: "Describe Your Issue",
                desc: "Tell us about your legal matter securely and confidentially."
              },
              {
                number: "02",
                title: "Match With Lawyer",
                desc: "Get connected with verified legal professionals based on your needs."
              },
              {
                number: "03",
                title: "Get Resolution",
                desc: "Consult, manage your case and receive expert legal guidance."
              }
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={item.number}
                className="
            relative
            group
            bg-white
            rounded-[30px]
            p-10
            border
            border-gray-100
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500
            overflow-hidden
          "
              >

                {/* Background Number */}
                <h1 className="absolute top-4 right-6 text-7xl font-bold text-[#C9A227]/10">
                  {item.number}
                </h1>

                {/* Step Circle */}
                <div className="w-20 h-20 rounded-full bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] text-2xl font-bold">
                  {item.number}
                </div>

                <h3 className="text-xl font-bold text-[#111827] mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-8 text-md">
                  {item.desc}
                </p>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#C9A227] group-hover:w-full transition-all duration-500"></div>

              </motion.div>
            ))}

          </div>

        </div>

      </section >

    </div >
  )
}
export default HeroSection