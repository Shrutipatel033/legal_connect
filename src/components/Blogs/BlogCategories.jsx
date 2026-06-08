const categories = [
  "Family Law",
  "Criminal Law",
  "Property Law",
  "Corporate Law",
  "Cyber Law",
  "Labour Law",
];

const BlogCategories = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((item) => (
            <button
              key={item}
              className="px-6 py-3 rounded-full bg-white shadow hover:bg-[#C9A227] hover:text-white transition"
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