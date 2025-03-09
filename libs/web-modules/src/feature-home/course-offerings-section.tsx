import { Button, Link, Spacer } from '@heroui/react';
import {
  FlightBookingPagePreview,
  ProfilePagePreview,
} from '@upskill-app/tutorial-elements';
import { Paragraph } from '@upskill-app/ui/web';

import { HeadingSection } from '../feature-tutorial-detail/heading-section';
import { TypescriptGenericThumb } from '../feature-tutorial-detail/typescript-generics-tutorial';

export const CourseOfferingSection = () => {
  return (
    <section
      id="highlighted-tutorials"
      className="mx-auto max-w-screen-xl lg:px-12"
    >
      <HeadingSection
        title={
          <p className="text-3xl font-bold lg:text-4xl">
            Understading Typescript Generics
          </p>
        }
        author={{
          avatar: 'https://avatars.githubusercontent.com/u/22409039?v=4',
          name: 'Vu Nguyen',
          description: 'Software Engineer, NAB',
        }}
        description={
          <Paragraph>
            Generics is a core feature in statically-typed languages like
            TypeScript, enabling developers to define components, functions, or
            structures that can accept and enforce types passed during use. This
            enhances flexibility, promotes reusability, and reduces code
            duplication.
          </Paragraph>
        }
        extraContent={
          <div className="space-y-4">
            {[
              'What are generics in TypeScript?',
              'Making Your Code Flexible with Generics',
              'Generic Parameter Defaults',
              'Generic Constraints',
              'Conditional types with generics',
              'Closing thoughts',
            ].map((section, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="bg-divider text-muted flex size-6 shrink-0 items-center justify-center rounded-full text-sm">
                  {index + 1}
                </span>
                <p>{section}</p>
              </div>
            ))}
          </div>
        }
        previewComponent={
          <div className="mt-4 flex flex-col items-center justify-center gap-4 md:mt-0">
            <TypescriptGenericThumb />
            <Button
              as={Link}
              variant="shadow"
              color="primary"
              href="/tutorials/typescript-generics"
              data-track="view_home_typescript_generics_click"
            >
              View Tutorial
            </Button>
          </div>
        }
      />
      <Spacer className="my-8 md:my-24" />
      <HeadingSection
        title={
          <p className="text-3xl font-bold lg:text-4xl">
            Build a User Profile Page with React, Tailwind and HeroUI
          </p>
        }
        author={{
          avatar: 'https://avatars.githubusercontent.com/u/22409039?v=4',
          name: 'Vu Nguyen',
          description: 'Software Engineer, NAB',
        }}
        description={
          <div>
            <Paragraph>
              This in-depth tutorial guides you through the process of creating
              a modern, interactive user profile page using React and HeroUI.
              You&apos;ll learn how to construct reusable components for
              showcasing user information, implementing a feature photo
              carousel, and displaying user posts and photos. By the end of this
              tutorial, you&apos;ll have a fully functional profile page that
              demonstrates best practices in React development and UI design.
            </Paragraph>
          </div>
        }
        extraContent={
          <div className="space-y-4">
            {[
              'Setup and initialize a new React project',
              'Building the FeaturePhotos component',
              'Designing the Profile Information Section',
              'Creating the Profile Stats Section',
              'Implementing the Profile Post Timeline',
              'Implementing the Profile Photo Timeline',
              'Implementing the Profile Timeline Tabs',
              'Putting it All Together',
            ].map((section, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="bg-divider text-muted flex size-6 shrink-0 items-center justify-center rounded-full text-sm">
                  {index + 1}
                </span>
                <p>{section}</p>
              </div>
            ))}
          </div>
        }
        previewComponent={
          <div className="mt-4 flex flex-col items-center justify-center gap-4 md:mt-0">
            <ProfilePagePreview showStorySourceLink={false} />
            <Button
              as={Link}
              color="primary"
              variant="shadow"
              href="/tutorials/building-profile-ui"
              data-track="view_home_building_profile_ui_click"
            >
              View Tutorial
            </Button>
          </div>
        }
      />
      <Spacer className="my-8 md:my-24" />
      <HeadingSection
        title={
          <p className="text-3xl font-bold lg:text-4xl">
            Build a Flight Booking UI with React, Tailwind and HeroUI
          </p>
        }
        author={{
          avatar: 'https://avatars.githubusercontent.com/u/22409039?v=4',
          name: 'Vu Nguyen',
          description: 'Software Engineer, NAB',
        }}
        description={
          <div>
            <Paragraph>
              This comprehensive tutorial guides you through creating a modern,
              interactive flight booking page using React and HeroUI.
              You&apos;ll learn how to build reusable components for displaying
              flight information, implementing advanced filtering and sorting
              functionalities, and creating a responsive user interface. By the
              end of this tutorial, you&apos;ll have a fully functional flight
              booking page that showcases best practices in React development
              and UI/UX design.
            </Paragraph>
          </div>
        }
        extraContent={
          <div className="space-y-4">
            {[
              'Setup and initialize a new React project',
              'Building Flight Header Component',
              'Building Flight Card Component',
              'Building Flight List Component',
              'Building Flight Filter Form Component',
              'Building Flight Filter Drawer Component',
              'Building Flight Sort Menu Component',
              'Building Flight Preferences Component',
              'Putting It All together',
            ].map((section, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="bg-divider text-muted flex size-6 shrink-0 items-center justify-center rounded-full text-sm">
                  {index + 1}
                </span>
                <p>{section}</p>
              </div>
            ))}
          </div>
        }
        previewComponent={
          <div className="mt-4 flex flex-col items-center justify-center gap-4 md:mt-0">
            <FlightBookingPagePreview showStorySourceLink={false} />
            <Button
              as={Link}
              variant="shadow"
              color="primary"
              href="/tutorials/building-flight-booking-ui"
              data-track="view_home_building_flight_booking_ui_click"
            >
              View Tutorial
            </Button>
          </div>
        }
      />
    </section>
  );
};
