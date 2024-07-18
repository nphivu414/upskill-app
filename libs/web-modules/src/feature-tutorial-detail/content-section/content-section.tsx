'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Heading2, Heading3, Paragraph } from '@upskill-app/ui/web';

export const ContentSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div>
            <Heading2>Tutorial Content</Heading2>
            <p className="md:text-xl">
              Explore the comprehensive curriculum and dive into the world of
              React.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Accordion
                variant="splitted"
                selectionMode="single"
                defaultExpandedKeys={['1']}
                itemClasses={{}}
              >
                <AccordionItem
                  key="1"
                  aria-label="Introduction to React"
                  title={<Heading3>Introduction to React</Heading3>}
                  subtitle="Learn the fundamentals of React, including its history,
                architecture, and key concepts."
                >
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean ultricies dolor sem, sed luctus eros auctor ac.
                    Suspendisse congue magna mi, ac convallis justo lobortis
                    vel. Fusce congue fringilla dictum. Sed porttitor gravida
                    euismod. Donec felis risus, euismod aliquam velit ut,
                    laoreet convallis elit. Fusce mollis erat nulla, eget cursus
                    turpis placerat eget. Curabitur posuere lectus a dolor
                    consectetur pretium. Quisque justo elit, consequat sit amet
                    enim non, vestibulum pretium justo. Ut ac nulla tellus.
                    Integer sagittis, augue at pulvinar consequat, mi mauris
                    tincidunt massa, eu malesuada libero neque a justo. Quisque
                    sed eros quis nisl dignissim vehicula. Proin mi massa,
                    varius ac mollis eu, dapibus at felis. Donec aliquet, orci
                    ut ullamcorper sollicitudin, augue risus pretium ex, in
                    rutrum orci nulla in diam. In suscipit, risus eget aliquet
                    fringilla, odio nunc bibendum tellus, efficitur hendrerit
                    odio velit id nunc.
                  </Paragraph>
                  <Paragraph>
                    Proin tristique quis ante sed sollicitudin. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Cras eros tortor, condimentum id sem et,
                    malesuada mattis mi. Maecenas dapibus leo blandit, iaculis
                    arcu non, semper leo. Phasellus posuere mi et suscipit
                    congue. Donec sit amet placerat dui. Nunc eleifend, enim sed
                    bibendum euismod, nunc neque blandit odio, eget bibendum
                    justo lorem sit amet libero. Aenean ac varius mauris, at
                    elementum nisl. Maecenas feugiat at justo non cursus.
                    Vestibulum fermentum, erat nec convallis suscipit, neque
                    libero ultrices dolor, eu laoreet turpis nisi et purus. Cras
                    neque lacus, blandit quis tincidunt placerat, pretium non
                    justo. Quisque efficitur, nulla nec viverra laoreet, dui
                    orci tincidunt sapien, sit amet sodales urna felis aliquet
                    nibh.
                  </Paragraph>
                  <Paragraph>
                    Proin eu auctor leo. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vivamus vehicula ante euismod nisi luctus,
                    vel posuere dui ullamcorper. Fusce ac dui at arcu suscipit
                    rhoncus. Donec sagittis metus vel dui aliquam, suscipit
                    tempor nisl pharetra. Morbi sit amet nisl quis mi
                    ullamcorper fermentum vel eu nibh. In porta odio et purus
                    consequat, ac pulvinar velit pulvinar. Etiam eu placerat
                    enim. Vestibulum varius, dui vitae tincidunt malesuada,
                    ligula sapien tempus lorem, id dapibus nulla nulla nec enim.
                    Aenean sagittis maximus ipsum, non fermentum ligula.
                  </Paragraph>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Setting up a React Development Environment"
                  title={
                    <Heading3>
                      Setting up a React Development Environment
                    </Heading3>
                  }
                  subtitle="Explore the tools and setup required to start building React applications."
                >
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean ultricies dolor sem, sed luctus eros auctor ac.
                    Suspendisse congue magna mi, ac convallis justo lobortis
                    vel. Fusce congue fringilla dictum. Sed porttitor gravida
                    euismod. Donec felis risus, euismod aliquam velit ut,
                    laoreet convallis elit. Fusce mollis erat nulla, eget cursus
                    turpis placerat eget. Curabitur posuere lectus a dolor
                    consectetur pretium. Quisque justo elit, consequat sit amet
                    enim non, vestibulum pretium justo. Ut ac nulla tellus.
                    Integer sagittis, augue at pulvinar consequat, mi mauris
                    tincidunt massa, eu malesuada libero neque a justo. Quisque
                    sed eros quis nisl dignissim vehicula. Proin mi massa,
                    varius ac mollis eu, dapibus at felis. Donec aliquet, orci
                    ut ullamcorper sollicitudin, augue risus pretium ex, in
                    rutrum orci nulla in diam. In suscipit, risus eget aliquet
                    fringilla, odio nunc bibendum tellus, efficitur hendrerit
                    odio velit id nunc.
                  </Paragraph>
                  <Paragraph>
                    Proin tristique quis ante sed sollicitudin. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Cras eros tortor, condimentum id sem et,
                    malesuada mattis mi. Maecenas dapibus leo blandit, iaculis
                    arcu non, semper leo. Phasellus posuere mi et suscipit
                    congue. Donec sit amet placerat dui. Nunc eleifend, enim sed
                    bibendum euismod, nunc neque blandit odio, eget bibendum
                    justo lorem sit amet libero. Aenean ac varius mauris, at
                    elementum nisl. Maecenas feugiat at justo non cursus.
                    Vestibulum fermentum, erat nec convallis suscipit, neque
                    libero ultrices dolor, eu laoreet turpis nisi et purus. Cras
                    neque lacus, blandit quis tincidunt placerat, pretium non
                    justo. Quisque efficitur, nulla nec viverra laoreet, dui
                    orci tincidunt sapien, sit amet sodales urna felis aliquet
                    nibh.
                  </Paragraph>
                  <Paragraph>
                    Proin eu auctor leo. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vivamus vehicula ante euismod nisi luctus,
                    vel posuere dui ullamcorper. Fusce ac dui at arcu suscipit
                    rhoncus. Donec sagittis metus vel dui aliquam, suscipit
                    tempor nisl pharetra. Morbi sit amet nisl quis mi
                    ullamcorper fermentum vel eu nibh. In porta odio et purus
                    consequat, ac pulvinar velit pulvinar. Etiam eu placerat
                    enim. Vestibulum varius, dui vitae tincidunt malesuada,
                    ligula sapien tempus lorem, id dapibus nulla nulla nec enim.
                    Aenean sagittis maximus ipsum, non fermentum ligula.
                  </Paragraph>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="React Components and State Management"
                  title={
                    <Heading3>React Components and State Management</Heading3>
                  }
                  subtitle="Dive into the core concepts of React, including components, props, and state management."
                >
                  <Paragraph>
                    Proin tristique quis ante sed sollicitudin. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Cras eros tortor, condimentum id sem et,
                    malesuada mattis mi. Maecenas dapibus leo blandit, iaculis
                    arcu non, semper leo. Phasellus posuere mi et suscipit
                    congue. Donec sit amet placerat dui. Nunc eleifend, enim sed
                    bibendum euismod, nunc neque blandit odio, eget bibendum
                    justo lorem sit amet libero. Aenean ac varius mauris, at
                    elementum nisl. Maecenas feugiat at justo non cursus.
                    Vestibulum fermentum, erat nec convallis suscipit, neque
                    libero ultrices dolor, eu laoreet turpis nisi et purus. Cras
                    neque lacus, blandit quis tincidunt placerat, pretium non
                    justo. Quisque efficitur, nulla nec viverra laoreet, dui
                    orci tincidunt sapien, sit amet sodales urna felis aliquet
                    nibh.
                  </Paragraph>
                  <Paragraph>
                    Proin eu auctor leo. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vivamus vehicula ante euismod nisi luctus,
                    vel posuere dui ullamcorper. Fusce ac dui at arcu suscipit
                    rhoncus. Donec sagittis metus vel dui aliquam, suscipit
                    tempor nisl pharetra. Morbi sit amet nisl quis mi
                    ullamcorper fermentum vel eu nibh. In porta odio et purus
                    consequat, ac pulvinar velit pulvinar. Etiam eu placerat
                    enim. Vestibulum varius, dui vitae tincidunt malesuada,
                    ligula sapien tempus lorem, id dapibus nulla nulla nec enim.
                    Aenean sagittis maximus ipsum, non fermentum ligula.
                  </Paragraph>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <h3>Code Block here</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
