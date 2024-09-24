import { Spacer } from '@nextui-org/react';

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 pb-12 pt-24 md:pb-24 md:pt-32 dark:from-indigo-950 dark:to-black">
      {/* Light/Dark mode overlay */}
      <div className="bg-background absolute inset-0 opacity-60 dark:opacity-70"></div>

      {/* More colorful gradient-based neon light effect, positioned towards the top */}
      <div className="absolute inset-0">
        <div
          className="animate-pulse-slow absolute inset-0 bg-gradient-to-b from-blue-500/40 via-blue-400/10 to-transparent dark:from-blue-800/40 dark:via-blue-950/50"
          style={{ backgroundPosition: '50% 20%' }}
        ></div>
        <div
          className="animate-pulse-slow absolute inset-0 bg-gradient-to-b from-purple-500/40 via-purple-400/10 to-transparent dark:from-purple-800/40 dark:via-purple-950/50"
          style={{ backgroundPosition: '20% 10%', animationDelay: '-2s' }}
        ></div>
        <div
          className="animate-pulse-slow absolute inset-0 bg-gradient-to-b from-pink-500/40 via-pink-400/10 to-transparent dark:from-pink-800/40 dark:via-pink-950/50"
          style={{ backgroundPosition: '80% 15%', animationDelay: '-4s' }}
        ></div>
      </div>

      {/* Grid overlay with clearer border color for both modes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30 dark:bg-[linear-gradient(to_right,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.1)_1px,transparent_1px)] dark:opacity-20"></div>
      <div className="relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-2xl font-bold leading-6 md:text-6xl md:leading-tight">
            Not another boring tutorial
            <Spacer y={1} />
            <span className="mb-3 mr-2 inline-block md:inline">
              Get ready for something
            </span>
            <span className="relative mt-2 text-cyan-400">
              different
              <span className="absolute -inset-1 rounded-lg bg-cyan-400/20 dark:blur-sm"></span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
