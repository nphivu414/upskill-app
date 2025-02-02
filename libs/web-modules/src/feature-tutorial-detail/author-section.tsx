import { Avatar, Button, Link, Spacer } from '@heroui/react';
import { CustomIcons, Paragraph } from '@upskill-app/ui/web';

export const AuthorSection = () => {
  return (
    <section className="w-full px-4">
      <p className="text-3xl font-bold">About the author</p>
      <Spacer y={6} />
      <div className="flex flex-col items-start gap-6 md:flex-row">
        <div className="shrink-0">
          <Avatar
            className="!size-24 md:!size-32"
            isBordered
            src="https://avatars.githubusercontent.com/u/22409039?v=4"
            fallback="Vu Nguyen"
          />
        </div>
        <div className="grow space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Vu Nguyen</h2>
            <p className="text-muted">NAB, Software Engineer</p>
          </div>
          <Paragraph className="text-lg leading-relaxed">
            Hi, I’m Vu, a Software Engineer at{' '}
            <Link href="https://www.nab.com.au/" target="_blank">
              NAB (National Australia Bank)
            </Link>{' '}
            with a love for creating web and mobile apps that don’t just look
            cool but feel great to use. I’ve had the chance to work with some
            awesome companies over the years, picking up new tricks and tackling
            many kinds of challenges along the way.
          </Paragraph>
          <Paragraph className="text-lg leading-relaxed">
            Now, I’m thrilled to share what I’ve learned and help others through
            fun, interactive coding tutorials!
          </Paragraph>
          <div className="flex gap-2">
            <Button
              as={Link}
              href="https://github.com/nphivu414"
              variant="flat"
              isIconOnly
              target="_blank"
            >
              <CustomIcons.gitHub className="size-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              as={Link}
              href="https://x.com/nphivu414"
              variant="flat"
              isIconOnly
              target="_blank"
            >
              <CustomIcons.x className="size-4" />
              <span className="sr-only">X</span>
            </Button>
            <Button
              as={Link}
              href="https://www.linkedin.com/in/nphivu414/"
              variant="flat"
              isIconOnly
              target="_blank"
            >
              <CustomIcons.linkedin className="size-4" />
              <span className="sr-only">X=Linkedin</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
