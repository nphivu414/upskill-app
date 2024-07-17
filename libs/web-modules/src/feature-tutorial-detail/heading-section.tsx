import { Image, Spacer, User } from '@nextui-org/react';

type AuthorProps = {
  name: string;
  avatar: string;
  description: string;
};

type HeadingSectionProps = {
  title: string;
  description: string;
  thumbnailUrl: string;
  author: AuthorProps;
};

export const HeadingSection = ({
  author,
  description,
  thumbnailUrl,
  title,
}: HeadingSectionProps) => {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 px-4 md:px-6 xl:space-y-16">
        <div className="grid gap-4 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              {title}
            </h1>
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
            <p className="md:text-xl">{description}</p>
          </div>
          <Image
            src={thumbnailUrl}
            width={600}
            height={400}
            alt={`${title} thumbnail`}
            isZoomed
            className="mx-auto aspect-video object-cover sm:w-full"
          />
        </div>
      </div>
    </section>
  );
};
