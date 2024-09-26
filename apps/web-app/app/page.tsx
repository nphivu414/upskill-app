import { Divider } from '@nextui-org/react';
import { AppFooter, NavigationBar } from '@upskill-app/ui/web';
import {
  CourseOfferingSection,
  HeroSection,
  KeyFeaturesSection,
} from '@upskill-app/web-modules/home';
import { NewsLetterSection } from '@upskill-app/web-modules/newsletter';

export default function Index() {
  return (
    <>
      <div className="relative min-h-screen">
        <NavigationBar className="fixed" />
        <main className="relative flex-1">
          <HeroSection />
          <KeyFeaturesSection />
          <CourseOfferingSection />
          <Divider />
          <NewsLetterSection />
        </main>
        <AppFooter className="bg-background/50 absolute bottom-0 z-10 w-full border-none" />
      </div>
    </>
  );
}
