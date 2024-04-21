import Link from "next/link";

interface BlogPreviewProps {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

export default function BlogPreview({
  title,
  date,
  slug,
  excerpt,
}: BlogPreviewProps) {
  return (
    <article className="space-y-6">
      <Link href={`/blog/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <p>{excerpt}</p>
      <div>{date}</div>
    </article>
  );
}
