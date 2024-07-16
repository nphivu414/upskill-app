import {
  CourseOfferingsSection,
  HeroSection,
  KeyFeaturesSection,
  TestComponent,
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
