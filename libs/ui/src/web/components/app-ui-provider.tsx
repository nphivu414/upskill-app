'use client';

import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/types';

export const AppUiProvider = ({ children }: ComponentWithChildren) => {
  const router = useRouter();
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};
