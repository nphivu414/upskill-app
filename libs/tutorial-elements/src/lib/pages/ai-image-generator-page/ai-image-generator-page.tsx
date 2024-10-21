import { Heading1 } from '@upskill-app/ui/web';

import { PromptInput } from './prompt-input';
import { ResultPanel } from './result-panel';

export const AiImageGeneratorPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-none p-4">
        <Heading1>Art Generator</Heading1>
      </div>
      <ResultPanel />
      <div className="fixed bottom-0 w-full p-4">
        <PromptInput />
      </div>
    </div>
  );
};
