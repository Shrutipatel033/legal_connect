const PrivacyPromise = () => {
  return (
    <section className="bg-[#111827] py-24 text-white">

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

        <h2 className="text-5xl font-bold text-center">
          Your Privacy Comes First
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {[
            "🔒 Identity Protection",
            "📁 Secure Documents",
            "💬 Private Consultation",
            "🛡 End-to-End Security"
          ].map((item) => (
            <div
              key={item}
              className="bg-white/10 rounded-3xl p-8 backdrop-blur"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
export default PrivacyPromise