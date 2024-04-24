import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllDocs, getDocBySlug } from "@/services/getDocsByPath";
import { noteDirectory } from "@/services/paths";
import { BasicDocumentProps } from "@/interfaces/doc";
import ContentRenderer from "@/components/content-renderer";
import DateFormatter from "@/components/date-formatter";

export default async function NoteSlug({ params }: Params) {
  const blog = getDocBySlug<BasicDocumentProps>(params.slug, noteDirectory);

  if (!blog) {
    return notFound();
  }

  return (
    <article className="mx-auto w-full max-w-2xl">
      <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl dark:text-default">
        {blog.title}
      </h1>
      <p className="text-excerpt py-4">
        <DateFormatter dateString={blog.date} />
      </p>
      <ContentRenderer content={blog.content || ""} />
    </article>
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
  const blogs = getAllDocs(noteDirectory, "note");

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
