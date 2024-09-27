import React from "react";
import BlogPage from "../components/BlogPage";

const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5x1 lg:text-7xl leading-snug font-bold mb-5">
          Blog Page
        </h2>
      </div>

      {/* ALL BLOGS CONTAINER */}
      <div className="max-w-7x1 mx-auto">
        <BlogPage/>
      </div>
    </div>
  );
};

export default Blogs;
