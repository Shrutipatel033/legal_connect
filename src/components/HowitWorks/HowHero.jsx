const HowHero = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827]">

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">

        <span className="bg-[#C9A227]/20 text-[#C9A227] px-5 py-2 rounded-full">
          Legal Process Simplified
        </span>

        <h1 className="text-4xl sm:text-3xl lg:text-4xl font-bold text-white mt-6">
          How LegalConnect{" "}
          <span className="text-[#C9A227]">
            Works
          </span>
        </h1>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-6">
          Get legal support in just a few simple steps.
        </p>

      </div>

    </section>
  );
};

export default HowHero;