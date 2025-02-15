import { OpenPanelComponent } from '@openpanel/nextjs';
import { env } from '@upskill-app/web-env';

export const OpenPanelAnalytics = () => {
  return (
    <OpenPanelComponent
      clientId={env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID}
      trackScreenViews={true}
      trackAttributes={true}
      // trackOutgoingLinks={true}
      // If you have a user id, you can pass it here to identify the user
      // profileId={'123'}
    />
  );
};
