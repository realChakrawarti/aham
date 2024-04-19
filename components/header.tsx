import Link from "next/link";

const navPaths = [
  {
    label: "Blogs",
    path: "/blogs",
  },
  {
    label: "Notes",
    path: "/notes",
  },
  {
    label: "Now",
    path: "/now",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Resume",
    path: "/resume",
  },
];

function NavLinks() {
  return (
    <nav className="text-lg tracking-wide">
      <ul className="flex gap-2">
        {navPaths.map((nav) => (
          <li className="hover:underline underline-offset-2" key={nav.path}>
            <Link href={nav.path}>{nav.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="p-2 h-12 flex justify-between">
      <div className="text-4xl tracking-wider" id="logo">
        AHAM
      </div>
      <NavLinks />
    </header>
  );
}
