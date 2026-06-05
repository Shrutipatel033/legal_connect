const PopularCategories = () => {
  return (
    <div>
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <h2 className="text-5xl font-bold text-center text-[#111827]">
            Popular Legal Categories
          </h2>

          <p className="text-center text-gray-500 mt-4">
            Connect with experts across every legal domain.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {[
              "⚖ Family Law",
              "🏠 Property Law",
              "🏢 Corporate Law",
              "🔐 Cyber Crime",
              "🚔 Criminal Law",
              "💼 Employment Law",
              "💰 Tax Law",
              "💰 Laboure Law",
              "📄 Documentation"
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}

          </div>

        </div>
      </section>
    </div>
  )
}
export default PopularCategories