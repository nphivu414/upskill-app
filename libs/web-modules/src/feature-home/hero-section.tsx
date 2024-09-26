import { Spacer } from '@nextui-org/react';
import { GridOverlay, NeonBackground } from '@upskill-app/ui/web';

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 pb-12 pt-24 md:pb-24 md:pt-32 dark:from-indigo-950 dark:to-black">
      {/* Light/Dark mode overlay */}
      <NeonBackground />

      <GridOverlay />
      <div className="relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-2xl font-bold leading-6 md:text-6xl md:leading-tight">
            Not another boring tutorial
            <Spacer y={1} />
            <span className="mb-3 mr-2 inline-block md:inline">
              Get ready for something
            </span>
            <span className="text-primary-400 relative mt-2">
              different
              <span className="bg-primary-400/20 absolute -inset-1 rounded-lg dark:blur-sm"></span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
