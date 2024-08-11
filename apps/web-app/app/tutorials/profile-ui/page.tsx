import { Avatar, Divider } from '@nextui-org/react';
import { ProfilePagePreview } from '@upskill-app/tutorial-elements';
import { Paragraph } from '@upskill-app/ui/web';
import {
  ContentSection,
  HeadingSection,
  ProfileContent,
} from '@upskill-app/web-modules/tutorial-detail';

export default function ProfileUiPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <HeadingSection
        title="Crafting Profile Page UI with React, Tailwind and NextUI"
        author={{
          avatar: 'https://avatars.githubusercontent.com/u/22409039?v=4',
          name: 'Vu Nguyen',
          description: 'Software Engineer, NAB',
        }}
        description={
          <div>
            <Paragraph>
              Let&apos;s build a profile page with the power of React, Tailwind
              and NextUI. This hands-on guide will walk you through building a
              modern, interactive profile UI that is not only beautiful but also
              designed for easy integration with your existing projects.
            </Paragraph>
          </div>
        }
        targetAudience="Beginner to intermediate React developers familiar with basic component structure and styling concepts."
        prerequisites={[
          'Node.js and yarn: Make sure you have these installed on your system.',
          'JavaScript and React basics: You should be comfortable with JavaScript fundamentals and understand the core concepts of React.',
          "A little TypeScript, CSS, and Tailwind knowledge: Some familiarity with these will help, but you don't need to be an expert – we'll guide you through!",
        ]}
        previewComponent={<ProfilePagePreview />}
        storybookUrl="#"
        sourceUrl="#"
      />
      <Divider className="my-12" />
      <ContentSection
        introText="5 sections • 2 hours 30 minutes"
        totalSections={8}
      >
        <ProfileContent />
      </ContentSection>
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
                websites and mobile apps with beautiful UI and UX. Always up for
                a challenge and ready to learn something new.
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
      {/* <section className="w-full py-12">
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
      </section> */}
    </div>
  );
}
