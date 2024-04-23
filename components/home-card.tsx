import { BasicDocumentProps } from "@/interfaces/doc";
import { Button, Card } from "flowbite-react";
import Link from "next/link";

interface HomeCardProps extends BasicDocumentProps {
  className: string;
}

export function HomeCard({
  title,
  excerpt,
  slug,
  date,
  className,
}: HomeCardProps) {
  return (
    <Card className={`w-full flex flex-col ${className}`}>
      <Link
        className="hover:underline underline-offset-2"
        href={`/blog/${slug}`}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </Link>
      <p className="flex-grow font-normal text-gray-700 dark:text-gray-400">
        {excerpt}
      </p>
      <Link
        className="flex gap-2 items-center hover:underline underline-offset-2"
        href={`/blog/${slug}`}
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
