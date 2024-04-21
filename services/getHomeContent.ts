import { getAllDocs } from "./getDocsByPath";
import { blogDirectory, noteDirectory } from "./paths";

export const getHomeContent = () => {
  const data = [];

  const blogs = getAllDocs(blogDirectory).slice(0, 3);
  const notes = getAllDocs(noteDirectory).slice(0, 3);

  data.push(blogs);
  data.push(notes);

  return data;
};
