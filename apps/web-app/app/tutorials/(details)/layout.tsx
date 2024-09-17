import { ComponentWithChildren } from '@upskill-app/shared';
import { AppContainer, AppFooter, NavigationBar } from '@upskill-app/ui/web';
import {
  AuthorSection,
  RelatedTutorialsSection,
} from '@upskill-app/web-modules/tutorial-detail';

export default function RootLayout({ children }: ComponentWithChildren) {
  return (
    <>
      <NavigationBar />
      <AppContainer>
        {children}
        <AuthorSection />
        <RelatedTutorialsSection />
      </AppContainer>
      <AppFooter />
    </>
  );
}
