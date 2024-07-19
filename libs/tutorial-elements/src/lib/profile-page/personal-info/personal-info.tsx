import { Avatar, Button, Link, Spacer } from '@nextui-org/react';
import { Paragraph, Subtle } from '@upskill-app/ui/web';

export const PersonalInfo = () => {
  return (
    <div className="bg-content1">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Avatar
            src="https://i.pravatar.cc/150?img=57"
            className="text-large ml-2 mt-[-40px] !size-20"
          />
          <Spacer y={1} />
          <div className="pl-4">
            <p className="text-lg font-bold">Vu Nguyen</p>
            <Subtle>@nphivu414</Subtle>
            <Spacer y={2} />
            <p className="text-sm">
              Software Engineer <Link className="text-xs">@upskill</Link>{' '}
            </p>
          </div>
        </div>
        <div className="p-2">
          <Button variant="bordered" size="sm">
            Edit profile
          </Button>
        </div>
      </div>
      <div className="p-4">
        <Paragraph>
          A tech enthusiast with a dream to create amazing products. Experienced
          in software engineering, specializing in creating websites and mobile
          apps with beautiful UI and UX.
        </Paragraph>
      </div>
    </div>
  );
};
