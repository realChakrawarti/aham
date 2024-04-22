import { HomeCard } from "@/components/home-card";
import { getHomeContent } from "@/services/getHomeContent";

export default function Index() {
  const homePosts = getHomeContent();

  return (
    <div>
      <h1>Blogs</h1>
      <main className="dark grid grid-cols-12 gap-4">
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
      </main>
      <h1>Notes</h1>
      <main className="dark grid grid-cols-12 gap-4">
        {homePosts.notes.map((post) => {
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
      </main>
    </div>
  );
}
