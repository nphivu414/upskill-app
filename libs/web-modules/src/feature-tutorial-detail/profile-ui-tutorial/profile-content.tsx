import React from 'react';

import { CodeWithAccoridions } from '../code-renderer';
import { Code } from '../content-code-block';
import ProfileMdx from './content/main-content.mdx';

export const ProfileContent = () => {
  return <ProfileMdx components={{ CodeWithAccoridions, Code }} />;
};
