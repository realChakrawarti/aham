'use client';

import { navPaths } from '@/services/paths';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className="hidden md:flex flex-row gap-4">
      <a href="https://x.com/realChakrawarti" target="_blank">
        <FaXTwitter className="header-social-item" />
      </a>
      <a href="https://www.linkedin.com/in/chakrawarti-anupam/" target="_blank">
        <FaLinkedinIn className="header-social-item" />
      </a>
      <a href="https://www.youtube.com/@TheCodeCritical" target="_blank">
        <FaYoutube className="header-social-item" />
      </a>
      <a href="https://github.com/realChakrawarti">
        <FaGithub className="header-social-item" />
      </a>
      <a href="mailto:chakrawarti.anupam@gmail.com" target="_blank">
        <SiGmail className="header-social-item" />
      </a>
    </div>
  );
};

export default function Header() {
  const pathname = usePathname();

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
      <div className="flex md:order-2">
        <HeaderSocials />
      </div>
      <NavbarToggle />
      <NavbarCollapse>
        {navPaths.map((nav) => {
          const checkActiveNav =
            pathname.split('/')[1] === nav.path.split('/')[1];
          return (
            <NavbarLink
              as={Link}
              active={checkActiveNav}
              className="md:text-lg md:hover:underline md:hover:underline-offset-4 text-default
                border-none"
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
