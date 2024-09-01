import { Divider } from '@nextui-org/react';
import { FlightBookingPagePreview } from '@upskill-app/tutorial-elements';
import { Paragraph } from '@upskill-app/ui/web';
import {
  ContentSection,
  FlightBookingContent,
  HeadingSection,
} from '@upskill-app/web-modules/tutorial-detail';

export default function FlightBookingUI() {
  return (
    <div className="flex flex-col">
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
              Let&apos;s build a beautiful flight booking UI with React,
              Tailwind CSS, and NextUI. In this tutorial, you&apos;ll learn how
              to create a modern and user-friendly interface for booking
              flights. We&apos;ll cover everything from setting up the project
              to creating reusable components and styling them with Tailwind
              CSS. By the end of this tutorial, you&apos;ll have a fully
              functional flight booking UI that you can use in your own
              projects.
            </Paragraph>
          </div>
        }
        targetAudience="Beginner to intermediate React developers familiar with basic component structure and styling concepts."
        prerequisites={[
          'Node.js and yarn: Make sure you have these installed on your system.',
          'JavaScript and React basics: You should be comfortable with JavaScript fundamentals and understand the core concepts of React.',
          "A little TypeScript, CSS, and Tailwind knowledge: Some familiarity with these will help, but you don't need to be an expert – we'll guide you through!",
        ]}
        previewComponent={<FlightBookingPagePreview />}
        storybookUrl="#"
        sourceUrl="#"
      />
      <Divider className="my-12" />
      <ContentSection
        introText="5 sections • 2 hours 30 minutes"
        totalSections={8}
      >
        <FlightBookingContent />
      </ContentSection>
    </div>
  );
}
