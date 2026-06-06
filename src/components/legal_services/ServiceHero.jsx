import image1 from "../../assets/slider.jpg";

const 
ServicesHero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Small Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[var(--accent)] font-medium">
          Trusted Legal Platform
        </span>

        <h1 className="text-5xl md:text-5xl font-bold text-white mt-6">
          Professional Legal
          <span className="text-[var(--accent)]"> Services</span>
        </h1>

        <p className="text-gray-200 text-lg max-w-xl mx-auto mt-6 leading-8">
          Get expert legal guidance from verified advocates
          across family, criminal, property, corporate and
          cyber law matters.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <button className="bg-[var(--accent)] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Book Consultation
          </button>

          <button className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
};

export default ServicesHero;