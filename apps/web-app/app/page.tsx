import { AppFooter, NavigationBar } from '@upskill-app/ui/web';
import {
  CourseOfferingSection,
  HeroSection,
  KeyFeaturesSection,
} from '@upskill-app/web-modules/home';

export default function Index() {
  return (
    <>
      <div className={`min-h-screen w-full transition-colors duration-300`}>
        <NavigationBar className="fixed" />
        <main className="relative flex-1">
          <HeroSection />
          <KeyFeaturesSection />
          <CourseOfferingSection />
        </main>
        <AppFooter className="bg-background/50 relative z-10 border-none" />
      </div>
    </>
  );
}
