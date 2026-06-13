const BlogHero = () => {
  return (
    <section className="bg-[#FAF9F6] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-medium">
              Legal Knowledge Center
            </span>


            <h1 className="text-5xl md:text-4xl font-bold text-[#111827] mt-6">
              Learn Your
              <span className="text-[var(--accent)]"> Legal Rights</span>
            </h1>
            <p className="text-gray-600 text-md leading-8 mt-5 max-w-xl">
              Plain-English legal articles, court procedures,
              legal rights, compliance guides, and expert insights
              to help you make informed decisions.
            </p>

            <div className="flex gap-4 mt-10">

              <button className="bg-[#111827] text-white px-7 py-4 rounded-2xl font-semibold">
                Explore Articles
              </button>

              <button className="border border-[#C9A227] text-[#C9A227] px-7 py-4 rounded-2xl font-semibold hover:bg-[#C9A227] hover:text-white transition">
                Latest Updates
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative">

            <div className="bg-white rounded-[35px] p-8 shadow-2xl">

              <span className="text-[#C9A227] font-semibold text-sm">
                FEATURED ARTICLE
              </span>

              <h3 className="text-2xl font-bold text-[#111827] mt-4 leading-tight">
                Understanding Property Disputes In India
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Learn about ownership conflicts, inheritance disputes,
                land records, and legal remedies available under Indian law.
              </p>

              <div className="flex items-center justify-between mt-8">

                <div>
                  <p className="font-semibold">
                    LegalConnect Team
                  </p>

                  <p className="text-gray-500 text-sm">
                    5 min read
                  </p>
                </div>

                <button className="bg-[#C9A227] text-white px-5 py-3 rounded-xl">
                  Read Now
                </button>

              </div>

            </div>



          </div>

        </div>

      </div>

    </section>
  );
};

export default BlogHero;