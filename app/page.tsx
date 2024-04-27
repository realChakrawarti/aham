import { HomeCard } from "@/components/home-card";
import { getHomeContent, getNotableArticles } from "@/services/getHomeContent";
import ListPreview from "@/components/list-preview";

export default function Index() {
  const homePosts = getHomeContent();

  const notablePosts = getNotableArticles(5);

  const cardContent = homePosts.slice(0, 4);
  const listContent = homePosts.slice(4);

  return (
    <>
      <div className="flex flex-col">
        <div className="block lg:flex w-full">
          {/* 4 Home cards */}
          <div className="w-full lg:w-2/3 ">
            <h1 className="text-2xl">Recent posts</h1>
            <p className="text-excerpt text-base pt-2 pb-4">
              10 most recent blogs and notes published, for more go to
              respective section
            </p>
            <div className="grid grid-cols-12 gap-4">
              {cardContent.map((post) => {
                return (
                  <HomeCard
                    className="col-span-12 md:col-span-6"
                    key={post.title}
                    {...post}
                  />
                );
              })}
            </div>
          </div>
          {/* Notable articles tablet/desktop */}
          <div className="hidden lg:block lg:w-1/3 flex-grow pl-4">
            <h1 className="text-2xl text-right">Notable Articles</h1>
            <p className="text-excerpt text-base pt-2 pb-4 text-right">
              Top 5 articles read recently which are worth sharing
            </p>
            <ul className="text-right divide-y-2 space-y-2">
              {notablePosts.map((article) => {
                return (
                  <li key={article.label}>
                    <div className="divide-x-2">
                      {article.tag.map((item) => (
                        <span key={item} className="px-2">
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      className="text-link hover:underline underline-offset-2 visited:text-action"
                      href={article.link}
                      target="_blank"
                    >
                      {article.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* 6 remaining home posts */}
        <div className="mt-4">
          {listContent.map((post) => {
            return <ListPreview key={post.slug} primary {...post} />;
          })}
        </div>
        {/* Notable articles mobile */}
        <div className="lg:hidden mt-4 block">
          <h1 className="text-2xl">Notable Articles</h1>
          <p className="text-excerpt text-base pt-2 pb-4">
            Top 5 articles read recently which are worth sharing
          </p>
          <ul className="list-disc">
            {notablePosts.map((article) => {
              return (
                <li key={article.label}>
                  <div className="inline divide-x-2">
                    {article.tag.map((item) => (
                      <span key={item} className="px-1">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    className="text-link hover:underline underline-offset-2 visited:text-action"
                    href={article.link}
                    target="_blank"
                  >
                    {article.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
