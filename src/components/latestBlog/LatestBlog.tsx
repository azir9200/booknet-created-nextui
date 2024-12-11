import Blog from "@/src/types";
import LatestBlogCard from "./LatestBlogCard";
import BlogCard from "./BlogCard";

const LatestBlog = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
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
      <div className="grid grid-cols-2 gap-4 my-6">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 my-6">
        {blogs.slice(3, 6).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
