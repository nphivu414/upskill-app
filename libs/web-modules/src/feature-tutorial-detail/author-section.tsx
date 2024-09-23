import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
} from '@nextui-org/react';
import { CustomIcons, Paragraph } from '@upskill-app/ui/web';

export const AuthorSection = () => {
  return (
    <section className="w-full">
      <Card shadow="none" className="bg-transparent">
        <CardHeader className="pb-4">
          <p className="text-3xl font-bold">About the Technical Writer</p>
        </CardHeader>
        <CardBody>
          <div className="flex max-w-screen-lg flex-col items-start gap-6 md:flex-row">
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
                <h2 className="text-2xl font-semibold">Vu Nguyen</h2>
                <p className="text-muted-foreground">NAB, Software Engineer</p>
              </div>
              <Paragraph className="text-lg leading-relaxed">
                Hi, I’m Vu, a Software Engineer at NAB with a love for creating
                web and mobile apps that don’t just look great but feel great to
                use. I’ve had the chance to work with some awesome companies
                over the years, picking up new tricks and tackling many kinds of
                challenges along the way.
              </Paragraph>
              <Paragraph className="text-lg leading-relaxed">
                Now, I’m thrilled to share what I’ve learned and help others
                through fun, interactive coding tutorials!
              </Paragraph>
              <div className="flex gap-4">
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
        </CardBody>
      </Card>
    </section>
  );
};
