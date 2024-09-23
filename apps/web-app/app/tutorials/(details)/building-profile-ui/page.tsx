import { Divider } from '@nextui-org/react';
import { ProfilePagePreview } from '@upskill-app/tutorial-elements';
import { Paragraph } from '@upskill-app/ui/web';
import {
  ContentSection,
  HeadingSection,
  ProfileContent,
} from '@upskill-app/web-modules/tutorial-detail';

export const metadata = {
  title: 'Building Profile Page UI with React, Tailwind and NextUI',
};

export default function ProfileUI() {
  return (
    <div className="flex flex-col">
      <HeadingSection
        title="Building Profile Page UI with React, Tailwind and NextUI"
        author={{
          avatar: 'https://avatars.githubusercontent.com/u/22409039?v=4',
          name: 'Vu Nguyen',
          description: 'Software Engineer, NAB',
        }}
        description={
          <div>
            <Paragraph>
              Let&apos;s build a profile page with the power of React, Tailwind
              and NextUI. This hands-on guide will walk you through building a
              modern, interactive profile UI that is not only beautiful but also
              designed for easy integration with your existing projects.
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
      <ContentSection
        introText="5 sections • 2 hours 30 minutes"
        totalSections={8}
      >
        <ProfileContent />
      </ContentSection>
    </div>
  );
}
