import { ComponentWithChildren } from '@upskill-app/shared';
import { AppContainer, AppFooter, NavigationBar } from '@upskill-app/ui/web';

export default function RootLayout({ children }: ComponentWithChildren) {
  return (
    <>
      <NavigationBar />
      <AppContainer>{children}</AppContainer>
      <AppFooter />
    </>
  );
}
