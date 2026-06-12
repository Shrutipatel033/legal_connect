import { motion } from "framer-motion";

const Timeline = () => {
  const steps = [
    {
      no: "01",
      title: "Submit Request",
      desc: "Tell us about your legal issue securely and privately.",
    },
    {
      no: "02",
      title: "Lawyer Matching",
      desc: "We connect you with suitable verified legal experts.",
    },
    {
      no: "03",
      title: "Consultation",
      desc: "Discuss your case through online or offline consultation.",
    },
    {
      no: "04",
      title: "Get Resolution",
      desc: "Receive legal guidance and move forward confidently.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-[#FAF9F6] to-white">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >

          <span className="px-5 py-2 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-semibold">
            Legal Process
          </span>

          <h2 className="text-3xl lg:text-3xl font-bold text-[#111827] mt-5">
            Your Legal Journey
          </h2>

          <div className="w-24 h-1 bg-[#C9A227] rounded-full mx-auto mt-2 "></div>

          <p className="text-gray-500 mt-2 max-w-xl mx-auto leading-8">
            A simple and transparent process designed to connect
            you with trusted legal professionals.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <motion.div
              key={step.no}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                relative
                bg-white
                rounded-[32px]
                p-8
                border
                border-gray-100
                shadow-xl
                hover:shadow-2xl
                transition-all
                duration-500
                overflow-hidden
                text-center
              "
            >

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] via-[#e4bf48] to-[#C9A227]"></div>

              {/* Glow Circle */}
              <div className="
                absolute
                -top-10
                -right-10
                w-32
                h-32
                bg-[#C9A227]/10
                rounded-full
                blur-2xl
              "></div>

              {/* Background Number */}
              <h1
                className="
                  absolute
                  top-2
                  right-4
                  text-[80px]
                  font-black
                  text-[#C9A227]/10
                  select-none
                "
              >
                {step.no}
              </h1>

              {/* Step Number */}
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#111827]
                  to-[#1F2937]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                  shadow-lg
                  relative
                  z-10
                "
              >
                {step.no}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#111827] mt-6">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mt-4 leading-7">
                {step.desc}
              </p>

              {/* Bottom Accent */}
              <motion.div
                whileHover={{
                  width: "80px",
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  mt-6
                  mx-auto
                  w-12
                  h-1
                  bg-[#C9A227]
                  rounded-full
                "
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Timeline;