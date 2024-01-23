import React, { useEffect, useState } from "react";
import SingleBlog from "../components/Blog/SingleBlog";
import { fetchBlogs } from "../utils/common/FetchApi";
import { Skeleton } from "@mui/material";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBlogs(setBlogs);
    setIsLoading(false);
  }, []);
  return (
    <div className="py-24 sm:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl text-left font-bold tracking-tight text-white sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {isLoading && (
            <div className="d-flex">
              <Skeleton
                variant="rectangle"
                animation="wave"
                height={220}
                width={400}
              />
            </div>
          )}
          {blogs &&
            blogs.map((blog) => <SingleBlog blog={blog} key={blog._id} />)}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
