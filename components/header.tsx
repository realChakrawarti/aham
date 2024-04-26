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
      className="sticky px-6 top-0 z-50 dark:bg-dark rounded-none bg-dark transition-colors duration-500 md:dark:backdrop-blur-sm md:dark:bg-dark/10"
      fluid
      rounded
    >
      <NavbarBrand as={Link} href="/">
        <span className="border-2 px-2 self-center whitespace-nowrap text-xl font-semibold">
          AHAM
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
