import { FaSearch } from "react-icons/fa";

const BlogSearch = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-4 flex gap-3">
          <input
            type="text"
            placeholder="Search legal articles..."
            className="flex-1 outline-none px-4"
          />

          <button className="bg-[#111827] text-white px-6 rounded-full py-2">
            <FaSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSearch;