import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from '@nextui-org/react';

export const CourseOfferingsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg px-3 py-1 text-sm">
            Popular Courses
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Explore Our Course Offerings
          </h2>
          <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Browse through our diverse selection of online courses and find the
            perfect one to suit your learning needs.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card isPressable as={Link} href="/tutorials/name">
            <CardHeader>
              <Image
                src="https://nextui.org/images/card-example-2.jpeg"
                height="200"
                className="aspect-video w-full rounded-t-md object-cover"
                alt="Course"
              />
            </CardHeader>
            <CardBody>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  Introduction to Web Development
                </h3>
                <p>
                  Learn the fundamentals of HTML, CSS, and JavaScript to build
                  responsive and interactive websites.
                </p>
              </div>
            </CardBody>
            <CardFooter className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="text-sm">12 hours</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="text-sm">4.8 (1,234 reviews)</span>
            </CardFooter>
          </Card>
          <Card isPressable>
            <CardHeader>
              <Image
                src="https://nextui.org/images/card-example-2.jpeg"
                height="200"
                className="aspect-video w-full rounded-t-md object-cover"
                alt="Course"
              />
            </CardHeader>
            <CardBody>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  Introduction to Web Development
                </h3>
                <p>
                  Learn the fundamentals of HTML, CSS, and JavaScript to build
                  responsive and interactive websites.
                </p>
              </div>
            </CardBody>
            <CardFooter className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="text-sm">12 hours</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="text-sm">4.8 (1,234 reviews)</span>
            </CardFooter>
          </Card>
          <Card isPressable>
            <CardHeader>
              <Image
                src="https://nextui.org/images/card-example-2.jpeg"
                height="200"
                className="aspect-video w-full rounded-t-md object-cover"
                alt="Course"
              />
            </CardHeader>
            <CardBody>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  Introduction to Web Development
                </h3>
                <p>
                  Learn the fundamentals of HTML, CSS, and JavaScript to build
                  responsive and interactive websites.
                </p>
              </div>
            </CardBody>
            <CardFooter className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="text-sm">12 hours</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="text-sm">4.8 (1,234 reviews)</span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
