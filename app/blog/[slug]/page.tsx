import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllDocs, getDocBySlug } from "@/services/getDocsByPath";
import { blogDirectory } from "@/services/paths";
import { BasicDocumentProps } from "@/interfaces/doc";
import ContentRenderer from "@/components/content-renderer.new";

export default async function Post({ params }: Params) {
  const blog = getDocBySlug<BasicDocumentProps>(params.slug, blogDirectory);

  if (!blog) {
    return notFound();
  }

  return (
    <main>
      <article>
        <p>{blog.title}</p>
        <p>{blog.date}</p>
        <ContentRenderer content={blog.content || ""} />
      </article>
    </main>
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
  const blogs = getAllDocs(blogDirectory);

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
