import { Divider, Spacer } from '@heroui/react';
import { AppFooter, NavigationBar } from '@upskill-app/ui/web';
import { CourseOfferingSection } from '@upskill-app/web-modules/home';
import { NewsLetterSection } from '@upskill-app/web-modules/newsletter';

export default function Tutorials() {
  return (
    <div className="relative">
      <NavigationBar />
      <CourseOfferingSection />
      <Spacer y={12} />
      <Divider />
      <NewsLetterSection />
      <AppFooter className="bg-background/50 absolute bottom-0 z-10 w-full border-none" />
    </div>
  );
}
