import Link from 'next/link';

import {
  Navbar,
  NavbarBrand,
} from 'flowbite-react';
import FooterDocker from './footer-docker';
export default function Header() {
  return (
    <Navbar
      className="sticky px-6 top-0 z-50 dark:bg-dark rounded-none bg-dark transition-colors
        duration-500 md:dark:backdrop-blur-sm md:dark:bg-dark/10"
      fluid
      rounded
    >
      <NavbarBrand as={Link} href="/">
        <span className="border-2 px-2 self-center whitespace-nowrap text-xl font-semibold">
          AHAM
        </span>
      </NavbarBrand>
      {/* <FooterDocker /> */}
    </Navbar>
  );
}
