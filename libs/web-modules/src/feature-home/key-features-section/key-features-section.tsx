import { Divider } from '@nextui-org/react';
import {
  FlightBookingPagePreview,
  ProfilePagePreview,
} from '@upskill-app/tutorial-elements';
import { Paragraph } from '@upskill-app/ui/web';

import { HeadingSection } from '../../feature-tutorial-detail/heading-section';

// import KeyFeatureCodeContent from '../content/key-feature-code.mdx';
// import { CodeWithTabs } from './feature-code';

export const KeyFeaturesSection = () => {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-12">
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
          targetAudience="Beginner to intermediate React developers familiar with basic component structure and styling concepts."
          prerequisites={[
            'Node.js and yarn: Make sure you have these installed on your system.',
            'JavaScript and React basics: You should be comfortable with JavaScript fundamentals and understand the core concepts of React.',
            "A little TypeScript, CSS, and Tailwind knowledge: Some familiarity with these will help, but you don't need to be an expert – we'll guide you through!",
          ]}
          previewComponent={<ProfilePagePreview showStorySourceLink={false} />}
        />
        <Divider className="my-12" />
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
          targetAudience="Intermediate React developers familiar with JavaScript, React, and Tailwind CSS."
          prerequisites={[
            'Node.js and yarn (or other package manager) installed on your system',
            'JavaScript and React basics: You should be comfortable with JavaScript fundamentals and understand the core concepts of React.',
          ]}
          previewComponent={
            <FlightBookingPagePreview showStorySourceLink={false} />
          }
        />
      </div>
    </section>
  );
};
