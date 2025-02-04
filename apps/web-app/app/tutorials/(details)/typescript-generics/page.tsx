import { Divider, Image } from '@heroui/react';
import { Paragraph } from '@upskill-app/ui/web';
import {
  AuthorSection,
  ContentSection,
  HeadingSection,
  TypescriptGenericsContent,
  TypescriptGenericThumb,
} from '@upskill-app/web-modules/tutorial-detail';

export const metadata = {
  title: 'Understanding TypeScript Generics',
  description:
    'This in-depth tutorial guides you through the process of creating a modern, interactive user profile page using React and HeroUI.',
};

export default function TypescriptGenerics() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeadingSection
        title="Understanding TypeScript Generics"
        author={{
          avatar: 'https://avatars.githubusercontent.com/u/22409039?v=4',
          name: 'Vu Nguyen',
          description: 'Software Engineer, NAB',
        }}
        description={
          <>
            <Paragraph>
              Generics is a core feature in statically-typed languages like
              TypeScript, enabling developers to define components, functions,
              or structures that can accept and enforce types passed during use.
              This enhances flexibility, promotes reusability, and reduces code
              duplication.
            </Paragraph>
            <Paragraph>
              In this tutorial, we&apos;ll explore practical examples of
              TypeScript generics and learn how to use them effectively in
              functions, types, classes, and interfaces to improve type safety
              and adaptability in your code.
            </Paragraph>
          </>
        }
        prerequisites={[
          'Basic knowledge of TypeScript',
          'Familiarity with JavaScript (ES6+) concepts',
        ]}
        previewComponent={
          <TypescriptGenericThumb/>
        }
      />
      <Divider className="my-12" />
      <ContentSection
        introText="6 sections • approximately 2 hours"
        totalSections={8}
      >
        <TypescriptGenericsContent />
      </ContentSection>
      <Divider className="my-12" />
      <AuthorSection />
    </div>
  );
}
