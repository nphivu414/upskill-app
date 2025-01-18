'use client';

import React from 'react';
import { Spinner } from "@heroui/react";

import { cn } from '../utils';

type EmbedPreviewProps = {
  previewUrl: string;
} & React.IframeHTMLAttributes<HTMLIFrameElement>;

export const EmbedPreview = ({ previewUrl, ...rest }: EmbedPreviewProps) => {
  const [url, setUrl] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

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
    if (!previewUrl) {
      return;
    }
    setUrl(previewUrl);
  }, []);

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
        className={cn(
          'm-0 rounded-lg border-0 p-0 outline-none transition-opacity duration-500',
          {
            'opacity-0': loading,
          }
        )}
        loading="lazy"
        {...rest}
      />
    </div>
  );
};
