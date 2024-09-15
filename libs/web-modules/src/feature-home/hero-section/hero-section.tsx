export const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter xl:text-6xl">
              Forget what you know about coding tutorials
            </h1>
            <h1 className="text-3xl font-bold tracking-tighter xl:text-6xl">
              This is something <span className="text-primary">different</span>
            </h1>
          </div>
          <p className="text-muted mx-auto max-w-[700px] md:text-xl">
            Learn to build things with an interactive learning experience, clear
            walkthroughs, and copy-paste ready code snippets
          </p>
        </div>
      </div>
    </section>
  );
};
