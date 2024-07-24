import { Spacer, User } from '@nextui-org/react';
import { Heading1 } from '@upskill-app/ui/web';

type AuthorProps = {
  name: string;
  avatar: string;
  description: string;
};

type HeadingSectionProps = {
  title: string;
  description: React.ReactNode;
  thumbnailUrl: string;
  author: AuthorProps;
  targetAudience?: string;
  prerequisites?: string[];
};

export const HeadingSection = ({
  author,
  description,
  thumbnailUrl,
  title,
  prerequisites,
  targetAudience,
}: HeadingSectionProps) => {
  return (
    <section className="w-full pt-12">
      <div className="container space-y-10 px-4 md:px-6 xl:space-y-16">
        <div className="grid gap-4 md:grid-cols-5 md:gap-16">
          <div className="col-span-3">
            <Heading1>{title}</Heading1>
            <Spacer y={4} />
            <div className="flex items-center gap-4">
              <User
                name={author.name}
                description={author.description}
                avatarProps={{
                  src: author.avatar,
                }}
              />
            </div>
            <Spacer y={6} />
            <div className="md:text-xl">{description}</div>
            <Spacer y={6} />
            <div>
              <p className="text-muted text-lg">Target Audience</p>
              <Spacer y={2} />
              <p>{targetAudience}</p>
            </div>
            <Spacer y={6} />
            <div>
              <p className="text-muted text-lg">Prerequisites</p>
              <Spacer y={2} />
              {/* <ul className="ml-4 list-disc">
                <li>Node.js and yarn installed</li>
                <li>Basic understanding of React</li>
                <li>Familiarity with CSS or Tailwind</li>
              </ul> */}
              <ul className="ml-4 list-disc">
                {prerequisites?.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* <Image
            src={thumbnailUrl}
            width={600}
            height={400}
            alt={`${title} thumbnail`}
            isZoomed
            className="mx-auto aspect-video object-cover sm:w-full"
          /> */}
          <div>
            <iframe
              src="http://localhost:65294/iframe.html?args=&id=tutorials-profile-ui-page-screen--default&viewMode=docs&shortcuts=false&singleStory=true"
              width={400}
              height={650}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
