export const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight">
            Forget what you know about coding tutorials
            <br />
            This is something{' '}
            <span className="relative text-cyan-400">
              different
              <span className="absolute -inset-1 rounded-lg bg-cyan-400/20 dark:blur-sm"></span>
            </span>
          </h1>
          <p className="max-w-3xl text-lg text-gray-400 md:text-xl">
            Learn to build things with an interactive learning experience, clear
            walkthroughs, and copy-paste ready code snippets
          </p>
        </div>
      </div>
    </section>
  );
};
