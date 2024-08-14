import { env } from '@upskill-app/web-env';

export const getGithubSourceUrl = (repoName: string, path: string) => {
  return `https://github.com/upskillsdev/${repoName}/${path}`;
};

export const getStorybookUrl = (storyId: string) => {
  return `${env.NEXT_PUBLIC_STORY_BASE_URL}?path=/docs/${storyId}--docs`;
};
