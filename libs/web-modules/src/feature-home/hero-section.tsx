import { Button, Link } from '@nextui-org/react';

export const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Unlock Your Potential with Our Online Learning Platform
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Discover a world of knowledge at your fingertips. Explore a wide
                range of courses, learn from industry experts, and achieve your
                goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                as={Link}
                href="/tutorials/name"
                variant="shadow"
                color="primary"
              >
                Start Learning
              </Button>
              <Button
                as={Link}
                href="/tutorials"
                variant="bordered"
                color="primary"
              >
                Explore Courses
              </Button>
            </div>
          </div>
          <img
            src="https://generated.vusercontent.net/placeholder.svg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
};
