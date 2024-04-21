import { navPaths } from "@/services/paths";
import Link from "next/link";

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
    <header className="h-12 flex justify-between">
      <Link href={"/"}>
        <div className="text-4xl tracking-wider" id="logo">
          अहम्
        </div>
      </Link>
      <NavLinks />
    </header>
  );
}
