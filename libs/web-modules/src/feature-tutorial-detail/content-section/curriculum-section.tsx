'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Heading3, Paragraph } from '@upskill-app/ui/web';
import StickyBox from 'react-sticky-box';

// import Code from './content/code.mdx';
// import { TutorialCode } from './tutorial-code';

export const CurriculumSection = () => {
  // State to track the currently expanded item
  const [expandedKey, setExpandedKey] = React.useState();
  console.log('🚀 ~ CurriculumSection ~ expandedKey:', expandedKey);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Assuming each AccordionItem has a unique 'key' prop
            const key = entry.target.getAttribute('data-key');
            setExpandedKey(key); // Update to set a singular value
          }
        });
      },
      { rootMargin: '0px', threshold: 0.5 }
    );

    // Observe each AccordionItem
    document.querySelectorAll('.accordion-item').forEach((item) => {
      observer.observe(item);
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-start">
      <div className="flex-1">
        <Accordion
          variant="splitted"
          selectionMode="single"
          defaultExpandedKeys={['1']}
          selectedKeys={expandedKey}
          itemClasses={{
            base: 'accordion-item',
          }}
        >
          <AccordionItem
            key="1"
            data-key="1"
            aria-label="Introduction to React"
            title={<Heading3>Introduction to React</Heading3>}
            subtitle="Learn the fundamentals of React, including its history,
    architecture, and key concepts."
          >
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ultricies dolor sem, sed luctus eros auctor ac. Suspendisse congue
              magna mi, ac convallis justo lobortis vel. Fusce congue fringilla
              dictum. Sed porttitor gravida euismod. Donec felis risus, euismod
              aliquam velit ut, laoreet convallis elit. Fusce mollis erat nulla,
              eget cursus turpis placerat eget. Curabitur posuere lectus a dolor
              consectetur pretium. Quisque justo elit, consequat sit amet enim
              non, vestibulum pretium justo. Ut ac nulla tellus. Integer
              sagittis, augue at pulvinar consequat, mi mauris tincidunt massa,
              eu malesuada libero neque a justo. Quisque sed eros quis nisl
              dignissim vehicula. Proin mi massa, varius ac mollis eu, dapibus
              at felis. Donec aliquet, orci ut ullamcorper sollicitudin, augue
              risus pretium ex, in rutrum orci nulla in diam. In suscipit, risus
              eget aliquet fringilla, odio nunc bibendum tellus, efficitur
              hendrerit odio velit id nunc.
            </Paragraph>
            <Paragraph>
              Proin tristique quis ante sed sollicitudin. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Cras eros tortor, condimentum id sem et, malesuada
              mattis mi. Maecenas dapibus leo blandit, iaculis arcu non, semper
              leo. Phasellus posuere mi et suscipit congue. Donec sit amet
              placerat dui. Nunc eleifend, enim sed bibendum euismod, nunc neque
              blandit odio, eget bibendum justo lorem sit amet libero. Aenean ac
              varius mauris, at elementum nisl. Maecenas feugiat at justo non
              cursus. Vestibulum fermentum, erat nec convallis suscipit, neque
              libero ultrices dolor, eu laoreet turpis nisi et purus. Cras neque
              lacus, blandit quis tincidunt placerat, pretium non justo. Quisque
              efficitur, nulla nec viverra laoreet, dui orci tincidunt sapien,
              sit amet sodales urna felis aliquet nibh.
            </Paragraph>
            <Paragraph>
              Proin eu auctor leo. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus vehicula ante euismod nisi luctus, vel
              posuere dui ullamcorper. Fusce ac dui at arcu suscipit rhoncus.
              Donec sagittis metus vel dui aliquam, suscipit tempor nisl
              pharetra. Morbi sit amet nisl quis mi ullamcorper fermentum vel eu
              nibh. In porta odio et purus consequat, ac pulvinar velit
              pulvinar. Etiam eu placerat enim. Vestibulum varius, dui vitae
              tincidunt malesuada, ligula sapien tempus lorem, id dapibus nulla
              nulla nec enim. Aenean sagittis maximus ipsum, non fermentum
              ligula.
            </Paragraph>
          </AccordionItem>
          <AccordionItem
            key="2"
            data-key="2"
            aria-label="Setting up a React Development Environment"
            title={
              <Heading3>Setting up a React Development Environment</Heading3>
            }
            subtitle="Explore the tools and setup required to start building React applications."
          >
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ultricies dolor sem, sed luctus eros auctor ac. Suspendisse congue
              magna mi, ac convallis justo lobortis vel. Fusce congue fringilla
              dictum. Sed porttitor gravida euismod. Donec felis risus, euismod
              aliquam velit ut, laoreet convallis elit. Fusce mollis erat nulla,
              eget cursus turpis placerat eget. Curabitur posuere lectus a dolor
              consectetur pretium. Quisque justo elit, consequat sit amet enim
              non, vestibulum pretium justo. Ut ac nulla tellus. Integer
              sagittis, augue at pulvinar consequat, mi mauris tincidunt massa,
              eu malesuada libero neque a justo. Quisque sed eros quis nisl
              dignissim vehicula. Proin mi massa, varius ac mollis eu, dapibus
              at felis. Donec aliquet, orci ut ullamcorper sollicitudin, augue
              risus pretium ex, in rutrum orci nulla in diam. In suscipit, risus
              eget aliquet fringilla, odio nunc bibendum tellus, efficitur
              hendrerit odio velit id nunc.
            </Paragraph>
            <Paragraph>
              Proin tristique quis ante sed sollicitudin. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Cras eros tortor, condimentum id sem et, malesuada
              mattis mi. Maecenas dapibus leo blandit, iaculis arcu non, semper
              leo. Phasellus posuere mi et suscipit congue. Donec sit amet
              placerat dui. Nunc eleifend, enim sed bibendum euismod, nunc neque
              blandit odio, eget bibendum justo lorem sit amet libero. Aenean ac
              varius mauris, at elementum nisl. Maecenas feugiat at justo non
              cursus. Vestibulum fermentum, erat nec convallis suscipit, neque
              libero ultrices dolor, eu laoreet turpis nisi et purus. Cras neque
              lacus, blandit quis tincidunt placerat, pretium non justo. Quisque
              efficitur, nulla nec viverra laoreet, dui orci tincidunt sapien,
              sit amet sodales urna felis aliquet nibh.
            </Paragraph>
            <Paragraph>
              Proin eu auctor leo. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus vehicula ante euismod nisi luctus, vel
              posuere dui ullamcorper. Fusce ac dui at arcu suscipit rhoncus.
              Donec sagittis metus vel dui aliquam, suscipit tempor nisl
              pharetra. Morbi sit amet nisl quis mi ullamcorper fermentum vel eu
              nibh. In porta odio et purus consequat, ac pulvinar velit
              pulvinar. Etiam eu placerat enim. Vestibulum varius, dui vitae
              tincidunt malesuada, ligula sapien tempus lorem, id dapibus nulla
              nulla nec enim. Aenean sagittis maximus ipsum, non fermentum
              ligula.
            </Paragraph>
          </AccordionItem>
          <AccordionItem
            key="3"
            data-key="3"
            aria-label="React Components and State Management"
            title={<Heading3>React Components and State Management</Heading3>}
            subtitle="Dive into the core concepts of React, including components, props, and state management."
          >
            <Paragraph>
              Proin tristique quis ante sed sollicitudin. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Cras eros tortor, condimentum id sem et, malesuada
              mattis mi. Maecenas dapibus leo blandit, iaculis arcu non, semper
              leo. Phasellus posuere mi et suscipit congue. Donec sit amet
              placerat dui. Nunc eleifend, enim sed bibendum euismod, nunc neque
              blandit odio, eget bibendum justo lorem sit amet libero. Aenean ac
              varius mauris, at elementum nisl. Maecenas feugiat at justo non
              cursus. Vestibulum fermentum, erat nec convallis suscipit, neque
              libero ultrices dolor, eu laoreet turpis nisi et purus. Cras neque
              lacus, blandit quis tincidunt placerat, pretium non justo. Quisque
              efficitur, nulla nec viverra laoreet, dui orci tincidunt sapien,
              sit amet sodales urna felis aliquet nibh.
            </Paragraph>
            <Paragraph>
              Proin eu auctor leo. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus vehicula ante euismod nisi luctus, vel
              posuere dui ullamcorper. Fusce ac dui at arcu suscipit rhoncus.
              Donec sagittis metus vel dui aliquam, suscipit tempor nisl
              pharetra. Morbi sit amet nisl quis mi ullamcorper fermentum vel eu
              nibh. In porta odio et purus consequat, ac pulvinar velit
              pulvinar. Etiam eu placerat enim. Vestibulum varius, dui vitae
              tincidunt malesuada, ligula sapien tempus lorem, id dapibus nulla
              nulla nec enim. Aenean sagittis maximus ipsum, non fermentum
              ligula.
            </Paragraph>
          </AccordionItem>
        </Accordion>
      </div>
      <StickyBox className="flex-1" offsetTop={60}>
        <div className="flex flex-col items-center justify-center p-4">
          {/* <Code components={{ Code: TutorialCode }} /> */}
        </div>
      </StickyBox>
    </div>
  );
};
