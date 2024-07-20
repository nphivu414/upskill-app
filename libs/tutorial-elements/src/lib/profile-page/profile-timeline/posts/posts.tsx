import { Card, CardBody, CardHeader, Link, User } from '@nextui-org/react';

export const Posts = () => {
  return (
    <div className="flex flex-col">
      <Card isPressable>
        <CardHeader>
          <User
            name="Junior Garcia"
            description={
              <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                @jrgarciadev
              </Link>
            }
            avatarProps={{
              src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
            }}
          />
        </CardHeader>
        <CardBody>Post</CardBody>
      </Card>
    </div>
  );
};
