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
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 dark:from-black dark:to-gray-950">
          {/* Light/Dark mode overlay */}
          <div className="absolute inset-0 bg-white opacity-70 dark:bg-black dark:opacity-80"></div>

          {/* More colorful gradient-based neon light effect */}
          <div className="absolute inset-0">
            <div className="animate-pulse-slow absolute inset-0 bg-gradient-to-b from-blue-500/30 via-blue-500/5 to-transparent"></div>
            <div className="animate-pulse-slow animate-delay-[-2s] absolute inset-0 bg-gradient-to-b from-purple-500/30 via-purple-500/5 to-transparent"></div>
            <div className="animate-pulse-slow absolute inset-0 bg-gradient-to-b from-pink-500/30 via-pink-500/5 to-transparent"></div>
            <div className="animate-pulse-slow absolute inset-0 bg-gradient-to-b from-green-500/30 via-green-500/5 to-transparent"></div>
          </div>

          {/* Grid overlay with dimmer border color for both modes */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 dark:bg-[linear-gradient(to_right,rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.05)_1px,transparent_1px)] dark:opacity-10"></div>

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
