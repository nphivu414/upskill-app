import { env } from '@upskill-app/web-env';

export const getGithubSourceUrl = (repoName: string, path: string) => {
  return `https://github.com/upskillsdev/${repoName}/${path}`;
};

export const getStorybookUrl = (storyId: string, theme?: string) => {
  const searchParams = new URLSearchParams(`path=/story/${storyId}--default`);
  if (theme) {
    searchParams.append('globals', `theme:${theme}`);
  }
  return `${env.NEXT_PUBLIC_STORY_BASE_URL}?${searchParams.toString()}`;
};
