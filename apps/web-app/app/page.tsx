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
      <div className={`min-h-screen w-full transition-colors duration-300`}>
        <NavigationBar className="fixed" />
        <main className="relative flex-1">
          <HeroSection />
          <KeyFeaturesSection />
          <CourseOfferingSection />
          <div className="bg-content1 dark:bg-content1/50">
            <NewsLetterSection />
          </div>
        </main>
        <AppFooter className="bg-background/50 relative z-10 border-none" />
      </div>
    </>
  );
}
