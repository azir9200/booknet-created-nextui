/* eslint-disable @next/next/no-async-client-component */

import BlogCard from "@/src/components/latestBlog/BlogCard";
import { getAllPosts } from "@/src/services/PostServices";
import Blog from "@/src/types";

const BlogPage = async () => {
  const { data: blogs } = await getAllPosts();

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
