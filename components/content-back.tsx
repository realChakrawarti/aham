import Link from "next/link";

export default function ContentBack({ to }: { to: string }) {
  return (
    <>
      <div className="h-12 hidden absolute inset-0 lg:flex font-hilmar tracking-widest">
        <Link
          className="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          href={"/" + to}
        >
          <svg
            viewBox="0 -9 3 24"
            className="overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600 dark:group-hover:text-slate-300"
          >
            <path
              d="M3 0L0 3L3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          Go back
        </Link>
      </div>
      <div className="hidden lg:block h-12" />
    </>
  );
}
