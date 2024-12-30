import PostDetails from "@/src/components/ui/posts/PostDetails";
import { getPost } from "@/src/services/PostServices";

type TProps = {
  params: {
    postId: string;
  };
};

const PostDetailPage = async ({ params }: TProps) => {
  const posts = await getPost(params.postId);
  console.log("post details", posts);

  return (
    <div className="my-10">
      <PostDetails post={posts} />
    </div>
  );
};

export default PostDetailPage;
