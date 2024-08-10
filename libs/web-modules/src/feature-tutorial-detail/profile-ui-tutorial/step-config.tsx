import { StepConfig } from '../types';
import { CodeWithTabs } from './code/tutorial-code';
import FeaturePhotosCodeContent from './content/feature-photos-content.mdx';
import { IntroductionContent } from './content/introduction-content';
import ProfileInfoCodeContent from './content/profile-info-content.mdx';
import ProfilePageContent from './content/profile-page-content.mdx';
import ProfileStatsContent from './content/profile-stats-content.mdx';
import ProfileTimelinePhotosContent from './content/profile-timeline-photos.mdx';
import ProfileTimelinePostsContent from './content/profile-timeline-posts.mdx';
import ProfileTimelineTabsContent from './content/profile-timeline-tabs-content.mdx';
import { Code } from './profile-content';

const codeContentProps = {
  components: { CodeWithTabs, Code },
};

export const steps: StepConfig[] = [
  {
    index: 0,
    content: <IntroductionContent />,
  },
  {
    index: 1,
    content: <FeaturePhotosCodeContent {...codeContentProps} />,
  },
  {
    index: 2,
    content: <ProfileInfoCodeContent {...codeContentProps} />,
  },
  {
    index: 3,
    content: <ProfileStatsContent {...codeContentProps} />,
  },
  {
    index: 4,
    content: <ProfileTimelinePostsContent {...codeContentProps} />,
  },
  {
    index: 5,
    content: <ProfileTimelinePhotosContent {...codeContentProps} />,
  },
  {
    index: 6,
    content: <ProfileTimelineTabsContent {...codeContentProps} />,
  },
  {
    index: 7,
    content: <ProfilePageContent {...codeContentProps} />,
  },
];
