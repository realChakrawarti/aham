import { BasicDocumentProps } from '@/interfaces/doc';
import { Card } from 'flowbite-react';
import Link from 'next/link';
import DateFormatter from './date-formatter';
import { MdDateRange } from 'react-icons/md';

interface HomeCardProps extends BasicDocumentProps {
  className: string;
}

export function HomeCard({
  title,
  excerpt,
  slug,
  className,
  type,
  date,
}: HomeCardProps) {
  return (
    <Card
      className={`w-full dark:bg-box border-custom flex flex-col rounded-none ${className}`}
    >
      <p className="text-excerpt text-sm font-hilmar flex gap-2 items-end">
        <MdDateRange className="size-5" />
        <DateFormatter dateString={date} formatType="short" />
      </p>
      <Link
        className="hover:underline underline-offset-2"
        href={`/${type}/${slug}`}
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-hilmar tracking-wider">
          {title}
        </h1>
      </Link>
      <p className="flex-grow font-normal text-gray-700 dark:text-gray-400 font-slalom">
        {excerpt}
      </p>
      <Link
        className="flex gap-2 items-center hover:underline underline-offset-2 text-link
          hover:brightness-[110%] font-medium font-hilmar tracking-wider"
        href={`/${type}/${slug}`}
      >
        <span>Read more</span>
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </Card>
  );
}
