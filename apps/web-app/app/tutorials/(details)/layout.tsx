import { Divider, Spacer } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/shared';
import { AppContainer, AppFooter, NavigationBar } from '@upskill-app/ui/web';
import { AuthorSection } from '@upskill-app/web-modules/tutorial-detail';

export default function RootLayout({ children }: ComponentWithChildren) {
  return (
    <>
      <NavigationBar />
      <AppContainer>
        {children}
        <Divider className="my-12" />
        <AuthorSection />
        <Spacer y={12} />
      </AppContainer>
      <AppFooter />
    </>
  );
}
