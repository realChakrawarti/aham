import { getArticleLinks } from '@/services/getHomeContent';

export default function ArticleLinksPage() {
  const articleLinks = getArticleLinks();
  return (
    <div>
      {articleLinks.map((article, index) => {
        return (
          <span className="flex gap-2 items-center" key={article.label}>
            <a
              className="text-link hover:underline underline-offset-2 visited:text-action font-slalom"
              href={article.link}
              target="_blank"
            >
              {article.label}
            </a>
          </span>
        );
      })}
    </div>
  );
}
