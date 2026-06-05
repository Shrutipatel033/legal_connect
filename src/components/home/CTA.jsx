const CTA = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#111827]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-[#C9A227]/20 text-[#C9A227] font-semibold">
          ⚖ Trusted Legal Assistance
        </span>

        <h2 className="text-5xl lg:text-6xl font-bold text-white mt-8 leading-tight">
          Need Legal Help Today?
        </h2>

        <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto leading-8">
          Connect with verified lawyers across India for
          family, property, criminal, corporate and civil matters.
          Secure consultations. Transparent pricing. Fast support.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <button className="bg-[#C9A227] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#b59123] transition-all">
            Find Lawyer Now
          </button>

          <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
            Talk Privately
          </button>

        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

          <div>
            <h3 className="text-4xl font-bold text-[#C9A227]">500+</h3>
            <p className="text-gray-300 mt-2">Verified Lawyers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#C9A227]">50K+</h3>
            <p className="text-gray-300 mt-2">Consultations</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#C9A227]">98%</h3>
            <p className="text-gray-300 mt-2">Client Satisfaction</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#C9A227]">24/7</h3>
            <p className="text-gray-300 mt-2">Legal Support</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;