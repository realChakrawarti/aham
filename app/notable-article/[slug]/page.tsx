import { getDocBySlug, getDocSlugs } from "@/services/getDocsByPath";
import { getNotableArticleBySlug } from "@/services/getNotableArticles";
import { notableArticlesDirectory } from "@/services/paths";

type Params = {
  params: {
    slug: string;
  };
};

export default function NotableArticle({ params }: Params) {
  const data = getNotableArticleBySlug(params.slug);
  return <div>Hello</div>;
}

export async function generateStaticParams() {
  const slugs = getDocSlugs(notableArticlesDirectory);
  return slugs.map((slug) => ({
    slug: slug.split(".")[0],
  }));
}
