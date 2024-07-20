import { ProfileStatsProps } from '../types';
import { StatsBlock } from './stats-block';

export const ProfileStats = ({
  stats: { followers, following, posts },
}: ProfileStatsProps) => {
  const formatNumber = (num: number) => {
    return Intl.NumberFormat(undefined, {
      maximumFractionDigits: 3,
    }).format(num);
  };

  return (
    <div className="bg-content1 flex justify-between p-4">
      <StatsBlock label="Followers" value={formatNumber(followers)} />
      <StatsBlock label="Following" value={formatNumber(following)} />
      <StatsBlock label="Posts" value={formatNumber(posts)} />
    </div>
  );
};
