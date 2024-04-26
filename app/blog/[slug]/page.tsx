import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllDocs, getDocBySlug } from "@/services/getDocsByPath";
import { blogDirectory } from "@/services/paths";
import { BasicDocumentProps } from "@/interfaces/doc";
import ContentRenderer from "@/components/content-renderer";
import DateFormatter from "@/components/date-formatter";
import { readingTime } from "reading-time-estimator";
import ScrollTop from "@/components/scroll-top";
import ContentBack from "@/components/content-back";

export default async function Post({ params }: Params) {
  const blog = getDocBySlug<BasicDocumentProps>(params.slug, blogDirectory);

  if (!blog) {
    return notFound();
  }

  const readTime = readingTime(blog.content || "", 200);

  return (
    <div className="relative">
      <ContentBack to={"blog"} />
      <ScrollTop />
      <article className="mx-auto w-full max-w-2xl">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl dark:text-default">
          {blog.title}
          <p className="font-medium text-sm text-excerpt">
            {readTime.text} | {readTime.words} words
          </p>
        </h1>
        <p className="text-excerpt py-4">
          <DateFormatter dateString={blog.date} />
        </p>
        <ContentRenderer content={blog.content || ""} />
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
  const post = getDocBySlug<BasicDocumentProps>(params.slug, blogDirectory);

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
  const blogs = getAllDocs(blogDirectory, "blog");

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
