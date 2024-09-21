import { Button, Link, Spacer } from '@nextui-org/react';
import {
  FlightBookingPagePreview,
  ProfilePagePreview,
} from '@upskill-app/tutorial-elements';
import { Paragraph } from '@upskill-app/ui/web';

import { HeadingSection } from '../feature-tutorial-detail/heading-section';

export const CourseOfferingSection = () => {
  return (
    <section id="highlighted-tutorials" className="w-full py-24">
      <div className="container mx-auto">
        <HeadingSection
          title="Build a profile page UI with React, Tailwind and NextUI"
          author={{
            avatar: 'https://avatars.githubusercontent.com/u/22409039?v=4',
            name: 'Vu Nguyen',
            description: 'Software Engineer, NAB',
          }}
          description={
            <div>
              <Paragraph>
                Let&apos;s build a profile page with the power of React,
                Tailwind and NextUI. This hands-on guide will walk you through
                building a modern, interactive profile UI that is not only
                beautiful but also designed for easy integration with your
                existing projects.
              </Paragraph>
            </div>
          }
          extraContent={
            <div className="space-y-4">
              {[
                'Setup and initialize a new React project with NextUI',
                'Building the FeaturePhotos component',
                'Designing the Profile Information Section',
                'Creating the Profile Stats Section',
                'Implementing the Profile Post Timeline',
                'Implementing the Profile Photo Timeline',
                'Implementing the Profile Timeline Tabs',
                'Putting it All Together',
              ].map((section, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="bg-divider flex size-6 shrink-0 items-center justify-center rounded-full text-sm text-white">
                    {index + 1}
                  </span>
                  <p>{section}</p>
                </div>
              ))}
            </div>
          }
          previewComponent={
            <div className="flex flex-col items-center justify-center gap-4">
              <ProfilePagePreview showStorySourceLink={false} />
              <Button
                as={Link}
                color="primary"
                variant="shadow"
                href="/tutorials/building-profile-ui"
              >
                View Tutorial
              </Button>
            </div>
          }
        />
      </div>
      <Spacer y={24} />
      <div className="container mx-auto">
        <HeadingSection
          title="Crafting Flight Booking UI with React, Tailwind and NextUI"
          author={{
            avatar: 'https://avatars.githubusercontent.com/u/22409039?v=4',
            name: 'Vu Nguyen',
            description: 'Software Engineer, NAB',
          }}
          description={
            <div>
              <Paragraph>
                Let&apos;s build a beautiful search flight UI with the power of
                React, NextUI and react-hook-form. This hands-on guide will walk
                you through building a modern, interactive search flight UI with
                filter and sort features. You will also learn how to use
                react-hook-form to handle form state, validation and submission
                in a simple and efficient way.
              </Paragraph>
            </div>
          }
          extraContent={
            <div className="space-y-4">
              {[
                'Setup and initialize a new React project with NextUI',
                'Building Flight Header Component',
                'Building Flight Card Component',
                'Building Flight List Component',
                'Building Flight Filter Form Component',
                'Building Flight Filter Drawer Component',
                'Building Flight Sort Menu Component',
                'Building Flight Preferences Component',
                'Building Flight Booking Page Component',
              ].map((section, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="bg-divider flex size-6 shrink-0 items-center justify-center rounded-full text-sm text-white">
                    {index + 1}
                  </span>
                  <p>{section}</p>
                </div>
              ))}
            </div>
          }
          previewComponent={
            <div className="flex flex-col items-center justify-center gap-4">
              <FlightBookingPagePreview showStorySourceLink={false} />
              <Button
                as={Link}
                variant="shadow"
                color="primary"
                href="/tutorials/building-flight-booking-ui"
              >
                View Tutorial
              </Button>
            </div>
          }
        />
      </div>
    </section>
  );
};
