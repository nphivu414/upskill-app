import { Paragraph } from '@upskill-app/ui/web';
import {
  ContentSection,
  HeadingSection,
  ProfileContent,
} from '@upskill-app/web-modules/tutorial-detail';

export default function ProfileUiPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <HeadingSection
        title="Crafting Profile Page with React, Tailwind and NextUI"
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
        thumbnailUrl="https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b"
      />
      <ContentSection introText="Explore the comprehensive curriculum and dive into the world of React.">
        <ProfileContent />
      </ContentSection>
    </div>
  );
}
