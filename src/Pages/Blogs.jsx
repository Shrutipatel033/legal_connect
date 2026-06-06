import BlogHero from "../components/Blogs/BlogHero";
import BlogCategories from "../components/Blogs/BlogCategories";
import FeaturedBlog from "../components/Blogs/FeaturedBlog";
import BlogGrid from "../components/Blogs/BlogGrid";
import Newsletter from "../components/Blogs/Newsletter";

const Blogs = () => {
  return (
    <>
      <BlogHero />
      <BlogCategories />
      <FeaturedBlog />
      <BlogGrid />
      <Newsletter />
    </>
  );
};

export default Blogs;