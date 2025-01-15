import { Divider, Image } from '@nextui-org/react';
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
    'This in-depth tutorial guides you through the process of creating a modern, interactive user profile page using React and NextUI.',
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
              Generics are a fundamental feature of statically-typed languages,
              allowing developers to pass types as parameters to another type,
              function, or other structure. When a developer makes their
              component a generic component, they give that component the
              ability to accept and enforce typing that is passed in when the
              component is used, which improves code flexibility, makes
              components reusable, and removes duplication.
            </Paragraph>
            <Paragraph>
              TypeScript fully supports generics as a way to introduce
              type-safety into components that accept arguments and return
              values whose type will be indeterminate until they are consumed
              later in your code. In this tutorial, you will try out real-world
              examples of TypeScript generics and explore how they are used in
              functions, types, classes, and interfaces.
            </Paragraph>
          </>
        }
        previewComponent={
          <Image
            src="/images/ts-generics-thumb.webp"
            className="md:m-2 xl:m-5"
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
