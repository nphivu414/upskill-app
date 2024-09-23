import { AppUiProvider, Toaster } from '@upskill-app/ui/web';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import './styles/global.css';

import { ComponentWithChildren } from '@upskill-app/shared';

export const metadata = {
  title: 'Upskills - Learn to code with fun, interactive tutorials',
  description:
    'Upskills is a platform where you can learn to code with fun, interactive tutorials. Get started with our free coding tutorials today!',
};

export default function RootLayout({ children }: ComponentWithChildren) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <AppUiProvider>{children}</AppUiProvider>
      </body>
      <Toaster />
    </html>
  );
}
