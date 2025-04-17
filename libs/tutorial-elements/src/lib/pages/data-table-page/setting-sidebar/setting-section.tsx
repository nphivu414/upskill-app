import React, { PropsWithChildren } from 'react';
import { Switch } from '@heroui/react';
import { motion } from 'framer-motion';

type SettingSectionProps = {
  title: string;
  icon?: React.ReactNode;
  description?: string;
} & PropsWithChildren;

export const SettingSection = ({
  title,
  icon,
  description,
  children,
}: SettingSectionProps) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const handleOnValueChange = (value: boolean) => {
    setIsEnabled(value);
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon ? (
            <div className="bg-content2 flex size-7 items-center justify-center rounded-lg">
              {icon}
            </div>
          ) : null}
          <p>{title}</p>
        </div>
        <Switch
          size="sm"
          isSelected={isEnabled}
          onValueChange={handleOnValueChange}
        />
      </div>
      {description && <p className="text-muted text-sm">{description}</p>}
      {isEnabled && children}
    </div>
  );
};
