import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllDocs, getDocBySlug } from '@/services/getDocsByPath';
import { notesDirectory } from '@/services/paths';
import { BasicDocumentProps } from '@/interfaces/doc';
import ContentRenderer from '@/components/content-renderer';
import DateFormatter from '@/components/date-formatter';
import ContentBack from '@/components/content-back';
import { MdDateRange } from "react-icons/md";

export default async function NoteSlug({ params }: Params) {
  const note = getDocBySlug<BasicDocumentProps>(params.slug, notesDirectory);

  if (!note) {
    return notFound();
  }

  return (
    <div className="relative">
      <ContentBack to="note" />
      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        className="mx-auto w-full max-w-2xl"
      >
        <h1
          itemProp="name"
          className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl dark:text-default
            font-hilmar tracking-wider"
        >
          {note.title}
        </h1>
        <p className="text-excerpt py-4 font-hilmar tracking-wide flex gap-2">
          <MdDateRange className='size-5' />          
          <DateFormatter dateString={note.date} formatType="long" />
        </p>
        <ContentRenderer content={note.content || ''} />
      </article>
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getDocBySlug<BasicDocumentProps>(params.slug, notesDirectory);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | A ${process.env.BRAND_NAME}`;

  return {
    title,
    // openGraph: {
    //   title,
    //   images: [post.ogImage.url],
    // },
  };
}

export async function generateStaticParams() {
  const notes = getAllDocs(notesDirectory, 'note');

  return notes.map((note) => ({
    slug: note.slug,
  }));
}
