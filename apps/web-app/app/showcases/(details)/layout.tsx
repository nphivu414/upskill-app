import { Divider, Spacer } from '@heroui/react';
import { ComponentWithChildren } from '@upskill-app/shared';
import { AppContainer, AppFooter, NavigationBar } from '@upskill-app/ui/web';
import { CommunitySection } from '@upskill-app/web-modules/community';
import { NewsLetterSection } from '@upskill-app/web-modules/newsletter';

export default function RootLayout({ children }: ComponentWithChildren) {
  return (
    <div className="relative">
      <NavigationBar />
      <AppContainer>
        {children}
        <Divider className="my-12" />
        <CommunitySection />
      </AppContainer>
      <Spacer y={12} />
      <Divider />
      <NewsLetterSection />
      <AppFooter className="bg-background/50 absolute bottom-0 z-10 w-full border-none" />
    </div>
  );
}
