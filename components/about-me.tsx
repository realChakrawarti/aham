import Link from 'next/link';
import HeaderSocials from './header-socials';
import { SiReactiveresume } from 'react-icons/si';
import { SiNow } from 'react-icons/si';

export default function AboutMe() {
  return (
    <div>
      <section className="relative border border-custom p-4 font-hilmar tracking-wide">
        <a target="_blank" href="/resume.pdf">
          <abbr title="Download resume">
            <SiReactiveresume className="absolute size-5 top-2 right-2" />
          </abbr>
        </a>
        <Link className="absolute bottom-1 right-2" href="/now">
          <abbr title="Now">
            <SiNow className="size-8" />
          </abbr>
        </Link>
        <div className="flex flex-row gap-4">
          <img
            className="size-28"
            src="https://avatars.githubusercontent.com/u/105297743?v=4"
            alt="profile-picture"
          />
          <div className="flex flex-col">
            <p className="text-lg">Anupam Chakraborty</p>
            <p className="text-excerpt text-sm mt-1 flex-grow">
              Software Developer @Crownstack
            </p>
            <div>
              <HeaderSocials />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
