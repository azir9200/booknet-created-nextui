import Banner from "@/src/components/shared/Banner";
import LatestPosts from "@/src/components/ui/posts/latestPosts";

const HomePage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();

  console.log("Home page", posts);

  return (
    <div>
      <Banner />
      <LatestPosts posts={posts} />
    </div>
  );
};

export default HomePage;
