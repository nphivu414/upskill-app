import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
} from '@nextui-org/react';
import { CustomIcons } from '@upskill-app/ui/web';

export const AuthorSection = () => {
  return (
    <section className="w-full">
      <Card isBlurred>
        <CardHeader className="pb-4">
          <p className="text-3xl font-bold">About the Technical Writer</p>
        </CardHeader>
        <CardBody>
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
                <h2 className="text-2xl font-semibold">Vu Nguyen</h2>
                <p className="text-muted-foreground">NAB, Software Engineer</p>
              </div>
              <p className="text-lg leading-relaxed">
                A tech enthusiast with a dream to create amazing products.
                Experienced in software engineering, specializing in creating
                websites and mobile apps with beautiful UI and UX. Always up for
                a challenge and ready to learn something new.
              </p>
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
