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
  author: AuthorProps;
  targetAudience?: string;
  prerequisites?: string[];
  previewComponent: React.ReactNode;
  storybookUrl: string;
  sourceUrl?: string;
};

export const HeadingSection = ({
  author,
  description,
  title,
  prerequisites,
  targetAudience,
  previewComponent,
  storybookUrl,
  sourceUrl,
}: HeadingSectionProps) => {
  return (
    <section className="w-full">
      <div className="space-y-10 px-4 md:px-6 xl:space-y-16">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <div className="flex-1 pt-10">
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
            <div className="md:text-lg">{description}</div>
            <Spacer y={6} />
            <div>
              <p className="text-lg font-semibold">Target Audience</p>
              <Spacer y={2} />
              <p className="text-sm">{targetAudience}</p>
            </div>
            <Spacer y={6} />
            <div>
              <p className="text-lg font-semibold">Prerequisites</p>
              <Spacer y={2} />
              <ul className="ml-4 list-disc">
                {prerequisites?.map((prerequisite, index) => (
                  <li key={index} className="py-1 text-sm">
                    {prerequisite}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2">{previewComponent}</div>
        </div>
      </div>
    </section>
  );
};
