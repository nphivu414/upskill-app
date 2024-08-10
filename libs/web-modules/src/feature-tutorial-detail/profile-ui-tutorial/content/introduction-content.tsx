import React from 'react';
import { Image } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

export const IntroductionContent = () => {
  const { theme } = useTheme();
  const [step1ImageSrc, setStep1ImageSrc] = React.useState('');

  React.useEffect(() => {
    setStep1ImageSrc(
      theme === 'dark' ? '/startup-screen-dark.jpg' : '/startup-screen.jpg'
    );
  }, [theme]);
  return (
    <div className="flex flex-col items-center">
      <Subtle className="mb-2">
        Expected outcome after completing this step
      </Subtle>
      <Image
        src={step1ImageSrc}
        className="mx-auto w-1/2 border"
        alt="Profile UI Project Startup Screen"
      />
      <Subtle className="mt-2">(NextUI Startup Screen)</Subtle>
    </div>
  );
};
