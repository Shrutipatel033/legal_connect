import { Link } from "react-router-dom";

const FeaturedBlog = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[40px] overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
              alt=""
              className="h-full object-cover"
            />
            <div className="p-10">
              <span className="text-[#C9A227]">
                Featured Article
              </span>

              <h2 className="text-2xl font-bold mt-4">
                How Divorce Process Works In India
              </h2>

              <p className="text-gray-500 mt-5">
                Complete guide on eligibility, documents,
                timeline and legal process.
              </p>

              <Link
                to="/blog/1"
                className="inline-block mt-8 bg-[#111827] text-white px-8 py-4 rounded-xl"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;