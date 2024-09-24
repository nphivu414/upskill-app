'use client';

import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';

export const NewsLetterSection = () => {
  const [email, setEmail] = useState('');
  const [preferredName, setPreferredName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
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
          <Button type="submit" color="primary" className="w-full md:w-1/2">
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
