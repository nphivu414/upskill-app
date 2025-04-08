'use client';

import React from 'react';
import NextLink from 'next/link';
import {
  Button,
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
} from '@heroui/react';

import { cn } from '../utils';
import { AppLogo } from './app-logo';
import { CustomIcons } from './custom-icon';
import { ThemeToggle } from './theme-toggle';

type NavigationBarProps = NavbarProps;

export const NavigationBar = ({ className, ...rest }: NavigationBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      maxWidth="xl"
      isBlurred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={cn('bg-background/50 shadow', className)}
      {...rest}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarBrand>
        <AppLogo className="!size-6" />
        <Spacer x={1} />
        <Link as={NextLink} href="/" color="foreground" prefetch>
          <p className="font-bold text-inherit">Upskills</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" as={NextLink} prefetch href="/tutorials">
            Tutorials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#newsletter">
            Follow us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex gap-2">
          <Button
            as={Link}
            size="sm"
            className="hidden sm:flex"
            href="https://discord.gg/MvKZvDZ36T"
            variant="flat"
            isIconOnly
            target="_blank"
          >
            <CustomIcons.discord className="size-4" />
            <span className="sr-only">Discord</span>
          </Button>
          <Button
            as={Link}
            size="sm"
            href="https://github.com/upskillsdev"
            variant="flat"
            isIconOnly
            target="_blank"
          >
            <CustomIcons.gitHub className="size-4" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            as={Link}
            className="hidden sm:flex"
            size="sm"
            href="https://x.com/nphivu414"
            variant="flat"
            isIconOnly
            target="_blank"
          >
            <CustomIcons.x className="size-4" />
            <span className="sr-only">X</span>
          </Button>
        </div>
        <ThemeToggle />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color="foreground"
            as={NextLink}
            prefetch
            href="/tutorials"
            onPress={() => setIsMenuOpen(false)}
          >
            Tutorials
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="/#newsletter"
            onPress={() => setIsMenuOpen(false)}
          >
            Follow us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
