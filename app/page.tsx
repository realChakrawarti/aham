import { HomeCard } from "@/components/home-card";
import { getHomeContent } from "@/services/getHomeContent";
import ListPreview from "@/components/list-preview";

export default function Index() {
  const homePosts = getHomeContent();

  const cardContent = homePosts.slice(0, 6);
  const listContent = homePosts.slice(6);

  return (
    <>
      <h1 className="text-2xl">Recent posts</h1>
      <p className="text-excerpt text-base pt-2 pb-4">
        10 most recent blogs and notes published, for more go to respective
        section
      </p>
      <div className="grid grid-cols-12 gap-4">
        {cardContent.map((post) => {
          return (
            <HomeCard
              className="col-span-12 md:col-span-6 lg:col-span-4"
              key={post.title}
              {...post}
            />
          );
        })}
      </div>

      <div className="mt-4">
        {listContent.map((post) => {
          return <ListPreview primary {...post} />;
        })}
      </div>
    </>
  );
}
