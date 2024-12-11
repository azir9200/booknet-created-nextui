/* eslint-disable @next/next/no-async-client-component */

import BlogCard from "@/src/components/latestBlog/BlogCard";
import { useGetBlogsQuery } from "@/src/redux/api/baseApi/baseApi";
import Blog from "@/src/types";

const BlogPage = async () => {
  const res = await fetch("http://localhost:3001/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();

  // const { data: blogs, isLoading, error } = useGetBlogsQuery(undefined);

  return (
    <div className="w-[90%] mx-auto my-5 ">
      <div>
        <h2 className="text-4xl text-center my-5">
          Latest blog from <span className="text-cyan-600">Blogiz</span>{" "}
        </h2>
        <p className="text-xl text-center text-cyan-500 w-2/4 mx-auto">
          <i>
            {" "}
            You will find our latest all update here in this page, fell free to
            explore.
          </i>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-6">
        {blogs?.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
};
export default BlogPage;
