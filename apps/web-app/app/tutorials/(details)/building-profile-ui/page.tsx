import { Divider, Spacer } from '@nextui-org/react';
import { ProfilePagePreview } from '@upskill-app/tutorial-elements';
import { Paragraph } from '@upskill-app/ui/web';
import {
  AuthorSection,
  ContentSection,
  HeadingSection,
  ProfileContent,
} from '@upskill-app/web-modules/tutorial-detail';

export const metadata = {
  title: 'Build a Profile Page UI with React, Tailwind and NextUI',
};

export default function ProfileUI() {
  return (
    <div className="flex flex-col">
      <HeadingSection
        title="Building a Dynamic User Profile Page with React and NextUI"
        author={{
          avatar: 'https://avatars.githubusercontent.com/u/22409039?v=4',
          name: 'Vu Nguyen',
          description: 'Software Engineer, NAB',
        }}
        description={
          <div>
            <Paragraph>
              This in-depth tutorial guides you through the process of creating
              a modern, interactive user profile page using React and NextUI.
              You&apos;ll learn how to construct reusable components for
              showcasing user information, implementing a feature photo
              carousel, and displaying user posts and photos. By the end of this
              tutorial, you&apos;ll have a fully functional profile page that
              demonstrates best practices in React development and UI design.
            </Paragraph>
          </div>
        }
        targetAudience="React developers, from junior to intermediate levels, seeking to improve their skills in creating complex, interactive web applications with modern UI components."
        prerequisites={[
          'Basic to intermediate knowledge of React and TypeScript',
          'Familiarity with modern JavaScript (ES6+) concepts',
          'Understanding of component-based architecture in React',
          'Basic knowledge of CSS and responsive design principles',
          'Familiarity with package managers (npm or yarn) and command-line interfaces',
          'Basic understanding of state management in React',
          '(Optional) Experience with NextUI or similar component libraries is helpful but not required',
        ]}
        previewComponent={<ProfilePagePreview showStorySourceLink={false} />}
      />
      <Divider className="my-12" />
      <ContentSection
        introText="8 sections • 3 hours and 30 minutes"
        totalSections={8}
      >
        <ProfileContent />
      </ContentSection>
      <Divider className="my-12" />
      <AuthorSection />
      <Spacer y={12} />
    </div>
  );
}
