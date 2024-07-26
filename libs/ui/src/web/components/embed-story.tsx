'use client';

import React from 'react';
import { useTheme } from 'next-themes';

type EmbedStoryProps = {
  storyId: string;
} & React.IframeHTMLAttributes<HTMLIFrameElement>;

export const EmbedStory = ({ storyId, ...rest }: EmbedStoryProps) => {
  const [url, setUrl] = React.useState('');
  const { theme } = useTheme();

  React.useEffect(() => {
    setUrl(
      `http://localhost:9009/iframe.html?args=&id=${storyId}&globals=theme:${theme}`
    );
  }, [storyId, theme]);

  if (!url) {
    return null;
  }

  return <iframe src={url} {...rest} />;
};
