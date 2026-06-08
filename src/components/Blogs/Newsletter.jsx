const Newsletter = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#111827] rounded-[40px] p-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Stay Updated
          </h2>

          <p className="text-gray-300 mt-4">
            Get legal tips and updates in your inbox.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-5 py-4 rounded-xl"
            />

            <button className="bg-[#C9A227] text-white px-8 rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;