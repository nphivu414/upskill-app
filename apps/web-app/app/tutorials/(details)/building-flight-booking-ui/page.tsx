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
              This comprehensive tutorial guides you through creating a modern,
              interactive flight booking page using React and NextUI.
              You&apos;ll learn how to build reusable components for displaying
              flight information, implementing advanced filtering and sorting
              functionalities, and creating a responsive user interface. By the
              end of this tutorial, you&apos;ll have a fully functional flight
              booking page that showcases best practices in React development
              and UI/UX design.
            </Paragraph>
          </div>
        }
        targetAudience="React developers, from junior to intermediate levels, looking to enhance their skills in building complex, interactive web applications"
        prerequisites={[
          'Basic to intermediate knowledge of React and TypeScript',
          'Familiarity with modern JavaScript (ES6+) concepts',
          'Understanding of component-based architecture in React',
          'Basic knowledge of CSS and responsive design principles',
          'Familiarity with package managers (npm or yarn) and command-line interfaces',
          'Basic understanding of form handling and state management in React',
          '(Optional) Experience with NextUI or similar component libraries is helpful but not required',
        ]}
        previewComponent={
          <FlightBookingPagePreview showStorySourceLink={false} />
        }
      />
      <Divider className="my-12" />
      <ContentSection
        introText="9 sections • 2 hours 50 minutes"
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
