import HeaderSocials from "./header-socials";
import { IoMdDocument } from "react-icons/io";

export default function AboutMe() {
  return (
    <div>
      <section className="relative border border-custom p-4 font-hilmar tracking-wide">

      <a target="_blank" href="/resume.pdf">
        
        <IoMdDocument className="absolute top-2 right-2" />
      </a>
        <div className="flex flex-row gap-4">
      <img className="size-28" src="https://avatars.githubusercontent.com/u/105297743?v=4" alt="profile-picture"/>
        <div className="flex flex-col">
      <p className="text-lg">
        Anupam Chakraborty
      </p>
      <p className="text-excerpt text-sm mt-1 flex-grow">Software Developer</p>
      <div>
      <HeaderSocials />
      </div>
        </div>
        </div>
      </section>
    </div>
  );
}
