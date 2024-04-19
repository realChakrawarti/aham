import PostBody from "@/components/post-body";
import { getAllPosts } from "@/services/getPosts";

export default function Blogs() {
  const allPosts = getAllPosts();

  return (
    <div>
      <h1>Blogs</h1>
      {allPosts.map(async (item) => (
        <PostBody key={item.title} content={item.content} />
      ))}
    </div>
  );
}
