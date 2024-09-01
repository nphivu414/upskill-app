import { Avatar } from '@nextui-org/react';

export const AuthorSection = () => {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              About the Technical Writer
            </h2>
            <div className="mt-4 flex items-center gap-4">
              <Avatar
                isBordered
                src="https://avatars.githubusercontent.com/u/22409039?v=4"
              />
              <div>
                <h3 className="text-lg font-semibold">Vu Nguyen</h3>
                <p className="text-sm">NAB, Software Engineer</p>
              </div>
            </div>
            <p className="mt-4 md:text-xl">
              A tech enthusiast with a dream to create amazing products.
              Experienced in software engineering, specializing in creating
              websites and mobile apps with beautiful UI and UX. Always up for a
              challenge and ready to learn something new.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src="https://generated.vusercontent.net/placeholder.svg"
              width="600"
              height="400"
              alt="Instructor Photo"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
