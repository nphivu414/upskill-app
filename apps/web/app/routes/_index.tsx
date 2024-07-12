import { Theme, useTheme } from '../theme/theme-provider';

export default function Index() {
  const [, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Potential with Our Online Learning Platform
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover a world of knowledge at your fingertips. Explore a
                    wide range of courses, learn from industry experts, and
                    achieve your goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Start Learning
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Explore Courses
                  </a>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Elevate Your Learning Experience
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our online learning platform offers a comprehensive suite of
                  features to help you succeed in your educational journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Interactive Courses</h3>
                      <p className="text-muted-foreground">
                        Engage with multimedia-rich courses that combine video
                        lectures, interactive quizzes, and hands-on projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Personalized Learning
                      </h3>
                      <p className="text-muted-foreground">
                        Customize your learning experience with personalized
                        recommendations, progress tracking, and adaptive
                        content.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Expert Instructors</h3>
                      <p className="text-muted-foreground">
                        Learn from industry-leading experts who are passionate
                        about sharing their knowledge and guiding you to
                        success.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="https://generated.vusercontent.net/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Student Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Students Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied students about their experiences with
                  our online learning platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div
                  className="rounded-lg border text-card-foreground shadow-sm p-6 bg-muted"
                  data-v0-t="card"
                >
                  <div className="flex items-start gap-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                        JD
                      </span>
                    </span>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-semibold">John Doe</h4>
                        <div className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
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
                            className="h-4 w-4"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                          5.0
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {`"The courses on this platform have been a game-changer\n
                        for me. The content is engaging, the instructors are\n
                        knowledgeable, and the learning experience is\n
                        unparalleled."`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div
                  className="rounded-lg border text-card-foreground shadow-sm p-6 bg-muted"
                  data-v0-t="card"
                >
                  <div className="flex items-start gap-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                        SM
                      </span>
                    </span>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-semibold">Sarah Miller</h4>
                        <div className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
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
                            className="h-4 w-4"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                          4.8
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {`"I've been able to learn new skills and advance my\n
                        career thanks to the high-quality courses on this\n
                        platform. The flexibility and convenience are\n
                        unbeatable."`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" data-id="36">
          <div className="container px-4 md:px-6" data-id="37">
            <div className="space-y-4 text-center" data-id="38">
              <div
                className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                data-id="39"
              >
                Popular Courses
              </div>
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                data-id="40"
              >
                Explore Our Course Offerings
              </h2>
              <p
                className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                data-id="41"
              >
                Browse through our diverse selection of online courses and find
                the perfect one to suit your learning needs.
              </p>
            </div>
            <div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-id="42"
            >
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-id="43"
                data-v0-t="card"
              >
                <div className="p-6 space-y-2" data-id="44">
                  <img
                    data-id="45"
                    src="https://generated.vusercontent.net/placeholder.svg"
                    height="200"
                    alt="Course"
                    className="rounded-t-md object-cover aspect-video w-full"
                  />
                  <h3 className="text-xl font-bold" data-id="46">
                    Introduction to Web Development
                  </h3>
                  <p className="text-muted-foreground" data-id="47">
                    Learn the fundamentals of HTML, CSS, and JavaScript to build
                    responsive and interactive websites.
                  </p>
                  <div className="flex items-center gap-2" data-id="48">
                    <svg
                      data-id="49"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span
                      className="text-sm text-muted-foreground"
                      data-id="50"
                    >
                      12 hours
                    </span>
                    <svg
                      data-id="51"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span
                      className="text-sm text-muted-foreground"
                      data-id="52"
                    >
                      4.8 (1,234 reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-id="53"
                data-v0-t="card"
              >
                <div className="p-6 space-y-2" data-id="54">
                  <img
                    data-id="55"
                    src="https://generated.vusercontent.net/placeholder.svg"
                    height="200"
                    alt="Course"
                    className="rounded-t-md object-cover aspect-video w-full"
                  />
                  <h3 className="text-xl font-bold" data-id="56">
                    Data Analysis with Python
                  </h3>
                  <p className="text-muted-foreground" data-id="57">
                    Dive into the world of data analysis using Python and
                    popular libraries like Pandas and Matplotlib.
                  </p>
                  <div className="flex items-center gap-2" data-id="58">
                    <svg
                      data-id="59"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span
                      className="text-sm text-muted-foreground"
                      data-id="60"
                    >
                      18 hours
                    </span>
                    <svg
                      data-id="61"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span
                      className="text-sm text-muted-foreground"
                      data-id="62"
                    >
                      4.7 (987 reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-id="63"
                data-v0-t="card"
              >
                <div className="p-6 space-y-2" data-id="64">
                  <img
                    data-id="65"
                    src="https://generated.vusercontent.net/placeholder.svg"
                    height="200"
                    alt="Course"
                    className="rounded-t-md object-cover aspect-video w-full"
                  />
                  <h3 className="text-xl font-bold" data-id="66">
                    Mastering Digital Marketing
                  </h3>
                  <p className="text-muted-foreground" data-id="67">
                    Explore the latest strategies and techniques to effectively
                    market your business online.
                  </p>
                  <div className="flex items-center gap-2" data-id="68">
                    <svg
                      data-id="69"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span
                      className="text-sm text-muted-foreground"
                      data-id="70"
                    >
                      24 hours
                    </span>
                    <svg
                      data-id="71"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span
                      className="text-sm text-muted-foreground"
                      data-id="72"
                    >
                      4.9 (1,567 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 Learning Platform. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
        </nav>
      </footer>
    </div>
  );
}
