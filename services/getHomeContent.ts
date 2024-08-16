import { ArticleLinksProps } from "@/interfaces/doc";
import { getAllDocs, getDocBySlug } from "./getDocsByPath";
import {
  blogsDirectory,
  notesDirectory,
  miscDirectory
} from "./paths";

type ArticleLinksData = {
  data: ArticleLinksProps[]
}

export const getHomeContent = () => {
  let data = [];

  const blogs = getAllDocs(blogsDirectory, "blog").slice(0, 10);
  const notes = getAllDocs(notesDirectory, "note").slice(0, 10);

  data = [...blogs, ...notes];

  const sortedData = data
    .sort((doc1, doc2) => (doc1.date > doc2.date ? -1 : 1))
    .slice(0, 10);

  return sortedData;
};

export const getArticleLinks = () => {
  return getDocBySlug<ArticleLinksData>('article-links', miscDirectory).data
}
