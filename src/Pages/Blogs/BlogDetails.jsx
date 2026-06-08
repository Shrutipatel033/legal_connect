import { useParams } from "react-router-dom";
import blogs from "../../data/blogData";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <div className="py-20 text-center">
        Blog Not Found
      </div>
    );
  }

  return (
    <section className="py-16 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[450px] object-cover rounded-3xl"
        />

        <div className="mt-8">

          <span className="bg-[#C9A227]/10 text-[#C9A227] px-4 py-2 rounded-full">
            {blog.category}
          </span>

          <p className="text-gray-500 mt-4">
            {blog.date}
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold mt-6 text-[#111827]">
            {blog.title}
          </h1>

          <div className="mt-8 text-gray-600 leading-9 whitespace-pre-line text-lg">
            {blog.content}
          </div>

        </div>

      </div>

    </section>
  );
};

export default BlogDetails;