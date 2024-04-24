import { getAllDocs } from "./getDocsByPath";
import { blogDirectory, noteDirectory } from "./paths";

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
