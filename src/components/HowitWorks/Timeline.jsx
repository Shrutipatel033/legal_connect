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
    <section className="py-10 bg-[#FAF9F6]">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">


          <h2 className="text-3xl lg:text-3xl font-bold text-[#111827] mt-5">
            Your Legal Journey
          </h2>

          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            A simple process designed to connect you with trusted lawyers.
          </p>

        </div>

        {/* Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step) => (

            <div
              key={step.no}
              className="
                relative
                bg-white
                rounded-[30px]
                p-8
                border
                border-gray-100
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
                overflow-hidden
                text-center
              "
            >

              {/* Background Number */}
              <h1
                className="
                  absolute
                  top-2
                  right-4
                  text-[70px]
                  font-black
                  text-[#C9A227]/10
                  select-none
                "
              >
                {step.no}
              </h1>

              {/* Number Circle */}
              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-2xl
                  bg-[#111827]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                "
              >
                {step.no}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#111827] mt-6">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mt-4 leading-7">
                {step.desc}
              </p>

              {/* Bottom Line */}
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-1 bg-[#C9A227] rounded-full"></div>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Timeline;