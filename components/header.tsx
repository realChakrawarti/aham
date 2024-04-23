import { navPaths } from "@/services/paths";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Header() {
  return (
    <Navbar className="dark:bg-transparent sm:px-0" fluid rounded>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          {process.env.BRAND_NAME}
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {navPaths.map((nav) => (
          <NavbarLink
            className="md:text-lg md:hover:underline md:hover:underline-offset-4 text-default border-none"
            key={nav.path}
            href={nav.path}
          >
            {nav.label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
