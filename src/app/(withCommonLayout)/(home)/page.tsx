import Banner from "@/src/components/shared/Banner";
import LatestPosts from "@/src/components/ui/posts/latestPosts";
import { getAllPosts } from "@/src/services/PostServices";

const HomePage = async () => {
  const posts = await getAllPosts("isr");
  console.log("Home page", posts);

  return (
    <div>
      <Banner />
      <LatestPosts posts={posts} />
    </div>
  );
};

export default HomePage;
