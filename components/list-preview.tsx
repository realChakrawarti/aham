import Link from "next/link";
import DateFormatter from "./date-formatter";
import { BasicDocumentProps } from "@/interfaces/doc";

interface ListPreviewProps extends BasicDocumentProps {
  primary?: boolean;
}

export default function ListPreview({
  title,
  date,
  slug,
  excerpt,
  tags,
  primary,
}: ListPreviewProps) {
  const primaryTag = tags?.at(0) || "";
  if (primary) {
    return (
      <div className="py-8 flex flex-wrap md:flex-nowrap items-baseline">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="text-gray-500 text-sm">
            <DateFormatter dateString={date} />
          </span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium mb-2 text-default flex items-center">
            {primaryTag && (
              <span
                key={primaryTag}
                className="font-semibold lowercase inline-block rounded bg-green-100 mr-2 px-2.5 text-base text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"
              >
                #{primaryTag}
              </span>
            )}
            <p>{title}</p>
          </h2>
          <p className="leading-relaxed text-excerpt">{excerpt}</p>
          <Link
            href={`/blog/${slug}`}
            className="hover:underline underline-offset-2 inline-flex items-center mt-4 text-link font-semibold"
          >
            Read more
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="space-y-4 py-6 md:py-8">
        <div className="grid gap-4">
          <div className="flex items-center justify-between text-gray-500">
            <div>
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="uppercase inline-block rounded bg-green-100 mr-2 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"
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
}
