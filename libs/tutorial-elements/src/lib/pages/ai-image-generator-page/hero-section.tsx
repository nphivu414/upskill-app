'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Generate 6 unique AI art images (reduced from 9)
    const newImages = [
      `https://66a1ae67d3806ba8755e9ebe-dtpcopadnd.chromatic.com/profile-cover.jpg`,
      `https://66a1ae67d3806ba8755e9ebe-dtpcopadnd.chromatic.com/profile-cover-2.jpg`,
      `https://66a1ae67d3806ba8755e9ebe-dtpcopadnd.chromatic.com/profile-cover-3.jpg`,
      `https://66a1ae67d3806ba8755e9ebe-dtpcopadnd.chromatic.com/profile-cover.jpg`,
      `https://66a1ae67d3806ba8755e9ebe-dtpcopadnd.chromatic.com/profile-cover-2.jpg`,
      `https://66a1ae67d3806ba8755e9ebe-dtpcopadnd.chromatic.com/profile-cover-3.jpg`,
      `https://66a1ae67d3806ba8755e9ebe-dtpcopadnd.chromatic.com/profile-cover.jpg`,
      `https://66a1ae67d3806ba8755e9ebe-dtpcopadnd.chromatic.com/profile-cover-2.jpg`,
      `https://66a1ae67d3806ba8755e9ebe-dtpcopadnd.chromatic.com/profile-cover-3.jpg`,
    ];
    setImages(newImages);
  }, []);

  return (
    <section className="bg-background relative h-[65vh] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid -rotate-12 scale-110 grid-cols-3 gap-2">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={src}
                alt={`AI generated art ${index + 1}`}
                className="size-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="bg-background/60 absolute left-0 top-0 size-full" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
        >
          Art Generator
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-muted mx-auto mb-4 max-w-md text-lg sm:text-xl"
        >
          Create stunning, unique artworks with the power of AI
        </motion.p>
      </div>
    </section>
  );
};
