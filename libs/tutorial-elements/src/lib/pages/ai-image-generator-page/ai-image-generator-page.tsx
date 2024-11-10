import { Heading1 } from '@upskill-app/ui/web';

import { HeroSection } from './hero-section';
import { PromptInput } from './prompt-input';
import { ResultPanel } from './result-panel';

export const AiImageGeneratorPage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="bg-background fixed bottom-0 z-10 flex h-[35vh] w-full flex-col justify-center">
        <PromptInput />
      </div>
    </div>
  );
};
