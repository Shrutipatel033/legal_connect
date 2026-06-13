import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/videos/legal-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-8xl font-black text-[#C9A227]">
          404
        </h1>

        <h2 className="text-4xl font-bold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-300 mt-4 max-w-xl">
          The page you are looking for may have been removed,
          renamed or is temporarily unavailable.
        </p>

        <div className="flex gap-4 mt-8">

          <Link
            to="/"
            className="bg-[#C9A227] text-white px-8 py-3 rounded-xl"
          >
            Back Home
          </Link>

          <Link
            to="/lawyers"
            className="border border-white text-white px-8 py-3 rounded-xl"
          >
            Find Lawyer
          </Link>

        </div>

      </div>

    </section>
  );
};

export default NotFound;