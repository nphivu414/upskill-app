import { TestComponent } from '@upskill-app/tutorial-elements';
import {
  CourseOfferingsSection,
  HeroSection,
  KeyFeaturesSection,
} from '@upskill-app/web-modules/home';

export default function Index() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        <HeroSection />
        <KeyFeaturesSection />
        <CourseOfferingsSection />
        <TestComponent />
      </main>
    </div>
  );
}
