import { BasicDocumentProps } from "@/interfaces/doc";
import DateFormatter from "./date-formatter";
import Link from "next/link";

export default function NoteCard({
  title,
  date,
  excerpt,
  slug,
}: BasicDocumentProps) {
  return (
    <Link href={`/note/${slug}`}>
      <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 py-5 px-4">
        <div>
          <h4 className="hover:underline underline-offset-2 text-default font-bold mb-3">
            {title}
          </h4>
          <p className="text-excerpt text-sm">{excerpt}</p>
        </div>
        <div>
          <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
            <p className="text-sm text-gray-500">
              <DateFormatter dateString={date} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
