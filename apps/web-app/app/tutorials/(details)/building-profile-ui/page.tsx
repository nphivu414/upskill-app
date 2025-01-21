import { Divider } from '@heroui/react';
import { ProfilePagePreview } from '@upskill-app/tutorial-elements';
import { Paragraph } from '@upskill-app/ui/web';
import {
  AuthorSection,
  ContentSection,
  HeadingSection,
  ProfileContent,
} from '@upskill-app/web-modules/tutorial-detail';

export const metadata = {
  title: 'Build a User Profile Page with React and HeroUI',
  description:
    'This in-depth tutorial guides you through the process of creating a modern, interactive user profile page using React and HeroUI.',
};

export default function ProfileUI() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeadingSection
        title="Build a User Profile Page with React and HeroUI"
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
        prerequisites={[
          'Basic knowledge of React and TypeScript',
          'Familiarity with modern JavaScript (ES6+) concepts',
          'Understanding of component-based architecture in React',
          'Basic knowledge of CSS and Tailwind',
          'Familiarity with package managers (npm or yarn) and command-line interfaces',
          'Basic understanding of state management in React',
          '(Optional) Experience with HeroUI or similar component libraries is helpful but not required',
        ]}
        previewComponent={<ProfilePagePreview />}
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
    </div>
  );
}
