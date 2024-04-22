import { BasicDocumentProps } from "@/interfaces/doc";
import { getAllDocs } from "./getDocsByPath";
import { blogDirectory, noteDirectory } from "./paths";

export const getHomeContent = () => {
  let data = {
    blogs: [] as BasicDocumentProps[],
    notes: [] as BasicDocumentProps[],
  };

  const blogs = getAllDocs(blogDirectory).slice(0, 5);
  const notes = getAllDocs(noteDirectory).slice(0, 5);

  data = { blogs: blogs, notes: notes };

  return data;
};
