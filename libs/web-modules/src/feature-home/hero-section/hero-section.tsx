import { Button, Link } from '@nextui-org/react';

import HeroCodeContent from '../content/hero-code.mdx';
import { HeroCode } from './hero-code';

export const HeroSection = () => {
  return (
    // <section className="w-full py-12 md:py-24 lg:py-32">
    //   <div className="container px-4 md:px-6">
    //     <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
    //       <div className="flex flex-col justify-center space-y-4">
    //         <div className="space-y-2">
    //           <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
    //             Forget what you know about coding tutorials. This is something
    //             different.
    //           </h1>
    //           <p className="max-w-[600px] md:text-xl"></p>
    //         </div>
    //         <div className="flex flex-col gap-2 min-[400px]:flex-row">
    //           <Button
    //             as={Link}
    //             href="/tutorials/name"
    //             variant="shadow"
    //             color="primary"
    //           >
    //             Start Learning
    //           </Button>
    //           <Button
    //             as={Link}
    //             href="/tutorials"
    //             variant="bordered"
    //             color="primary"
    //           >
    //             Explore Courses
    //           </Button>
    //         </div>
    //       </div>
    //       <div className="bg-content1 flex size-[550px] items-center justify-center rounded-xl">
    //         <HeroCodeContent components={{ Code: HeroCode }} />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Forget what you know about coding tutorials.
            </h1>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              This is something <span className="text-primary">different</span>
            </h1>
          </div>
          <p className="text-muted mx-auto max-w-[700px] md:text-xl">
            Learn to build things with an interactive learning experience, clear
            walkthroughs, and copy-paste ready code snippets
          </p>
        </div>
      </div>
    </section>
  );
};
