import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllDocs, getDocBySlug } from '@/services/getDocsByPath';
import { blogsDirectory } from '@/services/paths';
import { BasicDocumentProps } from '@/interfaces/doc';
import ContentRenderer from '@/components/content-renderer';
import DateFormatter from '@/components/date-formatter';
import { readingTime } from 'reading-time-estimator';
import ScrollTop from '@/components/scroll-top';
import ContentBack from '@/components/content-back';
import { MdDateRange } from 'react-icons/md';
import { TiDocumentText } from "react-icons/ti";
import { FiClock } from "react-icons/fi";

export default async function Post({ params }: Params) {
  const blog = getDocBySlug<BasicDocumentProps>(params.slug, blogsDirectory);

  if (!blog) {
    return notFound();
  }

  const readTime = readingTime(blog.content || '', 200);

  return (
    <div className="relative">
      <ContentBack to={'blog'} />
      <ScrollTop />
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
          {blog.title}
        </h1>
          <p className="font-medium text-sm text-excerpt flex gap-2 items-center font-hilmar tracking-wide">
           <FiClock className='size-5' /> 
            <span itemProp="timeRequired">{readTime.text}</span> |{' '}

            <TiDocumentText className='size-5' />
            <span itemProp="wordCount">{readTime.words}</span> words
          </p>
        <p className="text-excerpt py-4 font-hilmar flex gap-2 items-center">
          <MdDateRange className="size-5" />
          <DateFormatter dateString={blog.date} formatType="long" />
        </p>
        <ContentRenderer content={blog.content || ''} />
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
  const post = getDocBySlug<BasicDocumentProps>(params.slug, blogsDirectory);

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
  const blogs = getAllDocs(blogsDirectory, 'blog');

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
