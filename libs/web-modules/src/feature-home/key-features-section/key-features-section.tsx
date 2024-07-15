import KeyFeatureCodeContent from '../../content/key-feature-code.mdx';
import { CodeWithTabs } from './feature-code';

export const KeyFeaturesSection = () => {
  return (
    <section className="bg-muted w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="bg-muted inline-block rounded-lg px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Elevate Your Learning Experience
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                  <h3 className="text-xl font-bold">Personalized Learning</h3>
                  <p className="text-muted-foreground">
                    Customize your learning experience with personalized
                    recommendations, progress tracking, and adaptive content.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Expert Instructors</h3>
                  <p className="text-muted-foreground">
                    Learn from industry-leading experts who are passionate about
                    sharing their knowledge and guiding you to success.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <KeyFeatureCodeContent components={{ CodeWithTabs }} />
          </div>
        </div>
      </div>
    </section>
  );
};
