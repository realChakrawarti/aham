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
    <Navbar className="bg-transparent sm:px-0" fluid rounded>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          {process.env.BRAND_NAME}
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {navPaths.map((nav) => (
          <NavbarLink key={nav.path} href={nav.path}>
            {nav.label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
