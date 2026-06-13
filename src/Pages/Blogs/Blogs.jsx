import { useState } from "react";
import BlogHero from "../../components/Blogs/BlogHero";
import BlogSearch from "../../components/Blogs/BlogSearch";
import BlogCategories from "../../components/Blogs/BlogCategories";
import FeaturedBlog from "../../components/Blogs/FeaturedBlog";
import BlogGrid from "../../components/Blogs/BlogGrid";

const Blogs = () => {
  const [activeCategory, setActiveCategory] =
    useState("Family Law");

  return (
    <>
      <BlogHero />
      <BlogSearch />

      <BlogCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <FeaturedBlog activeCategory={activeCategory} />

      <BlogGrid activeCategory={activeCategory} />
    </>
  );
};

export default Blogs;