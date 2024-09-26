type NeonBackgroundProps = {
  gradientDirection?: 'to-b' | 'to-t';
};

export const NeonBackground = ({
  gradientDirection = 'to-b',
}: NeonBackgroundProps) => {
  return (
    <>
      <div className="bg-background absolute inset-0 opacity-60 dark:opacity-70"></div>
      {/* More colorful gradient-based neon light effect, positioned towards the top */}
      <div className="absolute inset-0">
        <div
          className={`animate-pulse-slow bg-gradient-${gradientDirection} absolute inset-0 from-blue-500/40 via-blue-400/10 to-transparent dark:from-blue-800/40 dark:via-blue-950/50`}
          style={{ backgroundPosition: '50% 20%' }}
        ></div>
        <div
          className={`animate-pulse-slow bg-gradient-${gradientDirection} absolute inset-0 from-purple-500/40 via-purple-400/10 to-transparent dark:from-purple-800/40 dark:via-purple-950/50`}
          style={{ backgroundPosition: '20% 10%', animationDelay: '-2s' }}
        ></div>
        <div
          className={`animate-pulse-slow bg-gradient-${gradientDirection} absolute inset-0 from-pink-500/40 via-pink-400/10 to-transparent dark:from-pink-800/40 dark:via-pink-950/50`}
          style={{ backgroundPosition: '80% 15%', animationDelay: '-4s' }}
        ></div>
      </div>
    </>
  );
};
