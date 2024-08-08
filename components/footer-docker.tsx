'use client';

import { FaHome } from 'react-icons/fa';
import { RiArticleFill } from 'react-icons/ri';
import { FaRegStickyNote } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FaProjectDiagram } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

import { navPaths } from '@/services/paths';
import Link from 'next/link';

const icons = [
  FaHome,
  RiArticleFill,
  FaRegStickyNote,
  ImProfile,
  FaProjectDiagram,
];

export default function FooterDocker() {
  const pathname = usePathname();
  return (
    <div
      className="pointer-events-none fixed top-[90%] md:top-[2%] inset-0 z-20 mx-auto mb-4 flex
        h-12 px-6"
    >
      <div
        className="pointer-events-auto relative mx-auto flex h-full items-center rounded-[14px]
          bg-mauve-light-1
          shadow-[rgba(142,140,152,0.2)_0px_0px_30px,rgba(219,216,224,0.2)_0px_0px_0px_1px]
          dark:bg-mauve-dark-2
          dark:shadow-[rgba(111,109,120,0.1)_0px_0px_30px,rgba(60,57,63,0.4)_0px_0px_0px_1px]
          sm:overflow-y-visible px-4 gap-4 overflow-hidden dark:backdrop-blur-sm"
      >
        <span
          className="absolute bottom-0 top-0 z-10 flex overflow-hidden rounded-[6px] py-1.5
            transition-all duration-300"
          style={{ left: 0, width: 0 }}
        >
          <span className="h-full w-full rounded-[10px] bg-mauve-light-3 dark:bg-mauve-dark-3"></span>
        </span>

        {navPaths.map((nav, idx) => {
          const checkActiveNav =
            pathname.split('/')[1] === nav.path.split('/')[1];
          const Icon = icons[idx];
          return (
            <Link
              className={checkActiveNav ? 'text-default' : 'text-excerpt'}
              key={nav.path}
              href={nav.path}
            >
              <abbr title={nav.label}>
                <Icon className="size-5" />
              </abbr>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
