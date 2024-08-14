import { env } from './env';

export const getGithubSourceUrl = (repoName: string, path: string) => {
  return `https://github.com/upskillsdev/${repoName}/${path}`;
};

export const getStorybookUrl = (storyId: string) => {
  return `${process.env['STORY_BASE_URL']}?path=/docs/${storyId}--docs`;
};
