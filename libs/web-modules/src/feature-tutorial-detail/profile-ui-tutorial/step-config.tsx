import { StepConfig } from '../types';
import { CodeWithTabs } from './code/tutorial-code';
import FeaturePhotosCodeContent from './content/feature-photos-content.mdx';
import { IntroductionContent } from './content/introduction-content';
import ProfileInfoCodeContent from './content/profile-info-content.mdx';
import ProfileStatsContent from './content/profile-stats-content.mdx';
import ProfileTimelinePhotosContent from './content/profile-timeline-photos.mdx';
import ProfileTimelinePostsContent from './content/profile-timeline-posts.mdx';
import { Code } from './profile-content';

export const steps: StepConfig[] = [
  {
    index: 0,
    content: <IntroductionContent />,
  },
  {
    index: 1,
    content: <FeaturePhotosCodeContent components={{ CodeWithTabs, Code }} />,
  },
  {
    index: 2,
    content: <ProfileInfoCodeContent components={{ CodeWithTabs, Code }} />,
  },
  {
    index: 3,
    content: <ProfileStatsContent components={{ CodeWithTabs, Code }} />,
  },
  {
    index: 4,
    content: (
      <ProfileTimelinePostsContent components={{ CodeWithTabs, Code }} />
    ),
  },
  {
    index: 5,
    content: (
      <ProfileTimelinePhotosContent components={{ CodeWithTabs, Code }} />
    ),
  },
];
