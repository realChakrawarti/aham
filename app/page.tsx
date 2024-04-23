import BlogPreview from "@/components/blog-preview.new";
import { HomeCard } from "@/components/home-card";
import { getHomeContent } from "@/services/getHomeContent";

export default function Index() {
  const homePosts = getHomeContent();

  return (
    <>
      <h1 className="text-2xl py-2">Recent posts</h1>
      <div className="grid grid-cols-12 gap-4">
        {homePosts.blogs.map((post) => {
          return (
            <HomeCard
              className="col-span-12 md:col-span-6 lg:col-span-4"
              key={post.title}
              date={post.date}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
            />
          );
        })}
      </div>

      <div className="mt-4">
        {homePosts.blogs.map((post) => {
          return (
            <BlogPreview
              key={post.title}
              date={post.date}
              slug={post.slug}
              title={post.title}
              tags={post.tags || []}
              excerpt={post.excerpt}
            />
          );
        })}
      </div>
    </>
  );
}
