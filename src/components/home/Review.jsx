const Review = () => {
  return (
    <div>
      <section className="py-24">

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <h2 className="text-5xl font-bold text-center">
            What Clients Say
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <p className="text-[#C9A227] text-2xl">
                  ⭐⭐⭐⭐⭐
                </p>

                <p className="mt-4 text-gray-600">
                  Found the perfect lawyer within minutes.
                  The process was smooth and secure.
                </p>

                <h4 className="font-bold mt-6">
                  Rahul Verma
                </h4>
              </div>
            ))}

          </div>

        </div>

      </section></div>
  )
}
export default Review