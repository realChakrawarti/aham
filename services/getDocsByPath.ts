import { BasicDocumentProps } from '@/interfaces/doc';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export function getDocSlugs(directory: string) {
  return fs.readdirSync(directory);
}

/**
 *
 * @param slug filename
 * @param directory directory while the file exists
 * @returns document data
 */
export function getDocBySlug<T>(slug: string, directory: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const docData = { ...data, slug: realSlug, content } as T;

  return docData;
}

export function getAllDocs(directory: string, type: string) {
  const slugs = getDocSlugs(directory);
  const docs = slugs
    .map((slug) => getDocBySlug(slug, directory) as BasicDocumentProps)
    // sort posts by date in descending order
    .sort((doc1, doc2) => (doc1.date > doc2.date ? -1 : 1))
    .map((content) => ({ ...content, type: type }));
  return docs;
}
