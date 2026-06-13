import blogs from "../../data/blogData";
import BlogCard from "./BlogCard";

const BlogGrid = ({ activeCategory }) => {
  const filteredBlogs = blogs.filter(
    (blog) => blog.category === activeCategory
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          {activeCategory} Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))
          ) : (
            <p>No articles found.</p>
          )}

        </div>

      </div>
    </section>
  );
};

export default BlogGrid;