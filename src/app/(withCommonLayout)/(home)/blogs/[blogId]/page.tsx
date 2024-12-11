import BlogDetails from "@/src/components/latestBlog/BlogDetails";
import Blog from "@/src/types";

interface BlogId {
  params: {
    blogId: string;
  };
}
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:3001/blogs");

  const blogs = await res.json();

  return blogs.slice(0, 3).map((blog: Blog) => ({ blogId: blog.id }));
};

const BlogDetailPage = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:3001/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailPage;
