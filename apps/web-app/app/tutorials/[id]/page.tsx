import { Avatar, Card, CardBody, Link } from '@nextui-org/react';
import {
  ContentSection,
  HeadingSection,
} from '@upskill-app/web-modules/tutorial-detail';

export default function TutorialDetail() {
  return (
    <div className="flex min-h-dvh flex-col">
      <HeadingSection
        author={{
          avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
          name: 'John Doe',
          description: 'React Expert, Vercel',
        }}
        description="Dive deep into the world of React and master the art of building modern, scalable web applications. This comprehensive course covers everything from the fundamentals to advanced concepts, equipping you with the skills to become a proficient React developer."
        thumbnailUrl="https://nextui.org/images/fruit-4.jpeg?_rq_delayed=true"
        title="Mastering React: A Comprehensive Course"
      />
      <ContentSection />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                About the Instructor
              </h2>
              <div className="mt-4 flex items-center gap-4">
                <Avatar
                  isBordered
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-sm">React Expert, Vercel</p>
                </div>
              </div>
              <p className="mt-4 md:text-xl">
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
              <p className="mt-2 md:text-xl">
                Check out these other courses that might interest you.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                    <p className="text-sm">
                      Learn the ins and outs of TypeScript and how to leverage
                      its power in your projects.
                    </p>
                    <Link
                      href="#"
                      className="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
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
                    <p className="text-sm">
                      Dive into the world of Vue.js and learn how to build
                      modern, responsive web applications.
                    </p>
                    <Link
                      href="#"
                      className="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
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
                    <p className="text-sm">
                      Explore the powerful features of Angular and learn how to
                      build complex web applications.
                    </p>
                    <Link
                      href="#"
                      className="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
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
                    <p className="text-sm">
                      Dive deep into the world of JavaScript and learn how to
                      write clean, efficient, and maintainable code.
                    </p>
                    <Link
                      href="#"
                      className="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
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
