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
      <div className="space-y-10 px-4 md:px-6 xl:space-y-16">
        <div className="flex items-start gap-4">
          <div className="flex-1">
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
              <ul className="ml-4 list-disc">
                {prerequisites?.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col items-center justify-center">
              <iframe
                src="http://localhost:9009/iframe.html?args=&id=tutorials-profile-ui-page-screen--default"
                width={400}
                height={650}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
