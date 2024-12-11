import LatestBlog from "@/src/components/latestBlog/LatestBlog";
import Banner from "@/src/components/shared/Banner";

const HomePage = async () => {
  const res = await fetch("http://localhost:3001/blogs");
  const blogs = await res.json();

  return (
    <div>
      <Banner />
      <LatestBlog blogs={blogs} />
    </div>
  );
};

export default HomePage;
