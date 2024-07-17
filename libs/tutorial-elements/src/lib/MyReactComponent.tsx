'use client';

import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

export type PlayListCardProps = {
  title: string;
  subTitle: string;
  caption: string;
  coverPhotoUrl: string;
};

export const MyReactComponent = ({
  caption,
  coverPhotoUrl,
  subTitle,
  title,
}: PlayListCardProps) => {
  return (
    <Card className="py-4" isBlurred isPressable>
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2 md:mt-1">
        <p className="text-tiny font-bold uppercase">{title}</p>
        <small className="text-default-500">{subTitle}</small>
        <h4 className="text-large font-bold">{caption}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="rounded-xl object-cover"
          src={coverPhotoUrl}
          width={270}
        />
      </CardBody>
    </Card>
  );
};
