'use client';

import React from 'react';
import { Button, Input } from '@nextui-org/react';
import { AppLogo, GridOverlay, NeonBackground } from '@upskill-app/ui/web';
import { toast } from 'sonner';

import { subscribeToNewsletter } from './action';

export const NewsLetterSection = () => {
  const [email, setEmail] = React.useState('');
  const [preferredName, setPreferredName] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await subscribeToNewsletter(email, preferredName);
      if (result.success) {
        toast.success('Subscription Successful', {
          description: result.message,
        });
        setEmail('');
        setPreferredName('');
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error('Subscription Failed', {
        description:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="newsletter" className="relative pb-12">
      <NeonBackground gradientDirection="to-t" />
      <GridOverlay />
      <div className="relative z-10 mx-auto w-full max-w-screen-md space-y-8 px-4 py-12 md:px-0">
        <div className="flex items-center gap-4">
          <div className="shrink-0">
            <AppLogo isBordered size="lg" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold lg:text-2xl">
              Follow Upskills.dev
            </p>
            <p className="text-muted text-sm">
              Stay updated with our latest tutorials and coding tips.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Input
              type="text"
              size="sm"
              label="Preferred name"
              value={preferredName}
              onChange={(e) => setPreferredName(e.target.value)}
            />
            <Input
              type="email"
              size="sm"
              label="Your email"
              value={email}
              validationBehavior="native"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              isLoading={isLoading}
              color="primary"
              className="w-full md:w-1/2"
            >
              Subscribe
            </Button>
          </div>
        </form>
        <p className="text-muted text-center text-sm lg:text-left">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};
