const HeroSection = () => {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF9F6] via-white to-[#FFF8E7] min-h-[90vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF9F6] via-white to-[#FFF8E7] min-h-[90vh] flex items-center">

            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#111827]/5 rounded-full blur-3xl"></div>

            <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full">
              <div className="grid lg:grid-cols-2 gap-20 items-center">

                {/* Left Side */}
                <div>

                  <span className="inline-flex items-center bg-[#C9A227]/15 text-[#C9A227] px-5 py-2 rounded-full text-sm font-semibold mt-2">
                    ⚖ India's Trusted Legal Platform
                  </span>

                  <h1 className="text-6xl lg:text-7xl font-bold text-[#111827] leading-[1.1] mt-8">
                    Legal Help
                    <span className="block text-[#C9A227]">
                      Made Simple
                    </span>
                  </h1>

                  <p className="text-gray-600 text-xl mt-8 leading-9 max-w-xl">
                    Connect with verified lawyers, compare experts,
                    book consultations, and manage your legal matters
                    with complete privacy and confidence.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-10">
                    <button className="bg-[#111827] text-white px-8 py-4 rounded-xl font-semibold">
                      Find Lawyer
                    </button>

                    <button className="border-2 border-[#C9A227] text-[#C9A227] px-8 py-4 rounded-xl font-semibold">
                      Talk Privately
                    </button>
                  </div>

                  <div className="flex gap-10 mt-12">
                    <div>
                      <h3 className="text-3xl font-bold">500+</h3>
                      <p className="text-gray-500">Verified Lawyers</p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold">50K+</h3>
                      <p className="text-gray-500">Consultations</p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold">98%</h3>
                      <p className="text-gray-500">Success Rate</p>
                    </div>
                  </div>

                </div>

                {/* Right Side */}
                <div>

                  <div className="bg-white/90 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white p-8">

                    <h3 className="text-3xl font-bold text-[#111827] mb-8">
                      Find Your Lawyer
                    </h3>

                    <input
                      type="text"
                      placeholder="What legal help do you need?"
                      className="w-full border border-gray-200 rounded-xl p-4 mb-4"
                    />

                    <input
                      type="text"
                      placeholder="Your City"
                      className="w-full border border-gray-200 rounded-xl p-4 mb-4"
                    />

                    <select className="w-full border border-gray-200 rounded-xl p-4 mb-4">
                      <option>Practice Area</option>
                      <option>Family Law</option>
                      <option>Property Law</option>
                      <option>Corporate Law</option>
                    </select>

                    <button className="w-full bg-[#C9A227] text-black py-4 rounded-xl font-semibold">
                      Match Me With A Lawyer
                    </button>

                  </div>

                </div>

              </div>


            </div>

          </section>


        </div>
      </section>


      {/* Practice Areas */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-[#111827]">
          Legal Services
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">

          {[
            "Family Law",
            "Criminal Law",
            "Property Law",
            "Corporate Law",
            "Tax Law",
            "Cyber Crime",
            "Divorce",
            "Consumer Court"
          ].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-xl">Describe Issue</h3>
              <p className="text-gray-600 mt-3">
                Share your legal problem securely.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-xl">Match Lawyer</h3>
              <p className="text-gray-600 mt-3">
                Compare verified experts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-xl">Get Solution</h3>
              <p className="text-gray-600 mt-3">
                Start consultation and track progress.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
export default HeroSection