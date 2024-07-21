import { Key } from 'react';
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
import { MarkdownRenderer, Subtle } from '@upskill-app/ui/web';
import {
  Bookmark,
  Ellipsis,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  SquarePen,
  Star,
  Trash,
} from 'lucide-react';

import { PostCardProps } from '../../types';
import { formatDate, getAvatarFallback } from '../../utils';

export const PostCard = ({
  postId,
  comments,
  likes,
  reposts,
  createdAt,
  content,
  authorName,
  authorUsername,
  avatar,
  onAddToHighlights,
  onChangeViewPermission,
  onDelete,
}: PostCardProps) => {
  const handleOnDropdownAction = (action: Key) => {
    switch (action) {
    case 'delete':
      onDelete?.(postId);
      break;
    case 'add':
      onAddToHighlights?.(postId);
      break;
    case 'edit':
      onChangeViewPermission?.(postId);
      break;
    default:
      break;
    }
  };

  return (
    <Card isPressable className="mb-4 last:mb-0">
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
          <DropdownMenu
            aria-label="Post actions"
            onAction={handleOnDropdownAction}
          >
            <DropdownItem
              key="delete"
              startContent={<Trash size={14} />}
              className="text-danger"
              color="danger"
            >
              Delete post
            </DropdownItem>
            <DropdownItem key="add" startContent={<Star size={14} />}>
              Add to Highlights
            </DropdownItem>
            <DropdownItem key="edit" startContent={<SquarePen size={14} />}>
              Change view permission
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <CardBody className="text-sm">
        <MarkdownRenderer>{content}</MarkdownRenderer>
      </CardBody>
      <CardFooter className="flex justify-between">
        <div className="flex justify-center">
          <Button
            size="sm"
            variant="light"
            startContent={<MessageCircle size={14} />}
          >
            {comments}
          </Button>
          <Button
            size="sm"
            variant="light"
            startContent={<Repeat2 size={14} />}
          >
            {reposts}
          </Button>
          <Button size="sm" variant="light" startContent={<Heart size={14} />}>
            {likes}
          </Button>
        </div>
        <div className="flex justify-center">
          <Button size="sm" variant="light" isIconOnly>
            <Bookmark size={14} />
          </Button>
          <Button size="sm" variant="light" isIconOnly>
            <Share size={14} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
