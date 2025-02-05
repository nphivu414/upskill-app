import { CodeBlockProps } from '@upskill-app/shared';

import { Code } from '../content-code-block';
import KeyFeatureCodeContent from './content/typescript-generic-code.mdx';

const GenericThumbCode = (props: CodeBlockProps) => {
  return (
    <Code
      {...props}
      showCopyButton={false}
      showToolbar
      className="px-2 text-xs"
    />
  );
};

export const TypescriptGenericThumb = () => {
  return (
    <div className="bg-content2 border-divider max-w-full overflow-x-auto rounded-xl border-2 p-2">
      <KeyFeatureCodeContent components={{ Code: GenericThumbCode }} />
    </div>
  );
};
