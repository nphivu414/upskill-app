'use client';

import React from 'react';
import { Spinner } from "@heroui/react";
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
  const [loading, setLoading] = React.useState(true);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const { theme } = useTheme();

  React.useEffect(() => {
    iframeRef.current?.addEventListener('load', () => {
      setLoading(false);
    });

    return () => {
      iframeRef.current?.removeEventListener('load', () => {
        setLoading(false);
      });
    };
  });

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
    <div className="relative">
      {loading && (
        <Spinner
          color="default"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
      <iframe
        ref={iframeRef}
        src={url}
        className="m-0 rounded-lg border-0 p-0 outline-none"
        loading="lazy"
        {...rest}
      />
    </div>
  );
};
