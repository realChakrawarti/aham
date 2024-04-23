import Link from "next/link";
import DateFormatter from "./date-formatter";

interface BlogPreviewProps {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  tags: string[];
}

export default function BlogPreview({
  title,
  date,
  slug,
  excerpt,
  tags,
}: BlogPreviewProps) {
  return (
    <div className="space-y-4 py-6 md:py-8">
      <div className="grid gap-4">
        <div className="flex items-center justify-between text-gray-500">
          <div>
            {tags.map((tag) => (
              <span
                key={tag}
                className="capitalize inline-block rounded bg-green-100 mr-2 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"
              >
                #{tag}
              </span>
            ))}
          </div>
          <span className="text-sm">
            Published on <DateFormatter dateString={date} />
          </span>
        </div>

        <Link
          className="text-xl font-semibold text-default hover:underline underline-offset-2"
          href={`/blog/${slug}`}
        >
          <h2>{title}</h2>
        </Link>
      </div>
      <p className="text-base font-normal text-excerpt ">{excerpt}</p>
    </div>
  );
}
