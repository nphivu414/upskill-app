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
        <NavigationBar />
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 dark:from-black dark:to-gray-950">
          {/* Deep black overlay */}
          <div className="absolute inset-0 bg-black opacity-0 dark:opacity-90"></div>

          {/* Multi-color neon light spreading effect with slower transition */}
          <div className="absolute inset-0">
            <div className="animate-slowColorChange1 absolute left-1/4 top-0 aspect-[2/1] w-[150%] rounded-[100%] bg-[#FF00FF] opacity-0 blur-[100px] transition-colors duration-[180s] ease-in-out dark:opacity-10"></div>
            <div className="animate-slowColorChange2 absolute right-0 top-1/4 aspect-[1/1] w-full rounded-[100%] bg-[#00FFFF] opacity-0 blur-[100px] transition-colors duration-[180s] ease-in-out dark:opacity-10"></div>
            <div className="animate-slowColorChange3 absolute bottom-0 left-1/2 aspect-[2/1] w-[150%] rounded-[100%] bg-[#FFA500] opacity-0 blur-[100px] transition-colors duration-[180s] ease-in-out dark:opacity-10"></div>
          </div>

          {/* Cyberpunk-inspired grid overlay with dimmer border color */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-0 dark:opacity-10"></div>

          {/* Content */}
          <main className="relative flex-1">
            <HeroSection />
            <KeyFeaturesSection />
            <CourseOfferingSection />
          </main>
          <AppFooter className="bg-background/25 relative z-10 border-none" />
        </div>
      </div>
    </>
  );
}
