'use client';

import { useRouter } from 'next/navigation';
import { HeroUIProvider } from '@heroui/react';
import { ComponentWithChildren } from '@upskill-app/shared';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const AppUiProvider = ({ children }: ComponentWithChildren) => {
  const router = useRouter();
  return (
    <NextThemesProvider attribute="class" enableSystem>
      <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>
    </NextThemesProvider>
  );
};
