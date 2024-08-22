'use client';

import React from 'react';
import { useTheme } from 'next-themes';

type EmbedStoryProps = {
  storyBaseURL: string;
  storyId: string;
} & React.IframeHTMLAttributes<HTMLIFrameElement>;

export const EmbedStory = ({
  storyId,
  storyBaseURL,
  ...rest
}: EmbedStoryProps) => {
  const [url, setUrl] = React.useState('');
  const { theme } = useTheme();

  React.useEffect(() => {
    if (!storyBaseURL) {
      return;
    }

    setUrl(
      `${storyBaseURL}iframe.html?args=&id=${storyId}--default&globals=theme:${theme}&viewMode=story`
    );
  }, [storyId, theme]);

  if (!url) {
    return null;
  }

  return (
    <iframe src={url} className="m-0 border-0 p-0 outline-none" {...rest} />
  );
};
