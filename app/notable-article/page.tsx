import { getDocSlugs } from '@/services/getDocsByPath';
import { notableArticlesDirectory } from '@/services/paths';
import Link from 'next/link';

export default function NotableArticle() {
  const slugs = getDocSlugs(notableArticlesDirectory);
  const years = slugs.map((slug) => slug.split('.')[0]);

  return (
    <>
      <h1>Articles years</h1>
      {years.map((year) => (
        <Link key={year} href={`${year}`}>
          {year}
        </Link>
      ))}
    </>
  );
}
