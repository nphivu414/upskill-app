import { Spacer } from '@heroui/react';
import { CustomIcons } from '@upskill-app/ui/web';

import { CommunityCard } from './comunity-card';

export const CommunitySection = () => {
  return (
    <section className="w-full px-4">
      <p className="text-3xl font-bold">Upskills Community</p>
      <Spacer y={6} />
      <div className="flex flex-col items-start gap-4 md:flex-row">
        <CommunityCard
          title="Upskills"
          subtitle="upskills.dev"
          description="Join our community on Discord to get help about the tutorials and ask your questions."
          linkText="Join Discord"
          link="https://discord.gg/MvKZvDZ36T"
          icon={<CustomIcons.discord className="size-8" />}
        />
        <CommunityCard
          title="Upskills"
          subtitle="@upskillsdev"
          description="Checkout our GitHub to find the source code and submit any issues or feature requests."
          link="https://github.com/upskillsdev"
          linkText="Go to GitHub"
          icon={<CustomIcons.gitHub className="size-8" />}
        />
        <CommunityCard
          title="Vu Nguyen"
          subtitle="@nphivu414"
          description="Follow me on X to get the latest updates and news about Upskills."
          link="https://x.com/nphivu414"
          linkText="Follow me on X"
          icon={<CustomIcons.x className="size-8" />}
        />
      </div>
    </section>
  );
};
