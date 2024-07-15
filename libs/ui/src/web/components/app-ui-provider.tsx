'use client';

import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/types';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const AppUiProvider = ({ children }: ComponentWithChildren) => {
  const router = useRouter();
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </NextThemesProvider>
  );
};
