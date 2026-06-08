const HowHero = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-10 bg-[#FAF9F6]">

      {/* Background Effects */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#111827]/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-semibold border border-[#C9A227]/20">
            Legal Process Simplified
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">

            How
            <span className="text-[#C9A227]">
              {" "}LegalConnect
            </span>

            <br />

            Works For You

          </h1>

          <p className="mt-4 text-md lg:text-lg text-gray-600 leading-7 max-w-3xl mx-auto">
            Connect with trusted lawyers, book consultations,
            and get professional legal guidance through a simple,
            secure and transparent process.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">

            <button className="px-8 py-4 rounded-2xl bg-[#111827] text-white font-semibold hover:bg-[#1F2937] transition">
              Find Lawyer
            </button>

            <button className="px-8 py-4 rounded-2xl border border-[#C9A227] text-[#C9A227] font-semibold hover:bg-[#C9A227] hover:text-white transition">
              Learn More
            </button>

          </div>

        </div>


      </div>

    </section>
  );
};

export default HowHero;