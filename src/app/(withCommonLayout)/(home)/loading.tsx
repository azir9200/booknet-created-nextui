import LoadingCard from "@/src/components/ui/LoadingCard";
import Blog from "@/src/types";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:3001/blogs");

  const blogs = await res.json();

  return (
    <div className="text-2xl text-center text-red-600">
      <p>Blog card is loading</p>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog: Blog) => (
          <LoadingCard key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogLoadingPage;
