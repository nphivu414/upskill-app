import { Code } from '../content-code-block';
import KeyFeatureCodeContent from './content/typescript-generic-code.mdx';

export const TypescriptGenericThumb = () => {
  return (
    <div className='bg-content2 rounded-xl p-2 max-w-[100%] overflow-x-auto text-xs border-2 border-divider'>
      <KeyFeatureCodeContent components={{ Code }} />
    </div>
  )
}
