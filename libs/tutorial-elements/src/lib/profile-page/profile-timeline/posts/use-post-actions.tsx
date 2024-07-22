import {
  Bookmark,
  Flag,
  Heart,
  HeartOff,
  MessageCircle,
  Repeat2,
  Share,
  SquarePen,
  Star,
  Trash,
} from 'lucide-react';

import { PostAction, PostMenuAction } from '../../types';

const defaultIconSize = 14;

const postActions: PostAction[] = [
  {
    type: 'comment',
    icon: <MessageCircle size={defaultIconSize} />,
  },
  {
    type: 'repost',
    icon: <Repeat2 size={defaultIconSize} />,
  },
  {
    type: 'toggleLike',
    icon: <Heart size={defaultIconSize} />,
  },
  {
    type: 'bookmark',
    icon: <Bookmark size={defaultIconSize} />,
  },
  {
    type: 'share',
    icon: <Share size={defaultIconSize} />,
  },
];

const selfPostMenuActions: PostMenuAction[] = [
  {
    type: 'delete',
    title: 'Delete post',
    icon: <Trash size={defaultIconSize} />,
  },
  {
    type: 'addToHighlights',
    title: 'Add to highlights',
    icon: <Star size={defaultIconSize} />,
  },
  {
    type: 'changeViewPermission',
    title: 'Change permission',
    icon: <SquarePen size={defaultIconSize} />,
  },
];

const otherPostMenuActions: PostMenuAction[] = [
  {
    type: 'report',
    title: 'Report post',
    icon: <Flag size={defaultIconSize} />,
  },
  {
    type: 'unlike',
    title: 'Unlike post',
    icon: <HeartOff size={defaultIconSize} />,
  },
];

type UsePostMenuActionsOptions = {
  isSelfPost: boolean;
};

export const usePostMenuActions = ({
  isSelfPost,
}: UsePostMenuActionsOptions) => {
  return isSelfPost ? selfPostMenuActions : otherPostMenuActions;
};

export const usePostActions = () => {
  return postActions;
};
