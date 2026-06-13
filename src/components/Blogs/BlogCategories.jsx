const categories = [
  "Family Law",
  "Criminal Law",
  "Property Law",
  "Divorce Law"
];

const BlogCategories = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`px-6 py-3 rounded-full transition-all
                ${activeCategory === item
                  ? "bg-[#C9A227] text-white"
                  : "bg-white shadow"
                }`}
            >
              {item}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BlogCategories;