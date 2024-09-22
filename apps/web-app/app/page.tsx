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
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
          {/* Light/Dark mode overlay */}
          <div className="bg-background absolute inset-0 opacity-60 dark:opacity-70"></div>

          {/* More colorful gradient-based neon light effect, positioned towards the top */}
          <div className="absolute inset-0">
            <div
              className="animate-pulse-slow absolute inset-0 bg-gradient-to-bl from-blue-300/20 via-blue-300/10 to-transparent dark:from-blue-800/30 dark:via-blue-800/20"
              style={{ backgroundPosition: '50% 20%' }}
            ></div>
            <div
              className="animate-pulse-slow absolute inset-0 bg-gradient-to-bl from-purple-300/20 via-purple-300/10 to-transparent dark:from-purple-800/30 dark:via-purple-800/20"
              style={{ backgroundPosition: '20% 10%', animationDelay: '-2s' }}
            ></div>
            <div
              className="animate-pulse-slow absolute inset-0 bg-gradient-to-bl from-pink-300/20 via-pink-300/10 to-transparent dark:from-pink-800/30 dark:via-pink-800/20"
              style={{ backgroundPosition: '80% 15%', animationDelay: '-4s' }}
            ></div>
            <div
              className="animate-pulse-slow absolute inset-0 bg-gradient-to-bl from-green-300/20 via-green-300/10 to-transparent dark:from-green-800/30 dark:via-green-800/20"
              style={{ backgroundPosition: '30% 5%', animationDelay: '-6s' }}
            ></div>
          </div>

          {/* Grid overlay with clearer border color for both modes */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30 dark:bg-[linear-gradient(to_right,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.1)_1px,transparent_1px)] dark:opacity-20"></div>

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
