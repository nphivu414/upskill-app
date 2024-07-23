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
        author={{
          avatar: 'https://avatars.githubusercontent.com/u/22409039?v=4',
          name: 'Vu Nguyen',
          description: 'Software Engineer, NAB',
        }}
        description={
          <>
            <Paragraph>
              Learn to build a stunning, interactive profile page with React and
              NextUI!
            </Paragraph>
            <Paragraph>
              This hands-on tutorial will teach you how to design a captivating
              header, display user information effectively, highlight key stats,
              create an engaging timeline, and customize the look and feel of
              your page.
            </Paragraph>
            <Paragraph>
              <span className="font-bold">Target Audience: </span>
              <span>
                Beginner to intermediate React developers familiar with basic
                component structure and styling concepts.
              </span>
            </Paragraph>

            <Paragraph className="mb-2 font-bold">Prerequisites:</Paragraph>
            <div className="ml-8">
              <ul className="list-disc">
                <li>Node.js installed</li>
                <li>Basic understanding of React components, JSX, and props</li>
                <li>Familiarity with CSS or Tailwind</li>
              </ul>
            </div>
          </>
        }
        thumbnailUrl="https://nextui.org/images/fruit-4.jpeg?_rq_delayed=true"
        title="Crafting Profile Page with React and NextUI"
      />
      <ContentSection introText="Explore the comprehensive curriculum and dive into the world of React.">
        <ProfileContent />
      </ContentSection>
    </div>
  );
}
