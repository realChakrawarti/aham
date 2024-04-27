import { join } from "path";

export const navPaths = [
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Note",
    path: "/note",
  },
  {
    label: "Now",
    path: "/now",
  },
  {
    label: "Project",
    path: "/project",
  },
  {
    label: "Resume",
    path: "/resume",
  },
];

export const blogDirectory = join(process.cwd(), "documents", "blog");
export const noteDirectory = join(process.cwd(), "documents", "note");
export const nowDirectory = join(process.cwd(), "documents", "now");
export const projectDirectory = join(process.cwd(), "documents", "project");
export const notableArticlesDirectory = join(
  process.cwd(),
  "documents",
  "notable"
);
