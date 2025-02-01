import { Spacer, User } from '@heroui/react';
import { Heading1 } from '@upskill-app/ui/web';

type AuthorProps = {
  name: string;
  avatar: string;
  description: string;
};

type HeadingSectionProps = {
  title: string | React.ReactNode;
  description: React.ReactNode;
  author: AuthorProps;
  targetAudience?: string;
  prerequisites?: string[];
  extraContent?: React.ReactNode;
  previewComponent: React.ReactNode;
};

export const HeadingSection = ({
  author,
  description,
  title,
  prerequisites,
  targetAudience,
  previewComponent,
  extraContent,
}: HeadingSectionProps) => {
  return (
    <section className="w-full space-y-10 px-4 xl:space-y-16">
      <div className="flex flex-col items-start gap-4 pt-4 lg:flex-row">
        <div className="flex-1">
          {typeof title === 'string' ? <Heading1>{title}</Heading1> : title}
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
          {targetAudience ? (
            <div>
              <Spacer y={6} />
              <p className="text-lg font-semibold">Target Audience</p>
              <Spacer y={2} />
              <p className="text-sm">{targetAudience}</p>
            </div>
          ) : null}
          {prerequisites ? (
            <div>
              <Spacer y={6} />
              <p className="text-lg font-semibold">Prerequisites</p>
              <Spacer y={2} />
              <ul className="ml-4 list-disc">
                {prerequisites?.map((prerequisite, index) => (
                  <li key={index} className="py-1">
                    {prerequisite}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {extraContent ? (
            <>
              <Spacer y={6} />
              {extraContent}
            </>
          ) : null}
        </div>
        <div className="w-full pt-4 lg:w-1/3 lg:pt-0">{previewComponent}</div>
      </div>
    </section>
  );
};
