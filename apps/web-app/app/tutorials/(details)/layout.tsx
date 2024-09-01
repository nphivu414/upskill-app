import { ComponentWithChildren } from '@upskill-app/shared';
import {
  AuthorSection,
  RelatedTutorialsSection,
} from '@upskill-app/web-modules/tutorial-detail';

export default function RootLayout({ children }: ComponentWithChildren) {
  return (
    <>
      {children}
      <AuthorSection />
      <RelatedTutorialsSection />
    </>
  );
}
