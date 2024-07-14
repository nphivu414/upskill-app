import {
  CourseOfferingsSection,
  HeroSection,
  KeyFeaturesSection,
} from '@upskill-app/web-modules/home';

export default function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <KeyFeaturesSection />
        <CourseOfferingsSection />
      </main>
    </div>
  );
}
