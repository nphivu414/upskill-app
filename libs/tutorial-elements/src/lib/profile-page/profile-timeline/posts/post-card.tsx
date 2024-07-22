import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  User,
} from '@nextui-org/react';
import { cn, MarkdownRenderer, Subtle } from '@upskill-app/ui/web';
import { Ellipsis } from 'lucide-react';

import { PostActionType, PostCardProps, PostMenuActionType } from '../../types';
import { useProfile } from '../../use-profile';
import { formatDate, getAvatarFallback } from '../../utils';
import { usePostActions, usePostMenuActions } from './use-post-actions';

export const PostCard = ({
  postId,
  createdAt,
  content,
  authorName,
  authorUsername,
  avatar,
  postActionConfig,
  postMenuActionConfig,
  className,
  ...rest
}: PostCardProps) => {
  const currentProfile = useProfile();
  const postActions = usePostActions();
  const postMenuActions = usePostMenuActions({
    isSelfPost: authorUsername === currentProfile.username,
  });

  const handleOnMenuDropdownAction = (type: PostMenuActionType) => {
    return () => postMenuActionConfig[type](postId);
  };

  const handleOnPostAction = (type: PostActionType) => {
    return () => postActionConfig[type].handler(postId);
  };

  const getPostActionContent = (type: PostActionType) => {
    switch (type) {
      case 'comment':
        return postActionConfig.comment.content;
      case 'repost':
        return postActionConfig.repost.content;
      case 'toggleLike':
        return postActionConfig.toggleLike.content;
      default:
        return null;
    }
  };

  return (
    <Card isPressable className={cn('mb-4 last:mb-0', className)} {...rest}>
      <CardHeader className="justify-between">
        <div className="flex gap-1">
          <User
            name={authorName}
            description={
              <Link href="#" size="sm" isExternal>
                {`@${authorUsername}`}
              </Link>
            }
            avatarProps={{
              src: avatar,
              fallback: getAvatarFallback(authorName),
            }}
          />
          <Subtle className="mt-1 text-xs">· {formatDate(createdAt)}</Subtle>
        </div>
        <Dropdown
          placement="bottom-end"
          classNames={{
            content: 'bg-content2',
          }}
        >
          <DropdownTrigger>
            <Button size="sm" variant="light" isIconOnly>
              <Ellipsis size={14} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            {postMenuActions.map(({ title, icon, type }) => (
              <DropdownItem
                key={type}
                aria-label={title}
                color={type === 'delete' ? 'danger' : 'default'}
                endContent={icon}
                onClick={handleOnMenuDropdownAction(type)}
              >
                {title}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <CardBody className="text-sm">
        <MarkdownRenderer>{content}</MarkdownRenderer>
      </CardBody>
      <CardFooter className="flex justify-around">
        {postActions.map(({ icon, type }) => {
          const content = getPostActionContent(type);
          return (
            <Button
              key={type}
              size="sm"
              variant="light"
              startContent={icon}
              isIconOnly={content === null}
              onClick={handleOnPostAction(type)}
            >
              {content}
            </Button>
          );
        })}
      </CardFooter>
    </Card>
  );
};
