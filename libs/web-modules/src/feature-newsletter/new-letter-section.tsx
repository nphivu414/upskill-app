'use client';

import React from 'react';
import { Button, Input } from '@nextui-org/react';
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
        toast('Subscription Successful', {
          description: result.message,
        });
        setEmail('');
        setPreferredName('');
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast('Subscription Failed', {
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
    <div className="mx-auto w-full max-w-screen-md space-y-8 px-4 py-12 md:px-0">
      <div className="flex flex-col justify-center gap-1">
        <p className="text-3xl font-semibold">Follow Upskills.dev</p>
        <p className="text-muted text-sm">
          Stay updated with our latest tutorials and coding tips.
        </p>
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
            label="Your email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
      <p className="text-muted text-sm">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};
