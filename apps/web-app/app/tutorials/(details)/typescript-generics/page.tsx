import { Divider, Image } from '@heroui/react';
import { Paragraph } from '@upskill-app/ui/web';
import {
  AuthorSection,
  ContentSection,
  HeadingSection,
  TypescriptGenericsContent,
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
              Generics are a core feature in statically-typed languages like
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
        previewComponent={
          <Image
            src="/images/ts-generics-thumb.webp"
            className="md:m-2 md:h-[350px] xl:m-5"
            isBlurred
            alt="Typescript Generics"
          />
        }
      />
      <Divider className="my-12" />
      <ContentSection
        introText="8 sections • 3 hours and 30 minutes"
        totalSections={8}
      >
        <TypescriptGenericsContent />
      </ContentSection>
      <Divider className="my-12" />
      <AuthorSection />
    </div>
  );
}
