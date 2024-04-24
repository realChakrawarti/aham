"use client";

import { navPaths } from "@/services/paths";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Header() {
  const pathname = usePathname();

  return (
    <Navbar
      className="sticky top-0 z-50 dark:bg-dark bg-dark sm:px-0"
      fluid
      rounded
    >
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          LOGO
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {navPaths.map((nav) => {
          const checkActiveNav =
            pathname.split("/")[1] === nav.path.split("/")[1];
          return (
            <NavbarLink
              as={Link}
              active={checkActiveNav}
              className="md:text-lg md:hover:underline md:hover:underline-offset-4 text-default border-none"
              key={nav.path}
              href={nav.path}
            >
              {nav.label}
            </NavbarLink>
          );
        })}
      </NavbarCollapse>
    </Navbar>
  );
}
