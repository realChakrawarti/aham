import { HomeCard } from '@/components/home-card';
import { getHomeContent, getNotableArticles } from '@/services/getHomeContent';
import AboutMe from '@/components/about-me';
import { FooterDivider } from 'flowbite-react';

export default function Index() {
  const homePosts = getHomeContent();

  const notablePosts = getNotableArticles(5);

  const cardContent = homePosts.slice(0, 6);

  return (
    <div className="flex flex-col">
      <AboutMe />
      <div className="block lg:flex w-full mt-4">
        {/* 6 Home cards */}
        <div className="w-full ">
          <h1 className="text-2xl font-hilmar">Recent posts</h1>
          <p className="text-excerpt text-base pt-2 pb-4 font-slalom">
            Recent blogs and notes published, for more go to respective section
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
        </div>
      </div>
      {/* Notable articles */}
      <div className="mt-4 block">
        <FooterDivider />
        <h1 className="text-2xl font-hilmar">Notable Articles</h1>
        <p className="text-excerpt text-base pt-2 pb-4 font-slalom">
          Top 5 articles read recently which are worth sharing
        </p>
        <div className='flex flex-col lg:flex-row gap-3'>
          {notablePosts.map((article, index) => {
            return (
              <span className='flex gap-2 items-center' key={article.label}>
                <a
                  className="text-link hover:underline underline-offset-2 visited:text-action font-slalom"
                  href={article.link}
                  target="_blank"
                >
                  {article.label}
                </a>
                {index !== notablePosts.length - 1 && <span className='hidden lg:inline-block'>|</span>}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
