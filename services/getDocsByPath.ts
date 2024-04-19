import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

// const postsDirectory = join(process.cwd(), "documents", "blogs");

function getDocSlugs(directory: string) {
  return fs.readdirSync(directory);
}

export function getDocBySlug(slug: string, directory: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllDocs(directory: string): Post[] {
  const slugs = getDocSlugs(directory);
  const posts = slugs
    .map((slug) => getDocBySlug(slug, directory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
