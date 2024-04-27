import { getDocBySlug } from "./getDocsByPath";
import { notableArticlesDirectory } from "./paths";

export function getNotableArticleBySlug(slug: string) {
  const directory = notableArticlesDirectory;
  return getDocBySlug(slug, directory);
}
