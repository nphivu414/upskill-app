import { Avatar, Card, CardBody, Link } from '@nextui-org/react';

export default function TutorialDetail() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Mastering React: A Comprehensive Course
              </h1>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Avatar
                    isBordered
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-muted-foreground text-sm">
                      React Expert, Vercel
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground md:text-xl">
                Dive deep into the world of React and master the art of building
                modern, scalable web applications. This comprehensive course
                covers everything from the fundamentals to advanced concepts,
                equipping you with the skills to become a proficient React
                developer.
              </p>
            </div>
            <img
              src="https://generated.vusercontent.net/placeholder.svg"
              width="600"
              height="400"
              alt="Course Thumbnail"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Course Curriculum
              </h2>
              <p className="mt-2 text-muted-foreground md:text-xl">
                Explore the comprehensive curriculum and dive into the world of
                React.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Introduction to React
                  </h3>
                  <span className="text-muted-foreground text-sm">30 min</span>
                </div>
                <p className="text-muted-foreground">
                  Learn the fundamentals of React, including its history,
                  architecture, and key concepts.
                </p>
              </div>
              <div className="grid gap-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Setting up a React Development Environment
                  </h3>
                  <span className="text-muted-foreground text-sm">45 min</span>
                </div>
                <p className="text-muted-foreground">
                  Explore the tools and setup required to start building React
                  applications.
                </p>
              </div>
              <div className="grid gap-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    React Components and State Management
                  </h3>
                  <span className="text-muted-foreground text-sm">1 hr</span>
                </div>
                <p className="text-muted-foreground">
                  Dive into the core concepts of React, including components,
                  props, and state management.
                </p>
              </div>
              <div className="grid gap-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Routing and Navigation in React
                  </h3>
                  <span className="text-muted-foreground text-sm">45 min</span>
                </div>
                <p className="text-muted-foreground">
                  Learn how to implement client-side routing and navigation in
                  your React applications.
                </p>
              </div>
              <div className="grid gap-2 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Advanced React Concepts
                  </h3>
                  <span className="text-muted-foreground text-sm">2 hr</span>
                </div>
                <p className="text-muted-foreground">
                  Explore advanced React concepts, such as hooks, context,
                  performance optimization, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                About the Instructor
              </h2>
              <div className="flex items-center gap-4 mt-4">
                <Avatar
                  isBordered
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-muted-foreground text-sm">
                    React Expert, Vercel
                  </p>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground md:text-xl">
                John Doe is a seasoned React expert with over 10 years of
                experience in building scalable and performant web applications.
                He is currently a lead developer at Vercel, where he contributes
                to the development of the Next.js framework and helps companies
                worldwide to adopt and master React.
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
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Related Courses
              </h2>
              <p className="mt-2 text-muted-foreground md:text-xl">
                Check out these other courses that might interest you.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <CardBody>
                  <div className="flex flex-col items-start gap-2">
                    <img
                      src="https://generated.vusercontent.net/placeholder.svg"
                      width="300"
                      height="200"
                      alt="Course Thumbnail"
                      className="w-full rounded-lg object-cover"
                    />
                    <h3 className="text-lg font-semibold">
                      Mastering TypeScript: From Beginner to Expert
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Learn the ins and outs of TypeScript and how to leverage
                      its power in your projects.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="flex flex-col items-start gap-2">
                    <img
                      src="https://generated.vusercontent.net/placeholder.svg"
                      width="300"
                      height="200"
                      alt="Course Thumbnail"
                      className="w-full rounded-lg object-cover"
                    />
                    <h3 className="text-lg font-semibold">
                      Mastering Vue.js: A Step-by-Step Guide
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Dive into the world of Vue.js and learn how to build
                      modern, responsive web applications.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="flex flex-col items-start gap-2">
                    <img
                      src="https://generated.vusercontent.net/placeholder.svg"
                      width="300"
                      height="200"
                      alt="Course Thumbnail"
                      className="w-full rounded-lg object-cover"
                    />
                    <h3 className="text-lg font-semibold">
                      Mastering Angular: From Beginner to Advanced
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Explore the powerful features of Angular and learn how to
                      build complex web applications.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="flex flex-col items-start gap-2">
                    <img
                      src="https://generated.vusercontent.net/placeholder.svg"
                      width="300"
                      height="200"
                      alt="Course Thumbnail"
                      className="w-full rounded-lg object-cover"
                    />
                    <h3 className="text-lg font-semibold">
                      Mastering JavaScript: From Beginner to Expert
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Dive deep into the world of JavaScript and learn how to
                      write clean, efficient, and maintainable code.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
