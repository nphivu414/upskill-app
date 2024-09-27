import { Divider, Spacer } from '@nextui-org/react';
import { FlightBookingPagePreview } from '@upskill-app/tutorial-elements';
import { Paragraph } from '@upskill-app/ui/web';
import {
  AuthorSection,
  ContentSection,
  FlightBookingContent,
  HeadingSection,
} from '@upskill-app/web-modules/tutorial-detail';

export const metadata = {
  title: 'Build a Flight Booking UI with React, Tailwind and NextUI',
};

export default function FlightBookingUI() {
  return (
    <div className="flex flex-col">
      <HeadingSection
        title="Build a Flight Booking UI with React, Tailwind and NextUI"
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
              react-hook-form to handle form state, validation and submission in
              a simple and efficient way.
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
      <Divider className="my-12" />
      <ContentSection
        introText="5 sections • 2 hours 30 minutes"
        totalSections={8}
      >
        <FlightBookingContent />
      </ContentSection>
      <Divider className="my-12" />
      <AuthorSection />
      <Spacer y={12} />
    </div>
  );
}
