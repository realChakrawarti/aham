import Link from 'next/link';
import DateFormatter from './date-formatter';
import { BasicDocumentProps } from '@/interfaces/doc';

interface ListPreviewProps extends BasicDocumentProps {
  primary?: boolean;
}

export default function ListPreview({
  title,
  date,
  slug,
  excerpt,
  type,
}: ListPreviewProps) {
  return (
    <div className="space-y-1 py-6 md:py-8">
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          {/* <div className="flex gap-2">
              {tags?.map((tag) => <Tag key={tag} label={tag} />)}
            </div> */}
          <span className="text-sm font-hilmar tracking-wide text-excerpt">
            Published on <DateFormatter dateString={date} formatType="short" />
          </span>
        </div>

        <Link
          className="text-xl font-semibold text-default hover:underline underline-offset-2
            font-hilmar tracking-wider"
          href={`/${type}/${slug}`}
        >
          <h1>{title}</h1>
        </Link>
      </div>
      <p className="text-base font-normal text-excerpt font-slalom">
        {excerpt}
      </p>
    </div>
  );
}
