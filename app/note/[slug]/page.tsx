import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllDocs, getDocBySlug } from "@/services/getDocsByPath";
import { noteDirectory } from "@/services/paths";
import { BasicDocumentProps } from "@/interfaces/doc";
import ContentRenderer from "@/components/content-renderer";
import DateFormatter from "@/components/date-formatter";
import ContentBack from "@/components/content-back";

export default async function NoteSlug({ params }: Params) {
  const note = getDocBySlug<BasicDocumentProps>(params.slug, noteDirectory);

  if (!note) {
    return notFound();
  }

  return (
    <div className="relative">
      <ContentBack to="/note" />
      <article className="mx-auto w-full max-w-2xl">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl dark:text-default">
          {note.title}
        </h1>
        <p className="text-excerpt py-4">
          <DateFormatter dateString={note.date} />
        </p>
        <ContentRenderer content={note.content || ""} />
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
  const post = getDocBySlug<BasicDocumentProps>(params.slug, noteDirectory);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${process.env.BRAND_NAME}`;

  return {
    title,
    // openGraph: {
    //   title,
    //   images: [post.ogImage.url],
    // },
  };
}

export async function generateStaticParams() {
  const notes = getAllDocs(noteDirectory, "note");

  return notes.map((note) => ({
    slug: note.slug,
  }));
}
