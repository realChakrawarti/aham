import Link from 'next/link';
import DateFormatter from './date-formatter';
import { BasicDocumentProps } from '@/interfaces/doc';
import Tag from './tag';

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
  type,
}: ListPreviewProps) {
  if (primary) {
    return (
      <div className="py-8 flex flex-col md:flex-row items-baseline gap-4">
        <div className="md:w-64 mb-0 flex-shrink-0">
          <span className="text-sm font-hilmar text-excerpt">
            <DateFormatter dateString={date} formatType="short" />
          </span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium mb-2 text-default flex items-center font-hilmar tracking-wider">
            <p>{title}</p>
          </h2>
          <p className="leading-relaxed text-excerpt font-slalom">{excerpt}</p>
          <Link
            href={`/${type}/${slug}`}
            className="hover:underline underline-offset-2 inline-flex items-center mt-4 text-link hover:brightness-[110%]
              font-semibold font-hilmar tracking-wider"
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
      <div className="space-y-1 py-6 md:py-8">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            {/* <div className="flex gap-2">
              {tags?.map((tag) => <Tag key={tag} label={tag} />)}
            </div> */}
            <span className="text-sm font-hilmar tracking-wide text-excerpt">
              Published on{' '}
              <DateFormatter dateString={date} formatType="short" />
            </span>
          </div>

          <Link
            className="text-xl font-semibold text-default hover:underline underline-offset-2 font-hilmar tracking-wider"
            href={`/${type}/${slug}`}
          >
            <h2>{title}</h2>
          </Link>
        </div>
        <p className="text-base font-normal text-excerpt font-slalom">{excerpt}</p>
      </div>
    );
  }
}
