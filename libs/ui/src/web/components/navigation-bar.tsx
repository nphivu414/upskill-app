'use client';

import React from 'react';
import {
  Avatar,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarProps,
  Spacer,
} from '@nextui-org/react';

import { cn } from '../utils';
import { ThemeToggle } from './theme-toggle';

const menuItems = [
  'Profile',
  'Dashboard',
  'Activity',
  'Analytics',
  'System',
  'Deployments',
  'My Settings',
  'Team Settings',
  'Help & Feedback',
];

type NavigationBarProps = NavbarProps;

export const NavigationBar = ({ className, ...rest }: NavigationBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      maxWidth="xl"
      isBlurred
      onMenuOpenChange={setIsMenuOpen}
      className={cn('bg-background/50 shadow', className)}
      {...rest}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Avatar src="/app-logo.png" className="!size-6" />
        <Spacer x={1} />
        <Link href="/" color="foreground">
          <p className="font-bold text-inherit">Upskills</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#highlighted-tutorials">
            Tutorials
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeToggle />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="/#highlighted-tutorials">
            Tutorials
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
