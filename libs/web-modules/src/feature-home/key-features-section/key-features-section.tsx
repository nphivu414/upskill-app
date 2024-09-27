import { Card, CardBody, CardHeader } from '@nextui-org/react';

import { CodeWithTabs } from '../../feature-tutorial-detail/code-renderer';
import { Code } from '../../feature-tutorial-detail/content-code-block';
import KeyFeatureCodeContent from '../content/key-feature-code.mdx';

type CardData = {
  title: string;
  description: string;
  colorClass: string;
};

const cardData: CardData[] = [
  {
    title: 'Interactive Previews',
    description:
      'Learn Visually. Our live previews offer a clear and intuitive way to understand coding concepts. See how your code affects the output, making learning more engaging and effective.',
    colorClass: 'text-primary',
  },
  {
    title: 'Clear Code Walkthrough',
    description:
      'Follow along with our step-by-step guides and clear explanations. We break down complex concepts into simple steps, making it easy for you to understand and apply them.',
    colorClass: 'text-success',
  },
  {
    title: 'Storybook and source code included',
    description:
      'Dive deeper into the code with Storybook and access the full source code of each tutorial. Understand how components are built and interact with each other, and use the source code as a reference for your own projects.',
    colorClass: 'text-warning',
  },
];

export const KeyFeaturesSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 lg:px-0">
      <div className="mx-auto grid max-w-full items-center gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col justify-center space-y-4">
          <ul className="grid gap-4">
            {cardData.map((card, index) => (
              <li key={index}>
                <Card
                  shadow="sm"
                  isBlurred
                  className="bg-background/60 dark:bg-default-100/50 border-none p-2"
                >
                  <CardHeader>
                    <h3 className={`${card.colorClass} text-xl font-bold`}>
                      {card.title}
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p>{card.description}</p>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          {/* Temporary fix for mdx tailwind class issue */}
          <div className="hidden h-[340px] w-[85vw] md:w-[75vw] lg:w-full" />
          <KeyFeatureCodeContent components={{ CodeWithTabs, Code }} />
        </div>
      </div>
    </section>
  );
};
