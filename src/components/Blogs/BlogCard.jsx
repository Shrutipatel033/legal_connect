import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
      <img
        src={blog.image}
        alt={blog.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <span className="text-[#C9A227] text-sm">
          {blog.category}
        </span>

        <h3 className="text-xl font-bold mt-3">
          {blog.title}
        </h3>

        <p className="text-gray-500 mt-3 text-sm">
          {blog.description}
        </p>

        <Link
          to={`/blog/${blog.id}`}
          className="inline-block mt-5 bg-[#111827] text-white px-5 py-3 rounded-xl"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;