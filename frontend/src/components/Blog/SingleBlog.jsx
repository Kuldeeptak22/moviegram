import React from "react";
import { BaseURL } from "../../utils/common/APIs";
import { useNavigate } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  const navigate = useNavigate();
  const goToBlogDetail = (id) => {
    navigate(`/blogs/blogDetails/${id}`);
  };
  return (
    <article
      key={blog._id}
      className="flex max-w-xl flex-col items-start justify-between bg-slate-300 p-3 cursor-pointer hover:bg-gray-400"
      onClick={()=>goToBlogDetail(blog._id)}
    >
      <div
        className="flex items-center gap-x-4 text-xs"
        style={{ alignItems: "baseline" }}
      >
        <time dateTime={blog.date} className="text-gray-500">
          {blog.date}
        </time>
        <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 no-underline">
          {blog.category.name}
        </p>
      </div>
      <div className="group relative">
        <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span className="absolute inset-0" />
          {blog.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {blog.description}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          src={`${BaseURL}/uploads/authors/${blog.author.avatar}`}
          alt={blog.author.name}
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-3">
          <p className="font-semibold text-gray-900">
            <span className="absolute inset-0" />
            {blog.author.name}
          </p>
          <p className="text-gray-600">{blog.author.role}</p>
        </div>
      </div>
    </article>
  );
};

export default SingleBlog;
