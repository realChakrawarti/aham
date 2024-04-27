import { NotableArticleProps } from "@/interfaces/doc";
import { getAllDocs, getDocBySlug, getDocSlugs } from "./getDocsByPath";
import {
  blogDirectory,
  notableArticlesDirectory,
  noteDirectory,
} from "./paths";

export const getHomeContent = () => {
  let data = [];

  const blogs = getAllDocs(blogDirectory, "blog").slice(0, 10);
  const notes = getAllDocs(noteDirectory, "note").slice(0, 10);

  data = [...blogs, ...notes];

  const sortedData = data
    .sort((doc1, doc2) => (doc1.date > doc2.date ? -1 : 1))
    .slice(0, 10);

  return sortedData;
};

export function getNotableArticles(limit: number) {
  const directory = notableArticlesDirectory;
  const slugs = getDocSlugs(directory);
  let docsData: NotableArticleProps[] = [];
  const docs = slugs.map((slug) => {
    const yearData = getDocBySlug(slug, directory) as any;
    docsData.push(...yearData.data);
  });
  return docsData.slice(0, 5);
}
