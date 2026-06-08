import {
  FaUserShield,
  FaLock,
  FaMoneyCheckAlt,
  FaBolt,
  FaUserSecret,
  FaGlobeAsia,
} from "react-icons/fa";

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

const Benefits = () => {
  return (
    <section className="py-5 bg-gradient-to-b from-white via-[#FAF9F6] to-white">

      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-10">


          <h2 className="text-2xl font-bold text-[#111827] ">
            Why Choose LegalConnect
          </h2>

          <p className="text-gray-500 max-lg mx-auto mt-4 ">
            Trusted by thousands of clients for secure,
            transparent and professional legal services.
          </p>

        </div>

        <div className="relative ">

          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-[#C9A227]/20 -translate-x-1/2 "></div>

          <div className="space-y-12 ">

            {benefits.map((item, index) => (

              <div
                key={index}
                className={`flex items-center ${index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
                  } flex-col gap-6`}
              >

                {/* Card */}
                <div className="w-full lg:w-[45%]">

                  <div className="
                    bg-white
                    rounded-[30px]
                    p-8
                    shadow-xl
                    border
                    border-gray-100
                    hover:shadow-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                  ">

                    <div className="flex items-center gap-5">

                      <div className="
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
                      ">
                        {item.icon}
                      </div>

                      <div>

                        <h3 className="text-lg font-bold text-[#111827]">
                          {item.title}
                        </h3>

                        <p className="text-gray-500 mt-2 leading-7 text-sm">
                          {item.desc}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Center Circle */}
                <div className="
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
                ">
                  {index + 1}
                </div>

                {/* Empty Side */}
                <div className="hidden lg:block w-[45%]"></div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Benefits;